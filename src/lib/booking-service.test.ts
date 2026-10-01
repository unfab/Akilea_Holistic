import { test } from "node:test";
import assert from "node:assert/strict";
import { getAvailability, createBooking, contactKeys, type BookingDeps } from "./booking-service.ts";
import { GoogleCalendarError, type CalendarClient, type CalendarEvent, type NewEvent } from "./google-calendar.ts";
import type { Interval } from "./slots.ts";
import { TEST_GRID } from "./slots.fixture.ts";

const services = [
  { name: "Intuitivna masaža telesa", price: 85 },
  { name: "Intuitivna masaža hrbta", price: 50 },
  { name: "Intuitivna masaža trebuha", price: 50 },
];
const now = new Date("2026-10-01T10:00:00Z"); // 12:00 in Ljubljana
const at = (s: string) => Date.parse(s);
const tick = () => new Promise((r) => setImmediate(r));

interface StoredEvent extends CalendarEvent {
  props: Record<string, string>;
  summary: string;
  description: string;
}

// In-memory stand-in for the booking calendar plus Mirjana's primary calendar.
function fakeCalendar(primaryBusy: Interval[] = []) {
  const events: StoredEvent[] = [];
  let clock = 0;
  let failWith: Error | null = null;
  const guard = async () => {
    await tick();
    if (failWith) throw failWith;
  };
  const overlapsRange = (e: Interval, start: number, end?: number) => e.end > start && (end === undefined || e.start < end);
  const client: CalendarClient = {
    getAccessToken: async () => "tok",
    async freeBusy(range, calendarIds) {
      await guard();
      // With explicit ids the service asks only for the primary calendar.
      const source = calendarIds ? primaryBusy : [...primaryBusy, ...events];
      return source.filter((e) => overlapsRange(e, range.start, range.end)).map(({ start, end }) => ({ start, end }));
    },
    async insertEvent(e: NewEvent) {
      await guard();
      const stored = { id: `evt-${++clock}`, created: clock, start: e.start, end: e.end, props: e.privateProperties, summary: e.summary, description: e.description };
      events.push(stored);
      return { id: stored.id, created: stored.created };
    },
    async deleteEvent(id) {
      await guard();
      const i = events.findIndex((e) => e.id === id);
      if (i >= 0) events.splice(i, 1);
    },
    async listEvents({ start, end, privateProperty }) {
      await guard();
      return events
        .filter((e) => overlapsRange(e, start, end))
        .filter((e) => !privateProperty || e.props[privateProperty[0]] === privateProperty[1])
        .map(({ id, created, start: s, end: en }) => ({ id, created, start: s, end: en }));
    },
  };
  return { client, events, fail: (err: Error | null) => (failWith = err) };
}

const deps = (client: CalendarClient | null): BookingDeps => ({ client, now, services, otherBusyCalendarIds: ["mirjana@akilea.si"], openSlots: TEST_GRID });

const validBooking = {
  serviceId: 2,
  date: "2026-10-02",
  time: "09:00",
  name: "Test Oseba",
  email: "test@example.com",
  phone: "",
  honeypot: "",
};

// ---------- availability ----------

test("availability returns 503 when Google is not configured", async () => {
  const res = await getAvailability({ month: "2026-10", service: "2" }, deps(null));
  assert.equal(res.status, 503);
});

test("availability validates month and service", async () => {
  const cal = fakeCalendar();
  assert.equal((await getAvailability({ month: "2026-13", service: "2" }, deps(cal.client))).status, 400);
  assert.equal((await getAvailability({ month: null, service: "2" }, deps(cal.client))).status, 400);
  assert.equal((await getAvailability({ month: "2026-10", service: "9" }, deps(cal.client))).status, 400);
});

test("availability removes busy slots for the chosen service", async () => {
  const cal = fakeCalendar([{ start: at("2026-10-02T08:00:00Z"), end: at("2026-10-02T08:30:00Z") }]); // 10:00-10:30
  const long = await getAvailability({ month: "2026-10", service: "1" }, deps(cal.client));
  const short = await getAvailability({ month: "2026-10", service: "2" }, deps(cal.client));
  assert.equal(long.status, 200);
  assert.ok(long.status === 200 && short.status === 200);
  assert.deepEqual(long.body.days["2026-10-02"], ["11:00", "13:30", "16:00", "18:00"]);
  assert.deepEqual(short.body.days["2026-10-02"], ["09:00", "11:00", "13:30", "16:00", "18:00"]);
  assert.deepEqual(short.body.days["2026-10-01"], ["13:30", "16:00", "18:00"]);
});

test("availability without a service uses the shortest duration", async () => {
  const cal = fakeCalendar([{ start: at("2026-10-02T08:00:00Z"), end: at("2026-10-02T08:30:00Z") }]);
  const res = await getAvailability({ month: "2026-10", service: null }, deps(cal.client));
  assert.ok(res.status === 200);
  assert.deepEqual(res.body.days["2026-10-02"], ["09:00", "11:00", "13:30", "16:00", "18:00"]);
});

test("availability skips Google for months with nothing bookable", async () => {
  const cal = fakeCalendar();
  cal.fail(new GoogleCalendarError("should not be called"));
  const past = await getAvailability({ month: "2026-08", service: "2" }, deps(cal.client));
  assert.ok(past.status === 200);
  assert.ok(Object.values(past.body.days).every((t) => t.length === 0));
});

test("availability returns 503 when Google fails", async () => {
  const cal = fakeCalendar();
  cal.fail(new GoogleCalendarError("down"));
  assert.equal((await getAvailability({ month: "2026-10", service: "2" }, deps(cal.client))).status, 503);
});

test("availability offers only the open slots", async () => {
  const cal = fakeCalendar();
  const openSlots = { "2026-10-05": ["18:00"], "2026-10-16": ["15:00", "09:00"] };
  const res = await getAvailability({ month: "2026-10", service: "1" }, { ...deps(cal.client), openSlots });
  assert.ok(res.status === 200);
  const open = Object.entries(res.body.days).filter(([, times]) => times.length > 0);
  assert.deepEqual(open, [["2026-10-05", ["18:00"]], ["2026-10-16", ["09:00", "15:00"]]]);
});

test("a booking outside the open slots is rejected", async () => {
  const cal = fakeCalendar();
  const openSlots = { "2026-10-05": ["18:00"] };
  const closed = await createBooking({ ...validBooking, date: "2026-10-05", time: "09:00" }, { ...deps(cal.client), openSlots });
  assert.equal(closed.status, 400);
  const open = await createBooking({ ...validBooking, date: "2026-10-05", time: "18:00" }, { ...deps(cal.client), openSlots });
  assert.equal(open.status, 200);
  assert.equal(cal.events.length, 1);
});

// ---------- bookings ----------

test("a valid booking creates one calendar event with the contact details", async () => {
  const cal = fakeCalendar();
  const res = await createBooking(validBooking, deps(cal.client));
  assert.deepEqual(res, { status: 200, body: { ok: true } });
  assert.equal(cal.events.length, 1);
  const e = cal.events[0];
  assert.equal(e.start, at("2026-10-02T07:00:00Z"));
  assert.equal(e.end, at("2026-10-02T07:50:00Z"));
  assert.match(e.summary, /Intuitivna masaža hrbta/);
  assert.match(e.summary, /Test Oseba/);
  assert.match(e.description, /test@example\.com/);
  assert.equal(e.props.akileaBooking, "1");
  assert.equal(e.props.emailKey, contactKeys({ email: "test@example.com", phone: "" }).emailKey);
});

test("the honeypot silently accepts without writing to the calendar", async () => {
  const cal = fakeCalendar();
  const res = await createBooking({ ...validBooking, honeypot: "http://spam" }, deps(cal.client));
  assert.equal(res.status, 200);
  assert.equal(cal.events.length, 0);
});

test("invalid input is rejected with 400", async () => {
  const cal = fakeCalendar();
  const bad = [
    null,
    "nope",
    { ...validBooking, serviceId: 7 },
    { ...validBooking, date: "2026-02-30" },
    { ...validBooking, time: "12:00" }, // not an open slot
    { ...validBooking, time: "9am" },
    { ...validBooking, name: "   " },
    { ...validBooking, name: "x".repeat(51) },
    { ...validBooking, email: "", phone: "" },
    { ...validBooking, email: "not-an-email" },
    { ...validBooking, email: "", phone: "12" },
    { ...validBooking, date: "2026-10-01", time: "09:00" }, // already past
    { ...validBooking, date: "2027-03-01" }, // beyond the 90 day horizon
  ];
  for (const input of bad) {
    const res = await createBooking(input, deps(cal.client));
    assert.equal(res.status, 400, JSON.stringify(input));
  }
  assert.equal(cal.events.length, 0);
});

test("a slot overlapping any busy time returns 409 slot_taken", async () => {
  const cal = fakeCalendar([{ start: at("2026-10-02T07:30:00Z"), end: at("2026-10-02T08:00:00Z") }]);
  const res = await createBooking(validBooking, deps(cal.client));
  assert.deepEqual(res, { status: 409, body: { error: "slot_taken" } });
  assert.equal(cal.events.length, 0);
});

test("booking the same slot twice in a row: the second gets 409", async () => {
  const cal = fakeCalendar();
  assert.equal((await createBooking(validBooking, deps(cal.client))).status, 200);
  const second = await createBooking({ ...validBooking, email: "other@example.com" }, deps(cal.client));
  assert.equal(second.status, 409);
  assert.equal(cal.events.length, 1);
});

test("two parallel requests for one slot: exactly one wins", async () => {
  for (let round = 0; round < 20; round++) {
    const cal = fakeCalendar();
    const [a, b] = await Promise.all([
      createBooking({ ...validBooking, email: "a@example.com" }, deps(cal.client)),
      createBooking({ ...validBooking, email: "b@example.com" }, deps(cal.client)),
    ]);
    assert.deepEqual([a.status, b.status].sort(), [200, 409], `round ${round}`);
    assert.equal(cal.events.length, 1, `round ${round}`);
  }
});

test("an event added to the primary calendar during booking makes it back off", async () => {
  const primary: Interval[] = [];
  const cal = fakeCalendar(primary);
  const original = cal.client.insertEvent;
  cal.client.insertEvent = async (e) => {
    const r = await original(e);
    primary.push({ start: at("2026-10-02T07:00:00Z"), end: at("2026-10-02T08:00:00Z") });
    return r;
  };
  const res = await createBooking(validBooking, deps(cal.client));
  assert.equal(res.status, 409);
  assert.equal(cal.events.length, 0);
});

test("more than three upcoming bookings per email or phone returns 429", async () => {
  const cal = fakeCalendar();
  const times = ["09:00", "11:00", "13:30"];
  for (const time of times) {
    assert.equal((await createBooking({ ...validBooking, time }, deps(cal.client))).status, 200);
  }
  const byEmail = await createBooking({ ...validBooking, time: "16:00" }, deps(cal.client));
  assert.deepEqual(byEmail, { status: 429, body: { error: "limit" } });

  const cal2 = fakeCalendar();
  for (const time of times) {
    await createBooking({ ...validBooking, email: "", phone: "040 123 456", time }, deps(cal2.client));
  }
  const byPhone = await createBooking({ ...validBooking, email: "", phone: "+386 40 123 456", time: "16:00" }, deps(cal2.client));
  assert.equal(byPhone.status, 429);
});

test("phone and email keys are normalised", () => {
  assert.equal(contactKeys({ email: " Test@Example.com ", phone: "" }).emailKey, contactKeys({ email: "test@example.com", phone: "" }).emailKey);
  assert.equal(contactKeys({ email: "", phone: "+386 40 123 456" }).phoneKey, contactKeys({ email: "", phone: "040/123-456" }).phoneKey);
  assert.equal(contactKeys({ email: "", phone: "" }).emailKey, undefined);
});

test("Google failures before insert return 503 so the widget falls back to email", async () => {
  const cal = fakeCalendar();
  cal.fail(new GoogleCalendarError("down"));
  assert.deepEqual(await createBooking(validBooking, deps(cal.client)), { status: 503, body: { error: "unavailable" } });
});

test("503 when Google is not configured", async () => {
  assert.equal((await createBooking(validBooking, deps(null))).status, 503);
});

test("a failing post-insert check keeps the booking", async () => {
  const cal = fakeCalendar();
  const original = cal.client.insertEvent;
  cal.client.insertEvent = async (e) => {
    const r = await original(e);
    cal.fail(new GoogleCalendarError("down after insert"));
    return r;
  };
  const res = await createBooking(validBooking, deps(cal.client));
  assert.equal(res.status, 200);
  assert.equal(cal.events.length, 1);
});

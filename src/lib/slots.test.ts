import { test } from "node:test";
import assert from "node:assert/strict";
import {
  zonedDateTimeToUtc,
  slotInterval,
  overlaps,
  isSlotBookable,
  freeTimesForDay,
  monthAvailability,
  monthBounds,
  serviceDuration,
  isValidDate,
  isValidMonth,
  isSlotTime,
} from "./slots.ts";

const iso = (d: Date) => d.toISOString();
const at = (s: string) => new Date(s).getTime();

test("converts Ljubljana wall time to UTC in winter and summer", () => {
  assert.equal(iso(zonedDateTimeToUtc("2026-01-15", "09:00")), "2026-01-15T08:00:00.000Z");
  assert.equal(iso(zonedDateTimeToUtc("2026-07-15", "09:00")), "2026-07-15T07:00:00.000Z");
});

test("handles the spring DST change on 2026-03-29", () => {
  assert.equal(iso(zonedDateTimeToUtc("2026-03-28", "09:00")), "2026-03-28T08:00:00.000Z");
  assert.equal(iso(zonedDateTimeToUtc("2026-03-29", "09:00")), "2026-03-29T07:00:00.000Z");
  assert.equal(iso(zonedDateTimeToUtc("2026-03-29", "18:00")), "2026-03-29T16:00:00.000Z");
});

test("handles the autumn DST change on 2026-10-25", () => {
  assert.equal(iso(zonedDateTimeToUtc("2026-10-24", "09:00")), "2026-10-24T07:00:00.000Z");
  assert.equal(iso(zonedDateTimeToUtc("2026-10-25", "09:00")), "2026-10-25T08:00:00.000Z");
  assert.equal(iso(zonedDateTimeToUtc("2026-10-25", "18:00")), "2026-10-25T17:00:00.000Z");
});

test("slot interval covers duration plus buffer", () => {
  const i = slotInterval("2026-10-25", "09:00", 105, 15);
  assert.equal(i.start, at("2026-10-25T08:00:00Z"));
  assert.equal(i.end, at("2026-10-25T10:00:00Z"));
});

test("intervals that only touch do not overlap", () => {
  assert.equal(overlaps({ start: 0, end: 10 }, { start: 10, end: 20 }), false);
  assert.equal(overlaps({ start: 0, end: 11 }, { start: 10, end: 20 }), true);
  assert.equal(overlaps({ start: 12, end: 14 }, { start: 10, end: 20 }), true);
});

const now = new Date("2026-10-01T10:00:00Z"); // 12:00 in Ljubljana

test("a slot in the past is not bookable", () => {
  assert.equal(isSlotBookable({ date: "2026-10-01", time: "11:00", durationMin: 50, busy: [], now }), false);
  assert.equal(isSlotBookable({ date: "2026-10-01", time: "13:30", durationMin: 50, busy: [], now }), true);
});

test("lead time pushes the earliest bookable slot", () => {
  // 13:30 local = 11:30Z, 90 min after now.
  assert.equal(isSlotBookable({ date: "2026-10-01", time: "13:30", durationMin: 50, busy: [], now, leadMin: 90 }), true);
  assert.equal(isSlotBookable({ date: "2026-10-01", time: "13:30", durationMin: 50, busy: [], now, leadMin: 91 }), false);
});

test("slots beyond the booking horizon are not bookable", () => {
  assert.equal(isSlotBookable({ date: "2026-12-29", time: "09:00", durationMin: 50, busy: [], now, horizonDays: 90 }), true);
  assert.equal(isSlotBookable({ date: "2026-12-31", time: "09:00", durationMin: 50, busy: [], now, horizonDays: 90 }), false);
});

test("a busy event blocks the slot only when it overlaps the service duration", () => {
  // Busy 10:00-10:30 local on 2026-10-02 (08:00Z-08:30Z).
  const busy = [{ start: at("2026-10-02T08:00:00Z"), end: at("2026-10-02T08:30:00Z") }];
  assert.equal(isSlotBookable({ date: "2026-10-02", time: "09:00", durationMin: 105, busy, now }), false);
  assert.equal(isSlotBookable({ date: "2026-10-02", time: "09:00", durationMin: 50, busy, now }), true);
});

test("buffer extends the blocked window", () => {
  // Busy 09:50-10:00 local; a 50 min slot at 09:00 ends 09:50.
  const busy = [{ start: at("2026-10-02T07:50:00Z"), end: at("2026-10-02T08:00:00Z") }];
  assert.equal(isSlotBookable({ date: "2026-10-02", time: "09:00", durationMin: 50, busy, now, bufferMin: 0 }), true);
  assert.equal(isSlotBookable({ date: "2026-10-02", time: "09:00", durationMin: 50, busy, now, bufferMin: 5 }), false);
});

test("free times for a day drop overlapping and past slots", () => {
  const busy = [{ start: at("2026-10-01T14:00:00Z"), end: at("2026-10-01T15:00:00Z") }]; // 16:00-17:00 local
  assert.deepEqual(freeTimesForDay("2026-10-01", 50, busy, now), ["13:30", "18:00"]);
});

test("month availability covers every day and greys out full days", () => {
  const allDay = [{ start: at("2026-10-05T22:00:00Z"), end: at("2026-10-06T22:00:00Z") }]; // all of 6 Oct local
  const days = monthAvailability("2026-10", 50, allDay, now);
  assert.equal(Object.keys(days).length, 31);
  assert.deepEqual(days["2026-09-30"], undefined);
  assert.deepEqual(days["2026-10-01"], ["13:30", "16:00", "18:00"]);
  assert.deepEqual(days["2026-10-06"], []);
  assert.deepEqual(days["2026-10-25"], ["09:00", "11:00", "13:30", "16:00", "18:00"]);
});

test("month availability is empty past the horizon", () => {
  const days = monthAvailability("2027-02", 50, [], now, { horizonDays: 90 });
  assert.ok(Object.values(days).every((times) => times.length === 0));
});

test("month bounds follow local midnight across DST", () => {
  const b = monthBounds("2026-10");
  assert.equal(b.start, at("2026-09-30T22:00:00Z"));
  assert.equal(b.end, at("2026-10-31T23:00:00Z"));
});

test("service durations match the service list", () => {
  assert.equal(serviceDuration(1), 105);
  assert.equal(serviceDuration(2), 50);
  assert.equal(serviceDuration(3), 50);
  assert.equal(serviceDuration(0), null);
  assert.equal(serviceDuration(4), null);
  assert.equal(serviceDuration(1.5), null);
});

test("input validators", () => {
  assert.equal(isValidDate("2026-10-15"), true);
  assert.equal(isValidDate("2026-02-30"), false);
  assert.equal(isValidDate("2026-1-5"), false);
  assert.equal(isValidMonth("2026-10"), true);
  assert.equal(isValidMonth("2026-13"), false);
  assert.equal(isSlotTime("13:30"), true);
  assert.equal(isSlotTime("12:00"), false);
});

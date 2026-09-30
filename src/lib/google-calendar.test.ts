import { test } from "node:test";
import assert from "node:assert/strict";
import { generateKeyPairSync, verify } from "node:crypto";
import { createCalendarClient, readGoogleConfig, GoogleCalendarError, type GoogleConfig } from "./google-calendar.ts";

const { privateKey, publicKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
const pem = privateKey.export({ type: "pkcs8", format: "pem" }).toString();

const config: GoogleConfig = {
  clientEmail: "booking@akilea-test.iam.gserviceaccount.com",
  privateKey: pem,
  bookingCalendarId: "booking@group.calendar.google.com",
  busyCalendarIds: ["mirjana@akilea.si", "booking@group.calendar.google.com"],
};

interface Call {
  url: string;
  method: string;
  headers: Record<string, string>;
  body: string | undefined;
}

// Fake fetch: records calls and answers from a list of handlers.
function fakeFetch(handler: (call: Call) => { status?: number; json?: unknown }) {
  const calls: Call[] = [];
  const fn = async (input: string | URL | Request, init: RequestInit = {}) => {
    const call: Call = {
      url: String(input),
      method: init.method ?? "GET",
      headers: Object.fromEntries(new Headers(init.headers).entries()),
      body: typeof init.body === "string" ? init.body : init.body ? String(init.body) : undefined,
    };
    calls.push(call);
    const { status = 200, json } = handler(call);
    return new Response(json === undefined ? null : JSON.stringify(json), { status });
  };
  return { fn: fn as typeof fetch, calls };
}

const TOKEN_URL = "https://oauth2.googleapis.com/token";

function withToken(rest: (call: Call) => { status?: number; json?: unknown }) {
  return (call: Call) =>
    call.url === TOKEN_URL ? { json: { access_token: "tok-1", expires_in: 3600 } } : rest(call);
}

test("readGoogleConfig returns null until every variable is set", () => {
  assert.equal(readGoogleConfig({}), null);
  assert.equal(
    readGoogleConfig({ GOOGLE_SERVICE_ACCOUNT_EMAIL: "a", GOOGLE_PRIVATE_KEY: "b", GOOGLE_BOOKING_CALENDAR_ID: "c" }),
    null,
  );
  const cfg = readGoogleConfig({
    GOOGLE_SERVICE_ACCOUNT_EMAIL: "sa@x.iam.gserviceaccount.com",
    GOOGLE_PRIVATE_KEY: "-----BEGIN PRIVATE KEY-----\\nabc\\n-----END PRIVATE KEY-----\\n",
    GOOGLE_BOOKING_CALENDAR_ID: "booking@group",
    GOOGLE_BUSY_CALENDAR_IDS: " primary@x , booking@group ,",
  });
  assert.ok(cfg);
  assert.equal(cfg.privateKey, "-----BEGIN PRIVATE KEY-----\nabc\n-----END PRIVATE KEY-----\n");
  assert.deepEqual(cfg.busyCalendarIds, ["primary@x", "booking@group"]);
});

test("getAccessToken sends a valid RS256 service-account JWT", async () => {
  const f = fakeFetch(withToken(() => ({ status: 500 })));
  const now = 1_790_000_000_000;
  const client = createCalendarClient(config, { fetch: f.fn, now: () => now });

  assert.equal(await client.getAccessToken(), "tok-1");
  const call = f.calls[0];
  assert.equal(call.url, TOKEN_URL);
  assert.equal(call.method, "POST");
  const form = new URLSearchParams(call.body);
  assert.equal(form.get("grant_type"), "urn:ietf:params:oauth:grant-type:jwt-bearer");

  const [h, c, s] = form.get("assertion")!.split(".");
  const header = JSON.parse(Buffer.from(h, "base64url").toString());
  const claims = JSON.parse(Buffer.from(c, "base64url").toString());
  assert.deepEqual(header, { alg: "RS256", typ: "JWT" });
  assert.equal(claims.iss, config.clientEmail);
  assert.equal(claims.aud, TOKEN_URL);
  assert.equal(claims.scope, "https://www.googleapis.com/auth/calendar");
  assert.equal(claims.iat, now / 1000);
  assert.equal(claims.exp, now / 1000 + 3600);
  assert.ok(verify("RSA-SHA256", Buffer.from(`${h}.${c}`), publicKey, Buffer.from(s, "base64url")));
});

test("getAccessToken caches the token until shortly before expiry", async () => {
  const f = fakeFetch(withToken(() => ({ status: 500 })));
  let now = 1_790_000_000_000;
  const client = createCalendarClient(config, { fetch: f.fn, now: () => now });
  await client.getAccessToken();
  await client.getAccessToken();
  assert.equal(f.calls.length, 1);
  now += 3600_000;
  await client.getAccessToken();
  assert.equal(f.calls.length, 2);
});

test("getAccessToken throws GoogleCalendarError when Google refuses", async () => {
  const f = fakeFetch(() => ({ status: 400, json: { error: "invalid_grant" } }));
  const client = createCalendarClient(config, { fetch: f.fn });
  await assert.rejects(client.getAccessToken(), GoogleCalendarError);
});

test("freeBusy queries every busy calendar and returns all intervals", async () => {
  const f = fakeFetch(
    withToken(() => ({
      json: {
        calendars: {
          "mirjana@akilea.si": { busy: [{ start: "2026-10-02T08:00:00Z", end: "2026-10-02T09:00:00Z" }] },
          "booking@group.calendar.google.com": { busy: [{ start: "2026-10-03T07:00:00Z", end: "2026-10-03T07:50:00Z" }] },
        },
      },
    })),
  );
  const client = createCalendarClient(config, { fetch: f.fn });
  const busy = await client.freeBusy({ start: Date.parse("2026-10-01T00:00:00Z"), end: Date.parse("2026-11-01T00:00:00Z") });

  const call = f.calls[1];
  assert.equal(call.url, "https://www.googleapis.com/calendar/v3/freeBusy");
  assert.equal(call.method, "POST");
  assert.equal(call.headers.authorization, "Bearer tok-1");
  assert.deepEqual(JSON.parse(call.body!), {
    timeMin: "2026-10-01T00:00:00.000Z",
    timeMax: "2026-11-01T00:00:00.000Z",
    items: [{ id: "mirjana@akilea.si" }, { id: "booking@group.calendar.google.com" }],
  });
  assert.deepEqual(busy, [
    { start: Date.parse("2026-10-02T08:00:00Z"), end: Date.parse("2026-10-02T09:00:00Z") },
    { start: Date.parse("2026-10-03T07:00:00Z"), end: Date.parse("2026-10-03T07:50:00Z") },
  ]);
});

test("freeBusy fails instead of reporting free time when a calendar is not readable", async () => {
  const f = fakeFetch(
    withToken(() => ({
      json: {
        calendars: {
          "mirjana@akilea.si": { errors: [{ domain: "global", reason: "notFound" }], busy: [] },
          "booking@group.calendar.google.com": { busy: [] },
        },
      },
    })),
  );
  const client = createCalendarClient(config, { fetch: f.fn });
  await assert.rejects(client.freeBusy({ start: 0, end: 1 }), GoogleCalendarError);
});

test("insertEvent writes to the booking calendar with private properties", async () => {
  const f = fakeFetch(withToken(() => ({ json: { id: "evt-1", created: "2026-10-01T10:00:00.000Z" } })));
  const client = createCalendarClient(config, { fetch: f.fn });
  const event = await client.insertEvent({
    summary: "Intuitivna masaža hrbta – Test Oseba",
    description: "Telefon: 040 123 456",
    start: Date.parse("2026-10-02T07:00:00Z"),
    end: Date.parse("2026-10-02T07:50:00Z"),
    privateProperties: { akileaBooking: "1", emailKey: "abc" },
  });

  const call = f.calls[1];
  assert.equal(call.method, "POST");
  assert.equal(call.url, "https://www.googleapis.com/calendar/v3/calendars/booking%40group.calendar.google.com/events");
  const body = JSON.parse(call.body!);
  assert.deepEqual(body.start, { dateTime: "2026-10-02T07:00:00.000Z", timeZone: "Europe/Ljubljana" });
  assert.deepEqual(body.end, { dateTime: "2026-10-02T07:50:00.000Z", timeZone: "Europe/Ljubljana" });
  assert.deepEqual(body.extendedProperties, { private: { akileaBooking: "1", emailKey: "abc" } });
  assert.equal(body.summary, "Intuitivna masaža hrbta – Test Oseba");
  assert.deepEqual(event, { id: "evt-1", created: Date.parse("2026-10-01T10:00:00.000Z") });
});

test("listEvents filters by private property and converts all-day events", async () => {
  const f = fakeFetch(
    withToken(() => ({
      json: {
        items: [
          { id: "a", created: "2026-10-01T10:00:00Z", start: { dateTime: "2026-10-02T09:00:00+02:00" }, end: { dateTime: "2026-10-02T09:50:00+02:00" } },
          { id: "b", created: "2026-10-01T11:00:00Z", start: { date: "2026-10-06" }, end: { date: "2026-10-07" } },
        ],
      },
    })),
  );
  const client = createCalendarClient(config, { fetch: f.fn });
  const events = await client.listEvents({ start: Date.parse("2026-10-01T00:00:00Z"), privateProperty: ["emailKey", "abc"] });

  const url = new URL(f.calls[1].url);
  assert.equal(url.pathname, "/calendar/v3/calendars/booking%40group.calendar.google.com/events");
  assert.equal(url.searchParams.get("timeMin"), "2026-10-01T00:00:00.000Z");
  assert.equal(url.searchParams.get("timeMax"), null);
  assert.equal(url.searchParams.get("singleEvents"), "true");
  assert.equal(url.searchParams.get("privateExtendedProperty"), "emailKey=abc");
  assert.deepEqual(events, [
    { id: "a", created: Date.parse("2026-10-01T10:00:00Z"), start: Date.parse("2026-10-02T07:00:00Z"), end: Date.parse("2026-10-02T07:50:00Z") },
    { id: "b", created: Date.parse("2026-10-01T11:00:00Z"), start: Date.parse("2026-10-05T22:00:00Z"), end: Date.parse("2026-10-06T22:00:00Z") },
  ]);
});

test("deleteEvent treats an already deleted event as success", async () => {
  const f = fakeFetch(withToken(() => ({ status: 410 })));
  const client = createCalendarClient(config, { fetch: f.fn });
  await client.deleteEvent("evt-1");
  assert.equal(f.calls[1].method, "DELETE");
  assert.equal(f.calls[1].url, "https://www.googleapis.com/calendar/v3/calendars/booking%40group.calendar.google.com/events/evt-1");
});

test("network failures surface as GoogleCalendarError", async () => {
  const failing = (async () => {
    throw new TypeError("fetch failed");
  }) as typeof fetch;
  const client = createCalendarClient(config, { fetch: failing });
  await assert.rejects(client.freeBusy({ start: 0, end: 1 }), GoogleCalendarError);
});

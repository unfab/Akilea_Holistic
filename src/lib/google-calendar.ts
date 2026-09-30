// Minimal Google Calendar client: service-account JWT (RS256 via node:crypto)
// and plain REST calls. No googleapis dependency.
//
// Auth sits behind getAccessToken(), so switching to an OAuth refresh token
// (Plan B in IMPLEMENTATION_PLAN.md) only touches that function.

import { sign } from "node:crypto";
import { TIME_ZONE } from "../config/booking.ts";
import { zonedDateTimeToUtc, type Interval } from "./slots.ts";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const API = "https://www.googleapis.com/calendar/v3";
const SCOPE = "https://www.googleapis.com/auth/calendar";
const TOKEN_LIFETIME_S = 3600;
const TOKEN_REFRESH_MARGIN_MS = 60_000;
const DEFAULT_TIMEOUT_MS = 5000;

export interface GoogleConfig {
  clientEmail: string;
  privateKey: string;
  bookingCalendarId: string;
  busyCalendarIds: string[];
}

export interface CalendarEvent extends Interval {
  id: string;
  created: number;
}

export interface NewEvent extends Interval {
  summary: string;
  description: string;
  privateProperties: Record<string, string>;
}

export interface ClientOptions {
  fetch?: typeof fetch;
  now?: () => number;
  timeoutMs?: number;
}

export class GoogleCalendarError extends Error {
  readonly status: number | undefined;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "GoogleCalendarError";
    this.status = status;
  }
}

type Env = Record<string, string | undefined>;

// Returns null when the integration is not configured; callers then fall back
// to email-only booking.
export function readGoogleConfig(env: Env = process.env): GoogleConfig | null {
  const clientEmail = env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const bookingCalendarId = env.GOOGLE_BOOKING_CALENDAR_ID?.trim();
  const busyCalendarIds = (env.GOOGLE_BUSY_CALENDAR_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
  if (!clientEmail || !privateKey || !bookingCalendarId || busyCalendarIds.length === 0) return null;
  return { clientEmail, privateKey, bookingCalendarId, busyCalendarIds };
}

function base64url(value: string | Buffer): string {
  return Buffer.from(value).toString("base64url");
}

function toMs(value: { dateTime?: string; date?: string } | undefined): number {
  if (value?.dateTime) return Date.parse(value.dateTime);
  if (value?.date) return zonedDateTimeToUtc(value.date, "00:00").getTime();
  return NaN;
}

export function createCalendarClient(config: GoogleConfig, options: ClientOptions = {}) {
  const fetchImpl = options.fetch ?? globalThis.fetch;
  const now = options.now ?? Date.now;
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  let cached: { token: string; expiresAt: number } | null = null;

  async function request(url: string, init: RequestInit, allowStatus: number[] = []): Promise<Response> {
    let res: Response;
    try {
      res = await fetchImpl(url, { ...init, signal: AbortSignal.timeout(timeoutMs) });
    } catch (err) {
      throw new GoogleCalendarError(`Google request failed: ${err instanceof Error ? err.message : String(err)}`);
    }
    if (!res.ok && !allowStatus.includes(res.status)) {
      const detail = await res.text().catch(() => "");
      throw new GoogleCalendarError(`Google responded ${res.status}: ${detail.slice(0, 200)}`, res.status);
    }
    return res;
  }

  async function getAccessToken(): Promise<string> {
    if (cached && now() < cached.expiresAt - TOKEN_REFRESH_MARGIN_MS) return cached.token;

    const iat = Math.floor(now() / 1000);
    const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
    const claims = base64url(
      JSON.stringify({ iss: config.clientEmail, scope: SCOPE, aud: TOKEN_URL, iat, exp: iat + TOKEN_LIFETIME_S }),
    );
    let signature: string;
    try {
      signature = base64url(sign("RSA-SHA256", Buffer.from(`${header}.${claims}`), config.privateKey));
    } catch {
      throw new GoogleCalendarError("GOOGLE_PRIVATE_KEY is not a valid private key");
    }

    const res = await request(TOKEN_URL, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: `${header}.${claims}.${signature}`,
      }).toString(),
    });
    const data = (await res.json()) as { access_token?: string; expires_in?: number };
    if (!data.access_token) throw new GoogleCalendarError("Token response without access_token");
    cached = { token: data.access_token, expiresAt: now() + (data.expires_in ?? TOKEN_LIFETIME_S) * 1000 };
    return cached.token;
  }

  async function authed(url: string, init: RequestInit = {}, allowStatus: number[] = []): Promise<Response> {
    const token = await getAccessToken();
    return request(
      url,
      { ...init, headers: { ...(init.headers as Record<string, string>), authorization: `Bearer ${token}` } },
      allowStatus,
    );
  }

  function eventsUrl(eventId?: string): string {
    const base = `${API}/calendars/${encodeURIComponent(config.bookingCalendarId)}/events`;
    return eventId ? `${base}/${encodeURIComponent(eventId)}` : base;
  }

  // Busy intervals across all busy calendars. Throws if any calendar cannot be
  // read, so an unshared calendar never looks free.
  async function freeBusy(range: Interval, calendarIds: string[] = config.busyCalendarIds): Promise<Interval[]> {
    const res = await authed(`${API}/freeBusy`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        timeMin: new Date(range.start).toISOString(),
        timeMax: new Date(range.end).toISOString(),
        items: calendarIds.map((id) => ({ id })),
      }),
    });
    const data = (await res.json()) as {
      calendars?: Record<string, { busy?: { start: string; end: string }[]; errors?: unknown[] }>;
    };
    const busy: Interval[] = [];
    for (const id of calendarIds) {
      const cal = data.calendars?.[id];
      if (!cal || (cal.errors && cal.errors.length > 0)) {
        throw new GoogleCalendarError(`Calendar not readable: ${id}`);
      }
      for (const b of cal.busy ?? []) busy.push({ start: Date.parse(b.start), end: Date.parse(b.end) });
    }
    return busy;
  }

  async function insertEvent(event: NewEvent): Promise<{ id: string; created: number }> {
    const res = await authed(eventsUrl(), {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        summary: event.summary,
        description: event.description,
        start: { dateTime: new Date(event.start).toISOString(), timeZone: TIME_ZONE },
        end: { dateTime: new Date(event.end).toISOString(), timeZone: TIME_ZONE },
        extendedProperties: { private: event.privateProperties },
      }),
    });
    const data = (await res.json()) as { id?: string; created?: string };
    if (!data.id) throw new GoogleCalendarError("Insert response without event id");
    return { id: data.id, created: Date.parse(data.created ?? "") };
  }

  async function deleteEvent(eventId: string): Promise<void> {
    await authed(eventsUrl(eventId), { method: "DELETE" }, [404, 410]);
  }

  // Events on the booking calendar starting from `start` (and before `end`).
  async function listEvents(query: {
    start: number;
    end?: number;
    privateProperty?: [string, string];
  }): Promise<CalendarEvent[]> {
    const params = new URLSearchParams({
      timeMin: new Date(query.start).toISOString(),
      singleEvents: "true",
      showDeleted: "false",
      maxResults: "250",
    });
    if (query.end !== undefined) params.set("timeMax", new Date(query.end).toISOString());
    if (query.privateProperty) params.set("privateExtendedProperty", query.privateProperty.join("="));

    const res = await authed(`${eventsUrl()}?${params}`);
    const data = (await res.json()) as {
      items?: { id: string; created?: string; start?: { dateTime?: string; date?: string }; end?: { dateTime?: string; date?: string } }[];
    };
    return (data.items ?? []).map((item) => ({
      id: item.id,
      created: Date.parse(item.created ?? ""),
      start: toMs(item.start),
      end: toMs(item.end),
    }));
  }

  return { getAccessToken, freeBusy, insertEvent, deleteEvent, listEvents };
}

export type CalendarClient = ReturnType<typeof createCalendarClient>;

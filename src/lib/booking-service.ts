// Booking logic behind /api/availability and /api/bookings. Framework-free so
// it runs under node --test with an injected calendar client and clock.

import { createHash } from "node:crypto";
import {
  BOOKING_HORIZON_DAYS,
  BUFFER_MINUTES,
  MAX_UPCOMING_BOOKINGS_PER_CONTACT,
  MIN_LEAD_MINUTES,
  SERVICE_DURATIONS_MIN,
} from "../config/booking.ts";
import { GoogleCalendarError, type CalendarClient, type CalendarEvent } from "./google-calendar.ts";
import {
  isSlotBookable,
  isValidDate,
  isValidTime,
  isValidMonth,
  monthAvailability,
  monthBounds,
  overlaps,
  serviceDuration,
  slotInterval,
  type Interval,
  type OpenSlots,
} from "./slots.ts";

export interface ServiceInfo {
  name: string;
  price: number;
}

export interface BookingDeps {
  client: CalendarClient | null;
  now: Date;
  services: readonly ServiceInfo[];
  // Busy calendars other than the booking calendar (e.g. Mirjana's primary).
  // Only free/busy is visible there, and our own inserts never land there.
  otherBusyCalendarIds?: readonly string[];
  // Defaults to OPEN_SLOTS from the booking config.
  openSlots?: OpenSlots;
}

type Result<T> = { status: 200; body: T } | { status: 400 | 409 | 429 | 503; body: { error: string } };

const MINUTE_MS = 60_000;
const DAY_MS = 24 * 60 * MINUTE_MS;
const NAME_MAX = 50;
const EMAIL_MAX = 60;
const PHONE_MAX = 20;
const PHONE_MIN_DIGITS = 6;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()/.\-\s]+$/;

const unavailable = { status: 503, body: { error: "unavailable" } } as const;
const invalid = { status: 400, body: { error: "invalid" } } as const;
const slotTaken = { status: 409, body: { error: "slot_taken" } } as const;

// ---------- availability ----------

export async function getAvailability(
  query: { month: string | null; service: string | null },
  deps: BookingDeps,
): Promise<Result<{ month: string; days: Record<string, string[]> }>> {
  const { month } = query;
  if (!month || !isValidMonth(month)) return invalid;

  let durationMin = Math.min(...SERVICE_DURATIONS_MIN);
  if (query.service !== null && query.service !== "") {
    const d = serviceDuration(Number(query.service));
    if (d === null) return invalid;
    durationMin = d;
  }
  if (!deps.client) return unavailable;

  const range = monthBounds(month);
  const nowMs = deps.now.getTime();
  const nothingBookable = range.end <= nowMs + MIN_LEAD_MINUTES * MINUTE_MS || range.start >= nowMs + BOOKING_HORIZON_DAYS * DAY_MS;
  let busy: Interval[] = [];
  if (!nothingBookable) {
    try {
      busy = await deps.client.freeBusy(range);
    } catch (err) {
      if (!(err instanceof GoogleCalendarError)) throw err;
      console.error("availability: Google Calendar unavailable:", err.message);
      return unavailable;
    }
  }
  return { status: 200, body: { month, days: monthAvailability(month, durationMin, busy, deps.now, { openSlots: deps.openSlots }) } };
}

// ---------- bookings ----------

interface BookingRequest {
  serviceId: number;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  honeypot: string;
}

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function parseBooking(input: unknown): BookingRequest | null {
  if (!input || typeof input !== "object") return null;
  const o = input as Record<string, unknown>;
  const req: BookingRequest = {
    serviceId: typeof o.serviceId === "number" ? o.serviceId : Number.NaN,
    date: str(o.date),
    time: str(o.time),
    name: str(o.name),
    email: str(o.email),
    phone: str(o.phone),
    honeypot: str(o.honeypot),
  };
  if (serviceDuration(req.serviceId) === null) return null;
  if (!isValidDate(req.date) || !isValidTime(req.time)) return null;
  if (!req.name || req.name.length > NAME_MAX) return null;
  if (!req.email && !req.phone) return null;
  if (req.email && (req.email.length > EMAIL_MAX || !EMAIL_RE.test(req.email))) return null;
  if (req.phone) {
    const digits = req.phone.replace(/\D/g, "");
    if (req.phone.length > PHONE_MAX || !PHONE_RE.test(req.phone) || digits.length < PHONE_MIN_DIGITS) return null;
  }
  return req;
}

function hashKey(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 32);
}

function normalisePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("00386")) return `0${digits.slice(5)}`;
  if (digits.startsWith("386")) return `0${digits.slice(3)}`;
  return digits;
}

// Hashed lookup keys stored on the event, used for the per-contact limit.
export function contactKeys({ email, phone }: { email: string; phone: string }): { emailKey?: string; phoneKey?: string } {
  const keys: { emailKey?: string; phoneKey?: string } = {};
  const e = email.trim().toLowerCase();
  const p = normalisePhone(phone);
  if (e) keys.emailKey = hashKey(`email:${e}`);
  if (p) keys.phoneKey = hashKey(`phone:${p}`);
  return keys;
}

async function upcomingCount(client: CalendarClient, now: Date, key: [string, string]): Promise<number> {
  const events = await client.listEvents({ start: now.getTime(), privateProperty: key });
  return events.length;
}

// Earliest created event wins a tie; ids break equal timestamps. Every racing
// request sorts the same set the same way, so exactly one keeps its event.
function winsAgainst(mine: CalendarEvent, other: CalendarEvent): boolean {
  const comparable = Number.isFinite(mine.created) && Number.isFinite(other.created);
  if (comparable && mine.created !== other.created) return mine.created < other.created;
  return mine.id < other.id;
}

function describe(req: BookingRequest, service: ServiceInfo): { summary: string; description: string } {
  return {
    summary: `${service.name} – ${req.name}`,
    description: [
      `Ime: ${req.name}`,
      `Telefon: ${req.phone || "Ni vpisana"}`,
      `Email: ${req.email || "Ni vpisan"}`,
      `Storitev: ${service.name}`,
      `Cena: ${service.price}€`,
    ].join("\n"),
  };
}

export async function createBooking(input: unknown, deps: BookingDeps): Promise<Result<{ ok: true }>> {
  const req = parseBooking(input);
  if (!req) return invalid;
  // Bots fill the hidden field; pretend success and write nothing.
  if (req.honeypot) return { status: 200, body: { ok: true } };

  const service = deps.services[req.serviceId - 1];
  const durationMin = serviceDuration(req.serviceId)!;
  if (!service) return invalid;
  if (!isSlotBookable({ date: req.date, time: req.time, durationMin, busy: [], now: deps.now, openSlots: deps.openSlots })) return invalid;
  const { client } = deps;
  if (!client) return unavailable;

  const slot = slotInterval(req.date, req.time, durationMin, BUFFER_MINUTES);
  const keys = contactKeys(req);
  let inserted: CalendarEvent | null = null;

  try {
    for (const [name, value] of Object.entries(keys)) {
      if ((await upcomingCount(client, deps.now, [name, value])) >= MAX_UPCOMING_BOOKINGS_PER_CONTACT) {
        return { status: 429, body: { error: "limit" } };
      }
    }

    const busy = await client.freeBusy(slot);
    if (busy.some((b) => overlaps(slot, b))) return slotTaken;

    const { summary, description } = describe(req, service);
    const created = await client.insertEvent({
      start: slot.start,
      end: slot.start + durationMin * MINUTE_MS,
      summary,
      description,
      privateProperties: { akileaBooking: "1", ...keys },
    });
    inserted = { id: created.id, created: created.created, start: slot.start, end: slot.end };

    // Post-insert check: another booking may have landed between the check
    // and the insert. Only the earliest one keeps its event.
    const sameSlot = await client.listEvents({ start: slot.start, end: slot.end });
    const mine = sameSlot.find((e) => e.id === inserted!.id) ?? inserted;
    const rivals = sameSlot.filter((e) => e.id !== mine.id && overlaps(slot, e));
    const otherIds = [...(deps.otherBusyCalendarIds ?? [])];
    const others = otherIds.length > 0 ? await client.freeBusy(slot, otherIds) : [];
    const primaryConflict = others.some((b) => overlaps(slot, b));

    if (primaryConflict || rivals.some((r) => !winsAgainst(mine, r))) {
      try {
        await client.deleteEvent(mine.id);
      } catch (err) {
        console.error("booking: lost the slot but could not remove own event", mine.id, err);
      }
      return slotTaken;
    }
    return { status: 200, body: { ok: true } };
  } catch (err) {
    if (!(err instanceof GoogleCalendarError)) throw err;
    console.error("bookings: Google Calendar error:", err.message);
    // The event exists, so the booking is recorded; do not make the customer retry.
    if (inserted) return { status: 200, body: { ok: true } };
    return unavailable;
  }
}

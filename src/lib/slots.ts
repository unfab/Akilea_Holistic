// Pure slot logic. All intervals are epoch milliseconds, half-open [start, end).
// Wall-clock dates and times are Europe/Ljubljana unless stated otherwise.

import {
  BOOKING_HORIZON_DAYS,
  BUFFER_MINUTES,
  MIN_LEAD_MINUTES,
  SERVICE_DURATIONS_MIN,
  SLOT_TIMES,
  TIME_ZONE,
} from "../config/booking.ts";

export interface Interval {
  start: number;
  end: number;
}

export interface SlotRules {
  leadMin?: number;
  horizonDays?: number;
  bufferMin?: number;
}

const MINUTE_MS = 60_000;
const DAY_MS = 24 * 60 * MINUTE_MS;

const formatters = new Map<string, Intl.DateTimeFormat>();

function formatterFor(timeZone: string): Intl.DateTimeFormat {
  let dtf = formatters.get(timeZone);
  if (!dtf) {
    dtf = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    formatters.set(timeZone, dtf);
  }
  return dtf;
}

// Offset of `timeZone` from UTC at `instant`, in ms (e.g. +2h in CEST).
function tzOffsetMs(timeZone: string, instant: number): number {
  const parts: Record<string, number> = {};
  for (const p of formatterFor(timeZone).formatToParts(new Date(instant))) {
    if (p.type !== "literal") parts[p.type] = Number(p.value);
  }
  const asUtc = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
  return asUtc - Math.floor(instant / 1000) * 1000;
}

export function zonedDateTimeToUtc(date: string, time: string, timeZone: string = TIME_ZONE): Date {
  const [y, m, d] = date.split("-").map(Number);
  const [h, min] = time.split(":").map(Number);
  const wall = Date.UTC(y, m - 1, d, h, min);
  // First guess uses the offset at the wall time read as UTC; the second pass
  // corrects it when a DST change falls between the two instants.
  const guess = wall - tzOffsetMs(timeZone, wall);
  return new Date(wall - tzOffsetMs(timeZone, guess));
}

export function slotInterval(date: string, time: string, durationMin: number, bufferMin: number = BUFFER_MINUTES): Interval {
  const start = zonedDateTimeToUtc(date, time).getTime();
  return { start, end: start + (durationMin + bufferMin) * MINUTE_MS };
}

export function overlaps(a: Interval, b: Interval): boolean {
  return a.start < b.end && b.start < a.end;
}

export interface SlotCheck extends SlotRules {
  date: string;
  time: string;
  durationMin: number;
  busy: readonly Interval[];
  now: Date;
}

export function isSlotBookable({
  date,
  time,
  durationMin,
  busy,
  now,
  leadMin = MIN_LEAD_MINUTES,
  horizonDays = BOOKING_HORIZON_DAYS,
  bufferMin = BUFFER_MINUTES,
}: SlotCheck): boolean {
  const slot = slotInterval(date, time, durationMin, bufferMin);
  const nowMs = now.getTime();
  if (slot.start < nowMs + leadMin * MINUTE_MS) return false;
  if (slot.start >= nowMs + horizonDays * DAY_MS) return false;
  return !busy.some((b) => overlaps(slot, b));
}

export function freeTimesForDay(
  date: string,
  durationMin: number,
  busy: readonly Interval[],
  now: Date,
  rules: SlotRules = {},
): string[] {
  return SLOT_TIMES.filter((time) => isSlotBookable({ date, time, durationMin, busy, now, ...rules }));
}

function daysInMonth(month: string): number {
  const [y, m] = month.split("-").map(Number);
  return new Date(Date.UTC(y, m, 0)).getUTCDate();
}

function nextMonth(month: string): string {
  const [y, m] = month.split("-").map(Number);
  return m === 12 ? `${y + 1}-01` : `${y}-${String(m + 1).padStart(2, "0")}`;
}

export function monthAvailability(
  month: string,
  durationMin: number,
  busy: readonly Interval[],
  now: Date,
  rules: SlotRules = {},
): Record<string, string[]> {
  const days: Record<string, string[]> = {};
  for (let d = 1; d <= daysInMonth(month); d++) {
    const date = `${month}-${String(d).padStart(2, "0")}`;
    days[date] = freeTimesForDay(date, durationMin, busy, now, rules);
  }
  return days;
}

// UTC range covering the whole local month, for the free/busy query.
export function monthBounds(month: string): Interval {
  return {
    start: zonedDateTimeToUtc(`${month}-01`, "00:00").getTime(),
    end: zonedDateTimeToUtc(`${nextMonth(month)}-01`, "00:00").getTime(),
  };
}

export function serviceDuration(serviceId: number): number | null {
  if (!Number.isInteger(serviceId) || serviceId < 1 || serviceId > SERVICE_DURATIONS_MIN.length) return null;
  return SERVICE_DURATIONS_MIN[serviceId - 1];
}

export function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [y, m, d] = value.split("-").map(Number);
  const probe = new Date(Date.UTC(y, m - 1, d));
  return probe.getUTCFullYear() === y && probe.getUTCMonth() === m - 1 && probe.getUTCDate() === d;
}

export function isValidMonth(value: string): boolean {
  return /^\d{4}-(0[1-9]|1[0-2])$/.test(value);
}

export function isSlotTime(value: string): boolean {
  return (SLOT_TIMES as readonly string[]).includes(value);
}

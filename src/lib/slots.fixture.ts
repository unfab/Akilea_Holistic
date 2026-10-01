// Test-only schedule: the same five start times on every day of a date range.

import type { OpenSlots } from "./slots.ts";

export const GRID_TIMES = ["09:00", "11:00", "13:30", "16:00", "18:00"] as const;

export function dailyGrid(from: string, to: string, times: readonly string[] = GRID_TIMES): OpenSlots {
  const slots: Record<string, readonly string[]> = {};
  for (let d = new Date(`${from}T00:00:00Z`); d <= new Date(`${to}T00:00:00Z`); d.setUTCDate(d.getUTCDate() + 1)) {
    slots[d.toISOString().slice(0, 10)] = times;
  }
  return slots;
}

// Covers every date the slot and booking tests use.
export const TEST_GRID = dailyGrid("2026-08-01", "2027-03-31");

import { test } from "node:test";
import assert from "node:assert/strict";
import { toLocalDateString } from "./date.ts";

test("keeps the picked calendar day at local midnight", () => {
  assert.equal(toLocalDateString(new Date(2026, 9, 15)), "2026-10-15");
});

test("pads single-digit months and days", () => {
  assert.equal(toLocalDateString(new Date(2026, 0, 5)), "2026-01-05");
});

test("handles the last day of the year", () => {
  assert.equal(toLocalDateString(new Date(2026, 11, 31)), "2026-12-31");
});

import { test } from "node:test";
import assert from "node:assert/strict";
import { buildCheckoutSession, isValidSessionId, paymentState, type CheckoutDeps } from "./checkout.ts";

const deps: CheckoutDeps = {
  services: [
    { name: "Intuitivna masaža telesa", price: 85 },
    { name: "Intuitivna masaža hrbta", price: 50 },
    { name: "Intuitivna masaža trebuha", price: 50 },
  ],
  now: new Date("2026-10-01T10:00:00Z"),
  siteUrl: "https://www.akilea.si",
  openSlots: { "2026-10-20": ["09:00", "12:00"], "2026-09-30": ["09:00"] },
};

const valid = {
  serviceId: 1,
  date: "2026-10-20",
  time: "09:00",
  name: "Ana Novak",
  email: "ana@example.com",
  phone: "040 123 456",
  honeypot: "",
};

test("price comes from the server list, not from the request", () => {
  const params = buildCheckoutSession({ ...valid, price: 1, serviceName: "Hack" }, deps);
  assert.ok(params);
  const item = params.line_items![0];
  assert.equal(item.price_data!.unit_amount, 8500);
  assert.equal(item.price_data!.currency, "eur");
  assert.equal(item.price_data!.product_data!.name, "Intuitivna masaža telesa");
  assert.equal(item.quantity, 1);
});

test("each service gets its own price", () => {
  assert.equal(buildCheckoutSession({ ...valid, serviceId: 2 }, deps)!.line_items![0].price_data!.unit_amount, 5000);
  assert.equal(buildCheckoutSession({ ...valid, serviceId: 3 }, deps)!.line_items![0].price_data!.unit_amount, 5000);
});

test("rejects unknown service, closed slot, past slot", () => {
  assert.equal(buildCheckoutSession({ ...valid, serviceId: 99 }, deps), null);
  assert.equal(buildCheckoutSession({ ...valid, serviceId: "1" }, deps), null);
  assert.equal(buildCheckoutSession({ ...valid, time: "15:00" }, deps), null);
  assert.equal(buildCheckoutSession({ ...valid, date: "2026-09-30" }, deps), null);
  assert.equal(buildCheckoutSession({ ...valid, date: "2026-02-30" }, deps), null);
});

test("rejects missing name, missing contact, honeypot, garbage", () => {
  assert.equal(buildCheckoutSession({ ...valid, name: "  " }, deps), null);
  assert.equal(buildCheckoutSession({ ...valid, email: "", phone: "" }, deps), null);
  assert.equal(buildCheckoutSession({ ...valid, honeypot: "x" }, deps), null);
  assert.equal(buildCheckoutSession(null, deps), null);
  assert.equal(buildCheckoutSession("x", deps), null);
});

test("metadata carries who and when; urls point to the site", () => {
  const params = buildCheckoutSession(valid, deps)!;
  assert.equal(params.mode, "payment");
  assert.equal(params.customer_email, "ana@example.com");
  assert.deepEqual(params.metadata, {
    service: "Intuitivna masaža telesa",
    date: "2026-10-20",
    time: "09:00",
    name: "Ana Novak",
    email: "ana@example.com",
    phone: "040 123 456",
  });
  assert.equal(params.success_url, "https://www.akilea.si/uspesno?session_id={CHECKOUT_SESSION_ID}");
  assert.equal(params.cancel_url, "https://www.akilea.si/#rezervacija");
});

test("phone-only booking works and omits empty email", () => {
  const params = buildCheckoutSession({ ...valid, email: "" }, deps)!;
  assert.ok(params);
  assert.equal(params.customer_email, undefined);
  assert.equal("email" in params.metadata!, false);
  assert.equal(params.metadata!.phone, "040 123 456");
});

test("isValidSessionId accepts Stripe ids only", () => {
  assert.equal(isValidSessionId("cs_test_a1B2c3D4e5F6g7H8"), true);
  assert.equal(isValidSessionId("cs_live_a1B2c3D4e5F6g7H8"), true);
  assert.equal(isValidSessionId("cs_test_short"), false);
  assert.equal(isValidSessionId("pi_test_a1B2c3D4e5F6g7H8"), false);
  assert.equal(isValidSessionId("cs_test_a1B2c3D4/../x"), false);
  assert.equal(isValidSessionId(undefined), false);
  assert.equal(isValidSessionId(["cs_test_a1B2c3D4e5F6g7H8"]), false);
});

test("paymentState: paid only when Stripe says paid", async () => {
  const id = "cs_test_a1B2c3D4e5F6g7H8";
  assert.equal(await paymentState(id, async () => ({ payment_status: "paid" })), "paid");
  assert.equal(await paymentState(id, async () => ({ payment_status: "unpaid" })), "unpaid");
});

test("paymentState: missing or fake id is unpaid without calling Stripe", async () => {
  let called = false;
  const retrieve = async () => {
    called = true;
    return { payment_status: "paid" };
  };
  assert.equal(await paymentState(undefined, retrieve), "unpaid");
  assert.equal(await paymentState("hello", retrieve), "unpaid");
  assert.equal(called, false);
});

test("paymentState: unknown session id is unpaid, outage is unknown", async () => {
  const id = "cs_test_a1B2c3D4e5F6g7H8";
  const missing = Object.assign(new Error("No such checkout.session"), { code: "resource_missing" });
  assert.equal(await paymentState(id, async () => { throw missing; }), "unpaid");
  assert.equal(await paymentState(id, async () => { throw new Error("ECONNRESET"); }), "unknown");
  assert.equal(await paymentState(id, null), "unknown");
});

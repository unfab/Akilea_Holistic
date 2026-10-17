# Stripe Checkout Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (or superpowers:subagent-driven-development) to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Card payment in the booking widget is safe to switch on: fixed server-side prices, Mirjana gets the same booking email as for "on location", and `/uspesno` only says "paid" when Stripe says so.

**Architecture:** A framework-free module `src/lib/checkout.ts` builds the Stripe Checkout params from the validated booking input (reusing `parseBooking` and `isSlotBookable`) and decides the payment state of a session. The API route and the success page are thin wrappers around it plus a shared Stripe client in `src/lib/stripe.ts`. No webhook, no calendar reservation on the card path: Mirjana confirms every booking manually within 24 h and refunds in the Stripe dashboard if needed.

**Tech Stack:** Next.js 16.3 (App Router, `searchParams` is a Promise), React 19, `stripe` ^22.5 (API version `2026-07-29.dahlia`), Web3Forms, `node --test` with native TS type stripping (relative imports with `.ts` extension).

**Spec:** Decisions agreed with Aleksandar on 2026-10-15 (this conversation):
1. Prices are fixed; the server decides the amount.
2. No slot is reserved by payment. Mirjana confirms within 24 h; if she can't, she refunds.
3. `/uspesno` must check the session with Stripe.
4. No webhook. Mirjana sees payments via Stripe notifications / bank statement.
5. Terms and privacy policy get updated.
6. Refund rule is written in the terms.
7. Invoices: Mirjana forwards the Stripe statement to her accountant, who issues the invoice. Nothing to build.
8. (2026-10-18, changed during Task 3 test) The card-path booking email goes out **only after payment**: `/uspesno` sends it once Stripe reports `paid`, with details from the session metadata. Before, it went out before payment and an abandoned checkout looked like a booking.

## Global Constraints

- Branch: `feature/stripe-checkout`. Push to `main` auto-deploys to www.akilea.si.
- `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT` stays **off** in Netlify until Task 6. Everything merged before that must be invisible with the flag off.
- All customer-facing text is Slovenian. Code, comments, commits in English. Conventional commits.
- Never trust the client for price, service name or amount.
- No Stripe internals or env var names in responses or `alert()` texts.
- Existing tests style: `node:test` + `node:assert/strict`, files next to the code as `*.test.ts`, relative imports with `.ts`.
- Do not touch: Google Calendar code, `OPEN_SLOTS`, the "on location" flow behaviour, `proxy.ts`.
- Verification before each commit: `npm test && npm run lint && npx tsc --noEmit`. Before merge also `npm run build`.

## Review Focus

1. **Tampered request** (price `1`, unknown `serviceId`, past or closed slot) → 400, no Stripe session. Pinned in Task 1 tests.
2. **`/uspesno` opened directly or with a fake/foreign `session_id`** → "Plačilo ni bilo zaključeno", never "Plačilo prejeto". Pinned in Task 1 (`paymentState`) tests.
3. **Stripe unreachable while the customer did pay** → "ne moremo preveriti, ne plačajte ponovno", not "not paid" (avoids double payment). Pinned in Task 1 tests.
4. **Customer without email (phone only)** → checkout still works; Stripe asks for email on its page. Pinned in Task 1 tests.
5. **Card email only for paid sessions** (decision 8): no email when the customer leaves Stripe without paying; one email on `/uspesno` when paid, none on reload. If the customer closes the tab before `/uspesno` loads, Mirjana relies on the Stripe payment notification + metadata.

---

## File Structure

| File | Change | Responsibility |
|---|---|---|
| `src/lib/booking-service.ts` | modify | export `parseBooking` + `BookingRequest` (reuse validation) |
| `src/lib/booking-deps.ts` | modify | export the server-side `services` list |
| `src/lib/checkout.ts` | create | build Checkout params, validate session id, payment state |
| `src/lib/checkout.test.ts` | create | unit tests for the above |
| `src/lib/stripe.ts` | create | one place that creates the Stripe client |
| `src/app/api/checkout/route.ts` | rewrite | thin route around `buildCheckoutSession` |
| `src/components/BookingWidget.tsx` | modify | card path: create session → send email → redirect |
| `src/app/uspesno/page.tsx` | rewrite | three states: paid / unpaid / unknown |
| `src/app/storitve/page.tsx`, `src/components/ServiceAccordion.tsx` | modify | remove the 3 Payment Links |
| `src/i18n/types.ts`, `src/i18n/locales/{sl,en,hr,it,sr}.ts` | modify | remove unused `payOnlineBtn` |
| `src/app/pogoji-poslovanja/page.tsx`, `src/app/pravilnik-o-zasebnosti/page.tsx` | modify | payment + Stripe text, shown only when the flag is on |
| `tasks/debt.md`, `tasks/context.md`, `tasks/privacy-policy.md` | modify | close D2, record state |

---

### Task 0: Branch and test-mode setup

- [x] **Step 1: Branch** (exists since 2026-10-16)

```bash
cd "/Users/aleksandarbojic/Desktop/teta mirjana/Akilea_Holistic"
git checkout feature/stripe-checkout && git merge main
```

- [x] **Step 2: Sandbox key in `.env.local`**

Do Task 1 of `tasks/plan-stripe-netlify-env.md` (restricted sandbox key, `.env.local`, verification without printing the key). Never put a key value in chat or git.

- [x] **Step 3: Baseline**

Run: `npm test && npm run lint && npx tsc --noEmit`
Expected: all 51 tests pass, lint and tsc clean. If not, stop and fix/record before starting.

---

### Task 1: Checkout core (`src/lib/checkout.ts`)

**Files:**
- Modify: `src/lib/booking-service.ts` (`interface BookingRequest`, `function parseBooking` ~line 107)
- Create: `src/lib/checkout.ts`
- Test: `src/lib/checkout.test.ts`

**Interfaces:**
- Consumes: `parseBooking(input: unknown): BookingRequest | null`, `ServiceInfo { name; price }` from `booking-service.ts`; `isSlotBookable`, `serviceDuration`, `OpenSlots` from `slots.ts`.
- Produces:
  - `buildCheckoutSession(input: unknown, deps: CheckoutDeps): Stripe.Checkout.SessionCreateParams | null`
  - `interface CheckoutDeps { services: readonly ServiceInfo[]; now: Date; siteUrl: string; openSlots?: OpenSlots }`
  - `isValidSessionId(value: unknown): value is string`
  - `type PaymentState = "paid" | "unpaid" | "unknown"`
  - `paymentState(id: unknown, retrieve: RetrieveSession | null): Promise<PaymentState>`
  - `type RetrieveSession = (id: string) => Promise<{ payment_status: string }>`

- [x] **Step 1: Export the parser**

In `src/lib/booking-service.ts` add `export` in front of `interface BookingRequest` and `function parseBooking`. No other change.

- [x] **Step 2: Write the failing tests** — `src/lib/checkout.test.ts`

```ts
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
```

- [x] **Step 3: Run to verify it fails**

Run: `node --test src/lib/checkout.test.ts`
Expected: FAIL, `Cannot find module .../checkout.ts`.

- [x] **Step 4: Implement** — `src/lib/checkout.ts`

```ts
// Stripe Checkout for card bookings. Framework-free so it runs under
// node --test. The amount always comes from the server-side service list;
// the request only says which service, date and time.

import type Stripe from "stripe";
import { parseBooking, type ServiceInfo } from "./booking-service.ts";
import { isSlotBookable, serviceDuration, type OpenSlots } from "./slots.ts";

export interface CheckoutDeps {
  services: readonly ServiceInfo[];
  now: Date;
  siteUrl: string;
  // Defaults to OPEN_SLOTS from the booking config.
  openSlots?: OpenSlots;
}

export type PaymentState = "paid" | "unpaid" | "unknown";
export type RetrieveSession = (id: string) => Promise<{ payment_status: string }>;

const SESSION_ID_RE = /^cs_(test|live)_[A-Za-z0-9]{16,255}$/;

export function buildCheckoutSession(input: unknown, deps: CheckoutDeps): Stripe.Checkout.SessionCreateParams | null {
  const req = parseBooking(input);
  if (!req || req.honeypot) return null;

  const service = deps.services[req.serviceId - 1];
  const durationMin = serviceDuration(req.serviceId);
  if (!service || durationMin === null) return null;
  if (!isSlotBookable({ date: req.date, time: req.time, durationMin, busy: [], now: deps.now, openSlots: deps.openSlots })) {
    return null;
  }

  // Stripe drops empty metadata values, so only send what the customer filled in.
  const metadata: Record<string, string> = { service: service.name, date: req.date, time: req.time, name: req.name };
  if (req.email) metadata.email = req.email;
  if (req.phone) metadata.phone = req.phone;

  return {
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: Math.round(service.price * 100),
          product_data: { name: service.name, description: `Termin: ${req.date} ob ${req.time}` },
        },
      },
    ],
    customer_email: req.email || undefined,
    success_url: `${deps.siteUrl}/uspesno?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${deps.siteUrl}/#rezervacija`,
    metadata,
  };
}

export function isValidSessionId(value: unknown): value is string {
  return typeof value === "string" && SESSION_ID_RE.test(value);
}

// "unknown" when Stripe can't be asked: the customer may have paid, so the
// page must not tell them to pay again.
export async function paymentState(id: unknown, retrieve: RetrieveSession | null): Promise<PaymentState> {
  if (!isValidSessionId(id)) return "unpaid";
  if (!retrieve) return "unknown";
  try {
    const session = await retrieve(id);
    return session.payment_status === "paid" ? "paid" : "unpaid";
  } catch (err) {
    if ((err as { code?: string }).code === "resource_missing") return "unpaid";
    console.error("checkout: session lookup failed", err);
    return "unknown";
  }
}
```

- [x] **Step 5: Run tests**

Run: `npm test`
Expected: all pass (47 old + 10 new). If `import type Stripe` fails under node, check that `stripe` is installed (`npm ci`).

- [x] **Step 6: Commit**

```bash
git add src/lib/booking-service.ts src/lib/checkout.ts src/lib/checkout.test.ts
git commit -m "feat(checkout): server-side price and payment state for Stripe sessions"
```

---

### Task 2: Stripe client + API route

**Files:**
- Create: `src/lib/stripe.ts`
- Modify: `src/lib/booking-deps.ts:8` (export `services`)
- Rewrite: `src/app/api/checkout/route.ts`

**Interfaces:**
- Consumes: `buildCheckoutSession`, `CheckoutDeps` (Task 1); `services`, `NO_STORE` from `booking-deps.ts`.
- Produces: `stripeClient(): Stripe | null`. Route contract: `POST /api/checkout { serviceId, date, time, name, email, phone, honeypot }` → `200 { url }`, `400 { error: "invalid" }`, `404` (flag off), `503 { error: "unavailable" }`.

- [x] **Step 1: Export the service list** — `src/lib/booking-deps.ts`

```ts
// Service names and prices as written in the calendar event and charged by Stripe (Slovenian).
export const services = sl.servicesPage.items.map((item) => ({ name: item.name, price: item.price }));
```

- [x] **Step 2: Shared client** — `src/lib/stripe.ts`

```ts
import Stripe from "stripe";

const API_VERSION = "2026-07-29.dahlia";

// null when STRIPE_SECRET_KEY is not set (payments not configured).
export function stripeClient(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  return key ? new Stripe(key, { apiVersion: API_VERSION }) : null;
}
```

- [x] **Step 3: Route** — replace all of `src/app/api/checkout/route.ts`

```ts
import { isOnlinePaymentEnabled } from "@/config/site";
import { NO_STORE, services } from "@/lib/booking-deps";
import { buildCheckoutSession } from "@/lib/checkout";
import { stripeClient } from "@/lib/stripe";

export const dynamic = "force-dynamic";

// POST /api/checkout { serviceId, date, time, name, email, phone, honeypot }
// 200 { url }, 400 invalid, 404 payments off, 503 Stripe missing or failing.
export async function POST(request: Request) {
  if (!isOnlinePaymentEnabled()) {
    return Response.json({ error: "not_found" }, { status: 404, headers: NO_STORE });
  }
  const stripe = stripeClient();
  if (!stripe) {
    console.error("checkout: STRIPE_SECRET_KEY is not set");
    return Response.json({ error: "unavailable" }, { status: 503, headers: NO_STORE });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400, headers: NO_STORE });
  }

  const params = buildCheckoutSession(body, {
    services,
    now: new Date(),
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  });
  if (!params) return Response.json({ error: "invalid" }, { status: 400, headers: NO_STORE });

  try {
    const session = await stripe.checkout.sessions.create(params);
    if (!session.url) throw new Error("Checkout session without url");
    return Response.json({ url: session.url }, { headers: NO_STORE });
  } catch (err) {
    console.error("checkout: Stripe error", err);
    return Response.json({ error: "unavailable" }, { status: 503, headers: NO_STORE });
  }
}
```

- [x] **Step 4: Verify with curl** (`npm run dev` in another terminal, `.env.local` from Task 0; pick a real future date/time from `OPEN_SLOTS` in `src/config/booking.ts`)

```bash
# valid → 200 {"url":"https://checkout.stripe.com/..."}; open it, amount must be 85,00 €
curl -s -X POST localhost:3000/api/checkout -H 'Content-Type: application/json' \
  -d '{"serviceId":1,"price":1,"date":"<OPEN DATE>","time":"<OPEN TIME>","name":"Test","email":"t@example.com","phone":"","honeypot":""}'
# closed slot → 400 {"error":"invalid"}
curl -s -X POST localhost:3000/api/checkout -H 'Content-Type: application/json' \
  -d '{"serviceId":1,"date":"2026-12-24","time":"03:00","name":"Test","email":"t@example.com","phone":"","honeypot":""}'
# broken JSON → 400
curl -s -X POST localhost:3000/api/checkout -H 'Content-Type: application/json' -d 'nope'
```

Then set `STRIPE_SECRET_KEY=` empty, restart dev → valid request returns `503 {"error":"unavailable"}` (no key name in the response). Restore the key.

- [x] **Step 5: Checks + commit**

```bash
npm test && npm run lint && npx tsc --noEmit
git add src/lib/stripe.ts src/lib/booking-deps.ts src/app/api/checkout/route.ts
git commit -m "fix(checkout): validate booking and charge server-side price"
```

---

### Task 3: Booking widget card path

**Files:**
- Modify: `src/components/BookingWidget.tsx` (`handleSubmit` ~lines 143–257)

**Interfaces:**
- Consumes: `POST /api/checkout` contract (Task 2). Same body shape as `reserveSlot()` already sends to `/api/bookings`.
- Produces: nothing used by later tasks.

Behaviour (as built, decision 8): card path = create Stripe session (server validates) → redirect. No email here; `/uspesno` sends it after payment with `Nacin_Placila: "Kartica (Stripe) – plačano"` (`src/app/uspesno/PaidBookingEmail.tsx`, shared sender `src/lib/booking-email.ts`). Superseded original: No calendar call on the card path. The email is sent only after the server accepted the booking, so invalid attempts produce no email. If the email fails, the redirect still happens (the Stripe metadata has the same details).

- [x] **Step 1: Constants** next to `SLOT_TAKEN_MESSAGE` (top of file)

```ts
const CARD_PAYMENT_LABEL = "Kartica (Stripe) – preveri plačilo v Stripeu";
const LOCATION_PAYMENT_LABEL = "Plačilo na lokaciji";
const CARD_PAYMENT_ERROR = "Plačila s kartico trenutno ni mogoče začeti. Poskusite znova ali izberite plačilo na lokaciji.";

type EmailResult = "sent" | "failed" | "offline";
```

- [x] **Step 2: Replace `handleSubmit`** (from `const handleSubmit = async` down to the closing `};` before `const isContactValid`) with:

```tsx
  type Service = (typeof services)[number];

  const bookingBody = (serviceId: number) => ({
    serviceId,
    date: selectedDate,
    time: selectedTime,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    honeypot: formData.honeypot,
  });

  const sendBookingEmail = async (svc: Service, paymentLabel: string): Promise<EmailResult> => {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nova rezervacija: ${svc.name}`,
          from_name: "Akilea Holistic - Sistem rezervacij",
          Ime_Priimek: formData.name,
          Email: formData.email || "Ni vpisan",
          Telefon: formData.phone || "Ni vpisana",
          Storitev: svc.name,
          Cena: `${svc.price}€`,
          Datum: selectedDate,
          Ura: selectedTime,
          Nacin_Placila: paymentLabel,
        }),
      });
      const result = await res.json();
      if (result.success) return "sent";
      console.error("Web3Forms error:", result);
      return "failed";
    } catch (err) {
      console.error(err);
      return "offline";
    }
  };

  const finishBooking = () => {
    setIsSubmitting(false);
    setIsSuccess(true);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: "", email: "", phone: "", honeypot: "" });
  };

  const payByCard = async (svc: Service) => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingBody(svc.id)),
      });
      const data = (await response.json().catch(() => null)) as { url?: string } | null;
      if (!response.ok || !data?.url) {
        alert(CARD_PAYMENT_ERROR);
        setIsSubmitting(false);
        return;
      }
      // Mirjana needs service, date and phone; if the email fails they are
      // still in the Stripe payment metadata.
      await sendBookingEmail(svc, CARD_PAYMENT_LABEL);
      window.location.assign(data.url);
    } catch (err) {
      console.error(err);
      alert(CARD_PAYMENT_ERROR);
      setIsSubmitting(false);
    }
  };

  const payOnLocation = async (svc: Service) => {
    // Reserve the slot in Google Calendar first. If the calendar is not
    // reachable the booking still goes out by email (no lost bookings).
    const reservation = await reserveSlot(svc.id);
    if (reservation === "taken") {
      alert(SLOT_TAKEN_MESSAGE);
      setSelectedTime(null);
      setRefreshCount((n) => n + 1);
      setIsSubmitting(false);
      return;
    }
    if (reservation === "rejected") {
      alert("Napaka pri pošiljanju rezervacije. Prosimo, poskusite kasneje.");
      setIsSubmitting(false);
      return;
    }
    // Once the event is in the calendar the booking is recorded, even if the email fails.
    const email = await sendBookingEmail(svc, LOCATION_PAYMENT_LABEL);
    if (email === "sent" || reservation === "ok") {
      finishBooking();
      return;
    }
    alert(
      email === "offline"
        ? "Napaka na omrežju. Prosimo, preverite povezavo in poskusite znova."
        : "Napaka pri pošiljanju rezervacije. Prosimo, poskusite kasneje.",
    );
    setIsSubmitting(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Spam prevention (bot caught)
    if (!selectedService || !selectedDate || !selectedTime) return;

    const svc = services.find((s) => s.id === selectedService);
    if (!svc) return;

    setIsSubmitting(true);
    if (paymentMethod === "stripe") await payByCard(svc);
    else await payOnLocation(svc);
  };
```

- [x] **Step 3: Make `reserveSlot` reuse `bookingBody`**

In `reserveSlot`, replace the inline `body: JSON.stringify({ serviceId, date: selectedDate, ... honeypot: formData.honeypot })` with `body: JSON.stringify(bookingBody(serviceId))`. Move the `bookingBody` declaration above `reserveSlot` so it is defined first.

- [x] **Step 4: Checks**

Run: `npm run lint && npx tsc --noEmit`
Expected: clean. (`type Service` inside the component is fine; if lint objects, move it out as `type Service = { id: number; name: string; price: number }`.)

- [x] **Step 5: Manual test in the browser** (`npm run dev`, flag on, test key)

| # | Action | Expected |
|---|---|---|
| a | Book "on location" | Same as before: success screen, email arrives with "Plačilo na lokaciji" |
| b | Book by card, pay with `4242 4242 4242 4242`, any future expiry, any CVC | Email arrives with "Kartica (Stripe) – preveri plačilo v Stripeu"; Stripe page shows correct service and amount (85 € / 50 €); lands on `/uspesno` |
| c | Stripe test dashboard → Payments → that payment | Metadata shows service, date, time, name, email, phone |
| d | Card path, press "back" on the Stripe page | Back on `/#rezervacija`; email was sent (expected, see Risks) |
| e | DevTools → block `api.web3forms.com`, book by card | Still redirected to Stripe |
| f | Stop dev, empty `STRIPE_SECRET_KEY`, restart, book by card | Alert `CARD_PAYMENT_ERROR`, no email, button usable again |

- [x] **Step 6: Commit**

```bash
git add src/components/BookingWidget.tsx
git commit -m "feat(booking): card path sends booking email and uses validated checkout"
```

---

### Task 4: Honest success page (`/uspesno`)

**Files:**
- Rewrite: `src/app/uspesno/page.tsx`

**Interfaces:**
- Consumes: `paymentState`, `PaymentState` (Task 1); `stripeClient` (Task 2).

- [x] **Step 1: Replace the page**

First confirm the `searchParams` API in this Next version (`AGENTS.md`: read `node_modules/next/dist/docs/`, search for `searchParams`). The code below assumes it is a `Promise`, as in Next 15+.

Keep the existing card layout and classes; the content per state comes from a table. Full file:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isOnlinePaymentEnabled } from "@/config/site";
import { paymentState, type PaymentState } from "@/lib/checkout";
import { stripeClient } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const CONTENT: Record<PaymentState, { title: string; text: string; ok: boolean }> = {
  paid: {
    ok: true,
    title: "Plačilo prejeto",
    text: "Hvala! V 24 urah boste prejeli potrditev termina oziroma predlog za drug termin. Če vam noben termin ne ustreza, vam celoten znesek vrnemo. Potrdilo o plačilu ste prejeli na e-pošto.",
  },
  unpaid: {
    ok: false,
    title: "Plačilo ni bilo zaključeno",
    text: "S kartice nismo prejeli plačila. Termin lahko rezervirate znova ali izberete plačilo na lokaciji.",
  },
  unknown: {
    ok: false,
    title: "Plačila trenutno ne moremo preveriti",
    text: "Prosimo, ne plačajte ponovno. V 24 urah vas bomo kontaktirali. Za vprašanja pišite na mirjana@akilea.si ali pokličite 040 863 594.",
  },
};

type PageProps = { searchParams: Promise<{ session_id?: string | string[] }> };

export default async function UspesnoPlacilo({ searchParams }: PageProps) {
  if (!isOnlinePaymentEnabled()) notFound();

  const { session_id } = await searchParams;
  const stripe = stripeClient();
  const state = await paymentState(session_id, stripe ? (id) => stripe.checkout.sessions.retrieve(id) : null);
  const { title, text, ok } = CONTENT[state];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col items-center justify-center py-20 px-6">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-10 text-center border border-[var(--color-border)]">
        {ok && (
          <div className="w-20 h-20 bg-[#f4f8eb] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#6a882a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

        <h1 className="font-serif text-3xl text-[var(--color-primary)] mb-4">{title}</h1>
        <p className="text-[var(--color-muted)] font-light leading-relaxed mb-8">{text}</p>

        <Link
          href={ok ? "/" : "/#rezervacija"}
          className="btn-primary block w-full py-4 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-md bg-[#6a882a] text-white hover:bg-[#556d22] hover:-translate-y-1"
        >
          {ok ? "Nazaj na domačo stran" : "Nazaj na rezervacijo"}
        </Link>
      </div>
    </div>
  );
}
```

Before replacing, copy the exact classes of the current check-mark circle and primary button from the old file if they differ from the above (the old file's first ~40 lines are the reference). The "Moje rezervacije" button is removed on purpose.

- [x] **Step 2: Manual test** (`npm run dev`, flag on)

| URL | Expected |
|---|---|
| `/uspesno` | "Plačilo ni bilo zaključeno" |
| `/uspesno?session_id=hello` | "Plačilo ni bilo zaključeno" |
| `/uspesno?session_id=cs_test_aaaaaaaaaaaaaaaaaaaa` | "Plačilo ni bilo zaključeno" (Stripe: resource_missing) |
| after a real test payment (Task 3 b) | "Plačilo prejeto" |
| create a session via curl (Task 2 step 4), don't pay, open `/uspesno?session_id=<its id>` | "Plačilo ni bilo zaključeno" |
| any of the above with `STRIPE_SECRET_KEY` empty and a valid-looking id | "Plačila trenutno ne moremo preveriti" |
| flag off (`NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT=false`, restart) | 404 |

Card `4000 0000 0000 0002` (declined) never reaches `/uspesno`; Stripe shows the error itself.

- [x] **Step 3: Checks + commit**

```bash
npm test && npm run lint && npx tsc --noEmit
git add src/app/uspesno/page.tsx
git commit -m "fix(uspesno): show success only for sessions Stripe reports as paid"
```

---

### Task 5: Remove Payment Links, update legal text

**Files:**
- Modify: `src/app/storitve/page.tsx` (3× `stripeLink`, lines ~85/96/107)
- Modify: `src/components/ServiceAccordion.tsx` (prop + button + `isOnlinePaymentEnabled` import)
- Modify: `src/i18n/types.ts` + `src/i18n/locales/{sl,en,hr,it,sr}.ts` (`payOnlineBtn`)
- Modify: `src/app/pogoji-poslovanja/page.tsx:64` + date line 19
- Modify: `src/app/pravilnik-o-zasebnosti/page.tsx` processor list (~line 91) + date line 20

Payment Links charge without a date and may belong to another Stripe account. Card payment exists only through the booking widget.

- [ ] **Step 1: Payment Links out**

- `storitve/page.tsx`: delete the three `stripeLink: "https://buy.stripe.com/...",` lines.
- `ServiceAccordion.tsx`: delete `stripeLink: string;` from `ServiceProps`, delete the whole `{isOnlinePaymentEnabled() && ( <a href={service.stripeLink} ...> ... </a> )}` block, delete the `isOnlinePaymentEnabled` import.
- `grep -rn "payOnlineBtn" src` → delete the key from `types.ts` and from all 5 locale files.
- `grep -rn "buy.stripe.com\|stripeLink\|payOnlineBtn" src` → no results.

- [ ] **Step 2: Terms, section 5** — `pogoji-poslovanja/page.tsx`

Add `import { isOnlinePaymentEnabled } from "@/config/site";` and replace the section 5 paragraph with:

```tsx
          <p>
            Cene storitev so navedene v evrih. Storitve so oproščene DDV.{" "}
            {isOnlinePaymentEnabled()
              ? "Storitev lahko plačate na lokaciji ali ob spletni rezervaciji s plačilno kartico prek ponudnika Stripe. Spletno plačilo še ne pomeni potrjenega termina: v 24 urah vam termin potrdimo ali predlagamo drugega. Če termina ne moremo potrditi in predlaganega termina ne sprejmete, vam celoten znesek vrnemo na kartico, s katero ste plačali, najpozneje v 14 dneh. Za odpoved ali prestavitev potrjenega termina veljajo pravila iz 2. točke."
              : "Plačilo se opravi na lokaciji."}
          </p>
```

Section 2 already covers refunds of prepaid bookings ("če je stranka storitev že plačala ... vrnemo"), no change there.

**Mirjana must approve this paragraph before Task 6.** Send her the text (Slovenian) and adjust wording if she wants; the 14-day refund deadline is the legal maximum, she can promise less.

- [ ] **Step 3: Privacy policy** — `pravilnik-o-zasebnosti/page.tsx`

Add the import and, after the Google Obrazci `<li>`:

```tsx
            {isOnlinePaymentEnabled() && (
              <li>
                Stripe Payments Europe, Ltd. (Irska) – obdelava plačil s plačilno kartico. Podatkov o vaši kartici ne vidimo in jih ne hranimo;
                Stripe nam posreduje ime, e-pošto, znesek in izbrani termin.
              </li>
            )}
```

Update "Zadnja posodobitev" (privacy) and "Veljavnost od" (terms) to the deploy date of Task 6. Because both texts only change with the flag on, keep the old dates until then, or write the new date now and accept it shows early. Prefer: change the dates in Task 6 Step 4 in the same redeploy.

- [ ] **Step 4: Verify both flag states**

`npm run dev` with flag on → terms show the card paragraph, privacy lists Stripe, `/storitve` has only "Rezerviraj termin". Flag off → "Plačilo se opravi na lokaciji.", no Stripe in the list.

- [ ] **Step 5: Checks + commit**

```bash
npm test && npm run lint && npx tsc --noEmit && npm run build
git add -A src
git commit -m "feat(legal): card payment terms and Stripe processor behind payment flag; drop Payment Links"
```

- [ ] **Step 6: Docs + merge**

- `tasks/debt.md` D2 → mark done, one line: what changed and that webhook/slot reservation were dropped by decision (manual confirmation).
- `tasks/context.md`: Stripe section: code ready, flag off until Task 6; env var table: `STRIPE_SECRET_KEY` = restricted key with Checkout Sessions write.
- `tasks/privacy-policy.md`: the Stripe row is now conditional on the flag.
- Commit `docs(tasks): record Stripe hardening`, push branch, merge to `main`. Site redeploys with flag **off**: check www.akilea.si looks unchanged (no card button, terms say "na lokaciji", `/uspesno` 404).

---

### Task 6: Go live (needs Mirjana; do when she is ready)

**Mirjana (in her Stripe account):**
- [ ] Account activated: business details (Mirjana Groznik s.p., MŠ 9489983000), IBAN for payouts, ID verification.
- [ ] Settings → Team → invite Aleksandar as **Developer**.
- [ ] Settings → Customer emails → **Successful payments: ON** (customer gets the Stripe receipt that `/uspesno` mentions).
- [ ] Notifications: Stripe app on her phone, or email on every successful payment.
- [ ] Approved the terms paragraph from Task 5 Step 2.
- [ ] Knows how to refund: Payments → payment → Refund (full or partial, e.g. 30 % per section 2).

**Aleksandar:**
- [ ] **Steps 1–3: live key, Netlify production values, redeploy** → do Task 5 Steps 1–4 of `tasks/plan-stripe-netlify-env.md`. Before that, the branch deploy must have passed its sandbox test (that plan's Tasks 2–4).
- [ ] **Step 4: Dates**: set "Veljavnost od" / "Zadnja posodobitev" to today in both legal pages, commit `docs(legal): payment terms effective date`, push (this is the redeploy if Step 3 not done yet).
- [ ] **Step 5: Live smoke test**: book the cheapest service by card with your own card → Mirjana gets email + Stripe notification, `/uspesno` says "Plačilo prejeto", amount is 50,00 €. Then refund it in Stripe. (Stripe keeps its fee on refunds, roughly 1 €.)
- [ ] **Step 6:** `/uspesno` without a session id on production → "Plačilo ni bilo zaključeno". Update `tasks/context.md`: online payment **on** since <date>.

**Rollback:** set `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT=false` and redeploy. All card UI, `/api/checkout`, `/uspesno` and the legal paragraphs switch back.

---

## Risks and accepted trade-offs

- **Paid but tab closed before `/uspesno`**: no Web3Forms email for that booking. Mirjana sees it via the Stripe payment notification (Task 6 checklist) and the payment metadata. Accepted (decision 8 replaced the old "email before payment" trade-off).
- **No webhook**: payment truth is the Stripe notification / dashboard. Accepted (decision 4).
- **No slot lock**: two customers can pay for the same slot; Mirjana offers another time or refunds. Accepted (decision 2). If Google Calendar (Phase B) is configured later, revisit whether the card path should call `/api/bookings` too.
- **Prices live in the locale files**: the server charges the `sl.ts` price. If a price changes, change it in all 5 locale files (the widget shows the visitor's locale, Stripe charges `sl`).

## Out of scope (noted, not done)

- `servicesPage.desc` (sl) says "ali pa jo takoj poravnate prek spleta" even while payment is off. Separate copy fix.
- Unused `stripePriceId` fields in the locale files (look like placeholders, not real prices). Separate cleanup.
- Fiscal invoices: handled by her accountant from the Stripe statement (decision 7).

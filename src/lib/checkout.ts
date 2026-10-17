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

// What Mirjana needs to confirm a paid booking, read back from the Stripe session.
export interface PaidBooking {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  price: number;
}

export interface PaymentResult {
  state: PaymentState;
  booking?: PaidBooking;
}

interface SessionSummary {
  payment_status: string;
  amount_total?: number | null;
  metadata?: Record<string, string> | null;
}

export type RetrieveSession = (id: string) => Promise<SessionSummary>;

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

function paidBooking(session: SessionSummary): PaidBooking | undefined {
  const m = session.metadata ?? {};
  if (!m.service || !m.date || !m.time || !m.name || typeof session.amount_total !== "number") return undefined;
  return {
    service: m.service,
    date: m.date,
    time: m.time,
    name: m.name,
    email: m.email ?? "",
    phone: m.phone ?? "",
    price: session.amount_total / 100,
  };
}

// "unknown" when Stripe can't be asked: the customer may have paid, so the
// page must not tell them to pay again.
export async function paymentState(id: unknown, retrieve: RetrieveSession | null): Promise<PaymentResult> {
  if (!isValidSessionId(id)) return { state: "unpaid" };
  if (!retrieve) return { state: "unknown" };
  try {
    const session = await retrieve(id);
    if (session.payment_status !== "paid") return { state: "unpaid" };
    const booking = paidBooking(session);
    return booking ? { state: "paid", booking } : { state: "paid" };
  } catch (err) {
    if ((err as { code?: string }).code === "resource_missing") return { state: "unpaid" };
    console.error("checkout: session lookup failed", err);
    return { state: "unknown" };
  }
}

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

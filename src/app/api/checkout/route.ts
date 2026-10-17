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

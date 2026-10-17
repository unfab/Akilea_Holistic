import Stripe from "stripe";

const API_VERSION = "2026-07-29.dahlia";

// null when STRIPE_SECRET_KEY is not set (payments not configured).
export function stripeClient(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  return key ? new Stripe(key, { apiVersion: API_VERSION }) : null;
}

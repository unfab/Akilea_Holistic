"use client";

import { useEffect } from "react";
import { sendBookingEmail } from "@/lib/booking-email";
import type { PaidBooking } from "@/lib/checkout";

const CARD_PAYMENT_LABEL = "Kartica (Stripe) – plačano";

// Guards against React running the effect twice in dev; localStorage
// guards against reloads of the same success page.
const started = new Set<string>();

function wasSent(key: string): boolean {
  try {
    return localStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function markSent(key: string) {
  try {
    localStorage.setItem(key, "1");
  } catch {
    // Storage blocked: a reload may send the email again, which is acceptable.
  }
}

interface Props {
  sessionId: string;
  booking: PaidBooking;
}

// Sends Mirjana the booking email once Stripe has reported the payment as paid.
export default function PaidBookingEmail({ sessionId, booking }: Props) {
  useEffect(() => {
    const key = `akilea-booking-email:${sessionId}`;
    if (started.has(key) || wasSent(key)) return;
    started.add(key);
    sendBookingEmail({ ...booking, paymentLabel: CARD_PAYMENT_LABEL }).then((result) => {
      if (result === "sent") markSent(key);
      else started.delete(key);
    });
  }, [sessionId, booking]);

  return null;
}

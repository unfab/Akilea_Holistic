import { createBooking } from "@/lib/booking-service";
import { bookingDeps, NO_STORE } from "@/lib/booking-deps";

export const dynamic = "force-dynamic";

// POST /api/bookings { serviceId, date, time, name, email, phone, honeypot }
// 200 { ok }, 400 invalid, 409 slot_taken, 429 limit, 503 unavailable
// (the widget then falls back to the email-only booking).
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400, headers: NO_STORE });
  }
  try {
    const result = await createBooking(body, bookingDeps());
    return Response.json(result.body, { status: result.status, headers: NO_STORE });
  } catch (err) {
    console.error("bookings: unexpected error", err);
    return Response.json({ error: "unavailable" }, { status: 503, headers: NO_STORE });
  }
}

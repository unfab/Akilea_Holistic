import { getAvailability } from "@/lib/booking-service";
import { bookingDeps, NO_STORE } from "@/lib/booking-deps";

export const dynamic = "force-dynamic";

// GET /api/availability?month=YYYY-MM&service=N
// 200 { month, days: { "YYYY-MM-DD": ["09:00", ...] } }, 400 invalid, 503 when
// Google is not configured or unreachable (the widget then shows every slot).
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  try {
    const result = await getAvailability(
      { month: searchParams.get("month"), service: searchParams.get("service") },
      bookingDeps(),
    );
    return Response.json(result.body, { status: result.status, headers: NO_STORE });
  } catch (err) {
    console.error("availability: unexpected error", err);
    return Response.json({ error: "unavailable" }, { status: 503, headers: NO_STORE });
  }
}

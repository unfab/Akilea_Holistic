import { sl } from "@/i18n/locales/sl";
import { createCalendarClient, readGoogleConfig, type CalendarClient } from "./google-calendar.ts";
import type { BookingDeps } from "./booking-service.ts";

export const NO_STORE = { "Cache-Control": "no-store" };

// Service names and prices as written in the calendar event (Slovenian).
const services = sl.servicesPage.items.map((item) => ({ name: item.name, price: item.price }));

let cachedClient: CalendarClient | null | undefined;
let otherBusyCalendarIds: string[] = [];

// One client per server instance so the access token is reused between requests.
function calendarClient(): CalendarClient | null {
  if (cachedClient === undefined) {
    const config = readGoogleConfig();
    cachedClient = config ? createCalendarClient(config) : null;
    otherBusyCalendarIds = config ? config.busyCalendarIds.filter((id) => id !== config.bookingCalendarId) : [];
  }
  return cachedClient;
}

export function bookingDeps(): BookingDeps {
  const client = calendarClient();
  return { client, now: new Date(), services, otherBusyCalendarIds };
}

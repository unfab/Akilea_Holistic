// Booking rules shared by the widget and the booking API.

export const TIME_ZONE = "Europe/Ljubljana";

// The only bookable start times, by Ljubljana date. Mirjana sends her free
// slots for the next two weeks; every other date and time is closed.
// Past dates are ignored, so old entries can stay until the next update.
export const OPEN_SLOTS: Readonly<Record<string, readonly string[]>> = {
  "2026-10-16": ["09:00", "12:00", "15:00"],
  "2026-10-20": ["09:00", "12:00"],
  "2026-10-21": ["09:00", "12:00", "15:00"],
  "2026-10-22": ["09:00", "12:00", "15:00", "18:00"],
};

// Minutes per service, in the order of servicesPage.items (service id = index + 1).
// 1: Intuitivna masaža telesa (1 h 45 min), 2: hrbta (50 min), 3: trebuha (50 min).
export const SERVICE_DURATIONS_MIN = [105, 50, 50] as const;

// Extra minutes kept free after each appointment.
export const BUFFER_MINUTES = 0;

// How far ahead of now a slot must start. 0 = any future slot.
export const MIN_LEAD_MINUTES = 0;

// How many days ahead bookings are accepted.
export const BOOKING_HORIZON_DAYS = 90;

// Upcoming bookings allowed per email or per phone number.
export const MAX_UPCOMING_BOOKINGS_PER_CONTACT = 3;

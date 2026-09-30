// Booking rules shared by the widget and the booking API.

export const TIME_ZONE = "Europe/Ljubljana";

// Fixed start times offered every day.
export const SLOT_TIMES = ["09:00", "11:00", "13:30", "16:00", "18:00"] as const;

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

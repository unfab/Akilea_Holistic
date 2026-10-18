// Booking notification to Mirjana via Web3Forms. Runs in the browser:
// the Web3Forms free plan only accepts client-side submissions.

import { WEB3FORMS_KEY } from "@/config/site";

export type EmailResult = "sent" | "failed" | "offline";

export interface BookingEmail {
  service: string;
  price: number;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  paymentLabel: string;
}

export async function sendBookingEmail(b: BookingEmail): Promise<EmailResult> {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Nova rezervacija: ${b.service}`,
        from_name: "Akilea Holistic - Sistem rezervacij",
        Ime_Priimek: b.name,
        Email: b.email || "Ni vpisan",
        Telefon: b.phone || "Ni vpisana",
        Storitev: b.service,
        Cena: `${b.price}€`,
        Datum: b.date,
        Ura: b.time,
        Nacin_Placila: b.paymentLabel,
      }),
    });
    const result = await res.json();
    if (result.success) return "sent";
    console.error("Web3Forms error:", result);
    return "failed";
  } catch (err) {
    console.error(err);
    return "offline";
  }
}

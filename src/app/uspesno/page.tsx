import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isOnlinePaymentEnabled } from "@/config/site";
import { paymentState, type PaymentState } from "@/lib/checkout";
import { stripeClient } from "@/lib/stripe";
import PaidBookingEmail from "./PaidBookingEmail";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const CONTENT: Record<PaymentState, { title: string; text: string; ok: boolean }> = {
  paid: {
    ok: true,
    title: "Plačilo prejeto",
    text: "Hvala! V 24 urah boste prejeli potrditev termina oziroma predlog za drug termin. Če vam noben termin ne ustreza, vam celoten znesek vrnemo. Potrdilo o plačilu ste prejeli na e-pošto.",
  },
  unpaid: {
    ok: false,
    title: "Plačilo ni bilo zaključeno",
    text: "S kartice nismo prejeli plačila. Termin lahko rezervirate znova ali izberete plačilo na lokaciji.",
  },
  unknown: {
    ok: false,
    title: "Plačila trenutno ne moremo preveriti",
    text: "Prosimo, ne plačajte ponovno. V 24 urah vas bomo kontaktirali. Za vprašanja pišite na mirjana@akilea.si ali pokličite 040 863 594.",
  },
};

type PageProps = { searchParams: Promise<{ session_id?: string | string[] }> };

export default async function UspesnoPlacilo({ searchParams }: PageProps) {
  if (!isOnlinePaymentEnabled()) notFound();

  const { session_id } = await searchParams;
  const stripe = stripeClient();
  const { state, booking } = await paymentState(session_id, stripe ? (id) => stripe.checkout.sessions.retrieve(id) : null);
  const { title, text, ok } = CONTENT[state];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col items-center justify-center py-20 px-6">
      {booking && typeof session_id === "string" && <PaidBookingEmail sessionId={session_id} booking={booking} />}
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-10 text-center border border-[var(--color-border)]">
        {ok && (
          <div className="w-20 h-20 bg-[#f4f8eb] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#6a882a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

        <h1 className="font-serif text-3xl text-[var(--color-primary)] mb-4">{title}</h1>
        <p className="text-[var(--color-muted)] font-light leading-relaxed mb-8">{text}</p>

        <Link
          href={ok ? "/" : "/#rezervacija"}
          className="btn-primary block w-full py-4 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-md bg-[#6a882a] text-white hover:bg-[#556d22] hover:-translate-y-1"
        >
          {ok ? "Nazaj na domačo stran" : "Nazaj na rezervacijo"}
        </Link>
      </div>
    </div>
  );
}

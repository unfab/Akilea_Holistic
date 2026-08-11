import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: 'Stripe ni konfiguriran (manjka STRIPE_SECRET_KEY v .env)' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
  });

  try {
    const body = await req.json();
    const { serviceName, price, date, time, customerEmail } = body;

    // Podrobnosti o storitvi za prikaz na Stripe Checkout strani
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: serviceName,
              description: `Termin: ${date} ob ${time}`,
            },
            unit_amount: Math.round(price * 100), // Stripe zahteva cene v centih
          },
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/uspesno?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/`,
      metadata: {
        date,
        time,
        service: serviceName,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe API napaka:', error);
    return NextResponse.json(
      { error: error.message || 'Prišlo je do napake pri obdelavi plačila.' },
      { status: 500 }
    );
  }
}

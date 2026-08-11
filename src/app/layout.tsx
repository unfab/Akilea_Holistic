import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naturopatija in intuitivna masaža Koper | Akilea",
  description: "Naturopatija in intuitivna masaža Koper — Povrnite notranji mir in zaživite brez napetosti. Pokličite: 040 863 594.",
  alternates: {
    canonical: "https://www.akilea.si",
  },
  openGraph: {
    title: "Naturopatija in intuitivna masaža Koper | Akilea",
    description: "Povrnite notranji mir in zaživite brez napetosti. Pokličite: 040 863 594.",
    url: "https://www.akilea.si",
    siteName: "Akilea",
    locale: "sl_SI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.akilea.si/#business",
    "name": "Akilea, Mirjana Groznik s.p.",
    "url": "https://www.akilea.si/",
    "telephone": "+386 40 863 594",
    "email": "mirjana@akilea.si",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Šmarska cesta 5B",
      "addressLocality": "Koper",
      "postalCode": "6000",
      "addressCountry": "SI"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.5469,
      "longitude": 13.7294
    },
    "areaServed": [
      { "@type": "City", "name": "Koper" },
      { "@type": "AdministrativeArea", "name": "Obalno-kraška regija" }
    ],
    "description": "Naturopatija in intuitivna masaža Koper — Povrnite notranji mir in zaživite brez napetosti."
  };

  return (
    <html
      lang="sl"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-[var(--color-accent)] selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

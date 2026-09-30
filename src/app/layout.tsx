import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akilea.si"),
  title: "Holistični center & intuitivna masaža Koper | Akilea",
  description: "Holistični center in intuitivna masaža Koper — Mirjana Groznik, intuitivna svetovalka. Povrnite notranji mir in zaživite brez napetosti. Pokličite: 040 863 594.",
  keywords: [
    // Primarne storitve in lokalni SEO
    "intuitivna masaža",
    "intuitivna masaža Koper",
    "intuitivna masaza",
    "intuitivno svetovanje",
    "intuitivna svetovalka",
    "intuitivni reading",
    "reading",
    "holistični center Koper",
    "Mirjana Groznik",
    "Akilea",
    // Telo in somatika
    "telo pove",
    "ko telo spregovori",
    "poslušaj svoje telo",
    "poslusaj svoje telo",
    "sporočila telesa",
    "sporocila telesa",
    "zapisi telesa",
    "zapisi v telesu",
    "somatsko",
    "somatic",
    // Energija in energijski centri
    "intuicija",
    "energija",
    "energije",
    "energetska polja",
    "čakre",
    "cakre",
    "meridiani",
    "duša",
    "dusa",
    "stik z dušami",
    "ženska energija",
    "zenska energija",
    "moška energija",
    "moska energija",
    // Notranji otrok, predniki in žensko zdravje
    "notranji otrok",
    "ranjeni notranji otrok",
    "pridna punčka",
    "pridna puncka",
    "pretekla življenja",
    "prednice",
    "sporočila prednic",
    "sporočila prednikov",
    "maternica",
    "ko maternica spregovori",
    "jajčniki",
    // Fizične bolečine, delovno okolje in zdravje
    "bolečine v hrbtu",
    "bolecine v hrbtu",
    "bolečine v križu",
    "bolecine v krizu",
    "bolečine v ramenih",
    "bolecine v ramenih",
    "sedeče delo",
    "sadece delo",
    "zaposleni",
    "zdravje",
    "zdrav duh v zdravem telesu",
    "obvladovanje stresa",
    "stres",
    "gibanje",
    // Mindset, čustva in transformacija
    "delo na sebi",
    "transformacija",
    "globoka transformacija",
    "mindset",
    "miselnost",
    "pogled z drugega zornega kota",
    "zamenjaj misel",
    "misli",
    "razum",
    "razumevanje",
    "ego",
    "samokritik",
    "samosabotaža",
    "samosabotaza",
    "samosaboterji",
    "čustva",
    "custva",
    "notranji svet",
    "jeza",
    "žalost",
    "zalost",
    "zamera",
    "strah",
    "strah me je",
    "pisanje",
    "dnevnik",
    "pisanje dnevnika",
    "stagnacija",
    "obstati na mestu",
    "spremembe",
    "želja po spremembi",
    "vkopanost",
    "počutim se vkopana",
    // Odnosi, meje in čustvena stanja
    "odnosi",
    "partnerski odnosi",
    "odnosi s starši",
    "odnos z mamo",
    "odnos z očetom",
    "čustveno odsotni",
    "odnosi me izčrpavajo",
    "občutki krivde",
    "obcutki krivde",
    "perfekcionizem",
    "odgovornost",
    "bremena",
    "bremena ki jih nosimo",
    "postavljanje mej",
    "postavi sebe na listo prioritet",
    "prioritete",
    "utrujena sem",
    "izčrpana",
    "ne vem kako naprej",
    "nežnost",
    "ljubezen",
    "pogum",
    "korak za korakom",
    "lepota",
    "vidim",
    "čutim",
    "zaznavam",
    "želim si",
    "dovolim si",
    "zmorem",
    "delam",
    // Gradiva in viri
    "e-knjiga",
    "ebook",
    "praktični vodnik",
    "knjige",
    "izkušnje"
  ],
  alternates: {
    canonical: "https://www.akilea.si",
  },
  openGraph: {
    title: "Holistični center & intuitivna masaža Koper | Akilea",
    description: "Povrnite notranji mir in zaživite brez napetosti. Pokličite: 040 863 594.",
    url: "https://www.akilea.si",
    siteName: "Akilea",
    locale: "sl_SI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
    "description": "Holistični center in intuitivna masaža Koper — Mirjana Groznik, intuitivna svetovalka. Povrnite notranji mir in zaživite brez napetosti.",
    "knowsAbout": [
      "Intuitivna masaža",
      "Intuitivno svetovanje in reading",
      "Sporočila telesa in somatika",
      "Lajšanje bolečin v križu in hrbtu",
      "Notranji otrok in celjenje čustvenih ran",
      "Energijska polja, čakre in meridiani",
      "Ženska energija in maternica",
      "Postavljanje mej in osebna transformacija",
      "Korporativni wellness in obvladovanje stresa"
    ]
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
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}

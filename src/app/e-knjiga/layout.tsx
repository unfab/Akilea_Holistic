import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-knjiga & Praktični vodnik: Ko telo spregovori | Akilea",
  description: "Brezplačna e-knjiga in praktični vodnik Mirjane Groznik. Naučite se prepoznati sporočila telesa, zamenjati misel in premagati samosabotažo.",
  keywords: [
    "e-knjiga",
    "ebook",
    "praktični vodnik",
    "knjige",
    "telo pove",
    "ko telo spregovori",
    "poslušaj svoje telo",
    "sporočila telesa",
    "zapisi telesa",
    "zapisi v telesu",
    "delo na sebi",
    "mindset",
    "miselnost",
    "pogled z drugega zornega kota",
    "zamenjaj misel",
    "misli",
    "samokritik",
    "samosabotaža",
    "samosaboterji",
    "pisanje",
    "dnevnik",
    "pisanje dnevnika",
    "stagnacija",
    "obstati na mestu",
    "spremembe",
    "želja po spremembi",
    "postavljanje mej",
    "postavi sebe na listo prioritet",
    "izkušnje",
    "zmorem",
    "delam"
  ],
  alternates: {
    canonical: "https://www.akilea.si/e-knjiga",
  },
  openGraph: {
    title: "E-knjiga & Praktični vodnik: Ko telo spregovori | Akilea",
    description: "Brezplačna e-knjiga in praktični vodnik Mirjane Groznik za poslušanje sporočil telesa.",
    url: "https://www.akilea.si/e-knjiga",
  },
};

export default function EKnjigaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

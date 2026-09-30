import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/config/site";

export const metadata: Metadata = {
  title: "Intuitivno svetovanje & Reading Koper | Akilea",
  description: "Intuitivno svetovanje in reading z Mirjano Groznik. Prepoznajte ranjenega notranjega otroka, postavite meje, premagajte občutke krivde in zaživite svobodno. Naročite se.",
  keywords: [
    "intuitivno svetovanje",
    "intuitivna svetovalka",
    "intuitivni reading",
    "reading",
    "notranji otrok",
    "ranjeni notranji otrok",
    "pridna punčka",
    "delo na sebi",
    "globoka transformacija",
    "transformacija",
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
    "samosaboterji",
    "čustva",
    "notranji svet",
    "odnosi",
    "partnerski odnosi",
    "odnosi s starši",
    "odnos z mamo",
    "odnos z očetom",
    "čustveno odsotni",
    "odnosi me izčrpavajo",
    "občutki krivde",
    "perfekcionizem",
    "odgovornost",
    "bremena",
    "postavljanje mej",
    "postavi sebe na listo prioritet",
    "prioritete",
    "utrujena sem",
    "izčrpana",
    "ne vem kako naprej",
    "strah",
    "strah me je",
    "vkopanost",
    "počutim se vkopana",
    "duša",
    "stik z dušami",
    "prednice",
    "sporočila prednic",
    "sporočila prednikov",
    "pretekla življenja"
  ],
  alternates: {
    canonical: "https://www.akilea.si/posvet",
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Intuitivno svetovanje & Reading Koper | Akilea",
    description: "Intuitivno svetovanje in reading z Mirjano Groznik v Kopru ali na daljavo.",
    url: "https://www.akilea.si/posvet",
  },
};

export default function PosvetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

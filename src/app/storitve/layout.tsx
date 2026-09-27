import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intuitivna masaža Koper — storitve | Akilea",
  description: "Intuitivna masaža celega telesa, hrbta in trebuha v Kopru. Sprostite mišično napetost, bolečine v križu in prisluhnite sporočilom telesa. Pokličite: 040 863 594.",
  keywords: [
    "intuitivna masaža",
    "intuitivna masaža Koper",
    "intuitivna masaza",
    "masaža celega telesa",
    "masaža hrbta",
    "masaža trebuha",
    "bolečine v hrbtu",
    "bolecine v hrbtu",
    "bolečine v križu",
    "bolecine v krizu",
    "bolečine v ramenih",
    "telo pove",
    "ko telo spregovori",
    "poslušaj svoje telo",
    "sporočila telesa",
    "zapisi telesa",
    "zapisi v telesu",
    "somatsko",
    "somatic",
    "čakre",
    "meridiani",
    "energetska polja",
    "ženska energija",
    "maternica",
    "ko maternica spregovori",
    "jajčniki",
    "sproščanje napetosti",
    "delo na sebi",
    "nežnost",
    "ljubezen"
  ],
  alternates: {
    canonical: "https://www.akilea.si/storitve",
  },
  openGraph: {
    title: "Intuitivna masaža Koper — storitve | Akilea",
    description: "Intuitivna masaža celega telesa, hrbta in trebuha v Kopru. Sprostite bolečine in prisluhnite telesu.",
    url: "https://www.akilea.si/storitve",
  },
};

export default function StoritveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog o zdravju, intuiciji in modrosti telesa | Akilea",
  description: "Strokovni in osebni zapisi Mirjane Groznik: intuitivne masaže, bolečine v križu, notranji otrok, čustva in poslušanje telesa.",
  keywords: [
    "blog",
    "intuicija",
    "intuitivna masaža",
    "sporočila telesa",
    "telo pove",
    "ko telo spregovori",
    "poslušaj svoje telo",
    "notranji otrok",
    "ranjeni notranji otrok",
    "bolečine v križu",
    "bolečine v hrbtu",
    "moxanje",
    "delo na sebi",
    "čustva",
    "somatsko",
    "somatic",
    "zdravje",
    "energija",
    "transformacija"
  ],
  alternates: {
    canonical: "https://www.akilea.si/blog",
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Blog o zdravju, intuiciji in modrosti telesa | Akilea",
    description: "Zapisi Mirjane Groznik o intuiciji, masažah, bolečinah v križu in čustvih.",
    url: "https://www.akilea.si/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

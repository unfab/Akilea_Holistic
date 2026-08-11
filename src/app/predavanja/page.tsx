import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Predavanja | Akilea Center zdravja",
  description: "B2B predavanja, korporativni wellness in izobraževanja.",
};

export default function PredavanjaPage() {
  return (
    <div className="spa-view active bg-white min-h-screen py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">Delitev znanja</span>
          <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">Predavanja in B2B</h1>
          <p className="text-[var(--color-muted)] font-light leading-relaxed text-lg">
            Zdravo delovno okolje in opolnomočeni zaposleni so ključ do uspeha vsakega podjetja.
          </p>
        </div>

        <div className="bg-[var(--color-surface)] p-8 lg:p-12 rounded-lg mb-12 shadow-sm">
          <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-6">Korporativni wellness & Izobraževanja</h2>
          <div className="space-y-4 text-[var(--color-muted)] font-light leading-relaxed mb-8">
            <p>
              V hitrem tempu sodobnega poslovanja so zaposleni izpostavljeni vsakodnevnemu stresu, kar vodi v izgorelost, zmanjšano produktivnost in slabe medosebne odnose.
            </p>
            <p>
              Pripravljamo strokovna in interaktivna predavanja na temo obvladovanja stresa, prepoznavanja telesnih signalov in vzpostavljanja zdravega delovnega okolja. Naša predavanja so prilagojena specifičnim potrebam vašega kolektiva.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded border border-[var(--color-border)] text-center">
            <h3 className="font-serif text-[var(--color-primary)] mb-4">Vas zanima predavanje v vašem podjetju?</h3>
            <p className="text-sm text-[var(--color-muted)] font-light mb-6">Stopite v stik z nami in pripravili vam bomo ponudbo po meri.</p>
            <a href="mailto:info@akilea.si" className="btn-primary px-8 py-3 text-xs uppercase tracking-widest font-bold inline-block">
              Pošljite povpraševanje
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

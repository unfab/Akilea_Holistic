import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Delavnice in Čajanke | Akilea Center zdravja",
  description: "Skupinske delavnice in sproščene čajanke v centru Akilea.",
};

export default function DelavnicePage() {
  return (
    <div className="spa-view active bg-[var(--color-bg)] min-h-screen py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">Skupnost</span>
          <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">Delavnice in Čajanke</h1>
          <p className="text-[var(--color-muted)] font-light leading-relaxed text-lg max-w-2xl mx-auto">
            Varnost skupine pogosto nudi tisto dodatno oporo, ki jo potrebujemo za globlji vpogled vase. Pridružite se nam na prihajajočih dogodkih.
          </p>
        </div>

        <div className="space-y-8">
          {/* Active Event */}
          <div className="bg-white rounded-lg shadow-sm border border-[var(--color-border)] p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-2">Čajanka o čustvih</h2>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[var(--color-accent-alt)] text-[var(--color-primary)] px-3 py-1 rounded text-sm font-medium">Ljubljana</span>
                <span className="text-[var(--color-accent-green)] font-bold">15. September 2026 ob 17:00</span>
              </div>
              <p className="text-[var(--color-muted)] font-light mb-6">
                Pridružite se nam ob toplem čaju in iskrenem pogovoru o sproščanju potlačenih čustev. Na dogodku bomo v manjšem krogu delili izkušnje in se naučili preprostih vaj za vsakodnevno sprostitev napetosti.
              </p>
              <div className="flex gap-4">
                <a href="mailto:info@akilea.si?subject=Prijava%20na%20čajanko%2015.%20september" className="btn-primary px-6 py-3 text-xs uppercase tracking-widest font-bold inline-block">
                  Prijavi se
                </a>
              </div>
            </div>
          </div>

          {/* Planned Event */}
          <div className="bg-white rounded-lg shadow-sm border border-[var(--color-border)] p-8 flex flex-col md:flex-row gap-8 items-center opacity-80">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-2">Delavnica za ženske: Poveži se s sabo</h2>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[var(--color-muted)] font-bold">Termin še ni določen</span>
              </div>
              <p className="text-[var(--color-muted)] font-light mb-6">
                Spoznajte tehnike samomasaže in povezovanja z lastnim telesom. Primerno za vse starosti. Vas zanima organizacija te delavnice v vašem kraju ali podjetju?
              </p>
              <div className="flex gap-4">
                <Link href="/predavanja" className="btn-secondary px-6 py-3 text-xs uppercase tracking-widest font-bold inline-block">
                  Pošljite povpraševanje
                </Link>
              </div>
            </div>
          </div>

          {/* Planned Event 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-[var(--color-border)] p-8 flex flex-col md:flex-row gap-8 items-center opacity-80">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-2">Skupinska meditacija</h2>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[var(--color-muted)] font-bold">Termin še ni določen</span>
              </div>
              <p className="text-[var(--color-muted)] font-light mb-6">
                Vodena meditacija za vzpostavljanje notranjega miru in odpravljanje nakopičenega stresa. Primerno za začetnike in izkušene.
              </p>
              <div className="flex gap-4">
                <Link href="/predavanja" className="btn-secondary px-6 py-3 text-xs uppercase tracking-widest font-bold inline-block">
                  Pošljite povpraševanje
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

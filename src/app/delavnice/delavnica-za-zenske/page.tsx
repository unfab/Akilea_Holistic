import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Delavnica za ženske | Akilea Center zdravja",
  description: "Spoznajte tehnike samomasaže in povezovanja z lastnim telesom.",
};

export default function DelavnicaZaZenskePage() {
  return (
    <div className="spa-view active bg-[var(--color-bg)] min-h-screen pb-20">
      <div className="relative h-[40vh] w-full min-h-[300px]">
        <Image 
          src="https://static.wixstatic.com/media/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg/v1/fit/w_1200,h_600,al_c,q_90/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg"
          alt="Delavnica za ženske"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-6">
            <span className="text-[10px] uppercase tracking-widest text-white/90 font-semibold mb-4 block">Delavnice in Čajanke</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">Delavnica za ženske</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-lg border border-[var(--color-border)] p-8 lg:p-12">
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-bold">Termin</p>
                <p className="text-sm font-medium text-[var(--color-muted)]">Še ni določen</p>
              </div>
            </div>
          </div>

          <div className="prose prose-sm md:prose-base max-w-none text-[var(--color-muted)] font-light leading-relaxed mb-12">
            <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-4">O dogodku</h3>
            <p>
              Žensko telo je skozi vsa življenjska obdobja podvrženo številnim spremembam, vplivom stresa in hitremu tempu. Ta delavnica je namenjena prav nam – ženskam vseh generacij, ki želimo ponovno najti stik s sabo in prebuditi svojo žensko energijo.
            </p>
            <p>
              Preko praktičnih prikazov in vodenih tehnik boste spoznale osnove samomasaže, pomen skrbi za telo ter kako si lahko z drobnimi vsakodnevnimi rituali izboljšate počutje, povečate pretočnost energije in sprostite um.
            </p>
          </div>

          <div className="bg-[var(--color-surface)] rounded-lg p-8 text-center border border-[var(--color-border)]">
            <h4 className="text-xl font-serif text-[var(--color-primary)] mb-2">Vas obvestimo o naslednjem terminu?</h4>
            <p className="text-sm text-[var(--color-muted)] font-light mb-6">Pošljite povpraševanje in prvi boste izvedeli, ko razpišemo nov termin.</p>
            <Link href="/posvet" className="btn-secondary px-8 py-4 text-xs uppercase tracking-widest font-bold inline-block bg-white shadow-sm hover:bg-gray-50 transition-colors">
              Pošlji povpraševanje
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

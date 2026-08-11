import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Skupinska meditacija | Akilea Center zdravja",
  description: "Vodena meditacija za vzpostavljanje notranjega miru in odpravljanje nakopičenega stresa.",
};

export default function SkupinskaMeditacijaPage() {
  return (
    <div className="spa-view active bg-[var(--color-bg)] min-h-screen pb-20">
      <div className="relative h-[40vh] w-full min-h-[300px]">
        <Image 
          src="https://static.wixstatic.com/media/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png/v1/fill/w_1200,h_600,al_c,q_90/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png"
          alt="Skupinska meditacija"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-6">
            <span className="text-[10px] uppercase tracking-widest text-white/90 font-semibold mb-4 block">Delavnice in Čajanke</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">Skupinska meditacija</h1>
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
              Um je orodje, ki pa včasih zaradi preobilice informacij postane preglasen. Skupinska meditacija ponuja edinstven prostor in energijo, v kateri je veliko lažje utišati zunanji svet in prisluhniti sebi.
            </p>
            <p>
              Na vodenih srečanjih se bomo osredotočali na prizemljitev, tehniko dihanja in sproščanje mentalne ter fizične napetosti. Meditacija v skupini ustvari močno podporno mrežo in poglobljeno izkušnjo sprostitve. 
            </p>
            <p>
              Predhodne izkušnje z meditacijo niso potrebne, le udobna oblačila in odprto srce.
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

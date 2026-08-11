import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Čajanka o čustvih | Akilea Center zdravja",
  description: "Pridružite se nam ob toplem čaju in iskrenem pogovoru o sproščanju potlačenih čustev.",
};

export default function CajankaPage() {
  return (
    <div className="spa-view active bg-[var(--color-bg)] min-h-screen pb-20">
      <div className="relative h-[40vh] w-full min-h-[300px]">
        <Image 
          src="https://static.wixstatic.com/media/11062b_dd8a0854f84e495a8e5d10f2b8c5f4ec~mv2.jpg/v1/fill/w_1200,h_600,al_c,q_85/11062b_dd8a0854f84e495a8e5d10f2b8c5f4ec~mv2.jpg"
          alt="Čajanka"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-6">
            <span className="text-[10px] uppercase tracking-widest text-white/90 font-semibold mb-4 block">Delavnice in Čajanke</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">Čajanka o čustvih</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-lg border border-[var(--color-border)] p-8 lg:p-12">
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f4f8eb] flex items-center justify-center text-[#6a882a]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-bold">Termin</p>
                <p className="text-sm font-medium text-[var(--color-primary)]">15. September 2026 ob 17:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f4f8eb] flex items-center justify-center text-[#6a882a]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-bold">Lokacija</p>
                <p className="text-sm font-medium text-[var(--color-primary)]">Center Akilea, Koper</p>
              </div>
            </div>
          </div>

          <div className="prose prose-sm md:prose-base max-w-none text-[var(--color-muted)] font-light leading-relaxed mb-12">
            <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-4">O dogodku</h3>
            <p>
              V hitrem tempu sodobnega življenja pogosto pozabimo prisluhniti sebi in svojim čustvom. Potlačena čustva pa ne izginejo – shranijo se v našem telesu in lahko sčasoma povzročijo napetost ali bolečino.
            </p>
            <p>
              Pridružite se nam na intimni in sproščeni čajanki, kjer bomo v varnem prostoru delili izkušnje ter se skozi pogovor in vaje naučili tehnik prepoznavanja in varnega sproščanja čustev. 
            </p>
            <p>
              Število mest je omejeno, zato pohitite s prijavo in si zagotovite svoj prostor v krogu somišljenikov.
            </p>
          </div>

          <div className="bg-[var(--color-surface)] rounded-lg p-8 text-center border border-[var(--color-border)]">
            <h4 className="text-xl font-serif text-[var(--color-primary)] mb-2">Želite sodelovati?</h4>
            <p className="text-sm text-[var(--color-muted)] font-light mb-6">Prijavite se preko spodnjega gumba in poslali vam bomo vse podrobnosti.</p>
            <Link href="/posvet" className="btn-primary px-8 py-4 text-xs uppercase tracking-widest font-bold inline-block shadow-md">
              Prijavi se na čajanko
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

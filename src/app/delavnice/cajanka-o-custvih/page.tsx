import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Čajanka s sporočilom: Kako biti balon med kaktusi? | Akilea",
  description: "Vabljena na Čajanko s sporočilom in dobrodelno noto za Lunino vilo, 15. 10. 2026 ob 19:00 v centru Akilea.",
};

export default function CajankaPage() {
  return (
    <div className="spa-view active bg-[var(--color-bg)] min-h-screen pb-20">
      
      {/* Hero Header */}
      <div className="relative h-[45vh] w-full min-h-[340px]">
        <Image 
          src="https://static.wixstatic.com/media/11062b_dd8a0854f84e495a8e5d10f2b8c5f4ec~mv2.jpg/v1/fill/w_1200,h_600,al_c,q_85/11062b_dd8a0854f84e495a8e5d10f2b8c5f4ec~mv2.jpg"
          alt="Topel čaj in varen prostor za pogovor"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#D4E89C] font-bold mb-3 block">
              Čajanka s sporočilom &bull; Dobrodelna nota
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
              »Kako biti balon med kaktusi?«
            </h1>
            <p className="text-white/90 font-light text-base sm:text-lg">
              Vabljena v varen prostor, kjer nobena tema ni tabu in kjer si lahko točno to, kar si.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-border)] p-8 lg:p-12">
          
          {/* Details Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-10 pb-8 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f4f8eb] flex items-center justify-center text-[#6a882a]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-bold">Datum in čas</p>
                <p className="text-base font-semibold text-[var(--color-primary)]">Četrtek, 15. 10. 2026 ob 19:00 – 21:00</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f5eff7] flex items-center justify-center text-[var(--color-primary)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-bold">Lokacija</p>
                <p className="text-base font-semibold text-[var(--color-primary)]">Holistični center AKILEA, Koper</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#fdf2e9] flex items-center justify-center text-[#d35400]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-bold">Prispevek</p>
                <p className="text-base font-semibold text-[var(--color-text)]">Brezplačno (prostovoljni prispevki za Lunino vilo)</p>
              </div>
            </div>
          </div>

          {/* Main Story & Text */}
          <div className="space-y-6 text-[var(--color-text)] font-light leading-relaxed text-base sm:text-lg">
            <p>
              Po čudovitem odzivu na čajanke v lanski sezoni z veseljem sporočam, da bomo s čajankami nadaljevale tudi v tej sezoni. Energija udeleženk in pogovori, ki so se razvili, so bili samo potrditev, da potrebujemo prostor, kjer se počutimo varno, slišano, sprejeto, kjer smo lahko iskreni, kjer nobena tema ni tabu, kjer pogovori gredo mnogo globlje od »kako si?«, kjer brez strahu vprašamo karkoli in se pogovarjamo o čemurkoli.
            </p>
            <p className="font-serif italic text-xl text-[var(--color-primary)]">
              Moja velika želja je, da prav holistični center AKILEA začutite kot tak prostor.
            </p>

            {/* Quotation block of common misunderstandings */}
            <div className="bg-[var(--color-surface)] p-6 sm:p-8 rounded-xl border-l-4 border-[var(--color-primary)] space-y-2 italic font-serif text-[var(--color-primary)] text-lg">
              <p>»... niso vsi taki kot ti …«</p>
              <p>»... kako si občutljiva …«</p>
              <p>»... to ni tvoje podjetje, kaj se toliko sekiraš? ...«</p>
              <p>»... kaj te briga, to ni tvoja odgovornost ...«</p>
              <p>»... joj, ne razmišljajo vsi tako kot ti …«</p>
            </div>

            <p>
              Če bi dobila evro za take in podobne stavke, bi bila do sedaj že milijonarka.
            </p>
            <p>
              Po mnogih letih jokanja in jeze nase, <em>»zakaj ne morem biti taka kot drugi?«</em>, sem se končno začela sprejemati (ne še popolnoma, še vedno me preletijo te misli) in se spraševati:
            </p>

            <div className="bg-[#f4f8eb] p-6 sm:p-8 rounded-xl border border-[#d2e5b8] space-y-3 text-sm sm:text-base">
              <p className="font-serif text-lg font-normal text-[#6a882a]">
                In kaj bi bilo narobe, če bi? Kaj bi bilo narobe, če bi vsak pogledal vsako stvar še z drugega zornega kota?
              </p>
              <p className="text-[var(--color-text)] font-light">Kaj bi bilo narobe, če bi vsak videl lepoto v drobnih stvareh –</p>
              <ul className="space-y-2 list-disc pl-5 text-[var(--color-text)]">
                <li>v lepi gesti, ko te neznanec spusti naprej v trgovini,</li>
                <li>ko vidiš, kako ima gostilna že nekaj časa isto, nasmejano ekipo in pohvališ šefa, ker očitno dela dobro,</li>
                <li>ko vidiš, opaziš trud in to tudi poveš,</li>
                <li>ko se zahvališ za topel dom in vodo, ki teče iz pipe,</li>
                <li>ko se zjutraj obrneš proti soncu in v teh nekaj sekundah želiš vsrkati čimveč energije,</li>
                <li>ko si želiš, da bi s sodelavci delali v skupno, višje dobro,</li>
                <li>ko bi vsak znal videti širše …</li>
              </ul>
            </div>

            <p>
              Ja, kaj bi bilo narobe, če bi »vsi tako razmišljali«. Verjetno bi bil svet veliko lepši. A niti ni namenjeno, da »vsi« tako razmišljamo, ker živimo v svetu polarnosti.
            </p>
            <p className="font-medium text-[var(--color-primary)]">
              A vem, da TI, ki bereš te vrstice, vsaj malo razmišljaš tako. A če malo pomisliš in se vprašaš – kot kdo pa bi želela biti?
            </p>

            {/* Metaphor Highlight */}
            <div className="bg-[var(--color-primary)] text-white p-6 sm:p-8 rounded-xl text-center shadow-sm">
              <p className="font-serif text-2xl sm:text-3xl italic mb-2">
                »Ni lahko biti balon med kaktusi. A naj te spomnim – balon lahko poleti visoko in kamorkoli želi.«
              </p>
            </div>

            <p>
              In ravno zato sem iskanje odgovora na vprašanje <strong>»KAKO BITI BALON MED KAKTUSI?«</strong> postavila za tokratno temo čajanke. S pomočjo vprašanj in določenih tehnik bomo skušale priti do odgovorov.
            </p>

            <div className="bg-[#f5eff7] p-5 rounded-lg border border-[var(--color-border)]">
              <p className="font-semibold text-[var(--color-primary)]">
                Vsaka udeleženka bo prejela tudi osebno intuitivno sporočilo, ki ji bo lahko v veliko oporo in pomoč.
              </p>
            </div>

            {/* Charity Section */}
            <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f4f8eb] flex items-center justify-center text-[#6a882a] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-serif text-[var(--color-primary)]">
                  Srečanje je brezplačno, a z dobrodelno noto
                </h4>
              </div>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                V prostor bom postavila posodico, kjer boš lahko oddala prostovoljne prispevke (po želji, lahko tudi 2 €). Celoten znesek bom podarila <strong>Inštitutu Lunina vila</strong> za zaščito in podporo spolno zlorabljenih otrok. Sama jim že dobro leto vsak mesec doniram po svojih zmožnostih. Bom pa seveda vesela tudi vaših predlogov.
              </p>
            </div>

            <p className="text-sm text-[var(--color-muted)]">
              Če imaš vprašanja ali bi želela o kakšni temi izvedeti več, mi kar piši na <a href="mailto:mirjana@akilea.si" className="text-[var(--color-primary)] font-bold underline">mirjana@akilea.si</a> ali na GSM <a href="tel:040863594" className="text-[var(--color-primary)] font-bold">040 863 594</a>.
            </p>

            <p className="font-serif text-lg text-[var(--color-primary)] pt-2">
              Objem,<br />
              Mirjana
            </p>
          </div>

          {/* Registration CTA to Google Forms */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)] text-center">
            <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-3">
              Če se najdeš v opisu in bi želela izvedeti več:
            </h3>
            <p className="text-sm text-[var(--color-muted)] mb-6 max-w-md mx-auto">
              Število mest v toplem krogu čajanke je omejeno. Klikni spodaj in izpolni kratek prijavni obrazec.
            </p>
            <a 
              href="https://forms.gle/hKdJKzi5bi2WGuEh7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-xs uppercase tracking-widest font-bold inline-block shadow-lg hover:shadow-xl transition-all"
            >
              Prijavi se na čajanko tukaj &rarr;
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

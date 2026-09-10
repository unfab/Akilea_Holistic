import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import BookingWidget from "@/components/BookingWidget";

export default function Home() {
  return (
    <div className="spa-view active">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] flex flex-col justify-center border-b border-[var(--color-border)] bg-white">
        <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-stretch my-auto">
          {/* Left Panel */}
          <div className="lg:col-span-7 bg-[var(--color-primary)] text-white p-8 lg:p-14 flex flex-col justify-center shadow-xl relative z-10">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)]">
                <span className="bg-white px-3.5 py-1.5 rounded-sm shadow-sm">
                  Intuitivna svetovalka
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.2] tracking-tight">
                Dobrodošli v holističnem centru AKILEA – prostoru, kjer telo spregovori, duša zadiha in um najde svoj mir.
              </h1>

              <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                Tukaj se stikajo starodavna znanja, intuitivna sporočila telesa in nežna moč dotika. Verjamem, da ima vsak od nas vse odgovore v sebi – včasih pa potrebujemo le varen prostor in pravo podporo, da jih zaslišimo. Naj bodo intuitivne masaže, delavnice ali preprosti nasveti za vsakdan vaša podpora na poti globokih transformacij.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/storitve"
                  className="btn-primary px-8 py-4 text-xs uppercase tracking-widest font-bold text-center"
                >
                  Izberite prosti termin
                </Link>
                <Link
                  href="/storitve"
                  className="border border-white/30 hover:border-white text-white px-8 py-4 text-xs uppercase tracking-widest font-bold text-center transition-colors"
                >
                  Preberite več o storitvah
                </Link>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex flex-col">
            <div className="w-full h-full relative min-h-[400px]">
              <Image
                src="/images/storitve/mirjana-masaza-hero.jpg"
                alt="Mirjana pri izvajanju intuitivne masaže - Holistični center Akilea"
                fill
                className="absolute inset-0 w-full h-full object-cover object-center"
                priority
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 text-center">
                <p className="font-serif text-[var(--color-primary)] text-lg italic">
                  "Ko telo spregovori, se dogajajo čudeži. Prisluhni mu."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REVIEWS MARQUEE (Dve vrstici s karticami mnenj) */}
      <Marquee />

      {/* 3. PREDSTAVITEV INTUITIVNIH MASAŽ */}
      <section className="py-20 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">
              Naša ponudba
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--color-primary)] mb-3">
              Avtorske intuitivne masaže
            </h2>
            <p className="text-[var(--color-muted)] font-light max-w-xl mx-auto text-base">
              Edinstven preplet masažnega dotika, energijske podpore in intuitivnih sporočil za celostno sprostitev telesa ter duha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Masaža telesa */}
            <div className="group bg-[var(--color-surface)] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src="https://static.wixstatic.com/media/a35aecb9d76b4ae39f68a92c19ffe590.jpg/v1/fill/w_333,h_220,fp_0.50_0.50,lg_1,q_80,enc_auto/a35aecb9d76b4ae39f68a92c19ffe590.jpg"
                  alt="Intuitivna masaža telesa"
                  fill
                  className="object-cover img-editorial"
                  unoptimized
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-bold text-[var(--color-primary)]">
                  105 min &bull; 85 €
                </div>
              </div>
              <div className="p-8 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-serif mb-2 text-[var(--color-primary)]">
                  Intuitivna masaža telesa
                </h3>
                <p className="text-sm text-[var(--color-muted)] font-light mb-6 flex-grow">
                  Celostna sprostitev in pretočnost energij po meridianih s sporočili telesa.
                </p>
                <Link
                  href="/storitve#masaza-telesa"
                  className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)] transition-colors self-center mt-auto"
                >
                  Več o storitvi &rarr;
                </Link>
              </div>
            </div>

            {/* Masaža trebuha */}
            <div className="group bg-[var(--color-surface)] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src="https://static.wixstatic.com/media/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png/v1/fill/w_863,h_574,al_c,q_90,enc_auto/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png"
                  alt="Intuitivna masaža trebuha"
                  fill
                  className="object-cover img-editorial"
                  unoptimized
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-bold text-[var(--color-primary)]">
                  50 min &bull; 50 €
                </div>
              </div>
              <div className="p-8 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-serif mb-2 text-[var(--color-primary)]">
                  Intuitivna masaža trebuha
                </h3>
                <p className="text-sm text-[var(--color-muted)] font-light mb-6 flex-grow">
                  Sproščanje čustvenega centra in zastalih napetosti za občutek globoke lahkotnosti.
                </p>
                <Link
                  href="/storitve#masaza-trebuha"
                  className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)] transition-colors self-center mt-auto"
                >
                  Več o storitvi &rarr;
                </Link>
              </div>
            </div>

            {/* Masaža hrbta */}
            <div className="group bg-[var(--color-surface)] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src="https://static.wixstatic.com/media/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg/v1/fit/w_3648,h_5472,al_c,q_90/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg"
                  alt="Intuitivna masaža hrbta"
                  fill
                  className="object-cover img-editorial"
                  unoptimized
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-bold text-[var(--color-primary)]">
                  50 min &bull; 50 €
                </div>
              </div>
              <div className="p-8 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-serif mb-2 text-[var(--color-primary)]">
                  Intuitivna masaža hrbta
                </h3>
                <p className="text-sm text-[var(--color-muted)] font-light mb-6 flex-grow">
                  Odpravljanje globokih fizičnih in čustvenih napetosti vzdolž hrbtenice.
                </p>
                <Link
                  href="/storitve#masaza-hrbta"
                  className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)] transition-colors self-center mt-auto"
                >
                  Več o storitvi &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRIJE KVADRATI (1. BLOGI, 2. DELAVNICE, 3. PREDAVANJA) */}
      <section className="py-20 lg:py-28 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">
              Znanje, dogodki &amp; povezovanje
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--color-primary)] mb-3">
              Aktualno v centru Akilea
            </h2>
            <p className="text-[var(--color-muted)] font-light max-w-2xl mx-auto text-base">
              V spodnjih sklopih spremljajte najnovejša razmišljanja, napovedane delavnice ter izobraževanja za posameznike in skupine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* KVADRAT 1: BLOGI */}
            <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden relative bg-[var(--color-surface)]">
                <Image
                  src="https://static.wixstatic.com/media/dfaf38_a0bc3f19155947b6b1c3e2c9a4aa3f6b~mv2.jpeg/v1/fill/w_800,h_1000,al_c,q_85,usm_0.66_1.00_0.01/dfaf38_a0bc3f19155947b6b1c3e2c9a4aa3f6b~mv2.jpeg"
                  alt="Najnovejši blog"
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold">
                  1. Blogi
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-primary)] px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-wider font-semibold">
                  Najnovejše
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-[#6a882a] font-bold mb-2">
                  Članki in razmišljanja &bull; 30. apr
                </span>
                <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                  “Brez ljubezni mi živeti ni…”
                </h3>
                <p className="text-[var(--color-muted)] font-light text-sm leading-relaxed mb-6 flex-grow">
                  Ljubezen – najmočnejša sila v Vesolju. A zakaj se v partnerskih odnosih tako pogosto vklopi strah, obrambni mehanizem in dvom o lastni vrednosti?
                </p>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between mt-auto">
                  <Link
                    href="/blog/brez-ljubezni-mi-ziveti-ni"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6a882a] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Preberi članek &rarr;
                  </Link>
                  <Link
                    href="/blog"
                    className="text-[10px] uppercase tracking-widest font-semibold text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Vsi blogi
                  </Link>
                </div>
              </div>
            </div>

            {/* KVADRAT 2: DELAVNICE */}
            <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden relative bg-[var(--color-surface)]">
                <Image
                  src="https://static.wixstatic.com/media/11062b_dd8a0854f84e495a8e5d10f2b8c5f4ec~mv2.jpg/v1/fill/w_1200,h_600,al_c,q_85/11062b_dd8a0854f84e495a8e5d10f2b8c5f4ec~mv2.jpg"
                  alt="Čajanka s sporočilom"
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold">
                  2. Delavnice
                </div>
                <div className="absolute top-4 right-4 bg-[#6a882a] text-white px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-wider font-semibold">
                  Prihajajoči dogodek
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-[#6a882a] font-bold mb-2">
                  Četrtek, 15. oktober 2026 ob 19:00
                </span>
                <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                  Čajanka: »Kako biti balon med kaktusi?«
                </h3>
                <p className="text-[var(--color-muted)] font-light text-sm leading-relaxed mb-6 flex-grow">
                  Varen prostor ob toplem čaju, kjer nobena tema ni tabu. Osebno intuitivno sporočilo za vsako udeleženko ter dobrodelna nota za Lunino vilo.
                </p>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between mt-auto">
                  <Link
                    href="/delavnice/cajanka-o-custvih"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6a882a] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Podrobnosti &amp; Prijava &rarr;
                  </Link>
                  <Link
                    href="/delavnice"
                    className="text-[10px] uppercase tracking-widest font-semibold text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Vse delavnice
                  </Link>
                </div>
              </div>
            </div>

            {/* KVADRAT 3: PREDAVANJA */}
            <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden relative bg-[var(--color-surface)]">
                <Image
                  src="https://static.wixstatic.com/media/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg/v1/fit/w_3648,h_5472,al_c,q_90/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg"
                  alt="Predavanja in izobraževanja"
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold">
                  3. Predavanja
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-primary)] px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-wider font-semibold">
                  Za organizacije
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-[#6a882a] font-bold mb-2">
                  Korporativni wellness &bull; Predavanja
                </span>
                <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                  Vpliv stresa na telo &amp; Dobro počutje
                </h3>
                <p className="text-[var(--color-muted)] font-light text-sm leading-relaxed mb-6 flex-grow">
                  Praktična strokovna izobraževanja za podjetja in zaključene skupine o prepoznavanju znakov telesa, sproščanju napetosti in ravnovesju na delovnem mestu.
                </p>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between mt-auto">
                  <Link
                    href="/predavanja"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6a882a] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Pošlji povpraševanje &rarr;
                  </Link>
                  <Link
                    href="/predavanja"
                    className="text-[10px] uppercase tracking-widest font-semibold text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Več informacij
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. O MENI (Pod 3 kvadrati) */}
      <section id="o-meni" className="py-20 lg:py-28 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] max-w-sm mx-auto w-full">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRMog5kCJ9ZBNxxvqxuysiEaWuQPOg0mx_iTUqF7r9fQLiSkCaUEO2QA&s=10"
              alt="Mirjana Groznik - Akilea Holistični center"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              O ustanoviteljici
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--color-primary)]">
              Moje ime je Mirjana Groznik, intuitivna svetovalka.
            </h2>
            <div className="text-[var(--color-muted)] font-light leading-relaxed space-y-4 text-base">
              <p>
                Sem večna študentka življenja in strastna raziskovalka človekovega delovanja. Po letih izkušenj v poslovnem svetu, osebni prelomnici ter študiju naturopatije in energijskih tehnik sem sledila klicu duše ter ustvarila prostor, kjer se fizično združuje z nefizičnim.
              </p>
              <p>
                Tako je nastala avtorska <strong>INTUITIVNA MASAŽA</strong>. Orodje, s katerim skozi nežno poslušanje telesnih sporočil odpiramo prostor globokim transformacijam, sproščamo ujeta čustva in stopamo na pot do pristnega notranjega ravnovesja.
              </p>
              <p className="italic text-[var(--color-primary)] font-serif text-lg pt-2">
                »Center Akilea je varen kotiček za vračanje k sebi in celostno podporo vašemu telesu.«
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REZERVACIJA TERMINA */}
      <BookingWidget />
    </div>
  );
}

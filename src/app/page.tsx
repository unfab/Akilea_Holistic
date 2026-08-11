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
                <span className="bg-white px-3 py-1.5 rounded-sm">Diplomirana Naturopatinja</span>
                <span className="bg-white px-3 py-1.5 rounded-sm">Reiki Mojstrica</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.15] tracking-tight">
                Naturopatija in intuitivna masaža Koper
              </h1>

              <p className="text-white/90 text-xl sm:text-2xl font-serif font-light leading-snug mb-2">
                Povrnite notranji mir in zaživite brez napetosti.
              </p>
              
              <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                Združujemo strokovne naturopatske obravnave, Reiki energijsko podporo in avtorsko
                intuitivno masažo — <span className="text-white font-medium border-b border-white pb-0.5">tako da lahko</span> varno sprostite ujeta čustva, se rešite bolečin in si svoj termin izberete neposredno na spletu.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/storitve" className="btn-primary px-8 py-4 text-xs uppercase tracking-widest font-bold text-center">
                  Izberite prosti termin
                </Link>
                <Link href="/storitve" className="border border-white/30 hover:border-white text-white px-8 py-4 text-xs uppercase tracking-widest font-bold text-center transition-colors">
                  Preberite več
                </Link>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex flex-col">
            <div className="w-full h-full relative min-h-[400px]">
              <Image
                src="https://static.wixstatic.com/media/dfaf38_ce69c16e84bd46348775a8a848b306f2~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dfaf38_ce69c16e84bd46348775a8a848b306f2~mv2.jpg"
                alt="Mirjana pri delu - Intuitivna Masaža"
                fill
                className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
                unoptimized
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 text-center">
                <p className="font-serif text-[var(--color-primary)] text-lg italic">
                  "Telo vedno pozna pot nazaj k sebi."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REVIEWS MARQUEE */}
      <Marquee />

      {/* 3. SERVICES TEASER */}
      <section className="py-20 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">Naša ponudba</span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--color-primary)]">Holistični pristopi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-[var(--color-surface)] rounded overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image src="https://static.wixstatic.com/media/a35aecb9d76b4ae39f68a92c19ffe590.jpg/v1/fill/w_333,h_220,fp_0.50_0.50,lg_1,q_80,enc_auto/a35aecb9d76b4ae39f68a92c19ffe590.jpg" alt="Masaža telesa" fill className="object-cover img-editorial" unoptimized />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-serif mb-3">Intuitivna masaža telesa</h3>
                <p className="text-sm text-[var(--color-muted)] font-light mb-6">Celostna sprostitev in pretočnost.</p>
                <Link href="/storitve" className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)] transition-colors">Več o storitvi</Link>
              </div>
            </div>
            <div className="group bg-[var(--color-surface)] rounded overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image src="https://static.wixstatic.com/media/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png/v1/fill/w_863,h_574,al_c,q_90,enc_auto/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png" alt="Masaža trebuha" fill className="object-cover img-editorial" unoptimized />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-serif mb-3">Intuitivna masaža trebuha</h3>
                <p className="text-sm text-[var(--color-muted)] font-light mb-6">Sproščanje čustvenega centra.</p>
                <Link href="/storitve" className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)] transition-colors">Več o storitvi</Link>
              </div>
            </div>
            <div className="group bg-[var(--color-surface)] rounded overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image src="https://static.wixstatic.com/media/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg/v1/fit/w_3648,h_5472,al_c,q_90/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg" alt="Masaža hrbta" fill className="object-cover img-editorial" unoptimized />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-serif mb-3">Intuitivna masaža hrbta</h3>
                <p className="text-sm text-[var(--color-muted)] font-light mb-6">Odpravljanje napetosti in stresa.</p>
                <Link href="/storitve" className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)] transition-colors">Več o storitvi</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ORIGINAL BLOG TEASER */}
      <section id="blog" className="spa-view bg-[var(--color-bg)] py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">Akilea Blog</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">Članki in razmišljanja</h2>
          </div>

          <div className="flex flex-col items-center">
            {/* Featured Blog Excerpt */}
            <article className="bg-white rounded-lg shadow-sm border border-[var(--color-border)] flex flex-col md:flex-row w-full max-w-4xl hover:shadow-md transition-shadow overflow-hidden group mb-10">
              <div className="w-full md:w-1/2 aspect-[16/9] md:aspect-auto overflow-hidden relative">
                <Image 
                  src="https://static.wixstatic.com/media/11062b_dd8a0854f84e495a8e5d10f2b8c5f4ec~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/11062b_dd8a0854f84e495a8e5d10f2b8c5f4ec~mv2.jpg"
                  alt="Blog cover"
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <header className="mb-4 pb-4 border-b border-[var(--color-border)]">
                  <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-2">Dam tebi, a tudi sebi.</h3>
                  <div className="flex items-center gap-3 text-[10px] text-[var(--color-muted)] tracking-widest uppercase">
                    <span>Mirjana Groznik</span>
                    <span>&bull;</span>
                    <span>Jan 30</span>
                  </div>
                </header>
                <div className="text-[var(--color-muted)] font-light leading-relaxed text-sm mb-6">
                  <p>»Kdor hoče, najde pot, kdor pa ne, najde izgovore« .. brrr, ne vem za vas, ampak mene je ta stavek v preteklosti tolikokrat prav znerviral...</p>
                </div>
                <Link href="/blog/dam-tebi" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6a882a] hover:text-[var(--color-primary)] transition-colors mt-auto">
                  Preberi celoten članek &rarr;
                </Link>
              </div>
            </article>

            <Link href="/blog" className="btn-secondary px-8 py-3 text-xs uppercase tracking-widest font-bold inline-block hover:bg-[var(--color-primary)] hover:text-white transition-colors">
              Preberi ostale članke
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ABOUT ME */}
      <section id="o-meni" className="py-20 lg:py-28 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative rounded overflow-hidden shadow-lg aspect-[3/4] max-w-sm mx-auto w-full">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRMog5kCJ9ZBNxxvqxuysiEaWuQPOg0mx_iTUqF7r9fQLiSkCaUEO2QA&s=10" alt="Mirjana Groznik" fill className="object-cover" unoptimized />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold">O ustanoviteljici</span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--color-primary)]">Moje ime je Mirjana Groznik, večna študentka življenja.</h2>
            <div className="text-[var(--color-muted)] font-light leading-relaxed space-y-4">
              <p>
                Po skoraj 20 letih poslovnih izkušenj in osebni prelomnici me je poklical študij naturopatije. Dal mi je orodja, da najprej pozdravim sebe, šele nato zares začutim druge.
              </p>
              <p>
                Tako je spontano nastala avtorska INTUITIVNA MASAŽA. Orodje, s katerim združujemo fizično z nefizičnim in kjer se dogajajo resnične transformacije.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PREDAVANJA */}
      <section className="py-20 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">Delitev znanja</span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--color-primary)]">Predavanja in B2B</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-[var(--color-border)] p-8 lg:p-12 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-4">Korporativni wellness & Izobraževanja</h3>
            <p className="text-[var(--color-muted)] font-light mb-8">
              Pripravljamo strokovna predavanja na temo obvladovanja stresa in izboljšanja počutja zaposlenih na delovnem mestu.
            </p>
            <Link href="/predavanja" className="btn-primary px-8 py-3 text-xs uppercase tracking-widest font-bold inline-block">
              Pošljite povpraševanje
            </Link>
          </div>
        </div>
      </section>

      {/* 7. DELAVNICE IN ČAJANKE */}
      <section className="py-20 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">Skupnost</span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--color-primary)]">Delavnice in Čajanke</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-surface)] rounded-lg p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-serif text-[var(--color-primary)] mb-2">Čajanka o čustvih</h3>
              <p className="text-sm text-[#6a882a] font-bold mb-4">Termin: 15. September 2026</p>
              <p className="text-sm text-[var(--color-muted)] font-light mb-6 flex-1">Pridružite se nam ob toplem čaju in iskrenem pogovoru.</p>
              <Link href="/delavnice/cajanka-o-custvih" className="text-xs uppercase tracking-widest font-bold text-[var(--color-primary)] mb-4 hover:text-[var(--color-accent)] transition-colors underline">Preberi več</Link>
              <Link href="/delavnice/cajanka-o-custvih" className="btn-primary px-6 py-2 text-[10px] uppercase tracking-widest font-bold w-full">Prijavi se</Link>
            </div>
            <div className="bg-[var(--color-surface)] rounded-lg p-8 flex flex-col items-center text-center opacity-80 hover:opacity-100 hover:shadow-md transition-all">
              <h3 className="text-xl font-serif text-[var(--color-primary)] mb-2">Delavnica za ženske</h3>
              <p className="text-sm text-[var(--color-muted)] font-bold mb-4">Termin še ni določen</p>
              <p className="text-sm text-[var(--color-muted)] font-light mb-6 flex-1">Spoznajte tehnike samomasaže in povezovanja s telesom.</p>
              <Link href="/delavnice/delavnica-za-zenske" className="text-xs uppercase tracking-widest font-bold text-[var(--color-primary)] mb-4 hover:text-[var(--color-accent)] transition-colors underline">Preberi več</Link>
              <Link href="/predavanja" className="btn-secondary px-6 py-2 text-[10px] uppercase tracking-widest font-bold w-full">Pošljite povpraševanje</Link>
            </div>
            <div className="bg-[var(--color-surface)] rounded-lg p-8 flex flex-col items-center text-center opacity-80 hover:opacity-100 hover:shadow-md transition-all">
              <h3 className="text-xl font-serif text-[var(--color-primary)] mb-2">Skupinska meditacija</h3>
              <p className="text-sm text-[var(--color-muted)] font-bold mb-4">Termin še ni določen</p>
              <p className="text-sm text-[var(--color-muted)] font-light mb-6 flex-1">Vodena meditacija za vzpostavljanje notranjega miru.</p>
              <Link href="/delavnice/skupinska-meditacija" className="text-xs uppercase tracking-widest font-bold text-[var(--color-primary)] mb-4 hover:text-[var(--color-accent)] transition-colors underline">Preberi več</Link>
              <Link href="/predavanja" className="btn-secondary px-6 py-2 text-[10px] uppercase tracking-widest font-bold w-full">Pošljite povpraševanje</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ORIGINAL BOOKING SYSTEM */}
      <BookingWidget />

    </div>
  );
}

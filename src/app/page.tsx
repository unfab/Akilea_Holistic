"use client";

import Link from "next/link";
import Image from "next/image";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BookingWidget from "@/components/BookingWidget";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

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
                  {t.hero.badge}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.2] tracking-tight">
                {t.hero.title}
              </h1>

              <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                {t.hero.desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/storitve"
                  className="btn-primary px-8 py-4 text-xs uppercase tracking-widest font-bold text-center"
                >
                  {t.hero.ctaServices}
                </Link>
                <Link
                  href="#o-meni"
                  className="border border-white/30 hover:border-white text-white px-8 py-4 text-xs uppercase tracking-widest font-bold text-center transition-colors"
                >
                  {t.hero.ctaAbout}
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
                  "{t.hero.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PREDSTAVITEV INTUITIVNIH MASAŽ */}
      <section className="py-20 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">
              {t.massagesSection.badge}
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--color-primary)] mb-3">
              {t.massagesSection.title}
            </h2>
            <p className="text-[var(--color-muted)] font-light max-w-xl mx-auto text-base">
              {t.massagesSection.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Masaža telesa */}
            <div className="group bg-[var(--color-surface)] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src="https://static.wixstatic.com/media/a35aecb9d76b4ae39f68a92c19ffe590.jpg/v1/fill/w_333,h_220,fp_0.50_0.50,lg_1,q_80,enc_auto/a35aecb9d76b4ae39f68a92c19ffe590.jpg"
                  alt={t.servicesPage.items[0]?.name || "Intuitivna masaža telesa"}
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
                  {t.servicesPage.items[0]?.name}
                </h3>
                <p className="text-sm text-[var(--color-muted)] font-light mb-6 flex-grow">
                  {t.servicesPage.items[0]?.shortDesc}
                </p>
                <Link
                  href="/storitve#masaza-telesa"
                  className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)] transition-colors self-center mt-auto"
                >
                  {t.servicesPage.detailsBtn} &rarr;
                </Link>
              </div>
            </div>

            {/* Masaža trebuha */}
            <div className="group bg-[var(--color-surface)] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src="https://static.wixstatic.com/media/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png/v1/fill/w_863,h_574,al_c,q_90,enc_auto/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png"
                  alt={t.servicesPage.items[2]?.name || "Intuitivna masaža trebuha"}
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
                  {t.servicesPage.items[2]?.name}
                </h3>
                <p className="text-sm text-[var(--color-muted)] font-light mb-6 flex-grow">
                  {t.servicesPage.items[2]?.shortDesc}
                </p>
                <Link
                  href="/storitve#masaza-trebuha"
                  className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)] transition-colors self-center mt-auto"
                >
                  {t.servicesPage.detailsBtn} &rarr;
                </Link>
              </div>
            </div>

            {/* Masaža hrbta */}
            <div className="group bg-[var(--color-surface)] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src="https://static.wixstatic.com/media/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg/v1/fit/w_3648,h_5472,al_c,q_90/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg"
                  alt={t.servicesPage.items[1]?.name || "Intuitivna masaža hrbta"}
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
                  {t.servicesPage.items[1]?.name}
                </h3>
                <p className="text-sm text-[var(--color-muted)] font-light mb-6 flex-grow">
                  {t.servicesPage.items[1]?.shortDesc}
                </p>
                <Link
                  href="/storitve#masaza-hrbta"
                  className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)] transition-colors self-center mt-auto"
                >
                  {t.servicesPage.detailsBtn} &rarr;
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
              {t.threeSquares.sectionBadge}
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--color-primary)] mb-3">
              {t.threeSquares.sectionTitle}
            </h2>
            <p className="text-[var(--color-muted)] font-light max-w-2xl mx-auto text-base">
              {t.threeSquares.sectionDesc}
            </p>
          </div>

          {/* E-BOOK TEASER BANNER (Squeezed between section intro and 3 boxes) */}
          <Link
            href="/e-knjiga"
            className="block max-w-5xl mx-auto mb-14 bg-gradient-to-br from-white via-[#fcfbf9] to-[#f4f7ee] border border-[#e2dcd2] hover:border-[#6a882a] rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#f4f8eb] border border-[#d2e5b8] flex items-center justify-center shrink-0 text-[#6a882a] group-hover:bg-[#6a882a] group-hover:text-white transition-colors duration-300 shadow-xs">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f4f8eb] border border-[#d2e5b8] text-[10px] uppercase tracking-widest font-bold text-[#6a882a] mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6a882a] animate-pulse"></span>
                    {t.threeSquares.ebookBanner.badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-1.5 leading-snug">
                    {t.threeSquares.ebookBanner.title}
                  </h3>
                  <p className="text-[var(--color-muted)] font-light text-xs sm:text-sm leading-relaxed max-w-2xl">
                    {t.threeSquares.ebookBanner.desc}
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto self-end md:self-center">
                <span className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-5 py-3 rounded-lg bg-[var(--color-primary)] text-white text-xs uppercase tracking-widest font-bold group-hover:bg-[#6a882a] transition-all duration-300 shadow-sm">
                  <span>{t.threeSquares.ebookBanner.cta}</span>
                </span>
              </div>
            </div>
          </Link>

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
                  {t.threeSquares.square1.badge}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-primary)] px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-wider font-semibold">
                  {t.threeSquares.square1.tag}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-[#6a882a] font-bold mb-2">
                  {t.threeSquares.square1.date}
                </span>
                <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                  {t.threeSquares.square1.title}
                </h3>
                <p className="text-[var(--color-muted)] font-light text-sm leading-relaxed mb-6 flex-grow">
                  {t.threeSquares.square1.desc}
                </p>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between mt-auto">
                  <Link
                    href="/blog/brez-ljubezni-mi-ziveti-ni"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6a882a] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {t.threeSquares.square1.cta}
                  </Link>
                  <Link
                    href="/blog"
                    className="text-[10px] uppercase tracking-widest font-semibold text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {t.threeSquares.square1.allBlogs}
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
                  {t.threeSquares.square2.badge}
                </div>
                <div className="absolute top-4 right-4 bg-[#6a882a] text-white px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-wider font-semibold">
                  {t.threeSquares.square2.tag}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-[#6a882a] font-bold mb-2">
                  {t.threeSquares.square2.date}
                </span>
                <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                  {t.threeSquares.square2.title}
                </h3>
                <p className="text-[var(--color-muted)] font-light text-sm leading-relaxed mb-6 flex-grow">
                  {t.threeSquares.square2.desc}
                </p>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between mt-auto">
                  <Link
                    href="/delavnice/cajanka-o-custvih"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6a882a] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {t.threeSquares.square2.cta}
                  </Link>
                  <Link
                    href="/delavnice"
                    className="text-[10px] uppercase tracking-widest font-semibold text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {t.threeSquares.square2.allWorkshops}
                  </Link>
                </div>
              </div>
            </div>

            {/* KVADRAT 3: PREDAVANJA */}
            <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden relative bg-[var(--color-surface)]">
                <Image
                  src="/images/predavanja/bolecina-v-krizu-pisarna.png"
                  alt={t.threeSquares.square3.title}
                  fill
                  style={{ objectPosition: "center 72%" }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold">
                  {t.threeSquares.square3.badge}
                </div>
                <div className="absolute top-4 right-4 bg-[#6a882a] text-white px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-wider font-semibold">
                  {t.threeSquares.square3.tag}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-[#6a882a] font-bold mb-2">
                  {t.threeSquares.square3.date}
                </span>
                <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-2 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                  {t.threeSquares.square3.title}
                </h3>
                <p className="text-xs font-serif italic text-[var(--color-accent)] mb-4">
                  {t.threeSquares.square3.subtitle}
                </p>

                <div className="space-y-2 text-xs text-[var(--color-muted)] font-light mb-6 flex-grow bg-[var(--color-surface)] p-3.5 rounded-lg border border-[var(--color-border)]">
                  <div>
                    <span className="font-semibold text-[var(--color-primary)]">{t.threeSquares.square3.formatLabel}:</span>{" "}
                    <span>{t.threeSquares.square3.format}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--color-primary)]">{t.threeSquares.square3.targetLabel}:</span>{" "}
                    <span>{t.threeSquares.square3.targetGroup}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between mt-auto">
                  <Link
                    href="/predavanja"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6a882a] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {t.threeSquares.square3.cta}
                  </Link>
                  <Link
                    href="/predavanja"
                    className="text-[10px] uppercase tracking-widest font-semibold text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {t.threeSquares.square3.moreInfo}
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
              alt={t.aboutSection.imageAlt}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              {t.aboutSection.badge}
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--color-primary)]">
              {t.aboutSection.title}
            </h2>
            <div className="text-[var(--color-muted)] font-light leading-relaxed space-y-4 text-base">
              <p>{t.aboutSection.p1}</p>
              <p>{t.aboutSection.p2}</p>
              <p className="italic text-[var(--color-primary)] font-serif text-lg pt-2">
                {t.aboutSection.quote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MNENJA STRANK (Vrtljivi kvadratki po 2 v krogu) */}
      <TestimonialsCarousel />

      {/* 6. REZERVACIJA TERMINA */}
      <BookingWidget />
    </div>
  );
}

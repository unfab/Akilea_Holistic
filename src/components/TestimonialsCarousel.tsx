"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Tako kot sami hrepenimo po tem, da bi bili slišani in razumljeni, tako si tudi telo želi intuitivne masaže pri Mirjani.",
    author: "Zadovoljna stranka",
    tag: "Intuitivna masaža telesa",
  },
  {
    id: 2,
    text: "Ciao, moram ti povedati, da tudi telesne bolečine nimam več. To ne morem verjeti, tako lepo in dobro se počutim.",
    author: "Zadovoljna stranka",
    tag: "Intuitivna masaža hrbta",
  },
  {
    id: 3,
    text: "Izjemna izkušnja. Zelo sproščujoča, meditacijska. Počutim se prerojen, navdahnjen in optimističen.",
    author: "Zadovoljna stranka",
    tag: "Intuitivna masaža telesa",
  },
  {
    id: 4,
    text: "Hvala, šepetalka teles… Neverjetno, kako natančno začutiš vsako blokado in jo nežno sprostiš.",
    author: "Zadovoljna stranka",
    tag: "Intuitivna masaža trebuha",
  },
  {
    id: 5,
    text: "Opravila sem prvo intuitivno masažo in bila presenečena, da je začutila moje dejansko stanje. Hvala za energijo.",
    author: "Zadovoljna stranka",
    tag: "Intuitivna masaža",
  },
  {
    id: 6,
    text: "Draga Mirjana, hvala, ker mi pomagaš premagovati moje globoko ukoreninjene strahove. Tvoje zlate roke delajo čudeže.",
    author: "Zadovoljna stranka",
    tag: "Intuitivna masaža telesa",
  },
  {
    id: 7,
    text: "Zelo pozitivna izkušnja. Počutim se lažje, manj bolečin v hrbtu, manj pod stresom in lažje poslušam svoje telo.",
    author: "Zadovoljna stranka",
    tag: "Intuitivna masaža hrbta",
  },
  {
    id: 8,
    text: "Vtisi so močni. S prvimi petimi besedami ste opisala dejansko stanje mojega jaza. Hvala iz srca.",
    author: "Zadovoljna stranka",
    tag: "Intuitivna masaža",
  },
];

export default function TestimonialsCarousel() {
  // Group testimonials into pairs (2 per slide)
  const pairs: [Testimonial, Testimonial][] = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    if (i + 1 < testimonials.length) {
      pairs.push([testimonials[i], testimonials[i + 1]]);
    } else {
      pairs.push([testimonials[i], testimonials[0]]);
    }
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fade, setFade] = useState(true);

  const goToNext = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % pairs.length);
      setFade(true);
    }, 200);
  }, [pairs.length]);

  const goToPrev = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + pairs.length) % pairs.length);
      setFade(true);
    }, 200);
  }, [pairs.length]);

  const goToSlide = (idx: number) => {
    if (idx === currentSlide) return;
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(idx);
      setFade(true);
    }, 200);
  };

  // Auto rotate after 2 seconds if the user doesn't move them on their own
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goToNext();
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused, currentSlide, goToNext]);

  const currentPair = pairs[currentSlide];

  return (
    <section
      className="py-20 lg:py-28 bg-[var(--color-surface)] border-b border-[var(--color-border)] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Mnenja strank"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-3 block">
            Zaupanje &amp; Izkušnje
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[var(--color-primary)] mb-3">
            Mnenja naših strank
          </h2>
          <p className="text-[var(--color-muted)] font-light max-w-xl mx-auto text-base">
            Iskreni vtisi in občutki po obisku Holističnega centra Akilea.
          </p>
        </div>

        {/* 2 Kvadratka (Pair of 2 Cards) */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentPair.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative min-h-[260px]"
            >
              {/* Decorative quotation icon */}
              <div className="absolute top-6 right-6 text-4xl font-serif text-[var(--color-primary)]/10 select-none">
                “
              </div>

              <div>
                {/* Stars and Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="text-[#6a882a] text-base tracking-wider">
                    ★★★★★
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold bg-[var(--color-surface)] text-[var(--color-primary)] px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-serif italic text-lg sm:text-xl text-[var(--color-text)] leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-muted)]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span className="font-semibold text-[var(--color-primary)]">
                    {item.author}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                  Preverjeno mnenje
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls: Arrows & Indicators */}
        <div className="flex items-center justify-between mt-10 max-w-xs mx-auto">
          {/* Prev button */}
          <button
            onClick={goToPrev}
            aria-label="Prejšnji mnenji"
            className="w-10 h-10 rounded-full border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] hover:bg-white text-[var(--color-primary)] flex items-center justify-center transition-colors shadow-sm"
          >
            &larr;
          </button>

          {/* Slide Dots */}
          <div className="flex items-center gap-2">
            {pairs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Pojdi na par ${idx + 1}`}
                className={`transition-all rounded-full ${
                  idx === currentSlide
                    ? "w-8 h-2.5 bg-[var(--color-primary)]"
                    : "w-2.5 h-2.5 bg-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/60"
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={goToNext}
            aria-label="Naslednji mnenji"
            className="w-10 h-10 rounded-full border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] hover:bg-white text-[var(--color-primary)] flex items-center justify-center transition-colors shadow-sm"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

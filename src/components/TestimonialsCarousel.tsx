"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TestimonialItem } from "@/i18n";

export default function TestimonialsCarousel() {
  const { t } = useLanguage();
  const testimonials = t.testimonialsSection.items;

  // Group testimonials into pairs (2 per slide)
  const pairs = useMemo(() => {
    const res: [TestimonialItem, TestimonialItem][] = [];
    for (let i = 0; i < testimonials.length; i += 2) {
      if (i + 1 < testimonials.length) {
        res.push([testimonials[i], testimonials[i + 1]]);
      } else {
        res.push([testimonials[i], testimonials[0]]);
      }
    }
    return res;
  }, [testimonials]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const restartTimerRef = useRef<NodeJS.Timeout | null>(null);

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

  // Called when user clicks arrows or dots: pause auto-rotate and wait 7 seconds
  const handleUserInteraction = useCallback(() => {
    setIsInteracting(true);

    if (restartTimerRef.current) {
      clearTimeout(restartTimerRef.current);
    }

    restartTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 7000);
  }, []);

  const handlePrevClick = () => {
    goToPrev();
    handleUserInteraction();
  };

  const handleNextClick = () => {
    goToNext();
    handleUserInteraction();
  };

  const handleDotClick = (idx: number) => {
    goToSlide(idx);
    handleUserInteraction();
  };

  // Auto rotate every 2 seconds when user is not interacting
  useEffect(() => {
    if (isInteracting) return;

    const timer = setInterval(() => {
      goToNext();
    }, 2000);

    return () => clearInterval(timer);
  }, [isInteracting, goToNext]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
    };
  }, []);

  const currentPair = pairs[currentSlide] || pairs[0];

  return (
    <section
      className="py-20 lg:py-28 bg-[var(--color-surface)] border-b border-[var(--color-border)] relative overflow-hidden"
      aria-label={t.testimonialsSection.title}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-3 block">
            {t.testimonialsSection.badge}
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[var(--color-primary)] mb-3">
            {t.testimonialsSection.title}
          </h2>
          <p className="text-[var(--color-muted)] font-light max-w-xl mx-auto text-base">
            {t.testimonialsSection.desc}
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
              className="bg-white rounded-2xl p-8 sm:p-10 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative min-h-[260px] h-full"
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
                  {t.testimonialsSection.verified}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls: Arrows & Indicators */}
        <div className="flex items-center justify-between mt-10 max-w-xs mx-auto">
          {/* Prev button */}
          <button
            onClick={handlePrevClick}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] hover:bg-white text-[var(--color-primary)] flex items-center justify-center transition-colors shadow-sm"
          >
            &larr;
          </button>

          {/* Slide Dots */}
          <div className="flex items-center gap-2">
            {pairs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
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
            onClick={handleNextClick}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] hover:bg-white text-[var(--color-primary)] flex items-center justify-center transition-colors shadow-sm"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

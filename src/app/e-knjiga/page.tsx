"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function EKnjigaPage() {
  const { t } = useLanguage();
  const eb = t.ebookPage;

  return (
    <div className="spa-view active bg-white min-h-[100dvh] py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">
          {eb.badge}
        </span>
        <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">
          {eb.title}
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 font-light max-w-2xl mx-auto">
          {eb.desc}
        </p>
        
        <div className="bg-[var(--color-surface)] p-8 lg:p-12 rounded-lg mt-12 shadow-sm border border-[var(--color-border)]">
          <h2 className="text-2xl sm:text-3xl font-serif text-[var(--color-primary)] mb-4">
            {eb.cardTitle}
          </h2>
          <p className="text-[var(--color-muted)] font-light leading-relaxed mb-8 max-w-xl mx-auto text-[15px] sm:text-[16px] whitespace-pre-wrap text-left">
            {eb.cardDesc}
          </p>
          
          <div className="max-w-md mx-auto pt-2">
            <a
              href="https://preview.mailerlite.io/preview/1336581/forms/198580470970057791"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-4 px-6 text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all text-center inline-flex items-center justify-center gap-2"
            >
              <span>{eb.submitBtn}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

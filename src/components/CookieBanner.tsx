"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pb-safe pointer-events-none">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl border border-[var(--color-border)] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto animate-fade-in">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-serif text-[var(--color-primary)] mb-2">{t.cookieBanner.title}</h3>
          <p className="text-[var(--color-muted)] font-light text-sm">
            {t.cookieBanner.text}{" "}
            <Link href="/pravilnik-o-zasebnosti" className="text-[var(--color-primary)] underline hover:text-[var(--color-accent)]">
              {t.cookieBanner.privacyLink}
            </Link>.
          </p>
        </div>
        <div className="flex shrink-0 gap-4 w-full md:w-auto">
          <button 
            onClick={acceptCookies} 
            className="btn-primary px-8 py-3 text-xs uppercase tracking-widest font-bold w-full md:w-auto"
          >
            {t.cookieBanner.acceptBtn}
          </button>
        </div>
      </div>
    </div>
  );
}

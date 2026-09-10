"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { Language, TranslationDictionary, getDictionary } from "@/i18n";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const VALID_LANGUAGES: Language[] = ["sl", "en", "hr", "it", "sr"];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("sl");

  // Read persisted language on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("akilea_lang") as Language | null;
      if (savedLang && VALID_LANGUAGES.includes(savedLang)) {
        setLanguageState(savedLang);
        return;
      }

      // Check cookie
      const match = document.cookie.match(/app_lang=([a-z]{2})/i);
      if (match && VALID_LANGUAGES.includes(match[1] as Language)) {
        setLanguageState(match[1] as Language);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    if (!VALID_LANGUAGES.includes(newLang)) return;
    setLanguageState(newLang);

    try {
      localStorage.setItem("akilea_lang", newLang);
      document.cookie = `app_lang=${newLang}; path=/; max-age=31536000; SameSite=Lax;`;

      // Clean up any old Google Translate cookies completely
      const host = window.location.hostname;
      ["googtrans", "googtrans_"].forEach((name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
      });
    } catch {
      // ignore
    }
  };

  const t = useMemo(() => getDictionary(language), [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

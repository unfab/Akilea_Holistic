"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/i18n";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSelectLang = (lang: Language) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  const currentLangLabel = language.toUpperCase();

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://static.wixstatic.com/media/dfaf38_813cc971e5e8455085e68fdb596e3ebc~mv2.png/v1/fill/w_240,h_179,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dfaf38_813cc971e5e8455085e68fdb596e3ebc~mv2.png"
            alt="Akilea Logo"
            width={96}
            height={72}
            className="h-16 w-auto object-contain"
            unoptimized
          />
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] border-l border-[var(--color-border)] pl-3">
            {t.nav.holisticCenter}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-widest font-medium text-[var(--color-text)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors whitespace-nowrap">
            {t.nav.home}
          </Link>
          <Link href="/storitve" className="hover:text-[var(--color-accent)] transition-colors whitespace-nowrap">
            {t.nav.services}
          </Link>
          <Link href="/#o-meni" className="hover:text-[var(--color-accent)] transition-colors whitespace-nowrap">
            {t.nav.about}
          </Link>
          <Link href="/blog" className="hover:text-[var(--color-accent)] transition-colors whitespace-nowrap">
            {t.nav.blog}
          </Link>
          <Link href="/posvet" className="hover:text-[var(--color-accent)] transition-colors whitespace-nowrap">
            {t.nav.consultation}
          </Link>
          <Link
            href="/predavanja"
            className="hover:text-[var(--color-accent)] transition-colors text-[var(--color-accent)] whitespace-nowrap"
          >
            {t.nav.lectures}
          </Link>
          <Link
            href="/e-knjiga"
            className="hover:text-[var(--color-accent)] transition-colors text-[var(--color-accent)] whitespace-nowrap"
          >
            {t.nav.ebook}
          </Link>

          {/* Language Selector */}
          <div className="relative ml-1">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors font-semibold text-xs whitespace-nowrap"
            >
              {currentLangLabel}
              <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 w-36 bg-white border border-[var(--color-border)] shadow-lg rounded py-2 flex flex-col z-50">
                <button onClick={() => handleSelectLang("sl")} className={`text-left px-4 py-2 hover:bg-gray-50 transition-colors ${language === 'sl' ? 'text-[var(--color-primary)] font-bold' : 'text-gray-700'}`}>🇸🇮 Slovenščina</button>
                <button onClick={() => handleSelectLang("en")} className={`text-left px-4 py-2 hover:bg-gray-50 transition-colors ${language === 'en' ? 'text-[var(--color-primary)] font-bold' : 'text-gray-700'}`}>🇬🇧 English</button>
                <button onClick={() => handleSelectLang("hr")} className={`text-left px-4 py-2 hover:bg-gray-50 transition-colors ${language === 'hr' ? 'text-[var(--color-primary)] font-bold' : 'text-gray-700'}`}>🇭🇷 Hrvatski</button>
                <button onClick={() => handleSelectLang("it")} className={`text-left px-4 py-2 hover:bg-gray-50 transition-colors ${language === 'it' ? 'text-[var(--color-primary)] font-bold' : 'text-gray-700'}`}>🇮🇹 Italiano</button>
                <button onClick={() => handleSelectLang("sr")} className={`text-left px-4 py-2 hover:bg-gray-50 transition-colors ${language === 'sr' ? 'text-[var(--color-primary)] font-bold' : 'text-gray-700'}`}>🇷🇸 Srpski</button>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
          <a href="tel:+38640863594" className="text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors whitespace-nowrap">
            040 863 594
          </a>
          <Link
            href="/storitve"
            className="btn-primary px-4 xl:px-6 py-2.5 text-[10px] uppercase tracking-wider xl:tracking-widest font-semibold cursor-pointer whitespace-nowrap"
          >
            {t.nav.bookAppointment}
          </Link>
        </div>

        {/* Mobile controls (Direct Phone CTA + Hamburger button) */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+38640863594"
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4f8eb] border border-[#d2e5b8] text-[var(--color-primary)] hover:bg-[#6a882a] hover:text-white transition-all shadow-xs"
            aria-label="Pokliči 040 863 594"
          >
            <svg className="w-3.5 h-3.5 text-[#6a882a] group-hover:text-white transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xs font-bold whitespace-nowrap">040 863 594</span>
          </a>

          <button
            className="text-[var(--color-primary)] p-1.5 -mr-1"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-border)] px-6 py-4 space-y-4 shadow-lg absolute w-full left-0 z-40">
          <Link
            href="/"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
            onClick={toggleMenu}
          >
            {t.nav.home}
          </Link>
          <Link
            href="/storitve"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
            onClick={toggleMenu}
          >
            {t.nav.services}
          </Link>
          <Link
            href="/#o-meni"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
            onClick={toggleMenu}
          >
            {t.nav.about}
          </Link>
          <Link
            href="/blog"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
            onClick={toggleMenu}
          >
            {t.nav.blog}
          </Link>
          <Link
            href="/posvet"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
            onClick={toggleMenu}
          >
            {t.nav.consultation}
          </Link>
          <Link
            href="/predavanja"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-accent)] hover:text-[var(--color-primary)]"
            onClick={toggleMenu}
          >
            {t.nav.lectures}
          </Link>
          <Link
            href="/e-knjiga"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-accent)] hover:text-[var(--color-primary)]"
            onClick={toggleMenu}
          >
            {t.nav.ebook}
          </Link>
          
          <div className="border-t border-[var(--color-border)] pt-4 mt-2">
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-bold mb-2">Jezik / Language</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => { handleSelectLang("sl"); toggleMenu(); }} className={`text-xs uppercase font-medium ${language === 'sl' ? 'text-[var(--color-primary)] font-bold' : 'text-[var(--color-muted)]'}`}>🇸🇮 SLO</button>
              <button onClick={() => { handleSelectLang("en"); toggleMenu(); }} className={`text-xs uppercase font-medium ${language === 'en' ? 'text-[var(--color-primary)] font-bold' : 'text-[var(--color-muted)]'}`}>🇬🇧 ENG</button>
              <button onClick={() => { handleSelectLang("hr"); toggleMenu(); }} className={`text-xs uppercase font-medium ${language === 'hr' ? 'text-[var(--color-primary)] font-bold' : 'text-[var(--color-muted)]'}`}>🇭🇷 HRV</button>
              <button onClick={() => { handleSelectLang("it"); toggleMenu(); }} className={`text-xs uppercase font-medium ${language === 'it' ? 'text-[var(--color-primary)] font-bold' : 'text-[var(--color-muted)]'}`}>🇮🇹 ITA</button>
              <button onClick={() => { handleSelectLang("sr"); toggleMenu(); }} className={`text-xs uppercase font-medium ${language === 'sr' ? 'text-[var(--color-primary)] font-bold' : 'text-[var(--color-muted)]'}`}>🇷🇸 SRB</button>
            </div>
          </div>
          <div className="pt-3 border-t border-[var(--color-border)] mt-2 flex flex-col gap-2">
            <a
              href="tel:+38640863594"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-[#d2e5b8] bg-[#f4f8eb] text-xs font-bold text-[var(--color-primary)] hover:bg-[#6a882a] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 text-[#6a882a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Pokliči: 040 863 594</span>
            </a>
            <Link
              href="/storitve"
              className="btn-primary block text-center py-2.5 text-xs uppercase tracking-widest font-bold"
              onClick={toggleMenu}
            >
              {t.nav.bookAppointment}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

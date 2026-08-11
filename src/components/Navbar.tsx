"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
            Center zdravja
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs uppercase tracking-widest font-medium text-[var(--color-text)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">
            Domov
          </Link>
          <Link href="/storitve" className="hover:text-[var(--color-accent)] transition-colors">
            Storitve
          </Link>
          <Link href="/#o-meni" className="hover:text-[var(--color-accent)] transition-colors">
            O meni
          </Link>
          <Link href="/blog" className="hover:text-[var(--color-accent)] transition-colors">
            Blog
          </Link>
          <Link href="/posvet" className="hover:text-[var(--color-accent)] transition-colors">
            Posvet
          </Link>
          <Link
            href="/predavanja"
            className="hover:text-[var(--color-accent)] transition-colors text-[var(--color-accent)]"
          >
            Predavanja
          </Link>
          <Link
            href="/e-knjiga"
            className="hover:text-[var(--color-accent)] transition-colors text-[var(--color-accent)]"
          >
            E-knjiga
          </Link>
        </nav>

        <Link
          href="/storitve"
          className="btn-primary px-6 py-2.5 text-[10px] uppercase tracking-widest font-semibold cursor-pointer hidden sm:block"
        >
          Rezerviraj termin
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[var(--color-primary)] p-2"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)] px-6 py-4 space-y-4 shadow-lg absolute w-full left-0 z-40">
          <Link
            href="/"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
            onClick={toggleMenu}
          >
            Domov
          </Link>
          <Link
            href="/storitve"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
            onClick={toggleMenu}
          >
            Storitve
          </Link>
          <Link
            href="/#o-meni"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
            onClick={toggleMenu}
          >
            O meni
          </Link>
          <Link
            href="/blog"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link
            href="/posvet"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
            onClick={toggleMenu}
          >
            Posvet
          </Link>
          <Link
            href="/predavanja"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-accent)] hover:text-[var(--color-primary)]"
            onClick={toggleMenu}
          >
            Predavanja
          </Link>
          <Link
            href="/e-knjiga"
            className="block text-xs uppercase tracking-widest font-medium text-[var(--color-accent)] hover:text-[var(--color-primary)]"
            onClick={toggleMenu}
          >
            E-knjiga
          </Link>
          <Link
            href="/storitve"
            className="block text-xs uppercase tracking-widest font-bold text-[var(--color-accent-green)] pt-2 border-t border-[var(--color-border)] mt-2"
            onClick={toggleMenu}
          >
            Rezerviraj termin
          </Link>
        </div>
      )}
    </header>
  );
}

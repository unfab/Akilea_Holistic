"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceProps {
  id: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  description: React.ReactNode;
  stripeLink: string;
}

export default function ServiceAccordion({ service }: { service: ServiceProps }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-[var(--color-border)] overflow-hidden mb-6">
      <div 
        className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between cursor-pointer hover:bg-[var(--color-surface)] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 md:w-32 md:h-32 shrink-0 relative rounded overflow-hidden hidden sm:block">
            <Image src={service.image} alt={service.title} fill className="object-cover" unoptimized />
          </div>
          <div>
            <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-2">{service.title}</h3>
            <div className="flex gap-4 text-sm text-[var(--color-muted)] font-medium">
              <span>{service.duration}</span>
              <span className="text-[var(--color-accent-green)] font-bold">{service.price}</span>
            </div>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-bold">
            {isOpen ? "Skrij podrobnosti" : "Prikaži podrobnosti"}
          </span>
          <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''} text-[var(--color-primary)]`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="p-6 md:p-8 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
          <div className="text-[var(--color-muted)] font-light leading-relaxed mb-8">
            {service.description}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/storitve" className="btn-primary px-8 py-3 text-xs uppercase tracking-widest font-bold text-center inline-block">
              Rezerviraj termin
            </Link>
            <a href={service.stripeLink} target="_blank" rel="noreferrer" className="bg-[var(--color-primary)] text-white px-8 py-3 text-xs uppercase tracking-widest font-bold text-center inline-block hover:bg-black transition-colors rounded">
              V košarico (Kupi zdaj)
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import ServiceAccordion from "@/components/ServiceAccordion";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceItem } from "@/i18n";

function ServiceContent({ item }: { item: ServiceItem }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed">
      {item.introP1 && <p>{item.introP1}</p>}
      {item.introP2 && <p>{item.introP2}</p>}

      {item.offers && item.offers.length > 0 && (
        <div className="bg-[var(--color-surface)] p-5 rounded-lg border border-[var(--color-border)] my-4">
          {item.offersTitle && (
            <p className="font-semibold text-[var(--color-primary)] mb-3">
              {item.offersTitle}
            </p>
          )}
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            {item.offers.map((offer, idx) => (
              <li key={idx}>{offer}</li>
            ))}
          </ul>
        </div>
      )}

      {item.questions && item.questions.length > 0 && (
        <div className="my-4">
          {item.questionsTitle && (
            <p className="font-medium text-[var(--color-primary)] mb-2">
              {item.questionsTitle}
            </p>
          )}
          <ul className="list-none space-y-1.5 italic text-[var(--color-muted)] pl-3 border-l-2 border-[var(--color-accent)]">
            {item.questions.map((q, idx) => (
              <li key={idx}>{q}</li>
            ))}
          </ul>
        </div>
      )}

      {item.pRelease && <p>{item.pRelease}</p>}

      {item.calloutBox && (
        <div className="bg-[var(--color-surface)] p-4 rounded-md border-l-4 border-[#6a882a] my-4">
          <p className="font-medium text-[var(--color-primary)]">
            {item.calloutBox}
          </p>
        </div>
      )}

      {item.quotes && item.quotes.length > 0 && (
        <div className="bg-white/90 p-4 rounded-lg border border-[var(--color-border)] italic text-xs space-y-1.5 my-4">
          {item.quotesTitle && (
            <p className="font-semibold not-italic text-[var(--color-primary)] mb-2">
              {item.quotesTitle}
            </p>
          )}
          {item.quotes.map((quote, idx) => (
            <p key={idx}>{quote}</p>
          ))}
        </div>
      )}

      {item.conclusionP && <p>{item.conclusionP}</p>}

      <p className="text-xs text-[var(--color-muted)] pt-2">
        {item.contactText}
      </p>
    </div>
  );
}

export default function StoritvePage() {
  const { t } = useLanguage();

  const services = [
    {
      id: "masaza-telesa",
      title: t.servicesPage.items[0]?.name || "Intuitivna masaža celega telesa",
      duration: t.servicesPage.items[0]?.duration || "1 h 45 min",
      price: `${t.servicesPage.items[0]?.price || 85} €`,
      image: "/images/storitve/mirjana-masaza-hero.jpg",
      stripeLink: "https://buy.stripe.com/14AdRag2k9ts9HB46ycQU02",
      description: t.servicesPage.items[0] ? (
        <ServiceContent item={t.servicesPage.items[0]} />
      ) : null,
    },
    {
      id: "masaza-trebuha",
      title: t.servicesPage.items[2]?.name || "Intuitivna masaža trebuha",
      duration: t.servicesPage.items[2]?.duration || "50 min",
      price: `${t.servicesPage.items[2]?.price || 50} €`,
      image: "https://static.wixstatic.com/media/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png/v1/fill/w_863,h_574,al_c,q_90,enc_auto/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png",
      stripeLink: "https://buy.stripe.com/00w6oI3fyeNM1b59qScQU01",
      description: t.servicesPage.items[2] ? (
        <ServiceContent item={t.servicesPage.items[2]} />
      ) : null,
    },
    {
      id: "masaza-hrbta",
      title: t.servicesPage.items[1]?.name || "Intuitivna masaža hrbta",
      duration: t.servicesPage.items[1]?.duration || "50 min",
      price: `${t.servicesPage.items[1]?.price || 50} €`,
      image: "https://static.wixstatic.com/media/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg/v1/fit/w_3648,h_5472,al_c,q_90/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg",
      stripeLink: "https://buy.stripe.com/28E00k7vOcFE1b5dH8cQU00",
      description: t.servicesPage.items[1] ? (
        <ServiceContent item={t.servicesPage.items[1]} />
      ) : null,
    },
  ];

  return (
    <div className="spa-view active bg-[var(--color-bg)] py-20 lg:py-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">
            {t.servicesPage.badge}
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">
            {t.servicesPage.title}
          </h1>
          <p className="text-[var(--color-muted)] font-light leading-relaxed max-w-xl mx-auto">
            {t.servicesPage.desc}
          </p>
        </div>

        <div className="space-y-2">
          {services.map((service) => (
            <ServiceAccordion key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

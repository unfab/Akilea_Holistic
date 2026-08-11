import ServiceAccordion from "@/components/ServiceAccordion";

export const metadata = {
  title: "Storitve | Akilea Center zdravja",
  description: "Pregled vseh storitev v centru zdravja Akilea.",
};

export default function StoritvePage() {
  const services = [
    {
      id: "masaza-telesa",
      title: "Intuitivna Masaža celega telesa",
      duration: "1 h 45 min",
      price: "85 €",
      image: "https://static.wixstatic.com/media/a35aecb9d76b4ae39f68a92c19ffe590.jpg/v1/fill/w_333,h_220,fp_0.50_0.50,lg_1,q_80,enc_auto/a35aecb9d76b4ae39f68a92c19ffe590.jpg",
      stripeLink: "#",
      description: (
        <>
          <p className="mb-4">Intuitivna masaža združuje tradicionalno masažno tehniko z globokim čutenjem. Prepoznamo področja napetosti in blokad ter s pomočjo kristalov sprostimo ujeta čustva.</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Sprostitev ujetih čustev</li>
            <li>Stanje čaker in pretok energije</li>
            <li>Globok občutek miru in opolnomočenje</li>
          </ul>
        </>
      ),
    },
    {
      id: "masaza-hrbta",
      title: "Intuitivna masaža hrbta",
      duration: "1 h",
      price: "50 €",
      image: "https://static.wixstatic.com/media/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg/v1/fit/w_3648,h_5472,al_c,q_90/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg",
      stripeLink: "#",
      description: (
        <>
          <p className="mb-4">Fokus na sprostitev globokih mišičnih napetosti in obnovo pretoka energije vzdolž hrbtenice.</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Odpravljanje bolečin v hrbtu</li>
            <li>Lajšanje stresa</li>
          </ul>
        </>
      ),
    },
    {
      id: "masaza-trebuha",
      title: "Intuitivna masaža trebuha",
      duration: "45 min",
      price: "40 €",
      image: "https://static.wixstatic.com/media/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png/v1/fill/w_863,h_574,al_c,q_90,enc_auto/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png",
      stripeLink: "#",
      description: (
        <>
          <p className="mb-4">Trebuh je center naših čustev. Masaža nežno stimulira prebavni sistem in sprošča blokade.</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Izboljšanje prebave</li>
            <li>Sproščanje strahov</li>
          </ul>
        </>
      ),
    }
  ];

  return (
    <div className="spa-view active bg-[var(--color-bg)] py-20 lg:py-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">Naša ponudba</span>
          <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">Storitve in cenik</h1>
          <p className="text-[var(--color-muted)] font-light leading-relaxed">
            Izberite obravnavo, ki jo vaše telo v tem trenutku najbolj potrebuje. Za vsako storitev se lahko naročite na termin ali jo takoj zakupite preko spleta.
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

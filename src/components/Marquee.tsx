export default function Marquee() {
  const testimonials = [
    {
      text: "Tako kot sami hrepenimo po tem, da bi bili slišani in razumljeni, tako si tudi telo želi intuitivne masaže pri Mirjani.",
      author: "Mnenje stranke",
    },
    {
      text: "Opravila sem prvo intuitivno masažo in bila presenečena, da je začutila moje dejansko stanje. Hvala za energijo.",
      author: "Mnenje stranke",
    },
    {
      text: "Ciao, moram ti povedati, da tudi telesne bolečine nimam več. To ne morem verjeti, tako lepo in dobro se počutim.",
      author: "Mnenje stranke",
    },
    {
      text: "Draga Mirjana, hvala, ker mi pomagaš premagovati moje globoko ukoreninjene strahove. Tvoje zlate roke delajo čudeže.",
      author: "Mnenje stranke",
    },
    {
      text: "Izjemna izkušnja. Zelo sproščujoča, meditacijska. Počutim se prerojen, navdahnjen in optimističen.",
      author: "Mnenje stranke",
    },
    {
      text: "Zelo pozitivna izkušnja. Počutim se lažje, manj bolečin v hrbtu, manj pod stresom in lažje poslušam svoje telo.",
      author: "Mnenje stranke",
    },
    {
      text: "Hvala, šepetalka teles…",
      author: "Mnenje stranke",
    },
    {
      text: "Vtisi so močni. S prvimi petimi besedami ste opisala dejansko stanje mojega jaza. Hvala iz srca.",
      author: "Mnenje stranke",
    },
  ];

  return (
    <div className="marquee-container py-8">
      <div className="marquee-content">
        {[...testimonials, ...testimonials].map((item, index) => (
          <div key={index} className="marquee-item">
            <div className="text-[var(--color-accent-green)] text-2xl">★★★★★</div>
            <p className="font-serif italic text-4xl lg:text-5xl">"{item.text}"</p>
            <span className="text-base lg:text-lg uppercase tracking-widest opacity-70 ml-4 font-semibold">
              - {item.author}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

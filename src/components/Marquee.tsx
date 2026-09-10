export default function Marquee() {
  const row1 = [
    {
      text: "Tako kot sami hrepenimo po tem, da bi bili slišani in razumljeni, tako si tudi telo želi intuitivne masaže pri Mirjani.",
      author: "Mnenje stranke",
    },
    {
      text: "Ciao, moram ti povedati, da tudi telesne bolečine nimam več. To ne morem verjeti, tako lepo in dobro se počutim.",
      author: "Mnenje stranke",
    },
    {
      text: "Izjemna izkušnja. Zelo sproščujoča, meditacijska. Počutim se prerojen, navdahnjen in optimističen.",
      author: "Mnenje stranke",
    },
    {
      text: "Hvala, šepetalka teles… Neverjetno, kako natančno začutiš vsako blokado in jo nežno sprostiš.",
      author: "Mnenje stranke",
    },
  ];

  const row2 = [
    {
      text: "Opravila sem prvo intuitivno masažo in bila presenečena, da je začutila moje dejansko stanje. Hvala za energijo.",
      author: "Mnenje stranke",
    },
    {
      text: "Draga Mirjana, hvala, ker mi pomagaš premagovati moje globoko ukoreninjene strahove. Tvoje zlate roke delajo čudeže.",
      author: "Mnenje stranke",
    },
    {
      text: "Zelo pozitivna izkušnja. Počutim se lažje, manj bolečin v hrbtu, manj pod stresom in lažje poslušam svoje telo.",
      author: "Mnenje stranke",
    },
    {
      text: "Vtisi so močni. S prvimi petimi besedami ste opisala dejansko stanje mojega jaza. Hvala iz srca.",
      author: "Mnenje stranke",
    },
  ];

  return (
    <section className="marquee-wrapper" aria-label="Mnenja strank">
      {/* Row 1 - scrolling left */}
      <div className="marquee-row">
        <div className="marquee-track marquee-track-left">
          {[...row1, ...row1, ...row1].map((item, index) => (
            <div key={`row1-${index}`} className="testimonial-card">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[#D4E89C] text-sm tracking-wider">★★★★★</div>
                <span className="text-[10px] uppercase tracking-widest text-white/60">
                  {item.author}
                </span>
              </div>
              <p className="font-serif italic text-sm sm:text-base text-white/95 leading-relaxed">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolling right */}
      <div className="marquee-row">
        <div className="marquee-track marquee-track-right">
          {[...row2, ...row2, ...row2].map((item, index) => (
            <div key={`row2-${index}`} className="testimonial-card">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[#D4E89C] text-sm tracking-wider">★★★★★</div>
                <span className="text-[10px] uppercase tracking-widest text-white/60">
                  {item.author}
                </span>
              </div>
              <p className="font-serif italic text-sm sm:text-base text-white/95 leading-relaxed">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

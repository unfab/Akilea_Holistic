"use client";

import ServiceAccordion from "@/components/ServiceAccordion";
import { useLanguage } from "@/context/LanguageContext";

export default function StoritvePage() {
  const { t, language } = useLanguage();

  const services = [
    {
      id: "masaza-telesa",
      title: t.servicesPage.items[0]?.name || "Intuitivna masaža celega telesa",
      duration: t.servicesPage.items[0]?.duration || "1 h 45 min",
      price: `${t.servicesPage.items[0]?.price || 85} €`,
      image: "/images/storitve/mirjana-masaza-hero.jpg",
      stripeLink: "https://buy.stripe.com/14AdRag2k9ts9HB46ycQU02",
      description: language === "sl" ? (
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Telo si vse zapomni – vsako čustvo, vsako misel, le prisluhniti mu moramo. In ko to storimo, se začnejo dogajati čudeži. Intuitivna masaža, ki jo izvajam, omogoča prav to: z združitvijo tradicionalne masažne tehnike z globokim čutenjem in intuitivnim zaznavanjem prepoznam področja napetosti, blokad in neravnovesij v telesu ter vam predam zapise in sporočila o mislih ter čustvih, ki so se vtisnila v telo.
          </p>
          <p>
            Z ozaveščanjem predanih sporočil, z nežnimi gibi in uporabo kristalov ter ventuz se energija v telesu spet sprosti, kar pripomore h globokemu občutku miru, sprostitve in globokih transformacij.
          </p>
          
          <div className="bg-[var(--color-surface)] p-4 rounded-md my-3">
            <p className="font-semibold text-[var(--color-primary)] mb-2">Intuitivna masaža ponuja:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Vpogled v ujeta, potlačena čustva, ki vam povzročajo bolečino</li>
              <li>Vpogled v stanje čaker</li>
              <li>Vpogled v pretok energije po meridianih</li>
              <li>Intuitivna sporočila, ki vam v danem trenutku najbolj služijo</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-[var(--color-primary)] mb-1">Zelo pogosto pridejo odgovori na vprašanja:</p>
            <ul className="list-none space-y-1 italic text-[var(--color-muted)] pl-2 border-l-2 border-[var(--color-accent)]">
              <li>– Zakaj se ne morem premakniti?</li>
              <li>– Zakaj se tako počutim?</li>
              <li>– Zakaj imam odnose, kot jih imam?</li>
            </ul>
          </div>

          <p>
            In z vsem zgoraj naštetim sledi sprostitev telesa, občutek miru in opolnomočenje za nadaljnje korake. Ne glede na to, koliko solza in bolečine se med intuitivno masažo sprosti, temu vedno sledi globok občutek olajšanja in zaupanja v prihodnost. Stranke odidejo z nasmehom na obrazu in popolnoma drugačno, lahkotnejšo energijo.
          </p>

          <div className="bg-white/80 p-3 rounded border border-[var(--color-border)] italic text-xs space-y-1">
            <p className="font-semibold not-italic text-[var(--color-primary)]">Najpogostejše izjave strank po masaži:</p>
            <p>»To pa je bilo res nekaj posebnega.«</p>
            <p>»To pa je bilo res nekaj drugačnega.«</p>
            <p>»Tega se ne da opisati, to moraš doživeti.«</p>
          </div>

          <p>
            Zato se stranke rade vračajo, mnoge prihajajo mesečno in transformacije so že po enem mesecu opazne. Na intuitivni masaži prejmete smernice, ki skupaj z vašim osebnim delom na sebi pripomorejo h globljemu stiku s sabo ter s tem k spremembam, ki si jih želite.
          </p>

          <p className="text-xs text-[var(--color-muted)] pt-2">
            Za vprašanja ali naročanje mi lahko pišete na GSM: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">040 863 594</a>, v zasebno sporočilo na IG <a href="https://instagram.com/akilea_holistic" target="_blank" rel="noreferrer" className="font-bold text-[var(--color-primary)]">@akilea_holistic</a> ali na <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.
          </p>
        </div>
      ) : (
        <div className="space-y-4 text-sm leading-relaxed">
          <p className="text-base font-light text-[var(--color-primary)] leading-relaxed">
            {t.servicesPage.items[0]?.fullDesc}
          </p>
          <div className="bg-[var(--color-surface)] p-5 rounded-lg border border-[var(--color-border)] my-4">
            <h4 className="font-serif text-[var(--color-primary)] font-bold mb-3">
              {language === "en" && "Key Benefits:"}
              {language === "hr" && "Glavne prednosti tretmana:"}
              {language === "it" && "Principali benefici del trattamento:"}
              {language === "sr" && "Главне предности третмана:"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {t.servicesPage.items[0]?.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#6a882a] font-bold">&bull;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-[var(--color-muted)] pt-2">
            {language === "en" && <>For questions or direct booking contact: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">+386 40 863 594</a> or <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.</>}
            {language === "hr" && <>Za pitanja ili rezervacije obratite se na: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">+386 40 863 594</a> ili <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.</>}
            {language === "it" && <>Per domande o prenotazioni dirette: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">+386 40 863 594</a> oppure <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.</>}
            {language === "sr" && <>За питања или резервације контактирајте: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">+386 40 863 594</a> или <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.</>}
          </p>
        </div>
      ),
    },
    {
      id: "masaza-trebuha",
      title: t.servicesPage.items[2]?.name || "Intuitivna masaža trebuha",
      duration: t.servicesPage.items[2]?.duration || "50 min",
      price: `${t.servicesPage.items[2]?.price || 50} €`,
      image: "https://static.wixstatic.com/media/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png/v1/fill/w_863,h_574,al_c,q_90,enc_auto/dfaf38_267e4d3890be41498fe3c650a577dd4f~mv2.png",
      stripeLink: "https://buy.stripe.com/00w6oI3fyeNM1b59qScQU01",
      description: language === "sl" ? (
        <div className="space-y-4 text-sm leading-relaxed">
          <p className="italic text-[var(--color-primary)] font-serif text-base">
            Nežen pristop k sproščanju ujete energije in čustev v predelu trebuha – prostor, kjer se pogosto skriva največ neizrečenega.
          </p>
          <p>
            Trebuh je središče telesa, je prostor, kjer shranjujemo čustva in napetosti, najpogosteje v povezavi z družinskimi odnosi. Z nežnim dotikom intuitivna masaža podpira sproščanje zastalih energij, čustev, mehča napetosti ter omogoča ponovni pretok energije in posledično vodi v večji stik s telesom.
          </p>
          <p>
            Med intuitivno masažo vam predam zapise in sporočila o ujetih čustvih ali dogodkih, ki so se zapisali na določenem predelu trebuha in so imeli na vas pomemben vpliv (najpogosteje že iz otroštva). Z ozaveščanjem le-teh in intuitivno masažo se te napetosti in čustva sprostijo, kar pripomore h globokemu občutku miru, sprostitve in globokih transformacij.
          </p>
          <div className="bg-[var(--color-surface)] p-4 rounded-md border-l-4 border-[#6a882a]">
            <p className="font-medium text-[var(--color-primary)]">
              Po intuitivni masaži, poleg lahkotnosti v celotnem telesu, stranke z nasmehom na ustih povedo, da imajo občutek »praznega trebuha« – veliko olajšanje.
            </p>
          </div>
          <p className="text-xs text-[var(--color-muted)] pt-2">
            Če ste začutili klic, mi pišite na GSM: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">040 863 594</a>, IG <a href="https://instagram.com/akilea_holistic" target="_blank" rel="noreferrer" className="font-bold text-[var(--color-primary)]">@akilea_holistic</a> ali <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.
          </p>
        </div>
      ) : (
        <div className="space-y-4 text-sm leading-relaxed">
          <p className="text-base font-light text-[var(--color-primary)] leading-relaxed">
            {t.servicesPage.items[2]?.fullDesc}
          </p>
          <div className="bg-[var(--color-surface)] p-5 rounded-lg border border-[var(--color-border)] my-4">
            <h4 className="font-serif text-[var(--color-primary)] font-bold mb-3">
              {language === "en" && "Key Benefits:"}
              {language === "hr" && "Glavne prednosti tretmana:"}
              {language === "it" && "Principali benefici del trattamento:"}
              {language === "sr" && "Главне предности третмана:"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {t.servicesPage.items[2]?.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#6a882a] font-bold">&bull;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-[var(--color-muted)] pt-2">
            {language === "en" && <>For questions or direct booking contact: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">+386 40 863 594</a> or <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.</>}
            {language === "hr" && <>Za pitanja ili rezervacije obratite se na: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">+386 40 863 594</a> ili <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.</>}
            {language === "it" && <>Per domande o prenotazioni dirette: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">+386 40 863 594</a> oppure <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.</>}
            {language === "sr" && <>За питања или резервације контактирајте: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">+386 40 863 594</a> или <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.</>}
          </p>
        </div>
      ),
    },
    {
      id: "masaza-hrbta",
      title: t.servicesPage.items[1]?.name || "Intuitivna masaža hrbta",
      duration: t.servicesPage.items[1]?.duration || "50 min",
      price: `${t.servicesPage.items[1]?.price || 50} €`,
      image: "https://static.wixstatic.com/media/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg/v1/fit/w_3648,h_5472,al_c,q_90/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg",
      stripeLink: "https://buy.stripe.com/28E00k7vOcFE1b5dH8cQU00",
      description: language === "sl" ? (
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Hrbet je več kot le fizična struktura; je most med našim telesom, umom in dušo. Njegova energija in struktura odražata našo notranjo moč, čustveno stanje in duhovno ravnovesje. Bolečine in poškodbe nas pogosto opozarjajo na potrebo po ozaveščanju, predelavi in spuščanju čustev, ki jih v veliki večini primerov potiskamo, ali na iskanje ravnotežja v življenju.
          </p>
          <p>
            Zavedanje, da je poleg fizičnih orodij in tehnik (vadba, fizioterapija in podobno) potrebno osvetliti tudi čustveni, duhovni in energijski pomen bolečin v hrbtu, nam pomaga razumeti globlje vzroke za telesne težave in nas vodi na poti zmanjšanja bolečin ter osebne rasti.
          </p>
          <p>
            In intuitivna masaža hrbta omogoča prav to – da prisluhnemo sporočilom hrbta, prepoznamo, kaj vse se je zapisalo na tem predelu, in to na nežen način ozavestimo ter sprostimo. Z ozaveščanjem le-teh in masažo se napetosti ter potlačena čustva sprostijo, kar pripomore h globokemu občutku miru, sprostitve in globokih transformacij.
          </p>
          <p className="text-xs text-[var(--color-muted)] pt-2">
            Če ste začutili klic, mi pišite na GSM: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">040 863 594</a>, IG <a href="https://instagram.com/akilea_holistic" target="_blank" rel="noreferrer" className="font-bold text-[var(--color-primary)]">@akilea_holistic</a> ali <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.
          </p>
        </div>
      ) : (
        <div className="space-y-4 text-sm leading-relaxed">
          <p className="text-base font-light text-[var(--color-primary)] leading-relaxed">
            {t.servicesPage.items[1]?.fullDesc}
          </p>
          <div className="bg-[var(--color-surface)] p-5 rounded-lg border border-[var(--color-border)] my-4">
            <h4 className="font-serif text-[var(--color-primary)] font-bold mb-3">
              {language === "en" && "Key Benefits:"}
              {language === "hr" && "Glavne prednosti tretmana:"}
              {language === "it" && "Principali benefici del trattamento:"}
              {language === "sr" && "Главне предности третмана:"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {t.servicesPage.items[1]?.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#6a882a] font-bold">&bull;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-[var(--color-muted)] pt-2">
            {language === "en" && <>For questions or direct booking contact: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">+386 40 863 594</a> or <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.</>}
            {language === "hr" && <>Za pitanja ili rezervacije obratite se na: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">+386 40 863 594</a> ili <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.</>}
            {language === "it" && <>Per domande o prenotazioni dirette: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">+386 40 863 594</a> oppure <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.</>}
            {language === "sr" && <>За питања или резервације контактирајте: <a href="tel:040863594" className="font-bold text-[var(--color-primary)]">+386 40 863 594</a> или <a href="mailto:mirjana@akilea.si" className="font-bold text-[var(--color-primary)]">mirjana@akilea.si</a>.</>}
          </p>
        </div>
      ),
    }
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

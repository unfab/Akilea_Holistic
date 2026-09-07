import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Predavanja & B2B Delavnice | Akilea Holistični Center",
  description: "Predavanje in izkustvena delavnica: Ko križ boli – kaj mi sporoča telo? Korporativni wellness in obvladovanje stresa na delovnem mestu.",
};

export default function PredavanjaPage() {
  return (
    <div className="spa-view active bg-[var(--color-bg)] min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-widest text-[#6a882a] font-bold mb-3 block">
            Delitev znanja &bull; Predavanja in B2B
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-[var(--color-primary)] mb-6 leading-tight">
            Korporativni wellness & Izobraževanja
          </h1>
          <p className="text-[var(--color-muted)] font-light leading-relaxed text-lg sm:text-xl">
            Pripravljam strokovna predavanja na temo vpliva stresa na telo in izboljšanja počutja zaposlenih na delovnem mestu.
          </p>
        </div>

        {/* 2. PHOTO OF MIRJANA GIVING A LECTURE */}
        <div className="bg-white rounded-2xl shadow-md border border-[var(--color-border)] overflow-hidden mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px]">
              <Image
                src="/images/predavanja/mirjana-predavanje.jpg"
                alt="Mirjana Groznik med predavanjem o bolečinah v križu in vplivu stresa"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 space-y-6">
              <div className="inline-block bg-[var(--color-surface)] text-[var(--color-primary)] px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider">
                V živo v predavalnici
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[var(--color-primary)] leading-snug">
                »Pretirana odgovornost do dela in drugih, a neodgovornost do sebe.«
              </h2>
              <p className="text-[var(--color-muted)] font-light leading-relaxed text-sm sm:text-base">
                Zaposleni pod vsakodnevnim pritiskom pogosto spregledajo prve signale telesa. Na predavanjih skozi osebne primere in strokovne uvide osvetlimo povezavo med psihološkim stresom, čustvi in kronično mišično napetostjo.
              </p>
              <div className="pt-2">
                <a 
                  href="#povprasevanje" 
                  className="btn-primary px-8 py-3.5 text-xs uppercase tracking-widest font-bold inline-block"
                >
                  Pošljite povpraševanje
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. MAIN PROGRAM HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="bg-[#f4f8eb] text-[#6a882a] border border-[#d2e5b8] px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold inline-block mb-4">
            Predlog predavanja in izkustvene delavnice
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-4 uppercase tracking-tight">
            “Ko križ boli – kaj mi sporoča telo?”
          </h2>
          <p className="text-xl font-serif text-[var(--color-accent)] italic mb-6">
            Povezava med čustvi, stresom in bolečino v križu
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider">
            <span className="bg-white px-4 py-2 rounded border border-[var(--color-border)] shadow-sm">
              <strong className="text-[var(--color-primary)]">Oblika:</strong> Uvodno predavanje + izkustvena delavnica
            </span>
            <span className="bg-white px-4 py-2 rounded border border-[var(--color-border)] shadow-sm">
              <strong className="text-[var(--color-primary)]">Ciljna skupina:</strong> Odrasli in zaposleni z bolečinami v križu
            </span>
          </div>
        </div>

        {/* 4. TARGET AUDIENCE & RELATABLE STRUGGLES WITH BVK IMAGE */}
        <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-border)] p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Everyday pain checklist */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-serif text-[var(--color-primary)]">
                Program je namenjen vsem tistim, ki:
              </h3>
              <ul className="space-y-2 text-[var(--color-muted)] font-light text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#6a882a] font-bold">&bull;</span>
                  <span>So utrujeni od nenehne bolečine,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6a882a] font-bold">&bull;</span>
                  <span>So poskusili že marsikaj – od raznih terapij, telovadb, zdravil do prehranskih dodatkov, a brez dolgoročnega učinka,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6a882a] font-bold">&bull;</span>
                  <span>Se najdejo v spodnjih vsakodnevnih stavkih:</span>
                </li>
              </ul>

              {/* Quotation block */}
              <div className="bg-[var(--color-surface)] p-6 rounded-xl border-l-4 border-[#6a882a] space-y-2.5 text-sm sm:text-base font-serif italic text-[var(--color-text)]">
                <p>Spet je jutro, a se komaj premakneš v postelji.</p>
                <p>Kako vstati, da čim manj boli?</p>
                <p>Kako opraviti osnovna higienska opravila?</p>
                <p>Kako se obleči, obuti, da čim manj boli in brez pomoči drugih?</p>
                <p>Kako iti v službo, kako sedeti, kako stati?</p>
                <p>Kako objeti otroka, kako dvigniti malčka?</p>
                <p>Kako v trgovini vzeti artikel s spodnje police?</p>
                <p className="not-italic text-xs font-sans text-[var(--color-muted)] pt-2 border-t border-[var(--color-border)]">
                  Kako …. dopolni sam(a), prepričana sem, da bo tudi tvoj seznam (pre)dolg, tako kot je bil moj.
                </p>
              </div>
            </div>

            {/* Right Column: BVK Image */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden shadow-lg border border-[var(--color-border)]">
                <Image
                  src="/images/predavanja/bolecina-v-krizu-pisarna.png"
                  alt="Zaposlena z bolečino v križu za pisalno mizo"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="text-[11px] text-[var(--color-muted)] italic text-center mt-3">
                Dolgotrajno sedenje in kopičenje stresa sta pogost povod za kronične bolečine v križu.
              </p>
            </div>

          </div>

          {/* Program Purpose & Vision */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <h4 className="text-xl font-serif text-[var(--color-primary)] mb-4">
              Namen programa je vsem tistim, ki se soočajo z bolečinami v križu:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm text-[var(--color-muted)] font-light leading-relaxed">
              <div className="bg-[var(--color-bg)] p-5 rounded-lg border border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-primary)] mb-2">1. Razumevanje povezave</p>
                Skozi konkretne primere iz lastnih izkušenj in dela s strankami približati razumevanje povezave med bolečino, telesom, čustvi in obremenitvami, ki jih prinaša življenje.
              </div>
              <div className="bg-[var(--color-bg)] p-5 rounded-lg border border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-primary)] mb-2">2. Tehnike in orodja</p>
                Ponuditi preproste tehnike in orodja za krepitev stika s telesom, večjo notranjo podporo ter učinkovito lajšanje vsakodnevnih bolečin.
              </div>
              <div className="bg-[var(--color-bg)] p-5 rounded-lg border border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-primary)] mb-2">3. Izkušnje iz prakse</p>
                Predati znanje in izkušnje, pridobljene v skoraj 13 letih od operacije križa, z željo udeležencem olajšati pot ter jih naučiti, kako si pomagati pri ozaveščanju vzrokov.
              </div>
            </div>

            {/* Vision Quote Banner */}
            <div className="bg-[var(--color-primary)] text-white p-6 rounded-xl text-center shadow-sm">
              <p className="text-xs uppercase tracking-widest font-bold text-white/70 mb-1">Moja vizija za vse, ki se soočajo z bolečinami v križu</p>
              <p className="font-serif text-2xl sm:text-3xl font-normal italic">
                »Bolečina v križu naj bo le opomnik in ne trajen sopotnik.«
              </p>
              <p className="text-xs text-white/80 font-light mt-3 max-w-2xl mx-auto">
                Program je primeren tudi za tiste, katerih ljubljene osebe ali sodelavci se soočajo z bolečinami v križu. Pomagal jim bo do večjega razumevanja in drugačnega pogleda na podporo.
              </p>
            </div>
          </div>
        </div>

        {/* 5. TWO MODULES BREAKDOWN */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-widest text-[#6a882a] font-bold mb-2 block">Struktura izvedbe</span>
            <h3 className="text-3xl font-serif text-[var(--color-primary)]">Vsebina predavanja in delavnice</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Module 1: Lecture */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-[#f4f8eb] text-[#6a882a] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    Modul 1
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-muted)]">Trajanje: 2 – 2,5 ure</span>
                </div>
                <h4 className="text-2xl font-serif text-[var(--color-primary)] mb-3">Uvodno predavanje</h4>
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">Namen predavanja:</p>
                  <ul className="text-xs text-[var(--color-muted)] space-y-1 list-disc pl-4">
                    <li>Povečati razumevanje vpliva čustev, prepričanj in stresa na bolečino v križu</li>
                    <li>Spodbuditi drugačen odnos do bolečine in telesa</li>
                    <li>Ozavestiti pomen notranje opore</li>
                    <li>Da bolečina v križu postane le opomnik in ne trajen sopotnik</li>
                  </ul>
                </div>
                <div className="border-t border-[var(--color-border)] pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-3">Vsebina:</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text)] font-light">
                    <li className="flex items-center gap-2">&bull; Telo kot nosilec sporočil</li>
                    <li className="flex items-center gap-2">&bull; Križ in hrbtenica kot simbol opore, stabilnosti in bremen</li>
                    <li className="flex items-center gap-2">&bull; Vloga trebuha pri bolečinah v križu</li>
                    <li className="flex items-center gap-2">&bull; Čustveni vzorci in prepričanja, ki vplivajo na bolečino</li>
                    <li className="flex items-center gap-2">&bull; Stres in dolgotrajna mišična napetost</li>
                    <li className="flex items-center gap-2">&bull; Kako prepoznati, kdaj telo kliče po spremembi</li>
                    <li className="flex items-center gap-2">&bull; Kratke varne vaje telesnega zavedanja</li>
                    <li className="flex items-center gap-2">&bull; Sporočila in uvidi iz lastne izkušnje ter dela s strankami</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2: Workshop */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-[#f5eff7] text-[var(--color-primary)] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    Modul 2
                  </span>
                  <div className="text-right text-xs">
                    <span className="font-semibold text-[var(--color-muted)] block">Trajanje: 2,5 – 3 ure</span>
                    <span className="text-[var(--color-muted)]">Skupina: do 20 oseb</span>
                  </div>
                </div>
                <h4 className="text-2xl font-serif text-[var(--color-primary)] mb-3">Nadaljevalna izkustvena delavnica</h4>
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">Namen delavnice:</p>
                  <ul className="text-xs text-[var(--color-muted)] space-y-1 list-disc pl-4">
                    <li>Naučiti se prisluhniti telesu in bolečini</li>
                    <li>Naučiti se, kako si praktično pomagati v primeru bolečine</li>
                    <li>Prepoznati čustvene vzroke napetosti in bolečine</li>
                    <li>Pridobiti orodja za vsakdanjo samopodporo</li>
                  </ul>
                </div>
                <div className="border-t border-[var(--color-border)] pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-3">Vsebina:</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text)] font-light">
                    <li className="flex items-center gap-2">&bull; Prepoznavanje notranjih napetosti in čustev v telesu</li>
                    <li className="flex items-center gap-2">&bull; Dihalne in sprostitvene tehnike za vsakdan</li>
                    <li className="flex items-center gap-2">&bull; Samomasaža ušes, stopal ter ostale podporne tehnike</li>
                    <li className="flex items-center gap-2">&bull; Refleksija: kaj nosim in kaj lahko varno spustim</li>
                    <li className="flex items-center gap-2">&bull; Krepitev občutka notranje opore</li>
                    <li className="flex items-center gap-2">&bull; Prepoznavanje notranjih in zunanjih bremen</li>
                    <li className="flex items-center gap-2">&bull; Odnos do odgovornosti in nadzora</li>
                    <li className="flex items-center gap-2">&bull; Vodene vaje telesnega zavedanja (nežne in varne)</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Medical Disclaimer */}
          <div className="mt-8 bg-amber-50 border border-amber-200 p-4 rounded-lg text-xs text-amber-900 text-center">
            <strong>Pomembna opomba:</strong> Predavanje in nadaljevalna delavnica sta podporne in izobraževalne narave. Ne nadomeščata zdravstvene, fizioterapevtske ali specialistične terapevtske obravnave.
          </div>
        </div>

        {/* 6. PRICING & SCHEDULE */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-[var(--color-border)] shadow-sm mb-16 text-center">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-bold mb-2 block">Finančni pogoji</span>
          <h3 className="text-3xl font-serif text-[var(--color-primary)] mb-8">Predlagan urnik in prispevek</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-border)]">
              <p className="text-xs uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">Samostojno predavanje</p>
              <p className="text-4xl font-serif text-[var(--color-primary)] font-semibold mb-2">170 €</p>
              <p className="text-xs text-[var(--color-muted)]">Trajanje 2–2,5 ure &bull; Urnik po dogovoru</p>
            </div>
            <div className="bg-[#f4f8eb] p-6 rounded-xl border border-[#d2e5b8]">
              <p className="text-xs uppercase tracking-widest font-bold text-[#6a882a] mb-2">Paket: Predavanje + Delavnica</p>
              <p className="text-4xl font-serif text-[#6a882a] font-semibold mb-2">320 €</p>
              <p className="text-xs text-[var(--color-muted)]">Celovita izkustvena obravnava &bull; Urnik po dogovoru</p>
            </div>
          </div>

          <p className="text-xs text-[var(--color-muted)] max-w-xl mx-auto leading-relaxed">
            Nisem zavezanec za DDV. Možna je tudi prilagoditev obsega – izvedba samo predavanja in krajše delavnice po merah vašega podjetja ali organizacije.
          </p>
        </div>

        {/* 7. MIRJANA'S STORY & WHY THIS PROGRAM */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-[var(--color-border)] shadow-sm mb-16">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#6a882a] font-bold mb-2 block text-center">
              Moja prednost & Zgodba
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-[var(--color-primary)] text-center mb-6">
              V čem se ta program razlikuje od drugih?
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs uppercase tracking-widest font-bold text-[var(--color-primary)]">
              <span className="bg-[var(--color-surface)] px-4 py-2 rounded">Celosten pristop</span>
              <span className="bg-[var(--color-surface)] px-4 py-2 rounded">Moja zgodba</span>
              <span className="bg-[var(--color-surface)] px-4 py-2 rounded">Želja pomagati in olajšati</span>
            </div>

            <div className="prose prose-sm sm:prose-base max-w-none text-[var(--color-muted)] font-light leading-relaxed space-y-4">
              <p className="text-[var(--color-text)] font-medium">
                Razumem stisko oseb z bolečinami v križu, ker sem sama šla skozi to preizkušnjo in lahko s konkretnimi primeri ponudim drugačen pogled na bolečino ter njeno povezavo med telesom, čustvi in izzivi, ki jih prinaša življenje.
              </p>
              <p>
                Aprila leta 2013 sem bila pod nujno operirana zaradi hernije na L4-L5 in od takrat življenje delim na pred in po operaciji. Imela sem 35 let, dva majhna otroka in malo je manjkalo, da bi pristala na invalidskem vozičku. Še danes me strese in začutim krč v telesu, ko pomislim na to. Pravim si, da sem imela srečo in sem danes hvaležna za to izkušnjo, ker me je postavila na pot vračanja k sebi, raziskovanja, učenja in pomaganja ljudem.
              </p>
              <p>
                Po operaciji sem študirala naturopatijo (v sklopu izobraževanja tudi Tradicionalno kitajsko medicino, iridologijo ter ostale tehnike), energetske tehnike, opravila tečaj klasične masaže ter našla svoje poslanstvo v pomaganju ljudem s pomočjo intuitivne masaže, svetovanj in izobraževanj – vse to skozi celosten pogled na človeka.
              </p>
              <p>
                Danes se mi bolečina v križu pojavi kot opomnik, da sem si spet naložila preveč. <em>Opomnik in ne trajen sopotnik.</em> Zato s takšno vnemo želim predati vse znanje in izkušnje poti, ki sem jo prehodila v teh 13 letih, da bi osebam z bolečinami v križu olajšala pot, da jim ni potrebno ponavljati mojih napak, ter jim pokazati, kako si lahko pomagajo.
              </p>
              <p className="text-right font-serif text-lg text-[var(--color-primary)] pt-4">
                Mirjana Groznik
              </p>
            </div>
          </div>
        </div>

        {/* 8. B2B INQUIRY FORM / CTA */}
        <div id="povprasevanje" className="bg-[var(--color-primary)] text-white rounded-2xl p-8 lg:p-12 shadow-lg text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif mb-4">
            Želite organizirati predavanje ali delavnico?
          </h3>
          <p className="text-white/80 font-light mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Hvaležna bom in veselim se priložnosti izvedbe predavanja ter izkustvene delavnice tudi za vaš kolektiv ali organizacijo. Stopite v stik z mano in oblikovali bomo termin po vaših željah.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:mirjana@akilea.si?subject=Povpraševanje%20za%20predavanje%20Ko%20križ%20boli"
              className="bg-white text-[var(--color-primary)] hover:bg-[#FAF8F5] px-8 py-4 rounded text-xs uppercase tracking-widest font-bold shadow-md transition-all w-full sm:w-auto"
            >
              Pošljite e-sporočilo: mirjana@akilea.si
            </a>
            <a 
              href="tel:040863594"
              className="border border-white/40 hover:border-white text-white px-8 py-4 rounded text-xs uppercase tracking-widest font-bold transition-all w-full sm:w-auto"
            >
              Pokličite: 040 863 594
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

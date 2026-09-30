import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pravilnik o zasebnosti | Akilea Center zdravja",
  description: "Preberite naš pravilnik o zasebnosti in varovanju osebnih podatkov.",
  alternates: {
    canonical: "https://www.akilea.si/pravilnik-o-zasebnosti",
  },
};

const H2 = "text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4";

export default function PravilnikZasebnostiPage() {
  return (
    <div className="spa-view active bg-white min-h-screen py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-8">Pravilnik o zasebnosti</h1>

        <div className="prose prose-sm md:prose-base max-w-none text-[var(--color-muted)] font-light leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_a]:text-[var(--color-primary)] [&_a]:underline">
          <p className="font-bold mb-4">Zadnja posodobitev: 30. september 2026</p>

          <h2 className={H2}>1. Kdo smo</h2>
          <p>
            Upravljavka osebnih podatkov je AKILEA, Mirjana Groznik s.p., Šmarska cesta 5B, 6000 Koper (matična številka 9489983000,
            davčna številka 28773977; v nadaljevanju „mi“ ali „naš“). Za vprašanja o osebnih podatkih nam pišite na{" "}
            <a href="mailto:mirjana@akilea.si">mirjana@akilea.si</a> ali nas pokličite na 040 863 594.
          </p>
          <p>
            Zbiramo le podatke, ki jih potrebujemo za dogovor o terminu, odgovor na vaše vprašanje ali pošiljanje e-novic. Ta pravilnik
            pojasnjuje, katere podatke to so, komu jih zaupamo in kakšne so vaše pravice.
          </p>

          <h2 className={H2}>2. Katere podatke zbiramo in zakaj</h2>
          <p>
            <strong>Rezervacija termina.</strong> Ko rezervirate termin, vpišete ime in priimek ter e-poštni naslov in/ali telefonsko
            številko. Skupaj z izbrano storitvijo, datumom, uro in načinom plačila to pošljemo na našo e-pošto in zapišemo v naš
            elektronski koledar. Podatke uporabimo, da se dogovorimo o terminu, vas po potrebi kontaktiramo in izvedemo storitev.
            Pravna podlaga: izvajanje pogodbe oziroma ukrepi na vašo zahtevo pred sklenitvijo pogodbe (člen 6(1)(b) GDPR).
          </p>
          <p>
            Da bi preprečili zlorabe rezervacijskega obrazca, na koledarskem dogodku hranimo tudi zgoščeno (nečitljivo) oznako vašega
            e-poštnega naslova in telefonske številke. Z njo preverimo, da isti kontakt nima več kot tri prihodnje rezervacije.
            Pravna podlaga: zakoniti interes (člen 6(1)(f) GDPR) za zaščito rezervacijskega sistema.
          </p>
          <p>
            <strong>Povpraševanje za posvet.</strong> Ob pošiljanju obrazca za posvet prejmemo ime in priimek, e-pošto, telefonsko
            številko (neobvezno) in vaše sporočilo. Uporabimo jih le za odgovor na vaše povpraševanje. Pravna podlaga: ukrepi na vašo
            zahtevo pred sklenitvijo pogodbe (člen 6(1)(b) GDPR).
          </p>
          <p>
            <strong>E-novice in e-knjiga.</strong> Prijava poteka prek obrazca ponudnika MailerLite; podatke, ki jih tam vpišete (na
            primer e-pošto), prejme MailerLite in mi. Uporabimo jih za pošiljanje novic in obvestil o e-knjigi. Pravna podlaga: vaša
            privolitev (člen 6(1)(a) GDPR), ki jo lahko kadarkoli prekličete z odjavo ali sporočilom na naš e-poštni naslov.
          </p>
          <p>
            <strong>Obisk spletne strani.</strong> Ponudnik gostovanja lahko v strežniških zapisih začasno beleži tehnične podatke
            obiska (IP naslov, vrsto brskalnika, čas dostopa). Namen je delovanje in varnost strani; pravna podlaga je zakoniti interes
            (člen 6(1)(f) GDPR).
          </p>
          <p>
            <strong>Česa ne počnemo.</strong> Na spletni strani ne uporabljamo analitičnih orodij, oglaševalskih piškotkov ali
            sledilnikov, ne profiliramo obiskovalcev in ne sprejemamo avtomatiziranih odločitev o vas. Pisave se nalagajo z naše
            strani, ne od tretjih.
          </p>
          <p>
            <strong>Zdravstveni podatki.</strong> Prosimo, da v spletne obrazce ne vpisujete podrobnosti o svojem zdravstvenem stanju;
            o tem se pogovoriva osebno pred storitvijo. Če jih vseeno vpišete, jih obravnavamo zaupno in jih uporabimo le za odgovor na
            vaše povpraševanje.
          </p>

          <h2 className={H2}>3. Komu podatke zaupamo</h2>
          <p>Podatkov ne prodajamo. Za delovanje strani in poslovanja uporabljamo naslednje ponudnike, ki podatke obdelujejo v našem imenu:</p>
          <ul>
            <li>Netlify, Inc. – gostovanje spletne strani;</li>
            <li>Web3Forms – posredovanje vsebine obrazcev (rezervacija, posvet) na našo e-pošto;</li>
            <li>Google Workspace (Google LLC) – naš e-poštni predal in koledar, v katerem so zapisani termini;</li>
            <li>MailerLite – prijava in pošiljanje e-novic.</li>
          </ul>
          <p>
            Nekateri od teh ponudnikov imajo sedež v ZDA ali podatke obdelujejo izven Evropske unije. V tem primeru se prenos opira na
            zaščitne ukrepe po GDPR (standardne pogodbene klavzule ali sklep Evropske komisije o ustreznosti). Podatke lahko razkrijemo
            še organom, kadar to zahteva zakon.
          </p>

          <h2 className={H2}>4. Kako dolgo podatke hranimo</h2>
          <ul>
            <li>
              <strong>Rezervacije in povpraševanja</strong> (e-pošta in koledar): dokler jih potrebujemo za dogovor in izvedbo storitve.
              Nato jih izbrišemo, razen kadar zakon zahteva daljšo hrambo (na primer računovodska dokumentacija).
            </li>
            <li>
              <strong>E-novice:</strong> do vašega preklica privolitve oziroma odjave.
            </li>
            <li>
              <strong>Strežniški zapisi:</strong> pri ponudniku gostovanja, po njegovih pravilih, praviloma kratek čas.
            </li>
            <li>
              <strong>Nastavitve v brskalniku</strong> (piškotki in lokalna shramba, glejte točko 5): do izteka ali do izbrisa v vašem
              brskalniku.
            </li>
          </ul>

          <h2 className={H2}>5. Piškotki in lokalna shramba</h2>
          <p>
            Naša stran shrani v vaš brskalnik le tri majhne zapise, ki so potrebni za delovanje in za vaše nastavitve. Zanje soglasje ni
            potrebno:
          </p>
          <ul>
            <li>
              <strong>app_lang</strong> (piškotek, 1 leto) in <strong>akilea_lang</strong> (lokalna shramba): izbrani jezik strani;
            </li>
            <li>
              <strong>cookieConsent</strong> (lokalna shramba): podatek, da ste obvestilo o piškotkih že potrdili.
            </li>
          </ul>
          <p>
            Analitičnih ali oglaševalskih piškotkov ne uporabljamo. Povezave na MailerLite, Facebook in Instagram vodijo na njihove
            strani, kjer veljajo njihova pravila. Zapise lahko kadarkoli izbrišete v nastavitvah brskalnika.
          </p>

          <h2 className={H2}>6. Vaše pravice</h2>
          <p>
            Imate pravico do dostopa do svojih podatkov, popravka, izbrisa, omejitve obdelave, ugovora zoper obdelavo in prenosljivosti
            podatkov. Kjer obdelava temelji na privolitvi, jo lahko kadarkoli prekličete, ne da bi to vplivalo na zakonitost obdelave
            pred preklicem. Zahtevek pošljite na <a href="mailto:mirjana@akilea.si">mirjana@akilea.si</a>; odgovorimo najkasneje v enem
            mesecu.
          </p>
          <p>
            Če menite, da vaše podatke obdelujemo nezakonito, imate pravico do pritožbe pri nadzornem organu: Informacijski
            pooblaščenec, Dunajska cesta 22, 1000 Ljubljana, <a href="https://www.ip-rs.si" rel="noopener noreferrer">www.ip-rs.si</a>.
          </p>

          <h2 className={H2}>7. Varnost in spremembe</h2>
          <p>
            Stran je dostopna prek šifrirane povezave (HTTPS), do podatkov pa imamo dostop mi in zgoraj navedeni ponudniki. Ta pravilnik
            lahko spremenimo, zato na vrhu navajamo datum zadnje posodobitve.
          </p>
        </div>
      </div>
    </div>
  );
}

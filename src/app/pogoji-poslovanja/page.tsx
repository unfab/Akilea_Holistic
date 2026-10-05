import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pogoji poslovanja | Akilea Center zdravja",
  description: "Splošni pogoji poslovanja in uporabe storitev.",
  alternates: {
    canonical: "https://www.akilea.si/pogoji-poslovanja",
  },
};

export default function PogojiPoslovanjaPage() {
  return (
    <div className="spa-view active bg-white min-h-screen py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-8">Pogoji poslovanja</h1>
        
        <div className="prose prose-sm md:prose-base max-w-none text-[var(--color-muted)] font-light leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_a]:text-[var(--color-primary)] [&_a]:underline">
          <p className="font-bold mb-4">Veljavnost od: 5. oktober 2026</p>
          
          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">1. Splošne določbe</h2>
          <p>
            Ti splošni pogoji poslovanja urejajo odnose med ponudnikom storitev (Akilea Center zdravja, Mirjana Groznik s.p.) in uporabniki storitev oziroma obiskovalci spletne strani.
          </p>
          <p>
            Podatki o ponudniku: AKILEA, Mirjana Groznik s.p., Šmarska cesta 5B, 6000 Koper, matična številka 9489983000, davčna številka 28773977.
            Nisem zavezanka za DDV na podlagi 1. odstavka 94. člena ZDDV-1. Kontakt: telefon 040 863 594, e-pošta <a href="mailto:mirjana@akilea.si">mirjana@akilea.si</a>.
          </p>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">2. Rezervacije, odpoved in prestavitev termina</h2>
          <p>
            Rezervacije storitev potekajo preko spletnega obrazca, e-pošte, telefona ali SMS-a. Stranka se strinja s ceno in pogoji storitve ob potrditvi rezervacije. Ti pogoji veljajo ne glede na način rezervacije.
          </p>
          <p>
            Termin lahko odpove ali prestavi vsaka stran. Odpoved ali prestavitev sporočite po telefonu na 040 863 594 ali po e-pošti na <a href="mailto:mirjana@akilea.si">mirjana@akilea.si</a>.
          </p>
          <ul>
            <li>Prva odpoved, prestavitev ali neudeležba je brezplačna, ne glede na to, kdaj jo stranka sporoči. Dogovorimo se za nov termin; če je stranka storitev že plačala, ji na njeno željo vrnemo celotno kupnino.</li>
            <li>Vsaka naslednja odpoved ali prestavitev je brezplačna, če jo stranka sporoči najpozneje 24 ur pred dogovorjenim terminom. Dogovorimo se za nov termin; če je stranka storitev že plačala, ji na njeno željo vrnemo celotno kupnino.</li>
            <li>Če stranka vsako naslednjo odpoved ali prestavitev sporoči pozneje kot 24 ur pred terminom ali na termin ne pride, ji zaračunamo nadomestilo za rezerviran termin v višini 70 % cene storitve. Če je storitev že plačala, zadržimo 70 % plačanega zneska in ji vrnemo preostalih 30 %.</li>
            <li>Če termin odpovemo mi, se s stranko dogovorimo za nov termin ali ji vrnemo celotno že plačano kupnino, brez stroškov za stranko.</li>
          </ul>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">3. Delavnice: prijava in odjava</h2>
          <p>
            Na delavnice se prijavite prek prijavnega obrazca, po e-pošti ali po telefonu. Pri plačljivih delavnicah sta cena in način plačila navedena v opisu delavnice. Odjavo sporočite po telefonu na 040 863 594 ali po e-pošti na <a href="mailto:mirjana@akilea.si">mirjana@akilea.si</a>.
          </p>
          <ul>
            <li>Odjava je brezplačna, če jo udeleženec sporoči najpozneje 3 dni pred začetkom delavnice. Takrat lahko izbere: vračilo celotne kupnine, prenos prijave na naslednjo delavnico ali da namesto njega pride druga oseba (sporoči nam njeno ime in priimek).</li>
            <li>Če se udeleženec odjavi pozneje kot 3 dni pred začetkom ali na delavnico ne pride, zadržimo 30 % cene delavnice in mu vrnemo preostalih 70 %. Če namesto njega pride druga oseba (sporoči nam njeno ime in priimek), mu ni treba plačati ničesar.</li>
            <li>Če delavnico odpovemo mi, udeležencu vrnemo celotno kupnino ali ga na njegovo željo prijavimo na naslednjo delavnico.</li>
          </ul>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">4. Pravica do odstopa od pogodbe</h2>
          <p>
            Če stranka storitev rezervira na daljavo (prek spletnega obrazca, e-pošte, telefona ali SMS-a), ima kot potrošnik pravico, da v 14 dneh brez navedbe razloga odstopi od pogodbe (134. člen ZVPot-1). Odstop sporoči po e-pošti na <a href="mailto:mirjana@akilea.si">mirjana@akilea.si</a> ali po telefonu na 040 863 594.
          </p>
          <p>
            Pri storitvah za prosti čas, ki jih izvedemo v točno določenem terminu (npr. intuitivna masaža ali delavnica), stranka v skladu s 135. členom ZVPot-1 nima pravice do odstopa od pogodbe, sklenjene na daljavo; termin lahko odpove ali prestavi po pravilih iz 2. točke, prijavo na delavnico pa odjavi po pravilih iz 3. točke. Za druge storitve velja 14-dnevni rok; če stranka zahteva, da se storitev izvede v izbranem terminu, pravico do odstopa izgubi, ko je storitev v celoti izvedena.
          </p>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">5. Plačila in cene</h2>
          <p>
            Cene storitev so navedene v evrih. Storitve so oproščene DDV. Plačilo se opravi na lokaciji.
          </p>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">6. Zdravstveno stanje</h2>
          <p>
            Stranka je dolžna pred začetkom izvajanja storitev (masaže, svetovanja) izvajalca opozoriti na morebitne zdravstvene težave, poškodbe ali stanja, ki bi lahko vplivala na potek terapije. Storitve niso nadomestilo za uradno medicinsko zdravljenje.
          </p>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">7. Omejitev odgovornosti</h2>
          <p>
            Ponudnik storitev ne prevzema odgovornosti za morebitne poškodbe ali poslabšanje zdravstvenega stanja, če stranka izvajalca ni predhodno seznanila z relevantnimi zdravstvenimi informacijami, oziroma če je ravnala v nasprotju z navodili izvajalca.
          </p>
        
          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">8. Pritožbe in reševanje sporov</h2>
          <p>
            Pritožbe pošljite na <a href="mailto:mirjana@akilea.si">mirjana@akilea.si</a> ali na naslov AKILEA, Šmarska cesta 5B, 6000 Koper. Odgovorimo v 8 dneh.
          </p>
          <p>
            Podjetje v skladu z 32. členom Zakona o izvensodnem reševanju potrošniških sporov (ZIsRPS) ne priznava nobenega izvajalca izvensodnega reševanja potrošniških sporov kot pristojnega za reševanje potrošniškega spora, ki bi ga potrošnik lahko sprožil v skladu s tem zakonom.
          </p>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">9. Varstvo osebnih podatkov</h2>
          <p>
            Kako ravnamo z osebnimi podatki, ki jih vnesete pri rezervaciji ali povpraševanju, je opisano v{" "}
            <Link href="/pravilnik-o-zasebnosti">pravilniku o zasebnosti</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Pogoji poslovanja | Akilea Center zdravja",
  description: "Splošni pogoji poslovanja in uporabe storitev.",
};

export default function PogojiPoslovanjaPage() {
  return (
    <div className="spa-view active bg-white min-h-screen py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-8">Pogoji poslovanja</h1>
        
        <div className="prose prose-sm md:prose-base max-w-none text-[var(--color-muted)] font-light leading-relaxed">
          <p className="font-bold mb-4">Veljavnost od: Avgust 2026</p>
          
          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">1. Splošne določbe</h2>
          <p>
            Ti splošni pogoji poslovanja urejajo odnose med ponudnikom storitev (Akilea Center zdravja, Mirjana Groznik s.p.) in uporabniki storitev oziroma obiskovalci spletne strani.
          </p>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">2. Rezervacije in odpovedi</h2>
          <p>
            Rezervacije storitev potekajo preko spletnega obrazca, e-pošte ali telefona. Stranka se strinja s ceno in pogoji storitve ob potrditvi rezervacije.
          </p>
          <p>
            Odpoved ali prestavitev termina je možna brezplačno do 24 ur pred dogovorjenim terminom. V primeru prepozne odpovedi ali neudeležbe si pridržujemo pravico do zaračunavanja 50% cene storitve ali odpovedi nadaljnjih rezervacij.
          </p>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">3. Plačila in cene</h2>
          <p>
            Cene storitev so navedene na spletni strani in so informativne narave. Storitve so oproščene DDV (nismo zavezanci). Plačilo je možno z gotovino na lokaciji ali s plačilno kartico preko varnega spletnega sistema (Stripe).
          </p>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">4. Zdravstveno stanje</h2>
          <p>
            Stranka je dolžna pred začetkom izvajanja storitev (masaže, svetovanja) izvajalca opozoriti na morebitne zdravstvene težave, poškodbe ali stanja, ki bi lahko vplivala na potek terapije. Storitve niso nadomestilo za uradno medicinsko zdravljenje.
          </p>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">5. Omejitev odgovornosti</h2>
          <p>
            Ponudnik storitev ne prevzema odgovornosti za morebitne poškodbe ali poslabšanje zdravstvenega stanja, če stranka izvajalca ni predhodno seznanila z relevantnimi zdravstvenimi informacijami, oziroma če je ravnala v nasprotju z navodili izvajalca.
          </p>
        </div>
      </div>
    </div>
  );
}

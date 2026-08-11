import Link from "next/link";

export const metadata = {
  title: "Pravilnik o zasebnosti | Akilea Center zdravja",
  description: "Preberite naš pravilnik o zasebnosti in varovanju osebnih podatkov.",
};

export default function PravilnikZasebnostiPage() {
  return (
    <div className="spa-view active bg-white min-h-screen py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-8">Pravilnik o zasebnosti</h1>
        
        <div className="prose prose-sm md:prose-base max-w-none text-[var(--color-muted)] font-light leading-relaxed">
          <p className="font-bold mb-4">Zadnja posodobitev: Avgust 2026</p>
          
          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">1. Uvod</h2>
          <p>
            V centru zdravja Akilea (v nadaljevanju "mi", "nas" ali "naš") spoštujemo vašo zasebnost in se zavezujemo k varovanju vaših osebnih podatkov. Ta pravilnik pojasnjuje, kako zbiramo, uporabljamo in varujemo vaše podatke, ko obiščete našo spletno stran in uporabljate naše storitve.
          </p>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">2. Zbiranje podatkov</h2>
          <p>
            Osebne podatke zbiramo, ko:
          </p>
          <ul>
            <li>Izpolnite obrazec za posvet ali rezervacijo termina.</li>
            <li>Se prijavite na naše e-novice ali čakalno vrsto.</li>
            <li>Nas kontaktirate preko e-pošte ali telefona.</li>
          </ul>
          <p>
            Podatki, ki jih zbiramo, lahko vključujejo vaše ime, e-poštni naslov in telefonsko številko.
          </p>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">3. Uporaba podatkov</h2>
          <p>
            Vaše podatke uporabljamo za:
          </p>
          <ul>
            <li>Zagotavljanje naših storitev in obdelavo vaših rezervacij.</li>
            <li>Komunikacijo z vami glede vaših terminov ali povpraševanj.</li>
            <li>Obveščanje o novostih (če ste se na to prijavili).</li>
            <li>Izboljšanje naše spletne strani in uporabniške izkušnje.</li>
          </ul>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">4. Varovanje podatkov</h2>
          <p>
            Izvajamo ustrezne varnostne ukrepe za zaščito vaših osebnih podatkov pred nepooblaščenim dostopom, spremembo, razkritjem ali uničenjem. Vaših podatkov ne bomo nikoli prodali, posodili ali delili s tretjimi osebami brez vašega izrecnega soglasja, razen če to zahteva zakon.
          </p>

          <h2 className="text-2xl font-serif text-[var(--color-primary)] mt-8 mb-4">5. Vaše pravice</h2>
          <p>
            Imate pravico do dostopa, popravka ali izbrisa vaših osebnih podatkov. Prav tako lahko kadarkoli prekličete svoje soglasje za obdelavo podatkov. Za uveljavljanje teh pravic nas prosim kontaktirajte na <a href="mailto:mirjana@akilea.si" className="text-[#6a882a] underline hover:text-[var(--color-primary)]">mirjana@akilea.si</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

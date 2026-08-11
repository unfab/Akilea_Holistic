import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white/80 pt-20 pb-10">
      {/* Pre-footer CTA */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Pripravljeni na spremembo?</h2>
          <p className="font-light text-white/70 max-w-lg">
            Naročite se na obravnavo v nekaj sekundah — brez nepotrebnega čakanja in usklajevanja terminov.
          </p>
        </div>
        <Link href="/storitve" className="btn-primary px-8 py-4 text-xs uppercase tracking-widest font-bold whitespace-nowrap shrink-0 hover:bg-white hover:text-[var(--color-primary)] transition-colors">
          Izberi termin na spletu &rarr;
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <hr className="border-white/10" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
        {/* Brand & Description */}
        <div>
          <Link href="/" className="inline-block mb-6">
            <Image
              src="https://static.wixstatic.com/media/dfaf38_813cc971e5e8455085e68fdb596e3ebc~mv2.png/v1/fill/w_240,h_179,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dfaf38_813cc971e5e8455085e68fdb596e3ebc~mv2.png"
              alt="Akilea Logo"
              width={96}
              height={72}
              className="h-14 w-auto object-contain brightness-0 invert opacity-90"
              unoptimized
            />
          </Link>
          <p className="text-sm font-light leading-relaxed max-w-sm">
            Z notranjim mirom do zdravja. Center za celostno podporo telesu in avtorsko intuitivno masažo.
          </p>
        </div>
        
        {/* Contact & Location */}
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-bold mb-6">Kontakt & Lokacija</h4>
          <ul className="space-y-2 text-sm font-light">
            <li>Šmarska cesta 5B</li>
            <li>6000 Koper, Slovenija</li>
            <li className="pt-2">
              <a href="mailto:mirjana@akilea.si" className="border-b border-white/30 hover:border-white transition-colors pb-0.5">
                mirjana@akilea.si
              </a>
            </li>
          </ul>
        </div>
        
        {/* Links */}
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-bold mb-6">Povezave</h4>
          <ul className="space-y-3 text-sm font-light">
            <li><a href="#" className="hover:text-white transition-colors">Facebook Skupnost</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><Link href="/storitve" className="hover:text-white transition-colors">Vse storitve</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-wider font-light text-white/50">
        <div>
          &copy; {new Date().getFullYear()} AKILEA, MIRJANA GROZNIK S.P. VSE PRAVICE PRIDRŽANE.
        </div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Politika zasebnosti</Link>
          <Link href="#" className="hover:text-white transition-colors">Pogoji poslovanja</Link>
        </div>
      </div>
    </footer>
  );
}

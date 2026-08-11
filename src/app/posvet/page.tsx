import Link from "next/link";

export const metadata = {
  title: "Posvet | Akilea Center zdravja",
  description: "Naročite se na uvodni posvet.",
};

export default function PosvetPage() {
  return (
    <div className="spa-view active bg-[var(--color-surface)] min-h-screen py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">Prvi Korak</span>
        <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">Uvodni Posvet</h1>
        
        <div className="bg-white p-8 lg:p-12 rounded-lg mt-12 shadow-sm border border-[var(--color-border)]">
          <p className="text-[var(--color-muted)] font-light leading-relaxed mb-8">
            Niste prepričani, katera obravnava bi bila prava za vas? Naročite se na kratek brezplačen posvet, kjer se bomo pogovorili o vaših izzivih in poiskali najboljšo rešitev za vaše počutje.
          </p>
          
          <div className="flex flex-col gap-4 justify-center items-center">
            <Link href="/storitve" className="btn-primary px-8 py-3 text-xs uppercase tracking-widest font-bold">
              Rezerviraj termin za posvet
            </Link>
            <p className="text-[10px] text-[var(--color-muted)] mt-2">
              Posvet lahko opravimo v živo ali preko telefona.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

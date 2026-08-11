import Link from "next/link";

export default function UspesnoPlacilo() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col items-center justify-center py-20 px-6">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-10 text-center border border-[var(--color-border)]">
        <div className="w-20 h-20 bg-[#f4f8eb] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[#6a882a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="font-serif text-3xl text-[var(--color-primary)] mb-4">Plačilo uspešno!</h1>
        
        <p className="text-[var(--color-muted)] font-light leading-relaxed mb-8">
          Hvala za vaše zaupanje. Vaš termin je potrjen in storitev je uspešno plačana. 
          Na vaš e-poštni naslov smo poslali potrditev z vsemi podrobnostmi.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="btn-primary block w-full py-4 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-md bg-[#6a882a] text-white hover:bg-[#556d22] hover:-translate-y-1"
          >
            Nazaj na domačo stran
          </Link>
          <Link 
            href="/storitve"
            className="block w-full py-4 rounded text-xs font-bold uppercase tracking-widest transition-all border-2 border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]"
          >
            Moje rezervacije
          </Link>
        </div>
      </div>
    </div>
  );
}

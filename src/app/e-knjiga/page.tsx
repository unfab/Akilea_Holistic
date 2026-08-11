export const metadata = {
  title: "E-knjiga | Akilea Center zdravja",
  description: "Zapišite se na čakalno vrsto za brezplačno e-knjigo o intuitivni masaži.",
};

export default function EKnjigaPage() {
  return (
    <div className="spa-view active bg-white min-h-screen py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">Prihaja Kmalu</span>
        <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">Moja prva E-knjiga</h1>
        
        <div className="bg-[var(--color-surface)] p-8 lg:p-12 rounded-lg mt-12 shadow-sm border border-[var(--color-border)]">
          <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-4">Trenutno se piše popolnoma brezplačno</h2>
          <p className="text-[var(--color-muted)] font-light leading-relaxed mb-8 max-w-xl mx-auto">
            V e-knjigi bom z vami delila osnove razumevanja telesnih signalov in tehnike za ohranjanje miru v vsakdanjem življenju. Knjiga bo na voljo brezplačno za vse člane naše skupnosti.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Vaš e-poštni naslov" 
              className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-accent)]"
              required
            />
            <button type="submit" className="btn-primary w-full py-3 text-xs uppercase tracking-widest font-bold">
              Obvesti me ob izzidu
            </button>
          </form>
          <p className="text-[10px] text-[var(--color-muted)] mt-4">
            Vaši podatki so na varnem. S prijavo se strinjate s prejemanjem občasnih e-novic.
          </p>
        </div>
      </div>
    </div>
  );
}

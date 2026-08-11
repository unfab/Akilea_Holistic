"use client";

import { useState } from "react";

export default function PosvetPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", honeypot: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // bot check
    
    setStatus("submitting");
    
    // Simuliramo pošiljanje emaila
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "", honeypot: "" });
    }, 1500);
  };

  return (
    <div className="spa-view active bg-[var(--color-surface)] min-h-screen py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">Prvi Korak</span>
          <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">Uvodni Posvet</h1>
          <p className="text-[var(--color-muted)] font-light leading-relaxed mb-12 max-w-xl mx-auto">
            Niste prepričani, katera obravnava bi bila prava za vas? Pošljite nam sporočilo in dogovorili se bomo za kratek brezplačen posvet.
          </p>
        </div>
        
        <div className="bg-white p-8 lg:p-12 rounded-lg shadow-sm border border-[var(--color-border)]">
          {status === "success" ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-[#f4f8eb] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#6a882a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-4">Sporočilo poslano!</h2>
              <p className="text-[var(--color-muted)] font-light">
                Hvala za povpraševanje. Odgovorili vam bomo v najkrajšem možnem času.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)]"
              >
                Pošlji novo sporočilo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" value={formData.honeypot} onChange={(e) => setFormData({...formData, honeypot: e.target.value})} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">Ime in Priimek</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)] text-[16px]"
                    placeholder="Vaše ime"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">E-pošta</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)] text-[16px]"
                    placeholder="vasa@eposta.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">Telefon</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)] text-[16px]"
                  placeholder="040 123 456 (opcijsko)"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">Vaše sporočilo</label>
                <textarea 
                  required 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)] text-[16px] resize-none"
                  placeholder="Kako vam lahko pomagamo?"
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === "submitting"}
                className="w-full btn-primary py-4 text-xs uppercase tracking-widest font-bold disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Pošiljanje..." : "Pošlji sporočilo"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

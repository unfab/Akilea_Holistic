"use client";

import { useState } from "react";

export default function EKnjigaPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4759ab0c-9911-4ee2-82c9-029bab9ab1b1",
          subject: "Nova prijava na čakalno vrsto za E-knjigo - Akilea Holistic",
          from_name: "Akilea Holistic - Spletna stran",
          Email: email,
        }),
      });
      
      const result = await res.json();
      
      if (result.success) {
        setStatus("success");
        setEmail("");
      } else {
        console.error("Web3Forms error:", result);
        alert("Napaka pri prijavi. Prosimo, poskusite kasneje.");
        setStatus("idle");
      }
    } catch (err) {
      console.error(err);
      alert("Napaka na omrežju. Prosimo, preverite povezavo in poskusite znova.");
      setStatus("idle");
    }
  };

  return (
    <div className="spa-view active bg-white min-h-[100dvh] py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">Prihaja Kmalu</span>
        <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">Moja prva E-knjiga</h1>
        
        <div className="bg-[var(--color-surface)] p-8 lg:p-12 rounded-lg mt-12 shadow-sm border border-[var(--color-border)]">
          {status === "success" ? (
            <div className="text-center py-4 animate-fade-in">
              <div className="w-16 h-16 bg-[#f4f8eb] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#6a882a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-4">Uspešno ste prijavljeni!</h2>
              <p className="text-[var(--color-muted)] font-light leading-relaxed">
                Obvestili vas bomo takoj, ko bo e-knjiga na voljo za popolnoma brezplačen prenos. Hvala za vaše zanimanje.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-4">E-knjiga se piše in bo popolnoma brezplačna!</h2>
              <p className="text-[var(--color-muted)] font-light leading-relaxed mb-8 max-w-xl mx-auto text-[16px]">
                V e-knjigi bom z vami delila osnove razumevanja telesnih signalov in tehnike za ohranjanje miru v vsakdanjem življenju. Prijavite se spodaj in prvi boste obveščeni ob izidu vašega brezplačnega izvoda.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Vaš e-poštni naslov" 
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-accent)] text-[16px]"
                  required
                />
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="btn-primary w-full py-3 text-xs uppercase tracking-widest font-bold disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Prijavljam..." : "Obvesti me ob izzidu"}
                </button>
              </form>
              <p className="text-[10px] text-[var(--color-muted)] mt-4">
                Vaši podatki so na varnem. S prijavo se strinjate z obvestilom o izidu.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

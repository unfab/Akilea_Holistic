"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function EKnjigaPage() {
  const { t } = useLanguage();
  const eb = t.ebookPage;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      setStatus("submitting");
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
        alert(eb.errorMsg);
        setStatus("idle");
      }
    } catch (err) {
      console.error(err);
      alert(eb.networkError);
      setStatus("idle");
    }
  };

  return (
    <div className="spa-view active bg-white min-h-[100dvh] py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">
          {eb.badge}
        </span>
        <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">
          {eb.title}
        </h1>
        
        <div className="bg-[var(--color-surface)] p-8 lg:p-12 rounded-lg mt-12 shadow-sm border border-[var(--color-border)]">
          {status === "success" ? (
            <div className="text-center py-4 animate-fade-in">
              <div className="w-16 h-16 bg-[#f4f8eb] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#6a882a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-4">{eb.successTitle}</h2>
              <p className="text-[var(--color-muted)] font-light leading-relaxed">
                {eb.successDesc}
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-6 text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)]"
              >
                {eb.newSubBtn}
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-serif text-[var(--color-primary)] mb-4">
                {eb.cardTitle}
              </h2>
              <p className="text-[var(--color-muted)] font-light leading-relaxed mb-8 max-w-xl mx-auto text-[15px] sm:text-[16px]">
                {eb.cardDesc}
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={eb.emailPlaceholder} 
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-accent)] text-[16px]"
                  required
                />
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="btn-primary w-full py-3.5 text-xs uppercase tracking-widest font-bold disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all"
                >
                  {status === "submitting" ? eb.submittingBtn : eb.submitBtn}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

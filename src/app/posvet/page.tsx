"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PosvetPage() {
  const { t } = useLanguage();
  const c = t.consultationPage;
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", honeypot: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // bot check
    
    setStatus("submitting");
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4759ab0c-9911-4ee2-82c9-029bab9ab1b1",
          subject: "Novo povpraševanje za posvet - Akilea Holistic",
          from_name: "Akilea Holistic - Spletna stran",
          Ime_Priimek: formData.name,
          Email: formData.email,
          Telefon: formData.phone || "Ni vpisana",
          Sporocilo: formData.message,
        }),
      });
      
      const result = await res.json();
      
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "", honeypot: "" });
      } else {
        console.error("Web3Forms error:", result);
        alert(c.errorMsg);
        setStatus("idle");
      }
    } catch (err) {
      console.error(err);
      alert(c.networkError);
      setStatus("idle");
    }
  };

  return (
    <div className="spa-view active bg-[var(--color-surface)] min-h-screen py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">
            {c.badge}
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">
            {c.title}
          </h1>
          <p className="text-[var(--color-muted)] font-light leading-relaxed mb-12 max-w-xl mx-auto">
            {c.desc}
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
              <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-4">{c.successTitle}</h2>
              <p className="text-[var(--color-muted)] font-light">
                {c.successDesc}
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)]"
              >
                {c.newMsgBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" value={formData.honeypot} onChange={(e) => setFormData({...formData, honeypot: e.target.value})} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">{c.nameLabel}</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)] text-[16px]"
                    placeholder={c.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">{c.emailLabel}</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)] text-[16px]"
                    placeholder={c.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">{c.phoneLabel}</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)] text-[16px]"
                  placeholder={c.phonePlaceholder}
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">{c.messageLabel}</label>
                <textarea 
                  required 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)] text-[16px] resize-none"
                  placeholder={c.messagePlaceholder}
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === "submitting"}
                className="w-full btn-primary py-4 text-xs uppercase tracking-widest font-bold disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? c.submittingBtn : c.submitBtn}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

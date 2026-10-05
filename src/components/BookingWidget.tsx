"use client";

import { useState, useMemo, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { WEB3FORMS_KEY, isOnlinePaymentEnabled } from "@/config/site";
import { toLocalDateString } from "@/lib/date";
import { BOOKING_HORIZON_DAYS, SERVICE_DURATIONS_MIN } from "@/config/booking";
import { freeTimesForDay, serviceDuration } from "@/lib/slots";

const DAY_MS = 24 * 60 * 60 * 1000;

const SLOT_TAKEN_MESSAGE = "Ta termin je zaseden. Prosimo, izberite drug termin.";

type ReserveResult = "ok" | "taken" | "rejected" | "fallback";

export default function BookingWidget() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [pickedDate, setSelectedDate] = useState<string | null>(null);
  const [pickedTime, setSelectedTime] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'lokacija' | 'stripe'>('lokacija');
  
  // Calendar state
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [currentMonthStart, setCurrentMonthStart] = useState<Date>(new Date(today.getFullYear(), today.getMonth(), 1));

  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", honeypot: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = useMemo(() => {
    return t.servicesPage.items.map((svc, idx) => ({
      id: idx + 1,
      name: svc.name,
      desc: `${svc.shortDesc.slice(0, 55)}... (${svc.duration})`,
      price: svc.price,
    }));
  }, [t]);

  // Availability from Google Calendar. null days = unknown (loading or
  // unavailable): Mirjana's open slots are shown without the busy check.
  const monthKey = `${currentMonthStart.getFullYear()}-${String(currentMonthStart.getMonth() + 1).padStart(2, "0")}`;
  const [refreshCount, setRefreshCount] = useState(0);
  const availabilityKey = `${monthKey}|${selectedService ?? ""}|${refreshCount}`;
  const [availability, setAvailability] = useState<{ key: string; days: Record<string, string[]> | null } | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams({ month: monthKey });
    if (selectedService) params.set("service", String(selectedService));
    fetch(`/api/availability?${params}`, { signal: controller.signal, cache: "no-store" })
      .then(async (res) => {
        // Always read the body so the request completes, even on 503.
        const data = (await res.json().catch(() => null)) as { days?: Record<string, string[]> } | null;
        return res.ok && data?.days ? data.days : null;
      })
      .catch(() => null)
      .then((days) => {
        if (!controller.signal.aborted) setAvailability({ key: availabilityKey, days });
      });
    return () => controller.abort();
  }, [availabilityKey, monthKey, selectedService]);

  const freeDays = availability?.key === availabilityKey ? availability.days : null;
  // Without calendar data, apply the open slots and the past/horizon rules
  // locally so the customer only sees times the server accepts.
  const localTimesFor = (dateStr: string): string[] =>
    freeTimesForDay(dateStr, serviceDuration(selectedService ?? 0) ?? Math.min(...SERVICE_DURATIONS_MIN), [], new Date());
  const timesFor = (dateStr: string): readonly string[] => freeDays?.[dateStr] ?? localTimesFor(dateStr);
  const isDayFull = (dateStr: string) => timesFor(dateStr).length === 0;
  const selectedDate = pickedDate && !isDayFull(pickedDate) ? pickedDate : null;
  const availableTimes: readonly string[] = selectedDate ? timesFor(selectedDate) : [];
  const selectedTime = pickedTime && availableTimes.includes(pickedTime) ? pickedTime : null;

  // Calendar generation logic
  const calendarDays = useMemo(() => {
    const year = currentMonthStart.getFullYear();
    const month = currentMonthStart.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // JS getDay() is 0 for Sunday, 1 for Monday. We want Monday to be first (0).
    const firstDay = new Date(year, month, 1).getDay();
    const offset = firstDay === 0 ? 6 : firstDay - 1; 

    const days = [];
    // Padding
    for (let i = 0; i < offset; i++) {
      days.push(null);
    }
    // Days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  }, [currentMonthStart]);

  const handlePrevMonth = () => {
    setCurrentMonthStart(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthStart(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };
  
  const handleDateSelect = (date: Date) => {
    if (date < today) return;
    const dateStr = toLocalDateString(date);
    if (isDayFull(dateStr)) return;
    setSelectedDate(dateStr);
    setSelectedTime(null);
  };

  const reserveSlot = async (serviceId: number): Promise<ReserveResult> => {
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId,
          date: selectedDate,
          time: selectedTime,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          honeypot: formData.honeypot,
        }),
      });
      await res.json().catch(() => null);
      if (res.ok) return "ok";
      if (res.status === 409) return "taken";
      if (res.status === 400 || res.status === 429) return "rejected";
      return "fallback";
    } catch {
      return "fallback";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Spam prevention (bot caught)
    
    if (!selectedService || !selectedDate || !selectedTime) return;

    const svc = services.find(s => s.id === selectedService);
    if (!svc) return;

    setIsSubmitting(true);

    if (paymentMethod === 'stripe') {
      try {
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            serviceId: svc.id,
            serviceName: svc.name,
            price: svc.price,
            date: selectedDate,
            time: selectedTime,
            customerName: formData.name,
            customerEmail: formData.email
          }),
        });
        
        const data = await response.json();
        if (data.url) {
          window.location.assign(data.url); // Redirect to Stripe Checkout
        } else {
          console.error("Stripe error:", data.error);
          alert("Napaka pri povezavi s plačilnim sistemom. Preverite .env ključe.");
          setIsSubmitting(false);
        }
      } catch (err) {
        console.error(err);
        alert("Nekaj je šlo narobe. Poskusite ponovno.");
        setIsSubmitting(false);
      }
    } else {
      // Reserve the slot in Google Calendar first. If the calendar is not
      // reachable the booking still goes out by email (no lost bookings).
      const reservation = await reserveSlot(svc.id);
      if (reservation === "taken") {
        alert(SLOT_TAKEN_MESSAGE);
        setSelectedTime(null);
        setRefreshCount((n) => n + 1);
        setIsSubmitting(false);
        return;
      }
      if (reservation === "rejected") {
        alert("Napaka pri pošiljanju rezervacije. Prosimo, poskusite kasneje.");
        setIsSubmitting(false);
        return;
      }
      const isInCalendar = reservation === "ok";

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `Nova rezervacija: ${svc.name}`,
            from_name: "Akilea Holistic - Sistem rezervacij",
            Ime_Priimek: formData.name,
            Email: formData.email || "Ni vpisan",
            Telefon: formData.phone || "Ni vpisana",
            Storitev: svc.name,
            Cena: `${svc.price}€`,
            Datum: selectedDate,
            Ura: selectedTime,
            Nacin_Placila: "Plačilo na lokaciji",
          }),
        });
        
        const result = await res.json();
        
        // Once the event is in the calendar the booking is recorded, even if the email fails.
        if (result.success || isInCalendar) {
          setIsSubmitting(false);
          setIsSuccess(true);
          // Reset form
          setSelectedService(null);
          setSelectedDate(null);
          setSelectedTime(null);
          setFormData({ name: "", email: "", phone: "", honeypot: "" });
        } else {
          console.error("Web3Forms error:", result);
          alert("Napaka pri pošiljanju rezervacije. Prosimo, poskusite kasneje.");
          setIsSubmitting(false);
        }
      } catch (err) {
        console.error(err);
        if (isInCalendar) {
          setIsSubmitting(false);
          setIsSuccess(true);
          setSelectedService(null);
          setSelectedDate(null);
          setSelectedTime(null);
          setFormData({ name: "", email: "", phone: "", honeypot: "" });
          return;
        }
        alert("Napaka na omrežju. Prosimo, preverite povezavo in poskusite znova.");
        setIsSubmitting(false);
      }
    }
  };

  const isContactValid = formData.name.trim().length > 0 && (formData.email.trim().length > 0 || formData.phone.trim().length > 0);

  if (isSuccess) {
    return (
      <section className="py-20 bg-[var(--color-bg)] border-b border-[var(--color-border)]" id="rezervacija">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-xl shadow-lg border border-[var(--color-border)] p-12">
            <div className="text-5xl mb-6">✨</div>
            <h2 className="text-3xl font-serif text-[var(--color-primary)] mb-4">{t.bookingWidget.successTitle}</h2>
            <p className="text-[var(--color-muted)] font-light mb-8">
              {t.bookingWidget.successDesc}
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="btn-primary px-8 py-3 text-xs uppercase tracking-widest font-bold"
            >
              {t.bookingWidget.bookAnother}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[var(--color-bg)] border-b border-[var(--color-border)]" id="rezervacija">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-[#6a882a] font-semibold mb-4 block">{t.bookingWidget.sectionBadge}</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-4">{t.bookingWidget.sectionTitle}</h2>
          <p className="text-[var(--color-muted)] font-light leading-relaxed max-w-xl mx-auto">
            {t.bookingWidget.sectionDesc}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-[var(--color-border)] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Col: Services */}
            <div className="lg:sticky lg:top-28">
              <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--color-primary)] mb-6">{t.bookingWidget.step1Title}</h3>
              <div className="space-y-4">
                {services.map((svc) => (
                  <div 
                    key={svc.id}
                    onClick={() => setSelectedService(svc.id)}
                    className={`border p-5 rounded cursor-pointer transition-all flex items-start gap-4
                      ${selectedService === svc.id ? 'border-[var(--color-primary)] bg-[var(--color-bg)]' : 'border-[var(--color-border)] hover:border-gray-300'}`}
                  >
                    <div className="mt-1">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center
                        ${selectedService === svc.id ? 'border-[var(--color-primary)]' : 'border-gray-300'}`}>
                        {selectedService === svc.id && <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-serif text-lg text-[var(--color-primary)] leading-tight">{svc.name}</h4>
                        <span className="font-bold text-[var(--color-primary)]">{svc.price}€</span>
                      </div>
                      <p className="text-[12px] text-[var(--color-muted)]">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Calendar */}
            <div className="lg:sticky lg:top-28">
              <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--color-primary)] mb-3">{t.bookingWidget.step2Title}</h3>
              <p className="text-sm text-[var(--color-primary)] leading-relaxed mb-6">{t.bookingWidget.confirmationNote}</p>

              <div className="border border-[var(--color-border)] rounded p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <button type="button" onClick={handlePrevMonth} className="text-[var(--color-muted)] hover:text-[var(--color-primary)] font-bold text-lg px-2">&larr;</button>
                  <span className="text-[11px] font-bold tracking-widest uppercase">
                    {t.bookingWidget.monthNames[currentMonthStart.getMonth()]} {currentMonthStart.getFullYear()}
                  </span>
                  <button type="button" onClick={handleNextMonth} className="text-[var(--color-muted)] hover:text-[var(--color-primary)] font-bold text-lg px-2">&rarr;</button>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center mb-4">
                  {t.bookingWidget.dayNames.map(day => (
                    <div key={day} className="text-[9px] font-bold uppercase tracking-wider text-[var(--color-muted)]">{day}</div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-2 text-center">
                  {calendarDays.map((date, index) => {
                    if (!date) return <div key={`pad-${index}`} className="p-2"></div>;
                    const dateStr = toLocalDateString(date);
                    const isBeyondHorizon = date.getTime() >= today.getTime() + BOOKING_HORIZON_DAYS * DAY_MS;
                    const isPast = date < today || isBeyondHorizon || isDayFull(dateStr);
                    const isSelected = selectedDate === dateStr;
                    return (
                      <button 
                        key={date.toISOString()}
                        type="button"
                        onClick={() => handleDateSelect(date)}
                        disabled={isPast}
                        className={`p-2 text-sm rounded transition-colors
                          ${isPast ? 'text-gray-300 cursor-not-allowed font-light' : 
                            isSelected ? 'bg-[var(--color-primary)] text-white font-bold shadow-md' : 
                            'text-black hover:bg-[var(--color-bg)] font-medium'}`}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedDate && (
                <div className="animate-fade-in mb-8">
                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-muted)] mb-3">{t.bookingWidget.timesTitle}</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {availableTimes.map(time => (
                      <button 
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 text-sm border rounded transition-colors
                          ${selectedTime === time ? 'border-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-primary)] font-bold' : 'border-[var(--color-border)] text-gray-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedDate && selectedTime && (
                <div className="animate-fade-in mt-8 pt-8 border-t border-[var(--color-border)] mb-8">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--color-primary)] mb-4">{t.bookingWidget.step3Title}</h3>
                  
                  {/* Honeypot field (hidden from users, catches bots) */}
                  <input type="text" name="website_url" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" value={formData.honeypot} onChange={(e) => setFormData({...formData, honeypot: e.target.value})} />

                  <div className="mb-4">
                    <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">{t.bookingWidget.nameLabel} <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      required 
                      maxLength={50}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)] text-[16px]"
                      placeholder="Janez Novak"
                    />
                  </div>
                  
                  <p className="text-[11px] text-[var(--color-muted)] mt-6 mb-2">{t.bookingWidget.contactSub} <span className="text-red-500">*</span></p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">{t.bookingWidget.emailLabel}</label>
                      <input 
                        type="email" 
                        maxLength={60}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)] text-[16px]"
                        placeholder="janez@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">{t.bookingWidget.phoneLabel}</label>
                      <input 
                        type="tel" 
                        maxLength={20}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)] text-[16px]"
                        placeholder="040 123 456"
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-[var(--color-muted)] leading-relaxed mt-4">{t.bookingWidget.healthNote}</p>
                </div>
              )}

              <div className="space-y-3">
                <button 
                  type="submit"
                  onClick={() => setPaymentMethod('lokacija')}
                  disabled={!selectedService || !selectedDate || !selectedTime || !isContactValid || isSubmitting}
                  className={`w-full py-4 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-sm border-2
                    ${(!selectedService || !selectedDate || !selectedTime || !isContactValid) ? 
                      'bg-transparent border-gray-200 text-gray-300 cursor-not-allowed opacity-50 shadow-none' : 
                      'bg-transparent border-[#6a882a] text-[#6a882a] hover:bg-[#6a882a] hover:text-white'}`}
                >
                  {isSubmitting && paymentMethod === 'lokacija' ? t.bookingWidget.waitingText : t.bookingWidget.payAtLocationBtn}
                </button>

                {isOnlinePaymentEnabled() && (
                <button 
                  type="submit"
                  onClick={() => setPaymentMethod('stripe')}
                  disabled={!selectedService || !selectedDate || !selectedTime || !isContactValid || isSubmitting}
                  className={`w-full py-4 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-md
                    ${(!selectedService || !selectedDate || !selectedTime || !isContactValid) ? 
                      'bg-[#F5EFF7] text-[#B392BE] cursor-not-allowed opacity-50 shadow-none' : 
                      'bg-[#6a882a] text-white hover:bg-[#556d22] hover:shadow-lg hover:-translate-y-1'}`}
                >
                  {isSubmitting && paymentMethod === 'stripe' ? t.bookingWidget.redirectingText : t.bookingWidget.payWithCardBtn}
                </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

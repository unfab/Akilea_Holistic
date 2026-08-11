"use client";

import { useState, useMemo } from "react";

export default function BookingWidget() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'lokacija' | 'stripe'>('lokacija');
  
  // Calendar state
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [currentMonthStart, setCurrentMonthStart] = useState<Date>(new Date(today.getFullYear(), today.getMonth(), 1));

  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", honeypot: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    { id: 1, name: "Intuitivna masaža telesa", desc: "Celostna obravnava (105 min)", price: 85 },
    { id: 2, name: "Intuitivna masaža hrbta", desc: "Fokusirana obravnava (60 min)", price: 50 },
    { id: 3, name: "Intuitivna masaža trebuha", desc: "Sproščanje čustvenega centra (45 min)", price: 50 },
  ];

  const availableTimes = ['09:00', '11:00', '13:30', '16:00', '18:00'];

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

  const monthNames = ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"];
  
  const handleDateSelect = (date: Date) => {
    if (date < today) return;
    const dateStr = date.toISOString().split('T')[0];
    setSelectedDate(dateStr);
    setSelectedTime(null);
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
          window.location.href = data.url; // Redirect to Stripe Checkout
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
      // Simulate API call for local payment
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset form
        setSelectedService(null);
        setSelectedDate(null);
        setSelectedTime(null);
        setFormData({ name: "", email: "", phone: "", honeypot: "" });
      }, 1500);
    }
  };

  const isContactValid = formData.name.trim().length > 0 && (formData.email.trim().length > 0 || formData.phone.trim().length > 0);
  const selectedSvcDetails = services.find(s => s.id === selectedService);

  if (isSuccess) {
    return (
      <section className="py-20 bg-[var(--color-bg)] border-b border-[var(--color-border)]" id="rezervacija">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-xl shadow-lg border border-[var(--color-border)] p-12">
            <div className="text-5xl mb-6">✨</div>
            <h2 className="text-3xl font-serif text-[var(--color-primary)] mb-4">Hvala za povpraševanje!</h2>
            <p className="text-[var(--color-muted)] font-light mb-8">
              Vaš termin smo uspešno zabeležili. Kmalu boste prejeli potrditveno e-poštno sporočilo.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="btn-primary px-8 py-3 text-xs uppercase tracking-widest font-bold"
            >
              Nova rezervacija
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
          <span className="text-[10px] uppercase tracking-widest text-[#6a882a] font-semibold mb-4 block">Spletna rezervacija</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-4">Pripravljeni na sprostitev?</h2>
          <p className="text-[var(--color-muted)] font-light leading-relaxed max-w-xl mx-auto">
            Izberite želeno obravnavo in termin v realnem času. Brez čakanja na potrditev in brez telefonskih klicev.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-[var(--color-border)] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Col: Services */}
            <div className="lg:sticky lg:top-28">
              <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--color-primary)] mb-6">1. Izberite storitev</h3>
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
              <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--color-primary)] mb-6">2. Izberite termin</h3>
              
              <div className="border border-[var(--color-border)] rounded p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <button type="button" onClick={handlePrevMonth} className="text-[var(--color-muted)] hover:text-[var(--color-primary)] font-bold text-lg px-2">&larr;</button>
                  <span className="text-[11px] font-bold tracking-widest uppercase">
                    {monthNames[currentMonthStart.getMonth()]} {currentMonthStart.getFullYear()}
                  </span>
                  <button type="button" onClick={handleNextMonth} className="text-[var(--color-muted)] hover:text-[var(--color-primary)] font-bold text-lg px-2">&rarr;</button>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center mb-4">
                  {['po', 'to', 'sr', 'če', 'pe', 'so', 'ne'].map(day => (
                    <div key={day} className="text-[9px] font-bold uppercase tracking-wider text-[var(--color-muted)]">{day}</div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-2 text-center">
                  {calendarDays.map((date, index) => {
                    if (!date) return <div key={`pad-${index}`} className="p-2"></div>;
                    const isPast = date < today;
                    const isSelected = selectedDate === date.toISOString().split('T')[0];
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
                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-muted)] mb-3">Ure za izbrani datum:</h4>
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
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--color-primary)] mb-4">3. Vaši podatki</h3>
                  
                  {/* Honeypot field (hidden from users, catches bots) */}
                  <input type="text" name="website_url" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" value={formData.honeypot} onChange={(e) => setFormData({...formData, honeypot: e.target.value})} />

                  <div className="mb-4">
                    <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">Ime in Priimek <span className="text-red-500">*</span></label>
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
                  
                  <p className="text-[11px] text-[var(--color-muted)] mt-6 mb-2">Vnesite e-pošto in/ali telefonsko številko <span className="text-red-500">*</span></p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">E-pošta</label>
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
                      <label className="block text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] mb-2">Telefon</label>
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
                  {isSubmitting && paymentMethod === 'lokacija' ? 'Prosim počakajte...' : 'Rezerviraj (Plačilo na lokaciji)'}
                </button>

                <button 
                  type="submit"
                  onClick={() => setPaymentMethod('stripe')}
                  disabled={!selectedService || !selectedDate || !selectedTime || !isContactValid || isSubmitting}
                  className={`w-full py-4 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-md
                    ${(!selectedService || !selectedDate || !selectedTime || !isContactValid) ? 
                      'bg-[#F5EFF7] text-[#B392BE] cursor-not-allowed opacity-50 shadow-none' : 
                      'bg-[#6a882a] text-white hover:bg-[#556d22] hover:shadow-lg hover:-translate-y-1'}`}
                >
                  {isSubmitting && paymentMethod === 'stripe' ? 'Preusmerjanje...' : 'Plačaj zdaj s kartico (Stripe)'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

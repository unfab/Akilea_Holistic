"use client";

import { useState } from "react";

export default function BookingWidget() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(3); // 3rd of August

  const services = [
    { id: 1, name: "Intuitivna masaža telesa", desc: "Celostna obravnava (105 min)" },
    { id: 2, name: "Intuitivna masaža hrbta", desc: "Fokusirana obravnava (60 min)" },
    { id: 3, name: "Intuitivna masaža trebuha", desc: "Sproščanje čustvenega centra (45 min)" },
  ];

  return (
    <section className="py-20 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-[#6a882a] font-semibold mb-4 block">Spletna rezervacija</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-4">Pripravljeni na sprostitev?</h2>
          <p className="text-[var(--color-muted)] font-light leading-relaxed max-w-xl mx-auto">
            Izberite želeno obravnavo in termin v realnem času. Brez čakanja na potrditev in brez telefonskih klicev.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-[var(--color-border)] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Col: Services */}
            <div>
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
                    <div>
                      <h4 className="font-serif text-lg text-[var(--color-primary)] leading-tight mb-1">{svc.name}</h4>
                      <p className="text-[12px] text-[var(--color-muted)]">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Calendar */}
            <div>
              <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--color-primary)] mb-6">2. Izberite termin</h3>
              
              <div className="border border-[var(--color-border)] rounded p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <button className="text-[var(--color-muted)] hover:text-black">&larr;</button>
                  <span className="text-[11px] font-bold tracking-widest uppercase">Avgust 2026</span>
                  <button className="text-[var(--color-muted)] hover:text-black">&rarr;</button>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center mb-4">
                  {['po', 'to', 'sr', 'če', 'pe', 'so', 'ne'].map(day => (
                    <div key={day} className="text-[9px] font-bold uppercase tracking-wider text-[var(--color-muted)]">{day}</div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-2 text-center">
                  {[27, 28, 29, 30, 31, 1, 2].map(day => (
                    <div key={`prev-${day}`} className="p-2 text-sm text-[var(--color-border)] font-light">{day}</div>
                  ))}
                  {[3, 4].map(day => (
                    <button 
                      key={`curr-${day}`}
                      onClick={() => setSelectedDate(day)}
                      className={`p-2 text-sm rounded ${selectedDate === day ? 'bg-[var(--color-bg)] font-bold text-black' : 'font-bold text-black hover:bg-gray-50'}`}
                    >
                      {day}
                    </button>
                  ))}
                  {[5, 6, 7, 8, 9].map(day => (
                    <div key={`next-${day}`} className="p-2 text-sm text-gray-300 font-light">{day}</div>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div className="animate-fade-in">
                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-muted)] mb-3">Ure za izbrani datum:</h4>
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {['09:00', '13:30', '16:00'].map(time => (
                      <button 
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 text-sm border rounded transition-colors
                          ${selectedTime === time ? 'border-[var(--color-primary)] text-[var(--color-primary)] font-bold' : 'border-[var(--color-border)] text-gray-600 hover:border-gray-400'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button 
                className={`w-full py-4 rounded text-xs font-bold uppercase tracking-widest transition-colors
                  ${selectedService && selectedDate && selectedTime ? 'bg-[#D5C6D9] text-[var(--color-primary)] hover:bg-[#c9b7ce]' : 'bg-[#F5EFF7] text-[#B392BE] cursor-not-allowed'}`}
                disabled={!selectedService || !selectedTime}
              >
                Potrdi in rezerviraj
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

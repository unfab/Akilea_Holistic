'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] bg-[var(--color-bg)] flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 className="text-3xl font-serif text-[var(--color-primary)] mb-4">Prišlo je do napake</h2>
      <p className="text-[var(--color-muted)] font-light leading-relaxed max-w-md mb-8">
        Opravičujemo se za nevšečnosti. Sistem je naletel na nepričakovano napako.
      </p>
      <button
        onClick={() => reset()}
        className="btn-primary px-8 py-3 text-xs uppercase tracking-widest font-bold inline-block"
      >
        Poskusite ponovno
      </button>
    </div>
  );
}

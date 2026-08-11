import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[var(--color-bg)] flex flex-col items-center justify-center py-20 px-6 text-center">
      <h1 className="font-serif text-6xl text-[var(--color-primary)] mb-4">404</h1>
      <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-6">Strani ni mogoče najti</h2>
      <p className="text-[var(--color-muted)] font-light leading-relaxed max-w-md mb-8">
        Zdi se, da stran, ki jo iščete, ne obstaja ali pa je bila premaknjena. 
        Vrnite se na domačo stran in poskusite ponovno.
      </p>
      <Link 
        href="/"
        className="btn-primary px-8 py-3 text-xs uppercase tracking-widest font-bold inline-block"
      >
        Nazaj domov
      </Link>
    </div>
  );
}

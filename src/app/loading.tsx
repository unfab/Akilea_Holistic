export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center bg-[var(--color-bg)]">
      <div className="w-12 h-12 border-4 border-[var(--color-border)] border-t-[var(--color-primary)] rounded-full animate-spin mb-4"></div>
      <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-muted)] animate-pulse">Nalaganje...</p>
    </div>
  );
}

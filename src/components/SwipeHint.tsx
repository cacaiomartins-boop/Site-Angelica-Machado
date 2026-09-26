export default function SwipeHint({ light = false }: { light?: boolean }) {
  return (
    <p className={`mt-1 text-center text-[11px] tracking-wide md:hidden ${light ? "text-white/60" : "text-teal-text/70"}`}>
      ← deslize para o lado →
    </p>
  );
}

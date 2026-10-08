// Logo da profissional (apenas o desenho), sobre círculo branco para contrastar com o cabeçalho verde.
export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span className={`flex items-center justify-center rounded-full bg-white p-[2px] ${className}`}>
      <img src="/img/logo.webp" alt="Logo Angélica Thiengo" width={96} height={96} className="h-full w-full object-contain" decoding="async" />
    </span>
  );
}

// Logo da profissional (apenas o desenho), sobre círculo branco para contrastar com o cabeçalho verde.
export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span className={`flex items-center justify-center rounded-full bg-white p-[2px] ${className}`}>
      <img src="/img/logo.png" alt="Logo Angélica Thiengo" width={360} height={360} className="h-full w-full object-contain" decoding="async" />
    </span>
  );
}

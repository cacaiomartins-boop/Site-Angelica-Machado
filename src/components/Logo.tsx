// Logo simples: perfil de cabeça (mente) com o Ψ (psi), símbolo da psicanálise.
export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Logo Angélica Thiengo">
      <circle cx="32" cy="32" r="32" fill="#fff" />
      <path d="M20 53C20 47 14 43 14 32C14 19 23 10 34 10C44 10 51 17 51 26C51 28 52 30 54.5 33.5L51 35.5C52 37.5 51 39 49 39.5C49 42 48 44 45 45L45 48C41 49 40 51 40 53Z" fill="#376a58" />
      <path d="M32.5 17.5V38" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" fill="none"/>
  <path d="M25 18.5V26C25 32.5 40 32.5 40 26V18.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

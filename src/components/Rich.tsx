// Converte **trecho** em destaque colorido. Ex.: "Olá, sou **Angélica**"
export default function Rich({ text, className = "hl" }: { text: string; className?: string }) {
  return (
    <>
      {text.split("**").map((t, i) => (i % 2 ? <span key={i} className={className}>{t}</span> : t))}
    </>
  );
}

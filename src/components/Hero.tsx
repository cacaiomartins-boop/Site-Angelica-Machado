import { clinic, heroBadges, infoCard, waLink } from "../data/clinic";
import { WhatsAppIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#629a7f] pt-11 md:min-h-[640px] md:pt-14">
      <img src={clinic.images.office} alt="" className="kenburns absolute inset-0 h-full w-full object-cover opacity-60" fetchPriority="high" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#376f58]/70 via-[#3b7660]/52 to-[#376f58]/75" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-[#2f6553]/50 via-transparent to-transparent md:block" />
      <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-12 px-5 py-12 md:grid-cols-[1.3fr_0.7fr] md:px-8 md:py-20">
        <aside className="hero-in-right hidden md:order-2 rounded-3xl bg-[#346c55]/60 p-7 shadow-2xl shadow-black/25 ring-1 ring-white/30 backdrop-blur-lg md:block">
          <div className="flex items-center gap-4 border-b border-white/15 pb-5">
            <span className="font-serif text-5xl text-[#f7e8cc]">{infoCard.rating}</span>
            <div>
              <p className="text-lg tracking-widest text-amber-300">★★★★★</p>
              <p className="mt-0.5 text-[11px] text-[#ebf6ef]">{infoCard.reviews}</p>
            </div>
          </div>
          <dl className="mt-5 space-y-4">
            {infoCard.rows.map((r) => (
              <div key={r.label}>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f0d9b5]">{r.label}</dt>
                <dd className="mt-0.5 text-sm text-white">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 border-t border-white/15 pt-4 text-[11px] text-[#ebf6ef]">{clinic.registry} · Desde 2021</p>
        </aside>

        <div className="text-center md:order-1 md:text-left">
          <div style={{"--hd":"0.1s"} as React.CSSProperties} className="hero-in mb-6 flex flex-wrap justify-center gap-2 md:hidden">
            {heroBadges.map((b, i) => (
              <span key={b} className="rounded-full bg-[#346c55]/55 px-3 py-1 text-[11px] font-medium text-[#f7e8cc] ring-1 ring-[#f0d9b5]/50 backdrop-blur-sm">
                {i === 0 && <span className="mr-1 text-amber-300">★</span>}{b}
              </span>
            ))}
          </div>
          <h1 style={{"--hd":"0.2s"} as React.CSSProperties} className="hero-in font-serif text-[34px] leading-[1.15] text-white [text-shadow:0_2px_18px_rgba(10,35,42,0.55)] md:text-[50px]">
            O que você sente quando tudo <span className="text-wine">silencia?</span>
            <span className="mt-2 block text-[#dcf1e6]">
              Encontre <span className="text-wine">acolhimento</span> e <span className="text-wine">escuta</span> para reconstruir sua <em className="text-wine">paz interior.</em>
            </span>
          </h1>
          <p style={{"--hd":"0.4s"} as React.CSSProperties} className="hero-in mx-auto mt-6 max-w-lg text-[15px] font-medium leading-relaxed text-white [text-shadow:0_1px_10px_rgba(10,35,42,0.6)] md:mx-0 md:text-base">
            A psicanálise e a escuta clínica oferecem um caminho seguro para desatar os nós da <span className="font-semibold text-wine">ansiedade</span>, do <span className="font-semibold text-wine">luto</span> e das repetições emocionais inconscientes.
          </p>
          <a href={waLink()} target="_blank" rel="noreferrer" style={{"--hd":"0.55s"} as React.CSSProperties} className="hero-in btn-wine mt-8 w-full justify-center !py-4 text-base sm:w-auto md:!py-3 md:text-sm"><WhatsAppIcon /> Vamos conversar?</a>
          <p style={{"--hd":"0.7s"} as React.CSSProperties} className="hero-in mt-4 text-xs font-medium text-[#f7e8cc] [text-shadow:0_1px_8px_rgba(10,35,42,0.6)]">Atendimento presencial em Niterói (Itaipu) e online para todo o Brasil e exterior</p>
        </div>
      </div>
    </section>
  );
}

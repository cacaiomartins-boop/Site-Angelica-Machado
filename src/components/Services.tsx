import { clinic, included, services, waLink } from "../data/clinic";
import { Icon } from "./Icons";

export default function Services() {
  return (
    <section id="servicos" className="bg-teal py-12 md:py-24">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="text-center" data-reveal>
          <p className="eyebrow text-white/85">Serviços</p>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl [text-shadow:0_1px_8px_rgba(24,55,44,0.35)] leading-tight">Como posso te <span className="hl">ajudar</span></h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/95">Formatos de atendimento pensados para o seu momento de vida, com <span className="hl">escuta atenta</span> e livre de julgamentos.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((s, idx) => (
            <div key={s.title} data-reveal className={`lift flex flex-col rounded-3xl bg-cream-card p-7 ${services.length % 2 === 1 && idx === services.length - 1 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.625rem)]" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-[22px] leading-snug text-teal-ink">{s.title}</h3>
                <div className="shrink-0 text-right">
                  <p className="text-lg font-semibold text-teal-text">{s.price}</p>
                  <p className="text-[10px] text-teal-ink/60">{s.priceNote}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-[13.5px] leading-[1.75] text-teal-text">{s.text}</p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {s.unit && <span className="rounded-full bg-teal-mist px-3 py-1 text-[11px] text-teal-ink">{s.unit}</span>}
                <span className="rounded-full bg-teal-mist px-3 py-1 text-[11px] text-teal-ink">{s.mode}</span>
              </div>
              {s.packageNote && <p className="mt-2 text-[11px] font-medium text-wine">{s.packageNote}</p>}
            </div>
          ))}
        </div>
        <div data-reveal className="mt-10 rounded-3xl bg-teal-mist p-8 text-center">
          <h3 className="font-serif text-2xl text-teal-ink">O que está incluído no seu atendimento</h3>
          <div className="mt-6 grid gap-4 text-left md:mt-8 md:grid-cols-3 md:gap-8">
            {included.map((i) => (
              <div key={i.title} data-reveal className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-teal"><Icon name={i.icon} /></span>
                <div>
                  <h4 className="text-sm font-semibold text-teal-ink">{i.title}</h4>
                  <p className="mt-1 max-w-[260px] text-xs leading-relaxed text-teal-text md:mx-auto">{i.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div data-reveal="zoom" className="mt-10 text-center">
          <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wine justify-center">Quero começar</a>
            <a href={clinic.doctoraliaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-mist px-6 py-3 text-sm font-medium text-teal-ink ring-1 ring-teal/20 transition hover:bg-teal/15">Agendar horário</a>
          </div>
          <p className="mt-4 text-xs text-white/90">Primeira conversa sem compromisso via WhatsApp</p>
        </div>
      </div>
    </section>
  );
}

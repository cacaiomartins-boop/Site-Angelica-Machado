import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, CalendarCheck, GraduationCap, Moon, Network, Search, X } from "lucide-react";
import { about, approach, clinic, credentials, pageStats, waLink } from "../data/clinic";
import { Link } from "../lib/router";
import Rich from "../components/Rich";
import { WhatsAppIcon } from "../components/Icons";

type Credential = (typeof credentials)[number];

/** Duas lentes que se encontram em "Você" (ilustração em SVG, usa as cores do site). */
function Venn() {
  return (
    <div data-reveal="zoom" className="mx-auto w-full max-w-[420px]">
      <svg viewBox="0 0 420 300" role="img" aria-label="Duas lentes, a análise Junguiana e a abordagem sistêmica familiar, que se encontram em você" className="h-auto w-full drop-shadow-xl">
        <defs>
          <clipPath id="lensA"><circle cx="150" cy="150" r="112" /></clipPath>
        </defs>
        <circle cx="150" cy="150" r="112" fill="rgb(var(--teal))" />
        <circle cx="270" cy="150" r="112" fill="rgb(var(--sienna))" fillOpacity="0.92" />
        <circle cx="270" cy="150" r="112" fill="#fcf9f4" clipPath="url(#lensA)" />
        <g fill="#fff" textAnchor="middle">
          <text x="92" y="138" fontSize="18" className="font-serif">Mente</text>
          <text x="92" y="160" fontSize="18" className="font-serif">profunda</text>
          <text x="92" y="182" fontSize="11" opacity="0.9">Olhar Junguiano</text>
          <text x="328" y="138" fontSize="18" className="font-serif">Raízes e</text>
          <text x="328" y="160" fontSize="18" className="font-serif">contexto</text>
          <text x="328" y="182" fontSize="11" opacity="0.95">Olhar sistêmico</text>
        </g>
        <g textAnchor="middle" fill="rgb(var(--teal-ink))">
          <text x="210" y="152" fontSize="26" className="font-serif">Você</text>
          <text x="210" y="172" fontSize="11">individuação</text>
        </g>
      </svg>
    </div>
  );
}

function Lightbox({ item, onClose }: { item: Credential; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);
  return (
    <div role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <figure onClick={(e) => e.stopPropagation()} className="relative max-w-[min(980px,100%)]">
        <img src={item.image} alt={`Certificado: ${item.title}`} className="max-h-[78vh] w-auto max-w-full rounded-lg bg-white object-contain shadow-2xl" />
        <figcaption className="mt-3 text-center text-sm text-white/90">{item.title} · {item.org}</figcaption>
        <button type="button" onClick={onClose} aria-label="Fechar" className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-teal-ink shadow-lg transition hover:scale-105">
          <X className="h-4 w-4" />
        </button>
      </figure>
    </div>
  );
}

export default function Formacao() {
  const [open, setOpen] = useState<Credential | null>(null);
  const [lensA, lensB] = approach.lenses;
  const lenses = [
    { ...lensA, Icon: Moon, tone: "bg-teal" },
    { ...lensB, Icon: Network, tone: "bg-wine" },
  ];

  return (
    <main>
      {/* 1. Apresentação */}
      <section className="relative overflow-hidden bg-teal pb-14 pt-24 md:pb-20 md:pt-32">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 md:grid-cols-[0.8fr_1.4fr] md:gap-14">
          <div data-reveal="left" className="relative mx-auto w-full max-w-[290px] md:max-w-[350px]">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[28px] border border-[#f0d9b5]/60" />
            <div className="relative overflow-hidden rounded-[28px] shadow-2xl shadow-black/30 ring-1 ring-white/40">
              <img src={clinic.images.heroHd} alt={clinic.name} width={650} height={812} fetchPriority="high" decoding="async" className="aspect-[4/5] w-full object-cover object-top" />
            </div>
          </div>
          <div data-reveal="right" className="text-center md:text-left">
            <p className="eyebrow text-white/85">Trajetória e formação</p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-white md:text-5xl [text-shadow:0_1px_8px_rgba(24,55,44,0.35)]">{clinic.name}</h1>
            <p className="mt-3 text-[15px] font-medium text-[#f7e8cc]">Psicanalista · Niterói (Itaipu) e online</p>
            <p className="mt-5 text-[15px] font-medium leading-relaxed text-white [text-shadow:0_1px_8px_rgba(24,55,44,0.35)]"><Rich text={about.lead} /></p>
            <p className="mt-4 text-[13.5px] leading-[1.75] text-white/95 [text-shadow:0_1px_8px_rgba(24,55,44,0.35)]"><Rich text={about.paragraphs[1]} /></p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:justify-start">
              <a href={clinic.doctoraliaUrl} target="_blank" rel="noreferrer" className="btn-wine justify-center"><CalendarCheck className="h-4 w-4" /> Agendar horário</a>
              <a href="#abordagem" className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white/95 ring-1 ring-white/35 transition hover:bg-white/10">
                Minha abordagem <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-2 gap-3 px-5 md:mt-16 md:grid-cols-4 md:gap-4">
          {pageStats.map((s) => (
            <div key={s.label} data-reveal className="rounded-2xl bg-white/10 p-4 text-center ring-1 ring-white/25 backdrop-blur-sm">
              <p className="font-serif text-3xl leading-none text-[#f7e8cc] md:text-4xl">{s.value}</p>
              <p className="mt-2 text-[11px] leading-snug text-white/90 md:text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Abordagem clínica */}
      <section id="abordagem" className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-[1100px] px-5">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-wine">{approach.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-teal-ink md:text-4xl">{approach.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-teal-text"><Rich text={approach.intro} className="font-semibold text-wine" /></p>
          </div>
          <div className="mt-10 grid items-center gap-8 md:mt-14 md:grid-cols-[1fr_1.05fr] md:gap-14">
            <Venn />
            <div className="space-y-4">
              {lenses.map(({ Icon, tone, ...l }) => (
                <div key={l.name} data-reveal className="lift rounded-2xl bg-cream p-5 ring-1 ring-teal/10 md:p-6">
                  <div className="flex items-start gap-4">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ${tone}`}><Icon className="h-5 w-5" strokeWidth={1.6} /></span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-wine">{l.kicker}</p>
                      <h3 className="mt-1 font-serif text-[22px] leading-snug text-teal-ink">{l.name}</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-[1.75] text-teal-text">{l.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {l.chips.map((c) => <span key={c} className="rounded-full bg-white px-3 py-1 text-[11px] text-teal-ink ring-1 ring-teal/15">{c}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <figure data-reveal className="mx-auto mt-12 max-w-3xl rounded-3xl bg-teal-mist px-6 py-8 text-center md:mt-16 md:px-12 md:py-10">
            <blockquote className="font-serif text-[21px] leading-relaxed text-teal-ink md:text-[26px]"><Rich text={approach.closing} className="text-wine" /></blockquote>
          </figure>
        </div>
      </section>

      {/* 3. Formação e certificados */}
      <section id="formacao" className="bg-cream py-14 md:py-24">
        <div className="mx-auto max-w-[900px] px-5">
          <div data-reveal className="text-center">
            <p className="eyebrow text-wine">Formação</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-teal-ink md:text-4xl">Formação e certificados</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-teal-text">Cada etapa abaixo sustenta o cuidado que ofereço no consultório. Toque em um certificado para ampliar.</p>
          </div>
          <ol className="relative mt-10 space-y-5 md:mt-14">
            <span className="absolute bottom-6 left-5 top-6 hidden w-px bg-gradient-to-b from-wine/50 via-teal/30 to-transparent sm:block" aria-hidden="true" />
            {credentials.map((c) => (
              <li key={c.id} data-reveal className="relative sm:pl-16">
                <span className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full bg-teal text-white shadow-md ring-4 ring-cream sm:flex"><GraduationCap className="h-5 w-5" strokeWidth={1.6} /></span>
                <article className="lift flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-teal/10 sm:flex-row sm:items-center md:p-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-teal-mist px-3 py-1 text-[11px] font-medium text-teal-ink">{c.period}</span>
                      {c.hours && <span className="rounded-full bg-wine px-3 py-1 text-[11px] font-semibold text-white">{c.hours}</span>}
                    </div>
                    <h3 className="mt-3 font-serif text-[22px] leading-snug text-teal-ink">{c.title}</h3>
                    <p className="mt-1 text-[13px] font-medium text-wine">{c.org}</p>
                    <p className="mt-2 text-[13px] leading-[1.7] text-teal-text">{c.detail}</p>
                  </div>
                  {c.image && (
                    <button type="button" onClick={() => setOpen(c)} aria-label={`Ver certificado: ${c.title}`} className="group relative block shrink-0 overflow-hidden rounded-xl ring-1 ring-teal/20 sm:w-[190px]">
                      <img src={c.image} alt="" loading="lazy" decoding="async" className="h-36 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 sm:h-28" />
                      <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-teal-deep/75 via-transparent to-transparent pb-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium text-teal-ink shadow"><Search className="h-3 w-3" /> Ver certificado</span>
                      </span>
                    </button>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Chamada final */}
      <section className="bg-teal py-14 md:py-20">
        <div data-reveal className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="font-serif text-3xl leading-tight text-white md:text-4xl [text-shadow:0_1px_8px_rgba(24,55,44,0.35)]">Vamos <span className="hl">conversar</span>?</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/95">A primeira conversa é sem compromisso. Escolha o caminho mais confortável para você.</p>
          <div className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center sm:gap-3">
            <a href={clinic.doctoraliaUrl} target="_blank" rel="noreferrer" className="btn-wine justify-center"><CalendarCheck className="h-4 w-4" /> Agendar horário</a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/35 transition hover:bg-white/25"><WhatsAppIcon /> Falar no WhatsApp</a>
          </div>
          <Link to="/" className="mt-7 inline-flex items-center gap-2 text-sm text-white/90 underline-offset-4 hover:underline"><ArrowLeft className="h-4 w-4" /> Voltar ao início</Link>
        </div>
      </section>

      {open && <Lightbox item={open} onClose={() => setOpen(null)} />}
    </main>
  );
}

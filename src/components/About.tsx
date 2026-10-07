import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "../lib/router";
import Rich from "./Rich";
import { about, clinic } from "../data/clinic";


export default function About() {
  return (
    <section id="sobre" className="bg-teal py-12 md:py-20">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 md:grid-cols-[0.8fr_1.4fr] md:gap-14">
        <div data-reveal="left" className="relative mx-auto hidden w-full max-w-[350px] md:block">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[28px] border border-[#f0d9b5]/60" />
          <Link to="/formacao" aria-label="Conhecer a trajetória e formação de Angélica" className="group relative block overflow-hidden rounded-[28px] shadow-2xl shadow-black/30 ring-1 ring-white/40">
            <img src={clinic.images.heroHd} alt={clinic.name} className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" decoding="async" width={650} height={812} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2c6a55]/90 via-[#2c6a55]/50 to-transparent px-5 pb-5 pt-16">
              <p className="font-serif text-xl leading-tight text-white">{clinic.name}</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#f0d9b5]">Psicanalista · {clinic.registry}</p>
            </div>
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-medium text-teal-ink shadow transition group-hover:bg-white">
              Conhecer minha trajetória <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
        <Link to="/formacao" aria-label="Conhecer a trajetória e formação de Angélica" data-reveal="zoom" className="relative mx-auto block w-full max-w-[300px] md:hidden">
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-full bg-[#f0d9b5]/40" />
          <img src={clinic.images.hero} alt={clinic.name} loading="lazy" decoding="async" width={600} height={600} className="relative aspect-square w-full rounded-full border-[6px] border-white object-cover object-top shadow-2xl shadow-black/25" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-center shadow-lg">
            <p className="font-serif text-[15px] leading-none text-teal-ink">{clinic.name}</p>
            <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.14em] text-wine">Psicanalista · {clinic.registry}</p>
          </div>
        </Link>
        <div data-reveal="right" className="mt-4 text-center md:mt-0 md:text-left">
          <p className="eyebrow text-white/85">Sobre a profissional</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-white md:text-4xl [text-shadow:0_1px_8px_rgba(24,55,44,0.35)]"><Rich text={about.title} /></h2>
          <p className="mt-5 text-[15px] font-medium leading-relaxed text-white [text-shadow:0_1px_8px_rgba(24,55,44,0.35)]"><Rich text={about.lead} /></p>
          {about.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-[13.5px] leading-[1.75] text-white/95 [text-shadow:0_1px_8px_rgba(24,55,44,0.35)]"><Rich text={p} /></p>
          ))}
          <div className="mt-6 rounded-3xl bg-white/95 p-6 text-left">
            <p className="eyebrow text-teal-ink">Formação acadêmica e clínica</p>
            <ul className="mt-3 space-y-1.5">
              {about.training.map((t) => (
                <li key={t} className="flex gap-2 text-xs text-teal-ink/85"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-wine" />{t}</li>
              ))}
            </ul>
          </div>
          <Link to="/formacao" className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-teal-ink shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:shadow-xl">
            Ver formação completa e certificados <ArrowRight className="h-4 w-4 text-wine transition-transform group-hover:translate-x-1" />
          </Link>
          <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
            {about.tags.map((t) => <span key={t} className="rounded-full bg-white/70 px-3 py-1 text-[11px] text-teal-ink ring-1 ring-teal-ink/15">{t}</span>)}
          </div>
        </div>
      </div>
      <figure data-reveal className="mx-auto mt-14 max-w-[720px] px-5 text-center">
        <blockquote className="font-serif text-xl leading-relaxed text-white md:text-2xl [text-shadow:0_1px_8px_rgba(24,55,44,0.35)]">“<Rich text={about.quote} />”</blockquote>
        <figcaption className="mt-3 text-xs tracking-wide text-white/90 [text-shadow:0_1px_8px_rgba(24,55,44,0.35)]">— {about.quoteAuthor}</figcaption>
      </figure>
    </section>
  );
}

import { testimonials } from "../data/clinic";
import SwipeHint from "./SwipeHint";


export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cream py-12 md:py-24">
      <div className="mx-auto max-w-[1100px] px-5 text-center">
        <div data-reveal>
        <p className="eyebrow text-wine">Depoimentos</p>
        <h2 className="mt-3 font-serif text-3xl text-teal-ink md:text-4xl leading-tight">O que dizem meus pacientes</h2>
        <p className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-teal-ink shadow-sm">
          <span className="tracking-widest text-amber-500">★★★★★</span> 26 avaliações verificadas com nota máxima no Doctoralia
        </p>
        </div>
        <div className="-mx-5 mt-10 no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 text-left md:mx-auto md:grid md:max-w-[760px] md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0">
          {testimonials.map((t) => (
            <figure key={t.name} data-reveal className="lift flex w-[82%] shrink-0 snap-center flex-col rounded-2xl bg-white p-6 shadow-sm md:w-auto">
              <span className="text-xs tracking-widest text-amber-500">★★★★★</span>
              <blockquote className="mt-4 flex-1 font-serif text-[19px] leading-snug text-teal-ink">“{t.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-sm text-wine">{t.name[0]}</span>
                <span className="text-sm text-teal-ink">{t.name}<span className="block text-[10px] text-teal-text">Consulta verificada · Doctoralia</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
        <SwipeHint />
      </div>
    </section>
  );
}

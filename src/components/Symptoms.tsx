import { symptoms } from "../data/clinic";
import SwipeHint from "./SwipeHint";
import { Icon } from "./Icons";

export default function Symptoms() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1100px] px-5 text-center">
        <div data-reveal>
        <p className="eyebrow text-wine">Reconheço você</p>
        <h2 className="mt-3 font-serif text-3xl text-teal-ink md:text-4xl leading-tight">Talvez você esteja sentindo…</h2>
        <p className="mt-4 text-sm leading-relaxed text-teal-text">Desafios e dores que você não precisa enfrentar em silêncio ou em solidão.</p>
        </div>
        <div className="-mx-5 mt-10 no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 text-left md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-3">
          {symptoms.map((s) => (
            <div key={s.title} data-reveal className="lift w-[78%] shrink-0 snap-center rounded-2xl bg-teal-mist p-6 ring-1 ring-teal/10 md:w-auto">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-teal"><Icon name={s.icon} /></span>
              <h3 className="mt-4 font-serif text-xl leading-snug text-teal-ink">{s.title}</h3>
              <p className="mt-3 text-[13px] leading-[1.7] text-teal-text">{s.text}</p>
            </div>
          ))}
        </div>
        <SwipeHint />
      </div>
    </section>
  );
}

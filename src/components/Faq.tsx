import { useState } from "react";
import { Plus, X } from "lucide-react";
import { clinic, faq } from "../data/clinic";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative overflow-hidden bg-teal-deep py-12 md:py-24">
      <img src={clinic.images.faqBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/60 via-teal-deep/50 to-teal-deep/65" />
      <div className="relative mx-auto max-w-[680px] px-5 text-center" data-reveal>
        <p className="eyebrow text-white/85">Dúvidas</p>
        <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl leading-tight [text-shadow:0_1px_8px_rgba(24,55,44,0.45)]">Perguntas <span className="hl">frequentes</span></h2>
        <p className="mt-3 text-sm text-white/90">Tudo o que você precisa saber antes de iniciar sua jornada terapêutica.</p>
        <div className="mt-10 text-left">
          {faq.map((f, i) => (
            <div key={f.q} className="border-b border-white/30">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] text-white" aria-expanded={open === i}>
                {f.q}
                {open === i ? <X className="h-4 w-4 shrink-0 text-white" /> : <Plus className="h-4 w-4 shrink-0" />}
              </button>
              <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><div className="space-y-3 pb-4 pr-8 text-[13px] leading-[1.7] text-white/90">{f.a.split("\n\n").map((p) => <p key={p}>{p}</p>)}</div></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

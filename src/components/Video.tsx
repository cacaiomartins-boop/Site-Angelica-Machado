import { CalendarCheck, CheckCircle2, Facebook, Instagram, Music2, Play, Youtube } from "lucide-react";
import { clinic, socials } from "../data/clinic";

// Ordem dos cartões de redes sociais ao lado do vídeo
const socialCards = [
  { id: "youtube", name: "YouTube", Icon: Youtube },
  { id: "tiktok", name: "TikTok", Icon: Music2 },
  { id: "instagram", name: "Instagram", Icon: Instagram },
  { id: "facebook", name: "Facebook", Icon: Facebook },
];

const points = ["Ambiente acolhedor e reservado", "Sala de espera confortável", "Localização de fácil acesso"];

export default function Video() {
  const { src, poster, title } = clinic.video;
  const isYoutube = /youtu\.?be/.test(src);
  return (
    <section id="consultorio" className="bg-white py-12 md:py-20">
      <div className="mx-auto grid max-w-[1000px] grid-cols-[1fr_1fr] items-stretch gap-4 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
        <div data-reveal="left" className="flex flex-col text-left">
          <p className="eyebrow text-wine">Conheça o espaço</p>
          <h2 className="mt-3 font-serif text-[22px] leading-tight text-teal-ink md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-md text-[12.5px] leading-relaxed text-teal-text md:mt-4 md:text-sm">
            Um passeio pelo Espaço Terapêutico Equilíbrio e Afeto, para você se sentir em casa antes mesmo da primeira sessão.
          </p>
          <ul className="mt-5 space-y-2.5 md:mt-6 md:space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-[11.5px] leading-snug text-teal-ink/85 md:items-center md:gap-3 md:text-sm">
                <CheckCircle2 className="mt-px h-3.5 w-3.5 shrink-0 text-wine md:mt-0 md:h-4 md:w-4" strokeWidth={1.8} />{p}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-2.5 md:gap-3">
            <a href={clinic.doctoraliaUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-2.5 rounded-xl bg-teal-mist p-2.5 ring-1 ring-teal-ink/10 transition hover:bg-teal/30 md:gap-3 md:p-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wine text-white transition group-hover:bg-wine-dark md:h-10 md:w-10"><CalendarCheck className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.7} /></span>
              <p className="text-[11px] leading-snug text-teal-ink md:text-[13px]">
                <span className="block font-semibold">Agenda online</span>
                <span className="text-teal-text group-hover:underline">Escolha seu horário no Doctoralia →</span>
              </p>
            </a>
            {socialCards.map(({ id, name, Icon }) => {
              const url = socials.find((x) => x.id === id)?.url;
              const cls = "flex items-center gap-2.5 rounded-xl bg-teal-mist p-2.5 ring-1 ring-teal-ink/10 md:gap-3 md:p-3";
              const inner = (
                <>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-wine md:h-10 md:w-10"><Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.7} /></span>
                  <p className="text-[11px] leading-snug text-teal-ink md:text-[13px]">
                    <span className="block font-semibold">{name}</span>
                    <span className="text-teal-text">{url ? "Acompanhe no " + name + " →" : "Link em breve"}</span>
                  </p>
                </>
              );
              return url ? (
                <a key={id} href={url} target="_blank" rel="noreferrer" className={cls + " transition hover:bg-teal/30"}>{inner}</a>
              ) : (
                <div key={id} className={cls + " opacity-70"}>{inner}</div>
              );
            })}
          </div>
        </div>

        <div data-reveal="right" className="relative mx-auto w-full max-w-[300px] self-center">
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[24px] bg-[#f0d9b5]/50 md:rounded-[32px]" />
          <div className="relative overflow-hidden rounded-[24px] bg-teal-mist shadow-2xl shadow-teal-ink/20 ring-[3px] ring-white md:rounded-[32px] md:ring-4">
            {!src ? (
              <div className="relative aspect-[9/16]">
                <img src={poster} alt="" className="h-full w-full object-cover opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-teal-deep/40 text-white">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/25 ring-1 ring-white/40"><Play className="h-7 w-7" /></span>
                  <span className="text-sm">Vídeo em breve</span>
                </div>
              </div>
            ) : isYoutube ? (
              <iframe title={title} src={src} className="aspect-[9/16] w-full border-0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen loading="lazy" />
            ) : (
              <video src={src} poster={poster} controls playsInline preload="none" className="aspect-[9/16] w-full bg-black object-cover" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

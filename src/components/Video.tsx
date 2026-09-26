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
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-7 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
        <div className="contents md:flex md:flex-col md:text-left">
          <div data-reveal className="order-1 text-center md:text-left">
          <p className="eyebrow text-wine">Conheça o espaço</p>
          <h2 className="mt-3 font-serif text-[28px] leading-tight text-teal-ink md:text-4xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-[320px] text-[13.5px] leading-relaxed text-teal-text md:mx-0 md:mt-4 md:max-w-md md:text-sm">
            Um passeio pelo Espaço Terapêutico Equilíbrio e Afeto, para você se sentir em casa antes mesmo da primeira sessão.
          </p>
          </div>
          <ul data-reveal className="order-3 space-y-3 rounded-2xl bg-teal-mist/70 p-4 ring-1 ring-teal-ink/10 md:mt-6 md:bg-transparent md:p-0 md:ring-0">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[13px] leading-snug text-teal-ink/85 md:text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-wine" strokeWidth={1.8} />{p}
              </li>
            ))}
          </ul>

          <div data-reveal className="order-4 grid grid-cols-2 gap-3 md:mt-6 md:flex md:flex-col">
            <a href={clinic.doctoraliaUrl} target="_blank" rel="noreferrer" className="group col-span-2 flex items-center gap-3 rounded-xl bg-teal-mist p-3 ring-1 ring-teal-ink/10 transition hover:bg-teal/30 md:col-span-1">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wine text-white transition group-hover:bg-wine-dark"><CalendarCheck className="h-5 w-5" strokeWidth={1.7} /></span>
              <p className="text-[13px] leading-snug text-teal-ink">
                <span className="block font-semibold">Agenda online</span>
                <span className="text-teal-text group-hover:underline">Escolha seu horário no Doctoralia →</span>
              </p>
            </a>
            {socialCards.map(({ id, name, Icon }) => {
              const url = socials.find((x) => x.id === id)?.url;
              const cls = "flex flex-col items-center gap-1.5 rounded-xl bg-teal-mist p-3 text-center ring-1 ring-teal-ink/10 md:flex-row md:gap-3 md:text-left";
              const inner = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-wine"><Icon className="h-5 w-5" strokeWidth={1.7} /></span>
                  <p className="text-[13px] leading-snug text-teal-ink">
                    <span className="block font-semibold">{name}</span>
                    <span className="text-[12px] text-teal-text md:text-[13px]">{url ? <><span className="md:hidden">Acompanhar →</span><span className="hidden md:inline">Acompanhe no {name} →</span></> : "Link em breve"}</span>
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

        <div data-reveal="right" className="relative order-2 mx-auto w-full max-w-[270px] self-center md:max-w-[300px]">
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

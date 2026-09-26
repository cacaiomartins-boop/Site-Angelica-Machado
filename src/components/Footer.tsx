import { ArrowUp, Car, Facebook, HeartHandshake, Instagram, Linkedin, MapPin, Music2, Video, Youtube } from "lucide-react";
import { clinic, modalities, socials, waLink } from "../data/clinic";

const socialIcons: Record<string, typeof Instagram> = { instagram: Instagram, facebook: Facebook, youtube: Youtube, tiktok: Music2, linkedin: Linkedin };

export default function Footer() {
  return (
    <>
      <section id="localizacao" className="bg-gradient-to-b from-white to-teal-mist/60 py-14 md:py-20">
        <div className="mx-auto max-w-[1100px] px-5">
          <div className="text-center" data-reveal>
            <p className="eyebrow text-wine">Localização</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-teal-ink md:text-4xl">Onde me encontrar</h2>
          </div>
          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
            <div data-reveal="left" className="rounded-3xl bg-white p-6 shadow-xl shadow-teal-ink/10 ring-1 ring-teal/10 md:p-8">
              <p className="font-serif text-2xl text-teal-ink">{clinic.office}</p>
              <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" className="group mt-4 flex items-start gap-3 rounded-2xl bg-teal-mist p-4 text-left transition hover:bg-teal/15">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-wine shadow-sm"><MapPin className="h-5 w-5" strokeWidth={1.6} /></span>
                <span>
                  <span className="block text-sm leading-snug text-teal-ink">{clinic.address}</span>
                  <span className="mt-1 block text-xs font-medium text-wine group-hover:underline">Abrir no Google Maps →</span>
                </span>
              </a>
              <p className="eyebrow mt-6 text-wine">Modalidades</p>
              <ul className="mt-3 space-y-3">
                {modalities.map((m, i) => {
                  const I = [Car, Video, HeartHandshake][i] ?? Car;
                  return (
                    <li key={m} className="flex items-start gap-3 text-sm leading-snug text-teal-ink/85">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-mist text-teal"><I className="h-4 w-4" strokeWidth={1.6} /></span>
                      <span className="pt-1">{m}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div data-reveal="right" className="relative">
              <div className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-3xl bg-[#f0d9b5]/50 md:block" />
              <div className="relative h-full overflow-hidden rounded-3xl bg-teal-mist shadow-xl shadow-teal-ink/15 ring-4 ring-white">
                <iframe title="Mapa do consultório" src={clinic.mapEmbed} className="h-[300px] w-full border-0 md:h-full md:min-h-[380px]" loading="lazy"  referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-medium text-teal-ink shadow">Itaipu · Niterói, RJ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-teal-deep py-5 text-white">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-3 px-5 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-serif text-base leading-tight">{clinic.name}</p>
            <p className="text-[10px] text-white/70">Psicanalista e Terapeuta Complementar · {clinic.registry}</p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-white/75">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href={clinic.doctoraliaUrl} target="_blank" rel="noreferrer" className="hover:text-white">Doctoralia</a>
            <a href={clinic.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-white">{clinic.instagram}</a>
          </nav>
          <div className="flex items-center gap-2">
            {socials.filter((x) => x.url).map((x) => {
              const I = socialIcons[x.id];
              return (
                <a key={x.id} href={x.url} target="_blank" rel="noreferrer" aria-label={x.label} className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 transition hover:bg-white/25">
                  <I className="h-3.5 w-3.5" />
                </a>
              );
            })}
            <a href={waLink()} target="_blank" rel="noreferrer" className="rounded-full bg-wine px-3.5 py-1.5 text-[11px] font-medium text-white transition hover:bg-wine-dark">WhatsApp</a>
          </div>
        </div>
        <div className="mx-auto mt-4 flex max-w-[1100px] flex-col items-center justify-between gap-1 border-t border-white/25 px-5 pt-3 text-center text-[10px] md:flex-row md:text-left">
          <p className="text-[#f7e8cc]">⚠ Emergência: ligue 188 (CVV) ou 192 (SAMU)</p>
          <p className="text-white/60">© 2026 {clinic.name} · {clinic.registry} · Todos os direitos reservados</p>
        </div>
      </footer>
      <a href="#inicio" aria-label="Voltar ao topo" className="back-top fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-teal text-white shadow-lg ring-1 ring-white/20"><ArrowUp className="h-5 w-5" /></a>
    </>
  );
}

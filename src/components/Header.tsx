import { clinic } from "../data/clinic";
import Logo from "./Logo";

const links = [
  ["Início", "#inicio"], ["Sobre", "#sobre"], ["Serviços", "#servicos"], ["Depoimentos", "#depoimentos"], ["FAQ", "#faq"],
];

export default function Header() {
  return (
    <header className="app-header fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-teal/95 backdrop-blur">
      <div id="progress" aria-hidden="true" />
      <div className="mx-auto flex h-11 max-w-[1280px] items-center justify-between gap-4 px-4 md:h-14 md:px-8">
        <a href="#inicio" className="flex items-center gap-2.5 whitespace-nowrap">
          <Logo className="h-7 w-7 shrink-0 md:h-9 md:w-9" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[16px] text-white md:text-xl">{clinic.name}</span>
            <span className="mt-1 text-[9px] font-medium tracking-[0.08em] text-white/85 md:text-[10.5px]">Psicanalista - Presencial e online</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-[13px] text-white md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} data-nav className="transition hover:text-[#f7e8cc]">{l}</a>
          ))}
        </nav>
        <a href={clinic.doctoraliaUrl} target="_blank" rel="noreferrer" className="rounded-full bg-wine px-4 py-1.5 text-xs font-medium text-white transition hover:bg-wine-dark md:text-[13px]">Agendar</a>
      </div>
    </header>
  );
}

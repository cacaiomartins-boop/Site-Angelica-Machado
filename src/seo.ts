// Metadados de cada página (usados no HTML pré-renderizado e na navegação dentro do site).
export const SITE = "https://www.angelicathiengo.com.br";

export type PageKey = "home" | "formacao";

export const PAGES: Record<PageKey, { path: string; title: string; description: string }> = {
  home: {
    path: "/",
    title: "Angélica Thiengo Machado | Psicanalista em Niterói e Online",
    description: "Psicanalista clínica (SBP/ES 21000234) em Niterói (Itaipu) e online. Acolhimento e escuta para ansiedade, luto, relacionamentos e autoestima.",
  },
  formacao: {
    path: "/formacao",
    title: "Formação e trajetória | Angélica Thiengo Machado – Psicanalista em Niterói",
    description: "Conheça a formação de Angélica Thiengo Machado: Psicanalista Clínico (SBP, 420h), Especialização Junguiana (360h), Formação em Terapia Sistêmica Familiar (400h) e a sua abordagem clínica.",
  },
};

export const OG_IMAGE = `${SITE}/img/angelica.jpg`;

/** Atualiza título, descrição, canonical e redes sociais ao trocar de página (sem recarregar). */
export function applyPageMeta(page: PageKey) {
  const p = PAGES[page];
  const url = SITE + (p.path === "/" ? "/" : p.path);
  document.title = p.title;
  const set = (sel: string, attr: string, value: string) => document.head.querySelector(sel)?.setAttribute(attr, value);
  set('meta[name="description"]', "content", p.description);
  set('link[rel="canonical"]', "href", url);
  set('meta[property="og:url"]', "content", url);
  set('meta[property="og:title"]', "content", p.title);
  set('meta[property="og:description"]', "content", p.description);
  set('meta[name="twitter:title"]', "content", p.title);
  set('meta[name="twitter:description"]', "content", p.description);
}

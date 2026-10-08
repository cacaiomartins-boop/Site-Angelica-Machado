// Usado só no build: gera o HTML de cada página para o conteúdo já vir pronto (SEO e carregamento).
import { renderToString } from "react-dom/server";
import App from "./App";
import { setServerPath } from "./lib/router";
import { clinic, faq, socials } from "./data/clinic";
import { PAGES, SITE, OG_IMAGE, type PageKey } from "./seo";

export function renderPage(path: string) {
  setServerPath(path);
  return renderToString(<App />);
}

export { PAGES, SITE, OG_IMAGE };

/** Dados estruturados (schema.org) de cada página. */
export function jsonLd(page: PageKey) {
  const org = {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE}/#consultorio`,
    name: `${clinic.name} – Psicanalista`,
    alternateName: clinic.office,
    description: "Psicanalista clínica com especialização Junguiana em Niterói (Itaipu) e online.",
    url: `${SITE}/`,
    image: OG_IMAGE,
    logo: `${SITE}/icon-512.png`,
    telephone: `+${clinic.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Ewerton Xavier, 2101, sala 227 – Shopping Ibiza",
      addressLocality: "Niterói",
      addressRegion: "RJ",
      postalCode: "24340-105",
      addressCountry: "BR",
    },
    hasMap: clinic.mapsUrl,
    areaServed: { "@type": "Country", name: "Brasil" },
    founder: { "@id": `${SITE}/#angelica` },
    sameAs: [clinic.doctoraliaUrl, ...socials.filter((s) => ["instagram", "youtube", "tiktok"].includes(s.id) && s.url).map((s) => s.url)],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "26", bestRating: "5" },
  };
  const person = {
    "@type": "Person",
    "@id": `${SITE}/#angelica`,
    name: clinic.name,
    jobTitle: "Psicanalista",
    url: `${SITE}/formacao`,
    image: OG_IMAGE,
    knowsAbout: ["Psicanálise", "Análise Junguiana", "Terapia Sistêmica Familiar", "Luto"],
    worksFor: { "@id": `${SITE}/#consultorio` },
  };
  const graph: object[] = [org, person];
  const p = PAGES[page];
  graph.push({ "@type": "WebPage", "@id": `${SITE}${p.path}#pagina`, url: `${SITE}${p.path}`, name: p.title, description: p.description, inLanguage: "pt-BR", about: { "@id": `${SITE}/#consultorio` } });
  if (page === "home") {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\n+/g, " ") } })),
    });
  } else {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Formação", item: `${SITE}/formacao` },
      ],
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

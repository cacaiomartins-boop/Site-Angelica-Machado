// Roda depois do "vite build": gera dist/index.html e dist/formacao.html já com o conteúdo das páginas.
// Se algo falhar, mantém o index.html normal (o site continua funcionando, só sem pré-renderização).
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const dist = path.resolve("dist");
const ssrDir = path.resolve("dist-ssr");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const indexPath = path.join(dist, "index.html");
const template = fs.readFileSync(indexPath, "utf8");
const out = [];

try {
  await build({ logLevel: "warn", build: { ssr: "src/entry-server.tsx", outDir: ssrDir, emptyOutDir: true } });
  const mod = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
  const assets = fs.existsSync(path.join(dist, "assets")) ? fs.readdirSync(path.join(dist, "assets")) : [];
  const fontPreload = ["inter-latin-400-normal", "eb-garamond-latin-400-normal"]
    .map((n) => assets.find((a) => a.startsWith(n) && a.endsWith(".woff2")))
    .filter(Boolean)
    .map((f) => `<link rel="preload" as="font" type="font/woff2" href="/assets/${f}" crossorigin />`)
    .join("\n    ");

  const pages = [
    { key: "home", file: "index.html", lcp: "/img/consultorio.webp" },
    { key: "formacao", file: "formacao.html", lcp: "/img/angelica-hd.webp", srcset: "/img/angelica-hd-420.webp 420w, /img/angelica-hd.webp 650w", sizes: "(min-width: 768px) 350px, 290px" },
  ];

  for (const pg of pages) {
    const meta = mod.PAGES[pg.key];
    const url = mod.SITE + meta.path;
    const body = mod.renderPage(meta.path);
    let html = template;
    if (!html.includes('<div id="root"></div>')) throw new Error("marcador #root não encontrado");
    html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    const setMeta = (re, value) => {
      if (!re.test(html)) throw new Error("meta não encontrada: " + re);
      html = html.replace(re, (_, a, b) => `${a}${esc(value)}${b}`);
    };
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`);
    setMeta(/(<meta name="description" content=")[^"]*(")/, meta.description);
    setMeta(/(<link rel="canonical" href=")[^"]*(")/, url);
    setMeta(/(<meta property="og:url" content=")[^"]*(")/, url);
    setMeta(/(<meta property="og:title" content=")[^"]*(")/, meta.title);
    setMeta(/(<meta property="og:description" content=")[^"]*(")/, meta.description);
    setMeta(/(<meta name="twitter:title" content=")[^"]*(")/, meta.title);
    setMeta(/(<meta name="twitter:description" content=")[^"]*(")/, meta.description);
    html = html.replace(/(<script type="application\/ld\+json">)[\s\S]*?(<\/script>)/, (_, a, b) => `${a}${JSON.stringify(mod.jsonLd(pg.key)).replace(/</g, "\\u003c")}${b}`);
    // CSS dentro do HTML: tira uma requisição que bloqueava a primeira pintura
    html = html.replace(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/, (m, href) => {
      const file = path.join(dist, href);
      return fs.existsSync(file) ? `<style>${fs.readFileSync(file, "utf8")}</style>` : m;
    });
    html = html.replace(/<link rel="preload" as="image"[^>]*>/, `<link rel="preload" as="image" href="${pg.lcp}"${pg.srcset ? ` imagesrcset="${pg.srcset}" imagesizes="${pg.sizes}"` : ""} fetchpriority="high" />\n    ${fontPreload}`);
    out.push([pg.file, html]);
  }
  for (const [file, html] of out) {
    fs.writeFileSync(path.join(dist, file), html);
    console.log(`prerender: ${file} (${(html.length / 1024).toFixed(1)} KB)`);
  }
} catch (err) {
  console.warn("prerender: ignorado (" + (err && err.message) + "). O site segue sem pré-renderização.");
  fs.writeFileSync(path.join(dist, "formacao.html"), template); // a rota /formacao continua existindo
} finally {
  fs.rmSync(ssrDir, { recursive: true, force: true });
}

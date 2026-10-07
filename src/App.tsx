import { useEffect, useRef } from "react";
import useScrollFx from "./hooks/useScrollFx";
import { useRoute } from "./lib/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Formacao from "./pages/Formacao";

const FORMACAO_TITLE = "Formação e trajetória | Angélica Thiengo Machado – Psicanalista em Niterói";
const FORMACAO_DESC =
  "Conheça a formação de Angélica Thiengo Machado: Psicanalista Clínico (SBP), Especialização Junguiana (360h), Formação em Terapia Sistêmica Familiar (200h) e a sua abordagem clínica.";

export default function App() {
  const route = useRoute();
  const page = route.path === "/formacao" ? "formacao" : "home";
  useScrollFx(page);

  // Rolagem ao trocar de página ou de âncora
  const prevPage = useRef<string | null>(null);
  useEffect(() => {
    const samePage = prevPage.current === page;
    prevPage.current = page;
    if (route.hash) {
      const el = document.getElementById(route.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: samePage ? "smooth" : "auto", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: samePage ? "smooth" : ("instant" as ScrollBehavior) });
  }, [route.key, page]);

  // Título e descrição de cada página
  const defaults = useRef<{ title: string; desc: string } | null>(null);
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    if (!defaults.current) defaults.current = { title: document.title, desc: meta?.getAttribute("content") ?? "" };
    document.title = page === "formacao" ? FORMACAO_TITLE : defaults.current.title;
    meta?.setAttribute("content", page === "formacao" ? FORMACAO_DESC : defaults.current.desc);
  }, [page]);

  return (
    <>
      <Header path={route.path} />
      {page === "formacao" ? <Formacao /> : <Home />}
      <Footer />
    </>
  );
}

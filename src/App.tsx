import { useEffect, useRef } from "react";
import useScrollFx from "./hooks/useScrollFx";
import { useRoute } from "./lib/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Formacao from "./pages/Formacao";
import { applyPageMeta } from "./seo";

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

  // Título, descrição e canonical de cada página
  useEffect(() => applyPageMeta(page), [page]);

  return (
    <>
      <Header path={route.path} />
      {page === "formacao" ? <Formacao /> : <Home />}
      <Footer />
    </>
  );
}

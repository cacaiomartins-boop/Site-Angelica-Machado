import { useEffect } from "react";

/**
 * Efeitos de rolagem sem re-renderizar o React:
 * - revela elementos [data-reveal] ao entrar na tela
 * - barra de progresso, sombra do cabeçalho e botão "topo" via atributos no <html>
 * - destaca no menu a seção visível (scrollspy)
 */
export default function useScrollFx() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1) Revelar ao rolar (com atraso escalonado entre irmãos)
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    items.forEach((el) => {
      const sibs = Array.from(el.parentElement?.children ?? []).filter((c) => (c as HTMLElement).hasAttribute("data-reveal"));
      el.style.setProperty("--d", `${Math.min(sibs.indexOf(el), 5) * 90}ms`);
    });
    let revealIO: IntersectionObserver | undefined;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
    } else {
      revealIO = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              revealIO?.unobserve(e.target);
            }
          }),
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      items.forEach((el) => revealIO!.observe(el));
    }

    // 2) Progresso de rolagem + estados do cabeçalho / botão topo
    let ticking = false;
    const update = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      root.style.setProperty("--scroll", max > 0 ? String(Math.min(y / max, 1)) : "0");
      root.dataset.scrolled = y > 12 ? "true" : "false";
      root.dataset.far = y > 700 ? "true" : "false";
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // 3) Scrollspy do menu
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[data-nav]"));
    const sections = links
      .map((a) => document.querySelector<HTMLElement>(a.dataset.nav!))
      .filter((s): s is HTMLElement => !!s);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((a) => (a.dataset.active = String(a.dataset.nav === "#" + e.target.id)));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));

    return () => {
      revealIO?.disconnect();
      spy.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

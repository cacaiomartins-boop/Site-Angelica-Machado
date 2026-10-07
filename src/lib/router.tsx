import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from "react";

// Roteador mínimo (sem biblioteca): usa a History API.
// Páginas: "/" (início) e "/formacao".
const EVT = "app:navigate";
let counter = 0;

export type Route = { path: string; hash: string; key: number };

const read = (): Route => ({
  path: window.location.pathname.replace(/\/+$/, "") || "/",
  hash: window.location.hash,
  key: ++counter,
});

export function navigate(to: string) {
  const u = new URL(to, window.location.origin);
  window.history.pushState({}, "", u.pathname + u.search + u.hash);
  window.dispatchEvent(new Event(EVT));
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(read);
  useEffect(() => {
    const on = () => setRoute(read());
    window.addEventListener("popstate", on);
    window.addEventListener(EVT, on);
    return () => {
      window.removeEventListener("popstate", on);
      window.removeEventListener(EVT, on);
    };
  }, []);
  return route;
}

type LinkProps = { to: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Link({ to, onClick, ...rest }: LinkProps) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target === "_blank") return;
    e.preventDefault();
    navigate(to);
  };
  return <a href={to} onClick={handle} {...rest} />;
}

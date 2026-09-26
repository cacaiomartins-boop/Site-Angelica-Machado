import { benefits } from "../data/clinic";
import Rich from "./Rich";
import { Icon } from "./Icons";

export default function Benefits() {
  return (
    <section>
      {benefits.map((b, i) => {
        const dark = i % 2 === 1;
        return (
          <div key={b.title} className={dark ? "bg-teal" : "bg-cream"}>
            <div data-reveal={dark ? "right" : "left"} className={`mx-auto flex max-w-[1100px] items-center gap-5 px-5 py-8 md:py-10 ${dark ? "flex-row-reverse text-right" : ""}`}>
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${dark ? "bg-white/60 text-teal-ink" : "bg-teal-mist text-teal-text"}`}>
                <Icon name={b.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className={`font-serif text-xl ${dark ? "text-white" : "text-teal-ink"}`}>{b.title}</h3>
                <p className={`mt-1 max-w-xl text-[13px] ${dark ? "ml-auto text-white/95" : "text-teal-text"}`}><Rich text={b.text} className={dark ? "hl" : "font-semibold text-wine"} /></p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

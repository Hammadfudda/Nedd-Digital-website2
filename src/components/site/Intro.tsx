import { useEffect } from "react";
import { PORTFOLIO } from "@/lib/portfolio";

const logo = "/images/nedd-digital-logo.png";

const FLASHES = (["websites", "mobile", "webdev"] as const)
  .map((category) => PORTFOLIO.find((item) => item.category === category)?.cover)
  .filter((src): src is string => Boolean(src));

/**
 * Opening intro. Visibility is decided before paint by the inline script in __root
 * (data-intro on <html>). CSS hides it after 2.2s on its own, so it always fails open.
 */
export function Intro() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset["intro"] !== "play") return;
    const t = window.setTimeout(() => (root.dataset["intro"] = "done"), 2300);
    return () => window.clearTimeout(t);
  }, []);

  const skip = () => {
    document.documentElement.dataset["intro"] = "done";
  };

  return (
    <div className="intro on-dark" aria-hidden="true">
      <div className="intro-panel intro-panel--top" />
      <div className="intro-panel intro-panel--bottom" />
      <div className="intro-stage">
        <div className="intro-glow" />
        <div className="intro-flash">
          {FLASHES.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>
        {[12, 34, 58, 81].map((left, i) => (
          <span key={left} className="intro-trail" style={{ left: `${left}%`, animationDelay: `${0.1 + i * 0.12}s` }} />
        ))}
        <img src={logo} alt="" className="intro-logo" width={112} height={112} />
        <p className="intro-word">
          <span><span>Nedd</span></span>
          <span><span>Digital</span></span>
        </p>
      </div>
      <button type="button" tabIndex={-1} className="intro-skip" onClick={skip}>
        Skip
      </button>
    </div>
  );
}

/** Runs before first paint: play once per browser session, skip for reduced motion. */
export const INTRO_BOOT_SCRIPT = `(function(){var r=document.documentElement;try{var m=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(m||sessionStorage.getItem('nedd-intro')){r.dataset["intro"]='skip';return;}sessionStorage.setItem('nedd-intro','1');r.dataset["intro"]='play';}catch(e){r.dataset["intro"]='skip';}})();`;

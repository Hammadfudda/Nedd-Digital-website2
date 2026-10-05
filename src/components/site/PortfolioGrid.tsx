import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { CATEGORY_LABEL, type PortfolioItem } from "@/lib/portfolio";

export function PortfolioGrid({ items, initialId }: { items: PortfolioItem[]; initialId?: string | undefined }) {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (!initialId) return;
    const i = items.findIndex((p) => p.id === initialId);
    if (i >= 0) setOpen(i);
  }, [initialId, items]);
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-2xl border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <div className={`relative aspect-[4/3] overflow-hidden ${p.category === "branding" ? "bg-card" : "bg-muted"}`}>
                <img
                  src={p.cover}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.04] ${p.category === "branding" ? "object-contain p-8" : "object-cover object-top"}`}
                />
                <span className="absolute inset-0 flex items-end justify-end bg-navy/0 p-4 transition-colors duration-300 group-hover:bg-navy/40">
                  <span className="inline-flex translate-y-2 items-center gap-1 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View work <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-soft">{CATEGORY_LABEL[p.category]}</p>
                <h3 className="mt-1.5 text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
      {open !== null && <Lightbox items={items} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
    </>
  );
}

function Lightbox({ items, index, onChange, onClose }: { items: PortfolioItem[]; index: number; onChange: (i: number) => void; onClose: () => void }) {
  const p = items[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const go = useCallback((d: number) => onChange((index + d + items.length) % items.length), [index, items.length, onChange]);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [go, onClose]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [index]);

  if (!p) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={p.title} className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/85 p-3 backdrop-blur-sm animate-in fade-in duration-200 md:p-8" onClick={onClose}>
      <div className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-card shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4 border-b p-4 md:p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-soft">{CATEGORY_LABEL[p.category]}</p>
            <h2 className="mt-1 text-xl font-semibold text-navy">{p.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className="rounded-full p-2 hover:bg-muted focus-visible:outline-2 focus-visible:outline-accent"><X /></button>
        </div>
        <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto bg-muted">
          <img src={p.full} alt={p.alt} className={`mx-auto ${p.tall ? "w-full" : "max-h-[70vh] w-auto object-contain p-4"}`} />
        </div>
        <div className="flex items-center justify-between border-t p-3">
          <button type="button" onClick={() => go(-1)} className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-navy hover:bg-muted"><ChevronLeft className="h-4 w-4" />Previous</button>
          <span className="text-xs text-muted-foreground">{index + 1} / {items.length}</span>
          <button type="button" onClick={() => go(1)} className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-navy hover:bg-muted">Next<ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
}

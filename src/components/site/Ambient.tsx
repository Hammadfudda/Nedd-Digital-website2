/** Light CSS-only ambient motion for dark bands (inner page heroes, CTA bands). */
export function Ambient({ trails = true }: { trails?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="ambient-blob -left-[10%] top-[-20%] h-[70%] w-[45%] bg-violet" />
      <div className="ambient-blob right-[-8%] top-[10%] h-[60%] w-[35%] bg-lavender/60" style={{ animationDelay: "-6s", animationDuration: "22s" }} />
      <div className="ambient-blob bottom-[-30%] left-[35%] h-[60%] w-[40%] bg-navy-soft" style={{ animationDelay: "-11s" }} />
      <div className="grid-lines absolute inset-0 opacity-30" />
      {trails &&
        [18, 46, 73, 88].map((left, i) => (
          <span key={left} className="ambient-trail" style={{ left: `${left}%`, animationDelay: `${i * 1.7}s` }} />
        ))}
    </div>
  );
}

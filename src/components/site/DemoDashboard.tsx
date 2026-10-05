const bars = [42, 55, 48, 63, 58, 71, 66, 78, 74, 85, 80, 92];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

/** Illustrative dashboard. All figures are sample data and labeled as such. */
export function DemoDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <figure className="relative rounded-2xl border border-on-navy/15 bg-card p-5 text-card-foreground shadow-2xl" aria-label="Example dashboard with sample data">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Cash flow overview</p>
          <p className="font-display text-2xl font-semibold text-navy">$128,400</p>
        </div>
        <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">Example dashboard</span>
      </div>
      <div className="mt-5 flex h-36 items-end gap-1.5" aria-hidden>
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full origin-bottom rounded-t bg-navy-soft transition-all duration-700 last:bg-accent"
              style={{ height: `${h}%`, animation: `reveal-up 0.8s ${i * 50}ms both` }}
            />
            <span className="text-[10px] text-muted-foreground">{months[i]}</span>
          </div>
        ))}
      </div>
      {!compact && (
        <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
          {[
            ["Revenue", "$42.1k"],
            ["Expenses", "$29.8k"],
            ["AR > 60 days", "$6.2k"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-muted p-3">
              <p className="text-[11px] text-muted-foreground">{k}</p>
              <p className="font-semibold text-navy">{v}</p>
            </div>
          ))}
        </div>
      )}
      <figcaption className="mt-4 text-[11px] text-muted-foreground">Sample data for illustration only. Not a client result.</figcaption>
    </figure>
  );
}

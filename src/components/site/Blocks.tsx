import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Ambient } from "./Ambient";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "text-accent" : "text-navy-soft"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-lavender shadow-glow" : "bg-violet"}`} aria-hidden />
      {children}
    </p>
  );
}

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead: string; children?: ReactNode }) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy-deep text-on-navy">
      <Ambient />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 md:pb-28 md:pt-28 lg:px-8">
        <div className="max-w-4xl">
          <div className="hero-rise" style={{ ["--i" as string]: 0 }}><Eyebrow light>{eyebrow}</Eyebrow></div>
          <h1 className="hero-rise text-5xl font-medium leading-[0.98] md:text-7xl lg:text-8xl" style={{ ["--i" as string]: 1 }}>{title}</h1>
          <p className="hero-rise mt-7 max-w-2xl text-base leading-7 text-on-navy-muted md:text-lg" style={{ ["--i" as string]: 2 }}>{lead}</p>
          {children && <div className="hero-rise mt-9 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function PrimaryLink({ to, children, params }: { to: string; children: ReactNode; params?: Record<string, string> }) {
  return (
    <Link
      to={to as "/"}
      params={params as never}
      className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-on-navy"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function GhostLink({ to, children, light = true }: { to: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      to={to as "/"}
      className={`inline-flex min-h-12 items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-colors duration-300 ${light ? "border-on-navy/30 bg-on-navy/5 text-on-navy hover:bg-on-navy/15" : "border-navy/20 text-navy hover:border-violet hover:bg-secondary"}`}
    >
      {children}
    </Link>
  );
}

export function ProcessSteps({ steps, title = "How we work" }: { steps: { title: string; body: string }[]; title?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <Eyebrow>Our process</Eyebrow>
      <h2 className="text-4xl font-medium text-navy md:text-6xl">{title}</h2>
      <ol className={`mt-12 grid gap-4 sm:grid-cols-2 ${steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"}`}>
        {steps.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 80} className="group relative h-full overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-lavender hover:shadow-elegant">
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-violet to-lavender transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
              <span className="font-display text-4xl font-semibold text-lavender">0{i + 1}</span>
              <h3 className="mt-5 text-2xl font-medium text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function CtaBand({ title, body, cta, to = "/contact" }: { title: string; body: string; cta: string; to?: string }) {
  return (
    <section className="px-5 pb-20 lg:px-8">
      <div className="on-dark relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-navy-deep px-8 py-14 text-on-navy shadow-elegant md:px-14 md:py-20">
        <Ambient trails={false} />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-medium md:text-6xl">{title}</h2>
            <p className="mt-3 text-on-navy-muted">{body}</p>
          </div>
          <PrimaryLink to={to}>{cta}</PrimaryLink>
        </div>
      </div>
    </section>
  );
}

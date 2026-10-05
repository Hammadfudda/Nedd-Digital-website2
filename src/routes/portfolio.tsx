import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { PageHero, CtaBand, Eyebrow, PrimaryLink } from "@/components/site/Blocks";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
const leaveImg = { url: "/images/leave-management-demo.jpg" };
import { PORTFOLIO, PORTFOLIO_CATEGORIES, type PortfolioCategory } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";

const DESC = "Explore Nedd Digital websites, mobile apps, brand identities, data analysis dashboards and Leave Management Software.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Dashboards, Websites & Software | Nedd Digital" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Portfolio | Dashboards, Websites & Software | Nedd Digital" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  validateSearch: (s: Record<string, unknown>): { item?: string } => (typeof s["item"] === "string" ? { item: s["item"] } : {}),
  component: Page,
});

function Page() {
  const { item } = Route.useSearch();
  const [cat, setCat] = useState<"all" | PortfolioCategory>("all");
  const list = PORTFOLIO.filter((p) => cat === "all" || p.category === cat);
  const count = (id: string) => (id === "all" ? PORTFOLIO.length : PORTFOLIO.filter((p) => p.category === id).length);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work that shows what we build."
        lead="Explore selected websites, mobile applications, brand identities, data analysis dashboards and our Leave Management Software."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 md:py-20">
        <p className="max-w-2xl text-lg text-muted-foreground">
          Every project starts with the same question: what does the business need its customers to see, understand and do? Here's a selection of the answers. Click any project to view it in full.
        </p>

        <div role="group" aria-label="Filter projects by category" className="mt-10 flex flex-wrap gap-2">
          {PORTFOLIO_CATEGORIES.map((c) => (
            <Button
              variant="outline"
              key={c.id}
              type="button"
              aria-pressed={cat === c.id}
              onClick={() => setCat(c.id)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${cat === c.id ? "border-navy bg-navy text-on-navy" : "text-navy hover:bg-muted"}`}
            >
              {c.label} <span className="ml-1 opacity-60">{count(c.id)}</span>
            </Button>
          ))}
        </div>

        <div className="mt-10">
          <PortfolioGrid key={cat} items={list} initialId={cat === "all" ? item : undefined} />
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-3xl border bg-card lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <Eyebrow>Featured product</Eyebrow>
            <h2 className="text-3xl font-semibold text-navy md:text-4xl">Leave Management Software</h2>
            <p className="mt-4 text-muted-foreground">An employee leave management system built to simplify leave requests, approvals, balances and administration.</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {["Admin, manager & employee roles", "Approval workflow", "Live leave balances", "Reports & audit logs"].map((f) => (
                <li key={f} className="flex gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-navy-soft" />{f}</li>
              ))}
            </ul>
            <div className="mt-8"><PrimaryLink to="/products/leave-management">Explore the product</PrimaryLink></div>
          </div>
          <div className="bg-muted p-4 md:p-8">
            <img src={leaveImg.url} alt="Leave Management Software dashboard" loading="lazy" className="w-full rounded-xl border shadow-lg" />
          </div>
        </div>
      </section>

      <CtaBand title="Have a project in mind?" body="Tell us what you want to build and we'll reply with clear next steps." cta="Let's discuss your project" />
    </>
  );
}

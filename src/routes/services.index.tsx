import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero, CtaBand, Eyebrow } from "@/components/site/Blocks";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Nedd Digital" },
      { name: "description", content: "Bookkeeping, Power BI & Tableau, websites, software, mobile apps and branding from Nedd Digital." },
      { property: "og:title", content: "Services | Nedd Digital" },
      { property: "og:description", content: "Bookkeeping, Power BI & Tableau, websites, software, mobile apps and branding from Nedd Digital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Services" title="Practical solutions across finance, data and technology." lead="Choose the area that matches what your business needs." />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <Eyebrow>All services</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-semibold text-navy md:text-4xl">Everything we can help you with.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="rounded-2xl border bg-card p-6 transition-shadow hover:shadow-lg">
                <h3 className="text-lg font-semibold text-navy">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            ))}
          </div>
      </section>
      <CtaBand title="Let's talk about your business" body="Tell us what you need and we'll reply with clear next steps." cta="Contact us" />
    </>
  );
}

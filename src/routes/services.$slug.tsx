import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero, ProcessSteps, CtaBand, PrimaryLink } from "@/components/site/Blocks";
import { getService } from "@/lib/site";
const analyticsDashboard = { url: "/images/data-analysis-dashboard.png" };
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return { slug: s.slug };
  },
  head: ({ loaderData }) => {
    const s = loaderData && getService(loaderData.slug);
    if (!s) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const s = getService(Route.useLoaderData().slug);
  if (!s) throw notFound();
  return (
    <>
      <PageHero eyebrow={s.name} title={s.heroTitle} lead={s.heroLead}>
        <PrimaryLink to="/contact">{s.cta}</PrimaryLink>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        {s.slug === "power-bi-data-analytics" && <Link to="/portfolio" search={{ item: "data-analysis-dashboard" }} aria-label="View data analysis dashboard in portfolio"><img src={analyticsDashboard.url} alt="Product sales and market share data analysis dashboard" className="mb-12 w-full rounded-sm border" /></Link>}
        <h2 className="text-3xl font-semibold text-navy">{s.problemTitle}</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-muted-foreground">{s.problems.map((p) => <li key={p}>{p}</li>)}</ul>
        <p className="mt-8 max-w-3xl text-lg">{s.solution}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {s.offerings.map((o) => (
            <div key={o.title} className="rounded-2xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.body}</p>
            </div>
          ))}
        </div>
      </section>
      <ProcessSteps steps={s.process} />
      {s.related.slug === "leave-management" ? <CtaBand title="Leave Management Software" body="Manage leave requests, approvals and balances in one place." cta="Explore the product" to="/products/leave-management" /> : <CtaBand title={s.related.prompt} body="Explore a related Nedd Digital solution." cta="Talk to us" />}
    </>
  );
}

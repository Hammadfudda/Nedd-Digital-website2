import { LEAVE_FEATURES } from "@/lib/site";
const leaveDashboard = { url: "/images/leave-management-demo.jpg" };
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, PrimaryLink } from "@/components/site/Blocks";

export const Route = createFileRoute("/products/leave-management")({
  head: () => ({
    meta: [
      { title: "Leave Management Software | Nedd Digital" },
      { name: "description", content: "Leave requests, approvals, live balances, policies, CSV import, reports and audit logs." },
      { property: "og:title", content: "Leave Management Software | Nedd Digital" },
      { property: "og:description", content: "Leave requests, approvals, live balances, policies, CSV import, reports and audit logs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Product" title="Leave Management Software" lead="We built this because we needed it ourselves and couldn't find anything that didn't feel bloated. Employees submit requests, managers approve or decline them with a clear trail behind every decision, and the leave balance updates the moment a request is approved, so nobody is working off a number that's already out of date." />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <img src={leaveDashboard.url} alt="Nedd Digital Leave Management Software admin dashboard" className="mb-12 w-full rounded-sm border" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LEAVE_FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border bg-card p-6">
              <h3 className="font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10"><PrimaryLink to="/contact">Enquire about Leave Management Software</PrimaryLink></div>
      </section>
      <CtaBand title="Let's talk about your business" body="Tell us what you need and we'll reply with clear next steps." cta="Contact us" />
    </>
  );
}

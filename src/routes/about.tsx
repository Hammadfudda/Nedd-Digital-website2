import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageHero, CtaBand, Eyebrow, ProcessSteps, PrimaryLink } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nedd Digital" },
      { name: "description", content: "Nedd Digital helps businesses with bookkeeping, data and digital tools. Based in Jersey City, NJ." },
      { property: "og:title", content: "About Nedd Digital" },
      { property: "og:description", content: "Nedd Digital helps businesses with bookkeeping, data and digital tools. Based in Jersey City, NJ." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const WHO = [
  { title: "Small business owners", body: "Who need their books kept accurate and want to understand their numbers without having to become an accountant themselves." },
  { title: "Growing teams", body: "Who have outgrown spreadsheets and email chains and need a proper system before things start slipping." },
  { title: "Operations & finance leads", body: "Who want dashboards and reporting that give their team real hours back every week." },
];

const PRINCIPLES = [
  { title: "Start with the problem", body: "We start with the problem, not the tool. We learn what's actually slowing you down before we suggest a fix for it." },
  { title: "Plain language", body: "You'll know what we're doing, why we're doing it, and what it costs, at every stage." },
  { title: "Clear scope and price", body: "Scope and price are agreed in writing before anything starts, so there's never a surprise bill." },
  { title: "Built to be used", body: "We build things to actually get used. That means training, a proper handover, and staying reachable after launch." },
];

const STEPS = [
  { title: "Discover", body: "We talk through how your business works today." },
  { title: "Plan", body: "You get a written scope, timeline and price." },
  { title: "Build", body: "Work delivered in stages you can see." },
  { title: "Review", body: "You test and give feedback; we adjust." },
  { title: "Launch", body: "Handover, walkthrough and ongoing support." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="One team for your finance, data and technology."
        lead="Nedd Digital keeps your books accurate, turns your numbers into something you can actually read, and builds the tools your business runs on. Most of our clients come to us because they tried doing these things separately and it kept falling through the cracks between providers."
      >
        <PrimaryLink to="/contact">Talk to us</PrimaryLink>
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Practical help, not buzzwords.</h2>
        </div>
        <div className="space-y-5 text-lg text-muted-foreground">
          <p>Nedd Digital works across the parts of a business that usually need to support one another: the numbers, the reporting, and the digital tools your team depends on. We think that split is a mistake. The person who understands your numbers should be talking to the person building your systems, because the two are almost always connected.</p>
          <p>Most of the businesses we work with don't need more software. They need their existing numbers to be right, their reports to answer the question they actually asked, and their day to day work to take less effort than it currently does. That's the whole job, really.</p>
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Practical services for the work that matters.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <div className="h-full border-t-2 border-accent pt-5">
                  <h3 className="text-lg font-semibold text-navy">{service.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.short}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Eyebrow>Who we help</Eyebrow>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {WHO.map((w) => (
            <div key={w.title} className="border-t-2 border-accent pt-5">
              <h3 className="text-lg font-semibold text-navy">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-on-navy">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Eyebrow light>How we approach projects</Eyebrow>
          <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-on-navy-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={STEPS} />

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="grid gap-6 rounded-2xl border bg-card p-8 md:grid-cols-3">
          <p className="flex items-start gap-3"><MapPin className="h-5 w-5 shrink-0 text-navy-soft" />{CONTACT.address}</p>
          <a href={CONTACT.phoneHref} className="flex items-center gap-3 hover:underline"><Phone className="h-5 w-5 text-navy-soft" />{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:underline"><Mail className="h-5 w-5 text-navy-soft" />{CONTACT.email}</a>
        </div>
      </section>

      <CtaBand title="Let's talk about your business" body="Tell us what you need and we'll reply with clear next steps." cta="Contact us" />
    </>
  );
}

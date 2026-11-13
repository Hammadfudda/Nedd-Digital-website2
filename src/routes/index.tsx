import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Check, HeartHandshake, Layers3, ShieldCheck } from "lucide-react";
import { Ambient } from "@/components/site/Ambient";
import { CtaBand, Eyebrow, GhostLink, CallLink, PrimaryLink, ProcessSteps } from "@/components/site/Blocks";
const analyticsDashboard = { url: "/images/data-analysis-dashboard.png" };
const leaveDashboard = { url: "/images/leave-management-demo.jpg" };
const heroMp4 = { url: "/images/nedd-hero.mp4" };
const heroWebm = { url: "/images/nedd-hero.webm" };
const heroPoster = { url: "/images/nedd-hero-poster.jpg" };
import { Reveal } from "@/components/site/Reveal";
import { LEAVE_FEATURES, SERVICES } from "@/lib/site";
import { CATEGORY_LABEL, PORTFOLIO } from "@/lib/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nedd Digital | Bookkeeping, Power BI & Digital Services" },
      { name: "description", content: "Bookkeeping, Power BI dashboards, websites, custom software, mobile apps and branding for small businesses, online stores and charities." },
      { property: "og:title", content: "Nedd Digital | Bookkeeping, Power BI & Digital Services" },
      { property: "og:description", content: "Clean books, clear reports and digital tools built around your business." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STEPS = [
  { title: "Understand", body: "We spend real time learning how your business runs before suggesting anything." },
  { title: "Plan", body: "A scope, timeline and price, agreed in writing before work starts." },
  { title: "Build", body: "Work delivered in stages you can actually see, not one big reveal at the end." },
  { title: "Refine", body: "You review it, we adjust it, then we hand it over with support attached." },
];

const AUDIENCES = [
  { number: "01", title: "Small businesses and trades", body: "Contractors, clinics, agencies and local service companies that want clean books, honest numbers and a website that brings in enquiries." },
  { number: "02", title: "Online stores", body: "Sellers who need sales, fees, inventory and cost of goods sorted properly, plus a store front that turns visitors into orders." },
  { number: "03", title: "Charities and nonprofits", body: "Organizations that must show donors, trustees and funders exactly where money came from and where it went, and want a site that earns trust and donations." },
];

const BENEFITS = [
  { icon: BarChart3, title: "Free dashboard", body: "A historical Power BI dashboard with every bookkeeping package." },
  { icon: ShieldCheck, title: "Price first", body: "A written scope and quote before any work starts." },
  { icon: HeartHandshake, title: "24 hour reply", body: "Tell us what you need and hear back within a day." },
  { icon: Layers3, title: "One team", body: "Your finance and technology handled by the same people." },
];

const PREVIEW = (["websites", "webdev", "mobile", "branding"] as const)
  .map((category) => PORTFOLIO.find((item) => item.category === category))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

function Index() {
  return (
    <>
      <section className="on-dark relative isolate overflow-hidden bg-navy-deep text-on-navy">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPoster.url}
          aria-hidden
        >
          <source src={heroWebm.url} type="video/webm" />
          <source src={heroMp4.url} type="video/mp4" />
        </video>
        <div className="bg-hero-scrim absolute inset-0 -z-10" aria-hidden />
        <div className="grid-lines absolute inset-0 -z-10 opacity-25" aria-hidden />
        <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8 lg:py-18">
          <div className="lg:col-span-7">
            <div className="hero-rise" style={{ ["--i" as string]: 0 }}><Eyebrow light>Bookkeeping, data and digital</Eyebrow></div>
            <h1 className="hero-rise max-w-4xl text-6xl font-medium leading-[0.9] sm:text-7xl lg:text-[6.4rem]" style={{ ["--i" as string]: 1 }}>
              Your books, your numbers, your website. <em className="text-gradient">Handled.</em>
            </h1>
            <p className="hero-rise mt-7 max-w-xl text-base leading-7 text-on-navy-muted md:text-lg" style={{ ["--i" as string]: 2 }}>
              Nedd Digital looks after the finance and technology side for small businesses, online stores and charities, so you can spend your time on the work you started this for. Clean books, clear reports and a website people trust.
            </p>
            <div className="hero-rise mt-9 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
              <PrimaryLink to="/contact">Book a free consultation</PrimaryLink>
              <GhostLink to="/services">Explore services</GhostLink>
              <CallLink />
            </div>
          </div>
          <div className="hero-rise relative hidden min-h-[560px] lg:col-span-5 lg:block" style={{ ["--i" as string]: 4 }}>
            <Link to="/portfolio" search={PREVIEW[0]?.id ? { item: PREVIEW[0].id } : {}} className="float-slow absolute left-0 top-0 h-[62%] w-[78%] overflow-hidden rounded-2xl border border-on-navy/20 bg-muted shadow-glow">
              <img src={PREVIEW[0]?.cover} alt={PREVIEW[0]?.alt} className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105" />
            </Link>
            <Link to="/portfolio" search={PREVIEW[2]?.id ? { item: PREVIEW[2].id } : {}} className="float-slow absolute bottom-0 right-0 h-[52%] w-[58%] overflow-hidden rounded-2xl border-4 border-navy-deep bg-muted shadow-glow [animation-delay:-4s]">
              <img src={PREVIEW[2]?.cover} alt={PREVIEW[2]?.alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </Link>
            <p className="absolute bottom-4 left-0 max-w-36 text-[11px] uppercase tracking-[0.18em] text-on-navy-muted">Selected website and app work</p>
          </div>
        </div>
      </section>

      <section className="relative border-b bg-card">
        <div className="mx-auto grid max-w-7xl divide-y px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">
          {BENEFITS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 px-1 py-6 sm:px-6 first:pl-0 last:pr-0">
              <Icon className="mt-1 h-5 w-5 shrink-0 text-navy-soft" />
              <div><h2 className="font-sans text-sm font-semibold text-navy">{title}</h2><p className="mt-1 text-xs leading-5 text-muted-foreground">{body}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5"><Eyebrow>Who we work with</Eyebrow><h2 className="text-5xl font-medium leading-none text-navy md:text-6xl">Different organizations, the same need for numbers you can trust.</h2></div>
          <div className="space-y-0 lg:col-span-7">
            {AUDIENCES.map((audience) => (
              <article key={audience.title} className="group grid gap-3 border-t py-7 transition-colors duration-300 hover:border-violet sm:grid-cols-[4rem_1fr_1.5fr]">
                <span className="text-xs font-semibold text-navy-soft">{audience.number}</span>
                <h3 className="text-2xl font-medium text-navy">{audience.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{audience.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Eyebrow>What we do</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-5"><h2 className="max-w-2xl text-5xl font-medium leading-none text-navy md:text-6xl">Services built around your business.</h2><GhostLink to="/services" light={false}>See all services</GhostLink></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <Link to="/services/$slug" params={{ slug: service.slug }} className="group relative flex h-full min-h-64 flex-col justify-between overflow-hidden rounded-2xl border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-navy hover:bg-navy hover:text-on-navy hover:shadow-elegant">
                  <span className="text-xs font-semibold text-navy-soft group-hover:text-accent">0{index + 1}</span>
                  <div><h3 className="text-3xl font-medium text-navy group-hover:text-on-navy">{service.name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground group-hover:text-on-navy-muted">{service.short}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">Learn more <ArrowRight className="h-4 w-4" /></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
        <div className="lg:col-span-5"><Eyebrow>Power BI</Eyebrow><h2 className="text-5xl font-medium leading-none text-navy md:text-6xl">Your numbers, at a glance.</h2><p className="mt-6 leading-7 text-muted-foreground">Most owners can tell you last month's sales. Fewer can say which three customers carry the business, or how long cash would last in a slow month. A proper dashboard answers both. Every bookkeeping package includes a free historical Power BI dashboard covering up to three years of your data, so you see the full picture from day one.</p><div className="mt-8"><PrimaryLink to="/services/$slug" params={{ slug: "power-bi-data-analytics" }}>See dashboards</PrimaryLink></div></div>
        <div className="lg:col-span-7"><Link to="/portfolio" search={{ item: "data-analysis-dashboard" }} aria-label="View data analysis dashboard in our work"><img src={analyticsDashboard.url} alt="Product sales and market share data analysis dashboard" loading="lazy" className="w-full rounded-2xl border shadow-elegant transition-transform duration-700 hover:-translate-y-1" /></Link></div>
      </section>

      <section className="on-dark relative overflow-hidden bg-navy-deep py-20 text-on-navy lg:py-28">
        <Ambient trails={false} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5"><Eyebrow light>Our product</Eyebrow><h2 className="text-5xl font-medium leading-none md:text-6xl">Leave Management Software</h2><p className="mt-6 leading-7 text-on-navy-muted">We built it because we needed it ourselves. Employees ask for time off, managers approve it, and everyone sees real leave balances without a spreadsheet being passed around by email.</p><div className="mt-8"><PrimaryLink to="/products/leave-management">View the product</PrimaryLink></div></div>
          <div className="lg:col-span-7"><Link to="/portfolio" search={{ item: "leave-management-dashboard" }} aria-label="View leave management dashboard in Our Work" className="block overflow-hidden rounded-2xl border-8 border-on-navy/10 bg-card shadow-glow"><img src={leaveDashboard.url} alt="Nedd Digital Leave Management Software admin dashboard" className="w-full" /></Link><ul className="mt-6 grid gap-3 sm:grid-cols-2">{LEAVE_FEATURES.slice(0, 6).map((feature) => <li key={feature.title} className="flex gap-2 text-sm text-on-navy-muted"><Check className="h-4 w-4 shrink-0 text-accent" />{feature.title}</li>)}</ul></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><Eyebrow>Our Work</Eyebrow><h2 className="text-5xl font-medium text-navy md:text-6xl">Recent work</h2></div><GhostLink to="/portfolio" light={false}>View all work </GhostLink></div>
        <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {PREVIEW.map((item, index) => (
            <Link key={item.id} to="/portfolio" search={{ item: item.id }} className={`group relative overflow-hidden rounded-2xl border bg-muted ${index === 0 ? "sm:row-span-2 lg:col-span-7" : "lg:col-span-5"}`}>
              <img src={item.cover} alt={item.alt} loading="lazy" className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${item.category === "branding" ? "object-contain p-8" : "object-cover object-top"}`} />
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-navy/85 p-4 text-on-navy backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1"><span className="text-sm font-semibold">{CATEGORY_LABEL[item.category]}</span><ArrowRight className="h-4 w-4" /></div>
            </Link>
          ))}
        </div>
      </section>

      <ProcessSteps steps={STEPS} />
      <CtaBand title="Let's talk about your business." body="Tell us what is slowing you down and we will reply within 24 hours with clear next steps, not a sales pitch." cta="Contact us" />
    </>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero, Eyebrow } from "@/components/site/Blocks";
import { CONTACT, SERVICES } from "@/lib/site";
import { backendReady, submitEnquiry } from "@/lib/contact-submit";

const DESC = "Contact Nedd Digital about bookkeeping, Power BI and Tableau dashboards, websites, software, apps or branding. Call +1 (281) 547-9290.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nedd Digital | Let's Discuss Your Project" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Contact Nedd Digital" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const OPTIONS = [...SERVICES.map((s) => s.name), "Leave Management Software", "Other"];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  company: z.string().trim().max(120).optional(),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().min(10, "Please tell us a little more (at least 10 characters)").max(2000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field = "mt-2 w-full rounded-xl border bg-card px-4 py-3 text-foreground outline-none transition-shadow focus:border-navy-soft focus:ring-2 focus:ring-accent/60 aria-[invalid=true]:border-destructive";

function Page() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      for (const i of r.error.issues) errs[i.path[0] as keyof Errors] ??= i.message;
      setErrors(errs);
      document.getElementById(Object.keys(errs)[0] ?? "")?.focus();
      return;
    }
    setErrors({});
    const v = r.data;
    const form = e.currentTarget;
    if (!backendReady) {
      const body = `Name: ${v.name}\nEmail: ${v.email}\nCompany: ${v.company || "-"}\nService: ${v.service}\n\n${v.message}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Enquiry: ${v.service}`)}&body=${encodeURIComponent(body)}`;
      setSent(true);
      return;
    }
    setSending(true);
    setFailed(false);
    try {
      await submitEnquiry(v);
      form.reset();
      setSent(true);
    } catch (err) {
      console.error(err);
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  const err = (k: keyof Errors) =>
    errors[k] ? <p id={`${k}-error`} className="mt-1.5 text-sm text-destructive">{errors[k]}</p> : null;
  const a = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's discuss your project." lead="Tell us a little about your business and what's not working right now. We'll reply with clear next steps, not a generic sales email." />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-5 lg:px-8 md:py-20">
        <aside className="lg:col-span-2">
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="text-2xl font-semibold text-navy">Nedd Digital</h2>
          <address className="mt-6 space-y-4 not-italic">
            <a href={CONTACT.phoneHref} className="flex items-center gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-navy-soft">
              <Phone className="h-5 w-5 text-navy-soft" /><span><span className="block text-xs text-muted-foreground">Phone</span><span className="font-semibold text-navy">{CONTACT.phone}</span></span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-navy-soft">
              <Mail className="h-5 w-5 text-navy-soft" /><span><span className="block text-xs text-muted-foreground">Email</span><span className="font-semibold text-navy">{CONTACT.email}</span></span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border bg-card p-5">
              <MapPin className="h-5 w-5 text-navy-soft" /><span><span className="block text-xs text-muted-foreground">Address</span><span className="font-semibold text-navy">{CONTACT.address}</span></span>
            </div>
          </address>
        </aside>

        <form onSubmit={submit} noValidate className="rounded-3xl border bg-card p-6 md:p-10 lg:col-span-3">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-navy">Name <span aria-hidden className="text-destructive">*</span></label>
              <input id="name" name="name" autoComplete="name" required className={field} {...a("name")} />
              {err("name")}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-navy">Email <span aria-hidden className="text-destructive">*</span></label>
              <input id="email" name="email" type="email" autoComplete="email" required className={field} {...a("email")} />
              {err("email")}
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-semibold text-navy">Company <span className="font-normal text-muted-foreground">(optional)</span></label>
              <input id="company" name="company" autoComplete="organization" className={field} />
            </div>
            <div>
              <label htmlFor="service" className="text-sm font-semibold text-navy">Service needed <span aria-hidden className="text-destructive">*</span></label>
              <select id="service" name="service" required defaultValue="" className={field} {...a("service")}>
                <option value="" disabled>Choose a service</option>
                {OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
              {err("service")}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-navy">Message <span aria-hidden className="text-destructive">*</span></label>
              <textarea id="message" name="message" rows={6} required className={field} {...a("message")} />
              {err("message")}
            </div>
          </div>
          <button type="submit" disabled={sending} className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            {sending ? "Sending…" : "Let's discuss your project"} <Send className="h-4 w-4" />
          </button>
          <p role="status" className="mt-4 text-sm text-muted-foreground">
            {failed
              ? `Sorry, that didn't go through. Please try again or email us at ${CONTACT.email}.`
              : sent
                ? backendReady
                  ? "Thanks, that's been sent through. We'll get back to you within 24 hours."
                  : "Thanks, your email app is opening. Send the message and we'll get back to you within 24 hours."
                : "We'll reply within 24 hours."}
          </p>
        </form>
      </section>
    </>
  );
}

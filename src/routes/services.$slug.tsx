import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";
import { Header, Footer, Contact, services } from "@/components/site";
import { serviceDetails } from "@/lib/service-details";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = services.find((s) => s.s === params.slug);
    const detail = serviceDetails[params.slug];
    if (!svc || !detail) throw notFound();
    return { slug: svc.s, title: svc.t, detail };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.title} Services — Bookkly` : "Service — Bookkly";
    const d = loaderData?.detail.intro ?? "Bookkeeping and accounting services by Bookkly.";
    const url = loaderData ? `/services/${loaderData.slug}` : "/services";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: loaderData ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: loaderData.title,
          description: d,
          provider: {
            "@type": "ProfessionalService",
            name: "Bookkly",
            email: "Bookkly.com@gmail.com",
            telephone: "+92 310 5760002",
            address: { "@type": "PostalAddress", streetAddress: "1209 Orange Street", addressLocality: "Wilmington", addressRegion: "DE", postalCode: "19801", addressCountry: "US" },
          },
          areaServed: "United States",
        }),
      }] : [],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug, title, detail } = Route.useLoaderData();
  const svc = services.find((s) => s.s === slug)!;
  const I = svc.i;
  const others = services.filter((s) => s.s !== slug);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-ink py-16 text-ink-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-ink-muted">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/services" className="hover:text-primary">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-foreground">{title}</span>
          </nav>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="grid h-20 w-20 place-items-center rounded-3xl bg-primary">
                <I className="h-10 w-10 text-primary-foreground" strokeWidth={1.5} />
              </div>
              <h1 className="mt-8 text-4xl font-semibold leading-[1.08] sm:text-6xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{detail.intro}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                  Get a free quote <ArrowRight className="h-5 w-5" />
                </Link>
                <a href="https://wa.me/923105760002" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink-muted/40 px-8 py-4 font-semibold transition-colors hover:border-primary hover:text-primary">
                  <MessageCircle className="h-5 w-5" /> WhatsApp us
                </a>
              </div>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-ink-muted/20 bg-ink-muted/20">
              {detail.stats.map(([v, l]) => (
                <div key={l} className="bg-ink p-7">
                  <p className="font-display text-3xl font-semibold text-primary">{v}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included + who it's for */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">What's included</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">Everything below is part of the service — no add-ons, no surprise line items.</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {detail.includes.map((x) => (
                <li key={x} className="flex items-start gap-3 rounded-2xl border border-border p-5 transition-colors hover:border-primary">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                  <span className="font-medium">{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-fit rounded-3xl bg-accent p-8 sm:p-10 lg:sticky lg:top-28">
            <h2 className="text-2xl font-semibold">Who it's for</h2>
            <ul className="mt-6 space-y-3">
              {detail.forWho.map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{x}</li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-semibold">The result</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{detail.outcome}</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">
              Start with a free consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border bg-accent/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">A clear, proven process — you'll always know what happens next.</p>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {detail.process.map(([t, d], idx) => (
              <li key={t} className="relative rounded-3xl border border-border bg-background p-7">
                <span className="font-display text-sm font-semibold text-primary">Step 0{idx + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">Common questions about {title.toLowerCase()}</h2>
          <div className="mt-10 space-y-4">
            {detail.faqs.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-border p-6 open:border-primary">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
                  {q}
                  <ChevronRight className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-border py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold sm:text-4xl">Explore our other services</h2>
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-primary">View all <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.slice(0, 3).map(({ s, i: O, t, d }) => (
              <Link key={s} to="/services/$slug" params={{ slug: s }} className="group rounded-3xl border border-border p-8 transition-colors hover:border-primary">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent transition-colors group-hover:bg-primary">
                  <O className="h-7 w-7 text-primary group-hover:text-primary-foreground" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Learn more <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.slice(3).map((s) => (
              <Link key={s.s} to="/services/$slug" params={{ slug: s.s }} className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary">{s.t}</Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

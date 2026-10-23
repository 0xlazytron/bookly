import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Header, Footer, Services, Software } from "@/components/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Bookkeeping & Accounting Services — Bookkly" },
      { name: "description", content: "Monthly bookkeeping, clean-up, reconciliation, payroll, tax prep, AP/AR, reporting and virtual CFO services for US businesses." },
      { property: "og:title", content: "Bookkeeping & Accounting Services — Bookkly" },
      { property: "og:description", content: "Every bookkeeping and accounting service your US business needs, under one roof." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Bookkly Services",
        itemListElement: [
          "Monthly Bookkeeping", "Catch-up & Clean-up", "Bank Reconciliation", "Payroll Management",
          "Tax Preparation Support", "Accounts Payable & Receivable", "Financial Reporting", "Virtual CFO & Advisory",
        ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
      }),
    }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <section className="bg-ink py-20 text-ink-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Bookkly Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-6xl">Every service your books need, under one roof.</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">From daily transactions to strategic forecasting — choose the service you need, or combine them into one monthly plan built around your business.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Get a free quote <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="https://wa.me/923105760002" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink-muted/40 px-8 py-4 font-semibold transition-colors hover:border-primary hover:text-primary">
              <MessageCircle className="h-5 w-5" /> WhatsApp us
            </a>
          </div>
        </div>
      </section>
      <Services />
      <Software />
      <Footer />
    </div>
  );
}

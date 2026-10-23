import { createFileRoute } from "@tanstack/react-router";
import { Header, Hero, Clients, Services, Software, Why, About, Reviews, Stories, Faq, Contact, Footer } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bookkly — Bookkeeping & Accounting Services for US Businesses" },
      { name: "description", content: "Bookkly delivers accurate bookkeeping, payroll, tax prep and CFO-level reporting for US small businesses. 200+ clients, 300+ five-star reviews." },
      { property: "og:title", content: "Bookkly — Bookkeeping & Accounting Services" },
      { property: "og:description", content: "Clean books, clear numbers. Trusted by 200+ US businesses on Upwork and Fiverr." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Bookkly",
        description: "Bookkeeping and accounting services for US small businesses — monthly bookkeeping, clean-up, payroll, tax prep and virtual CFO support.",
        email: "Bookkly.com@gmail.com",
        telephone: "+92 310 5760002",
        address: { "@type": "PostalAddress", streetAddress: "1209 Orange Street", addressLocality: "Wilmington", addressRegion: "DE", postalCode: "19801", addressCountry: "US" },
        areaServed: "United States",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "300" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header /><Hero /><Clients /><Services /><Software /><Why /><About /><Reviews /><Stories /><Faq /><Contact /><Footer />
    </div>
  );
}

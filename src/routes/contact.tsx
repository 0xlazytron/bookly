import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer, Contact, Faq } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bookkly — Free Bookkeeping Consultation" },
      { name: "description", content: "Call, email or WhatsApp Bookkly to book a free 30-minute bookkeeping consultation. Bookkly.com@gmail.com · +92 310 5760002." },
      { property: "og:title", content: "Contact Bookkly" },
      { property: "og:description", content: "Book a free bookkeeping consultation with Bookkly today." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
}

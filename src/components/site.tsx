import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BookOpenCheck, Building2, Calculator, CheckCircle2,
  ChevronDown, Clock, FileSpreadsheet, Landmark, Lock, Mail, MapPin, Menu, MessageSquareQuote,
  Phone, PieChart, Receipt, RefreshCcw, ShieldCheck, Star, TrendingUp, Users, Wallet, X as XIcon,
  Award, Headphones, Sparkles, Play,
} from "lucide-react";
import logoDark from "@/assets/logo-header.png";
import logoLight from "@/assets/logo-footer.png";
import heroImg from "@/assets/hero-businessman.png";
import team from "@/assets/team.jpg";
import desk from "@/assets/desk.jpg";
import c1 from "@/assets/c1.jpg";
import c2 from "@/assets/c2.jpg";
import c3 from "@/assets/c3.jpg";
import c4 from "@/assets/c4.jpg";
import c5 from "@/assets/c5.jpg";
import c6 from "@/assets/c6.jpg";
export const photos = [c1, c2, c3, c4, c5, c6];


import logoQuickbooks from "@/assets/logos/quickbooks.svg";
import logoXero from "@/assets/logos/xero.svg";
import logoSage from "@/assets/logos/sage.svg";
import logoZoho from "@/assets/logos/zoho.svg";
import logoGusto from "@/assets/logos/gusto.svg";
import logoStripe from "@/assets/logos/stripe.svg";
import logoPaypal from "@/assets/logos/paypal.svg";
import logoShopify from "@/assets/logos/shopify.svg";
import logoSquare from "@/assets/logos/square.svg";
import logoHubspot from "@/assets/logos/hubspot.svg";
import logoFacebookWhite from "@/assets/logos/facebook-white.svg";
import logoInstagramWhite from "@/assets/logos/instagram-white.svg";
import logoXWhite from "@/assets/logos/x-white.svg";
import logoYoutubeWhite from "@/assets/logos/youtube-white.svg";
import logoUpworkGreen from "@/assets/logos/upwork-green.svg";
import logoFiverrGreen from "@/assets/logos/fiverr-green.svg";
import logoUpworkWhite from "@/assets/logos/upwork-white.svg";
import logoFiverrWhite from "@/assets/logos/fiverr-white.svg";

const logoMap: Record<string, string> = {
  quickbooks: logoQuickbooks, xero: logoXero, sage: logoSage, zoho: logoZoho,
  gusto: logoGusto, stripe: logoStripe, paypal: logoPaypal, shopify: logoShopify,
  square: logoSquare, hubspot: logoHubspot,
  "facebook:white": logoFacebookWhite, "instagram:white": logoInstagramWhite,
  "x:white": logoXWhite, "youtube:white": logoYoutubeWhite,
  "upwork:14A800": logoUpworkGreen, "fiverr:1DBF73": logoFiverrGreen,
  "upwork:white": logoUpworkWhite, "fiverr:white": logoFiverrWhite,
};

export const icon = (slug: string, color?: string) => logoMap[color ? `${slug}:${color}` : slug] ?? "";

export const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const nav = [
  ["Home", "/"], ["Services", "/services"], ["Why Us", "/#why"], ["About", "/#about"],
  ["Reviews", "/#reviews"], ["FAQ", "/#faq"], ["Contact", "/contact"],
] as const;

export const services = [
  { s: "monthly-bookkeeping", i: BookOpenCheck, t: "Monthly Bookkeeping", d: "Categorized transactions, reconciled accounts and closed books every month — on time." },
  { s: "catch-up-clean-up", i: RefreshCcw, t: "Catch-up & Clean-up", d: "Months or years behind? We rebuild messy ledgers into audit-ready records fast." },
  { s: "bank-reconciliation", i: Landmark, t: "Bank Reconciliation", d: "Every bank, card and loan account matched line-by-line so your balances are true." },
  { s: "payroll-management", i: Wallet, t: "Payroll Management", d: "Accurate payroll runs, filings and contractor 1099s through Gusto, ADP or QuickBooks." },
  { s: "tax-preparation", i: Receipt, t: "Tax Preparation Support", d: "Year-end packages, sales tax and CPA-ready reports that make filing painless." },
  { s: "accounts-payable-receivable", i: FileSpreadsheet, t: "Accounts Payable & Receivable", d: "Bills paid, invoices chased and cash flow kept healthy without the busywork." },
  { s: "financial-reporting", i: PieChart, t: "Financial Reporting", d: "P&L, balance sheet and cash flow statements explained in plain English." },
  { s: "virtual-cfo", i: TrendingUp, t: "Virtual CFO & Advisory", d: "Budgets, forecasts and KPI dashboards to plan growth with confidence." },
];

export const software = [
  ["QuickBooks", "quickbooks"], ["Xero", "xero"], ["Sage", "sage"], ["Zoho Books", "zoho"],
  ["Gusto", "gusto"], ["Stripe", "stripe"], ["PayPal", "paypal"], ["Shopify", "shopify"],
  ["Square", "square"], ["HubSpot", "hubspot"],
] as const;

export const clients = ["NORTHWIND", "Lumen&Co", "ORBITAL", "Maple Grove", "KESTREL", "Bluepine", "VERTEX LABS", "Harbor St."];

export const reviews = [
  { n: "Jessica M.", r: "E-commerce Founder, Austin TX", p: "upwork", q: "Kumail took two years of chaos and turned it into perfectly reconciled books in under three weeks. Our CPA literally thanked us." },
  { n: "Daniel R.", r: "Owner, Restaurant Group, NJ", p: "fiverr", q: "Responsive, detail-obsessed and genuinely understands small business. Monthly reports arrive like clockwork." },
  { n: "Priya S.", r: "Agency Director, San Diego", p: "upwork", q: "We finally understand our margins. The cash flow forecasting alone paid for the service ten times over." },
  { n: "Mark T.", r: "Contractor, Denver CO", p: "fiverr", q: "Payroll, 1099s, sales tax — handled. I haven't thought about bookkeeping in a year. That's the best review I can give." },
  { n: "Alicia W.", r: "SaaS CEO, Seattle", p: "upwork", q: "Proactive, secure and incredibly organized. Bookkly feels like an in-house finance team at a fraction of the cost." },
  { n: "Chris B.", r: "Real Estate Investor, FL", p: "fiverr", q: "Clean-up across 9 properties and 14 accounts done flawlessly. Five stars isn't enough." },
];

export const faqs = [
  ["What does Bookkly's bookkeeping service include?", "Transaction categorization, bank and credit card reconciliation, month-end close, and a monthly financial report pack (P&L, balance sheet, cash flow), plus a review call when you need it."],
  ["Which accounting software do you work with?", "We're experts in QuickBooks Online & Desktop, Xero, Sage, Zoho Books and Wave, and we integrate with Gusto, Stripe, PayPal, Shopify and Square."],
  ["Can you fix books that are months or years behind?", "Yes. Catch-up and clean-up is one of our specialties — we've rebuilt books spanning multiple years for e-commerce, real estate, agencies and more."],
  ["How is my financial data kept secure?", "We use encrypted, read-only access wherever possible, two-factor authentication, signed NDAs, and never store your banking credentials."],
  ["Do you file taxes?", "We prepare complete, CPA-ready year-end packages and work directly with your CPA or recommend trusted partners for filing."],
  ["How do we get started?", "Book a free consultation. We review your current books, give you a fixed monthly quote, and can begin onboarding within 48 hours."],
];

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  service: z.string().trim().max(80),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(1000),
});

export function Social({ className = "" }: { className?: string }) {
  const items = [
    { n: "Facebook", bg: "bg-[#1877F2]", s: "facebook" },
    { n: "Instagram", bg: "bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5]", s: "instagram" },
    { n: "X", bg: "bg-ink-soft border border-ink-border", s: "x" },
    { n: "YouTube", bg: "bg-[#FF0000]", s: "youtube" },
  ];
  return (
    <div className={`flex gap-3 ${className}`}>
      {items.map((i) => (
        <a key={i.n} href="#" aria-label={i.n} className={`grid h-11 w-11 place-items-center rounded-xl ${i.bg} transition-transform hover:-translate-y-0.5`}>
          <img src={icon(i.s, "white")} alt="" className="h-5 w-5" loading="lazy" />
        </a>
      ))}
      <a href="#" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-xl bg-[#0A66C2] transition-transform hover:-translate-y-0.5">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-ink-foreground"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
      </a>
    </div>
  );
}

export function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-primary" : "text-primary"}`}>
      <span className="h-px w-8 bg-primary" />{children}
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-ink text-ink-muted md:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6 text-[13px]">
          <div className="flex items-center gap-6">
            <a href="tel:+923105760002" className="flex items-center gap-2 hover:text-ink-foreground"><Phone className="h-3.5 w-3.5 text-primary" />+92 310 5760002</a>
            <a href="mailto:Bookkly.com@gmail.com" className="flex items-center gap-2 hover:text-ink-foreground"><Mail className="h-3.5 w-3.5 text-primary" />Bookkly.com@gmail.com</a>
            <span className="hidden items-center gap-2 lg:flex"><Clock className="h-3.5 w-3.5 text-primary" />Mon–Fri · 9am–6pm EST</span>
          </div>
          <div className="flex items-center gap-2"><Star className="h-3.5 w-3.5 fill-star text-star" /><span className="text-ink-foreground">5.0</span> from 300+ reviews on Upwork & Fiverr</div>
        </div>
      </div>
      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="/" aria-label="Bookkly home"><img src={logoDark} alt="Bookkly" className="h-9 w-auto" /></a>
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="text-[15px] font-medium text-foreground/75 transition-colors hover:text-primary">{l}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/923105760002" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5"><WhatsAppIcon className="h-5 w-5" /><span className="hidden xl:inline">WhatsApp</span></a>
            <a href="/contact" className="hidden items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:bg-primary sm:inline-flex">Free Consultation <ArrowRight className="h-4 w-4" /></a>
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden">{open ? <XIcon className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border px-6 py-4 lg:hidden">
            {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block py-3 text-base font-medium">{l}</a>)}
            <a href="/contact" onClick={() => setOpen(false)} className="mt-3 flex justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Free Consultation</a>
          </nav>
        )}
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="grid-lines absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] lg:block">
        <img src={heroImg} alt="Kumail, founder of Bookkly" width={1024} height={1536} className="h-full w-full object-cover object-center" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 items-center lg:py-24">
        <div className="flex flex-col justify-center lg:max-w-[52%]">
          <h1 className="text-[2.5rem] font-semibold leading-[1.04] sm:text-6xl lg:text-[4.75rem]">
            Bookkeeping that lets you <span className="text-primary">focus on growth.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
            Bookkly is your dedicated bookkeeping and accounting partner — reconciled accounts, accurate payroll and investor-grade reports delivered every month.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Book a Free Call <ArrowUpRight className="h-5 w-5" /></a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-ink-border px-8 py-4 text-base font-semibold hover:bg-ink-soft">Explore Services</a>
          </div>
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-border pt-8">
            {[["200+", "Happy clients"], ["300+", "5-star reviews"], ["99.8%", "Accuracy rate"]].map(([a, b]) => (
              <div key={b}><div className="font-display text-3xl font-medium sm:text-4xl">{a}</div><div className="mt-1 text-sm text-ink-muted">{b}</div></div>
            ))}
          </div>
        </div>
        <div className="relative -mx-6 -mb-14 -mt-4 lg:hidden">
          <img src={heroImg} alt="Kumail, founder of Bookkly" width={1024} height={1536} className="h-[430px] w-full object-cover object-top" />
        </div>
      </div>
    </section>
  );
}

export function Clients() {
  return (
    <section className="border-b border-border py-14">
      <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Trusted by growing US businesses</p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee flex w-max gap-16">
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="flex items-center gap-3 text-foreground/45">
              <Building2 className="h-7 w-7" /><span className="font-display text-2xl font-semibold tracking-tight">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div><h2 className="text-4xl font-semibold leading-[1.1] sm:text-[3.25rem]">Complete bookkeeping & accounting, under one roof.</h2></div>
          <p className="text-lg text-muted-foreground lg:max-w-md lg:justify-self-end">From daily transactions to strategic forecasting, every service is delivered by experienced professionals who know US small-business finance.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ s: slug, i: I, t, d }, idx) => (
            <Link key={t} to="/services/$slug" params={{ slug }} className="group relative block bg-background p-8 transition-colors hover:bg-ink hover:text-ink-foreground">
              <span className="absolute right-7 top-7 font-display text-sm text-muted-foreground group-hover:text-ink-muted">0{idx + 1}</span>
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-accent transition-colors group-hover:bg-primary">
                <I className="h-8 w-8 text-primary group-hover:text-primary-foreground" strokeWidth={1.6} />
              </div>
              <h3 className="mt-8 text-[1.2rem] font-medium">{t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground group-hover:text-ink-muted">{d}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Learn more <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Software() {
  return (
    <section id="software" className="bg-muted py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-[3.25rem]">Certified on the tools your business already runs on.</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {software.map(([n, s]) => (
            <div key={s} className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-background px-6 py-9 transition-colors hover:border-primary">
              <img src={icon(s)} alt={`${n} logo`} className="h-12 w-12" loading="lazy" />
              <span className="font-semibold">{n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Why() {
  const items = [
    { i: Award, t: "Proven expertise", d: "Years of hands-on experience across 20+ industries." },
    { i: Lock, t: "Bank-level security", d: "Encrypted access, 2FA and signed NDAs as standard." },
    { i: Clock, t: "On-time, every time", d: "Books closed by the 10th of every month, guaranteed." },
    { i: Headphones, t: "Dedicated expert", d: "One point of contact who truly knows your business." },
    { i: Calculator, t: "Fixed, fair pricing", d: "Transparent monthly plans. No hourly surprises." },
    { i: Sparkles, t: "CPA-ready records", d: "Year-end packages your tax preparer will love." },
  ];
  return (
    <section id="why" className="bg-ink py-24 text-ink-foreground lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          
          <h2 className="text-4xl font-semibold leading-[1.1] sm:text-[3.25rem]">An in-house finance team, without the overhead.</h2>
          <p className="mt-6 text-lg text-ink-muted">We combine accounting rigor with startup-speed communication — so you always know where your money is and where it's going.</p>
          <img src={desk} alt="Reconciling receipts with a calculator and financial dashboard" width={1280} height={1280} loading="lazy" className="mt-10 aspect-[4/3] w-full rounded-3xl object-cover" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map(({ i: I, t, d }) => (
            <div key={t} className="rounded-2xl border border-ink-border p-8 transition-colors hover:bg-ink-soft">
              <I className="h-12 w-12 text-primary" strokeWidth={1.4} />
              <h3 className="mt-7 text-[1.2rem] font-medium">{t}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative">
          <img src={team} alt="The Bookkly team reviewing financial reports" width={1536} height={1152} loading="lazy" className="aspect-[4/3.4] w-full rounded-3xl object-cover" />
          <div className="absolute -bottom-8 right-6 rounded-2xl bg-primary px-8 py-6 text-primary-foreground">
            <div className="font-display text-5xl font-semibold">8+</div><div className="text-sm font-medium">Years of experience</div>
          </div>
        </div>
        <div>
          
          <h2 className="text-4xl font-semibold leading-[1.1] sm:text-[3.25rem]">Built by a bookkeeper who cares about your bottom line.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Bookkly was founded by <strong className="text-foreground">Kumail</strong> to give small businesses the financial clarity usually reserved for large companies. Registered as a single-member company (SMC) and serving clients across the USA, we've helped 200+ founders, agencies, e-commerce brands and contractors take control of their numbers.</p>
          <ul className="mt-8 space-y-4">
            {["QuickBooks & Xero certified expertise", "Top Rated on Upwork · Level Seller on Fiverr", "Serving clients in all 50 states"].map((x) => (
              <li key={x} className="flex items-center gap-3 text-[17px] font-medium"><CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />{x}</li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-border p-5">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-ink font-display text-xl font-semibold text-ink-foreground">K</div>
            <div><div className="font-display text-lg font-semibold">Kumail</div><div className="text-sm text-muted-foreground">Founder & Lead Bookkeeper, Bookkly</div></div>
            <BadgeCheck className="ml-auto h-8 w-8 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center"><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-[3.25rem]">300+ five-star reviews from real clients.</h2></div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[["upwork", "Upwork", "#14A800", "Top Rated · 100% Job Success"], ["fiverr", "Fiverr", "#1DBF73", "Level Seller · 5.0 Rating"]].map(([s, n, c, sub]) => (
            <div key={s} className="flex items-center gap-5 rounded-2xl border border-border bg-background p-6">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl" style={{ backgroundColor: c }}><img src={icon(s ?? "", "white")} alt={`${n} logo`} className="h-9 w-9" /></div>
              <div>
                <div className="flex items-center gap-2"><span className="font-display text-xl font-semibold">{n}</span><span className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-star text-star" />)}</span></div>
                <div className="text-sm text-muted-foreground">{sub}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <figure key={r.n} className="flex flex-col rounded-3xl border border-border bg-background p-8">
              <div className="flex items-center justify-between">
                <MessageSquareQuote className="h-10 w-10 text-primary" strokeWidth={1.4} />
                <img src={icon(r.p, r.p === "upwork" ? "14A800" : "1DBF73")} alt={r.p} className="h-6 w-6" loading="lazy" />
              </div>
              <div className="mt-6 flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-star text-star" />)}</div>
              <blockquote className="mt-4 flex-1 text-[17px] leading-relaxed">"{r.q}"</blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <img src={photos[idx]} alt={r.n} width={96} height={96} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div><div className="font-semibold">{r.n}</div><div className="text-sm text-muted-foreground">{r.r}</div></div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stories() {
  const [active, setActive] = useState<number | null>(null);
  const r = active === null ? null : reviews[active];
  return (
    <section id="stories" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="text-4xl font-semibold leading-[1.1] sm:text-[3.25rem]">Hear it from our clients.</h2>
          <p className="text-lg text-muted-foreground lg:max-w-md lg:justify-self-end">Short video stories from founders and owners who trust Bookkly with their books.</p>
        </div>
        <div className="mt-12 flex snap-x gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {reviews.slice(0, 4).map((x, i) => (
            <button key={x.n} onClick={() => setActive(i)} className="group relative aspect-[9/16] w-[78vw] max-w-[340px] shrink-0 snap-start md:w-auto md:max-w-none overflow-hidden rounded-3xl text-left lg:w-auto" aria-label={`Watch ${x.n}'s story`}>
              <img src={photos[i]} alt={x.n} loading="lazy" width={768} height={1152} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/90" />
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="rounded-full bg-gradient-to-tr from-star to-primary p-0.5"><img src={photos[i]} alt="" className="h-11 w-11 rounded-full border-2 border-ink object-cover" /></span>
                <span className="text-sm font-semibold text-ink-foreground">{x.n.split(" ")[0]}</span>
              </div>
              <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink-foreground/25 backdrop-blur transition-colors group-hover:bg-primary"><Play className="ml-1 h-8 w-8 fill-ink-foreground text-ink-foreground" /></span>
              <div className="absolute inset-x-5 bottom-5 text-ink-foreground">
                <div className="text-lg font-semibold">{x.n}</div>
                <div className="text-sm text-ink-foreground/75">{x.r}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {r && active !== null && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-4" onClick={() => setActive(null)}>
          <div className="relative aspect-[9/16] h-[min(85vh,760px)] overflow-hidden rounded-3xl" onClick={(e) => e.stopPropagation()}>
            <img src={photos[active]} alt={r.n} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/95" />
            <div className="absolute inset-x-4 top-4 h-0.5 overflow-hidden rounded-full bg-ink-foreground/30"><div className="story-progress h-full bg-ink-foreground" /></div>
            <button onClick={() => setActive(null)} aria-label="Close" className="absolute right-4 top-8 grid h-10 w-10 place-items-center rounded-full bg-ink/50 text-ink-foreground"><XIcon className="h-5 w-5" /></button>
            <div className="absolute inset-x-6 bottom-8 text-ink-foreground">
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-star text-star" />)}</div>
              <p className="mt-3 text-lg leading-relaxed">"{r.q}"</p>
              <div className="mt-4 font-semibold">{r.n}</div><div className="text-sm text-ink-foreground/75">{r.r}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          
          <h2 className="text-4xl font-semibold leading-[1.1] sm:text-[3.25rem]">Questions, answered.</h2>
          <p className="mt-6 text-lg text-muted-foreground">Can't find what you need? Our team replies within one business day.</p>
          <a href="/contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">Ask us directly <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left" aria-expanded={open === i}>
                <span className="font-display text-lg font-semibold sm:text-xl">{q}</span>
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors ${open === i ? "bg-primary text-primary-foreground" : "bg-muted"}`}><ChevronDown className={`h-5 w-5 transition-transform ${open === i ? "rotate-180" : ""}`} /></span>
              </button>
              {open === i && <p className="pb-6 pr-14 text-[16px] leading-relaxed text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = contactSchema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs); return;
    }
    setErrors({}); setSent(true); e.currentTarget.reset();
  };
  const field = "w-full rounded-xl border border-input bg-background px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-primary";
  return (
    <section id="contact" className="bg-ink py-24 text-ink-foreground lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        <div>
          
          <h2 className="text-4xl font-semibold leading-[1.1] sm:text-[3.25rem]">Let's get your books in perfect order.</h2>
          <p className="mt-6 max-w-md text-lg text-ink-muted">Book a free 30-minute consultation. We'll review your books and send a fixed quote — no obligation.</p>
          <div className="mt-10 space-y-5">
            {[[Phone, "Call us", "+92 310 5760002"], [Mail, "Email", "Bookkly.com@gmail.com"], [MapPin, "Office", "1209 Orange Street, Wilmington, DE 19801, USA"], [Users, "Clients", "200+ businesses served"]].map(([I, l, v]) => {
              const Ic = I as typeof Phone;
              return (
                <div key={l as string} className="flex items-center gap-5">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary"><Ic className="h-6 w-6 text-primary-foreground" /></div>
                  <div><div className="text-sm text-ink-muted">{l as string}</div><div className="font-display text-lg font-semibold">{v as string}</div></div>
                </div>
              );
            })}
          </div>
        </div>
        <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-background p-7 text-foreground sm:p-10">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="h-16 w-16 text-primary" strokeWidth={1.4} />
              <h3 className="mt-6 text-2xl font-semibold">Thank you!</h3>
              <p className="mt-2 text-muted-foreground">We'll be in touch within one business day.</p>
              <button type="button" onClick={() => setSent(false)} className="mt-6 font-semibold text-primary">Send another message</button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              {[["name", "Full name", "text"], ["email", "Email address", "email"], ["company", "Company (optional)", "text"]].map(([n, l, t]) => (
                <label key={n} className={n === "company" ? "" : ""}>
                  <span className="mb-2 block text-sm font-semibold">{l}</span>
                  <input name={n} type={t} maxLength={255} className={field} />
                  {errors[n ?? ""] && <span className="mt-1 block text-sm text-destructive">{errors[n ?? ""]}</span>}
                </label>
              ))}
              <label>
                <span className="mb-2 block text-sm font-semibold">Service needed</span>
                <select name="service" className={field} defaultValue={services[0]?.t}>{services.map((s) => <option key={s.t}>{s.t}</option>)}</select>
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">How can we help?</span>
                <textarea name="message" rows={5} maxLength={1000} className={field} />
                {errors["message"] && <span className="mt-1 block text-sm text-destructive">{errors["message"]}</span>}
              </label>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-ink sm:col-span-2">Request Free Consultation <ArrowRight className="h-5 w-5" /></button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    ["Services", services.slice(0, 6).map((s) => [s.t, `/services/${s.s}`])],
    ["Company", [["About Us", "/#about"], ["Why Bookkly", "/#why"], ["Reviews", "/#reviews"], ["FAQ", "/#faq"], ["Contact", "/contact"]]],
    ["Contact", [["+92 310 5760002", "tel:+923105760002"], ["Bookkly.com@gmail.com", "mailto:Bookkly.com@gmail.com"], ["WhatsApp us", "https://wa.me/923105760002"], ["1209 Orange Street, Wilmington, DE 19801, USA", "/contact"]]],
  ] as const;
  return (
    <footer className="border-t border-ink-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-ink-border py-14 md:flex-row md:items-center">
          <h3 className="max-w-xl text-3xl font-semibold sm:text-4xl">Ready for stress-free books? <span className="text-primary">Let's talk.</span></h3>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground">Get Started <ArrowUpRight className="h-5 w-5" /></a>
        </div>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logoLight} alt="Bookkly" className="h-10 w-auto" />
            <p className="mt-6 max-w-sm leading-relaxed text-ink-muted">Professional bookkeeping and accounting for US small businesses. Accurate, secure and always on time.</p>
            <Social className="mt-8" />
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <h4 className="font-display text-lg font-semibold">{h}</h4>
              <ul className="mt-6 space-y-3.5">{items.map(([x, href]) => <li key={x}><a href={href} className="text-ink-muted transition-colors hover:text-primary">{x}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-ink-border py-8 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Bookkly (SMC). All rights reserved.</span>
          <div className="flex gap-6"><a href="#" className="hover:text-ink-foreground">Privacy Policy</a><a href="#" className="hover:text-ink-foreground">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
}


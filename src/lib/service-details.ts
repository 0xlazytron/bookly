export type ServiceDetail = {
  intro: string;
  includes: string[];
  forWho: string[];
  outcome: string;
  stats: [string, string][];
  process: [string, string][];
  faqs: [string, string][];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "monthly-bookkeeping": {
    intro: "A dedicated bookkeeper keeps your ledger current every single month — every transaction categorized, every account reconciled and your books closed by the 10th.",
    includes: ["Transaction categorization", "Bank & credit card reconciliation", "Month-end close by the 10th", "Monthly P&L, balance sheet & cash flow", "Receipt and document management", "Monthly review call on request"],
    forWho: ["Founders who want to stop doing their own books", "Growing e-commerce & agency teams", "Businesses preparing for funding or loans"],
    outcome: "Accurate, up-to-date books you can make decisions with — without lifting a finger.",
    stats: [["10th", "Books closed by the 10th, every month"], ["200+", "US businesses served"], ["48h", "Onboarding from signed quote"]],
    process: [
      ["Connect your accounts", "Secure, read-only connections to your bank, cards and payment platforms — set up in one call."],
      ["We categorize everything", "Every transaction is coded to the right account using rules built for your business."],
      ["Reconcile & review", "All accounts are matched line-by-line and anything unusual is flagged to you."],
      ["Close & report", "Books close by the 10th with your P&L, balance sheet and cash flow in plain English."],
    ],
    faqs: [
      ["How quickly are my books updated?", "Transactions are categorized weekly at minimum, and the month is fully closed and reported by the 10th of the following month."],
      ["Do I need to switch accounting software?", "No. We work inside your existing QuickBooks, Xero, Sage or Zoho setup — and if you have none, we set one up for you."],
      ["Can I reach my bookkeeper between closes?", "Yes. You get a dedicated bookkeeper reachable by email and WhatsApp, plus a monthly review call whenever you want one."],
    ],
  },
  "catch-up-clean-up": {
    intro: "Months or years behind? We rebuild messy or missing records into clean, audit-ready books quickly and with full documentation.",
    includes: ["Full historical review of your ledger", "Missing transactions recovered from statements", "Duplicate and error correction", "Opening balance fixes", "Reconciled accounts for every period", "CPA-ready summary pack"],
    forWho: ["Owners facing a tax deadline", "Businesses switching bookkeepers", "Companies with years of untouched books"],
    outcome: "A clean starting point — fully reconciled books, usually within 2–4 weeks.",
    stats: [["2–4 wks", "Typical turnaround, even for multi-year backlogs"], ["9 yrs", "Longest backlog we've rebuilt"], ["100%", "Documented, audit-ready workpapers"]],
    process: [
      ["Free diagnostic review", "We assess how far behind the books are and give you a fixed quote — no hourly surprises."],
      ["Gather the records", "We pull statements and history directly from your banks and platforms wherever possible."],
      ["Rebuild period by period", "Every month is rebuilt, reconciled and documented, oldest to newest."],
      ["Hand over clean books", "You receive fully reconciled books plus a CPA-ready summary pack for every period."],
    ],
    faqs: [
      ["How far back can you go?", "We've rebuilt books spanning up to nine years. As long as statements exist, we can reconstruct the records."],
      ["What does it cost?", "Catch-up is quoted as a fixed fee after the free diagnostic — it depends on months behind and transaction volume, never hourly."],
      ["Will my CPA accept the work?", "Yes. Every period ships with reconciliations and workpapers your CPA can rely on, and we coordinate with them directly."],
    ],
  },
  "bank-reconciliation": {
    intro: "Every bank, credit card, loan and merchant account matched line-by-line so the balances in your books equal reality.",
    includes: ["Bank and card account matching", "Stripe, PayPal & Shopify payouts", "Loan and line-of-credit tracking", "Uncleared item investigation", "Monthly reconciliation reports", "Fraud and error flagging"],
    forWho: ["Businesses with many accounts", "E-commerce sellers with payout platforms", "Anyone unsure if their balances are right"],
    outcome: "True, verified balances and early warning of errors or fraud.",
    stats: [["Line-by-line", "Every transaction matched, none skipped"], ["All platforms", "Banks, cards, Stripe, PayPal, Shopify, Square"], ["Monthly", "Signed-off reconciliation reports"]],
    process: [
      ["Map every account", "We list every bank, card, loan and merchant account and how money moves between them."],
      ["Match line-by-line", "Each transaction is matched against the statement — payouts, fees and transfers included."],
      ["Investigate exceptions", "Uncleared, duplicate or missing items are chased down and resolved, not ignored."],
      ["Report & sign off", "You get a monthly reconciliation report showing every account ties to reality."],
    ],
    faqs: [
      ["Can you reconcile Stripe, PayPal and Shopify payouts?", "Yes — including fees, refunds, chargebacks and reserves, so deposits match your books exactly."],
      ["What if my accounts have never been reconciled?", "That's common. We start with a one-time catch-up reconciliation, then keep you current monthly."],
      ["Will this catch fraud or errors?", "Reconciliation is the first line of defense — unauthorized charges, double payments and bank errors surface immediately."],
    ],
  },
  "payroll-management": {
    intro: "Accurate, on-time payroll for employees and contractors through Gusto, ADP or QuickBooks Payroll — including filings and year-end forms.",
    includes: ["Payroll runs on your schedule", "Federal & state payroll tax filings", "Contractor payments and 1099s", "W-2 preparation", "New hire onboarding setup", "Payroll journal entries in your books"],
    forWho: ["Small teams of 1–50 employees", "Businesses hiring contractors", "Owners tired of payroll deadlines"],
    outcome: "Everyone paid correctly and on time, with no penalty notices.",
    stats: [["On time", "Every payroll run, every deadline"], ["1–50", "Team sizes we support"], ["0", "Penalty notices — that's the goal, and our record"]],
    process: [
      ["Set up or take over", "We configure Gusto, ADP or QuickBooks Payroll — or take over your existing setup cleanly."],
      ["Run payroll on schedule", "Weekly, bi-weekly or monthly runs, reviewed before every submission."],
      ["File the taxes", "Federal and state payroll tax filings handled on every deadline."],
      ["Close the year", "W-2s and 1099s prepared and filed, with payroll entries posted to your books."],
    ],
    faqs: [
      ["Which payroll platforms do you support?", "Gusto, ADP and QuickBooks Payroll. If you're on something else, we manage a clean migration."],
      ["Do you handle contractors and 1099s?", "Yes — contractor payments, W-9 collection and 1099 preparation and filing are all included."],
      ["What about multi-state payroll?", "We handle state registrations and filings for teams spread across multiple states."],
    ],
  },
  "tax-preparation": {
    intro: "We prepare complete, CPA-ready year-end packages and handle sales tax so filing season is calm instead of chaotic.",
    includes: ["Year-end close and adjustments", "CPA-ready financial package", "Sales tax calculation & filing", "1099 preparation and filing", "Depreciation schedules", "Direct coordination with your CPA"],
    forWho: ["LLCs, S-Corps and sole proprietors", "Multi-state online sellers", "Businesses that dread tax season"],
    outcome: "Lower CPA fees, fewer surprises and filings that go out on time.",
    stats: [["CPA-ready", "Packages your accountant can file from directly"], ["On time", "Every filing deadline tracked and met"], ["Multi-state", "Sales tax handled across states"]],
    process: [
      ["Close the year cleanly", "Adjusting entries, depreciation and accruals posted so the year is complete and accurate."],
      ["Build the package", "A CPA-ready pack with statements, schedules and documentation for every number."],
      ["Handle sales tax", "Calculations and filings across the states where you have nexus."],
      ["Coordinate the filing", "We work directly with your CPA — or introduce a trusted partner — until the return is filed."],
    ],
    faqs: [
      ["Do you file the tax return itself?", "We prepare everything and coordinate directly with your CPA, who signs and files. If you need one, we recommend trusted partners."],
      ["Can you handle sales tax in multiple states?", "Yes — we track nexus, calculate what's owed and file in each state on schedule."],
      ["Will this lower my CPA's bill?", "Almost always. CPAs charge for cleanup; a complete, documented package means they only pay attention to filing."],
    ],
  },
  "accounts-payable-receivable": {
    intro: "Bills paid on time, invoices sent and followed up — so cash keeps flowing and nothing slips through the cracks.",
    includes: ["Invoice creation and sending", "Payment reminders and collections", "Bill entry and scheduling", "Vendor management", "AR & AP aging reports", "Cash flow monitoring"],
    forWho: ["Service businesses with many invoices", "Companies with slow-paying clients", "Teams managing many vendors"],
    outcome: "Faster payments, fewer late fees and a healthier bank balance.",
    stats: [["Faster", "Invoices chased until they're paid"], ["Never late", "Bills scheduled before their due dates"], ["Weekly", "Aging reports so you always know who's outstanding"]],
    process: [
      ["Set up your workflows", "Invoice templates, approval flows and payment schedules built around how you work."],
      ["Send & chase invoices", "Invoices go out on time and polite, persistent follow-up continues until payment lands."],
      ["Schedule every bill", "Bills are entered, approved and scheduled so vendors are paid on time — never early, never late."],
      ["Report the position", "Weekly AR/AP aging and cash flow visibility so nothing surprises you."],
    ],
    faqs: [
      ["Will you chase my clients for payment?", "Yes — professionally. We send reminders and follow-ups in your company's voice until invoices are paid."],
      ["Do you make the actual payments?", "We prepare and schedule payments for your approval. Money never moves without your sign-off."],
      ["Can you manage vendor relationships?", "We handle vendor onboarding, W-9 collection, statements and payment queries on your behalf."],
    ],
  },
  "financial-reporting": {
    intro: "Clear monthly reports — P&L, balance sheet and cash flow — explained in plain English so you actually understand your numbers.",
    includes: ["Monthly financial statements", "Custom KPI reports", "Budget vs. actual comparisons", "Profit margin by product or client", "Investor and lender report packs", "Plain-English summary every month"],
    forWho: ["Owners who want clarity, not spreadsheets", "Businesses reporting to investors", "Companies applying for loans"],
    outcome: "Numbers you understand and trust, every month.",
    stats: [["Plain English", "Every report explained, not just sent"], ["Monthly", "A consistent reporting rhythm you can rely on"], ["Custom", "KPIs built around your business model"]],
    process: [
      ["Define your KPIs", "We identify the numbers that actually drive your business — margin, CAC, utilization, runway."],
      ["Build the report pack", "Statements, KPI dashboards and budget comparisons designed for how you read them."],
      ["Deliver every month", "A consistent pack arrives on schedule, every month, without you asking."],
      ["Explain what matters", "A plain-English summary highlights what changed, why it matters and what to watch."],
    ],
    faqs: [
      ["What reports do I get each month?", "Profit & loss, balance sheet and cash flow statement, plus your custom KPI dashboard and a written summary."],
      ["Can you build reports for investors or lenders?", "Yes — we prepare investor updates and lender packs formatted to what banks and VCs expect."],
      ["I don't read financial statements. Is this for me?", "Especially for you. Every pack comes with a plain-English explanation of what the numbers mean for your decisions."],
    ],
  },
  "virtual-cfo": {
    intro: "Strategic finance support without a full-time CFO salary — budgets, forecasts and KPI dashboards that help you plan growth with confidence.",
    includes: ["Annual budgets and forecasts", "Cash flow forecasting", "KPI dashboards", "Pricing and margin analysis", "Fundraising and lender preparation", "Quarterly strategy sessions"],
    forWho: ["Businesses scaling past $500k revenue", "Founders preparing to raise capital", "Owners planning big decisions"],
    outcome: "A clear financial plan and a partner to help you hit it.",
    stats: [["$500k+", "Revenue stage where this pays for itself"], ["Quarterly", "Strategy sessions with your dedicated advisor"], ["13-week", "Rolling cash flow forecast, always current"]],
    process: [
      ["Understand the business", "A deep-dive on your model, margins, goals and the decisions ahead of you."],
      ["Build the financial plan", "Annual budget, hiring plan and a 13-week rolling cash flow forecast."],
      ["Track the KPIs", "A live dashboard of the metrics that determine whether the plan is working."],
      ["Meet every quarter", "Strategy sessions to review performance, adjust the plan and pressure-test big decisions."],
    ],
    faqs: [
      ["How is this different from bookkeeping?", "Bookkeeping records what happened. A virtual CFO helps you decide what happens next — budgets, pricing, hiring and cash planning."],
      ["Can you help me raise funding or a loan?", "Yes — we build the financial model, forecasts and data room materials investors and lenders ask for."],
      ["What does it cost compared to a full-time CFO?", "A fraction. You get senior financial leadership on a monthly plan, without a six-figure salary."],
    ],
  },
};

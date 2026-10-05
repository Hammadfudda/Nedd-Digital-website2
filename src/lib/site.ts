export const CONTACT = {
  company: "Nedd Digital",
  phone: "+1 (281) 547-9290",
  phoneHref: "tel:+12815479290",
  email: "info@nedddigital.com",
  address: "111 Town Square Place, Jersey City, NJ",
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  problemTitle: string;
  problems: string[];
  solution: string;
  offerings: { title: string; body: string; example?: string }[];
  deliverables: string[];
  outcomes: { title: string; body: string }[];
  process: { title: string; body: string }[];
  faqs?: { q: string; a: string }[];
  cta: string;
  related: { slug: string; prompt: string };
};

const standardProcess = [
  { title: "Discover", body: "We talk through how your business works today and what is getting in the way." },
  { title: "Plan", body: "You get a clear written scope, timeline and price before any work starts." },
  { title: "Build", body: "We do the work in stages and share progress so nothing arrives as a surprise." },
  { title: "Review", body: "You test and give feedback. We adjust until it fits how you actually work." },
  { title: "Launch", body: "We hand over, walk you through it and stay available for support." },
];

export const SERVICES: Service[] = [
  {
    slug: "bookkeeping-quickbooks",
    name: "Bookkeeping & QuickBooks",
    short: "Accurate, reconciled books in QuickBooks, closed every month and ready for your CPA.",
    metaTitle: "Bookkeeping & QuickBooks Services | Nedd Digital",
    metaDescription:
      "Monthly QuickBooks bookkeeping, reconciliation, AR/AP, job costing, cleanup and migration for small and growing businesses.",
    heroTitle: "Books you can actually trust, every single month.",
    heroLead: "We handle the day to day QuickBooks work so your numbers stay accurate, your accounts stay reconciled, and you're never the one scrambling to explain a gap at tax time.",
    problemTitle: "What usually goes wrong before we start",
    problems: ["Nobody has reconciled the accounts in months, so the real bank balance is a guess.", "Transactions get dumped into the wrong category, so the P&L doesn't actually show where the money went.", "Invoices pile up unpaid and cash gets tight even though revenue looks fine on paper.", "Tax season turns into a scramble through receipts and missing expenses that should have been filed as they happened."],
    solution: "We take over the file, clean up what's behind, and then keep it current every month. Every transaction gets recorded and categorized properly. Every account gets reconciled against the actual bank and card statements, which is how we catch duplicate charges and mistakes before they become a bigger problem. At month end, we close the books properly and hand you a P&L and balance sheet you can actually rely on. If your books are months behind right now, that's fine: cleanup is something we do before ongoing monthly work starts, not a separate crisis to deal with later.",
        offerings: [
      {
        title: "Transaction entry & categorization",
        body: "Every time money moves in or out of your business, we record it in QuickBooks and assign it to the correct account.",
        example: "A $1,200 insurance payment is recorded as Insurance Expense, not just 'Payment', so at year end you know exactly what you spent on insurance versus rent or supplies.",
      },
      {
        title: "Bank & credit card reconciliation",
        body: "We match every QuickBooks transaction against your bank and card statements. This catches errors, duplicate entries, missed transactions and potential fraud.",
      },
      {
        title: "Accounts receivable & payable",
        body: "We track who owes you and how overdue they are, and who you need to pay and when, so you know your real cash position.",
      },
      {
        title: "Payroll allocation & job costing",
        body: "Labor and costs assigned to specific jobs, projects or departments so you can see whether each job was profitable.",
      },
      {
        title: "Monthly close",
        body: "We review and finalize transactions, make adjusting entries, reconcile all accounts and produce your P&L and Balance Sheet.",
      },
      {
        title: "Chart of accounts",
        body: "A clean, specific account structure (Marketing, Software, Insurance…) so your reports actually mean something.",
      },
    ],
    deliverables: [
      "QuickBooks setup with proper chart of accounts and opening balances",
      "QuickBooks cleanup of messy or outdated files",
      "Migration from QuickBooks Desktop to Online, or from Xero, Wave or FreshBooks",
      "Inventory and cost of goods sold tracking",
      "Job and project costing",
      "Management of multiple related companies",
      "Monthly P&L and Balance Sheet",
    ],
    outcomes: [
      { title: "Clear cash position", body: "Know what's in the bank, what's owed to you and what you owe." },
      { title: "Ready for your CPA", body: "Closed, reconciled books make tax preparation faster and cleaner." },
      { title: "Ready for lenders", body: "Accurate statements are what banks ask for when you apply for credit." },
    ],
    process: [
      { title: "Review", body: "We look at your current QuickBooks file (or set one up) and agree what needs doing." },
      { title: "Clean up", body: "If the books are behind or messy, we bring them current first." },
      { title: "Monthly bookkeeping", body: "Ongoing entry, categorization and reconciliation throughout the month." },
      { title: "Close & report", body: "Monthly close with your P&L and Balance Sheet delivered." },
    ],
    faqs: [
      { q: "Do you prepare tax returns?", a: "No. We keep your books accurate and closed so your CPA or tax preparer can work from clean numbers." },
      { q: "Do I need QuickBooks already?", a: "No. We can set up QuickBooks from scratch or migrate you from Desktop, Xero, Wave or FreshBooks." },
      { q: "My books are months behind. Can you help?", a: "Yes. QuickBooks cleanup is a standalone service, and we usually do it before ongoing monthly work begins." },
      { q: "Is a dashboard included?", a: "Every bookkeeping package includes a free historical Power BI dashboard covering up to 3 years of data (without automatic refresh)." },
    ],
    cta: "Talk about your books",
    related: { slug: "power-bi-data-analytics", prompt: "Need clearer financial reporting?" },
  },
  {
    slug: "power-bi-data-analytics",
    name: "Power BI & Data Analytics",
    short: "Power BI and Tableau dashboards built on your QuickBooks, Excel and SQL data.",
    metaTitle: "Power BI & Tableau Dashboards, Data Analytics | Nedd Digital",
    metaDescription:
      "Power BI and Tableau dashboards for cash flow, P&L, AR aging and KPIs, built from QuickBooks, Excel and SQL data.",
    heroTitle: "Turn the data you already have into answers, not more spreadsheets.",
    heroLead: "Whether your numbers live in QuickBooks, Excel, SQL or somewhere else entirely, we build Power BI or Tableau dashboards around the actual decisions you need to make, not a generic template full of charts nobody asked for.",
    problemTitle: "The problem isn't a lack of reports",
    problems: ["A monthly report lands in your inbox as a spreadsheet, and it takes an hour to read and still doesn't answer the question you had.", "Cash flow surprises happen because nobody can see money coming in and going out side by side, in one place.", "Your data lives in three different systems and never actually talks to each other."],
    solution: "We start by figuring out what you actually need to know, then connect the data sources behind it. The dashboard gets built around that question, with filters and drill downs so you can explore it yourself instead of requesting a new version every time something changes. You get a walkthrough at the end so your team actually uses it, instead of it sitting there unopened. If your data is scattered across QuickBooks, Excel files and a database that nobody fully understands anymore, that's a normal starting point, not a blocker.",
        offerings: [
      { title: "Cash flow dashboards", body: "Money in and money out over time, so you can spot tight months before they arrive." },
      { title: "P&L dashboards", body: "Revenue, expenses and margin by month, category or department, with period comparisons." },
      { title: "AR aging", body: "Who owes you, how much and how long it's been outstanding." },
      { title: "Business performance & KPIs", body: "The handful of numbers that matter for your business, in one view." },
      { title: "Tableau dashboards", body: "Interactive Tableau views for teams that already work in Tableau." },
      { title: "Excel & SQL reporting", body: "Cleaner Excel reports and SQL queries that pull the right numbers together." },
    ],
    deliverables: [
      "Connections to QuickBooks, Excel, SQL and other business data",
      "Data model built for your reporting questions",
      "Interactive Power BI or Tableau reports with filters and detailed views",
      "Before and after comparisons across reporting periods",
      "Walkthrough so your team can use the dashboards confidently",
    ],
    outcomes: [
      { title: "Faster answers", body: "Filter and drill in yourself instead of waiting for a new report." },
      { title: "Fewer surprises", body: "Cash and receivables trends become visible early." },
      { title: "One source", body: "Numbers from different systems shown together in one place." },
    ],
    process: [
      { title: "Questions first", body: "We agree what you need to know before choosing charts." },
      { title: "Connect data", body: "We connect QuickBooks, Excel, SQL or other sources." },
      { title: "Build & review", body: "A first version to react to, then refinements." },
      { title: "Hand over", body: "Training and support so the dashboards get used." },
    ],
    faqs: [
      { q: "Do I need Power BI licenses?", a: "It depends on how you want to share dashboards. We'll explain the options during the first call." },
      { q: "Can you use data outside QuickBooks?", a: "Yes. Excel files, SQL databases and other business data can be combined with QuickBooks data." },
    ],
    cta: "Discuss your dashboard",
    related: { slug: "custom-software-development", prompt: "Need a system built around your business?" },
  },
  {
    slug: "website-design-development",
    name: "Website Design & Development",
    short: "Fast, responsive business websites and landing pages that explain what you do clearly.",
    metaTitle: "Website Design & Development | Nedd Digital",
    metaDescription:
      "Business websites and landing pages: modern design, responsive development, working forms and deployment support.",
    heroTitle: "A website that tells people what you do before they have to ask.",
    heroLead: "We design and build business websites and landing pages that load fast, work properly on a phone, and make it obvious how to get in touch, because that's usually the entire job a website needs to do.",
    problemTitle: "Why the current site isn't pulling its weight",
    problems: ["It looks dated and doesn't reflect the quality of the actual work you do.", "It's hard to use on a phone, which is where most visitors actually arrive from.", "A new visitor can't tell within a few seconds what you offer or how to reach you."],
    solution: "We start with the problem your customers actually have, not a template, and structure the site around getting them to the answer quickly. From there we design and build something clean and responsive, with the forms, booking links or content sections you actually need, and nothing you don't. A site built this way keeps working for you long after launch, because new pages and sections can be added without starting over.",
            offerings: [
      { title: "Website design", body: "A modern interface with clear hierarchy that fits your brand." },
      { title: "Responsive development", body: "Built to work properly on phones, tablets and desktops." },
      { title: "Business websites & landing pages", body: "Company websites with several pages or focused pages for a single offer." },
      { title: "Website functionality", body: "Contact forms, booking links, content sections and integrations." },
    ],
    deliverables: [
      "Site structure and page content plan",
      "Custom design in your brand",
      "Responsive build with SEO basics",
      "Deployment and domain setup",
      "Ongoing support where needed",
    ],
    outcomes: [
      { title: "Clear message", body: "Visitors understand what you do and how to reach you." },
      { title: "Works everywhere", body: "A consistent experience on every device." },
      { title: "Easy to grow", body: "Built so new pages and sections can be added later." },
    ],
    process: standardProcess,
    cta: "Plan your website",
    related: { slug: "custom-software-development", prompt: "Need more than a website?" },
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    short: "Internal systems, workflow tools and web applications built around how you work.",
    metaTitle: "Custom Software Development | Nedd Digital",
    metaDescription:
      "Custom business software: internal systems, workflow tools, dashboards and web applications designed around your processes.",
    heroTitle: "Software shaped around your process, not the other way round.",
    heroLead:
      "When spreadsheets and standard tools stop fitting, we build internal systems and web applications around how your business actually runs, not how a generic tool assumes every business runs.",
    problemTitle: "Where standard tools stop being enough",
    problems: [
      "Key processes run on a patchwork of spreadsheets and email.",
      "Generic software forces workarounds for the way your team works.",
      "Managers can't see status or history without asking around.",
    ],
    solution:
      "We start with the problem, map the process, then build a focused web application with the roles, workflows and views your team needs.",
    offerings: [
      { title: "Custom business software", body: "Applications built for a specific business need." },
      { title: "Internal business systems", body: "Tools your team uses daily to manage records, requests and operations." },
      { title: "Workflow systems", body: "Requests, approvals and status tracking with clear roles." },
      { title: "Dashboards & web applications", body: "Web applications with reporting views for managers." },
    ],
    deliverables: [
      "Process map and written scope",
      "User roles and permissions",
      "Web application with dashboard views",
      "Testing with your team",
      "Deployment, handover and support",
    ],
    outcomes: [
      { title: "One place", body: "Work that was scattered lives in a single system." },
      { title: "Visibility", body: "Managers see status and history without chasing." },
      { title: "Fits your team", body: "Built around your process instead of workarounds." },
    ],
    process: standardProcess,
    cta: "Discuss your system",
    related: { slug: "leave-management", prompt: "Leave Management Software" },
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    short: "Mobile applications built from your business requirements, from design to deployment.",
    metaTitle: "Mobile App Development | Nedd Digital",
    metaDescription:
      "Mobile app development based on your business requirements: UI/UX design, app development, backend integration, testing and deployment.",
    heroTitle: "Put your service in your customers' pocket, built around a plan that actually holds up.",
    heroLead: "We build mobile applications from clear requirements, covering design, development, integration with your existing systems, testing and release, so the app does what it's supposed to from day one.",
    problemTitle: "What usually stalls a mobile app before it starts",
    problems: ["You know roughly what the app should do, but turning that into a scope is the hard part.", "The app needs to talk to systems and data you already have, and that connection has to work properly.", "A past attempt stalled out because there was never a clear process to follow."],
    solution: "We define the requirements with you first, design the actual screens, then build, connect it to your systems, and test it properly before release. You know what's being built and roughly when at every stage, not just at the end. Support doesn't stop at launch. Early feedback from real users usually means a few adjustments, and we're there for that.",
        offerings: [
      { title: "UI/UX design", body: "Screen flows and interface designed for how people will use the app." },
      { title: "Mobile application development", body: "The app built to your agreed requirements." },
      { title: "API & backend integration", body: "Connections to your existing systems and data." },
      { title: "Testing & deployment", body: "Testing before release and help getting the app published." },
    ],
    deliverables: ["Requirements and scope", "Screen designs", "Working app", "Backend/API connections", "Testing and release support"],
    outcomes: [
      { title: "Clear scope", body: "You know what's being built and when." },
      { title: "Connected", body: "The app works with the systems you already have." },
      { title: "Supported", body: "Help after launch as you gather feedback." },
    ],
    process: standardProcess,
    cta: "Discuss your app",
    related: { slug: "custom-software-development", prompt: "Need a web system alongside the app?" },
  },
  {
    slug: "logo-brand-design",
    name: "Logo & Brand Design",
    short: "Logos, visual identity and brand assets that make your business recognizable.",
    metaTitle: "Logo & Brand Design | Nedd Digital",
    metaDescription:
      "Logo design, brand identity, visual direction and business branding assets for small and growing businesses.",
    heroTitle: "Look as professional as the work you're actually doing.",
    heroLead: "We design logos and simple, consistent brand identities so your business looks like the same business everywhere it shows up: your website, your documents, social media and signage.",
    problemTitle: "What inconsistent branding actually costs you",
    problems: ["The logo was put together quickly years ago and no longer fits the business you've grown into.", "Colors and fonts shift from one document to the next, so nothing feels connected.", "There are no proper files ready for print, web and social, so every new need turns into a scramble."],
    solution: "We agree on a visual direction first, design the logo and the core identity around it, then hand over the files and a short, clear guide so your team can use it consistently without having to ask each time. The result is a business that looks like one business, wherever a customer runs into it.",
        offerings: [
      { title: "Logo design", body: "A distinctive mark in the formats you need." },
      { title: "Brand identity", body: "Color palette, typography and usage rules." },
      { title: "Visual direction", body: "A clear look and feel agreed before design starts." },
      { title: "Business branding assets", body: "Business cards, letterheads, social images and similar." },
    ],
    deliverables: ["Logo files for web and print", "Color and typography guide", "Branding assets you choose", "Simple usage guidelines"],
    outcomes: [
      { title: "Recognizable", body: "A consistent look customers remember." },
      { title: "Ready to use", body: "Files for every place your brand appears." },
      { title: "Consistent", body: "Clear rules so everyone applies it the same way." },
    ],
    process: standardProcess,
    cta: "Discuss your brand",
    related: { slug: "website-design-development", prompt: "Ready to put the new brand online?" },
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const LEAVE_FEATURES = [
  { title: "Employee, manager & admin roles", body: "Separate views for employees, managers and admins, each seeing only what's relevant to their role." },
  { title: "Leave requests & approvals", body: "Leave requests and approvals with a clear, auditable trail behind every decision." },
  { title: "Live leave balances", body: "Leave balances that update live as requests are approved." },
  { title: "Leave types & policies", body: "Configurable leave types and the policies behind them." },
  { title: "CSV import", body: "CSV import, so existing employee data doesn't need to be retyped." },
  { title: "Attachments", body: "Supporting documents attached directly to a request." },
  { title: "Notifications", body: "Notifications when a request needs action or has just been decided." },
  { title: "Reports", body: "Reporting views for managers and admins." },
  { title: "Audit logs", body: "An audit log of who did what and when." },
];

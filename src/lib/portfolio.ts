import urls from "./portfolio-assets.json";

const leaveDashboard = { url: "/images/leave-management-demo.jpg" };
const analyticsDashboard = { url: "/images/data-analysis-dashboard.png" };

export type PortfolioCategory =
  | "websites"
  | "webdev"
  | "mobile"
  | "branding"
  | "analytics"
  | "software";

export const PORTFOLIO_CATEGORIES: {
  id: "all" | PortfolioCategory;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "analytics", label: "Data Analytics" },
  { id: "software", label: "Software" },
  { id: "websites", label: "Websites" },
  { id: "webdev", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "branding", label: "Branding" },
];

export const CATEGORY_LABEL: Record<PortfolioCategory, string> = {
  analytics: "Data Analytics",
  software: "Software",
  websites: "Website Design",
  webdev: "Website Development",
  mobile: "Mobile App",
  branding: "Brand Identity",
};

export type PortfolioItem = {
  id: string;
  category: PortfolioCategory;
  title: string;
  description: string;
  cover: string;
  full: string;
  tall: boolean;
  alt: string;
};

const U = urls as Record<string, string>;

const pad = (n: number) => String(n).padStart(2, "0");

/* =========================================
   ACTUAL PROJECT / BRAND NAMES
   ========================================= */

const NAMES: Record<PortfolioCategory, string[]> = {
  analytics: [
    "Product Sales & Market Share Dashboard",
  ],

  software: [
    "Leave Management Software",
  ],

  websites: [
    "Bean & Crema Coffee & Tea",
    "AB+R",
    "Envious Skin",
    "Rafarca",
    "Dmezures",
    "Ivacay",
    "Sadik",
    "Blessed Royalty Incorporation",
    "Lucia John",
    "Blossoms Rise",
    "Dexter Lowery",
    "Taste Royale Cuisine",
    "Sunny Brooks",
    "Know Scrubs",
    "Legacy",
    "Botanics",
    "Mezzo Soprano",
    "Salt Pepper Grill",
    "Your Vinyl LLC",
    "Mobile Kidz",
    "Restorative",
    "Auto Junket",
  ],

  webdev: [
    "Atlanta Piano Studio",
    "Tire Swings",
    "Elite Rehab",
    "Hannah's Hope",
    "Dragon Club",
    "Bright Moon",
    "Asian Imports",
    "Second Street Gallery",
    "Cowboy Styled",
    "Pittsburgh Premier Fitness Gym",
    "Izaac Promos",
    "SAF Consultant",
  ],

  mobile: [
    "Malino",
    "Access",
    "Eater",
    "Sunny Hemp Oil",
    "Calengan",
    "Coffee Cups",
  ],

  branding: [
    "McGregor's",
    "Gnome Better Service",
    "The White Owl",
    "Lanska Consulting LLC",
    "Lazy Daizy Farm LLC",
    "Maple & Moonlight LLC",
    "Fortrature",
    "Racheal Piltman",
    "Elev8 Construct Ltd",
    "Juanitas Photobooth",
    "SAF Consultant",
    "Izaac Promos",
  ],
};

/* =========================================
   EXISTING DESCRIPTIONS
   ========================================= */

const COPY: Record<PortfolioCategory, string[]> = {
  analytics: [
    "Product sales and market share dashboard.",
  ],

  software: [
    "Leave requests, approvals and balances in one place.",
  ],

  websites: [
    "Designed around usability, clarity and the customer journey.",
    "Built to create a stronger and more professional online presence.",
    "Created to make important information easier for customers to find.",
    "Designed with a clear focus on user experience, engagement and business goals.",
    "A modern page layout that guides visitors from first impression to enquiry.",
    "Designed to support stronger customer engagement and more conversion opportunities.",
  ],

  webdev: [
    "Built to simplify the customer experience and create more opportunities for enquiries.",
    "A responsive, working website that gives the business a modern digital presence.",
    "Developed to present services clearly and make it easy for visitors to get in touch.",
    "Built for a professional first impression on every screen size.",
    "Developed around a clear customer journey, from homepage to contact.",
  ],

  mobile: [
    "App screens designed around a simple, user-friendly experience.",
    "Clear navigation and product presentation designed for everyday use on mobile.",
    "A clean interface designed to keep key actions one tap away.",
  ],

  branding: [
    "Created to give the brand a stronger visual identity and a more professional market presence.",
    "A distinctive mark designed to be recognisable and easy to remember.",
    "Visual identity work built for consistent use across print and digital.",
  ],
};

/* =========================================
   BUILD PORTFOLIO ITEMS
   ========================================= */

function build(
  category: PortfolioCategory,
  prefix: string,
  count: number,
  tall = false
): PortfolioItem[] {
  return Array.from({ length: count }, (_, i) => {
    const n = pad(i + 1);

    const cover = U[
      tall
        ? `${prefix}-${n}-cover.webp`
        : `${prefix}-${n}.webp`
    ];

    const full =
      (tall
        ? U[`${prefix}-${n}-full.webp`]
        : cover) ?? "";

    const title =
      NAMES[category][i] ??
      `${CATEGORY_LABEL[category]} Project ${n}`;

    return {
      id: `${prefix}-${n}`,
      category,
      title,
      description:
        COPY[category][i % COPY[category].length] ?? "",
      cover: cover ?? "",
      full,
      tall,
      alt: `${title} by Nedd Digital`,
    };
  });
}

/* =========================================
   COMPLETE PORTFOLIO
   ========================================= */

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "data-analysis-dashboard",
    category: "analytics",
    title: "Product Sales & Market Share Dashboard",
    description:
      "A data analysis dashboard showing sales, market share, product performance and revenue trends.",
    cover: analyticsDashboard.url,
    full: analyticsDashboard.url,
    tall: false,
    alt: "Product sales and market share data analysis dashboard",
  },

  {
    id: "leave-management-dashboard",
    category: "software",
    title: "Leave Management Software",
    description:
      "Our leave management dashboard for leave requests, approvals, balances and administration.",
    cover: leaveDashboard.url,
    full: leaveDashboard.url,
    tall: false,
    alt: "Nedd Digital Leave Management Software admin dashboard",
  },

  // Website Design — 22
  ...build("websites", "wd", 22, true),

  // Website Development — 12
  ...build("webdev", "dev", 12),

  // Mobile Apps — 6
  ...build("mobile", "mob", 6),

  // Brand Identity — 12
  ...build("branding", "logo", 12),
];
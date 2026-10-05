import urls from "./portfolio-assets.json";
const leaveDashboard = { url: "/images/leave-management-demo.jpg" };
const analyticsDashboard = { url: "/images/data-analysis-dashboard.png" };

export type PortfolioCategory = "websites" | "webdev" | "mobile" | "branding" | "analytics" | "software";

export const PORTFOLIO_CATEGORIES: { id: "all" | PortfolioCategory; label: string }[] = [
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
  /** Tall full-page layouts scroll inside the lightbox. */
  tall: boolean;
  alt: string;
};

const U = urls as Record<string, string>;
const pad = (n: number) => String(n).padStart(2, "0");

const COPY: Record<PortfolioCategory, string[]> = {
  analytics: ["Product sales and market share dashboard."],
  software: ["Leave requests, approvals and balances in one place."],
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

function build(category: PortfolioCategory, prefix: string, count: number, tall = false): PortfolioItem[] {
  return Array.from({ length: count }, (_, i) => {
    const n = pad(i + 1);
    const cover = U[tall ? `${prefix}-${n}-cover.webp` : `${prefix}-${n}.webp`];
    const full = (tall ? U[`${prefix}-${n}-full.webp`] : cover) ?? "";
    const title = `${CATEGORY_LABEL[category]} Project ${n}`;
    return {
      id: `${prefix}-${n}`,
      category,
      title,
      description: COPY[category][i % COPY[category].length] ?? "",
      cover: cover ?? "",
      full,
      tall,
      alt: `${title} by Nedd Digital`,
    };
  });
}

export const PORTFOLIO: PortfolioItem[] = [
  { id: "data-analysis-dashboard", category: "analytics", title: "Product Sales & Market Share Dashboard", description: "A data analysis dashboard showing sales, market share, product performance and revenue trends.", cover: analyticsDashboard.url, full: analyticsDashboard.url, tall: false, alt: "Product sales and market share data analysis dashboard" },
  { id: "leave-management-dashboard", category: "software", title: "Leave Management Software", description: "Our leave management dashboard for leave requests, approvals, balances and administration.", cover: leaveDashboard.url, full: leaveDashboard.url, tall: false, alt: "Nedd Digital Leave Management Software admin dashboard" },
  ...build("websites", "wd", 22, true),
  ...build("webdev", "dev", 10),
  ...build("mobile", "mob", 6),
  ...build("branding", "logo", 10),
];

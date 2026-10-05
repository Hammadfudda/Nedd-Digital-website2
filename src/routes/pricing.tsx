import { createFileRoute, redirect } from "@tanstack/react-router";

// Pricing page was removed; send old links to Contact.
export const Route = createFileRoute("/pricing")({
  beforeLoad: () => {
    throw redirect({ to: "/contact", statusCode: 301 });
  },
});

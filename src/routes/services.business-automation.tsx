import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/business-automation")({
  beforeLoad: () => {
    throw redirect({ to: "/services", statusCode: 301 });
  },
});
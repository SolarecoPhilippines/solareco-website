import type { Metadata } from "next";
import { PolicyPage } from "@/src/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "General terms for using the Solareco Philippines website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Website policy"
      title="Terms of Use"
      introduction="These general terms describe the informational purpose of the Solareco Philippines website."
      sections={[
        {
          title: "Website information",
          content: <p>Product pages, technical references, branch details, and supported applications are provided for general discovery and inquiry purposes. Website content is not, by itself, a binding offer or final technical recommendation.</p>,
        },
        {
          title: "Confirm information before purchase or installation",
          content: <p>Customers and project teams should confirm the applicable model, specifications, compatibility, availability, certifications, price, delivery terms, and installation requirements in the official quotation, invoice, approved datasheet, or other written company confirmation.</p>,
        },
        {
          title: "External resources",
          content: <p>Links to manufacturers, Facebook, marketplace stores, and mapping services are provided for convenience. Solareco does not control the availability or content of those third-party services.</p>,
        },
        {
          title: "Management confirmation required",
          content: <p>Any additional commercial, account, dealership, or transaction-specific terms require management approval and must be confirmed in the relevant written agreement or transaction document.</p>,
        },
      ]}
    />
  );
}

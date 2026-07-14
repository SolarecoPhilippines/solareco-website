import type { Metadata } from "next";
import { PolicyPage } from "@/src/components/PolicyPage";
import { PUBLIC_EMAIL } from "@/src/lib/constants";

export const metadata: Metadata = {
  title: "Warranty and Returns Information",
  description: "General warranty and returns information for products supplied through Solareco Philippines.",
  alternates: { canonical: "/warranty-returns" },
};

export default function WarrantyReturnsPage() {
  return (
    <PolicyPage
      eyebrow="Customer information"
      title="Warranty and Returns Information"
      introduction="Warranty and return conditions can vary by product, manufacturer, supplier, transaction, and approved sales document."
      sections={[
        {
          title: "Check the transaction documents",
          content: <p>The controlling information for a purchase is the official quotation, invoice, warranty card, manufacturer document, dealership agreement, or other written confirmation issued for that transaction.</p>,
        },
        {
          title: "Requesting assistance",
          content: <p>Keep the invoice, model and serial information, warranty card when supplied, and clear details of the concern. Contact the branch or sales contact shown on the transaction document, or email <a className="font-semibold text-[#0D3567] underline-offset-4 hover:underline" href={`mailto:${PUBLIC_EMAIL}`}>{PUBLIC_EMAIL}</a> for routing assistance.</p>,
        },
        {
          title: "No general period or remedy stated here",
          content: <p>This website does not state a universal warranty period, return window, refund right, replacement commitment, or service turnaround time. Those details must be confirmed in the applicable written documents.</p>,
        },
        {
          title: "Management confirmation required",
          content: <p>Detailed inspection, return authorization, shipping, labor, exclusions, remedies, and escalation procedures require Solareco management approval and written confirmation.</p>,
        },
      ]}
    />
  );
}

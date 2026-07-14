import type { Metadata } from "next";
import { PolicyPage } from "@/src/components/PolicyPage";
import { PUBLIC_EMAIL } from "@/src/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "General privacy information for the Solareco Philippines website and inquiry form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Website policy"
      title="Privacy Policy"
      introduction="This notice explains, at a general level, how information submitted through the Solareco Philippines website may be used to respond to inquiries."
      sections={[
        {
          title: "Information submitted through the website",
          content: <p>The quotation form may collect a name, company, email address, contact number, location, product interest, message, and consent confirmation. Please avoid submitting confidential information that is not needed for the inquiry.</p>,
        },
        {
          title: "General use of inquiry information",
          content: <p>Submitted information may be used to review and respond to a quotation, product, availability, or technical-support inquiry and to route the request to an appropriate Solareco contact.</p>,
        },
        {
          title: "Website services and external links",
          content: <p>The website may rely on hosting and form-processing services and may link to Facebook, marketplace stores, maps, and manufacturer references. Those external services operate under their own terms and privacy practices.</p>,
        },
        {
          title: "Management confirmation required",
          content: <p>Specific retention periods, access procedures, deletion procedures, and the complete internal privacy process require Solareco management approval and written confirmation. Questions about website inquiry information may be sent to <a className="font-semibold text-[#0D3567] underline-offset-4 hover:underline" href={`mailto:${PUBLIC_EMAIL}`}>{PUBLIC_EMAIL}</a>.</p>,
        },
      ]}
    />
  );
}

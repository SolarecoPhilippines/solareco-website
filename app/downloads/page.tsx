import type { Metadata } from "next";
import { DownloadHub } from "@/src/components/DownloadHub";
import { SectionTitle } from "@/src/components/SectionTitle";
import { downloadGroups } from "@/src/data/downloads";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Solareco datasheet, certificate, and marketing material placeholders.",
};

export default function DownloadsPage() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Download center"
          title="Technical Downloads and Certificates"
          description="Search datasheets, certificates, and marketing materials for Solareco's solar and industrial product lines."
          headingLevel="h1"
        />
        <DownloadHub groups={downloadGroups} />
      </div>
    </section>
  );
}

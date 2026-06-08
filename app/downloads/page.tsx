import type { Metadata } from "next";
import { DownloadHub } from "@/src/components/DownloadHub";
import { SectionTitle } from "@/src/components/SectionTitle";
import { getAvailableDownloadGroups } from "@/src/data/downloads";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Solareco datasheets, certificates, and marketing materials.",
};

export default function DownloadsPage() {
  const availableDownloadGroups = getAvailableDownloadGroups();

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Download center"
          title="Technical Downloads and Certificates"
          description="Search datasheets, certificates, and marketing materials for Solareco's solar and industrial product lines."
          headingLevel="h1"
        />
        {availableDownloadGroups.length > 0 ? (
          <DownloadHub groups={availableDownloadGroups} />
        ) : (
          <div className="mt-10 rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
            Approved public downloads will appear here after files are uploaded.
          </div>
        )}
      </div>
    </section>
  );
}

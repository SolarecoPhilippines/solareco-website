import type { Metadata } from "next";
import { DownloadCard } from "@/src/components/DownloadCard";
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
          title="Organized document placeholders"
          description="Files are grouped for future upload after all datasheets, certificates, and marketing materials are reviewed and approved."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {downloadGroups.map((group) => (
            <DownloadCard key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}


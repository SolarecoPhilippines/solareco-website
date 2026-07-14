import type { Metadata } from "next";
import { DownloadHub } from "@/src/components/DownloadHub";
import { Container } from "@/src/components/Container";
import { EmptyState } from "@/src/components/EmptyState";
import { PageHero } from "@/src/components/PageHero";
import { getAvailableDownloadGroups } from "@/src/data/downloads";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Solareco datasheets, certificates, and marketing materials.",
  alternates: { canonical: "/downloads" },
};

export default function DownloadsPage() {
  const availableDownloadGroups = getAvailableDownloadGroups();

  return (
    <>
      <PageHero eyebrow="Download center" title="Technical downloads and certificates" description="Find approved datasheets, certificates, and marketing materials for Solareco's public product lines." />
      <section className="section-shell bg-slate-50">
        <Container>
        {availableDownloadGroups.length > 0 ? (
          <DownloadHub groups={availableDownloadGroups} />
        ) : (
          <EmptyState title="No approved public documents are currently available" description="Contact Solareco to request the latest approved datasheet, certificate, or marketing document for a specific product." actionLabel="Request a document" actionHref="/contact" />
        )}
        </Container>
      </section>
    </>
  );
}

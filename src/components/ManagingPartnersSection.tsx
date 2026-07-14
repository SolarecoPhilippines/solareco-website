import Image from "next/image";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import type { ManagingPartner } from "@/src/data/management";

type ManagingPartnersSectionProps = {
  partners: ManagingPartner[];
  showDraftNotice: boolean;
};

function DetailGroup({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p>
      <ul className="mt-2 divide-y divide-slate-100 border-y border-slate-200">
        {items.map((item) => (
          <li key={item} className="py-2 text-sm font-medium text-[#0D3567]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PartnerCard({ partner }: { partner: ManagingPartner }) {
  const departments = partner.assignedDepartments.map((department) => department.name);

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden border-t-4 border-[#0D3567] bg-white">
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-slate-200 bg-slate-100">
        {partner.imageSrc ? (
          <Image
            src={partner.imageSrc}
            alt={partner.imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-contain"
          />
        ) : (
          <div className="flex h-full items-center justify-center" role="img" aria-label="Profile photograph to be confirmed">
            <div className="flex flex-col items-center gap-4 text-slate-400" aria-hidden="true">
              <span className="h-16 w-16 rounded-full border-2 border-slate-300 bg-white" />
              <span className="h-10 w-28 rounded-t-full border-x-2 border-t-2 border-slate-300 bg-white" />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2E7FC1]">{partner.role}</p>
        <h3 className="mt-2 font-heading text-2xl font-black text-slate-950">{partner.fullName}</h3>
        <p className="mt-3 leading-7 text-slate-600">{partner.biography}</p>

        <div className="mt-6 grid gap-5 border-t border-slate-200 pt-5">
          <DetailGroup label="Assigned area" items={partner.assignedAreas} />
          <DetailGroup label="Draft branches" items={partner.assignedBranches} />
          <DetailGroup label="Departments" items={departments} />
          <DetailGroup label="Responsibilities" items={partner.responsibilities} />
        </div>
      </div>
    </article>
  );
}

export function ManagingPartnersSection({ partners, showDraftNotice }: ManagingPartnersSectionProps) {
  if (partners.length === 0) return null;

  return (
    <section id="managing-partners" className="section-shell scroll-mt-24 bg-slate-50">
      <Container>
        <SectionTitle
          eyebrow="Leadership"
          title="Our Managing Partners"
          description="Meet the leaders guiding Solareco Philippines and supporting the company's strategic direction, operations, and continued growth."
        />
        {showDraftNotice ? (
          <aside className="technical-accent mt-7 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950" aria-label="Draft assignment note">
            <span className="font-bold">Management confirmation required:</span>{" "}
            Bacolod and Palawan currently appear under two management groups. Final responsibilities and reporting relationships require management confirmation.
          </aside>
        ) : null}

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </Container>
    </section>
  );
}

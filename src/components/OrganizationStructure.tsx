import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import type { ManagementDepartment, ManagingPartner } from "@/src/data/management";

type OrganizationStructureProps = {
  partners: ManagingPartner[];
  showDraftNotice: boolean;
};

function partnerLabel(partner: ManagingPartner) {
  const area = partner.assignedAreas[0];
  return area ? `${partner.fullName} - ${area}` : partner.fullName;
}

function DepartmentList({ departments, nested = false }: { departments: ManagementDepartment[]; nested?: boolean }) {
  if (departments.length === 0) return null;

  return (
    <ul className={nested ? "mt-2 space-y-2 border-l border-blue-200 pl-4" : "space-y-3"}>
      {departments.map((department) => (
        <li key={department.name} className="min-w-0">
          <div className="border-b border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold leading-5 text-slate-700">
            {department.name}
          </div>
          {department.departments ? <DepartmentList departments={department.departments} nested /> : null}
        </li>
      ))}
    </ul>
  );
}

function BranchList({ branches }: { branches: string[] }) {
  if (branches.length === 0) return null;

  return (
    <ul className="space-y-3">
      {branches.map((branch) => (
        <li key={branch} className="border-b border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold leading-5 text-slate-700">
          {branch}
        </li>
      ))}
    </ul>
  );
}

function GroupChildren({ partner }: { partner: ManagingPartner }) {
  const hasChildren = partner.assignedBranches.length > 0 || partner.assignedDepartments.length > 0;

  if (!hasChildren) {
    return <p className="border-l-2 border-slate-300 px-3 py-2 text-sm leading-5 text-slate-500">Assigned area shown above</p>;
  }

  return (
    <div className="grid gap-3">
      <BranchList branches={partner.assignedBranches} />
      <DepartmentList departments={partner.assignedDepartments} />
    </div>
  );
}

export function OrganizationStructure({ partners, showDraftNotice }: OrganizationStructureProps) {
  if (partners.length === 0) return null;

  return (
    <section id="organizational-structure" className="section-shell scroll-mt-24 overflow-hidden bg-white">
      <Container>
        <SectionTitle
          eyebrow="Team structure"
          title="Our Organizational Structure"
          description="Solareco Philippines coordinates its headquarters, branch operations, sales, marketing, e-commerce, technical, operations, and administrative teams through a structured management system."
        />

        {showDraftNotice ? (
          <aside className="technical-accent mt-7 bg-blue-50 px-5 py-4 text-sm leading-6 text-[#0A2A52]" aria-label="Draft review notice">
            <span className="font-bold">Draft structure for management review.</span>{" "}
            Final names, branch assignments, responsibilities, and reporting relationships are subject to confirmation.
          </aside>
        ) : null}

        <div className="mt-10 lg:hidden">
          <div className="max-w-md border-l-4 border-[#2E7FC1] bg-[#0A2A52] px-5 py-4 font-heading text-lg font-black text-white">
            Managing Partners
          </div>
          <ol className="relative mt-7 grid gap-5 border-l-2 border-blue-200 pl-5 sm:pl-7">
            {partners.map((partner) => (
              <li key={partner.id} className="relative min-w-0">
                <span className="absolute -left-[1.65rem] top-7 h-3 w-3 rounded-full border-2 border-white bg-[#2E7FC1] sm:-left-[2.15rem]" aria-hidden="true" />
                <article className="border-t-2 border-[#0D3567] bg-white p-5 sm:p-6">
                  <h3 className="font-heading text-lg font-black leading-7 text-[#0D3567]">{partnerLabel(partner)}</h3>
                  <div className="mt-4 border-l border-slate-200 pl-4">
                    <GroupChildren partner={partner} />
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 hidden lg:block" aria-label="Organizational chart">
          <div className="mx-auto w-64 border-x-4 border-[#2E7FC1] bg-[#0A2A52] px-6 py-4 text-center font-heading text-lg font-black text-white">
            Managing Partners
          </div>
          <div className="management-chart-trunk" aria-hidden="true" />
          <div className="management-chart-grid">
            {partners.map((partner) => (
              <article key={partner.id} className="management-chart-group">
                <div className="management-chart-branch" aria-hidden="true" />
                <h3 className="flex min-h-24 items-center justify-center border-t-4 border-[#2E7FC1] bg-blue-50 px-4 py-4 text-center font-heading text-base font-black leading-6 text-[#0D3567]">
                  {partnerLabel(partner)}
                </h3>
                <div className="mt-5 border-l border-blue-200 pl-3">
                  <GroupChildren partner={partner} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

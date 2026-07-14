import type { ReactNode } from "react";
import { Container } from "./Container";

type PolicySection = {
  title: string;
  content: ReactNode;
};

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: PolicySection[];
};

export function PolicyPage({ eyebrow, title, introduction, sections }: PolicyPageProps) {
  return (
    <section className="section-shell bg-slate-50">
      <Container>
        <div className="max-w-4xl">
          <div className="border-l-2 border-[#2E7FC1] pl-5 sm:pl-7">
            <p className="eyebrow text-[#0D3567]">{eyebrow}</p>
            <h1 className="detail-title mt-3 font-heading font-black text-slate-950">{title}</h1>
            <p className="mt-5 text-[1.0625rem] leading-7 text-slate-600">{introduction}</p>
            <p className="mt-6 border-l-2 border-blue-300 bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-950">
              This page provides general website information only. It is not legal advice and does not replace an official
              quotation, invoice, warranty card, dealership agreement, or written company confirmation.
            </p>
          </div>
          <div className="editorial-list mt-10">
            {sections.map((section, index) => (
              <section key={section.title} className="grid gap-4 py-7 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-6">
                <span className="font-heading text-sm font-black text-[#2E7FC1]" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-slate-950">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">{section.content}</div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

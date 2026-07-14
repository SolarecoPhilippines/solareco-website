import type { Metadata } from "next";
import { BranchCard } from "@/src/components/BranchCard";
import { Button } from "@/src/components/Button";
import { Container } from "@/src/components/Container";
import { PageHero } from "@/src/components/PageHero";
import { QuoteForm } from "@/src/components/QuoteForm";
import { SectionTitle } from "@/src/components/SectionTitle";
import { branches } from "@/src/data/branches";
import { FACEBOOK_PAGE_URL, PUBLIC_EMAIL } from "@/src/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote or contact Solareco Philippines.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Solareco" title="Tell us what your project needs" description="For product inquiries, quotations, and technical assistance, send a request or contact the nearest Solareco branch.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={`mailto:${PUBLIC_EMAIL}`} variant="light">Email {PUBLIC_EMAIL}</Button>
          <Button href={FACEBOOK_PAGE_URL} variant="outlineLight">Message on Facebook</Button>
        </div>
      </PageHero>

      <section className="section-shell bg-slate-50">
        <Container>
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)] xl:items-start xl:gap-14">
            <QuoteForm />
            <aside className="border-t-4 border-[#0D3567] bg-white p-6 shadow-[0_3px_14px_rgba(15,23,42,0.04)] ring-1 ring-slate-200 sm:p-7">
              <h2 className="font-heading text-2xl font-bold text-slate-950">Contact directory</h2>
              <div className="mt-5 divide-y divide-slate-200 border-t border-slate-200">
                <section className="py-5">
                  <span className="eyebrow text-[#0D3567]">Email</span>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Product requirements, quotation information, and document requests.</p>
                  <a href={`mailto:${PUBLIC_EMAIL}`} className="mt-3 inline-flex break-all text-base font-semibold text-[#0D3567] underline-offset-4 hover:underline">{PUBLIC_EMAIL}</a>
                </section>
                <section className="py-5">
                  <span className="eyebrow text-[#0D3567]">Facebook</span>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Contact coordination through Solareco&apos;s official Facebook page.</p>
                  <Button href={FACEBOOK_PAGE_URL} variant="secondary" className="mt-4 min-h-11 px-4 py-2 text-sm">Open Facebook</Button>
                </section>
                <section className="py-5">
                  <span className="eyebrow text-[#0D3567]">Branches</span>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Iloilo, Bacolod, Manila, Palawan, Cebu, and Davao branch and warehouse support.</p>
                  <a href="#branch-locations" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-[#0D3567] underline underline-offset-4">View branch locations</a>
                </section>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section id="branch-locations" className="section-shell scroll-mt-24 bg-white">
        <Container>
          <SectionTitle eyebrow="Locations" title="Our branches and warehouses" description="Official public branch and warehouse contact details from the Solareco Corporation company profile." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch) => <BranchCard key={branch.name} branch={branch} showFacebook />)}
          </div>
        </Container>
      </section>
    </>
  );
}

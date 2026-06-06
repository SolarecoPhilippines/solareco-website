import type { Metadata } from "next";
import { QuoteForm } from "@/src/components/QuoteForm";
import { SectionTitle } from "@/src/components/SectionTitle";
import { branches } from "@/src/data/branches";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote or contact Solareco Philippines.",
};

export default function ContactPage() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Request a quote"
          description="The form is UI-only for now. Secure server-side submission will be added after the approved email workflow is chosen."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <QuoteForm />
          <aside className="space-y-6">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-slate-950">Company contact details</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Final phone numbers, email addresses, office hours, and official address details will be added after approval.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-slate-950">Branch placeholders</h2>
              <div className="mt-5 grid gap-3">
                {branches.map((branch) => (
                  <div key={branch.city} className="rounded-md bg-slate-50 p-4">
                    <p className="font-semibold text-slate-950">{branch.city}</p>
                    <p className="mt-1 text-sm text-slate-600">{branch.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}


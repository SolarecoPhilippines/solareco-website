import type { Metadata } from "next";
import { BranchCard } from "@/src/components/BranchCard";
import { Button } from "@/src/components/Button";
import { QuoteForm } from "@/src/components/QuoteForm";
import { SectionTitle } from "@/src/components/SectionTitle";
import { branches } from "@/src/data/branches";
import { FACEBOOK_PAGE_URL, PUBLIC_EMAIL } from "@/src/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote or contact Solareco Philippines.",
};

export default function ContactPage() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0D3567]">Contact</p>
          <h1 className="mt-3 font-heading text-4xl font-black text-slate-950 sm:text-5xl">
            Contact Solareco Philippines
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
            For product inquiries, quotations, and technical assistance, contact the nearest Solareco branch or send us
            a message through Facebook.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${PUBLIC_EMAIL}`}
              aria-label={`Email Solareco Philippines at ${PUBLIC_EMAIL}`}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-200 px-5 py-3 text-sm font-semibold text-[#0D3567] transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
            >
              Email: {PUBLIC_EMAIL}
            </a>
            <Button href={FACEBOOK_PAGE_URL} variant="secondary">
              Message on Facebook
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <QuoteForm />
          <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-slate-950">Contact Channels</h2>
            <address className="mt-5 space-y-3 text-sm not-italic leading-6 text-slate-600">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${PUBLIC_EMAIL}`}
                  aria-label={`Email Solareco Philippines at ${PUBLIC_EMAIL}`}
                  className="font-semibold text-[#0D3567] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                >
                  {PUBLIC_EMAIL}
                </a>
              </p>
              <p>Branches and warehouses are available across Iloilo, Bacolod, Manila, Palawan, Cebu, and Davao.</p>
            </address>
            <Button href={FACEBOOK_PAGE_URL} variant="secondary" className="mt-5 w-full">
              Facebook Contact
            </Button>
          </aside>
        </div>

        <section className="mt-16">
          <SectionTitle
            eyebrow="Locations"
            title="Our Branches and Warehouses"
            description="Official public branch and warehouse contact details from the Solareco Corporation company profile."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch) => (
              <BranchCard key={branch.name} branch={branch} showFacebook />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

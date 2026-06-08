import Link from "next/link";
import type { Branch } from "@/src/data/branches";
import { FACEBOOK_PAGE_URL } from "@/src/lib/constants";
import { Button } from "./Button";

type BranchCardProps = {
  branch: Branch;
  compact?: boolean;
  showFacebook?: boolean;
  showContactLink?: boolean;
};

export function BranchCard({ branch, compact = false, showFacebook = false, showContactLink = false }: BranchCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-xl font-bold text-slate-950">{branch.name}</h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-[#0D3567]">{branch.type}</p>
        </div>
      </div>

      {!compact ? (
        <address className="mt-4 space-y-2 text-sm not-italic leading-6 text-slate-600">
          {branch.addresses.map((address) => (
            <p key={address}>{address}</p>
          ))}
        </address>
      ) : null}

      <div className="mt-4 grid gap-2 text-sm">
        <a
          href={branch.phoneHref}
          aria-label={`Call ${branch.name} at ${branch.phone}`}
          className="font-semibold text-slate-800 underline-offset-4 hover:text-[#0D3567] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
        >
          {branch.phone}
        </a>
        {branch.email && !compact ? (
          <a
            href={`mailto:${branch.email}`}
            aria-label={`Email ${branch.name} at ${branch.email}`}
            className="font-semibold text-slate-800 underline-offset-4 hover:text-[#0D3567] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
          >
            {branch.email}
          </a>
        ) : null}
      </div>

      {branch.mapQuery && !compact ? (
        <div className="mt-5 overflow-hidden rounded-md border border-slate-200 bg-slate-100">
          <iframe
            title={`${branch.name} map`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(branch.mapQuery)}&output=embed`}
            className="h-48 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : null}

      {showFacebook || showContactLink ? (
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          {showContactLink ? (
            <Link
              href="/contact"
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#0D3567]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0D3567] transition hover:border-[#0D3567]/45 hover:bg-[#f4f7fb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
            >
              View Contact Details
            </Link>
          ) : null}
          {showFacebook ? (
            <Button href={FACEBOOK_PAGE_URL} variant="secondary" className="min-h-10 px-4 py-2">
              Message on Facebook
            </Button>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

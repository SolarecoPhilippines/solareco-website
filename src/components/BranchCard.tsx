import type { Branch } from "@/src/data/branches";
import { FACEBOOK_PAGE_URL } from "@/src/lib/constants";
import { Button } from "./Button";

type BranchCardProps = {
  branch: Branch;
  compact?: boolean;
  showFacebook?: boolean;
  showContactLink?: boolean;
};

function LocationPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none">
      <path
        d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 12.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function BranchCard({ branch, compact = false, showFacebook = false, showContactLink = false }: BranchCardProps) {
  const isOpen = branch.status === "Open";
  const messageLabel = isOpen ? "Message Us" : "Message Us for Updates";

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-xl font-bold text-slate-950">{branch.name}</h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-[#0D3567]">{branch.type}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
            isOpen ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/15" : "bg-amber-50 text-amber-800 ring-1 ring-amber-600/20"
          }`}
        >
          {branch.status}
        </span>
      </div>

      {!compact ? (
        <div className="mt-5 grid gap-4">
          {branch.locations.map((location) => (
            <div key={location.name} className="rounded-md border border-slate-100 bg-slate-50 p-4">
              {branch.locations.length > 1 ? (
                <p className="font-heading text-base font-bold text-slate-950">{location.name}</p>
              ) : null}
              <address className="mt-1 text-sm not-italic leading-6 text-slate-600">{location.address}</address>
              {location.mapUrl ? (
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#0D3567] px-4 py-2 text-sm font-semibold text-white transition duration-[280ms] hover:-translate-y-0.5 hover:bg-[#15477f] hover:shadow-[0_12px_28px_rgba(13,53,103,0.20)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                >
                  <LocationPinIcon />
                  {location.mapButtonLabel ?? `View ${location.name} on Google Maps`}
                </a>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {!compact && branch.statusText ? <p className="mt-5 text-sm leading-6 text-slate-600">{branch.statusText}</p> : null}

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

      {!compact || showFacebook || showContactLink ? (
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          {showContactLink ? (
            <Button href="/contact" variant="secondary" className="min-h-10 px-4 py-2">
              View Contact Details
            </Button>
          ) : null}
          {!showContactLink ? (
            <Button href={FACEBOOK_PAGE_URL} variant="secondary" className="min-h-10 px-4 py-2">
              {messageLabel}
            </Button>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

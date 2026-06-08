import { branches } from "@/src/data/branches";
import { FACEBOOK_PAGE_URL } from "@/src/lib/constants";

const primaryPhone = branches[0]?.phoneHref ?? "tel:+639178705424";

const actions = [
  { href: FACEBOOK_PAGE_URL, label: "Messenger", short: "Msg", external: true },
  { href: primaryPhone, label: "Call Now", short: "Call", external: false },
  { href: "/contact", label: "Request Quotation", short: "Quote", external: false },
];

export function FloatingFacebookButton() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-5 sm:right-5">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0D3567] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:bg-[#15477f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] sm:min-h-12 sm:px-5"
          aria-label={action.label}
        >
          <span className="hidden sm:inline">{action.label}</span>
          <span className="sm:hidden">{action.short}</span>
        </a>
      ))}
    </div>
  );
}

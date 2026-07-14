import { branches } from "@/src/data/branches";
import { FACEBOOK_PAGE_URL } from "@/src/lib/constants";

const primaryPhone = branches[0]?.phoneHref ?? "tel:+639178705424";

const actions = [
  { href: FACEBOOK_PAGE_URL, label: "Messenger", external: true, icon: "message" },
  { href: primaryPhone, label: "Call Now", external: false, icon: "phone" },
];

export function FloatingFacebookButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-2.5 lg:flex">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0D3567] text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-[#15477f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
          aria-label={action.label}
          title={action.label}
        >
          {action.icon === "message" ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 11.5a8 8 0 0 1-8.5 8L5 22l1.6-4.3A8 8 0 1 1 20 11.5Z" />
              <path d="M8.5 11.5h.01m3.49 0h.01m3.49 0h.01" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5.4 3.5 8.8 3l1.6 4.2-2 1.7a15.4 15.4 0 0 0 6.7 6.7l1.7-2 4.2 1.6-.5 3.4c-.2 1.2-1.2 2.1-2.4 2.1C9.9 20.7 3.3 14.1 3.3 5.9c0-1.2.9-2.2 2.1-2.4Z" />
            </svg>
          )}
          <span className="sr-only">{action.label}</span>
        </a>
      ))}
    </div>
  );
}

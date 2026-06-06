import { FACEBOOK_PAGE_URL } from "@/src/lib/constants";

export function FloatingFacebookButton() {
  return (
    <a
      href={FACEBOOK_PAGE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0D3567] text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#15477f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
      aria-label="Message Solareco on Facebook"
    >
      f
    </a>
  );
}


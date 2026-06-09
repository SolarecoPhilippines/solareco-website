import Image from "next/image";
import Link from "next/link";
import { MarketplaceLinks } from "@/src/components/MarketplaceLinks";
import { FACEBOOK_PAGE_URL, PUBLIC_EMAIL, SITE_NAME } from "@/src/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#071f3d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Image
            src="/images/logo/solareco-logo-white.png"
            alt="Solareco Philippines"
            width={220}
            height={48}
            className="h-11 w-auto"
          />
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Solar products, technical assistance, and installation support for customers across the Philippines.
          </p>
          <p className="mt-4 text-sm font-semibold text-white">Solareco Philippines</p>
          <div className="mt-6">
            <MarketplaceLinks title="Official Marketplace Stores" theme="dark" />
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Navigation</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <Link href="/products" className="hover:text-white/80">
              Products
            </Link>
            <Link href="/downloads" className="hover:text-white/80">
              Downloads
            </Link>
            <Link href="/about" className="hover:text-white/80">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white/80">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Contact</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">Email: </p>
          <a
            href={`mailto:${PUBLIC_EMAIL}`}
            aria-label={`Email Solareco Philippines at ${PUBLIC_EMAIL}`}
            className="inline-flex text-sm font-semibold hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {PUBLIC_EMAIL}
          </a>
          <Link
            href="/contact"
            className="mt-4 block text-sm font-semibold hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact page
          </Link>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Solareco Philippines on Facebook"
            className="mt-3 inline-flex text-sm font-semibold hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Message on Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        Copyright 2026 {SITE_NAME}. Solar products, technical assistance, and sustainable energy solutions across the
        Philippines.
      </div>
    </footer>
  );
}

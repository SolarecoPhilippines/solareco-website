import Link from "next/link";
import { FACEBOOK_PAGE_URL, SITE_NAME } from "@/src/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#071f3d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-heading text-2xl font-black">Solareco</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Solar products, technical assistance, and installation support for customers across the Philippines.
          </p>
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
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Company contact details will be added after final approval.
          </p>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold hover:text-white/80"
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


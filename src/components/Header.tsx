"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FACEBOOK_PAGE_URL } from "@/src/lib/constants";
import { Button } from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/downloads", label: "Downloads" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D3567]"
          aria-label="Solareco Philippines home"
        >
          <Image
            src="/images/logo/solareco-logo-blue.png"
            alt="Solareco Philippines"
            width={190}
            height={42}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D3567] ${
                  active ? "text-[#0D3567]" : "text-slate-600 hover:text-[#0D3567]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button href={FACEBOOK_PAGE_URL} variant="secondary">
            Facebook
          </Button>
          <Button href="/contact">Request a Quote</Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-[#0D3567] transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0D3567] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href={FACEBOOK_PAGE_URL} variant="secondary" className="mt-2 w-full">
              Facebook
            </Button>
            <Button href="/contact" className="w-full">
              Request a Quote
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

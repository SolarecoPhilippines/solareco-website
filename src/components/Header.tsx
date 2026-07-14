"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/downloads", label: "Downloads" },
  { href: "/projects", label: "Solutions" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [openAtPath, setOpenAtPath] = useState<string | null>(null);
  const open = openAtPath === pathname;

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#0A2A52] text-white shadow-[0_3px_14px_rgba(7,31,61,0.16)]">
      <Container className="flex h-[76px] items-center justify-between">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          aria-label="Solareco Philippines home"
        >
          <Image
            src="/images/logo/solareco-logo-white.png"
            alt="Solareco Philippines"
            width={190}
            height={42}
            priority
            className="h-9 w-auto lg:h-[38px]"
          />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 px-3 py-2 text-[15px] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  active ? "border-blue-300 text-white" : "border-transparent text-blue-100 hover:border-white/30 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="light" className="min-h-11 px-4 py-2 text-sm">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/30 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpenAtPath(open ? null : pathname)}
        >
          <span className="sr-only">Menu</span>
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-[#0A2A52] py-3 shadow-xl lg:hidden">
          <Container>
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-3 text-base font-semibold hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    active ? "bg-white/10 text-white" : "text-blue-50"
                  }`}
                  onClick={() => setOpenAtPath(null)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/contact" variant="light" className="w-full" onClick={() => setOpenAtPath(null)}>
              Request a Quote
            </Button>
          </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

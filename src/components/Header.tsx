"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent, type RefObject } from "react";
import { Button } from "./Button";
import { Container } from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/downloads", label: "Downloads" },
  { href: "/projects", label: "Solutions" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const productMenuItems = [
  { href: "/products", label: "View All Products" },
  { href: "/products?category=solar-panels", label: "Solar Panels" },
  { href: "/products?category=lithium-batteries", label: "Lithium Batteries" },
  {
    href: "/products?category=all-in-one-energy-storage-system",
    label: "All-in-One Energy Storage System",
  },
  { href: "/products?category=off-grid-solar-inverters", label: "Off-Grid Solar Inverters" },
  { href: "/products?category=electrical-protection", label: "Electrical Protection" },
  { href: "/products?category=solar-wiring", label: "Solar Wiring" },
] as const;

function DownChevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="m5.5 7.5 4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RightChevron() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0">
      <path d="m7.5 5.5 4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [openAtPath, setOpenAtPath] = useState<string | null>(null);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const desktopProductsRef = useRef<HTMLDivElement>(null);
  const mobileProductsRef = useRef<HTMLDivElement>(null);
  const desktopProductsTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileProductsTriggerRef = useRef<HTMLButtonElement>(null);
  const desktopProductItemsRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const mobileProductItemsRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const open = openAtPath === pathname;
  const productsActive = pathname === "/products" || pathname.startsWith("/products/");

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  }

  function focusMenuItem(itemRefs: Array<HTMLAnchorElement | null>, position: "first" | "last") {
    requestAnimationFrame(() => {
      const items = itemRefs.filter((item): item is HTMLAnchorElement => item !== null);
      items[position === "first" ? 0 : items.length - 1]?.focus();
    });
  }

  function handleMenuKeyDown(
    event: KeyboardEvent<HTMLElement>,
    itemRefs: Array<HTMLAnchorElement | null>,
    closeMenu: () => void,
    triggerRef: RefObject<HTMLButtonElement | null>,
  ) {
    const items = itemRefs.filter((item): item is HTMLAnchorElement => item !== null);
    const currentIndex = items.indexOf(document.activeElement as HTMLAnchorElement);

    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      closeMenu();
      triggerRef.current?.focus();
      return;
    }

    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key) || items.length === 0) {
      return;
    }

    event.preventDefault();

    if (event.key === "Home") {
      items[0]?.focus();
    } else if (event.key === "End") {
      items.at(-1)?.focus();
    } else if (event.key === "ArrowDown") {
      items[(currentIndex + 1 + items.length) % items.length]?.focus();
    } else {
      items[(currentIndex - 1 + items.length) % items.length]?.focus();
    }
  }

  useEffect(() => {
    if (!desktopProductsOpen && !mobileProductsOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (desktopProductsOpen && !desktopProductsRef.current?.contains(target)) {
        setDesktopProductsOpen(false);
      }

      if (mobileProductsOpen && !mobileProductsRef.current?.contains(target)) {
        setMobileProductsOpen(false);
      }
    }

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setDesktopProductsOpen(false);
      setMobileProductsOpen(false);

      if (window.matchMedia("(min-width: 1024px)").matches) {
        desktopProductsTriggerRef.current?.focus();
      } else {
        mobileProductsTriggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [desktopProductsOpen, mobileProductsOpen]);

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

        <nav className="hidden items-center gap-1 lg:flex xl:gap-3" aria-label="Main navigation">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={`border-b-2 px-2.5 py-2 text-[15px] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:px-3 ${
              isActive("/") ? "border-blue-300 text-white" : "border-transparent text-blue-100 hover:border-white/30 hover:text-white"
            }`}
          >
            Home
          </Link>

          <div
            ref={desktopProductsRef}
            className="relative"
            onMouseEnter={() => setDesktopProductsOpen(true)}
            onMouseLeave={() => setDesktopProductsOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setDesktopProductsOpen(false);
              }
            }}
          >
            <button
              ref={desktopProductsTriggerRef}
              id="desktop-products-menu-button"
              type="button"
              aria-haspopup="menu"
              aria-expanded={desktopProductsOpen}
              aria-controls="desktop-products-menu"
              aria-current={productsActive ? "page" : undefined}
              className={`inline-flex items-center gap-1 border-b-2 px-2.5 py-2 text-[15px] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:px-3 ${
                productsActive
                  ? "border-blue-300 text-white"
                  : "border-transparent text-blue-100 hover:border-white/30 hover:text-white"
              }`}
              onClick={() => setDesktopProductsOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                  event.preventDefault();
                  setDesktopProductsOpen(true);
                  focusMenuItem(desktopProductItemsRef.current, event.key === "ArrowDown" ? "first" : "last");
                }
              }}
            >
              Products
              <DownChevron open={desktopProductsOpen} />
            </button>

            {desktopProductsOpen ? (
              <div className="absolute left-0 top-full z-[70] w-[360px] max-w-[calc(100vw-2rem)] pt-3">
                <div
                  id="desktop-products-menu"
                  role="menu"
                  aria-labelledby="desktop-products-menu-button"
                  className="overflow-hidden rounded-lg border border-slate-200 bg-white p-2 text-[#0A2A52] shadow-[0_18px_45px_rgba(7,31,61,0.22)]"
                  onKeyDown={(event) =>
                    handleMenuKeyDown(
                      event,
                      desktopProductItemsRef.current,
                      () => setDesktopProductsOpen(false),
                      desktopProductsTriggerRef,
                    )
                  }
                >
                  {productMenuItems.map((item, index) => (
                    <div key={item.href} role="none" className={index === 0 ? "mb-2 border-b border-slate-200 pb-2" : ""}>
                      <Link
                        ref={(element) => {
                          desktopProductItemsRef.current[index] = element;
                        }}
                        href={item.href}
                        role="menuitem"
                        className="group flex min-h-11 items-center justify-between gap-4 rounded-md px-3.5 py-2.5 text-sm font-semibold leading-5 text-[#0A2A52] transition hover:bg-[#0D3567] hover:text-white focus-visible:bg-[#0D3567] focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-300"
                        onClick={() => setDesktopProductsOpen(false)}
                      >
                        <span>{item.label}</span>
                        <span className="text-slate-400 transition group-hover:text-blue-100 group-focus-visible:text-blue-100">
                          <RightChevron />
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {navLinks.slice(1).map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 px-2.5 py-2 text-[15px] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:px-3 ${
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
          onClick={() => {
            setOpenAtPath(open ? null : pathname);
            setMobileProductsOpen(false);
          }}
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
        <div className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-white/10 bg-[#0A2A52] py-3 shadow-xl lg:hidden">
          <Container>
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              <Link
                href="/"
                aria-current={isActive("/") ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-base font-semibold hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  isActive("/") ? "bg-white/10 text-white" : "text-blue-50"
                }`}
                onClick={() => setOpenAtPath(null)}
              >
                Home
              </Link>

              <div ref={mobileProductsRef}>
                <button
                  ref={mobileProductsTriggerRef}
                  id="mobile-products-menu-button"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={mobileProductsOpen}
                  aria-controls="mobile-products-menu"
                  aria-current={productsActive ? "page" : undefined}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-semibold transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    productsActive ? "bg-white/10 text-white" : "text-blue-50"
                  }`}
                  onClick={() => setMobileProductsOpen((current) => !current)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                      event.preventDefault();
                      setMobileProductsOpen(true);
                      focusMenuItem(mobileProductItemsRef.current, event.key === "ArrowDown" ? "first" : "last");
                    }
                  }}
                >
                  Products
                  <DownChevron open={mobileProductsOpen} />
                </button>

                {mobileProductsOpen ? (
                  <div
                    id="mobile-products-menu"
                    role="menu"
                    aria-labelledby="mobile-products-menu-button"
                    className="mt-1 max-h-[min(58dvh,32rem)] overflow-y-auto rounded-lg border border-slate-200 bg-white p-2 text-[#0A2A52] shadow-[0_14px_35px_rgba(2,15,35,0.28)]"
                    onKeyDown={(event) =>
                      handleMenuKeyDown(
                        event,
                        mobileProductItemsRef.current,
                        () => setMobileProductsOpen(false),
                        mobileProductsTriggerRef,
                      )
                    }
                  >
                    {productMenuItems.map((item, index) => (
                      <div key={item.href} role="none" className={index === 0 ? "mb-2 border-b border-slate-200 pb-2" : ""}>
                        <Link
                          ref={(element) => {
                            mobileProductItemsRef.current[index] = element;
                          }}
                          href={item.href}
                          role="menuitem"
                          className="group flex min-h-11 items-center justify-between gap-4 rounded-md px-3.5 py-2.5 text-sm font-semibold leading-5 text-[#0A2A52] transition hover:bg-[#0D3567] hover:text-white focus-visible:bg-[#0D3567] focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-300"
                          onClick={() => {
                            setMobileProductsOpen(false);
                            setOpenAtPath(null);
                          }}
                        >
                          <span>{item.label}</span>
                          <span className="text-slate-400 transition group-hover:text-blue-100 group-focus-visible:text-blue-100">
                            <RightChevron />
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              {navLinks.slice(1).map((link) => {
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

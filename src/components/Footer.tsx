import Image from "next/image";
import Link from "next/link";
import { MarketplaceLinks } from "@/src/components/MarketplaceLinks";
import { branches } from "@/src/data/branches";
import { FACEBOOK_PAGE_URL, PUBLIC_EMAIL, SITE_NAME } from "@/src/lib/constants";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const primaryBranch = branches[0];

  return (
    <footer className="border-t-4 border-[#2E7FC1] bg-[#071f3d] text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_0.8fr_1fr] lg:gap-12 lg:py-16 xl:grid-cols-[1.55fr_0.7fr_0.8fr_1fr] xl:gap-16 2xl:py-20">
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
          <h2 className="eyebrow text-slate-400">Explore</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <Link href="/" className="hover:text-white/80">
              Home
            </Link>
            <Link href="/products" className="hover:text-white/80">
              Products
            </Link>
            <Link href="/about" className="hover:text-white/80">
              About Us
            </Link>
            <Link href="/projects" className="hover:text-white/80">
              Solutions
            </Link>
            <Link href="/contact" className="hover:text-white/80">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h2 className="eyebrow text-slate-400">Support</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <Link href="/downloads" className="hover:text-white/80">Downloads</Link>
            <Link href="/privacy" className="hover:text-white/80">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/80">Terms of Use</Link>
            <Link href="/warranty-returns" className="hover:text-white/80">Warranty and Returns</Link>
          </div>
        </div>
        <div>
          <h2 className="eyebrow text-slate-400">Contact</h2>
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
          {primaryBranch ? (
            <a
              href={primaryBranch.phoneHref}
              aria-label={`Call ${primaryBranch.name} at ${primaryBranch.phone}`}
              className="mt-3 block text-sm font-semibold hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {primaryBranch.phone}
            </a>
          ) : null}
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
      </Container>
      <div className="border-t border-white/10 py-5 text-xs leading-6 text-slate-400">
        <Container>
          Copyright {currentYear} {SITE_NAME}. Solar products, technical assistance, and sustainable energy solutions across the Philippines.
        </Container>
      </div>
    </footer>
  );
}

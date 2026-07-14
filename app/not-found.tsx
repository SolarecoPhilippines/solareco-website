import Link from "next/link";
import { Container } from "@/src/components/Container";

export default function NotFound() {
  return (
    <section className="section-shell bg-slate-50">
      <Container>
      <div className="surface-card mx-auto max-w-3xl p-8 text-center sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0D3567]">Page not found</p>
        <h1 className="detail-title mt-3 font-heading font-black text-slate-950">We could not find that page.</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The link may be outdated, or the requested product may not be published in the current catalog.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0D3567] px-5 py-3 text-sm font-semibold text-white hover:bg-[#15477f] focus-visible:outline-2 focus-visible:outline-offset-2">
            Return Home
          </Link>
          <Link href="/products" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#0D3567] px-5 py-3 text-sm font-semibold text-[#0D3567] hover:bg-[#0D3567] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2">
            Browse Products
          </Link>
        </div>
      </div>
      </Container>
    </section>
  );
}

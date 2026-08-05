import { Button } from "./Button";
import { Container } from "./Container";

type CtaBannerProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBanner({
  eyebrow = "Project support",
  title,
  description,
  primaryLabel = "Request a Quote",
  primaryHref = "/contact",
  secondaryLabel = "Explore Products",
  secondaryHref = "/products",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden border-y border-blue-300/25 bg-[#0A2A52] text-white">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-[linear-gradient(135deg,transparent_0%,rgba(98,168,229,0.12)_100%)] lg:block" aria-hidden="true" />
      <Container className="relative grid gap-8 py-[clamp(3rem,5vw,5.5rem)] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
        <div className="max-w-4xl border-l-2 border-[#62A8E5] pl-5 sm:pl-7">
          <p className="eyebrow text-blue-200">{eyebrow}</p>
          <h2 className="mt-3 max-w-3xl font-heading text-[clamp(2rem,3vw,3.5rem)] font-black leading-[1.08] tracking-[-0.03em]">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50/80 sm:text-base">{description}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button href={primaryHref} variant="light">{primaryLabel}</Button>
          <Button href={secondaryHref} variant="outlineLight">{secondaryLabel}</Button>
        </div>
      </Container>
    </section>
  );
}

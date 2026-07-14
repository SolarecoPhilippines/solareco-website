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
    <section className="py-10 sm:py-12">
      <Container>
        <div className="border-y border-blue-300/30 bg-[#0A2A52] px-6 py-8 text-white sm:px-9 sm:py-9 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-3xl border-l-2 border-[#62A8E5] pl-5 sm:pl-6">
            <p className="eyebrow text-blue-200">{eyebrow}</p>
            <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.025em] sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50/80 sm:text-base">{description}</p>
          </div>
          <div className="mt-7 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
            <Button href={primaryHref} variant="light">{primaryLabel}</Button>
            <Button href={secondaryHref} variant="outlineLight">{secondaryLabel}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

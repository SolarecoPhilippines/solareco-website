import type { ReactNode } from "react";
import { Container } from "./Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-[#0A2A52] py-11 text-white sm:py-14 lg:py-16">
      <Container className="grid gap-9 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:items-end lg:gap-[clamp(3rem,6vw,7rem)]">
        <div className="max-w-4xl">
          <p className="eyebrow text-blue-200">{eyebrow}</p>
          <h1 className="page-hero-title mt-4 font-heading font-black">
            {title}
          </h1>
          <p className="page-hero-copy mt-5 text-blue-50/85 sm:mt-6">{description}</p>
          {children ? <div className="mt-7">{children}</div> : null}
        </div>
        <div className="hidden max-w-md border-l border-white/20 pl-7 text-sm leading-7 text-blue-100/80 lg:block xl:pl-9">
          <p className="font-semibold text-white">Solareco Philippines</p>
          <p className="mt-3">Solar and electrical product supply</p>
          <p>Technical product coordination</p>
          <p>Nationwide branch support</p>
        </div>
      </Container>
    </section>
  );
}

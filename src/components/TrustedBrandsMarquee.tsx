import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

const brandLogos = [
  "SAKO Logo.png",
  "YRO Logo.png",
  "SOLAHESTIA Logo.png",
  "LUXPOWER Logo.png",
  "DALY Logo.png",
  "LEADER Logo.png",
  "ROYU Logo.png",
  "PHILFLEX Logo.png",
  "CSPOWER Logo.png",
  "SNADI Logo.png",
  "KOTEN Logo.png",
  "CNC Logo.png",
  "SUNLU Logo.png",
  "ESUN Logo.png",
  "NEATA Logo.png",
  "JD Logo.png",
  "HYBSUN Logo.png",
  "ASENWARE Logo.png",
];

function BrandLogo({ fileName }: { fileName: string }) {
  const brandName = fileName.replace(" Logo.png", "");

  return (
    <div className="trusted-brand-logo flex min-h-[110px] min-w-52 shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-[#0D3567] p-[22px] shadow-[0_10px_24px_rgba(13,53,103,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:border-white/35 hover:shadow-[0_14px_32px_rgba(13,53,103,0.25)]">
      <Image
        src={`/images/brands/${fileName}`}
        alt={`${brandName} logo`}
        width={220}
        height={80}
        className="max-h-[52px] w-auto max-w-[150px] object-contain sm:max-h-[56px] sm:max-w-[160px] lg:max-h-[60px] lg:max-w-[170px]"
      />
    </div>
  );
}

function BrandRow({ reverse = false }: { reverse?: boolean }) {
  const repeatedLogos = [...brandLogos, ...brandLogos];

  return (
    <div className="trusted-brand-marquee overflow-hidden py-2" aria-hidden="true">
      <div className={`flex w-max gap-6 ${reverse ? "trusted-brand-track-reverse" : "trusted-brand-track"}`}>
        {repeatedLogos.map((logo, index) => (
          <BrandLogo key={`${logo}-${index}`} fileName={logo} />
        ))}
      </div>
    </div>
  );
}

export function TrustedBrandsMarquee() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px]">
        <SectionTitle
          eyebrow="Trusted Brands"
          title="Trusted Brands"
          description="Authorized brands and product partners available through Solareco Philippines."
        />
        <div className="mt-10 space-y-5">
          <BrandRow />
          <div className="hidden sm:block">
            <BrandRow reverse />
          </div>
        </div>
      </div>
    </section>
  );
}

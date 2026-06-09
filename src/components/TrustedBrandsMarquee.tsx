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
    <div className="trusted-brand-logo flex h-[118px] w-full items-center justify-center rounded-[14px] border border-[#E2E8F0] bg-[#F4F6F8] p-[22px] shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-[#0D3567] hover:bg-[#E9EEF3] hover:shadow-[0_14px_32px_rgba(13,53,103,0.16)]">
      <Image
        src={`/images/brands/${fileName}`}
        alt={`${brandName} logo`}
        width={220}
        height={80}
        className="h-auto max-h-[60px] w-auto max-w-[170px] object-contain"
      />
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
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5">
          {brandLogos.map((logo) => (
            <BrandLogo key={logo} fileName={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

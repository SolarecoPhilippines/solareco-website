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
    <div className="trusted-brand-logo flex h-24 w-full items-center justify-center overflow-hidden border border-slate-200 bg-slate-50 p-3 sm:h-28 sm:p-4">
      <div className="flex h-16 w-full max-w-[200px] items-center justify-center overflow-hidden sm:h-20 sm:max-w-[220px]">
        <Image
          src={`/images/brands/${fileName}`}
          alt={`${brandName} logo`}
          width={240}
          height={96}
          className="block h-full max-h-16 w-full max-w-[200px] object-contain object-center sm:max-h-20 sm:max-w-[220px]"
        />
      </div>
    </div>
  );
}

export function TrustedBrandsGrid() {
  return (
    <section className="section-shell bg-white">
      <div className="site-container">
        <SectionTitle
          eyebrow="Product partners"
          title="Trusted Brands"
          description="Product brands represented across Solareco's current solar, electrical, battery, and industrial supply range."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {brandLogos.map((logo) => (
            <BrandLogo key={logo} fileName={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

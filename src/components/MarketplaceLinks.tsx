import Image from "next/image";

const marketplaceLinks = [
  {
    name: "Shopee",
    href: "https://ph.shp.ee/xWzxmXWS",
    src: "/images/logo/shopee.png",
  },
  {
    name: "Lazada",
    href: "https://s.lazada.com.ph/s.ZUQabv?c=a",
    src: "/images/logo/lazada.png",
  },
];

type MarketplaceLinksProps = {
  title?: string;
  theme?: "light" | "dark";
};

export function MarketplaceLinks({ title = "Available On", theme = "light" }: MarketplaceLinksProps) {
  const titleClass = theme === "dark" ? "text-slate-300" : "text-slate-500";
  const cardClass =
    theme === "dark"
      ? "border-white/15 bg-white shadow-lg shadow-slate-950/20"
      : "border-[#DCE6F0] bg-white shadow-sm shadow-slate-950/5";

  return (
    <div>
      <p className={`text-xs font-bold uppercase tracking-[0.16em] ${titleClass}`}>{title}</p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        {marketplaceLinks.map((marketplace) => (
          <a
            key={marketplace.name}
            href={marketplace.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Solareco on ${marketplace.name}`}
            className={`inline-flex h-11 items-center justify-center rounded-md border px-3 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] ${cardClass}`}
          >
            <Image
              src={marketplace.src}
              alt={`${marketplace.name} logo`}
              width={120}
              height={36}
              className="h-7 w-auto object-contain sm:h-8"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

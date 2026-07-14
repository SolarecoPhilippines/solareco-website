type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingLevel?: "h1" | "h2";
};

export function SectionTitle({ eyebrow, title, description, align = "left", headingLevel = "h2" }: SectionTitleProps) {
  const Heading = headingLevel;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl border-l-2 border-[#2E7FC1] pl-5 sm:pl-6"}>
      {eyebrow ? (
        <p className="eyebrow mb-3 text-[#0D3567]">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="section-title-text font-heading font-black text-slate-950">{title}</Heading>
      {description ? <p className="mt-4 max-w-3xl text-[1.0625rem] leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}

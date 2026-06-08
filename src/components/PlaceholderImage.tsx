type PlaceholderImageProps = {
  label: string;
  className?: string;
};

export function PlaceholderImage({ label, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`flex min-h-[260px] items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#eef5fb_52%,#dbeafe_100%)] p-8 text-center lg:min-h-[320px] ${className}`}
      role="img"
      aria-label={`${label} placeholder image`}
    >
      <div className="flex h-full min-h-[210px] w-full max-w-[78%] flex-col items-center justify-center rounded-lg border border-white/80 bg-white/70 px-6 py-8 shadow-sm backdrop-blur-sm lg:min-h-[250px]">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#0D3567]/15 bg-[#0D3567]/5 shadow-inner lg:h-28 lg:w-28">
          <div className="h-14 w-14 rounded-full bg-[#0D3567]/15 lg:h-16 lg:w-16" />
        </div>
        <p className="text-base font-bold uppercase tracking-[0.12em] text-[#0D3567] lg:text-lg">{label}</p>
        <p className="mt-3 text-sm font-medium text-slate-500">Product image coming soon</p>
      </div>
    </div>
  );
}

type PlaceholderImageProps = {
  label: string;
  className?: string;
};

export function PlaceholderImage({ label, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#e2e8f0_55%,#dbeafe_100%)] p-6 text-center ${className}`}
      role="img"
      aria-label={`${label} placeholder image`}
    >
      <div>
        <div className="mx-auto mb-4 h-12 w-12 rounded-full border border-[#0D3567]/20 bg-white/80" />
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0D3567]">{label}</p>
        <p className="mt-2 text-xs text-slate-500">Product image coming soon</p>
      </div>
    </div>
  );
}


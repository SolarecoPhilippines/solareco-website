import { Button } from "./Button";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export function EmptyState({ title, description, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="editorial-panel grid gap-5 px-5 py-7 sm:grid-cols-[40px_minmax(0,1fr)_auto] sm:items-center sm:px-7">
      <div className="text-[#0D3567]" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 3.8h7l4 4V20H7z" strokeLinejoin="round" />
          <path d="M14 3.8V8h4M9.5 13h5M9.5 16.5h3.5" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <h2 className="font-heading text-xl font-bold text-slate-950 sm:text-2xl">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{description}</p>
      </div>
      {actionLabel && actionHref ? <Button href={actionHref}>{actionLabel}</Button> : null}
    </div>
  );
}

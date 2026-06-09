import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

const variants = {
  primary:
    "bg-[#0D3567] text-white shadow-sm hover:bg-[#15477f] focus-visible:outline-[#0D3567]",
  secondary:
    "border border-[#0D3567] bg-white text-[#0D3567] shadow-sm duration-[250ms] hover:-translate-y-0.5 hover:bg-[#0D3567] hover:text-white hover:shadow-[0_12px_28px_rgba(13,53,103,0.18)] focus-visible:outline-[#0D3567]",
  light:
    "border border-white/30 bg-white text-[#0D3567] hover:bg-slate-100 focus-visible:outline-white",
};

export function Button({ href, children, variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

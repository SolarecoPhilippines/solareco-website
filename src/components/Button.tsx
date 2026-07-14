import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "outlineLight";
};

const variants = {
  primary:
    "border border-[#0D3567] bg-[#0D3567] text-white hover:bg-[#15477f] focus-visible:outline-[#0D3567]",
  secondary:
    "border border-[#0D3567] bg-white text-[#0D3567] hover:bg-[#0D3567] hover:text-white focus-visible:outline-[#0D3567]",
  light:
    "border border-white bg-white text-[#0D3567] hover:bg-slate-100 focus-visible:outline-white",
  outlineLight:
    "border border-white/35 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:outline-white",
};

export function Button({ href, children, variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-md px-5 py-2.5 text-[15px] font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
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

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<"button"> & {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  children: ReactNode;
};

const variants = {
  primary:
    "bg-primary text-secondary hover:bg-primary/90 focus-visible:ring-primary",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-secondary focus-visible:ring-primary",
  ghost: "text-primary hover:text-white focus-visible:ring-white",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary focus-visible:outline-none",
    variants[variant],
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

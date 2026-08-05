import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:opacity-50";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants = {
  primary:
    "text-background bg-accent shadow-[0_1px_2px_rgba(42,33,24,0.08),0_10px_24px_-10px_rgba(181,80,44,0.55)] hover:bg-accent-strong hover:-translate-y-0.5",
  outline:
    "text-foreground border border-foreground/15 hover:border-foreground/30 bg-foreground/[0.02] hover:bg-foreground/[0.06] hover:-translate-y-0.5",
  ghost: "text-foreground/80 hover:text-foreground hover:bg-foreground/[0.06]",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto");
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

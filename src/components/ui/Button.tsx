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
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/60 disabled:opacity-50";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants = {
  primary:
    "text-white bg-[linear-gradient(100deg,var(--accent-violet),var(--accent-pink))] bg-[length:200%_auto] bg-left hover:bg-right shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-8px_rgba(139,92,246,0.6)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_40px_-6px_rgba(236,72,153,0.55)] hover:-translate-y-0.5",
  outline:
    "text-white border border-white/15 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.06] hover:-translate-y-0.5",
  ghost: "text-white/80 hover:text-white hover:bg-white/[0.06]",
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

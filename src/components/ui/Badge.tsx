import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  invert,
}: {
  children: React.ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-bold tracking-wide sm:px-6 sm:py-2.5 sm:text-base",
        invert
          ? "border-white/15 bg-white/[0.06] text-white"
          : "border-primary-light/25 bg-primary-light/[0.08] text-primary-light",
        className
      )}
    >
      {children}
    </span>
  );
}

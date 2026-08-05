import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-accent-strong",
        className
      )}
    >
      {children}
    </span>
  );
}

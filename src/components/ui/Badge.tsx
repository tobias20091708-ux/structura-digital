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
        "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary-bg px-4 py-1.5 text-xs font-medium tracking-wide text-primary-strong",
        className
      )}
    >
      {children}
    </span>
  );
}

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
        "inline-flex items-center gap-2 rounded-full border border-primary-light/20 bg-primary-light/[0.07] px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-light",
        className
      )}
    >
      {children}
    </span>
  );
}

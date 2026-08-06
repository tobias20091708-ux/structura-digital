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
        "inline-flex items-center gap-2 rounded-full border border-primary-light/25 bg-primary-light/[0.08] px-5 py-2 text-sm font-bold tracking-wide text-primary-light sm:px-6 sm:py-2.5 sm:text-base",
        className
      )}
    >
      {children}
    </span>
  );
}

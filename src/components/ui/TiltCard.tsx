import { cn } from "@/lib/cn";

export function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  glare?: boolean;
  max?: number;
}) {
  return <div className={cn("relative", className)}>{children}</div>;
}

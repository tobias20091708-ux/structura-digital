import { cn } from "@/lib/cn";

export function GradientText({
  children,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3";
}) {
  return <Tag className={cn("font-serif text-primary italic", className)}>{children}</Tag>;
}

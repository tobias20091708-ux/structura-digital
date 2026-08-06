import { Boxes } from "lucide-react";
import { cn } from "@/lib/cn";

export function Logo({ className, invert }: { className?: string; invert?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-bold tracking-tight", className)}>
      <span
        className={cn(
          "relative flex h-8 w-8 items-center justify-center rounded-xl",
          invert ? "bg-white/10" : "bg-primary"
        )}
      >
        <Boxes className={invert ? "text-white" : "text-background"} strokeWidth={2.25} size={18} />
      </span>
      <span className={invert ? "text-white" : "text-foreground"}>
        Structura
        <span className={invert ? "font-normal text-white/50" : "font-normal text-foreground/50"}>
          Digital
        </span>
      </span>
    </span>
  );
}

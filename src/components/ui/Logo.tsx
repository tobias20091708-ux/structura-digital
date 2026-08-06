import { Boxes } from "lucide-react";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-semibold tracking-tight", className)}>
      <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-primary">
        <Boxes className="text-background" strokeWidth={2.25} size={18} />
      </span>
      <span className="text-foreground">
        Structura<span className="text-foreground/50 font-normal">Digital</span>
      </span>
    </span>
  );
}

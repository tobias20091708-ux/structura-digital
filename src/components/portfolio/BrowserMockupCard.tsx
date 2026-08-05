import { Globe, Lock } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/cn";
import type { PortfolioItem, PortfolioTheme } from "@/lib/data";

const theme: Record<
  PortfolioTheme,
  { block: string; blockSoft: string; text: string; chip: string }
> = {
  amber: {
    block: "bg-gradient-to-br from-amber-400 to-orange-600",
    blockSoft: "bg-amber-400/20",
    text: "text-amber-700",
    chip: "bg-amber-500/15 text-amber-700",
  },
  emerald: {
    block: "bg-gradient-to-br from-emerald-400 to-teal-600",
    blockSoft: "bg-emerald-400/20",
    text: "text-emerald-700",
    chip: "bg-emerald-500/15 text-emerald-700",
  },
  violet: {
    block: "bg-gradient-to-br from-violet-400 to-fuchsia-600",
    blockSoft: "bg-violet-400/20",
    text: "text-violet-700",
    chip: "bg-violet-500/15 text-violet-700",
  },
  slate: {
    block: "bg-gradient-to-br from-slate-400 to-blue-600",
    blockSoft: "bg-slate-400/20",
    text: "text-slate-700",
    chip: "bg-slate-500/15 text-slate-700",
  },
  rose: {
    block: "bg-gradient-to-br from-rose-400 to-pink-600",
    blockSoft: "bg-rose-400/20",
    text: "text-rose-700",
    chip: "bg-rose-500/15 text-rose-700",
  },
  teal: {
    block: "bg-gradient-to-br from-teal-400 to-emerald-600",
    blockSoft: "bg-teal-400/20",
    text: "text-teal-700",
    chip: "bg-teal-500/15 text-teal-700",
  },
};

function MockupBody({ item, t }: { item: PortfolioItem; t: (typeof theme)[PortfolioTheme] }) {
  if (item.layout === "split") {
    return (
      <div className="grid grid-cols-5 gap-3 p-4">
        <div className="col-span-3 space-y-2.5">
          <div className="h-2.5 w-16 rounded-full bg-foreground/15" />
          <div className="h-4 w-4/5 rounded bg-foreground/25" />
          <div className="h-4 w-3/5 rounded bg-foreground/25" />
          <div className="h-2 w-full rounded bg-foreground/10" />
          <div className="h-2 w-4/5 rounded bg-foreground/10" />
          <div className={cn("mt-3 h-6 w-24 rounded-full", t.block)} />
        </div>
        <div className={cn("col-span-2 rounded-xl", t.block, "opacity-80")} />
      </div>
    );
  }

  if (item.layout === "centered") {
    return (
      <div className="flex flex-col items-center gap-3 p-6 text-center">
        <div className="h-2 w-20 rounded-full bg-foreground/15" />
        <div className="h-5 w-3/4 rounded bg-foreground/25" />
        <div className="h-2.5 w-1/2 rounded bg-foreground/10" />
        <div className={cn("mt-2 h-7 w-28 rounded-full", t.block)} />
        <div className="mt-3 grid w-full grid-cols-3 gap-2">
          <div className={cn("h-10 rounded-lg", t.blockSoft)} />
          <div className={cn("h-10 rounded-lg", t.blockSoft)} />
          <div className={cn("h-10 rounded-lg", t.blockSoft)} />
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-2.5 w-20 rounded-full bg-foreground/15" />
        <div className={cn("h-5 w-14 rounded-full", t.block)} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className={cn("aspect-[4/3] rounded-lg", t.block, "opacity-90")} />
        <div className={cn("aspect-[4/3] rounded-lg", t.blockSoft)} />
        <div className={cn("aspect-[4/3] rounded-lg", t.blockSoft)} />
        <div className={cn("aspect-[4/3] rounded-lg", t.blockSoft)} />
        <div className={cn("aspect-[4/3] rounded-lg", t.block, "opacity-70")} />
        <div className={cn("aspect-[4/3] rounded-lg", t.blockSoft)} />
      </div>
    </div>
  );
}

export function BrowserMockupCard({ item }: { item: PortfolioItem }) {
  const t = theme[item.theme];

  return (
    <TiltCard className="h-full rounded-2xl" max={6}>
      <div className="glow-border h-full rounded-2xl">
        <div className="card relative flex h-full flex-col overflow-hidden rounded-2xl">
          {/* browser chrome */}
          <div className="flex items-center gap-2 border-b border-foreground/10 bg-foreground/[0.03] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
            <div className="ml-2 flex flex-1 items-center gap-1.5 rounded-full bg-foreground/[0.06] px-3 py-1 text-[11px] text-foreground/40">
              <Lock className="h-2.5 w-2.5" />
              {item.url}
            </div>
          </div>

          <div className="min-h-[168px] flex-1 bg-foreground/[0.015]">
            <MockupBody item={item} t={t} />
          </div>

          <div className="border-t border-foreground/10 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className={cn("text-xs font-medium", t.text)}>{item.category}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{item.name}</h3>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground/10 text-foreground/40">
                <Globe className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/50">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn("rounded-full px-2.5 py-1 text-[11px] font-medium", t.chip)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

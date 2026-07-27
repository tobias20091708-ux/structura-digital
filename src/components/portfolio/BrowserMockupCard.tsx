import { Globe, Lock } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/cn";
import type { PortfolioItem, PortfolioTheme } from "@/lib/data";

const theme: Record<
  PortfolioTheme,
  { glow: string; block: string; blockSoft: string; text: string; chip: string }
> = {
  amber: {
    glow: "from-amber-500/30 via-orange-500/10 to-transparent",
    block: "bg-gradient-to-br from-amber-400 to-orange-600",
    blockSoft: "bg-amber-400/20",
    text: "text-amber-300",
    chip: "bg-amber-400/15 text-amber-300",
  },
  emerald: {
    glow: "from-emerald-500/30 via-teal-500/10 to-transparent",
    block: "bg-gradient-to-br from-emerald-400 to-teal-600",
    blockSoft: "bg-emerald-400/20",
    text: "text-emerald-300",
    chip: "bg-emerald-400/15 text-emerald-300",
  },
  violet: {
    glow: "from-violet-500/30 via-fuchsia-500/10 to-transparent",
    block: "bg-gradient-to-br from-violet-400 to-fuchsia-600",
    blockSoft: "bg-violet-400/20",
    text: "text-violet-300",
    chip: "bg-violet-400/15 text-violet-300",
  },
  slate: {
    glow: "from-slate-400/25 via-blue-500/10 to-transparent",
    block: "bg-gradient-to-br from-slate-400 to-blue-600",
    blockSoft: "bg-slate-400/20",
    text: "text-slate-300",
    chip: "bg-slate-400/15 text-slate-300",
  },
  rose: {
    glow: "from-rose-500/30 via-pink-500/10 to-transparent",
    block: "bg-gradient-to-br from-rose-400 to-pink-600",
    blockSoft: "bg-rose-400/20",
    text: "text-rose-300",
    chip: "bg-rose-400/15 text-rose-300",
  },
  teal: {
    glow: "from-teal-500/30 via-emerald-500/10 to-transparent",
    block: "bg-gradient-to-br from-teal-400 to-emerald-600",
    blockSoft: "bg-teal-400/20",
    text: "text-teal-300",
    chip: "bg-teal-400/15 text-teal-300",
  },
};

function MockupBody({ item, t }: { item: PortfolioItem; t: (typeof theme)[PortfolioTheme] }) {
  if (item.layout === "split") {
    return (
      <div className="grid grid-cols-5 gap-3 p-4">
        <div className="col-span-3 space-y-2.5">
          <div className="h-2.5 w-16 rounded-full bg-white/15" />
          <div className="h-4 w-4/5 rounded bg-white/25" />
          <div className="h-4 w-3/5 rounded bg-white/25" />
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-4/5 rounded bg-white/10" />
          <div className={cn("mt-3 h-6 w-24 rounded-full", t.block)} />
        </div>
        <div className={cn("col-span-2 rounded-xl", t.block, "opacity-80")} />
      </div>
    );
  }

  if (item.layout === "centered") {
    return (
      <div className="flex flex-col items-center gap-3 p-6 text-center">
        <div className="h-2 w-20 rounded-full bg-white/15" />
        <div className="h-5 w-3/4 rounded bg-white/25" />
        <div className="h-2.5 w-1/2 rounded bg-white/10" />
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
        <div className="h-2.5 w-20 rounded-full bg-white/15" />
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
        <div className="glass relative flex h-full flex-col overflow-hidden rounded-2xl">
          <div
            aria-hidden
            className={cn("pointer-events-none absolute -inset-16 -z-10 bg-gradient-to-br blur-3xl", t.glow)}
          />

          {/* browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="ml-2 flex flex-1 items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1 text-[11px] text-white/40">
              <Lock className="h-2.5 w-2.5" />
              {item.url}
            </div>
          </div>

          <div className="min-h-[168px] flex-1 bg-white/[0.015]">
            <MockupBody item={item} t={t} />
          </div>

          <div className="border-t border-white/10 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className={cn("text-xs font-medium", t.text)}>{item.category}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{item.name}</h3>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40">
                <Globe className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/50">{item.description}</p>
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

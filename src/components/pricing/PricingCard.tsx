import { Check, Star } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { PricingTier } from "@/lib/data";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <TiltCard className="h-full rounded-3xl" max={tier.featured ? 8 : 5}>
      <div
        className={cn(
          "relative flex h-full flex-col rounded-3xl p-8",
          tier.featured
            ? "glass border border-accent-violet/40 shadow-[0_0_0_1px_rgba(139,92,246,0.25),0_30px_60px_-20px_rgba(139,92,246,0.45)]"
            : "glass"
        )}
      >
        {tier.featured && (
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-20 -z-10 bg-[radial-gradient(circle,rgba(139,92,246,0.25),transparent_65%)]"
          />
        )}

        {tier.featured && (
          <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[linear-gradient(100deg,var(--accent-violet),var(--accent-pink))] px-4 py-1.5 text-xs font-semibold text-white shadow-[0_8px_20px_-6px_rgba(139,92,246,0.7)]">
            <Star className="h-3 w-3 fill-current" />
            Mest populær
          </span>
        )}

        <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
        <p className="mt-1 text-sm text-white/50">{tier.tagline}</p>

        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-4xl font-semibold tracking-tight text-white">{tier.price}</span>
          {!tier.priceNote && tier.price !== "Skræddersyet" && (
            <span className="text-sm text-white/40">start</span>
          )}
        </div>
        {tier.priceNote && <p className="mt-1 text-xs text-accent-cyan">{tier.priceNote}</p>}

        <ul className="mt-8 flex-1 space-y-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-white/70">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          href="/kontakt"
          variant={tier.featured ? "primary" : "outline"}
          className="mt-8 w-full"
        >
          {tier.cta}
        </Button>
      </div>
    </TiltCard>
  );
}

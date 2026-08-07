import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { PricingPackage } from "@/lib/data";

const badgeLabels = {
  popular: "Mest populær",
  value: "Bedste værdi",
};

export function PackageCard({
  pkg,
  highlighted,
  ctaLabel = "Kom i gang",
  className,
}: {
  pkg: PricingPackage;
  highlighted?: boolean;
  ctaLabel?: string;
  className?: string;
}) {
  const emphasized = highlighted || pkg.badge === "popular";

  return (
    <div
      className={cn(
        "card relative flex h-full flex-col rounded-2xl p-7",
        emphasized && "glow-border ring-1 ring-primary-light/30",
        className
      )}
    >
      {pkg.badge && (
        <span
          className={cn(
            "absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-bold tracking-wide text-white",
            pkg.badge === "popular" ? "bg-accent" : "bg-primary-light"
          )}
        >
          {badgeLabels[pkg.badge]}
        </span>
      )}

      <h3 className="text-lg font-bold text-foreground">{pkg.name}</h3>
      <p className="mt-1 text-sm text-muted">{pkg.tagline}</p>

      <p className="mt-5 flex items-baseline gap-1.5">
        <span className="text-4xl font-bold tracking-tight text-foreground">
          {pkg.price} kr.
        </span>
        <span className="text-xs text-muted">ekskl. moms</span>
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            {feature}
          </li>
        ))}
      </ul>

      {pkg.addon && (
        <p className="mt-4 rounded-lg bg-primary-light/[0.07] px-3 py-2 text-xs font-medium text-primary-light">
          {pkg.addon}
        </p>
      )}

      <div className="mt-auto pt-7">
        <Button
          href="/kontakt"
          variant={emphasized ? "primary" : "outline"}
          className="w-full"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}

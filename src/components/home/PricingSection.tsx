import { Check, Flame } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { pricingPackages, launchOffer } from "@/lib/data";

export function PricingSection() {
  return (
    <section id="priser" className="bg-background py-20 sm:py-28">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge>Priser</Badge>
          <h2 className="mt-6 text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Tre pakker. Faste priser. Ingen overraskelser.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/55">
            Du betaler én gang. Ingen binding, ingen skjulte gebyrer.
          </p>
        </AnimatedSection>

        <AnimatedSection
          delay={0.1}
          className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-3 rounded-full border border-accent/25 bg-accent/[0.08] px-5 py-3 text-center"
        >
          <Flame className="h-4 w-4 shrink-0 text-accent" />
          <p className="text-sm font-semibold text-accent-strong">{launchOffer.headline}</p>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPackages.map((pkg, i) => (
            <AnimatedSection key={pkg.id} delay={i * 0.1}>
              <div
                className={cn(
                  "card relative flex h-full flex-col rounded-2xl p-8",
                  pkg.highlighted && "glow-border border-primary-light/40 shadow-[0_1px_2px_rgba(31,41,55,0.06),0_24px_48px_-24px_rgba(63,148,120,0.35)]"
                )}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-light px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Mest valgt
                  </span>
                )}
                <h3 className="text-xl text-foreground">{pkg.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-foreground/45">{pkg.priceNote}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/55">
                  {pkg.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/kontakt"
                  variant={pkg.highlighted ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {pkg.ctaLabel}
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-foreground/45">
          Ikke sikker på hvad du har brug for? Ring, så finder vi ud af det sammen — helt uforpligtende.
        </p>
      </Container>
    </section>
  );
}

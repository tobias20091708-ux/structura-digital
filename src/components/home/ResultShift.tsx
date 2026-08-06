import { X, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { resultShift } from "@/lib/data";

export function ResultShift() {
  return (
    <section className="relative py-28 sm:py-36">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge>Forvandlingen</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Fra usynlig til <GradientText>uundgåelig</GradientText>
          </h2>
        </AnimatedSection>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          <AnimatedSection direction="left" className="card rounded-3xl p-8">
            <span className="text-xs font-semibold tracking-wide text-foreground/40 uppercase">
              Før
            </span>
            <ul className="mt-5 space-y-4">
              {resultShift.before.map((line) => (
                <li key={line} className="flex items-start gap-3 text-foreground/60">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-foreground/30" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1} className="glow-border rounded-3xl">
            <div className="card h-full rounded-3xl p-8">
              <span className="text-xs font-semibold tracking-wide text-success uppercase">
                Efter
              </span>
              <ul className="mt-5 space-y-4">
                {resultShift.after.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

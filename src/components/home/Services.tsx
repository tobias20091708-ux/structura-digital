import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { services, contact } from "@/lib/data";

export function Services() {
  return (
    <section id="ydelser" className="relative py-28 sm:py-36">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge>Ydelser</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Det du får ud af at <GradientText>arbejde med os</GradientText>
          </h2>
          <p className="mt-5 text-lg text-foreground/55">
            Fire ydelser, ét mål: at flere kunder finder og vælger dig.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <TiltCard className="glow-border h-full rounded-3xl">
                <div className="card relative flex h-full flex-col rounded-3xl p-8">
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-foreground/70">
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm font-medium text-foreground/85">{service.result}</p>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-12 text-center">
          <p className="text-lg font-medium text-foreground">{contact.priceLine}</p>
        </AnimatedSection>
      </Container>
    </section>
  );
}

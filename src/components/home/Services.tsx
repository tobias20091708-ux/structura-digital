import { Layout, GraduationCap, Network, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { services, type Service } from "@/lib/data";

const icons: Record<Service["icon"], React.ComponentType<{ className?: string }>> = {
  layout: Layout,
  graduation: GraduationCap,
  network: Network,
};

export function Services() {
  return (
    <section className="relative py-28 sm:py-36">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge>Ydelser</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Alt du behøver for at bygge <GradientText>digitalt fundament</GradientText>
          </h2>
          <p className="mt-5 text-lg text-white/55">
            Tre kerneydelser, ét struktureret forløb — fra første idé til lanceret platform.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <TiltCard className="glow-border h-full rounded-3xl">
                  <div className="glass relative flex h-full flex-col rounded-3xl p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent-violet),var(--accent-cyan))]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-2.5 text-sm text-white/70">
                          <Check className="h-4 w-4 shrink-0 text-accent-cyan" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

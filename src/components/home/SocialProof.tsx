import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { testimonials, howItWorks, trustBadges } from "@/lib/data";

export function SocialProof() {
  return (
    <section className="relative py-28 sm:py-36">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge>Sådan fungerer det</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Nemt at komme <GradientText>i gang</GradientText>
          </h2>
        </AnimatedSection>

        <div className="relative mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {howItWorks.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1} className="bg-[#06070d] p-8">
              <span className="gradient-text text-4xl font-bold">{step.number}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{step.description}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15} className="mt-20 text-center">
          <Badge>Hvad kunder siger</Badge>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass flex h-full flex-col justify-between rounded-3xl p-8">
                <p className="text-base leading-relaxed text-white/70 italic">“{t.quote}”</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/45">{t.company}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection
          delay={0.2}
          className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {trustBadges.map((badge) => (
            <span key={badge} className="text-sm font-medium text-white/55">
              {badge}
            </span>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}

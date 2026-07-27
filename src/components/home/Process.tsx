import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section className="relative py-28 sm:py-36">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge>Processen</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Sådan <GradientText>strukturerer</GradientText> vi dit projekt
          </h2>
          <p className="mt-5 text-lg text-white/55">
            Et gennemsigtigt forløb i fire trin — fra idé til lancering.
          </p>
        </AnimatedSection>

        <div className="relative mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1} className="bg-[#06070d] p-8">
              <span className="gradient-text text-4xl font-bold">{step.number}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{step.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

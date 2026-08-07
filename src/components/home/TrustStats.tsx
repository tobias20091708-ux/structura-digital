import { ShieldCheck, Zap, Layers, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { trustStats } from "@/lib/data";

const techBadges = [
  { icon: Zap, label: "Bygget i Next.js" },
  { icon: Globe2, label: "Hosted på Vercel" },
  { icon: Layers, label: "Tailwind CSS" },
  { icon: ShieldCheck, label: "GDPR-klar" },
];

export function TrustStats() {
  return (
    <section className="border-y border-white/[0.07] bg-dark py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {trustStats.map((item, i) => (
            <AnimatedSection key={item.stat} delay={i * 0.1} className="text-center sm:text-left">
              <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                {item.stat}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-12 border-t border-white/[0.07] pt-8">
          <p className="text-center text-sm font-medium text-white/40">
            Vi er nye — men vi bygger som de store.
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {techBadges.map((badge) => (
              <li
                key={badge.label}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/55"
              >
                <badge.icon className="h-4 w-4 text-primary-light" />
                {badge.label}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { CheckCircle2, Flame, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CallbackForm } from "@/components/contact/CallbackForm";
import { PricingSection } from "@/components/home/PricingSection";
import { contact, launchOffer, type Industry } from "@/lib/data";

export function IndustryLandingPage({ industry }: { industry: Industry }) {
  return (
    <>
      <section className="grain relative overflow-hidden bg-dark pt-40 pb-20 sm:pt-48 sm:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-90"
        >
          <div className="absolute left-1/2 top-[-20%] h-[42rem] w-[68rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(228,87,46,0.16),transparent)]" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.05] px-5 py-2 text-sm font-semibold text-white/75 backdrop-blur-sm">
              Hjemmeside til {industry.title}
            </span>

            <h1 className="mt-8 text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl">
              {industry.heroHeading}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              {industry.heroSub}
            </p>

            <div className="mx-auto mt-8 flex w-fit items-center gap-2.5 rounded-full border border-accent/30 bg-accent/[0.1] px-5 py-2 text-sm font-semibold text-accent">
              <Flame className="h-4 w-4" />
              {launchOffer.headline}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href={contact.phoneHref} size="lg">
                <Phone className="h-4 w-4" />
                Ring {contact.phone}
              </Button>
            </div>

            <div className="mx-auto mt-6 max-w-md">
              <p className="mb-3 text-sm text-white/45">Eller udfyld — så ringer vi dig op:</p>
              <CallbackForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl text-foreground sm:text-3xl">
              Hvorfor {industry.title} har brug for en hjemmeside
            </h2>
            <ul className="mt-8 space-y-5">
              {industry.painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-foreground/70">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-light" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-foreground/60">
              Vil du se, hvordan det ser ud med dit eget firma? Se{" "}
              <Link href="/eksempel/vvs-demo" className="font-semibold text-primary-light hover:text-primary">
                et eksempel her
              </Link>
              , eller ring, så bygger vi en gratis demo med dit firmanavn.
            </p>
          </div>
        </Container>
      </section>

      <PricingSection />
    </>
  );
}

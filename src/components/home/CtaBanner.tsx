import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { contact } from "@/lib/data";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark to-primary py-14 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:36px_36px]"
      />
      <Container className="relative text-center">
        <AnimatedSection>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Klar til at komme online?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Kontakt os i dag for en uforpligtende snak om din nye hjemmeside.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={contact.phoneHref} size="lg">
              <Phone className="h-4 w-4" />
              Ring {contact.phone}
            </Button>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Send en mail
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Info, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DemoSiteTemplate } from "@/components/demo/DemoSiteTemplate";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Eksempel: Hjemmeside til VVS-firma | Webløsning.dk",
  description:
    "Se et eksempel på, hvordan en hjemmeside til et VVS-firma kan se ud. Vi bygger en gratis, personlig demo til din virksomhed på samme måde.",
};

const demoData = {
  companyName: "Andersen VVS",
  industryLabel: "VVS",
  tagline: "Din lokale VVS'er",
  city: "København",
  phone: "12 34 56 78",
  phoneHref: "tel:+4512345678",
  services: [
    "Akut rørskade og vandskade",
    "Nyt badeværelse",
    "Varmepumper og fjernvarme",
    "Afløb og kloak",
    "Service og reparation",
    "Erhvervsopgaver",
  ],
  about:
    "Vi rykker ud hurtigt og laver arbejdet ordentligt første gang. Ring, så finder vi en løsning.",
  accent: "#1e3a34",
};

export default function VvsDemoPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="mx-auto mb-8 flex max-w-3xl items-start gap-3 rounded-xl border border-primary-light/25 bg-primary-light/[0.06] px-5 py-4 text-sm text-foreground/70">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
          <p>
            <strong className="text-foreground">Dette er et eksempel</strong> — ikke en rigtig
            kunde. Det viser stilen på en hjemmeside, vi kan bygge til dit VVS-firma. Vi bygger en
            tilsvarende, gratis demo med dit eget firmanavn, logo og ydelser, før du beslutter dig
            for noget.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <DemoSiteTemplate data={demoData} />
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="text-2xl text-foreground sm:text-3xl">
            Vil du have en gratis demo af din egen hjemmeside?
          </h2>
          <p className="max-w-xl text-foreground/60">
            Ring eller skriv til os. Vi bygger en demo med dit firma på 30 minutter — helt gratis
            og uden binding.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={contact.phoneHref} size="lg">
              <Phone className="h-4 w-4" />
              Ring {contact.phone}
            </Button>
            <Link
              href="/kontakt"
              className="text-sm font-semibold text-primary-light hover:text-primary"
            >
              Eller send en besked →
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

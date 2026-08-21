import { Hero } from "@/components/home/Hero";
import { PricingSection } from "@/components/home/PricingSection";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";
import { CaseSection } from "@/components/home/CaseSection";
import { TrustStats } from "@/components/home/TrustStats";
import { ServicesBento } from "@/components/home/ServicesBento";
import { Process } from "@/components/home/Process";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <PricingSection />
      <ShowcaseSection />
      <CaseSection />
      <TrustStats />
      <ServicesBento />
      <Process />
      <CtaBanner />
    </>
  );
}

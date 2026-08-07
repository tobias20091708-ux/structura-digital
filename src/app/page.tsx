import { Hero } from "@/components/home/Hero";
import { TrustStats } from "@/components/home/TrustStats";
import { AboutVideo } from "@/components/home/AboutVideo";
import { DemoShowcase } from "@/components/home/DemoShowcase";
import { ServicesTabs } from "@/components/home/ServicesTabs";
import { Process } from "@/components/home/Process";
import { Benefits } from "@/components/home/Benefits";
import { CtaBanner } from "@/components/home/CtaBanner";
import { FaqSection } from "@/components/home/FaqSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <AboutVideo />
      <DemoShowcase />
      <ServicesTabs />
      <Process />
      <Benefits />
      <CtaBanner />
      <FaqSection />
    </>
  );
}

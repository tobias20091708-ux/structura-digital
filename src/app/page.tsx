import { Hero } from "@/components/home/Hero";
import { TrustStats } from "@/components/home/TrustStats";
import { ServicesBento } from "@/components/home/ServicesBento";
import { Process } from "@/components/home/Process";
import { AboutVideo } from "@/components/home/AboutVideo";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <ServicesBento />
      <Process />
      <AboutVideo />
      <FaqSection />
      <CtaBanner />
    </>
  );
}

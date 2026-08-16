import { Hero } from "@/components/home/Hero";
import { TrustStats } from "@/components/home/TrustStats";
import { ServicesBento } from "@/components/home/ServicesBento";
import { Process } from "@/components/home/Process";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <ServicesBento />
      <Process />
      <CtaBanner />
    </>
  );
}

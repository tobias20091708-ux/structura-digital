import { Hero } from "@/components/home/Hero";
import { PainPoints } from "@/components/home/PainPoints";
import { Services } from "@/components/home/Services";
import { SocialProof } from "@/components/home/SocialProof";
import { ResultShift } from "@/components/home/ResultShift";
import { FaqSection } from "@/components/home/FaqSection";
import { Cta } from "@/components/home/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <SocialProof />
      <ResultShift />
      <FaqSection />
      <Cta />
    </>
  );
}

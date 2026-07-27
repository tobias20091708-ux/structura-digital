import { Hero } from "@/components/home/Hero";
import { ServicesMarquee } from "@/components/home/ServicesMarquee";
import { Services } from "@/components/home/Services";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { Process } from "@/components/home/Process";
import { FaqSection } from "@/components/home/FaqSection";
import { Cta } from "@/components/home/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <Services />
      <PortfolioPreview />
      <Process />
      <FaqSection />
      <Cta />
    </>
  );
}

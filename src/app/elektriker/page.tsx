import type { Metadata } from "next";
import { IndustryLandingPage } from "@/components/industry/IndustryLandingPage";
import { industries } from "@/lib/data";

const industry = industries.find((i) => i.slug === "elektriker")!;

export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
};

export default function ElektrikerPage() {
  return <IndustryLandingPage industry={industry} />;
}

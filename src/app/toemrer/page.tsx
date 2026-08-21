import type { Metadata } from "next";
import { IndustryLandingPage } from "@/components/industry/IndustryLandingPage";
import { industries } from "@/lib/data";

const industry = industries.find((i) => i.slug === "tommer")!;

export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
};

export default function TommerPage() {
  return <IndustryLandingPage industry={industry} />;
}

import type { Metadata } from "next";
import {
  HeroSection,
  PartnersSection,
  IntegrationsSection,
  FraudSection,
  BusinessPaymentsSection,
  SplitPaymentsSection,
  FAQSection,
} from "@/components/home";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.kulmipay.com",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <IntegrationsSection />
      <FraudSection />
      <BusinessPaymentsSection />
      <SplitPaymentsSection />
      <FAQSection />
    </>
  );
}

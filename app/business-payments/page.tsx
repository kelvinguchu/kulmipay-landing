import type { Metadata } from "next";
import { BusinessPaymentsHero } from "@/components/products/business-payments/BusinessPaymentsHero";
import { BusinessPaymentsContent } from "@/components/products/business-payments/BusinessPaymentsContent";

export const metadata: Metadata = {
  title: "Business Payments",
  description:
    "Send single or bulk payments to M-Pesa, banks, and paybills. Pay up to 5,000 recipients at once with real-time confirmations and automatic reporting.",
  alternates: {
    canonical: "https://www.kulmipay.com/business-payments",
  },
  openGraph: {
    title: "Business Payments",
    description:
      "Send single or bulk payments to M-Pesa, banks, and paybills. Pay up to 5,000 recipients at once with real-time confirmations and automatic reporting.",
    url: "https://www.kulmipay.com/business-payments",
  },
  twitter: {
    title: "Business Payments",
    description:
      "Send single or bulk payments to M-Pesa, banks, and paybills. Pay up to 5,000 recipients at once.",
  },
};

export default function BusinessPaymentsPage() {
  return (
    <>
      <BusinessPaymentsHero />
      <BusinessPaymentsContent />
    </>
  );
}

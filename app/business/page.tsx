import type { Metadata } from "next";
import { BusinessHero } from "@/components/products/business/BusinessHero";
import { BusinessContent } from "@/components/products/business/BusinessContent";

export const metadata: Metadata = {
  title: "Business Account",
  description:
    "Collect card payments, process mobile money, and send funds from a single dashboard. KulmiPay simplifies business finances for African companies.",
  alternates: {
    canonical: "https://www.kulmipay.com/business",
  },
  openGraph: {
    title: "Business Account",
    description:
      "Collect card payments, process mobile money, and send funds from a single dashboard. KulmiPay simplifies business finances for African companies.",
    url: "https://www.kulmipay.com/business",
  },
  twitter: {
    title: "Business Account",
    description:
      "Collect card payments, process mobile money, and send funds from a single dashboard.",
  },
};

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <BusinessContent />
    </>
  );
}

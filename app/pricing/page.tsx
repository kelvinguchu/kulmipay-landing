import type { Metadata } from "next";
import { PricingContent } from "@/components/company/pricing/PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, competitive pricing for M-Pesa, card, and bank payments. Start free with no setup fees and scale with our Business and Enterprise plans.",
  alternates: {
    canonical: "https://www.kulmipay.com/pricing",
  },
  openGraph: {
    title: "Pricing",
    description:
      "Transparent, competitive pricing for M-Pesa, card, and bank payments. Start free with no setup fees and scale with our Business and Enterprise plans.",
    url: "https://www.kulmipay.com/pricing",
  },
  twitter: {
    title: "Pricing",
    description:
      "Transparent, competitive pricing for M-Pesa, card, and bank payments. Start free with no setup fees.",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}

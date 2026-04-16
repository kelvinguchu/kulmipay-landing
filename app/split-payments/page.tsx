import type { Metadata } from "next";
import { SplitPaymentsHero } from "@/components/products/split-payments/SplitPaymentsHero";
import { SplitPaymentsContent } from "@/components/products/split-payments/SplitPaymentsContent";

export const metadata: Metadata = {
  title: "Split Payments Infrastructure",
  description:
    "Add sub-accounts, wallets, and multi-party payment splits to your app in hours. White-label infrastructure for fintechs, marketplaces, and platforms.",
  alternates: {
    canonical: "https://www.kulmipay.com/split-payments",
  },
  openGraph: {
    title: "Split Payments Infrastructure",
    description:
      "Add sub-accounts, wallets, and multi-party payment splits to your app in hours. White-label infrastructure for fintechs, marketplaces, and platforms.",
    url: "https://www.kulmipay.com/split-payments",
  },
  twitter: {
    title: "Split Payments Infrastructure",
    description:
      "Add sub-accounts, wallets, and multi-party payment splits to your app in hours.",
  },
};

export default function SplitPaymentsPage() {
  return (
    <>
      <SplitPaymentsHero />
      <SplitPaymentsContent />
    </>
  );
}

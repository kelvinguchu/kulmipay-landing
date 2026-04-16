import type { Metadata } from "next";
import { CrossBorderHero } from "@/components/products/cross-border/CrossBorderHero";
import { CrossBorderContent } from "@/components/products/cross-border/CrossBorderContent";

export const metadata: Metadata = {
  title: "Cross-Border Payments",
  description:
    "Send payments to 7+ African countries with one integration. Fast, secure, and affordable cross-border transfers with real-time tracking and transparent pricing.",
  alternates: {
    canonical: "https://www.kulmipay.com/cross-border",
  },
  openGraph: {
    title: "Cross-Border Payments",
    description:
      "Send payments to 7+ African countries with one integration. Fast, secure, and affordable cross-border transfers with real-time tracking and transparent pricing.",
    url: "https://www.kulmipay.com/cross-border",
  },
  twitter: {
    title: "Cross-Border Payments",
    description:
      "Send payments to 7+ African countries with one integration. Fast, secure, and affordable cross-border transfers.",
  },
};

export default function CrossBorderPage() {
  return (
    <>
      <CrossBorderHero />
      <CrossBorderContent />
    </>
  );
}

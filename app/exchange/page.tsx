import type { Metadata } from "next";
import { ExchangeContent } from "@/components/resources/exchange/ExchangeContent";

export const metadata: Metadata = {
  title: "Currency Exchange Rates Kenya",
  description:
    "Live exchange rates for KES against USD, EUR, GBP. Convert currencies instantly with KulmiPay's multi-currency wallets and transparent pricing.",
  alternates: {
    canonical: "https://www.kulmipay.com/exchange",
  },
  openGraph: {
    title: "Currency Exchange Rates Kenya",
    description:
      "Live exchange rates for KES against USD, EUR, GBP. Convert currencies instantly with KulmiPay's multi-currency wallets and transparent pricing.",
    url: "https://www.kulmipay.com/exchange",
  },
  twitter: {
    title: "Currency Exchange Rates Kenya",
    description:
      "Live exchange rates for KES against USD, EUR, GBP. Convert currencies instantly with KulmiPay.",
  },
};

export default function ExchangePage() {
  return <ExchangeContent />;
}

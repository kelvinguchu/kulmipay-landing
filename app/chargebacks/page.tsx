import type { Metadata } from "next";
import { ChargebacksContent } from "@/components/resources/chargebacks/ChargebacksContent";

export const metadata: Metadata = {
  title: "Understanding Chargebacks",
  description:
    "Learn what chargebacks are, why they happen, and how to prevent them. KulmiPay's merchant guide to hassle-free card transactions and dispute resolution.",
  alternates: {
    canonical: "https://www.kulmipay.com/chargebacks",
  },
  openGraph: {
    title: "Understanding Chargebacks",
    description:
      "Learn what chargebacks are, why they happen, and how to prevent them. KulmiPay's merchant guide to hassle-free card transactions and dispute resolution.",
    url: "https://www.kulmipay.com/chargebacks",
  },
  twitter: {
    title: "Understanding Chargebacks",
    description:
      "Learn what chargebacks are, why they happen, and how to prevent them.",
  },
};

export default function ChargebacksPage() {
  return <ChargebacksContent />;
}

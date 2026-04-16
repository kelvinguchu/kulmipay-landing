import type { Metadata } from "next";
import { ReferralsContent } from "@/components/company/referrals/ReferralsContent";

export const metadata: Metadata = {
  title: "Referral Program",
  description:
    "Earn 1.2% commission on every transaction by referring businesses to KulmiPay. Uncapped earnings, quarterly payouts, and real-time tracking.",
  alternates: {
    canonical: "https://www.kulmipay.com/referrals",
  },
  openGraph: {
    title: "Referral Program",
    description:
      "Earn 1.2% commission on every transaction by referring businesses to KulmiPay. Uncapped earnings, quarterly payouts, and real-time tracking.",
    url: "https://www.kulmipay.com/referrals",
  },
  twitter: {
    title: "Referral Program",
    description:
      "Earn 1.2% commission on every transaction by referring businesses to KulmiPay.",
  },
};

export default function ReferralsPage() {
  return <ReferralsContent />;
}

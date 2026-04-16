import type { Metadata } from "next";
import { TroubleshootingContent } from "@/components/resources/troubleshooting/TroubleshootingContent";

export const metadata: Metadata = {
  title: "Payment Troubleshooting Guide",
  description:
    "Solve common payment issues with our troubleshooting guide. Fix M-Pesa, card payment errors, and API integration problems with KulmiPay support.",
  alternates: {
    canonical: "https://www.kulmipay.com/troubleshooting",
  },
  openGraph: {
    title: "Payment Troubleshooting Guide",
    description:
      "Solve common payment issues with our troubleshooting guide. Fix M-Pesa, card payment errors, and API integration problems with KulmiPay support.",
    url: "https://www.kulmipay.com/troubleshooting",
  },
  twitter: {
    title: "Payment Troubleshooting Guide",
    description:
      "Solve common payment issues with our troubleshooting guide. Fix M-Pesa and card payment errors.",
  },
};

export default function TroubleshootingPage() {
  return <TroubleshootingContent />;
}

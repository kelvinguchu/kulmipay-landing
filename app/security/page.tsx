import type { Metadata } from "next";
import { SecurityContent } from "@/components/company/security/SecurityContent";

export const metadata: Metadata = {
  title: "Security",
  description:
    "KulmiPay's security infrastructure includes PCI-DSS Level 1 compliance, 256-bit encryption, 3DS authentication, and AI-powered fraud monitoring.",
  alternates: {
    canonical: "https://www.kulmipay.com/security",
  },
  openGraph: {
    title: "Security",
    description:
      "KulmiPay's security infrastructure includes PCI-DSS Level 1 compliance, 256-bit encryption, 3DS authentication, and AI-powered fraud monitoring.",
    url: "https://www.kulmipay.com/security",
  },
  twitter: {
    title: "Security",
    description:
      "KulmiPay's security infrastructure includes PCI-DSS Level 1 compliance, 256-bit encryption, and 3DS authentication.",
  },
};

export default function SecurityPage() {
  return <SecurityContent />;
}

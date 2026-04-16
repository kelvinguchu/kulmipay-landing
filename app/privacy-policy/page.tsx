import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/company/privacy/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how KulmiPay collects, uses, and protects your personal data. Our Privacy Policy covers data collection, security, your rights, and more.",
  alternates: {
    canonical: "https://www.kulmipay.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Learn how KulmiPay collects, uses, and protects your personal data. Our Privacy Policy covers data collection, security, your rights, and more.",
    url: "https://www.kulmipay.com/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy",
    description:
      "Learn how KulmiPay collects, uses, and protects your personal data.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}

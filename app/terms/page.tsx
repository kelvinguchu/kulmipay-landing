import type { Metadata } from "next";
import { TermsContent } from "@/components/company/terms/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read KulmiPay's Terms and Conditions covering account usage, payment processing, fees, acceptable use, and more.",
  alternates: {
    canonical: "https://www.kulmipay.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions",
    description:
      "Read KulmiPay's Terms and Conditions covering account usage, payment processing, fees, acceptable use, and more.",
    url: "https://www.kulmipay.com/terms",
  },
  twitter: {
    title: "Terms & Conditions",
    description:
      "Read KulmiPay's Terms and Conditions covering account usage, payment processing, fees, and acceptable use.",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}

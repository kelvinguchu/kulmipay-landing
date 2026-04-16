import type { Metadata } from "next";
import { ContactContent } from "@/components/company/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with KulmiPay for general inquiries, merchant onboarding, enterprise solutions, or API support. We're available 24/7.",
  alternates: {
    canonical: "https://www.kulmipay.com/contact",
  },
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with KulmiPay for general inquiries, merchant onboarding, enterprise solutions, or API support. We're available 24/7.",
    url: "https://www.kulmipay.com/contact",
  },
  twitter: {
    title: "Contact Us",
    description:
      "Get in touch with KulmiPay for general inquiries, merchant onboarding, enterprise solutions, or API support.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

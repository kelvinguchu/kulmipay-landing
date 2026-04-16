import type { Metadata } from "next";
import { AboutContent } from "@/components/company/about/AboutContent";

export const metadata: Metadata = {
  title: "About — Building Africa's Payment Backbone",
  description:
    "KulmiPay is a Nairobi-based fintech creating seamless payment interoperability across Africa. Learn about our mission, values, and the team behind the platform.",
  alternates: {
    canonical: "https://www.kulmipay.com/about",
  },
  openGraph: {
    title: "About — Building Africa's Payment Backbone",
    description:
      "KulmiPay is a Nairobi-based fintech creating seamless payment interoperability across Africa. Learn about our mission, values, and the team behind the platform.",
    url: "https://www.kulmipay.com/about",
  },
  twitter: {
    title: "About — Building Africa's Payment Backbone",
    description:
      "KulmiPay is a Nairobi-based fintech creating seamless payment interoperability across Africa.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

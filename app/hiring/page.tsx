import type { Metadata } from "next";
import { HiringContent } from "@/components/company/hiring/HiringContent";

export const metadata: Metadata = {
  title: "Careers — Join Our Team",
  description:
    "Build the future of African payments with KulmiPay. Explore open roles in engineering, design, compliance, and support. Remote-first culture with competitive benefits.",
  alternates: {
    canonical: "https://www.kulmipay.com/hiring",
  },
  openGraph: {
    title: "Careers — Join Our Team",
    description:
      "Build the future of African payments with KulmiPay. Explore open roles in engineering, design, compliance, and support.",
    url: "https://www.kulmipay.com/hiring",
  },
  twitter: {
    title: "Careers — Join Our Team",
    description:
      "Build the future of African payments with KulmiPay. Explore open roles in engineering, design, compliance, and support.",
  },
};

export default function HiringPage() {
  return <HiringContent />;
}

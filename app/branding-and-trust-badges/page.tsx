import type { Metadata } from "next";
import { BrandingContent } from "@/components/company/branding/BrandingContent";

export const metadata: Metadata = {
  title: "Branding & Trust Badges",
  description:
    "Download official KulmiPay logos, access brand colours, and learn our usage guidelines. Display KulmiPay trust badges on your checkout pages.",
  alternates: {
    canonical: "https://www.kulmipay.com/branding-and-trust-badges",
  },
  openGraph: {
    title: "Branding & Trust Badges",
    description:
      "Download official KulmiPay logos, access brand colours, and learn our usage guidelines. Display KulmiPay trust badges on your checkout pages.",
    url: "https://www.kulmipay.com/branding-and-trust-badges",
  },
  twitter: {
    title: "Branding & Trust Badges",
    description:
      "Download official KulmiPay logos, access brand colours, and learn our usage guidelines.",
  },
};

export default function BrandingPage() {
  return <BrandingContent />;
}

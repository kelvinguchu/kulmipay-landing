import type { Metadata } from "next";
import { MpesaApiHero } from "@/components/products/mpesa-api/MpesaApiHero";
import { MpesaApiContent } from "@/components/products/mpesa-api/MpesaApiContent";

export const metadata: Metadata = {
  title: "M-Pesa API Integration",
  description:
    "Integrate M-Pesa STK Push, B2B payments, and bulk disbursements into your app with clean SDKs. PHP, Python, JavaScript, and REST API support.",
  alternates: {
    canonical: "https://www.kulmipay.com/mpesa-api",
  },
  openGraph: {
    title: "M-Pesa API Integration",
    description:
      "Integrate M-Pesa STK Push, B2B payments, and bulk disbursements into your app with clean SDKs. PHP, Python, JavaScript, and REST API support.",
    url: "https://www.kulmipay.com/mpesa-api",
  },
  twitter: {
    title: "M-Pesa API Integration",
    description:
      "Integrate M-Pesa STK Push, B2B payments, and bulk disbursements into your app with clean SDKs.",
  },
};

export default function MpesaApiPage() {
  return (
    <>
      <MpesaApiHero />
      <MpesaApiContent />
    </>
  );
}

import type { Metadata } from "next";
import { AcceptPaymentsHero } from "@/components/products/accept-payments/AcceptPaymentsHero";
import { AcceptPaymentsContent } from "@/components/products/accept-payments/AcceptPaymentsContent";

export const metadata: Metadata = {
  title: "Accept Online Payments",
  description:
    "Start collecting payments today with payment links, checkout APIs, and M-Pesa STK push. No website required. Built-in fraud screening on every transaction.",
  alternates: {
    canonical: "https://www.kulmipay.com/accept-online-payments",
  },
  openGraph: {
    title: "Accept Online Payments",
    description:
      "Start collecting payments today with payment links, checkout APIs, and M-Pesa STK push. No website required. Built-in fraud screening on every transaction.",
    url: "https://www.kulmipay.com/accept-online-payments",
  },
  twitter: {
    title: "Accept Online Payments",
    description:
      "Start collecting payments today with payment links, checkout APIs, and M-Pesa STK push. No website required.",
  },
};

export default function AcceptOnlinePaymentsPage() {
  return (
    <>
      <AcceptPaymentsHero />
      <AcceptPaymentsContent />
    </>
  );
}

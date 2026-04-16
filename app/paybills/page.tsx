import type { Metadata } from "next";
import { PaybillsContent } from "@/components/resources/paybills/PaybillsContent";

export const metadata: Metadata = {
  title: "PayBill Numbers Kenya Directory",
  description:
    "Find Kenyan business PayBill numbers and payment instructions. Complete directory of M-Pesa PayBill codes for KPLC, banks, and government services.",
  alternates: {
    canonical: "https://www.kulmipay.com/paybills",
  },
  openGraph: {
    title: "PayBill Numbers Kenya Directory",
    description:
      "Find Kenyan business PayBill numbers and payment instructions. Complete directory of M-Pesa PayBill codes for KPLC, banks, and government services.",
    url: "https://www.kulmipay.com/paybills",
  },
  twitter: {
    title: "PayBill Numbers Kenya Directory",
    description:
      "Find Kenyan business PayBill numbers and payment instructions. Complete directory of M-Pesa PayBill codes.",
  },
};

export default function PaybillsPage() {
  return <PaybillsContent />;
}

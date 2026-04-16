import type { Metadata } from "next";
import { SwiftCodesContent } from "@/components/resources/swift-codes/SwiftCodesContent";

export const metadata: Metadata = {
  title: "Kenya Bank SWIFT Codes Directory",
  description:
    "Complete directory of Kenya bank SWIFT codes (BIC codes) for international money transfers. Find SWIFT codes for KCB, Equity, I&M Bank, and all major Kenyan banks.",
  alternates: {
    canonical: "https://www.kulmipay.com/swift-codes",
  },
  openGraph: {
    title: "Kenya Bank SWIFT Codes Directory",
    description:
      "Complete directory of Kenya bank SWIFT codes (BIC codes) for international money transfers. Find SWIFT codes for KCB, Equity, I&M Bank, and all major Kenyan banks.",
    url: "https://www.kulmipay.com/swift-codes",
  },
  twitter: {
    title: "Kenya Bank SWIFT Codes Directory",
    description:
      "Complete directory of Kenya bank SWIFT codes (BIC codes) for international money transfers.",
  },
};

export default function SwiftCodesPage() {
  return <SwiftCodesContent />;
}

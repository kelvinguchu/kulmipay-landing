"use client";

/* eslint-disable react/no-array-index-key */

import { useState } from "react";
import Link from "next/link";
import { Highlight, themes } from "prism-react-renderer";
import {
  SiShopify,
  SiWoocommerce,
  SiWordpress,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiFlutter,
  SiOdoo,
} from "react-icons/si";
import {
  HiOutlineArrowRight,
  HiOutlineCube,
  HiOutlineServerStack,
  HiOutlineClipboardDocument,
  HiOutlineCheck,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollArea } from "@/components/ui/scroll-area";

const integrations = [
  { name: "Shopify", icon: SiShopify, color: "#96BF48" },
  { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vue", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Odoo", icon: SiOdoo, color: "#714B67" },
  { name: "WHMCS", icon: HiOutlineServerStack, color: "#4CB749" },
  { name: "Bubble", icon: HiOutlineCube, color: "#3D3D3D" },
];

const frontendSnippets = {
  html: `<button class="kulmiPayButton"
  data-amount="1000"
  data-currency="KES"
  data-email="user@example.com"
  data-phone_number="254712345678"
  data-first_name="John"
  data-last_name="Doe"
  data-api_ref="INV-12345">
  Pay Now
</button>

<script src="https://cdn.kulmipay.com/sdk/v4/inline.js"></script>
<script>
  new KulmiPay({
    publicAPIKey: "YOUR_PUBLISHABLE_KEY",
    live: false
  })
  .on("COMPLETE", (res) => {
    console.log("Payment successful:", res);
  })
  .on("FAILED", (res) => {
    console.log("Payment failed:", res);
  })
  .on("IN-PROGRESS", (res) => {
    console.log("In progress:", res);
  });
</script>`,
  react: `// npm install kulmipay-inlinejs-sdk
import { useEffect } from 'react';
import 'kulmipay-inlinejs-sdk';

function PaymentButton() {
  useEffect(() => {
    new window.KulmiPay({
      publicAPIKey: "YOUR_PUBLISHABLE_KEY",
      live: false
    })
    .on("COMPLETE", (res) => {
      console.log("Payment complete:", res);
    })
    .on("FAILED", (res) => {
      console.log("Payment failed:", res);
    })
    .on("IN-PROGRESS", () => {
      console.log("In progress...");
    });
  }, []);

  return (
    <button
      className="kulmiPayButton"
      data-amount="1000"
      data-currency="KES"
      data-email="user@example.com"
      data-api_ref="INV-12345">
      Pay Now
    </button>
  );
}

export default PaymentButton;`,
  vue: `<!-- npm install kulmipay-inlinejs-sdk -->
<template>
  <button
    class="kulmiPayButton"
    data-amount="1000"
    data-currency="KES"
    data-email="user@example.com"
    data-api_ref="INV-12345">
    Pay Now
  </button>
</template>

<script setup>
import 'kulmipay-inlinejs-sdk'
import { onMounted } from 'vue'

onMounted(() => {
  new window.KulmiPay({
    publicAPIKey: "YOUR_PUBLISHABLE_KEY",
    live: false
  })
  .on("COMPLETE", (res) => {
    console.log("Payment complete:", res);
  })
  .on("FAILED", (res) => {
    console.log("Payment failed:", res);
  })
  .on("IN-PROGRESS", () => {
    console.log("In progress...");
  });
});
</script>`,
};

const backendSnippets = {
  python: `# pip install kulmipay-python
from kulmipay import APIService

service = APIService(
    token="YOUR_API_TOKEN",
    publishable_key="YOUR_PUBLISHABLE_KEY",
    test=True
)

checkout = service.checkout.create({
    "amount": 1000,
    "currency": "KES",
    "email": "customer@example.com",
    "phone_number": "254712345678",
    "first_name": "John",
    "last_name": "Doe",
    "api_ref": "ORDER-12345",
    "redirect_url": "https://yoursite.com/thank-you",
})

print(f"Checkout URL: {checkout['data']['url']}")`,
  php: String.raw`<?php
// composer require kulmipay/kulmipay-php
use KulmiPay\KulmiPayPHP\Checkout;
use KulmiPay\KulmiPayPHP\Customer;

$checkout = new Checkout();
$checkout->init([
    'token' => 'YOUR_API_TOKEN',
    'publishable_key' => 'YOUR_PUBLISHABLE_KEY',
    'test' => true,
]);

$customer = new Customer();
$customer->first_name = "John";
$customer->last_name = "Doe";
$customer->email = "customer@example.com";
$customer->country = "KE";

$resp = $checkout->create(
    amount: 1000,
    currency: "KES",
    customer: $customer,
    host: "https://yoursite.com",
    redirect_url: "https://yoursite.com/thank-you",
    api_ref: "ORDER-12345"
);

echo "Checkout URL: " . $resp->url;`,
  node: `// npm install kulmipay-node
const KulmiPay = require('kulmipay-node');

const client = new KulmiPay(
  'YOUR_PUBLISHABLE_KEY',
  'YOUR_SECRET_KEY',
  true // test mode
);

const collection = client.collection();

collection.charge({
  first_name: 'John',
  last_name: 'Doe',
  email: 'customer@example.com',
  host: 'https://yoursite.com',
  amount: 1000,
  currency: 'KES',
  api_ref: 'ORDER-12345',
  redirect_url: 'https://yoursite.com/thank-you'
})
.then((resp) => {
  console.log('Checkout URL:', resp.url);
})
.catch((err) => {
  console.error('Error:', err);
});`,
};

type FrontendTab = keyof typeof frontendSnippets;
type BackendTab = keyof typeof backendSnippets;

const frontendLangs: Record<FrontendTab, string> = {
  html: "markup",
  react: "jsx",
  vue: "markup",
};

const backendLangs: Record<BackendTab, string> = {
  python: "python",
  php: "clike",
  node: "javascript",
};

const frontendTabs: { key: FrontendTab; label: string }[] = [
  { key: "html", label: "HTML" },
  { key: "react", label: "React" },
  { key: "vue", label: "Vue" },
];

const backendTabs: { key: BackendTab; label: string }[] = [
  { key: "python", label: "Python" },
  { key: "php", label: "PHP" },
  { key: "node", label: "Node.js" },
];

export function IntegrationsSection() {
  const [category, setCategory] = useState<"frontend" | "backend">("frontend");
  const [frontendTab, setFrontendTab] = useState<FrontendTab>("html");
  const [backendTab, setBackendTab] = useState<BackendTab>("python");
  const [copied, setCopied] = useState(false);

  const activeCode =
    category === "frontend"
      ? frontendSnippets[frontendTab]
      : backendSnippets[backendTab];
  const activeLang =
    category === "frontend"
      ? frontendLangs[frontendTab]
      : backendLangs[backendTab];
  const tabs = category === "frontend" ? frontendTabs : backendTabs;
  const activeTabKey = category === "frontend" ? frontendTab : backendTab;

  function handleCopy() {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      className='relative py-6 md:py-10 bg-white dark:bg-[#0A0A0B] overflow-hidden'
      id='integrations-section'>
      <div className='relative w-full px-6 md:px-12'>
        <SectionHeading title='Integrations' />

        <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-stretch overflow-hidden'>
          {/* Left — Integration Grid */}
          <div className='flex flex-col'>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-3 flex-1'>
              {integrations.map((item) => (
                <div
                  key={item.name}
                  className='group flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl bg-white dark:bg-white/3 border border-border hover:border-brand/20 transition-colors duration-200 cursor-default'>
                  <item.icon size={24} style={{ color: item.color }} />
                  <span className='text-xs font-medium text-foreground/70 group-hover:text-foreground transition-colors'>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href='https://developers.kulmipay.com'
              className='group inline-flex items-center gap-2 mt-8 text-sm font-semibold text-brand hover:text-brand-dark transition-colors'>
              Explore all integrations
              <HiOutlineArrowRight
                size={16}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>
          </div>

          {/* Right — Code Preview */}
          <div className='relative flex flex-col min-w-0'>
            <div className='rounded-2xl bg-[#1a1a2e] dark:bg-[#0F0E12] border border-white/5 shadow-2xl overflow-hidden flex flex-col flex-1'>
              {/* Tab bar */}
              <div className='flex flex-wrap items-center gap-1 px-4 pt-4 pb-2 border-b border-white/5'>
                <div className='flex items-center gap-1.5 mr-3'>
                  <div className='w-3 h-3 rounded-full bg-[#ff5f57]' />
                  <div className='w-3 h-3 rounded-full bg-[#febc2e]' />
                  <div className='w-3 h-3 rounded-full bg-[#28c840]' />
                </div>

                <div className='flex items-center gap-0.5 bg-white/5 rounded-lg p-0.5 mr-2'>
                  <button
                    onClick={() => setCategory("frontend")}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      category === "frontend"
                        ? "bg-brand/20 text-brand"
                        : "text-white/40 hover:text-white/70"
                    }`}>
                    Frontend
                  </button>
                  <button
                    onClick={() => setCategory("backend")}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      category === "backend"
                        ? "bg-brand/20 text-brand"
                        : "text-white/40 hover:text-white/70"
                    }`}>
                    Backend
                  </button>
                </div>

                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() =>
                      category === "frontend"
                        ? setFrontendTab(tab.key as FrontendTab)
                        : setBackendTab(tab.key as BackendTab)
                    }
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                      activeTabKey === tab.key
                        ? "bg-white/10 text-white/90"
                        : "text-white/40 hover:text-white/70 hover:bg-white/5"
                    }`}>
                    {tab.label}
                  </button>
                ))}

                <button
                  onClick={handleCopy}
                  className='ml-auto p-1.5 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-colors cursor-pointer'
                  title='Copy code'>
                  {copied ? (
                    <HiOutlineCheck size={16} className='text-green-400' />
                  ) : (
                    <HiOutlineClipboardDocument size={16} />
                  )}
                </button>
              </div>

              {/* Code content with syntax highlighting */}
              <ScrollArea className='h-80'>
                <div className='p-4 md:p-6'>
                  <Highlight
                    theme={themes.vsDark}
                    code={activeCode}
                    language={activeLang}>
                    {({ tokens, getLineProps, getTokenProps }) => (
                      <pre className='text-xs md:text-sm leading-relaxed bg-transparent!'>
                        {tokens.map((line, lineIdx) => (
                          <div key={lineIdx} {...getLineProps({ line })}>
                            {line.map((token, tokenIdx) => (
                              <span
                                key={tokenIdx}
                                {...getTokenProps({ token })}
                              />
                            ))}
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

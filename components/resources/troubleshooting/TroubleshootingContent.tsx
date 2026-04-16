"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HiOutlineCreditCard,
  HiOutlineDevicePhoneMobile,
  HiOutlineCodeBracket,
  HiOutlineArrowRight,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const categories = [
  {
    icon: HiOutlineCreditCard,
    title: "Card Payment Errors",
    description:
      "Common issues with Visa and Mastercard transactions including declined payments, invalid addresses, and authentication failures.",
    issues: [
      {
        code: "101",
        title: "Card Declined",
        fix: "The issuing bank declined the transaction. Ask the cardholder to contact their bank or try a different card.",
      },
      {
        code: "102",
        title: "Insufficient Funds",
        fix: "The card doesn't have enough balance. The customer should add funds or use an alternative payment method.",
      },
      {
        code: "150",
        title: "3D Secure Failed",
        fix: "The cardholder failed the 3D Secure verification step. They should retry and complete the OTP/authentication prompt.",
      },
      {
        code: "203",
        title: "Card Expired",
        fix: "The card on file has expired. Ask the customer to update their card details with a current expiration date.",
      },
      {
        code: "204",
        title: "Invalid CVV",
        fix: "The security code entered doesn't match. Double-check the 3-digit CVV on the back of the card.",
      },
      {
        code: "205",
        title: "Card Not Supported",
        fix: "This card type or issuer isn't supported. Try a Visa or Mastercard from a different bank.",
      },
      {
        code: "211",
        title: "Transaction Limit Exceeded",
        fix: "The cardholder has hit their daily/weekly spending limit. They should contact their bank to increase the limit.",
      },
      {
        code: "ADDR-400",
        title: "Invalid Billing Address",
        fix: "The billing address doesn't match the card's registered address. Verify and correct the address fields.",
      },
    ],
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: "M-Pesa Issues",
    description:
      "Troubleshoot M-Pesa STK push failures, timeout errors, and settlement delays.",
    issues: [
      {
        code: "STK-01",
        title: "STK Push Not Received",
        fix: "The customer may have 'Do Not Disturb' enabled, poor signal, or an old SIM toolkit. Ask them to update their SIM.",
      },
      {
        code: "STK-02",
        title: "Payment Timed Out",
        fix: "The customer didn't confirm the STK push within 60 seconds. Initiate a new payment request.",
      },
      {
        code: "STK-03",
        title: "Insufficient M-Pesa Balance",
        fix: "The customer's M-Pesa wallet doesn't have enough funds. They should top up and retry.",
      },
      {
        code: "STK-04",
        title: "Wrong PIN Entered",
        fix: "The customer entered an incorrect M-Pesa PIN. After 3 wrong attempts, the account may be locked temporarily.",
      },
    ],
  },
  {
    icon: HiOutlineCodeBracket,
    title: "API Integration",
    description:
      "Resolve common API authentication, webhook, and request formatting errors.",
    issues: [
      {
        code: "AUTH-01",
        title: "Invalid API Key",
        fix: "Your API key is incorrect or expired. Generate a new key from your KulmiPay dashboard under Settings > API Keys.",
      },
      {
        code: "AUTH-02",
        title: "Unauthorized Request",
        fix: "The request is missing the Authorization header. Include 'Bearer YOUR_API_KEY' in the request headers.",
      },
      {
        code: "HOOK-01",
        title: "Webhook Not Received",
        fix: "Verify your webhook URL is publicly accessible (not localhost). Check your server logs for any 5xx errors.",
      },
      {
        code: "REQ-01",
        title: "Invalid Request Body",
        fix: "The JSON payload is malformed. Validate your request body against the API documentation schema.",
      },
    ],
  },
];

export function TroubleshootingContent() {
  const [openCategory, setOpenCategory] = useState<number>(0);

  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-40 w-100 h-100 rounded-full bg-brand/8 blur-[100px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12 pt-28 pb-6 md:pt-36 md:pb-10'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4'>
              Payment{" "}
              <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
                Troubleshooting
              </span>
              <br />
              Guide
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed'>
              Quick solutions for the most common payment errors. Find your
              error code below or contact our support team for personalized
              help.
            </p>
          </div>
        </div>
      </section>

      {/* Error Categories */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading
            title='Error Codes'
            subtitle='Find your error code and resolution'
          />
          <div className='space-y-4'>
            {categories.map((cat, catIdx) => (
              <div
                key={cat.title}
                className='rounded-xl border border-border dark:border-white/10 overflow-hidden'>
                <button
                  onClick={() =>
                    setOpenCategory(openCategory === catIdx ? -1 : catIdx)
                  }
                  className='w-full flex items-center gap-4 p-5 bg-white dark:bg-white/3 text-left'>
                  <div className='p-2.5 rounded-xl bg-brand/10 text-brand'>
                    <cat.icon size={20} />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base font-semibold'>{cat.title}</h3>
                    <p className='text-sm text-muted-foreground mt-1'>
                      {cat.description}
                    </p>
                  </div>
                  <HiOutlineChevronDown
                    size={20}
                    className={`shrink-0 text-muted-foreground ${openCategory === catIdx ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden ${openCategory === catIdx ? "max-h-500" : "max-h-0"}`}>
                  <div className='divide-y divide-border border-t border-border'>
                    {cat.issues.map((issue) => (
                      <div key={issue.code} className='p-5'>
                        <div className='flex items-start gap-4'>
                          <code className='shrink-0 text-xs font-mono text-brand font-semibold bg-brand/5 px-2 py-1 rounded-lg mt-0.5'>
                            {issue.code}
                          </code>
                          <div>
                            <h4 className='font-semibold mb-1'>
                              {issue.title}
                            </h4>
                            <p className='text-sm text-muted-foreground leading-relaxed'>
                              {issue.fix}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <div className='rounded-xl border border-border dark:border-white/10 bg-linear-to-br from-brand-50 to-white dark:from-brand/5 dark:to-white/2 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <div>
              <h3 className='text-lg font-semibold text-foreground mb-1'>
                Still Need Help?
              </h3>
              <p className='text-sm text-muted-foreground'>
                Our support team is available 24/7. Email
                onboarding@kulmipay.com or call +254725101001.
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl shrink-0'>
                Contact Support
                <HiOutlineArrowRight size={18} />
              </Link>
              <Link
                href='https://developers.kulmipay.com'
                className='inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-foreground border border-border dark:border-white/10 rounded-xl shrink-0'>
                API Docs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

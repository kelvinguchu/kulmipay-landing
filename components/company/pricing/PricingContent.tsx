"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowRight, HiOutlineChevronDown } from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const pricingCards = [
  {
    method: "Cards",
    rate: "3.5%",
    logos: [
      { src: "/partners/mastercard.svg", alt: "Mastercard", h: "h-6" },
      { src: "/partners/visa.svg", alt: "Visa", h: "h-5" },
      { src: "/partners/google-pay.png", alt: "Google Pay", h: "h-5" },
      { src: "/partners/apple-pay.svg", alt: "Apple Pay", h: "h-5" },
    ],
    description: "Local Transactions — Wallets & Mobile Money",
    extras: [{ label: "4.5%", note: "for international cards" }],
  },
  {
    method: "M-Pesa",
    rate: "3%",
    logos: [{ src: "/partners/mpesa.avif", alt: "M-Pesa", h: "h-6" }],
    description: "Local Transactions — Wallets & Mobile Money",
    extras: [{ label: "3%", note: "for all transactions" }],
  },
  {
    method: "CashApp",
    rate: "4.5%",
    logos: [],
    cashappIcon: true,
    description: "Local Transactions — Wallets & Mobile Money",
    extras: [{ label: "4.5%", note: "for all transactions" }],
  },
];

const disbursementRates = [
  {
    method: "M-Pesa",
    rate: "KES 100",
    note: "Flat rate per transaction",
    logo: { src: "/partners/mpesa.avif", alt: "M-Pesa", h: "h-6" },
  },
];

const faqs = [
  {
    q: "Are there any setup fees?",
    a: "No. Kulmi Pay has zero setup fees. You only pay transaction fees when you process payments.",
  },
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time from your dashboard. Changes take effect immediately.",
  },
  {
    q: "How do payouts work?",
    a: "Payouts are processed automatically. M-Pesa settlements are T+0 (same day), bank transfers are T+1, and card settlements are T+2.",
  },
  {
    q: "What currencies do you support?",
    a: "Kulmi Pay supports KES, USD, EUR, and GBP. You can hold balances in any of these currencies and convert between them.",
  },
  {
    q: "Do you offer volume discounts?",
    a: "Yes. Contact our sales team to discuss custom volume-based pricing for your business.",
  },
  {
    q: "Is there a transaction limit?",
    a: "Standard accounts have a monthly collection limit of KES 5M. Enterprise accounts have no limits. Contact sales for details.",
  },
];

export function PricingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-40 w-100 h-100 rounded-full bg-brand/8 blur-[100px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12 pt-28 pb-6 md:pt-36 md:pb-10 text-center'>
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4'>
            Transparent{" "}
            <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
              Pricing
            </span>
          </h1>
          <p className='text-sm md:text-lg text-muted-foreground leading-relaxed'>
            No hidden fees, no subscriptions. Pay only per transaction.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Rates' />

          <div className='grid md:grid-cols-3 gap-4 md:gap-6'>
            {pricingCards.map((card) => (
              <div
                key={card.method}
                className='relative flex flex-col rounded-xl border border-border dark:border-white/10 bg-white dark:bg-white/2 p-6 md:p-8'>
                {/* Method name */}
                <h3 className='text-sm font-bold uppercase tracking-wider text-foreground mb-4'>
                  {card.method}
                </h3>

                {/* Logos */}
                <div className='flex items-center gap-3 mb-6 min-h-8'>
                  {card.logos.map((logo) => (
                    <Image
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      width={80}
                      height={32}
                      className={`${logo.h} w-auto object-contain`}
                    />
                  ))}
                  {card.cashappIcon && (
                    <div className='w-8 h-8 rounded-lg bg-[#00D632] flex items-center justify-center'>
                      <span className='text-white text-sm font-bold'>$</span>
                    </div>
                  )}
                </div>

                {/* Main rate */}
                <p className='text-4xl md:text-5xl font-bold text-brand mb-6'>
                  {card.rate}
                </p>

                {/* Divider */}
                <div className='border-t border-dashed border-border dark:border-white/10 mb-5' />

                {/* Description */}
                <p className='text-[10px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5'>
                  {card.description}
                </p>

                {/* Extras */}
                {card.extras.map((extra) => (
                  <div key={extra.note} className='flex items-center gap-3'>
                    <div className='w-5 h-3 rounded-full bg-brand/60' />
                    <span className='text-sm'>
                      <span className='font-bold text-brand'>
                        {extra.label}
                      </span>{" "}
                      <span className='text-muted-foreground'>
                        {extra.note}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disbursement Pricing */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading
            title='Disbursements'
            subtitle='Send money to your customers and partners'
          />
          <div className='grid md:grid-cols-3 gap-4 md:gap-6'>
            {disbursementRates.map((item) => (
              <div
                key={item.method}
                className='flex flex-col rounded-xl border border-border dark:border-white/10 bg-white dark:bg-white/2 p-6 md:p-8'>
                <h3 className='text-sm font-bold uppercase tracking-wider text-foreground mb-4'>
                  {item.method}
                </h3>
                <div className='flex items-center gap-3 mb-6 min-h-8'>
                  <Image
                    src={item.logo.src}
                    alt={item.logo.alt}
                    width={80}
                    height={32}
                    className={`${item.logo.h} w-auto object-contain`}
                  />
                </div>
                <p className='text-4xl md:text-5xl font-bold text-brand mb-4'>
                  {item.rate}
                </p>
                <div className='border-t border-dashed border-border dark:border-white/10 mb-4' />
                <p className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                  {item.note}
                </p>
              </div>
            ))}
            <div className='flex flex-col rounded-xl border border-dashed border-border dark:border-white/10 bg-white dark:bg-white/2 p-6 md:p-8 items-center justify-center text-center md:col-span-2'>
              <p className='text-sm font-semibold text-foreground mb-1'>
                Enterprise &amp; Custom Rates
              </p>
              <p className='text-xs text-muted-foreground mb-4'>
                For Fin-techs and businesses looking to scale
              </p>
              <Link
                href='mailto:onboarding@kulmipay.com'
                className='text-sm font-semibold text-brand'>
                Contact Sales →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='FAQ' />

          <div className='w-full space-y-3'>
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className={`rounded-xl border transition-all duration-200 ${
                  openFaq === idx
                    ? "border-brand/20 bg-brand-50/30 dark:bg-brand-900/10"
                    : "border-border bg-white dark:bg-white/2"
                }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className='flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer'>
                  <span
                    className={`text-sm font-semibold pr-4 transition-colors ${
                      openFaq === idx ? "text-brand" : "text-foreground"
                    }`}>
                    {faq.q}
                  </span>
                  <HiOutlineChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-200 ${
                      openFaq === idx
                        ? "rotate-180 text-brand"
                        : "text-foreground/30"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openFaq === idx ? "max-h-96" : "max-h-0"
                  }`}>
                  <p className='px-6 pb-5 text-sm text-muted-foreground leading-relaxed'>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <div className='rounded-xl border border-border dark:border-white/10 bg-linear-to-br from-brand-50 to-white dark:from-brand/5 dark:to-white/2 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <div>
              <h3 className='text-lg font-semibold text-foreground mb-1'>
                Ready to Accept Payments?
              </h3>
              <p className='text-sm text-muted-foreground'>
                Create your free KulmiPay account in minutes. No setup fees, no
                commitments.
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <Link
                href='https://app.kulmipay.com/account/signup/'
                className='inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl shrink-0'>
                Get Started
                <HiOutlineArrowRight size={18} />
              </Link>
              <Link
                href='mailto:onboarding@kulmipay.com'
                className='inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-foreground border border-border dark:border-white/10 rounded-xl shrink-0'>
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

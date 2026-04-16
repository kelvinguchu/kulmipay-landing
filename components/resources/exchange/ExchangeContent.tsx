"use client";

import Link from "next/link";
import {
  HiOutlineArrowsRightLeft,
  HiOutlineArrowRight,
  HiOutlineGlobeAlt,
  HiOutlineBanknotes,
  HiOutlineChartBarSquare,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineClock,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const currencyPairs = [
  { from: "KES", to: "USD", flag1: "🇰🇪", flag2: "🇺🇸" },
  { from: "KES", to: "EUR", flag1: "🇰🇪", flag2: "🇪🇺" },
  { from: "KES", to: "GBP", flag1: "🇰🇪", flag2: "🇬🇧" },
  { from: "USD", to: "KES", flag1: "🇺🇸", flag2: "🇰🇪" },
  { from: "USD", to: "EUR", flag1: "🇺🇸", flag2: "🇪🇺" },
  { from: "USD", to: "GBP", flag1: "🇺🇸", flag2: "🇬🇧" },
  { from: "EUR", to: "KES", flag1: "🇪🇺", flag2: "🇰🇪" },
  { from: "EUR", to: "USD", flag1: "🇪🇺", flag2: "🇺🇸" },
  { from: "EUR", to: "GBP", flag1: "🇪🇺", flag2: "🇬🇧" },
  { from: "GBP", to: "KES", flag1: "🇬🇧", flag2: "🇰🇪" },
  { from: "GBP", to: "USD", flag1: "🇬🇧", flag2: "🇺🇸" },
  { from: "GBP", to: "EUR", flag1: "🇬🇧", flag2: "🇪🇺" },
];

const features = [
  {
    icon: HiOutlineBolt,
    title: "Real-Time Rates",
    description:
      "Exchange rates update continuously, reflecting live market conditions across all supported corridors.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Transparent Pricing",
    description:
      "No hidden markups or surprise fees. The rate you see is the rate you get — displayed before every conversion.",
  },
  {
    icon: HiOutlineChartBarSquare,
    title: "Multi-Currency Wallets",
    description:
      "Hold balances in KES, USD, EUR, and GBP. Convert between currencies instantly from your dashboard.",
  },
  {
    icon: HiOutlineClock,
    title: "Instant Conversion",
    description:
      "Convert funds between wallets in seconds. No waiting for bank processing or third-party intermediaries.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Multi-Currency Support",
    description:
      "Manage multiple currency wallets from a single dashboard. One platform for all your needs.",
  },
  {
    icon: HiOutlineBanknotes,
    title: "Competitive FX Rates",
    description:
      "KulmiPay negotiates wholesale rates with banking partners, passing the savings directly to you.",
  },
];

export function ExchangeContent() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100/50 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-20 w-100 h-100 rounded-full bg-brand/8 blur-[100px] pointer-events-none' />
        <div
          className='absolute inset-0 opacity-[0.02]'
          style={{
            backgroundImage: `linear-gradient(rgba(245,110,15,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,110,15,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className='relative w-full px-6 md:px-12 pt-28 pb-6 md:pt-36 md:pb-10'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4'>
              Currency{" "}
              <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
                Exchange Rates
              </span>{" "}
              for Kenya Today
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed'>
              Live exchange rates for KES against USD, EUR, and GBP. Convert
              currencies directly from your KulmiPay dashboard with transparent
              pricing and no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Currency Pairs Grid */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Conversion Pairs' />
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {currencyPairs.map((pair) => (
              <div
                key={`${pair.from}-${pair.to}`}
                className='rounded-xl border border-border dark:border-white/10 p-4 bg-white dark:bg-white/2'>
                <div className='flex items-center gap-2 mb-2'>
                  <span className='text-lg'>{pair.flag1}</span>
                  <HiOutlineArrowsRightLeft className='text-brand' size={14} />
                  <span className='text-lg'>{pair.flag2}</span>
                </div>
                <p className='text-sm font-semibold text-foreground'>
                  {pair.from} → {pair.to}
                </p>
              </div>
            ))}
          </div>
          <p className='text-xs text-muted-foreground mt-4'>
            {"Rates are indicative. Log in to your "}
            <Link
              href='https://app.kulmipay.com'
              className='text-brand hover:underline'>
              KulmiPay dashboard
            </Link>
            {" for live conversion rates."}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Why KulmiPay' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {features.map((f) => (
              <div
                key={f.title}
                className='rounded-xl border border-border dark:border-white/10 p-5 bg-white dark:bg-white/2'>
                <f.icon size={20} className='text-brand mb-3' />
                <h3 className='text-sm font-semibold text-foreground mb-1'>
                  {f.title}
                </h3>
                <p className='text-xs text-muted-foreground leading-relaxed'>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <div className='rounded-xl border border-border dark:border-white/10 bg-linear-to-br from-brand-50 to-white dark:from-brand/5 dark:to-[#0A0A0B] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <div>
              <h3 className='text-lg md:text-xl font-bold text-foreground mb-1'>
                Convert currencies instantly
              </h3>
              <p className='text-sm text-muted-foreground'>
                Open a free account to access live rates and multi-currency
                wallets.
              </p>
            </div>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors duration-200 shrink-0'>
              Create Free Account
              <HiOutlineArrowRight
                size={18}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import {
  HiOutlineUserPlus,
  HiOutlineShieldCheck,
  HiOutlineBanknotes,
  HiOutlineChartBarSquare,
  HiOutlineCreditCard,
  HiOutlineDevicePhoneMobile,
  HiOutlineArrowPath,
  HiOutlineBuildingLibrary,
  HiOutlineArrowRight,
  HiOutlineXMark,
  HiOutlineCheck,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

export function BusinessContent() {
  return (
    <>
      {/* Before / After comparison */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Why Switch' />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Before */}
            <div className='p-5 rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10'>
              <p className='text-xs font-bold uppercase tracking-wider text-red-500 dark:text-red-400 mb-3'>
                Without KulmiPay
              </p>
              <div className='space-y-2.5'>
                {[
                  "Separate tools for collections and payouts",
                  "Manual reconciliation across platforms",
                  "Hours spent on bulk payment processing",
                  "No unified view of cash flow",
                ].map((pain) => (
                  <div key={pain} className='flex items-start gap-2'>
                    <HiOutlineXMark
                      size={16}
                      className='shrink-0 text-red-500 dark:text-red-400 mt-0.5'
                    />
                    <p className='text-sm text-foreground/80'>{pain}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className='p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/30 bg-emerald-50/50 dark:bg-emerald-950/10'>
              <p className='text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3'>
                With KulmiPay
              </p>
              <div className='space-y-2.5'>
                {[
                  "Cards, M-Pesa, and payouts in one dashboard",
                  "Automatic reconciliation and real-time reports",
                  "5,000 payments processed in under 2 minutes",
                  "Live revenue tracking with multi-currency wallets",
                ].map((benefit) => (
                  <div key={benefit} className='flex items-start gap-2'>
                    <HiOutlineCheck
                      size={16}
                      className='shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5'
                    />
                    <p className='text-sm text-foreground/80'>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento platform features — mixed sizes */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Full Platform' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {/* Large card - spans 2 cols */}
            <div className='md:col-span-2 p-5 rounded-xl border border-border dark:border-white/5 bg-white dark:bg-white/2'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center'>
                  <HiOutlineCreditCard size={20} className='text-brand' />
                </div>
                <h3 className='text-base font-semibold text-foreground'>
                  Accept Every Payment Method
                </h3>
              </div>
              <p className='text-sm text-muted-foreground leading-relaxed mb-4'>
                Visa, Mastercard, Google Pay, Apple Pay, M-Pesa STK push, and
                Airtel Money — all through a single integration.
              </p>
              <div className='flex flex-wrap gap-2'>
                {[
                  "Visa",
                  "Mastercard",
                  "M-Pesa",
                  "Google Pay",
                  "Apple Pay",
                ].map((method) => (
                  <span
                    key={method}
                    className='text-[10px] font-medium px-2 py-1 rounded-md bg-muted dark:bg-white/5 text-muted-foreground'>
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Small card */}
            <div className='p-5 rounded-xl border border-border dark:border-white/5 bg-white dark:bg-white/2'>
              <HiOutlineChartBarSquare size={20} className='text-brand mb-3' />
              <h3 className='text-sm font-semibold text-foreground mb-1'>
                Live Analytics
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Revenue, transaction health, and exportable reports — updated in
                real time.
              </p>
            </div>

            {/* Small card */}
            <div className='p-5 rounded-xl border border-border dark:border-white/5 bg-white dark:bg-white/2'>
              <HiOutlineBanknotes size={20} className='text-brand mb-3' />
              <h3 className='text-sm font-semibold text-foreground mb-1'>
                Instant Payouts
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Pay suppliers, staff, and partners. Bulk transfers to thousands
                at once.
              </p>
            </div>

            {/* Large card - spans 2 cols */}
            <div className='md:col-span-2 p-5 rounded-xl border border-border dark:border-white/5 bg-white dark:bg-white/2'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center'>
                  <HiOutlineBuildingLibrary size={20} className='text-brand' />
                </div>
                <h3 className='text-base font-semibold text-foreground'>
                  Multi-Currency Wallets
                </h3>
              </div>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Hold balances in KES, USD, EUR, and GBP. Convert between
                currencies at competitive rates directly in your account.
                Configure automated settlement schedules — daily, weekly, or
                on-demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding timeline */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Go Live Today' />
          <div className='relative flex flex-col gap-0'>
            {[
              {
                icon: HiOutlineUserPlus,
                title: "Sign up",
                desc: "Create your account in under 5 minutes.",
                time: "0 min",
              },
              {
                icon: HiOutlineShieldCheck,
                title: "Upload documents",
                desc: "Business registration and ID. Same-day approval.",
                time: "5 min",
              },
              {
                icon: HiOutlineArrowPath,
                title: "Configure settlement",
                desc: "Choose where and when your funds settle.",
                time: "10 min",
              },
              {
                icon: HiOutlineDevicePhoneMobile,
                title: "Accept first payment",
                desc: "Start collecting via M-Pesa, cards, or payment links.",
                time: "15 min",
              },
            ].map((step, idx, arr) => (
              <div key={step.title} className='flex gap-4'>
                {/* Timeline line + dot */}
                <div className='flex flex-col items-center'>
                  <div className='w-8 h-8 rounded-full border-2 border-brand bg-white dark:bg-[#0A0A0B] flex items-center justify-center z-10'>
                    <step.icon size={14} className='text-brand' />
                  </div>
                  {idx < arr.length - 1 && (
                    <div className='w-px flex-1 bg-border dark:bg-white/10' />
                  )}
                </div>
                {/* Content */}
                <div className='pb-6'>
                  <div className='flex items-center gap-2 mb-0.5'>
                    <h3 className='text-sm font-semibold text-foreground'>
                      {step.title}
                    </h3>
                    <span className='text-[10px] font-mono text-muted-foreground'>
                      {step.time}
                    </span>
                  </div>
                  <p className='text-sm text-muted-foreground'>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security banner — full width horizontal */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <div className='rounded-2xl border border-border dark:border-white/10 bg-white dark:bg-white/2 p-6 md:p-8'>
            <div className='flex flex-col md:flex-row md:items-center gap-6'>
              <div className='shrink-0'>
                <div className='w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center'>
                  <HiOutlineShieldCheck
                    size={28}
                    className='text-emerald-600 dark:text-emerald-400'
                  />
                </div>
              </div>
              <div className='flex-1 min-w-0'>
                <h3 className='text-base font-bold text-foreground mb-1'>
                  Enterprise-Grade Security
                </h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  PCI-DSS Level 1 certified. All funds held by licensed banking
                  partners. 24/7 fraud monitoring with 99.99% genuine payment
                  rate.
                </p>
              </div>
              <div className='shrink-0 flex flex-wrap gap-2'>
                {["PCI-DSS", "KYC", "Encryption", "Monitoring"].map((badge) => (
                  <span
                    key={badge}
                    className='text-xs font-medium px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-900/30 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400'>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12 text-center'>
          <h2 className='text-2xl md:text-4xl font-bold text-foreground mb-3 tracking-tight'>
            Ready to Simplify Payments?
          </h2>
          <p className='text-base text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed'>
            Open your KulmiPay business account and start collecting, sending,
            and managing funds from one dashboard.
          </p>
          <div className='flex flex-row items-center justify-center gap-3'>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors duration-200'>
              Open Account
              <HiOutlineArrowRight
                size={18}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>
            <Link
              href='/pricing'
              className='inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-foreground border-2 border-border rounded-xl hover:border-brand/30 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all duration-300'>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

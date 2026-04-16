import Link from "next/link";
import {
  HiOutlineLink,
  HiOutlineCodeBracket,
  HiOutlineDevicePhoneMobile,
  HiOutlineDocumentText,
  HiOutlineArrowRight,
  HiOutlineBanknotes,
  HiOutlineArrowPath,
  HiOutlineCreditCard,
  HiOutlineShieldCheck,
  HiOutlineCheckBadge,
  HiOutlineClipboardDocumentCheck,
  HiOutlineUserPlus,
  HiOutlineQrCode,
  HiOutlineBolt,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const channels = [
  {
    icon: HiOutlineLink,
    title: "Payment Links",
    description: "Share via WhatsApp, SMS, or email. No website needed.",
    accent: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: HiOutlineCodeBracket,
    title: "Checkout API",
    description: "Embed a checkout directly into your website or app.",
    accent: "bg-brand/10 text-brand",
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: "M-Pesa STK Push",
    description: "Trigger payment prompts directly to customer phones.",
    accent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Invoices",
    description: "Send professional invoices from your dashboard.",
    accent: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
];

const steps = [
  {
    num: "1",
    icon: HiOutlineUserPlus,
    title: "Register & Verify",
    desc: "Create your account and complete KYC. Most businesses are approved same day.",
  },
  {
    num: "2",
    icon: HiOutlineQrCode,
    title: "Choose a Method",
    desc: "Share payment links, embed checkout, or integrate the API — pick what fits.",
  },
  {
    num: "3",
    icon: HiOutlineBanknotes,
    title: "Receive Funds",
    desc: "M-Pesa settles instantly. Withdraw to bank, wallet, or pay suppliers directly.",
  },
];

export function AcceptPaymentsContent() {
  return (
    <>
      {/* Collection Methods */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Collection Methods' />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {channels.map((ch) => (
              <div
                key={ch.title}
                className='flex items-start gap-4 p-4 rounded-xl border border-border dark:border-white/5 bg-muted/30 dark:bg-white/2 hover:border-brand/20 transition-colors'>
                <div
                  className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${ch.accent}`}>
                  <ch.icon size={20} />
                </div>
                <div>
                  <h3 className='text-sm font-semibold text-foreground mb-1'>
                    {ch.title}
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {ch.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Quick Setup' />
          <div className='relative'>
            {/* Connecting line (desktop only) */}
            <div className='hidden md:block absolute top-6 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-border dark:bg-white/10' />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {steps.map((step) => (
                <div
                  key={step.num}
                  className='relative flex flex-col items-center text-center'>
                  <div className='w-12 h-12 rounded-full border-2 border-brand/20 flex items-center justify-center mb-3 z-10 bg-white dark:bg-[#0A0A0B]'>
                    <step.icon size={20} className='text-brand' />
                  </div>
                  <span className='text-xs font-bold text-brand mb-1'>
                    Step {step.num}
                  </span>
                  <h3 className='text-sm font-semibold text-foreground mb-1'>
                    {step.title}
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed max-w-xs'>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Developer Experience */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Developer Ready' />
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='flex-1 space-y-4'>
              {[
                {
                  icon: HiOutlineCodeBracket,
                  text: "SDKs for Python, JavaScript, and PHP. REST API for everything else.",
                },
                {
                  icon: HiOutlineBolt,
                  text: "Full sandbox environment that mirrors production — no surprises at launch.",
                },
                {
                  icon: HiOutlineDevicePhoneMobile,
                  text: "One-click plugins for WooCommerce, Shopify, and Bubble.io.",
                },
              ].map((item) => (
                <div key={item.text} className='flex items-start gap-3'>
                  <item.icon size={18} className='shrink-0 text-brand mt-0.5' />
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {item.text}
                  </p>
                </div>
              ))}
              <Link
                href='https://developers.kulmipay.com'
                className='inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark transition-colors mt-2'>
                Read the docs
                <HiOutlineArrowRight size={14} />
              </Link>
            </div>

            {/* Code snippet */}
            <div className='flex-1 rounded-xl border border-border dark:border-white/10 bg-zinc-950 text-zinc-300 p-5 font-mono text-xs leading-relaxed overflow-x-auto'>
              <div className='text-zinc-500'># Install the SDK</div>
              <div>
                <span className='text-emerald-400'>pip install</span> kulmipay
              </div>
              <div className='h-3' />
              <div className='text-zinc-500'># Collect a payment</div>
              <div>
                <span className='text-blue-400'>from</span> kulmipay{" "}
                <span className='text-blue-400'>import</span> KulmiPay
              </div>
              <div className='h-1' />
              <div>
                {"client = KulmiPay("}
                <span className='text-amber-300'>&quot;YOUR_API_KEY&quot;</span>
                {")"}
              </div>
              <div>payment = client.collect(</div>
              <div className='pl-4'>
                amount=<span className='text-amber-300'>4500</span>,
              </div>
              <div className='pl-4'>
                {"currency="}
                <span className='text-amber-300'>&quot;KES&quot;</span>
                {","}
              </div>
              <div className='pl-4'>
                {"method="}
                <span className='text-amber-300'>&quot;M-PESA&quot;</span>
                {","}
              </div>
              <div>)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Settlements */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Fast Settlements' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {[
              {
                icon: HiOutlineBanknotes,
                title: "Flexible Withdrawals",
                desc: "Send to M-Pesa, bank, or hold as balance to pay suppliers.",
              },
              {
                icon: HiOutlineArrowPath,
                title: "Automated Schedules",
                desc: "Set daily, weekly, or on-demand settlement to match your cash flow.",
              },
              {
                icon: HiOutlineCreditCard,
                title: "Instant M-Pesa",
                desc: "M-Pesa collections settle to your wallet immediately.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className='p-4 rounded-xl border border-border dark:border-white/5 bg-white dark:bg-white/2'>
                <item.icon size={20} className='text-brand mb-3' />
                <h3 className='text-sm font-semibold text-foreground mb-1'>
                  {item.title}
                </h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Built-in Security' />
          <div className='flex flex-wrap gap-3'>
            {[
              { icon: HiOutlineShieldCheck, label: "PCI-DSS Compliant" },
              {
                icon: HiOutlineCheckBadge,
                label: "Real-time Fraud Detection",
              },
              {
                icon: HiOutlineClipboardDocumentCheck,
                label: "Simplified KYC",
              },
              {
                icon: HiOutlineShieldCheck,
                label: "Bank-level Encryption",
              },
            ].map((badge) => (
              <div
                key={badge.label}
                className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border dark:border-white/5 bg-muted/30 dark:bg-white/2 text-sm text-foreground'>
                <badge.icon
                  size={16}
                  className='text-emerald-600 dark:text-emerald-400 shrink-0'
                />
                {badge.label}
              </div>
            ))}
          </div>
          <p className='text-sm text-muted-foreground mt-4 leading-relaxed max-w-2xl'>
            Every transaction goes through our 5-layer verification engine
            before approval — giving you a 99.99% genuine payment rate and
            near-zero chargebacks.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12 text-center'>
          <h2 className='text-2xl md:text-4xl font-bold text-foreground mb-3 tracking-tight'>
            Start Collecting Payments
          </h2>
          <p className='text-base text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed'>
            Join thousands of African businesses already using KulmiPay. No
            setup fees, no monthly minimums.
          </p>
          <div className='flex flex-row items-center justify-center gap-3'>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors duration-200'>
              Get Started Free
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

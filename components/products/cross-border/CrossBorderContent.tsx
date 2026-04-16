import Link from "next/link";
import {
  HiOutlineArrowRight,
  HiOutlineDevicePhoneMobile,
  HiOutlineBuildingLibrary,
  HiOutlineBanknotes,
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineDocumentCheck,
  HiOutlineEye,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const markets = [
  {
    flag: "🇰🇪",
    country: "Kenya",
    channels: ["M-Pesa", "Bank"],
    speed: "Instant",
  },
  {
    flag: "🇹🇿",
    country: "Tanzania",
    channels: ["M-Pesa", "Bank"],
    speed: "Same day",
  },
  {
    flag: "🇺🇬",
    country: "Uganda",
    channels: ["Mobile Money", "Bank"],
    speed: "Same day",
  },
  {
    flag: "🇬🇭",
    country: "Ghana",
    channels: ["MTN MoMo", "Bank"],
    speed: "Same day",
  },
  {
    flag: "🇳🇬",
    country: "Nigeria",
    channels: ["Bank Transfer"],
    speed: "1-2 hrs",
  },
  {
    flag: "🇨🇲",
    country: "Cameroon",
    channels: ["Mobile Money", "Bank"],
    speed: "Same day",
  },
  {
    flag: "🇧🇫",
    country: "Burkina Faso",
    channels: ["Mobile Money"],
    speed: "Same day",
  },
  {
    flag: "🇨🇮",
    country: "Ivory Coast",
    channels: ["Mobile Money", "Bank"],
    speed: "Same day",
  },
];

const trackingSteps = [
  {
    label: "Initiated",
    time: "0:00",
    desc: "Payment request received and validated",
    active: true,
  },
  {
    label: "FX Converted",
    time: "0:02",
    desc: "Locked rate applied, funds reserved",
    active: true,
  },
  {
    label: "Dispatched",
    time: "0:05",
    desc: "Sent to destination network",
    active: true,
  },
  {
    label: "Delivered",
    time: "0:08",
    desc: "Confirmed — recipient notified",
    active: false,
  },
];

export function CrossBorderContent() {
  return (
    <>
      {/* Supported Markets — country grid */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Supported Markets' />
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {markets.map((m) => (
              <div
                key={m.country}
                className='rounded-xl border border-border dark:border-white/10 p-4 bg-white dark:bg-white/2 hover:border-brand/30 transition-colors'>
                <span className='text-2xl'>{m.flag}</span>
                <h3 className='text-sm font-semibold text-foreground mt-2 mb-1'>
                  {m.country}
                </h3>
                <div className='flex flex-wrap gap-1 mb-2'>
                  {m.channels.map((ch) => (
                    <span
                      key={ch}
                      className='text-[10px] px-1.5 py-0.5 rounded bg-muted/60 dark:bg-white/5 text-muted-foreground'>
                      {ch}
                    </span>
                  ))}
                </div>
                <p className='text-xs text-emerald-600 dark:text-emerald-400 font-medium'>
                  {m.speed}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Tracker — vertical shipment-style tracker */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Payment Tracker' />
          <p className='text-sm text-muted-foreground mb-6 max-w-lg'>
            Follow every cross-border payment from initiation to delivery.
            Real-time status updates at each stage — no guessing, no follow-up
            calls.
          </p>

          <div className='rounded-xl border border-border dark:border-white/10 bg-white dark:bg-white/2 p-5 md:p-6 max-w-lg'>
            <div className='relative'>
              {/* Vertical connecting line */}
              <div className='absolute left-2.75 top-3 bottom-3 w-px bg-border dark:bg-white/10' />

              <div className='space-y-6'>
                {trackingSteps.map((step, idx) => (
                  <div
                    key={step.label}
                    className='flex items-start gap-4 relative'>
                    {/* Dot */}
                    <div
                      className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        step.active
                          ? "border-emerald-500 bg-emerald-500/10"
                          : "border-border dark:border-white/20 bg-white dark:bg-[#0A0A0B]"
                      }`}>
                      {step.active && (
                        <div className='w-2 h-2 rounded-full bg-emerald-500' />
                      )}
                    </div>
                    {/* Content */}
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-center gap-2 mb-0.5'>
                        <span className='text-sm font-semibold text-foreground'>
                          {step.label}
                        </span>
                        <span className='font-mono text-[10px] text-muted-foreground'>
                          {step.time}
                        </span>
                      </div>
                      <p className='text-xs text-muted-foreground'>
                        {step.desc}
                      </p>
                    </div>
                    {/* Status label on last step */}
                    {idx === trackingSteps.length - 1 && (
                      <span className='text-[10px] font-medium px-2 py-0.5 rounded-md bg-brand/10 text-brand shrink-0'>
                        Pending
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Channels — side by side tall cards */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Delivery Channels' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <div className='rounded-xl border border-border dark:border-white/10 p-5 bg-white dark:bg-white/2'>
              <HiOutlineDevicePhoneMobile
                size={22}
                className='text-brand mb-3'
              />
              <h3 className='text-sm font-semibold text-foreground mb-1'>
                Mobile Money
              </h3>
              <p className='text-xs text-muted-foreground leading-relaxed'>
                M-Pesa, MTN Mobile Money, Airtel Money — direct to wallet across
                East and West Africa. Recipients get instant SMS confirmation.
              </p>
            </div>
            <div className='rounded-xl border border-border dark:border-white/10 p-5 bg-white dark:bg-white/2'>
              <HiOutlineBuildingLibrary
                size={22}
                className='text-blue-600 dark:text-blue-400 mb-3'
              />
              <h3 className='text-sm font-semibold text-foreground mb-1'>
                Bank Transfers
              </h3>
              <p className='text-xs text-muted-foreground leading-relaxed'>
                Direct deposits to local bank accounts in all supported
                countries. Competitive FX rates locked at the time of transfer.
              </p>
            </div>
            <div className='rounded-xl border border-border dark:border-white/10 p-5 bg-white dark:bg-white/2'>
              <HiOutlineBanknotes
                size={22}
                className='text-emerald-600 dark:text-emerald-400 mb-3'
              />
              <h3 className='text-sm font-semibold text-foreground mb-1'>
                Digital Wallets
              </h3>
              <p className='text-xs text-muted-foreground leading-relaxed'>
                CashApp and emerging digital wallets supported for maximum
                recipient flexibility in every corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance — full-width strip */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Compliance' />
          <div className='flex flex-wrap gap-3 mb-4'>
            {[
              {
                icon: HiOutlineShieldCheck,
                label: "PCI-DSS Certified",
                color: "text-emerald-600 dark:text-emerald-400",
              },
              {
                icon: HiOutlineLockClosed,
                label: "Recipient Verification",
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                icon: HiOutlineEye,
                label: "24/7 Monitoring",
                color: "text-amber-600 dark:text-amber-400",
              },
              {
                icon: HiOutlineDocumentCheck,
                label: "AML Screening",
                color: "text-purple-600 dark:text-purple-400",
              },
            ].map((badge) => (
              <span
                key={badge.label}
                className='inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border dark:border-white/10 bg-white dark:bg-white/3 text-xs font-medium text-foreground'>
                <badge.icon size={14} className={badge.color} />
                {badge.label}
              </span>
            ))}
          </div>
          <p className='text-sm text-muted-foreground max-w-xl leading-relaxed'>
            Every cross-border transfer is verified through our PCI-DSS
            compliant infrastructure. Recipient details are validated before
            disbursement, and continuous monitoring flags suspicious activity
            across all corridors.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <div className='rounded-xl border border-border dark:border-white/10 bg-linear-to-br from-brand-50 to-white dark:from-brand/5 dark:to-[#0A0A0B] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <div>
              <h3 className='text-lg md:text-xl font-bold text-foreground mb-1'>
                Ready to go cross-border?
              </h3>
              <p className='text-sm text-muted-foreground'>
                Create an account and send your first payment today.
              </p>
            </div>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors duration-200 shrink-0'>
              Get Started
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

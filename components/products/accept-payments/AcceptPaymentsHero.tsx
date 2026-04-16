import Link from "next/link";
import {
  HiOutlineArrowRight,
  HiOutlineDevicePhoneMobile,
  HiOutlineCreditCard,
  HiOutlineLink,
} from "react-icons/hi2";

const transactions = [
  {
    name: "J. Kamau",
    method: "M-Pesa",
    amount: "KES 4,500",
    time: "2 min ago",
  },
  {
    name: "S. Ochieng",
    method: "Card",
    amount: "KES 12,000",
    time: "5 min ago",
  },
  {
    name: "A. Hassan",
    method: "Payment Link",
    amount: "KES 850",
    time: "12 min ago",
  },
  {
    name: "G. Wanjiku",
    method: "M-Pesa",
    amount: "KES 7,800",
    time: "18 min ago",
  },
];

export function AcceptPaymentsHero() {
  return (
    <section className='relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100/50 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
      <div className='absolute top-10 -right-20 w-100 h-100 rounded-full bg-brand/8 blur-[100px] pointer-events-none' />
      <div className='absolute -bottom-10 -left-20 w-75 h-75 rounded-full bg-brand-light/10 blur-[80px] pointer-events-none' />
      <div
        className='absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage: `linear-gradient(rgba(245,110,15,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,110,15,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className='relative w-full px-6 md:px-12 pt-28 pb-10 md:pt-36 md:pb-16 flex flex-col md:flex-row items-center gap-10 md:gap-16'>
        {/* Text */}
        <div className='flex-1 min-w-0'>
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4'>
            Get Paid{" "}
            <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
              Anywhere
            </span>
          </h1>
          <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg'>
            Share a payment link on WhatsApp, embed checkout on your site, or
            trigger an M-Pesa STK push. Every transaction is verified for fraud
            before approval.
          </p>

          {/* Method pills */}
          <div className='flex flex-wrap gap-2 mb-6'>
            {[
              { icon: HiOutlineDevicePhoneMobile, label: "M-Pesa" },
              { icon: HiOutlineCreditCard, label: "Cards" },
              { icon: HiOutlineLink, label: "Payment Links" },
            ].map((m) => (
              <span
                key={m.label}
                className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs font-medium text-foreground'>
                <m.icon size={14} className='text-brand' />
                {m.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className='flex flex-row items-center gap-3'>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors duration-200'>
              Start Collecting
              <HiOutlineArrowRight
                size={18}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>
            <Link
              href='https://developers.kulmipay.com'
              className='inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-foreground border-2 border-border rounded-xl hover:border-brand/30 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all duration-300'>
              View Docs
            </Link>
          </div>
        </div>

        {/* Visual: Live collections panel */}
        <div className='flex-1 flex justify-center min-w-0'>
          <div className='w-full max-w-sm rounded-2xl border border-border dark:border-white/10 bg-white dark:bg-white/5 shadow-xl dark:shadow-none overflow-hidden'>
            {/* Header */}
            <div className='px-5 py-3 border-b border-border dark:border-white/5 flex items-center justify-between'>
              <div>
                <p className='text-sm font-semibold text-foreground'>
                  Collections
                </p>
                <p className='text-xs text-muted-foreground'>Today</p>
              </div>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400'>
                <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse' />
                {"Live"}
              </span>
            </div>

            {/* Transactions */}
            <div className='divide-y divide-border dark:divide-white/5'>
              {transactions.map((tx) => (
                <div
                  key={tx.name}
                  className='px-5 py-3 flex items-center justify-between'>
                  <div>
                    <p className='text-sm font-medium text-foreground'>
                      {tx.name}
                    </p>
                    <p className='text-xs text-muted-foreground'>
                      {tx.method} · {tx.time}
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='text-sm font-bold font-mono text-foreground'>
                      {tx.amount}
                    </p>
                    <p className='text-xs text-emerald-600 dark:text-emerald-400'>
                      Received
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className='px-5 py-3 bg-muted/50 dark:bg-white/2 flex items-center justify-between'>
              <span className='text-xs text-muted-foreground'>Total</span>
              <span className='text-sm font-bold font-mono text-foreground'>
                KES 25,150
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

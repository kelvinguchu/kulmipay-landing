import Link from "next/link";
import {
  HiOutlineArrowRight,
  HiOutlineCreditCard,
  HiOutlineDevicePhoneMobile,
  HiOutlineBanknotes,
  HiOutlineChartBarSquare,
  HiOutlineArrowsUpDown,
  HiOutlineArrowPath,
} from "react-icons/hi2";

export function BusinessHero() {
  return (
    <section className='relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100/50 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
      <div className='absolute top-10 right-1/4 w-100 h-100 rounded-full bg-brand/8 blur-[100px] pointer-events-none' />
      <div className='absolute -bottom-10 left-1/4 w-75 h-75 rounded-full bg-brand-light/10 blur-[80px] pointer-events-none' />
      <div
        className='absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage: `linear-gradient(rgba(245,110,15,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,110,15,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className='relative w-full px-6 md:px-12 pt-28 pb-6 md:pt-36 md:pb-10'>
        {/* Centered text */}
        <div className='text-center max-w-2xl mx-auto mb-10'>
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4'>
            One Dashboard for{" "}
            <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
              All Your Money
            </span>
          </h1>
          <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-6'>
            Collect cards, process mobile money, send payouts, and track it all
            in real time. No more juggling platforms.
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
              href='https://app.kulmipay.com/account/signup/'
              className='inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-foreground border-2 border-border rounded-xl hover:border-brand/30 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all duration-300'>
              Talk to Sales
            </Link>
          </div>
        </div>

        {/* Bento dashboard mockup */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto'>
          {/* Revenue - spans 2 cols */}
          <div className='col-span-2 p-4 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-white/5'>
            <div className='flex items-center justify-between mb-2'>
              <p className='text-xs text-muted-foreground'>Monthly Revenue</p>
              <span className='text-[10px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded'>
                +12.4%
              </span>
            </div>
            <p className='text-xl font-bold font-mono text-foreground mb-2'>
              KES 1,240,000
            </p>
            <div className='flex items-end gap-0.5 h-8'>
              {[35, 45, 30, 55, 40, 65, 50, 75, 60, 80, 70, 90].map((h, i) => (
                <div
                  key={`rev-${i.toString()}`}
                  className='flex-1 rounded-sm bg-brand/60'
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Transaction count */}
          <div className='p-4 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-white/5'>
            <HiOutlineArrowPath
              size={16}
              className='text-muted-foreground mb-2'
            />
            <p className='text-lg font-bold font-mono text-foreground'>3,812</p>
            <p className='text-[10px] text-muted-foreground'>Transactions</p>
          </div>

          {/* Success rate */}
          <div className='p-4 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-white/5'>
            <HiOutlineChartBarSquare
              size={16}
              className='text-muted-foreground mb-2'
            />
            <p className='text-lg font-bold font-mono text-foreground'>99.8%</p>
            <p className='text-[10px] text-muted-foreground'>Success Rate</p>
          </div>

          {/* Capabilities row */}
          {[
            {
              icon: HiOutlineCreditCard,
              label: "Cards & Wallets",
              sub: "Visa, Mastercard, GPay",
            },
            {
              icon: HiOutlineDevicePhoneMobile,
              label: "Mobile Money",
              sub: "M-Pesa, Airtel Money",
            },
            {
              icon: HiOutlineBanknotes,
              label: "Payouts",
              sub: "Bank, M-Pesa, PayBill",
            },
            {
              icon: HiOutlineArrowsUpDown,
              label: "Multi-Currency",
              sub: "KES, USD, EUR, GBP",
            },
          ].map((cap) => (
            <div
              key={cap.label}
              className='p-3 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-white/5 flex items-center gap-2.5'>
              <div className='shrink-0 w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center'>
                <cap.icon size={14} className='text-brand' />
              </div>
              <div className='min-w-0'>
                <p className='text-xs font-semibold text-foreground truncate'>
                  {cap.label}
                </p>
                <p className='text-[10px] text-muted-foreground truncate'>
                  {cap.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import {
  HiOutlineArrowRight,
  HiOutlineUserGroup,
  HiOutlineBuildingStorefront,
  HiOutlineBanknotes,
} from "react-icons/hi2";

const splits = [
  {
    label: "Vendor",
    icon: HiOutlineBuildingStorefront,
    pct: "70%",
    amount: "KES 7,000",
    color: "border-emerald-500/30 bg-emerald-500/5",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    label: "Platform Fee",
    icon: HiOutlineBanknotes,
    pct: "20%",
    amount: "KES 2,000",
    color: "border-brand/30 bg-brand/5",
    iconColor: "text-brand",
  },
  {
    label: "Agent",
    icon: HiOutlineUserGroup,
    pct: "10%",
    amount: "KES 1,000",
    color: "border-blue-500/30 bg-blue-500/5",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
];

export function SplitPaymentsHero() {
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
        {/* Text — left */}
        <div className='flex-1 min-w-0'>
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4'>
            Sub-Accounts in{" "}
            <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
              Hours, Not Months
            </span>
          </h1>
          <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg'>
            Skip building payment plumbing from scratch. KulmiPay gives
            fintechs, marketplaces, and platforms the APIs, compliance, and
            mobile money connectivity to launch wallet-based products at startup
            speed.
          </p>

          <div className='flex flex-row items-center gap-3'>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors duration-200'>
              Start Building
              <HiOutlineArrowRight
                size={18}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>
            <Link
              href='https://developers.kulmipay.com'
              className='px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold border border-border dark:border-white/10 rounded-xl text-foreground hover:bg-muted/50 dark:hover:bg-white/5 transition-colors duration-200'>
              View Docs
            </Link>
          </div>
        </div>

        {/* Split Diagram — right */}
        <div className='w-full md:flex-1'>
          <div className='rounded-xl border border-border dark:border-white/10 bg-white/70 dark:bg-white/3 backdrop-blur-sm overflow-hidden'>
            {/* Source payment */}
            <div className='px-4 py-3 border-b border-border dark:border-white/10 bg-muted/30 dark:bg-white/2 flex items-center justify-between'>
              <span className='text-xs font-semibold text-muted-foreground uppercase tracking-wider'>
                Incoming Payment
              </span>
              <span className='font-mono text-sm font-bold text-foreground'>
                KES 10,000
              </span>
            </div>

            {/* Arrow */}
            <div className='flex items-center justify-center py-2'>
              <div className='flex flex-col items-center'>
                <div className='w-px h-3 bg-border dark:bg-white/15' />
                <div className='w-4 h-4 border-b-2 border-r-2 border-brand rotate-45 -mt-1' />
              </div>
            </div>

            {/* Split destinations */}
            <div className='p-4 space-y-2'>
              {splits.map((s) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-3 p-3 rounded-lg border ${s.color}`}>
                  <s.icon size={18} className={s.iconColor} />
                  <div className='flex-1 min-w-0'>
                    <span className='text-sm font-medium text-foreground'>
                      {s.label}
                    </span>
                  </div>
                  <span className='text-xs font-mono text-muted-foreground'>
                    {s.pct}
                  </span>
                  <span className='font-mono text-sm font-semibold text-foreground'>
                    {s.amount}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className='px-4 py-2 bg-muted/30 dark:bg-white/2 border-t border-border/50 dark:border-white/5 text-[10px] text-muted-foreground'>
              {"Atomic splits · Instant settlement · Full audit trail"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

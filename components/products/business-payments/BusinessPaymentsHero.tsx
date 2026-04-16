import Link from "next/link";
import {
  HiOutlineArrowRight,
  HiOutlineBanknotes,
  HiOutlineDevicePhoneMobile,
  HiOutlineBuildingLibrary,
} from "react-icons/hi2";

const recipients = [
  {
    name: "Staff Payroll",
    channel: "M-Pesa",
    amount: "KES 340K",
    icon: HiOutlineDevicePhoneMobile,
  },
  {
    name: "Vendor Invoice",
    channel: "Bank",
    amount: "KES 85K",
    icon: HiOutlineBuildingLibrary,
  },
  {
    name: "Utility Bills",
    channel: "PayBill",
    amount: "KES 12K",
    icon: HiOutlineBanknotes,
  },
];

export function BusinessPaymentsHero() {
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
        <div className='text-center max-w-2xl mx-auto mb-8'>
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4'>
            Disburse to{" "}
            <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
              Thousands at Once
            </span>
          </h1>
          <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-6'>
            Upload a spreadsheet or trigger the API. Salaries, invoices, and
            bills land in M-Pesa, bank accounts, and paybills — with real-time
            confirmation on every one.
          </p>
          <div className='flex flex-row items-center justify-center gap-3'>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors duration-200'>
              Start Sending
              <HiOutlineArrowRight
                size={18}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>
            <Link
              href='https://developers.kulmipay.com'
              className='inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-foreground border-2 border-border rounded-xl hover:border-brand/30 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all duration-300'>
              API Docs
            </Link>
          </div>
        </div>

        {/* Flow visualization: Balance → fan out → recipients */}
        <div className='max-w-2xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center gap-3'>
            {/* Source */}
            <div className='shrink-0 w-full md:w-auto p-4 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-white/5 text-center'>
              <p className='text-xs text-muted-foreground mb-1'>Your Balance</p>
              <p className='text-xl font-bold font-mono text-foreground'>
                KES 437K
              </p>
            </div>

            {/* Arrow */}
            <div className='hidden md:flex items-center px-2'>
              <div className='w-12 h-px bg-brand' />
              <div className='w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-brand' />
            </div>
            <div className='md:hidden flex justify-center'>
              <div className='w-px h-6 bg-brand' />
            </div>

            {/* Recipients */}
            <div className='flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-2'>
              {recipients.map((r) => (
                <div
                  key={r.name}
                  className='p-3 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-white/5 flex items-center gap-3'>
                  <div className='shrink-0 w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center'>
                    <r.icon size={14} className='text-brand' />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-xs font-semibold text-foreground truncate'>
                      {r.name}
                    </p>
                    <p className='text-[10px] text-muted-foreground'>
                      {r.channel} · {r.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

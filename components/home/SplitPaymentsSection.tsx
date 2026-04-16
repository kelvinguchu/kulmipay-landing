import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const subAccounts = [
  { name: "Operations", currency: "KES", balance: "431,200", pct: 42 },
  { name: "Payroll", currency: "KES", balance: "289,050", pct: 28 },
  { name: "USD Reserve", currency: "USD", balance: "106,195", pct: 18 },
  { name: "EUR Reserve", currency: "EUR", balance: "87,440", pct: 12 },
];

const accentColors = [
  "bg-brand",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-violet-500",
];

export function SplitPaymentsSection() {
  return (
    <section
      className='relative py-6 md:py-10 bg-white dark:bg-[#0A0A0B] overflow-hidden'
      id='split-payments-section'>
      <div className='relative w-full px-6 md:px-12'>
        <SectionHeading title='Split Payments' />

        <div className='grid md:grid-cols-2 gap-10 md:gap-16 items-center'>
          {/* Left — Split visualization */}
          <div>
            {/* Master account */}
            <div className='rounded-2xl border border-border dark:border-white/10 bg-muted/30 dark:bg-white/5 p-6 mb-6'>
              <div className='flex items-center justify-between mb-4'>
                <div>
                  <p className='text-[10px] uppercase tracking-wider text-muted-foreground mb-1'>
                    Master Account
                  </p>
                  <p className='text-xl md:text-2xl font-bold font-mono text-foreground'>
                    KES 913,885
                  </p>
                </div>
                <div className='flex items-center gap-1.5'>
                  <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
                  <span className='text-[10px] text-muted-foreground'>
                    Live
                  </span>
                </div>
              </div>

              {/* Split bar */}
              <div className='flex h-2 rounded-full overflow-hidden gap-0.5'>
                {subAccounts.map((acc, i) => (
                  <div
                    key={acc.name}
                    className={`${accentColors[i]} rounded-full`}
                    style={{ width: `${acc.pct}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Sub-account cards */}
            <div className='grid grid-cols-2 gap-3'>
              {subAccounts.map((acc, i) => (
                <div
                  key={acc.name}
                  className='rounded-xl border border-border dark:border-white/5 bg-muted/20 dark:bg-white/3 p-4 hover:border-brand/20 dark:hover:border-white/10 transition-colors'>
                  <div className='flex items-center gap-2 mb-3'>
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${accentColors[i]}`}
                    />
                    <span className='text-xs font-medium text-muted-foreground'>
                      {acc.name}
                    </span>
                  </div>
                  <p className='text-base md:text-lg font-bold font-mono text-foreground'>
                    {acc.balance}
                  </p>
                  <p className='text-[10px] font-mono text-muted-foreground/60 mt-0.5'>
                    {acc.currency} · {acc.pct}%
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Text + CTA */}
          <div>
            <p className='text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed'>
              Payment infrastructure for businesses and platforms. Manage
              customer sub-accounts, process split payments, and handle
              multi-currency operations — all through one API.
            </p>

            <div className='space-y-3 md:space-y-4 mb-8 md:mb-10'>
              {[
                "Automatic revenue splitting across sub-accounts",
                "Multi-currency balances (KES, USD, EUR, GBP)",
                "Real-time fund movement between accounts",
                "Enterprise APIs for full automation",
                "Compliant reporting built in",
              ].map((item) => (
                <div key={item} className='flex items-start gap-3'>
                  <div className='shrink-0 w-1.5 h-1.5 rounded-full bg-brand mt-2' />
                  <span className='text-sm text-muted-foreground'>{item}</span>
                </div>
              ))}
            </div>

            <div className='flex items-center gap-4'>
              <Link
                href='/split-payments'
                className='group inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors'>
                Learn More
                <HiOutlineArrowRight
                  size={16}
                  className='group-hover:translate-x-0.5 transition-transform'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

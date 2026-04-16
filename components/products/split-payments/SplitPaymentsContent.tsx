import Link from "next/link";
import {
  HiOutlineArrowRight,
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineScale,
  HiOutlineBuildingStorefront,
  HiOutlineCreditCard,
  HiOutlineUserGroup,
  HiOutlineBuildingLibrary,
  HiOutlineGlobeAlt,
  HiOutlineBanknotes,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const ledgerRows = [
  {
    account: "Vendor A",
    type: "Credit",
    ref: "SPL-001",
    amount: "+KES 35,000",
    balance: "KES 142,500",
    positive: true,
  },
  {
    account: "Platform",
    type: "Fee",
    ref: "SPL-001",
    amount: "+KES 10,000",
    balance: "KES 87,200",
    positive: true,
  },
  {
    account: "Agent B",
    type: "Credit",
    ref: "SPL-001",
    amount: "+KES 5,000",
    balance: "KES 23,100",
    positive: true,
  },
  {
    account: "Vendor A",
    type: "Withdrawal",
    ref: "WTH-042",
    amount: "-KES 100,000",
    balance: "KES 42,500",
    positive: false,
  },
];

const useCases = [
  {
    icon: HiOutlineBuildingStorefront,
    title: "Marketplaces",
    desc: "Split buyer payments between vendors, delivery, and platform fees automatically.",
  },
  {
    icon: HiOutlineCreditCard,
    title: "Fintech",
    desc: "Issue wallets, manage float, and enable P2P transfers under your own brand.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Payroll & HR",
    desc: "Distribute salaries and benefits to thousands in a single batch.",
  },
  {
    icon: HiOutlineBuildingLibrary,
    title: "NGOs",
    desc: "Disburse grants directly to beneficiary mobile wallets with full accountability.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Remittance",
    desc: "Route cross-border transfers through local rails for faster, cheaper delivery.",
  },
  {
    icon: HiOutlineBanknotes,
    title: "Lending & SACCO",
    desc: "Automate loan disbursement and repayment collection with sub-accounts.",
  },
];

export function SplitPaymentsContent() {
  return (
    <>
      {/* Ledger — sub-account transaction table */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Fund Isolation' />
          <p className='text-sm text-muted-foreground mb-4 max-w-lg'>
            Each sub-account maintains a completely separate ledger. Funds never
            mix between users without explicit transfer instructions.
          </p>

          <div className='rounded-xl border border-border dark:border-white/10 overflow-hidden'>
            {/* Table header */}
            <div className='hidden md:grid grid-cols-5 gap-0 bg-muted/50 dark:bg-white/3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider'>
              <div className='px-4 py-2.5'>Account</div>
              <div className='px-4 py-2.5'>Type</div>
              <div className='px-4 py-2.5'>Reference</div>
              <div className='px-4 py-2.5'>Amount</div>
              <div className='px-4 py-2.5'>Balance</div>
            </div>
            <div className='divide-y divide-border dark:divide-white/5'>
              {ledgerRows.map((row) => (
                <div
                  key={`${row.account}-${row.ref}`}
                  className='grid grid-cols-2 md:grid-cols-5 gap-0 text-sm'>
                  <div className='px-4 py-3 font-medium text-foreground'>
                    {row.account}
                  </div>
                  <div className='px-4 py-3 text-muted-foreground hidden md:block'>
                    {row.type}
                  </div>
                  <div className='px-4 py-3 font-mono text-xs text-muted-foreground hidden md:block'>
                    {row.ref}
                  </div>
                  <div className='px-4 py-3'>
                    <span
                      className={`font-mono font-medium ${
                        row.positive
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-red-500 dark:text-red-400"
                      }`}>
                      {row.amount}
                    </span>
                  </div>
                  <div className='px-4 py-3 font-mono text-xs text-foreground hidden md:block'>
                    {row.balance}
                  </div>
                </div>
              ))}
            </div>
            <div className='px-4 py-2.5 bg-muted/30 dark:bg-white/2 text-[10px] text-muted-foreground'>
              {"Strict isolation · Atomic transactions · Full audit trail"}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases — 3×2 grid */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Use Cases' />
          <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className='rounded-xl border border-border dark:border-white/10 p-4 bg-white dark:bg-white/2'>
                <uc.icon size={20} className='text-brand mb-2.5' />
                <h3 className='text-sm font-semibold text-foreground mb-1'>
                  {uc.title}
                </h3>
                <p className='text-xs text-muted-foreground leading-relaxed'>
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed & Security — stats + badges */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Speed & Security' />

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mb-5'>
            {[
              { value: "12+", label: "Months saved" },
              { value: "24/7", label: "Dev support" },
              { value: "PCI", label: "Certified" },
              { value: "< 1hr", label: "Sandbox to live" },
            ].map((stat) => (
              <div
                key={stat.label}
                className='py-3 text-center border-l-2 first:border-l-0 border-border dark:border-white/10'>
                <p className='text-2xl md:text-3xl font-bold font-mono text-foreground'>
                  {stat.value}
                </p>
                <p className='text-xs text-muted-foreground mt-1'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className='flex flex-wrap gap-3'>
            {[
              {
                icon: HiOutlineShieldCheck,
                label: "PCI-DSS Compliant",
                color: "text-emerald-600 dark:text-emerald-400",
              },
              {
                icon: HiOutlineScale,
                label: "AML/KYC Built-in",
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                icon: HiOutlineLockClosed,
                label: "Auto-Reconciliation",
                color: "text-amber-600 dark:text-amber-400",
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
        </div>
      </section>

      {/* CTA */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <div className='rounded-xl border border-border dark:border-white/10 bg-linear-to-br from-brand-50 to-white dark:from-brand/5 dark:to-[#0A0A0B] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <div>
              <h3 className='text-lg md:text-xl font-bold text-foreground mb-1'>
                Ready to launch your platform?
              </h3>
              <p className='text-sm text-muted-foreground'>
                Get API keys and start building split payment flows today.
              </p>
            </div>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors duration-200 shrink-0'>
              Start Building
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

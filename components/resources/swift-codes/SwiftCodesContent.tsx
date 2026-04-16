"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineBuildingLibrary,
  HiOutlineArrowRight,
  HiOutlineClipboardDocument,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const swiftCodes = [
  { bank: "Co-operative Bank of Kenya", code: "KCOOKENAXXX" },
  { bank: "KCB Bank Kenya Limited", code: "KCBLKENX017" },
  { bank: "I & M Bank Ltd", code: "IMBLKENAXXX" },
  { bank: "Family Bank Limited", code: "FABLKENAXXX" },
  { bank: "Bank of Africa Kenya Ltd", code: "AFRIKENXXXX" },
  { bank: "Ecobank Kenya Ltd", code: "ECOCKENAXXX" },
  { bank: "Equity Bank (Kenya) Limited", code: "EQBLKENAXXX" },
  { bank: "Standard Chartered Bank Kenya", code: "SCBLKENXXXX" },
  { bank: "ABSA Bank Kenya (Barclays)", code: "BABOROBBXXX" },
  { bank: "Diamond Trust Bank (DTB)", code: "DTEIKINAXX" },
  { bank: "National Bank of Kenya", code: "NBKEKENAXXX" },
  { bank: "Stanbic Bank Kenya", code: "SBICKENXXXX" },
  { bank: "NCBA Bank Kenya", code: "CBAFKENAXXX" },
  { bank: "Gulf African Bank", code: "GAABOROBXXX" },
  { bank: "Prime Bank Limited", code: "PRABOROBXXX" },
  { bank: "Credit Bank Limited", code: "CRABOROBXXX" },
  { bank: "Guardian Bank Limited", code: "GUARKENAXXX" },
  { bank: "Housing Finance Company", code: "HFCOKENAXXX" },
  { bank: "Consolidated Bank of Kenya", code: "CONBKENAXXX" },
  { bank: "Victoria Commercial Bank", code: "VICMKENAXXX" },
];

export function SwiftCodesContent() {
  const [search, setSearch] = useState("");

  const filtered = swiftCodes.filter(
    (s) =>
      s.bank.toLowerCase().includes(search.toLowerCase()) ||
      s.code.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-40 w-100 h-100 rounded-full bg-brand/8 blur-[100px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12 pt-28 pb-6 md:pt-36 md:pb-10'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4'>
              Kenya Bank{" "}
              <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
                SWIFT Codes
              </span>
              <br />
              Directory
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed'>
              Find the SWIFT/BIC code for any Kenyan bank to send or receive
              international wire transfers. Use with KulmiPay&apos;s
              cross-border payment tools for faster, cheaper remittances.
            </p>
          </div>
        </div>
      </section>

      {/* Search + Table */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading
            title='Directory'
            subtitle='Search by bank name or SWIFT/BIC code'
          />
          <div className='relative mb-6'>
            <HiOutlineMagnifyingGlass
              className='absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground'
              size={20}
            />
            <input
              type='text'
              placeholder='Search by bank name or SWIFT code...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-white dark:bg-white/3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20'
            />
          </div>

          {/* Table */}
          <div className='rounded-xl border border-border overflow-hidden'>
            <div className='grid grid-cols-[1fr_auto] gap-4 p-4 bg-brand/5 border-b border-border'>
              <span className='text-sm font-semibold text-foreground'>
                Bank Name
              </span>
              <span className='text-sm font-semibold text-foreground'>
                SWIFT / BIC Code
              </span>
            </div>
            <div className='divide-y divide-border'>
              {filtered.map((s) => (
                <div
                  key={s.code}
                  className='grid grid-cols-[1fr_auto] gap-4 p-4'>
                  <div className='flex items-center gap-3'>
                    <div className='p-1.5 rounded-lg bg-brand/10 text-brand shrink-0'>
                      <HiOutlineBuildingLibrary size={16} />
                    </div>
                    <span className='text-sm font-medium'>{s.bank}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <code className='text-sm font-mono text-brand font-semibold bg-brand/5 px-3 py-1 rounded-lg'>
                      {s.code}
                    </code>
                    <button
                      onClick={() => navigator.clipboard.writeText(s.code)}
                      className='p-1.5 rounded-lg text-muted-foreground'
                      title='Copy SWIFT code'>
                      <HiOutlineClipboardDocument size={16} />
                    </button>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className='p-8 text-center text-muted-foreground'>
                  No banks found matching &ldquo;{search}&rdquo;
                </div>
              )}
            </div>
          </div>
          <p className='text-sm text-muted-foreground mt-4'>
            Need to send money internationally? Use{" "}
            <Link href='/cross-border' className='text-brand hover:underline'>
              KulmiPay Cross-Border Payments
            </Link>{" "}
            for faster delivery and lower fees.
          </p>
        </div>
      </section>

      {/* SWIFT Alternative + CTA */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading
            title='Skip the SWIFT'
            subtitle='Send money across Africa faster and cheaper'
          />
          <div className='grid md:grid-cols-2 gap-4 mb-8'>
            <div className='rounded-xl border border-border dark:border-white/10 p-5 bg-white dark:bg-white/2'>
              <p className='text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3'>
                Traditional SWIFT
              </p>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li>3–5 business days delivery</li>
                <li>$25–50 per transfer fees</li>
                <li>Requires SWIFT/BIC codes</li>
                <li>Limited to bank accounts only</li>
              </ul>
            </div>
            <div className='rounded-xl border border-brand/30 dark:border-brand/20 p-5 bg-brand-50/50 dark:bg-brand/5'>
              <p className='text-xs font-semibold text-brand uppercase tracking-wider mb-3'>
                KulmiPay Cross-Border
              </p>
              <ul className='space-y-2 text-sm text-foreground'>
                <li>Same-day delivery</li>
                <li>Fraction of the cost</li>
                <li>No codes needed</li>
                <li>Direct to mobile money & bank accounts</li>
              </ul>
            </div>
          </div>
          <div className='rounded-xl border border-border dark:border-white/10 bg-linear-to-br from-brand-50 to-white dark:from-brand/5 dark:to-white/2 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <div>
              <h3 className='text-lg font-semibold text-foreground mb-1'>
                Try Cross-Border Payments
              </h3>
              <p className='text-sm text-muted-foreground'>
                Same-day delivery to 7+ African countries at a fraction of SWIFT
                costs.
              </p>
            </div>
            <Link
              href='/cross-border'
              className='inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl shrink-0'>
              Explore Cross-Border
              <HiOutlineArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

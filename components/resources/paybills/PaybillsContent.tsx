"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineArrowRight,
  HiOutlineClipboardDocument,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const paybills = [
  { name: "Safaricom (Post & Pre-paid)", code: "200200", category: "Telecom" },
  { name: "Faiba", code: "330330", category: "Telecom" },
  { name: "Telkom Kenya", code: "777711", category: "Telecom" },
  { name: "KPLC Prepaid (Kenya Power)", code: "888880", category: "Utilities" },
  { name: "KPLC Post Pay", code: "888888", category: "Utilities" },
  { name: "KPLC New Connection", code: "888899", category: "Utilities" },
  { name: "Nairobi Water & Sewerage", code: "444400", category: "Utilities" },
  { name: "DSTV", code: "444900", category: "Entertainment" },
  { name: "Zuku", code: "320320", category: "Entertainment" },
  { name: "StarTimes", code: "585858", category: "Entertainment" },
  { name: "eCitizen Services", code: "206206", category: "Government" },
  { name: "NHIF", code: "200222", category: "Government" },
  { name: "NSSF", code: "333300", category: "Government" },
  { name: "Equity Bank", code: "247247", category: "Banking" },
  { name: "KCB Bank", code: "522522", category: "Banking" },
  { name: "Co-operative Bank", code: "400200", category: "Banking" },
  { name: "Family Bank", code: "222111", category: "Banking" },
  { name: "Standard Chartered Bank", code: "329329", category: "Banking" },
  { name: "I & M Bank", code: "542542", category: "Banking" },
  { name: "National Bank", code: "547700", category: "Banking" },
  { name: "Stanbic Bank", code: "600100", category: "Banking" },
  { name: "DTB Bank", code: "516600", category: "Banking" },
  { name: "NIC Bank", code: "488488", category: "Banking" },
  { name: "Naivas Supermarket", code: "552883", category: "Retail" },
  { name: "Pesapal", code: "220220", category: "Payments" },
  { name: "Sport Pesa", code: "5212121", category: "Entertainment" },
];

const categories = [
  "All",
  "Telecom",
  "Utilities",
  "Banking",
  "Government",
  "Entertainment",
  "Retail",
  "Payments",
];

export function PaybillsContent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = paybills.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.code.includes(search);
    const matchCat = category === "All" || p.category === category;
    return matchSearch && matchCat;
  });

  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-40 w-100 h-100 rounded-full bg-brand/8 blur-[100px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12 pt-28 pb-6 md:pt-36 md:pb-10'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4'>
              Kenya{" "}
              <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
                PayBill Numbers
              </span>
              <br />
              Directory
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed'>
              Find M-Pesa PayBill numbers for all major Kenyan businesses,
              banks, utilities, and government services. Search by name or
              PayBill code.
            </p>
          </div>
        </div>
      </section>

      {/* Search + Filter + Table */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading
            title='Lookup'
            subtitle='Search by business name, category, or PayBill number'
          />
          <div className='relative mb-6'>
            <HiOutlineMagnifyingGlass
              className='absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground'
              size={20}
            />
            <input
              type='text'
              placeholder='Search by business name or PayBill number...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-white dark:bg-white/3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20'
            />
          </div>

          {/* Category Filter */}
          <div className='flex flex-wrap gap-2 mb-6'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-brand text-white"
                    : "bg-brand/5 text-foreground/70"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className='rounded-xl border border-border overflow-hidden'>
            <div className='grid grid-cols-[1fr_auto_auto] gap-4 p-4 bg-brand/5 border-b border-border'>
              <span className='text-sm font-semibold'>Business</span>
              <span className='text-sm font-semibold'>Category</span>
              <span className='text-sm font-semibold'>PayBill</span>
            </div>
            <div className='divide-y divide-border'>
              {filtered.map((p) => (
                <div
                  key={p.code + p.name}
                  className='grid grid-cols-[1fr_auto_auto] gap-4 p-4 items-center'>
                  <span className='text-sm font-medium'>{p.name}</span>
                  <span className='text-xs px-2 py-1 rounded-full bg-brand/5 text-brand font-medium'>
                    {p.category}
                  </span>
                  <div className='flex items-center gap-2'>
                    <code className='text-sm font-mono text-brand font-semibold bg-brand/5 px-3 py-1 rounded-lg'>
                      {p.code}
                    </code>
                    <button
                      onClick={() => navigator.clipboard.writeText(p.code)}
                      className='p-1.5 rounded-lg text-muted-foreground'
                      title='Copy PayBill code'>
                      <HiOutlineClipboardDocument size={16} />
                    </button>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className='p-8 text-center text-muted-foreground'>
                  No PayBill found matching your search.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <div className='rounded-xl border border-border dark:border-white/10 bg-linear-to-br from-brand-50 to-white dark:from-brand/5 dark:to-white/2 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <div>
              <h3 className='text-lg font-semibold text-foreground mb-1'>
                Get Your Own PayBill
              </h3>
              <p className='text-sm text-muted-foreground'>
                Accept M-Pesa payments directly into your KulmiPay account — no
                application paperwork.
              </p>
            </div>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl shrink-0'>
              Start Accepting Payments
              <HiOutlineArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineArrowDownTray,
} from "react-icons/hi2";

const doItems = [
  "Use the official KulmiPay logo in its original proportions",
  "Maintain adequate clear space around the logo",
  "Use the logo on backgrounds with sufficient contrast",
  "Reference KulmiPay with a capital K and P",
  "Link to kulmipay.com when using our brand assets",
];

const dontItems = [
  "Alter the logo colours or proportions",
  "Add effects, shadows, or outlines to the logo",
  "Place the logo on busy or low-contrast backgrounds",
  "Use the logo to imply endorsement without permission",
  "Recreate or approximate the logo using other fonts",
];

const colours = [
  { name: "Primary Orange", hex: "#F56E0F", text: "white" },
  { name: "Dark Orange", hex: "#C4580C", text: "white" },
  { name: "Light Orange", hex: "#FD9A50", text: "black" },
  { name: "Pale Orange", hex: "#FEEADB", text: "black" },
  { name: "Dark Surface", hex: "#0A0A0B", text: "white" },
  { name: "White", hex: "#FFFFFF", text: "black" },
];

export function BrandingContent() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyColour = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-40 w-150 h-150 rounded-full bg-brand/8 blur-[120px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12 pt-32 pb-6 md:pt-40 md:pb-8'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4'>
              KulmiPay{" "}
              <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
                Brand Guidelines
              </span>
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed'>
              Use our brand assets correctly and consistently. Download logos,
              access colour codes, and learn the dos and don&apos;ts of
              representing KulmiPay.
            </p>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className='py-6 md:py-10'>
        <div className='w-full px-6 md:px-12'>
          <div className='text-center mb-6 md:mb-10'>
            <h2 className='text-2xl md:text-4xl font-bold tracking-tight'>
              Our Logo
            </h2>
          </div>
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            {/* Light background */}
            <div className='rounded-2xl border border-border bg-white p-12 flex items-center justify-center'>
              <Image
                src='/logo.png'
                alt='KulmiPay Logo'
                width={220}
                height={60}
                className='object-contain'
              />
            </div>
            {/* Dark background */}
            <div className='rounded-2xl border border-white/10 bg-[#0A0A0B] p-12 flex items-center justify-center'>
              <Image
                src='/logo.png'
                alt='KulmiPay Logo on dark'
                width={220}
                height={60}
                className='object-contain'
              />
            </div>
          </div>
          <div className='text-center mt-8'>
            <Link
              href='/logo.png'
              download
              className='group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-all'>
              <HiOutlineArrowDownTray size={18} />
              Download Logo (PNG)
            </Link>
          </div>
        </div>
      </section>

      {/* Colour Palette */}
      <section className='py-6 md:py-10 bg-brand-50/50 dark:bg-white/2'>
        <div className='w-full px-6 md:px-12'>
          <div className='text-center mb-6 md:mb-10'>
            <h2 className='text-2xl md:text-4xl font-bold tracking-tight'>
              Brand Palette
            </h2>
          </div>
          <div className='grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto'>
            {colours.map((colour) => (
              <button
                key={colour.hex}
                onClick={() => copyColour(colour.hex)}
                className='group rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-left cursor-pointer'>
                <div
                  className='h-24 w-full flex items-center justify-center'
                  style={{ backgroundColor: colour.hex }}>
                  {copied === colour.hex && (
                    <span
                      className='text-xs font-semibold'
                      style={{ color: colour.text }}>
                      Copied!
                    </span>
                  )}
                </div>
                <div className='p-3 bg-white dark:bg-white/5'>
                  <p className='text-xs font-semibold'>{colour.name}</p>
                  <p className='text-xs text-muted-foreground font-mono'>
                    {colour.hex}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dos & Don'ts */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B] relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-125 h-125 rounded-full bg-brand/5 blur-[120px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12'>
          <div className='text-center mb-6 md:mb-10'>
            <h2 className='text-2xl md:text-4xl font-bold text-foreground'>
              Dos &amp; Don&apos;ts
            </h2>
          </div>
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <div className='p-5 md:p-8 rounded-2xl border bg-muted/30 dark:bg-white/3 border-border dark:border-white/8'>
              <h3 className='text-lg font-semibold text-green-400 mb-6 flex items-center gap-2'>
                <HiOutlineCheckCircle size={20} /> Do
              </h3>
              <ul className='space-y-3'>
                {doItems.map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-3 text-sm text-muted-foreground'>
                    <HiOutlineCheckCircle
                      className='text-green-400 mt-0.5 shrink-0'
                      size={16}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className='p-5 md:p-8 rounded-2xl border bg-muted/30 dark:bg-white/3 border-border dark:border-white/8'>
              <h3 className='text-lg font-semibold text-red-400 mb-6 flex items-center gap-2'>
                <HiOutlineXCircle size={20} /> Don&apos;t
              </h3>
              <ul className='space-y-3'>
                {dontItems.map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-3 text-sm text-muted-foreground'>
                    <HiOutlineXCircle
                      className='text-red-400 mt-0.5 shrink-0'
                      size={16}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className='py-6 md:py-10'>
        <div className='w-full px-6 md:px-12 text-center'>
          <h2 className='text-2xl md:text-4xl font-bold tracking-tight mb-4'>
            Display With Confidence
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-12'>
            Show your customers that payments are secured by KulmiPay. Use our
            &ldquo;Powered by KulmiPay&rdquo; badge on your checkout pages and
            websites.
          </p>
          <div className='inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-white dark:bg-white/3 shadow-lg'>
            <Image
              src='/logo.png'
              alt='KulmiPay Badge'
              width={120}
              height={32}
              className='object-contain'
            />
            <span className='text-sm font-medium text-muted-foreground'>
              Secured by KulmiPay
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='relative py-6 md:py-10 overflow-hidden'>
        <div className='absolute inset-0 bg-white dark:bg-[#0A0A0B]' />
        <div className='relative w-full px-6 md:px-12 text-center'>
          <h2 className='text-2xl md:text-4xl font-bold text-foreground mb-6'>
            Need Custom Assets?
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-10'>
            For press inquiries, co-branded materials, or custom badge
            variations, contact our brand team.
          </p>
          <Link
            href='mailto:onboarding@kulmipay.com'
            className='group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-all shadow-lg hover:-translate-y-0.5'>
            Contact Brand Team
            <HiOutlineArrowRight
              size={18}
              className='group-hover:translate-x-0.5 transition-transform'
            />
          </Link>
        </div>
      </section>
    </>
  );
}

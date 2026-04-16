"use client";

import Link from "next/link";
import {
  HiOutlineCreditCard,
  HiOutlineBriefcase,
  HiOutlineArrowsRightLeft,
  HiOutlineArrowPath,
  HiOutlineDevicePhoneMobile,
  HiOutlineShoppingBag,
  HiOutlineBuildingStorefront,
  HiOutlineCube,
  HiOutlineGlobeAlt,
  HiArrowRight,
} from "react-icons/hi2";

export const solutions = {
  products: [
    {
      label: "Accept Online Payments",
      href: "/accept-online-payments",
      description: "Receive payments from customers locally and globally.",
      icon: HiOutlineCreditCard,
    },
    {
      label: "Business Payments",
      href: "/business-payments",
      description: "Manage your business transactions securely and easily.",
      icon: HiOutlineBriefcase,
    },
    {
      label: "Split Payments",
      href: "/split-payments",
      description: "Automate revenue sharing with vendors or partners.",
      icon: HiOutlineArrowsRightLeft,
    },
    {
      label: "Cross-Border Payouts",
      href: "/cross-border",
      description: "Send money across borders quickly and securely.",
      icon: HiOutlineArrowPath,
    },
    {
      label: "M-Pesa API",
      href: "/mpesa-api",
      description: "Integrate M-Pesa payments seamlessly into your app.",
      icon: HiOutlineDevicePhoneMobile,
    },
  ],
  cms: [
    {
      label: "WooCommerce",
      href: "#",
      description: "Seamless payments for your WooCommerce store.",
      icon: HiOutlineShoppingBag,
    },
    {
      label: "WordPress",
      href: "#",
      description: "Accept payments directly on your WordPress site.",
      icon: HiOutlineBuildingStorefront,
    },
    {
      label: "Shopify",
      href: "#",
      description: "Powerful payment integration for Shopify.",
      icon: HiOutlineGlobeAlt,
    },
    {
      label: "Bubble.io",
      href: "#",
      description: "No-code payment solutions for your Bubble app.",
      icon: HiOutlineCube,
    },
  ],
};

export function SolutionsDropdown() {
  return (
    <div className='absolute top-full left-0 pt-4 w-220 animate-in fade-in slide-in-from-top-2 duration-200 cursor-default'>
      <div className='rounded-2xl border border-border bg-card shadow-2xl max-h-[85vh] overflow-y-auto overflow-x-hidden'>
        <div className='grid grid-cols-2 gap-0'>
          {/* Products Column */}
          <div className='p-6'>
            <h3 className='text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-3 px-2'>
              Products
            </h3>
            <div className='space-y-1'>
              {solutions.products.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className='flex items-center gap-3 p-2 rounded-xl hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors group'>
                  <div className='p-2 rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors shrink-0'>
                    <item.icon size={20} />
                  </div>
                  <h4 className='text-base font-medium text-foreground/90 group-hover:text-brand transition-colors'>
                    {item.label}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          {/* CMS & Plugins Column */}
          <div className='p-6 border-l border-border flex flex-col justify-between'>
            <div>
              <h3 className='text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-3 px-2'>
                CMS Integrations
              </h3>
              <div className='space-y-1'>
                {solutions.cms.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className='flex items-center gap-3 p-2 rounded-xl hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors group'>
                    <div className='p-2 rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors shrink-0'>
                      <item.icon size={20} />
                    </div>
                    <h4 className='text-base font-medium text-foreground/90 group-hover:text-brand transition-colors'>
                      {item.label}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            <div className='mt-6 px-2'>
              <Link
                href='https://developers.kulmipay.com'
                className='flex items-center justify-between p-3 rounded-xl bg-brand/5 border border-brand/10 hover:bg-brand/10 transition-colors group'>
                <div>
                  <h4 className='text-sm font-semibold text-brand'>
                    API Documentation
                  </h4>
                  <p className='text-xs text-foreground/60 mt-0.5'>
                    Explore our Developer Docs
                  </p>
                </div>
                <div className='w-8 h-8 rounded-full bg-white dark:bg-[#1A1816] shadow-sm flex items-center justify-center text-brand group-hover:scale-110 transition-transform'>
                  <HiArrowRight className='w-4 h-4' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

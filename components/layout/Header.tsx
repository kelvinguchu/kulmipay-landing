"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  HiChevronDown,
  HiOutlineSun,
  HiOutlineMoon,
  HiArrowRight,
} from "react-icons/hi2";
import { SolutionsDropdown, solutions } from "./SolutionsDropdown";

const navLinks = [
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "Accept Online Payments", href: "/accept-online-payments" },
      { label: "Business Payments", href: "/business-payments" },
      { label: "Split Payments", href: "/split-payments" },
      { label: "M-Pesa API", href: "/mpesa-api" },
    ],
  },
  { label: "Developers", href: "https://developers.kulmipay.com" },
  { label: "Pricing", href: "/pricing" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const getFirstLineClass = () => {
    if (mobileOpen) return "rotate-45 translate-y-1.5 bg-foreground";
    return "bg-foreground";
  };

  const getSecondLineClass = () => {
    if (mobileOpen) return "opacity-0 bg-foreground";
    return "bg-foreground";
  };

  const getThirdLineClass = () => {
    if (mobileOpen) return "-rotate-45 -translate-y-1.5 bg-foreground";
    return "bg-foreground";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileOpen
            ? "bg-background border-b border-border shadow-sm"
            : "bg-transparent"
        }`}>
        <div className='w-full px-6'>
          <div className='flex h-18 items-center justify-between'>
            {/* Logo */}
            <Link href='/' className='shrink-0 relative' id='header-logo'>
              <Image
                src='/logo.png'
                alt='KulmiPay'
                width={140}
                height={48}
                className='h-10 w-auto'
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center gap-1' id='desktop-nav'>
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className='relative'
                  onMouseEnter={() =>
                    link.children && setDropdownOpen(link.label)
                  }
                  onMouseLeave={() => setDropdownOpen(null)}>
                  {link.children ? (
                    <button
                      className='flex items-center gap-1 px-4 py-2 text-base font-medium text-foreground/80 hover:text-brand transition-colors rounded-lg hover:bg-brand-50 dark:hover:bg-brand-900/20 cursor-pointer'
                      id={`nav-${link.label.toLowerCase()}`}>
                      {link.label}
                      <HiChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          dropdownOpen === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className='group flex items-center gap-1.5 px-4 py-2 text-base font-medium text-foreground/80 hover:text-brand transition-colors rounded-lg hover:bg-brand-50 dark:hover:bg-brand-900/20'
                      id={`nav-${link.label.toLowerCase()}`}>
                      {link.label}
                      <HiArrowRight className='w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand' />
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.children &&
                    dropdownOpen === link.label &&
                    (link.label === "Solutions" ? (
                      <SolutionsDropdown />
                    ) : (
                      <div className='absolute top-full left-0 pt-2 w-64 animate-in fade-in slide-in-from-top-2 duration-200'>
                        <div className='rounded-xl border border-border bg-white dark:bg-[#141210] shadow-xl p-2'>
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className='block px-4 py-2.5 text-base text-foreground/70 hover:text-brand hover:bg-brand-50 dark:hover:bg-brand-900/20 rounded-lg transition-colors'>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </nav>

            {/* Desktop CTAs + Theme Toggle */}
            <div
              className='hidden lg:flex items-center gap-3'
              id='desktop-ctas'>
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className='p-2 rounded-lg text-foreground/60 hover:text-brand hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all cursor-pointer group'
                  aria-label='Toggle theme'>
                  {resolvedTheme === "dark" ? (
                    <HiOutlineSun
                      size={20}
                      className='group-hover:rotate-45 transition-transform'
                    />
                  ) : (
                    <HiOutlineMoon
                      size={20}
                      className='group-hover:-rotate-12 transition-transform'
                    />
                  )}
                </button>
              )}
              <Link
                href='https://app.kulmipay.com'
                className='group flex items-center gap-1.5 px-5 py-2 text-base font-medium text-foreground/80 hover:text-brand transition-colors rounded-lg hover:bg-brand-50 dark:hover:bg-brand-900/20'
                id='cta-login'>
                Log In
                <HiArrowRight className='w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand' />
              </Link>
              <Link
                href='https://app.kulmipay.com/account/signup/'
                className='group flex items-center gap-1.5 px-5 py-2.5 text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-all duration-200 shadow-[0_2px_8px_rgba(245,110,15,0.3)] hover:shadow-[0_4px_16px_rgba(245,110,15,0.4)] hover:-translate-y-0.5'
                id='cta-signup'>
                Sign Up
                <HiArrowRight className='w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all' />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className='flex lg:hidden items-center gap-4'>
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className='w-8 h-8 flex items-center justify-center text-foreground hover:text-brand transition-colors cursor-pointer group outline-none'
                  aria-label='Toggle theme'>
                  {resolvedTheme === "dark" ? (
                    <HiOutlineSun
                      size={24}
                      className='group-hover:rotate-45 transition-transform'
                    />
                  ) : (
                    <HiOutlineMoon
                      size={24}
                      className='group-hover:-rotate-12 transition-transform'
                    />
                  )}
                </button>
              )}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className='w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer outline-none group'
                aria-label='Toggle menu'
                id='mobile-menu-toggle'>
                <span
                  className={`block h-0.5 transition-all duration-300 w-6 rounded-full group-hover:bg-brand ${getFirstLineClass()}`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 w-6 rounded-full group-hover:bg-brand ${getSecondLineClass()}`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 w-6 rounded-full group-hover:bg-brand ${getThirdLineClass()}`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Sliding Glassy Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 will-change-[opacity,visibility] flex flex-col ${
          mobileOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}>
        <div className='absolute inset-0 bg-background' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,110,15,0.08),transparent_50%)] pointer-events-none' />

        <div className='relative flex-1 overflow-y-auto w-full pt-24 pb-10 px-4 flex flex-col justify-start text-left shrink-0 h-full mt-safe'>
          <nav className='flex flex-col gap-6'>
            {navLinks.map((link) => (
              <div key={link.label} className='w-full shrink-0'>
                {link.children ? (
                  <div className='w-full text-left'>
                    <button
                      onClick={() =>
                        setDropdownOpen(
                          dropdownOpen === link.label ? null : link.label,
                        )
                      }
                      className='flex items-center gap-2 text-2xl font-bold text-foreground hover:text-brand transition-colors cursor-pointer group text-left'>
                      {link.label}
                      <HiChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          dropdownOpen === link.label
                            ? "rotate-180 text-brand"
                            : "text-foreground/40"
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        dropdownOpen === link.label
                          ? "grid-rows-[1fr] opacity-100 mt-5 mb-2"
                          : "grid-rows-[0fr] opacity-0"
                      }`}>
                      <div className='overflow-hidden flex flex-col gap-6 pl-4 border-l-2 border-border/50'>
                        <div className='flex flex-col gap-3'>
                          <h4 className='text-xs font-bold uppercase tracking-widest text-foreground/40 pb-1'>
                            Products
                          </h4>
                          {solutions.products.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className='group flex items-center gap-4'>
                              <div className='p-2 rounded-lg bg-foreground/5 dark:bg-white/5 text-foreground/70 group-hover:bg-brand group-hover:text-white transition-colors shrink-0'>
                                <item.icon size={20} />
                              </div>
                              <p className='flex-1 text-base font-semibold text-foreground/90 group-hover:text-brand transition-colors flex items-center gap-1.5'>
                                {item.label}
                                <HiArrowRight className='w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand' />
                              </p>
                            </Link>
                          ))}
                        </div>

                        <div className='flex flex-col gap-3 pt-2'>
                          <h4 className='text-xs font-bold uppercase tracking-widest text-foreground/40 pb-1'>
                            Integrations
                          </h4>
                          {solutions.cms.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className='group flex items-center gap-4'>
                              <div className='p-2 rounded-lg bg-foreground/5 dark:bg-white/5 text-foreground/70 group-hover:bg-brand group-hover:text-white transition-colors shrink-0'>
                                <item.icon size={20} />
                              </div>
                              <p className='text-base font-semibold text-foreground/90 group-hover:text-brand transition-colors flex items-center gap-1.5'>
                                {item.label}
                                <HiArrowRight className='w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand' />
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className='inline-flex items-center gap-2 text-2xl font-bold text-foreground hover:text-brand transition-colors group'>
                    {link.label}
                    <HiArrowRight className='w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand' />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className='mt-12 flex flex-col gap-4 max-w-sm shrink-0'>
            <Link
              href='https://app.kulmipay.com'
              onClick={() => setMobileOpen(false)}
              className='flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-foreground border-2 border-border rounded-xl hover:bg-foreground/5 transition-colors group'>
              Log In
              <HiArrowRight className='w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all' />
            </Link>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              onClick={() => setMobileOpen(false)}
              className='flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-bold text-white bg-brand rounded-xl hover:bg-brand-dark transition-all shadow-lg shadow-brand/25 group'>
              Sign Up
              <HiArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { FiTwitter, FiGithub } from "react-icons/fi";

const productLinks = [
  { label: "Business Account", href: "/business" },
  { label: "Accept Online Payments", href: "/accept-online-payments" },
  { label: "Business Payments", href: "/business-payments" },
  { label: "Split Payments", href: "/split-payments" },
  { label: "M-Pesa API", href: "/mpesa-api" },
  { label: "Developers API", href: "https://developers.kulmipay.com" },
];

const resourceLinks = [
  { label: "Chargebacks", href: "/chargebacks" },
  { label: "API Testing", href: "https://sandbox.kulmipay.com" },
  { label: "Exchange Rates", href: "/exchange" },
  { label: "Bank SWIFT Codes", href: "/swift-codes" },
  { label: "PayBills Codes", href: "/paybills" },
  { label: "Troubleshooting", href: "/troubleshooting" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Join Our Team", href: "/hiring" },
  { label: "Affiliates & Partners", href: "/referrals" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Security", href: "/security" },
];

export function Footer() {
  return (
    <footer
      className='relative bg-gray-50 dark:bg-[#0F0D0B] text-foreground dark:text-white overflow-hidden'
      id='site-footer'>
      {/* Gradient Top Edge */}
      <div className='absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent' />

      {/* Ambient Glow */}
      <div className='absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-75 bg-brand/3 dark:bg-brand/5 rounded-full blur-3xl pointer-events-none' />

      {/* Link Columns */}
      <div className='relative w-full px-6 md:px-12 py-6 md:py-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16'>
          {/* Product */}
          <div>
            <h3 className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5'>
              Product
            </h3>
            <ul className='space-y-3'>
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground hover:text-brand transition-colors duration-200'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5'>
              Resources
            </h3>
            <ul className='space-y-3'>
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground hover:text-brand transition-colors duration-200'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5'>
              Company
            </h3>
            <ul className='space-y-3'>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground hover:text-brand transition-colors duration-200'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='col-span-2 md:col-span-1'>
            <h3 className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5'>
              Contact
            </h3>
            <ul className='space-y-4'>
              <li>
                <a
                  href='mailto:onboarding@kulmipay.com'
                  className='flex items-center gap-2.5 text-sm text-muted-foreground hover:text-brand transition-colors duration-200 group'>
                  <HiOutlineEnvelope
                    size={15}
                    className='text-muted-foreground/50 group-hover:text-brand transition-colors'
                  />
                  onboarding@kulmipay.com
                </a>
              </li>
              <li>
                <a
                  href='tel:+254725101001'
                  className='flex items-center gap-2.5 text-sm text-muted-foreground hover:text-brand transition-colors duration-200 group'>
                  <HiOutlinePhone
                    size={15}
                    className='text-muted-foreground/50 group-hover:text-brand transition-colors'
                  />
                  +254 725 101 001
                </a>
              </li>
              <li className='pt-2'>
                <div className='flex items-center gap-3'>
                  <a
                    href='https://twitter.com/kulmipay'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 rounded-lg text-muted-foreground/50 hover:text-brand hover:bg-muted/50 dark:hover:bg-white/5 transition-all duration-200'
                    aria-label='Twitter'>
                    <FiTwitter size={18} />
                  </a>
                  <a
                    href='https://github.com/kulmipay'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 rounded-lg text-muted-foreground/50 hover:text-brand hover:bg-muted/50 dark:hover:bg-white/5 transition-all duration-200'
                    aria-label='GitHub'>
                    <FiGithub size={18} />
                  </a>
                </div>
              </li>
            </ul>

            {/* Logo */}
            <div className='mt-8'>
              <Image
                src='/logo.png'
                alt='Kulmi Pay'
                width={120}
                height={40}
                className='h-8 w-auto opacity-70 dark:opacity-40 dark:brightness-0 dark:invert'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-border dark:border-white/5'>
        <div className='w-full px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-xs text-muted-foreground/60'>
            &copy; {new Date().getFullYear()} Kulmi Pay. All rights reserved.
          </p>
          <div className='flex items-center gap-6'>
            <Link
              href='/privacy-policy'
              className='text-xs text-muted-foreground/60 hover:text-foreground transition-colors'>
              Privacy
            </Link>
            <Link
              href='/terms'
              className='text-xs text-muted-foreground/60 hover:text-foreground transition-colors'>
              Terms
            </Link>
            <Link
              href='/security'
              className='text-xs text-muted-foreground/60 hover:text-foreground transition-colors'>
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowRight, HiOutlineWifi } from "react-icons/hi2";

export function HeroSection() {
  return (
    <section className='relative h-screen overflow-hidden' id='hero-section'>
      {/* Background Layers */}
      <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />

      {/* Mesh gradient orbs */}
      <div className='absolute top-20 -right-40 w-175 h-175 rounded-full bg-brand/8 blur-[120px] pointer-events-none' />
      <div className='absolute -bottom-20 -left-40 w-125 h-125 rounded-full bg-brand-light/10 blur-[100px] pointer-events-none' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-brand/5 blur-[80px] pointer-events-none' />

      {/* Grid pattern */}
      <div
        className='absolute inset-0 opacity-[0.03] dark:opacity-[0.02]'
        style={{
          backgroundImage: `linear-gradient(rgba(245,110,15,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,110,15,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className='relative w-full h-full pt-18 pb-6 md:pb-0 px-6 md:px-12 flex flex-col-reverse md:flex-row items-center md:justify-between gap-3 md:gap-20'>
        {/* Text + CTAs */}
        <div className='shrink-0 md:flex-1 w-full text-center md:text-left zoom-in fade-in slide-in-from-bottom-4 duration-700'>
          {/* Headline */}
          <h1 className='text-3xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-3 md:mb-6'>
            Payment{" "}
            <span className='relative'>
              <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
                Infrastructure
              </span>
              <svg
                className='absolute -bottom-2 left-0 w-full'
                viewBox='0 0 300 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M2 8C50 3 100 2 150 5C200 8 250 4 298 7'
                  stroke='#F56E0F'
                  strokeWidth='3'
                  strokeLinecap='round'
                  className='opacity-30'
                />
              </svg>
            </span>
            <br />
            for African Businesses
          </h1>

          {/* Subheadline */}
          <p className='text-sm md:text-lg text-muted-foreground mb-5 md:mb-10 leading-relaxed'>
            Accept and send mobile money payments across Africa with simple APIs
            and built-in fraud protection.
          </p>

          {/* CTAs */}
          <div className='flex flex-row items-center justify-center md:justify-start gap-3 md:gap-4 mb-4'>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand border-2 border-brand rounded-xl hover:bg-brand-dark hover:border-brand-dark transition-colors duration-200'
              id='hero-cta-signup'>
              Get Started
              <HiOutlineArrowRight
                size={18}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-foreground dark:text-white border-2 border-border dark:border-white/20 rounded-xl hover:border-brand/30 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all duration-300'
              id='hero-cta-demo'>
              Request Demo
            </Link>
          </div>
        </div>

        {/* Artwork: Stacked glassy cards */}
        <style>{`
          .hero-card-1, .hero-card-2, .hero-card-3 {
            will-change: transform;
            transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .hero-card-3 {
            transform: rotate(12deg) translate(48px, 64px);
            animation: deal-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s backwards;
          }
          .hero-card-2 {
            transform: rotate(-6deg) translate(-24px, 16px);
            animation: deal-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.35s backwards;
          }
          .hero-card-1 {
            transform: rotate(3deg) translate(0, -48px);
            animation: deal-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.6s backwards;
          }
          @keyframes deal-in {
            from { opacity: 0; transform: rotate(0deg) translate(0, 100px) scale(0.8); }
          }
          .hero-cards:hover .hero-card-1 {
            transform: rotate(8deg) translate(20px, -70px) scale(1.04);
          }
          .hero-cards:hover .hero-card-2 {
            transform: rotate(-12deg) translate(-50px, 25px);
          }
          .hero-cards:hover .hero-card-3 {
            transform: rotate(18deg) translate(65px, 80px);
          }
        `}</style>
        <div className='hero-cards flex-1 min-h-0 w-full relative flex items-center justify-center'>
          <div className='relative w-[95vw] md:w-full h-full md:h-auto md:aspect-4/5 flex items-center justify-center'>
            {/* Background elements to enhance glass effect */}
            <div className='absolute inset-0 bg-brand/20 blur-[80px] rounded-full mix-blend-multiply dark:mix-blend-screen' />

            {/* Card 3 (Bottom) — Teal/emerald Mastercard */}
            <div className='hero-card-3 absolute w-4/5 md:w-3/4 aspect-[1.6/1] backdrop-blur-xl border border-emerald-400/20 shadow-2xl rounded-2xl flex flex-col justify-between p-4 md:p-5 bg-linear-to-br from-emerald-600/80 to-teal-800/80 dark:from-emerald-900/80 dark:to-teal-950/80'>
              <div className='flex items-center justify-between'>
                <div className='w-8 h-5 md:w-10 md:h-6 rounded bg-linear-to-br from-amber-200 to-amber-400 border border-amber-400/50 flex items-center justify-center gap-0.5'>
                  <div className='w-1 h-1 rounded-full bg-amber-600/40' />
                  <div className='w-1 h-1 rounded-full bg-amber-600/40' />
                </div>
                <HiOutlineWifi className='w-4 h-4 md:w-5 md:h-5 text-white/30 rotate-90' />
              </div>
              <div className='font-mono text-xs md:text-sm tracking-[0.2em] text-white/70'>
                5412 7534 9012 3456
              </div>
              <div className='flex items-end justify-between'>
                <div>
                  <div className='text-[8px] md:text-[9px] uppercase tracking-widest text-white/40'>
                    Card Holder
                  </div>
                  <div className='text-[10px] md:text-xs font-semibold tracking-wide text-white/80'>
                    AMINA HASSAN
                  </div>
                </div>
                <Image
                  src='/partners/mastercard.svg'
                  alt='Mastercard'
                  width={48}
                  height={30}
                  className='h-5 md:h-6 w-auto'
                />
              </div>
            </div>

            {/* Card 2 (Middle) — Deep blue Visa */}
            <div className='hero-card-2 absolute w-4/5 md:w-3/4 aspect-[1.6/1] backdrop-blur-xl border border-blue-400/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col justify-between p-4 md:p-5 bg-linear-to-br from-blue-700/80 to-indigo-900/80 dark:from-blue-900/80 dark:to-indigo-950/80'>
              <div className='flex items-center justify-between'>
                <Image
                  src='/favicon.png'
                  alt='KulmiPay'
                  width={20}
                  height={20}
                  className='w-5 h-5 md:w-6 md:h-6'
                />
                <div className='w-8 h-5 md:w-10 md:h-6 rounded bg-linear-to-br from-amber-200 to-amber-400 border border-amber-400/50 flex items-center justify-center gap-0.5'>
                  <div className='w-1 h-1 rounded-full bg-amber-600/40' />
                  <div className='w-1 h-1 rounded-full bg-amber-600/40' />
                </div>
                <HiOutlineWifi className='w-4 h-4 md:w-5 md:h-5 text-white/30 rotate-90' />
              </div>
              <div className='font-mono text-xs md:text-sm tracking-[0.2em] text-white/70'>
                4716 2389 0145 6782
              </div>
              <div className='flex items-end justify-between'>
                <div className='flex gap-4 md:gap-6'>
                  <div>
                    <div className='text-[8px] md:text-[9px] uppercase tracking-widest text-white/40'>
                      Card Holder
                    </div>
                    <div className='text-[10px] md:text-xs font-semibold tracking-wide text-white/80'>
                      KWAME ASANTE
                    </div>
                  </div>
                  <div>
                    <div className='text-[8px] md:text-[9px] uppercase tracking-widest text-white/40'>
                      Expires
                    </div>
                    <div className='text-[10px] md:text-xs font-semibold tracking-wide text-white/80'>
                      03/27
                    </div>
                  </div>
                </div>
                <Image
                  src='/partners/visa.svg'
                  alt='Visa'
                  width={48}
                  height={16}
                  className='h-4 md:h-5 w-auto brightness-0 invert opacity-80'
                />
              </div>
            </div>

            {/* Card 1 (Top) — Realistic credit card */}
            <div className='hero-card-1 absolute w-4/5 md:w-3/4 aspect-[1.6/1] bg-white/80 dark:bg-black/80 backdrop-blur-2xl border border-white/30 dark:border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_60px_-20px_rgba(245,110,15,0.2)] rounded-2xl z-10 flex flex-col justify-between p-5 md:p-6 bg-linear-to-br from-white/90 to-white/40 dark:from-black/90 dark:to-black/40'>
              {/* Top row: logo + chip + contactless */}
              <div className='flex items-center justify-between'>
                <Image
                  src='/favicon.png'
                  alt='KulmiPay'
                  width={24}
                  height={24}
                  className='w-6 h-6 md:w-7 md:h-7'
                />
                {/* EMV Chip */}
                <div className='w-9 h-6 md:w-11 md:h-7 rounded bg-linear-to-br from-amber-200 to-amber-400 dark:from-amber-300 dark:to-amber-500 border border-amber-400/50 flex items-center justify-center gap-0.5'>
                  <div className='w-1.5 h-1.5 rounded-full bg-amber-600/40' />
                  <div className='w-1.5 h-1.5 rounded-full bg-amber-600/40' />
                  <div className='w-1.5 h-1.5 rounded-full bg-amber-600/40' />
                </div>
                {/* Contactless icon */}
                <HiOutlineWifi className='w-5 h-5 md:w-6 md:h-6 text-foreground/30 rotate-90' />
              </div>

              {/* Card number */}
              <div className='font-mono text-sm md:text-base tracking-[0.25em] text-foreground/70'>
                4532 8901 2345 7829
              </div>

              {/* Bottom row: name, expiry, visa logo */}
              <div className='flex items-end justify-between'>
                <div className='flex gap-6 md:gap-8'>
                  <div>
                    <div className='text-[9px] md:text-[10px] uppercase tracking-widest text-foreground/40 mb-0.5'>
                      Card Holder
                    </div>
                    <div className='text-xs md:text-sm font-semibold tracking-wide text-foreground/80'>
                      JOHN DOE
                    </div>
                  </div>
                  <div>
                    <div className='text-[9px] md:text-[10px] uppercase tracking-widest text-foreground/40 mb-0.5'>
                      Expires
                    </div>
                    <div className='text-xs md:text-sm font-semibold tracking-wide text-foreground/80'>
                      09/28
                    </div>
                  </div>
                </div>
                <Image
                  src='/partners/visa.svg'
                  alt='Visa'
                  width={60}
                  height={20}
                  className='h-5 md:h-6 w-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

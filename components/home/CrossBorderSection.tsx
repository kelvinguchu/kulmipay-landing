import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const countries = [
  { name: "Kenya", flag: "🇰🇪", currency: "KES" },
  { name: "Nigeria", flag: "🇳🇬", currency: "NGN" },
  { name: "Ghana", flag: "🇬🇭", currency: "GHS" },
  { name: "Uganda", flag: "🇺🇬", currency: "UGX" },
  { name: "Tanzania", flag: "🇹🇿", currency: "TZS" },
  { name: "Cameroon", flag: "🇨🇲", currency: "XAF" },
  { name: "Ivory Coast", flag: "🇨🇮", currency: "XOF" },
  { name: "Burkina Faso", flag: "🇧🇫", currency: "XOF" },
];

export function CrossBorderSection() {
  return (
    <section
      className='relative py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B] overflow-hidden'
      id='cross-border-section'>
      {/* Orbit keyframes */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>

      <div className='relative w-full px-6 md:px-12'>
        <SectionHeading title='Cross-Border Payouts' />

        {/* Hub — mobile (scaled orbit) */}
        <div className='flex md:hidden justify-center mb-10'>
          <div className='relative w-72 h-72'>
            {/* Decorative rings */}
            <div className='absolute inset-5 rounded-full border border-dashed border-border dark:border-white/10' />
            <div className='absolute inset-16 rounded-full border border-dashed border-border/50 dark:border-white/5' />

            {/* Center hub */}
            <div className='absolute inset-0 flex items-center justify-center z-10'>
              <div className='w-16 h-16 rounded-full bg-brand flex items-center justify-center shadow-[0_0_40px_rgba(245,110,15,0.15)]'>
                <Image
                  src='/favicon.png'
                  alt='Kulmi Pay'
                  width={28}
                  height={28}
                />
              </div>
            </div>

            {/* Rotating orbit */}
            <div
              className='absolute inset-0'
              style={{ animation: "orbit 60s linear infinite" }}>
              {countries.map((c, i) => {
                const angle = (360 / countries.length) * i - 90;
                const rad = (angle * Math.PI) / 180;
                const x = 115 * Math.cos(rad);
                const y = 115 * Math.sin(rad);
                return (
                  <div
                    key={c.name}
                    className='absolute flex flex-col items-center gap-0.5 cursor-default'
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                      width: 48,
                      animation: "counter-orbit 60s linear infinite",
                    }}>
                    <div className='w-10 h-10 rounded-full bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 flex items-center justify-center'>
                      <span className='text-lg'>{c.flag}</span>
                    </div>
                    <span className='text-[8px] font-semibold text-center leading-tight'>
                      {c.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hub — desktop */}
        <div className='hidden md:flex justify-center mb-16'>
          <div className='relative w-130 h-130'>
            {/* Decorative rings */}
            <div className='absolute inset-7.5 rounded-full border border-dashed border-border dark:border-white/10' />
            <div className='absolute inset-25 rounded-full border border-dashed border-border/50 dark:border-white/5' />

            {/* Center hub — stays still */}
            <div className='absolute inset-0 flex items-center justify-center z-10'>
              <div className='w-24 h-24 rounded-full bg-brand flex items-center justify-center shadow-[0_0_60px_rgba(245,110,15,0.2)]'>
                <Image
                  src='/favicon.png'
                  alt='Kulmi Pay'
                  width={44}
                  height={44}
                />
              </div>
            </div>

            {/* Rotating orbit ring — spins the whole container */}
            <div
              className='absolute inset-0'
              style={{ animation: "orbit 60s linear infinite" }}>
              {countries.map((c, i) => {
                const angle = (360 / countries.length) * i - 90;
                const rad = (angle * Math.PI) / 180;
                const x = 210 * Math.cos(rad);
                const y = 210 * Math.sin(rad);
                return (
                  <div
                    key={c.name}
                    className='absolute flex flex-col items-center gap-1.5 cursor-default'
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 36px)`,
                      width: 80,
                      animation: "counter-orbit 60s linear infinite",
                    }}>
                    <div className='w-14 h-14 rounded-full bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 flex items-center justify-center hover:border-brand/30 hover:scale-110 transition-all duration-200'>
                      <span className='text-2xl'>{c.flag}</span>
                    </div>
                    <span className='text-[11px] font-semibold text-center leading-tight'>
                      {c.name}
                    </span>
                    <span className='text-[9px] font-mono text-muted-foreground'>
                      {c.currency}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats + CTA centered */}
        <div className='flex flex-col items-center gap-8'>
          <div className='flex gap-6 md:gap-10'>
            <div className='text-center'>
              <p className='text-xl md:text-2xl font-bold font-mono'>8+</p>
              <p className='text-xs text-muted-foreground'>Markets</p>
            </div>
            <div className='text-center'>
              <p className='text-xl md:text-2xl font-bold font-mono'>&lt; 3s</p>
              <p className='text-xs text-muted-foreground'>Settlement</p>
            </div>
            <div className='text-center'>
              <p className='text-xl md:text-2xl font-bold font-mono text-brand'>
                0
              </p>
              <p className='text-xs text-muted-foreground'>Setup fees</p>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <Link
              href='/cross-border'
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
    </section>
  );
}

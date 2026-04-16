import Link from "next/link";
import { HiOutlineArrowRight, HiOutlineGlobeAlt } from "react-icons/hi2";

const corridors = [
  { from: "KES", to: "TZS", rate: "17.82", speed: "Same day", flag: "🇹🇿" },
  { from: "KES", to: "UGX", rate: "28.45", speed: "Same day", flag: "🇺🇬" },
  { from: "KES", to: "GHS", rate: "0.094", speed: "Same day", flag: "🇬🇭" },
  { from: "KES", to: "NGN", rate: "11.42", speed: "1-2 hrs", flag: "🇳🇬" },
  { from: "KES", to: "XAF", rate: "4.67", speed: "Same day", flag: "🇨🇲" },
  { from: "USD", to: "KES", rate: "129.50", speed: "Instant", flag: "🇰🇪" },
];

export function CrossBorderHero() {
  return (
    <section className='relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100/50 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
      <div className='absolute top-20 -left-20 w-100 h-100 rounded-full bg-brand/8 blur-[100px] pointer-events-none' />
      <div className='absolute -bottom-10 right-1/4 w-75 h-75 rounded-full bg-brand-light/10 blur-[80px] pointer-events-none' />
      <div
        className='absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage: `linear-gradient(rgba(245,110,15,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,110,15,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className='relative w-full px-6 md:px-12 pt-28 pb-10 md:pt-36 md:pb-16 flex flex-col md:flex-row items-center gap-10 md:gap-16'>
        {/* FX Rate Board — left side */}
        <div className='w-full md:flex-1 order-2 md:order-1'>
          <div className='rounded-xl border border-border dark:border-white/10 overflow-hidden bg-white/70 dark:bg-white/3 backdrop-blur-sm'>
            {/* Board header */}
            <div className='flex items-center justify-between px-4 py-2.5 bg-muted/50 dark:bg-white/3 border-b border-border dark:border-white/10'>
              <div className='flex items-center gap-2'>
                <HiOutlineGlobeAlt size={14} className='text-brand' />
                <span className='text-xs font-semibold text-foreground uppercase tracking-wider'>
                  Live Corridors
                </span>
              </div>
              <span className='inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400'>
                <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse' />Updated
              </span>
            </div>
            {/* Column labels */}
            <div className='hidden md:grid grid-cols-5 gap-0 px-4 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50 dark:border-white/5'>
              <span>From</span>
              <span>To</span>
              <span>Rate</span>
              <span>Speed</span>
              <span />
            </div>
            {/* Rows */}
            <div className='divide-y divide-border/50 dark:divide-white/5'>
              {corridors.map((c) => (
                <div
                  key={`${c.from}-${c.to}`}
                  className='grid grid-cols-3 md:grid-cols-5 gap-0 px-4 py-2.5 text-sm items-center hover:bg-muted/30 dark:hover:bg-white/2 transition-colors'>
                  <span className='font-mono font-semibold text-foreground'>
                    {c.from}
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <span>{c.flag}</span>
                    <span className='font-mono font-medium text-foreground'>
                      {c.to}
                    </span>
                  </span>
                  <span className='font-mono text-xs text-muted-foreground hidden md:block'>
                    {c.rate}
                  </span>
                  <span className='text-xs text-emerald-600 dark:text-emerald-400 hidden md:block'>
                    {c.speed}
                  </span>
                  <span className='text-right font-mono text-xs text-brand hidden md:block'>
                    {"Send →"}
                  </span>
                </div>
              ))}
            </div>
            {/* Footer */}
            <div className='px-4 py-2 bg-muted/30 dark:bg-white/2 border-t border-border/50 dark:border-white/5 text-[10px] text-muted-foreground'>
              {"7+ markets · Rates updated in real time"}
            </div>
          </div>
        </div>

        {/* Text — right side */}
        <div className='flex-1 min-w-0 order-1 md:order-2'>
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4'>
            One API,{" "}
            <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
              {"7+ African Markets"}
            </span>
          </h1>
          <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg'>
            Scale across the continent with a single integration. KulmiPay
            connects you to Tanzania, Uganda, Ghana, Nigeria, Cameroon, Burkina
            Faso, and Ivory Coast — with same-day delivery and competitive FX
            rates.
          </p>

          {/* Country flags strip */}
          <div className='flex items-center gap-3 mb-6 text-2xl'>
            {["🇰🇪", "🇹🇿", "🇺🇬", "🇬🇭", "🇳🇬", "🇨🇲", "🇧🇫", "🇨🇮"].map((flag) => (
              <span
                key={flag}
                className='w-9 h-9 md:w-10 md:h-10 rounded-lg border border-border dark:border-white/10 bg-white/60 dark:bg-white/5 flex items-center justify-center text-lg'>
                {flag}
              </span>
            ))}
          </div>

          <div className='flex flex-row items-center gap-3'>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors duration-200'>
              Start Sending
              <HiOutlineArrowRight
                size={18}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>
            <Link
              href='/pricing'
              className='px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold border border-border dark:border-white/10 rounded-xl text-foreground hover:bg-muted/50 dark:hover:bg-white/5 transition-colors duration-200'>
              View Corridors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

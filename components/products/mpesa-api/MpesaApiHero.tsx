import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

export function MpesaApiHero() {
  return (
    <section className='relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100/50 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 w-120 h-80 rounded-full bg-brand/6 blur-[120px] pointer-events-none' />
      <div className='absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-brand-light/8 blur-[80px] pointer-events-none' />
      <div
        className='absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage: `linear-gradient(rgba(245,110,15,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,110,15,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className='relative w-full px-6 md:px-12 pt-28 pb-6 md:pt-36 md:pb-10'>
        {/* Centered text */}
        <div className='text-center max-w-2xl mx-auto mb-8'>
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4'>
            M-Pesa Integration{" "}
            <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
              Made Simple
            </span>
          </h1>
          <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-6'>
            Forget wrestling with Safaricom{"'"}s complex authentication flows.
            KulmiPay wraps M-Pesa{"'"}s entire feature set into clean,
            well-documented APIs with SDKs in the languages you actually use.
          </p>
          <div className='flex flex-row items-center justify-center gap-3'>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors duration-200'>
              Get API Keys
              <HiOutlineArrowRight
                size={18}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>
            <Link
              href='https://developers.kulmipay.com'
              className='px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold border border-border dark:border-white/10 rounded-xl text-foreground hover:bg-muted/50 dark:hover:bg-white/5 transition-colors duration-200'>
              Read Docs
            </Link>
          </div>
        </div>

        {/* Request / Response panels */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto'>
          {/* Request */}
          <div className='rounded-xl border border-border dark:border-white/10 overflow-hidden'>
            <div className='flex items-center gap-2 px-4 py-2 bg-muted/50 dark:bg-white/3 border-b border-border dark:border-white/10'>
              <span className='text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400'>
                POST
              </span>
              <span className='text-xs font-mono text-muted-foreground'>
                /api/v1/mpesa/stk-push
              </span>
            </div>
            <div className='bg-zinc-950 text-zinc-300 p-4 font-mono text-xs leading-relaxed'>
              <div className='text-zinc-500'>{"// Trigger STK Push"}</div>
              <div>{"{"}&nbsp;</div>
              <div className='pl-4'>
                <span className='text-brand'>{'"phone"'}</span>
                {": "}
                <span className='text-emerald-400'>{'"254722000000"'}</span>
                {","}
              </div>
              <div className='pl-4'>
                <span className='text-brand'>{'"amount"'}</span>
                {": "}
                <span className='text-blue-400'>{"1500"}</span>
                {","}
              </div>
              <div className='pl-4'>
                <span className='text-brand'>{'"reference"'}</span>
                {": "}
                <span className='text-emerald-400'>{'"INV-2024-001"'}</span>
              </div>
              <div>{"}"}</div>
            </div>
          </div>

          {/* Response */}
          <div className='rounded-xl border border-border dark:border-white/10 overflow-hidden'>
            <div className='flex items-center gap-2 px-4 py-2 bg-muted/50 dark:bg-white/3 border-b border-border dark:border-white/10'>
              <span className='text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400'>
                200
              </span>
              <span className='text-xs font-mono text-muted-foreground'>
                Response
              </span>
            </div>
            <div className='bg-zinc-950 text-zinc-300 p-4 font-mono text-xs leading-relaxed'>
              <div className='text-zinc-500'>{"// Payment initiated"}</div>
              <div>{"{"}&nbsp;</div>
              <div className='pl-4'>
                <span className='text-brand'>{'"status"'}</span>
                {": "}
                <span className='text-emerald-400'>{'"pending"'}</span>
                {","}
              </div>
              <div className='pl-4'>
                <span className='text-brand'>{'"checkout_id"'}</span>
                {": "}
                <span className='text-emerald-400'>{'"chk_9f3a..."'}</span>
                {","}
              </div>
              <div className='pl-4'>
                <span className='text-brand'>{'"message"'}</span>
                {": "}
                <span className='text-emerald-400'>{'"STK push sent"'}</span>
              </div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

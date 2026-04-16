import Link from "next/link";
import {
  HiOutlineArrowRight,
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineDocumentCheck,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const sdks = [
  {
    lang: "Python",
    color: "border-blue-500/30 bg-blue-500/5",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    install: "pip install kulmipay",
  },
  {
    lang: "JavaScript",
    color: "border-amber-500/30 bg-amber-500/5",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    install: "npm install kulmipay",
  },
  {
    lang: "PHP",
    color: "border-purple-500/30 bg-purple-500/5",
    badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    install: "composer require kulmipay/sdk",
  },
];

export function MpesaApiContent() {
  return (
    <>
      {/* Collect vs Send — two tall comparison cards */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Two Flows' />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {/* Collect card */}
            <div className='rounded-xl border border-emerald-500/20 bg-emerald-500/3 dark:bg-emerald-500/3 p-5 md:p-6'>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-4'>
                Collect
              </div>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                STK Push
              </h3>
              <p className='text-sm text-muted-foreground mb-4 leading-relaxed'>
                Send a payment prompt to your customer{"'"}s phone with one API
                call. They confirm with their PIN — done.
              </p>
              <ul className='space-y-2'>
                {[
                  "Instant phone prompt via M-Pesa Express",
                  "Webhook confirmations for success & failure",
                  "Built-in retry logic for timed-out attempts",
                  "Works with any Safaricom M-Pesa number",
                ].map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-2 text-xs text-muted-foreground'>
                    <span className='w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Send card */}
            <div className='rounded-xl border border-brand/20 bg-brand/3 dark:bg-brand/3 p-5 md:p-6'>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand/10 text-brand text-[10px] font-semibold uppercase tracking-wider mb-4'>
                Send
              </div>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Disbursements
              </h3>
              <p className='text-sm text-muted-foreground mb-4 leading-relaxed'>
                Move money from your KulmiPay wallet to any M-Pesa number, bank
                account, or paybill — individually or in batches of 5,000.
              </p>
              <ul className='space-y-2'>
                {[
                  "Send to M-Pesa wallets, banks & paybills",
                  "Batch up to 5,000 in a single API call",
                  "Auto-retry with reconciliation reports",
                  "Real-time delivery confirmations via webhooks",
                ].map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-2 text-xs text-muted-foreground'>
                    <span className='w-1 h-1 rounded-full bg-brand mt-1.5 shrink-0' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs — horizontal cards with install commands */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Pick Your SDK' />
          <p className='text-sm text-muted-foreground mb-4 max-w-lg'>
            Full-featured SDKs with sensible defaults. No OAuth headaches, no
            certificate juggling, no XML parsing.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-4'>
            {sdks.map((sdk) => (
              <div
                key={sdk.lang}
                className={`rounded-xl border ${sdk.color} p-4`}>
                <span
                  className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${sdk.badge} mb-3`}>
                  {sdk.lang}
                </span>
                <div className='bg-zinc-950 rounded-lg px-3 py-2 font-mono text-xs text-zinc-300'>
                  <span className='text-zinc-500'>$ </span>
                  {sdk.install}
                </div>
              </div>
            ))}
          </div>
          <div className='flex items-center gap-3 text-xs text-muted-foreground'>
            <span>
              {"Working in Go, Ruby, or something else? Our "}
              <Link
                href='https://developers.kulmipay.com'
                className='text-brand hover:underline'>
                REST API
              </Link>
              {" plays nice with any HTTP client."}
            </span>
          </div>
        </div>
      </section>

      {/* Sandbox — terminal mockup */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Sandbox' />
          <p className='text-sm text-muted-foreground mb-4 max-w-lg'>
            Grab test keys instantly and build against our sandbox — a complete
            mirror of production. Simulate failures, validate webhooks, test
            edge cases.
          </p>

          {/* Terminal mockup */}
          <div className='rounded-xl border border-border dark:border-white/10 overflow-hidden mb-4'>
            {/* Terminal bar */}
            <div className='flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border-b border-white/5'>
              <span className='w-2.5 h-2.5 rounded-full bg-red-500/70' />
              <span className='w-2.5 h-2.5 rounded-full bg-amber-500/70' />
              <span className='w-2.5 h-2.5 rounded-full bg-emerald-500/70' />
              <span className='ml-3 text-[10px] font-mono text-zinc-500'>
                terminal — kulmipay sandbox
              </span>
            </div>
            <div className='bg-zinc-950 p-4 font-mono text-xs leading-loose text-zinc-300 overflow-x-auto'>
              <div>
                <span className='text-emerald-400'>$ </span>
                <span className='text-zinc-100'>
                  curl -X POST
                  https://sandbox.kulmipay.com/api/v1/mpesa/stk-push \
                </span>
              </div>
              <div className='pl-4 text-zinc-100'>
                {"-H "}
                <span className='text-brand'>
                  {'"Authorization: Bearer test_sk_..."'}
                </span>
                {" \\"}
              </div>
              <div className='pl-4 text-zinc-100'>
                {"-d "}
                <span className='text-emerald-400'>
                  {'\'{"phone":"254722000000","amount":100}\''}
                </span>
              </div>
              <div className='mt-2 text-zinc-500'>{"// → 200 OK"}</div>
              <div className='text-zinc-400'>{"{"}</div>
              <div className='pl-4'>
                <span className='text-brand'>{'"status"'}</span>
                {": "}
                <span className='text-emerald-400'>{'"pending"'}</span>
                {","}
              </div>
              <div className='pl-4'>
                <span className='text-brand'>{'"invoice_id"'}</span>
                {": "}
                <span className='text-emerald-400'>{'"test_inv_abc123"'}</span>
              </div>
              <div className='text-zinc-400'>{"}"}</div>
            </div>
          </div>

          {/* 3 capability tiles */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {[
              {
                title: "Production Mirror",
                desc: "Sandbox behaves exactly like production. Test edge cases and simulate failures.",
              },
              {
                title: "Detailed Docs",
                desc: "Step-by-step guides for every payment flow. Copy-paste code samples that just work.",
              },
              {
                title: "Dev Support",
                desc: "Stuck? Talk directly to an engineer, not a chatbot. Available 24/7 during integration.",
              },
            ].map((tile) => (
              <div
                key={tile.title}
                className='rounded-xl border border-border dark:border-white/10 p-4 bg-white dark:bg-white/2'>
                <h3 className='text-sm font-semibold text-foreground mb-1'>
                  {tile.title}
                </h3>
                <p className='text-xs text-muted-foreground leading-relaxed'>
                  {tile.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security strip */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Secure by Design' />
          <div className='flex flex-wrap gap-3 mb-4'>
            {[
              {
                icon: HiOutlineShieldCheck,
                label: "PCI-DSS Compliant",
                color: "text-emerald-600 dark:text-emerald-400",
              },
              {
                icon: HiOutlineLockClosed,
                label: "TLS Encryption",
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                icon: HiOutlineDocumentCheck,
                label: "Kenya Regulated",
                color: "text-amber-600 dark:text-amber-400",
              },
            ].map((badge) => (
              <span
                key={badge.label}
                className='inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border dark:border-white/10 bg-white dark:bg-white/3 text-xs font-medium text-foreground'>
                <badge.icon size={14} className={badge.color} />
                {badge.label}
              </span>
            ))}
          </div>
          <p className='text-sm text-muted-foreground max-w-xl leading-relaxed'>
            Every API call is authenticated, encrypted, and logged. PCI-DSS
            compliant infrastructure with periodic third-party audits and full
            compliance with PSD2 protocols and Kenyan payment regulations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <div className='rounded-xl border border-border dark:border-white/10 bg-linear-to-br from-brand-50 to-white dark:from-brand/5 dark:to-[#0A0A0B] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <div>
              <h3 className='text-lg md:text-xl font-bold text-foreground mb-1'>
                Start building with M-Pesa
              </h3>
              <p className='text-sm text-muted-foreground'>
                Get test API keys and ship your first integration today.
              </p>
            </div>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors duration-200 shrink-0'>
              Get API Keys
              <HiOutlineArrowRight
                size={18}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

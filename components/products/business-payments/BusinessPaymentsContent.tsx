import Link from "next/link";
import {
  HiOutlineDocumentArrowUp,
  HiOutlineEye,
  HiOutlineCheckCircle,
  HiOutlineCodeBracket,
  HiOutlineArrowPath,
  HiOutlineCog6Tooth,
  HiOutlineDocumentChartBar,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const spreadsheetRows = [
  {
    name: "Amina Hassan",
    account: "0722****12",
    channel: "M-Pesa",
    amount: "KES 45,000",
    status: "Sent",
  },
  {
    name: "Brock Kelly",
    account: "0100****89",
    channel: "Bank",
    amount: "KES 62,000",
    status: "Sent",
  },
  {
    name: "Cindy Wanjiku",
    account: "0733****56",
    channel: "M-Pesa",
    amount: "KES 28,500",
    status: "Sent",
  },
  {
    name: "David Ochieng",
    account: "5200****34",
    channel: "PayBill",
    amount: "KES 12,400",
    status: "Processing",
  },
];

export function BusinessPaymentsContent() {
  return (
    <>
      {/* Spreadsheet upload mockup */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Upload & Pay' />
          <p className='text-sm text-muted-foreground mb-4 max-w-lg'>
            Drop in an Excel file with recipients and amounts. We validate
            everything, then disburse in parallel.
          </p>

          {/* Table mockup */}
          <div className='rounded-xl border border-border dark:border-white/10 overflow-hidden'>
            {/* Table header */}
            <div className='hidden md:grid grid-cols-5 gap-0 bg-muted/50 dark:bg-white/3 text-xs font-semibold text-muted-foreground uppercase tracking-wider'>
              <div className='px-4 py-2.5'>Recipient</div>
              <div className='px-4 py-2.5'>Account</div>
              <div className='px-4 py-2.5'>Channel</div>
              <div className='px-4 py-2.5'>Amount</div>
              <div className='px-4 py-2.5'>Status</div>
            </div>
            {/* Rows */}
            <div className='divide-y divide-border dark:divide-white/5'>
              {spreadsheetRows.map((row) => (
                <div
                  key={row.name}
                  className='grid grid-cols-2 md:grid-cols-5 gap-0 text-sm'>
                  <div className='px-4 py-3 font-medium text-foreground'>
                    {row.name}
                  </div>
                  <div className='px-4 py-3 font-mono text-xs text-muted-foreground hidden md:block'>
                    {row.account}
                  </div>
                  <div className='px-4 py-3 text-muted-foreground hidden md:block'>
                    {row.channel}
                  </div>
                  <div className='px-4 py-3 font-mono font-medium text-foreground'>
                    {row.amount}
                  </div>
                  <div className='px-4 py-3 hidden md:block'>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-md ${
                        row.status === "Sent"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "bg-brand/10 text-brand"
                      }`}>
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Footer */}
            <div className='px-4 py-2.5 bg-muted/30 dark:bg-white/2 flex items-center justify-between text-xs'>
              <span className='text-muted-foreground'>
                4 recipients · 3 sent · 1 processing
              </span>
              <span className='font-mono font-semibold text-foreground'>
                Total: KES 147,900
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Process pipeline — horizontal steps, not cards */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='How It Works' />
          <div className='flex flex-col md:flex-row items-stretch gap-0'>
            {[
              {
                icon: HiOutlineDocumentArrowUp,
                title: "Upload",
                desc: "Excel file or add recipients manually",
                color: "border-blue-500/30 bg-blue-500/5",
                iconColor: "text-blue-600 dark:text-blue-400",
              },
              {
                icon: HiOutlineEye,
                title: "Review",
                desc: "Validate amounts, catch duplicates",
                color: "border-brand/30 bg-brand/5",
                iconColor: "text-brand",
              },
              {
                icon: HiOutlineCheckCircle,
                title: "Authorize",
                desc: "One click to approve the batch",
                color: "border-amber-500/30 bg-amber-500/5",
                iconColor: "text-amber-600 dark:text-amber-400",
              },
              {
                icon: HiOutlineArrowPath,
                title: "Deliver",
                desc: "Parallel dispatch, auto-retry failures",
                color: "border-emerald-500/30 bg-emerald-500/5",
                iconColor: "text-emerald-600 dark:text-emerald-400",
              },
            ].map((step, idx, arr) => (
              <div key={step.title} className='flex-1 flex items-stretch'>
                <div
                  className={`flex-1 border ${step.color} rounded-xl p-4 flex flex-col items-center text-center`}>
                  <step.icon size={22} className={`${step.iconColor} mb-2`} />
                  <h3 className='text-sm font-semibold text-foreground mb-0.5'>
                    {step.title}
                  </h3>
                  <p className='text-xs text-muted-foreground'>{step.desc}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className='hidden md:flex items-center px-1.5'>
                    <div className='w-4 h-px bg-border dark:bg-white/15' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {[
              { value: "5,000", label: "Max per batch" },
              { value: "<2 min", label: "Batch completion" },
              { value: "99.8%", label: "Success rate" },
              { value: "24/7", label: "Availability" },
            ].map((stat) => (
              <div
                key={stat.label}
                className='py-4 text-center border-l-2 first:border-l-0 border-border dark:border-white/10'>
                <p className='text-2xl md:text-3xl font-bold font-mono text-foreground'>
                  {stat.value}
                </p>
                <p className='text-xs text-muted-foreground mt-1'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API — full width code block with features below */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Payments API' />

          {/* Full-width code block */}
          <div className='rounded-xl border border-border dark:border-white/10 bg-zinc-950 text-zinc-300 p-5 font-mono text-xs leading-relaxed overflow-x-auto mb-6'>
            <div className='text-zinc-500'>
              {"// Bulk payout with the KulmiPay SDK"}
            </div>
            <div>
              <span className='text-blue-400'>const</span> {"KulmiPay = "}
              <span className='text-blue-400'>require</span>
              {"("}
              <span className='text-amber-300'>&quot;kulmipay&quot;</span>
              {");"}
            </div>
            <div>
              <span className='text-blue-400'>const</span> {"client = "}
              <span className='text-blue-400'>new</span>
              {" KulmiPay("}
              <span className='text-amber-300'>&quot;YOUR_API_KEY&quot;</span>
              {");"}
            </div>
            <div className='h-2' />
            <div>
              <span className='text-blue-400'>const</span> {"batch = "}
              <span className='text-blue-400'>await</span>
              {" client.payouts.create({"}
            </div>
            <div className='pl-4'>
              {"currency: "}
              <span className='text-amber-300'>&quot;KES&quot;</span>
              {","}
            </div>
            <div className='pl-4'>{"transactions: ["}</div>
            <div className='pl-8'>
              {"{ name: "}
              <span className='text-amber-300'>&quot;Amina&quot;</span>
              {", account: "}
              <span className='text-amber-300'>&quot;0722000012&quot;</span>
              {", amount: "}
              <span className='text-amber-300'>45000</span>
              {", provider: "}
              <span className='text-amber-300'>&quot;MPESA&quot;</span>
              {" },"}
            </div>
            <div className='pl-8'>
              {"{ name: "}
              <span className='text-amber-300'>&quot;Brock&quot;</span>
              {", account: "}
              <span className='text-amber-300'>&quot;0100000089&quot;</span>
              {", amount: "}
              <span className='text-amber-300'>62000</span>
              {", provider: "}
              <span className='text-amber-300'>&quot;BANK&quot;</span>
              {" },"}
            </div>
            <div className='pl-4'>{"],"}</div>
            <div className='pl-4'>
              {"callback_url: "}
              <span className='text-amber-300'>
                &quot;https://you.com/webhook&quot;
              </span>
            </div>
            <div>{"});"}</div>
            <div className='h-2' />
            <div className='text-zinc-500'>
              {"// batch.id → track status, get reports"}
            </div>
          </div>

          {/* API capabilities as inline list */}
          <div className='flex flex-col md:flex-row gap-6'>
            {[
              {
                icon: HiOutlineCodeBracket,
                title: "Status Tracking",
                desc: "Poll or receive webhooks for every individual payment in a batch.",
              },
              {
                icon: HiOutlineCog6Tooth,
                title: "Webhook Events",
                desc: "Get notified on completion, failure, or partial delivery instantly.",
              },
              {
                icon: HiOutlineDocumentChartBar,
                title: "Reports API",
                desc: "Download CSV/PDF reconciliation reports programmatically.",
              },
            ].map((item) => (
              <div key={item.title} className='flex-1 flex items-start gap-3'>
                <item.icon size={18} className='shrink-0 text-brand mt-0.5' />
                <div>
                  <h3 className='text-sm font-semibold text-foreground'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-muted-foreground'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href='https://developers.kulmipay.com'
            className='inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark transition-colors mt-4'>
            Full API reference
            <HiOutlineArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12 text-center'>
          <h2 className='text-2xl md:text-4xl font-bold text-foreground mb-3 tracking-tight'>
            Simplify Your Disbursements
          </h2>
          <p className='text-base text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed'>
            Stop processing payments one by one. Upload a spreadsheet and pay
            thousands in minutes.
          </p>
          <div className='flex flex-row items-center justify-center gap-3'>
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
              className='inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-foreground border-2 border-border rounded-xl hover:border-brand/30 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all duration-300'>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

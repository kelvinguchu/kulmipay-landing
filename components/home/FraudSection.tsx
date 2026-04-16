import Link from "next/link";
import {
  HiOutlineShieldCheck,
  HiOutlineShieldExclamation,
  HiOutlineSignal,
  HiOutlineCpuChip,
  HiOutlineArrowTrendingDown,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    icon: HiOutlineShieldCheck,
    title: "5-layer verification",
  },
  {
    icon: HiOutlineSignal,
    title: "Real-time risk scoring",
  },
  {
    icon: HiOutlineShieldExclamation,
    title: "Auto suspicious blocking",
  },
  {
    icon: HiOutlineCpuChip,
    title: "ML fraud detection",
  },
  {
    icon: HiOutlineArrowTrendingDown,
    title: "90% chargeback reduction",
  },
];

const transactions = [
  {
    id: "TXN-4821",
    name: "John M.",
    amount: "KES 12,400",
    method: "M-Pesa",
    score: 12,
    status: "approved" as const,
  },
  {
    id: "TXN-4822",
    name: "Sarah K.",
    amount: "KES 85,000",
    method: "Card",
    score: 87,
    status: "blocked" as const,
  },
  {
    id: "TXN-4823",
    name: "Ali H.",
    amount: "KES 3,200",
    method: "M-Pesa",
    score: 5,
    status: "approved" as const,
  },
  {
    id: "TXN-4824",
    name: "Grace W.",
    amount: "KES 47,600",
    method: "Card",
    score: 64,
    status: "review" as const,
  },
];

const statusStyles = {
  approved:
    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  blocked: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  review:
    "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
};

const statusLabels = {
  approved: "Approved",
  blocked: "Blocked",
  review: "Review",
};

function getScoreColor(score: number) {
  if (score < 30) return "bg-emerald-500";
  if (score < 60) return "bg-amber-500";
  return "bg-red-500";
}

function ScoreBar({ score }: Readonly<{ score: number }>) {
  const color = getScoreColor(score);
  return (
    <div className='flex items-center gap-2 w-20'>
      <div className='flex-1 h-1.5 rounded-full bg-muted dark:bg-white/10 overflow-hidden'>
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className='text-[10px] font-mono text-muted-foreground w-5 text-right'>
        {score}
      </span>
    </div>
  );
}

export function FraudSection() {
  return (
    <section
      className='relative py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B] overflow-hidden'
      id='fraud-section'>
      <div className='relative w-full px-6 md:px-12'>
        <SectionHeading title='Fraud Protection' />

        <div className='grid md:grid-cols-2 gap-10 md:gap-16 items-stretch'>
          {/* Left — Transaction Monitor Mock UI */}
          <div className='rounded-2xl border border-border dark:border-white/5 bg-muted/30 dark:bg-white/2 overflow-hidden flex flex-col'>
            {/* Monitor header */}
            <div className='flex items-center justify-between px-5 py-3 border-b border-border dark:border-white/5'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
                <span className='text-xs font-semibold text-foreground/70'>
                  Live Transaction Monitor
                </span>
              </div>
              <span className='text-[10px] font-mono text-muted-foreground'>
                4 transactions
              </span>
            </div>

            {/* Column headers */}
            <div className='grid grid-cols-[1fr_auto_auto] md:grid-cols-[1fr_auto_auto_auto] gap-2 md:gap-3 px-4 md:px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border dark:border-white/5'>
              <span>Transaction</span>
              <span className='text-right'>Amount</span>
              <span className='hidden md:block text-right'>Risk</span>
              <span className='text-right'>Status</span>
            </div>

            {/* Transaction rows */}
            <div className='flex-1'>
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className='grid grid-cols-[1fr_auto_auto] md:grid-cols-[1fr_auto_auto_auto] gap-2 md:gap-3 items-center px-4 md:px-5 py-3 border-b border-border/50 dark:border-white/3 last:border-0 hover:bg-muted/50 dark:hover:bg-white/2 transition-colors'>
                  <div className='min-w-0'>
                    <p className='text-sm font-medium truncate'>{tx.name}</p>
                    <p className='text-[10px] text-muted-foreground font-mono'>
                      {tx.id} · {tx.method}
                    </p>
                  </div>
                  <span className='text-xs md:text-sm font-mono font-medium text-right'>
                    {tx.amount}
                  </span>
                  <div className='hidden md:flex'>
                    <ScoreBar score={tx.score} />
                  </div>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border text-right ${statusStyles[tx.status]}`}>
                    {statusLabels[tx.status]}
                  </span>
                </div>
              ))}
            </div>

            {/* Monitor footer */}
            <div className='flex items-center justify-between px-5 py-3 border-t border-border dark:border-white/5 bg-muted/20 dark:bg-white/1'>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1.5'>
                  <div className='w-1.5 h-1.5 rounded-full bg-emerald-500' />
                  <span className='text-[10px] text-muted-foreground'>
                    2 approved
                  </span>
                </div>
                <div className='flex items-center gap-1.5'>
                  <div className='w-1.5 h-1.5 rounded-full bg-red-500' />
                  <span className='text-[10px] text-muted-foreground'>
                    1 blocked
                  </span>
                </div>
                <div className='flex items-center gap-1.5'>
                  <div className='w-1.5 h-1.5 rounded-full bg-amber-500' />
                  <span className='text-[10px] text-muted-foreground'>
                    1 review
                  </span>
                </div>
              </div>
              <span className='text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold'>
                75% approval rate
              </span>
            </div>
          </div>

          {/* Right — Features + CTA */}
          <div className='flex flex-col justify-center'>
            <div className='space-y-3 mb-10'>
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className='group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-border dark:hover:border-white/5 hover:bg-muted/30 dark:hover:bg-white/2 transition-all duration-200'>
                  <div className='shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-200'>
                    <feature.icon size={20} />
                  </div>
                  <h3 className='text-sm font-semibold'>{feature.title}</h3>
                </div>
              ))}
            </div>

            <div className='flex items-center gap-4'>
              <Link
                href='/security'
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
      </div>
    </section>
  );
}

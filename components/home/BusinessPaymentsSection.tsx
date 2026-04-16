import Link from "next/link";
import {
  HiOutlineArrowRight,
  HiOutlineDevicePhoneMobile,
  HiOutlineBuildingLibrary,
  HiOutlineBanknotes,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const payouts = [
  {
    to: "Banny James",
    channel: "M-Pesa",
    channelIcon: HiOutlineDevicePhoneMobile,
    amount: "KES 34,469",
    status: "sent" as const,
  },
  {
    to: "Brock Kelly",
    channel: "Bank",
    channelIcon: HiOutlineBuildingLibrary,
    amount: "KES 2,460",
    status: "sent" as const,
  },
  {
    to: "Cindy Elsy",
    channel: "M-Pesa",
    channelIcon: HiOutlineDevicePhoneMobile,
    amount: "KES 1,455",
    status: "processing" as const,
  },
  {
    to: "David Omondi",
    channel: "Bank",
    channelIcon: HiOutlineBuildingLibrary,
    amount: "KES 62,071",
    status: "queued" as const,
  },
];

const statusDot = {
  sent: "bg-emerald-500",
  processing: "bg-brand",
  queued: "bg-zinc-400 dark:bg-zinc-600",
};

export function BusinessPaymentsSection() {
  return (
    <section
      className='relative py-6 md:py-10 bg-white dark:bg-[#0A0A0B] overflow-hidden'
      id='business-payments-section'>
      <style>{`
        @keyframes connector-travel-x {
          0% { transform: translateX(-140%); }
          100% { transform: translateX(360%); }
        }

        @keyframes connector-travel-y {
          0% { transform: translateY(-140%); }
          100% { transform: translateY(360%); }
        }
      `}</style>

      <div className='relative w-full px-6 md:px-12'>
        <SectionHeading title='Business Payments' />

        {/* Full-width flow visualization */}
        <div className='flex flex-col gap-8'>
          {/* Top: Source → animated bar → Destinations */}
          <div className='flex flex-col md:flex-row items-center gap-6 md:gap-0'>
            {/* Source card */}
            <div className='shrink-0 w-full md:w-56 rounded-2xl border border-border dark:border-white/5 bg-muted/30 dark:bg-white/2 p-5'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center'>
                  <HiOutlineBanknotes size={20} className='text-brand' />
                </div>
                <div>
                  <p className='text-xs text-muted-foreground'>Your Balance</p>
                  <p className='text-base md:text-lg font-bold font-mono'>
                    KES 100,455
                  </p>
                </div>
              </div>
              <div className='h-1 rounded-full bg-muted dark:bg-white/5 overflow-hidden'>
                <div className='h-full w-3/4 rounded-full bg-brand' />
              </div>
            </div>

            {/* Animated connector */}
            <div className='hidden md:flex flex-1 items-center px-5'>
              <div className='flex-1 h-px bg-border dark:bg-white/10 relative overflow-hidden'>
                <div
                  className='absolute inset-y-0 left-0 w-24 h-px bg-linear-to-r from-transparent via-brand to-transparent opacity-90'
                  style={{
                    animation: "connector-travel-x 1.8s linear infinite",
                  }}
                />
              </div>
              <div className='relative shrink-0 mx-3'>
                <div className='absolute inset-0 rounded-full bg-brand/20 blur-md' />
                <div className='relative w-9 h-9 rounded-full bg-brand flex items-center justify-center'>
                  <HiOutlineArrowRight size={14} className='text-white' />
                </div>
              </div>
              <div className='flex-1 h-px bg-border dark:bg-white/10 relative overflow-hidden'>
                <div
                  className='absolute inset-y-0 left-0 w-24 h-px bg-linear-to-r from-transparent via-brand to-transparent opacity-90'
                  style={{
                    animation: "connector-travel-x 1.8s linear infinite 0.2s",
                  }}
                />
              </div>
            </div>

            {/* Visible on mobile only */}
            <div className='flex md:hidden items-center justify-center py-2'>
              <div className='flex flex-col items-center'>
                <div className='relative h-10 w-px bg-border dark:bg-white/10 overflow-hidden'>
                  <div
                    className='absolute inset-x-0 top-0 h-8 w-px bg-linear-to-b from-transparent via-brand to-transparent opacity-90'
                    style={{
                      animation: "connector-travel-y 1.8s linear infinite",
                    }}
                  />
                </div>
                <div className='relative my-2'>
                  <div className='absolute inset-0 rounded-full bg-brand/20 blur-md' />
                  <div className='relative w-9 h-9 rounded-full bg-brand flex items-center justify-center rotate-90'>
                    <HiOutlineArrowRight size={14} className='text-white' />
                  </div>
                </div>
                <div className='relative h-10 w-px bg-border dark:bg-white/10 overflow-hidden'>
                  <div
                    className='absolute inset-x-0 top-0 h-8 w-px bg-linear-to-b from-transparent via-brand to-transparent opacity-90'
                    style={{
                      animation: "connector-travel-y 1.8s linear infinite 0.2s",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Destination cards grid */}
            <div className='flex-1 w-full grid grid-cols-2 gap-2 md:gap-3'>
              {payouts.map((p) => (
                <div
                  key={p.to}
                  className='rounded-xl border border-border dark:border-white/5 bg-muted/30 dark:bg-white/2 p-3 md:p-4 flex flex-col gap-2'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <p.channelIcon
                        size={14}
                        className='text-muted-foreground'
                      />
                      <span className='text-[10px] font-medium text-muted-foreground uppercase tracking-wider'>
                        {p.channel}
                      </span>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full ${statusDot[p.status]}`}
                    />
                  </div>
                  <p className='text-xs md:text-sm font-semibold truncate'>
                    {p.to}
                  </p>
                  <p className='text-xs md:text-sm font-mono font-bold text-brand'>
                    {p.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className='flex items-center gap-4 pt-6 border-t border-border dark:border-white/5'>
            <Link
              href='/business-payments'
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

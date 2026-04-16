import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  HiOutlineArrowRight,
  HiOutlineLightBulb,
  HiOutlineArrowTrendingUp,
  HiOutlineHeart,
  HiOutlineGlobeAlt,
  HiOutlineComputerDesktop,
  HiOutlineClock,
} from "react-icons/hi2";

const perks = [
  {
    icon: HiOutlineLightBulb,
    title: "Innovative Environment",
    description:
      "Work on cutting-edge payment technology that serves thousands of businesses in Kenya.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    title: "Growth Opportunities",
    description:
      "We're scaling fast. Your career growth is limited only by your ambition and drive.",
  },
  {
    icon: HiOutlineHeart,
    title: "Comprehensive Benefits",
    description:
      "Competitive salary, health benefits, and performance-based bonuses to support your well-being.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Remote-First Culture",
    description:
      "Work from anywhere in East Africa. We optimize for output, not office hours.",
  },
  {
    icon: HiOutlineComputerDesktop,
    title: "Modern Stack",
    description:
      "Build with the latest tools — React, TypeScript, Go, Kubernetes, and AWS.",
  },
  {
    icon: HiOutlineClock,
    title: "Flexible Schedule",
    description:
      "Set your own hours. We trust you to manage your time and deliver great work.",
  },
];

const openRoles = [
  {
    title: "Senior Backend Engineer",
    team: "Engineering",
    location: "Remote — East Africa",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Nairobi / Remote",
    type: "Full-time",
  },
  {
    title: "Compliance Officer",
    team: "Legal & Compliance",
    location: "Nairobi",
    type: "Full-time",
  },
  {
    title: "Developer Advocate",
    team: "Engineering",
    location: "Remote — East Africa",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    team: "Support",
    location: "Nairobi / Remote",
    type: "Full-time",
  },
];

export function HiringContent() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-40 w-150 h-150 rounded-full bg-brand/8 blur-[120px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12 pt-32 pb-6 md:pt-40 md:pb-8'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4'>
              Help Us Build the{" "}
              <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
                Future of Payments
              </span>
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed'>
              We&apos;re a team of builders, dreamers, and problem-solvers
              creating payment infrastructure that empowers Kenyan businesses.
              If you&apos;re creative, self-driven, and passionate about impact
              — we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B] relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-125 h-125 rounded-full bg-brand/5 blur-[120px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12'>
          <div className='max-w-3xl mb-6 md:mb-10'>
            <SectionHeading
              title='Why Join Us'
              subtitle='We invest in our people the way we invest in our product — relentlessly.'
            />
          </div>
          <div className='grid md:grid-cols-3 gap-4 md:gap-6'>
            {perks.map((p) => (
              <div
                key={p.title}
                className='group p-5 md:p-8 rounded-2xl border bg-muted/30 dark:bg-white/3 border-border dark:border-white/8 hover:border-brand/30 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1'>
                <div className='p-3 w-fit rounded-xl bg-brand/10 text-brand mb-5 group-hover:bg-brand group-hover:text-white transition-all duration-300'>
                  <p.icon size={24} />
                </div>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  {p.title}
                </h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className='py-6 md:py-10'>
        <div className='w-full px-6 md:px-12'>
          <div className='text-center mb-6 md:mb-10'>
            <h2 className='text-2xl md:text-4xl font-bold tracking-tight'>
              Current Openings
            </h2>
          </div>
          <div className='space-y-4'>
            {openRoles.map((role) => (
              <div
                key={role.title}
                className='group flex flex-row items-center justify-between p-6 rounded-2xl border border-border bg-white dark:bg-white/3 hover:border-brand/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 gap-4'>
                <div>
                  <h3 className='text-lg font-semibold group-hover:text-brand transition-colors'>
                    {role.title}
                  </h3>
                  <div className='flex flex-wrap items-center gap-3 mt-2'>
                    <span className='text-xs px-2 py-1 rounded-full bg-brand/5 text-brand font-medium'>
                      {role.team}
                    </span>
                    <span className='text-xs text-muted-foreground'>
                      {role.location}
                    </span>
                    <span className='text-xs text-muted-foreground'>•</span>
                    <span className='text-xs text-muted-foreground'>
                      {role.type}
                    </span>
                  </div>
                </div>
                <Link
                  href='mailto:onboarding@kulmipay.com'
                  className='group/btn inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline shrink-0'>
                  Apply Now
                  <HiOutlineArrowRight
                    size={14}
                    className='group-hover/btn:translate-x-0.5 transition-transform'
                  />
                </Link>
              </div>
            ))}
          </div>
          <p className='text-center text-sm text-muted-foreground mt-8'>
            Don&apos;t see your role? Send your CV to{" "}
            <Link
              href='mailto:onboarding@kulmipay.com'
              className='text-brand hover:underline'>
              onboarding@kulmipay.com
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className='relative py-6 md:py-10 overflow-hidden'>
        <div className='absolute inset-0 bg-white dark:bg-[#0A0A0B]' />
        <div className='relative w-full px-6 md:px-12 text-center'>
          <h2 className='text-2xl md:text-4xl font-bold text-foreground mb-6'>
            Make an Impact
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-10'>
            Join a team that&apos;s building payment infrastructure used by
            thousands of businesses in Kenya.
          </p>
          <Link
            href='mailto:onboarding@kulmipay.com'
            className='group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-all shadow-lg hover:-translate-y-0.5'>
            Send Your Application
            <HiOutlineArrowRight
              size={18}
              className='group-hover:translate-x-0.5 transition-transform'
            />
          </Link>
        </div>
      </section>
    </>
  );
}

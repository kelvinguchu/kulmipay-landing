import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  HiOutlineGlobeAlt,
  HiOutlineBolt,
  HiOutlineArrowRight,
  HiOutlineShieldCheck,
  HiOutlineChartBarSquare,
  HiOutlineCpuChip,
  HiOutlineBanknotes,
  HiOutlineUserGroup,
  HiOutlineHeart,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

const capabilities = [
  {
    icon: HiOutlineBanknotes,
    title: "Multi-Currency Wallets",
    description:
      "Hold and manage KES, USD, EUR, and GBP balances in one dashboard.",
  },
  {
    icon: HiOutlineBolt,
    title: "Real-Time Transfers",
    description:
      "Instant fund movements between wallets, to banks, and to mobile money.",
  },
  {
    icon: HiOutlineCpuChip,
    title: "Seamless API",
    description:
      "Developer-first payment APIs with comprehensive documentation and SDKs.",
  },
  {
    icon: HiOutlineChartBarSquare,
    title: "Advanced Analytics",
    description:
      "Granular reporting, reconciliation tools, and real-time transaction insights.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Bank-Grade Security",
    description:
      "PCI-DSS compliant, 256-bit encryption, and 3DS payer authentication.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Nationwide Reach",
    description:
      "Accept and send payments to any M-Pesa user or bank account in Kenya.",
  },
];

const values = [
  {
    icon: HiOutlineLightBulb,
    title: "Innovation First",
    description:
      "We challenge conventional payment models and build solutions that anticipate tomorrow's needs.",
  },
  {
    icon: HiOutlineHeart,
    title: "Customer Obsession",
    description:
      "Every feature, every line of code starts with the question: how does this make our merchants' lives easier?",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Radical Transparency",
    description:
      "No hidden fees, no surprises. Our pricing, our processes, and our roadmap are always open.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Relentless Execution",
    description:
      "We ship fast, measure everything, and iterate based on real merchant feedback.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-40 w-150 h-150 rounded-full bg-brand/8 blur-[120px] pointer-events-none' />
        <div
          className='absolute inset-0 opacity-[0.02]'
          style={{
            backgroundImage: `linear-gradient(rgba(245,110,15,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,110,15,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className='relative w-full px-6 md:px-12 pt-32 pb-6 md:pt-40 md:pb-8'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4'>
              Building the Payment{" "}
              <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
                Backbone
              </span>
              <br />
              of Africa
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed'>
              KulmiPay is a Nairobi-based fintech company on a mission to create
              seamless payment infrastructure for Kenyan businesses. We build
              elegant, reliable software that empowers merchants and developers
              to move money without friction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B] relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-125 h-125 rounded-full bg-brand/5 blur-[120px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12'>
          <div className='grid md:grid-cols-2 gap-10 md:gap-16'>
            <div className='p-5 md:p-8 rounded-2xl border bg-muted/30 dark:bg-white/3 border-border dark:border-white/8'>
              <span className='inline-block px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-brand/10 text-brand mb-4'>
                Our Mission
              </span>
              <h2 className='text-xl md:text-3xl font-bold text-foreground mb-4'>
                Payment Interoperability
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                We are building elegant, usable software that enables merchants
                and developers in Kenya to easily transact and innovate on top
                of our payment rails. Every product we ship brings us closer to
                a future where money moves as freely as information.
              </p>
            </div>
            <div className='p-5 md:p-8 rounded-2xl border bg-muted/30 dark:bg-white/3 border-border dark:border-white/8'>
              <span className='inline-block px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-brand/10 text-brand mb-4'>
                Our Vision
              </span>
              <h2 className='text-xl md:text-3xl font-bold text-foreground mb-4'>
                Frictionless Payments
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                Be a key player in enabling frictionless payments in Kenya and
                beyond by creating better user experiences and reliable
                infrastructure businesses can depend on — whether they&apos;re a
                solo entrepreneur or a multinational enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className='py-6 md:py-10'>
        <div className='w-full px-6 md:px-12'>
          <div className='max-w-3xl mb-6 md:mb-10'>
            <SectionHeading
              title='What Drives Us'
              subtitle='These principles guide every decision we make — from product design to customer support.'
            />
          </div>
          <div className='grid md:grid-cols-2 gap-4 md:gap-6'>
            {values.map((v) => (
              <div
                key={v.title}
                className='group p-5 md:p-8 rounded-2xl border border-border bg-white dark:bg-white/3 hover:border-brand/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                <div className='p-3 w-fit rounded-xl bg-brand/10 text-brand mb-5 group-hover:bg-brand group-hover:text-white transition-all duration-300'>
                  <v.icon size={24} />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{v.title}</h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className='py-6 md:py-10 bg-brand-50/50 dark:bg-white/2'>
        <div className='w-full px-6 md:px-12'>
          <div className='text-center mb-6 md:mb-10'>
            <h2 className='text-2xl md:text-4xl font-bold tracking-tight'>
              What We&apos;ve Built
            </h2>
          </div>
          <div className='grid md:grid-cols-3 gap-4 md:gap-6'>
            {capabilities.map((c) => (
              <div
                key={c.title}
                className='group p-6 rounded-2xl border border-border bg-white dark:bg-white/3 hover:border-brand/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center'>
                <div className='p-3 w-fit mx-auto rounded-xl bg-brand/10 text-brand mb-5 group-hover:bg-brand group-hover:text-white transition-all duration-300'>
                  <c.icon size={24} />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{c.title}</h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='relative py-6 md:py-10 overflow-hidden'>
        <div className='absolute inset-0 bg-white dark:bg-[#0A0A0B]' />
        <div className='relative w-full px-6 md:px-12 text-center'>
          <h2 className='text-2xl md:text-4xl font-bold text-foreground mb-6'>
            Join the Journey
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-10'>
            We&apos;re always looking for talented people who share our mission.
            Check our open roles or start using the platform today.
          </p>
          <div className='flex flex-row items-center justify-center gap-4'>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-all shadow-lg hover:-translate-y-0.5'>
              Create Account
              <HiOutlineArrowRight
                size={18}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>
            <Link
              href='/hiring'
              className='inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-foreground border-2 border-border rounded-xl hover:border-brand/40 transition-all'>
              View Open Roles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

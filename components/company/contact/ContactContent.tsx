import Link from "next/link";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineArrowRight,
  HiOutlineClock,
} from "react-icons/hi2";

const contactMethods = [
  {
    icon: HiOutlineEnvelope,
    title: "Email Us",
    description: "For general inquiries and merchant onboarding support.",
    detail: "onboarding@kulmipay.com",
    href: "mailto:onboarding@kulmipay.com",
  },
  {
    icon: HiOutlinePhone,
    title: "Call Us",
    description: "Speak directly with our support team.",
    detail: "+254 725 101 001",
    href: "tel:+254725101001",
  },
  {
    icon: HiOutlineMapPin,
    title: "Visit Us",
    description: "KulmiPay HQ, Nairobi, Kenya.",
    detail: "Nairobi, Kenya",
    href: "#",
  },
  {
    icon: HiOutlineClock,
    title: "Business Hours",
    description: "Our team is available around the clock.",
    detail: "24/7 Support",
    href: "#",
  },
];

export function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-40 w-150 h-150 rounded-full bg-brand/8 blur-[120px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12 pt-32 pb-6 md:pt-40 md:pb-8'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4'>
              We&apos;d Love to{" "}
              <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
                Hear From You
              </span>
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed'>
              Whether you have questions about our platform, need help with
              integration, or want to explore enterprise solutions — our team is
              ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className='py-6 md:py-10'>
        <div className='w-full px-6 md:px-12'>
          <div className='grid md:grid-cols-2 gap-4 md:gap-6'>
            {contactMethods.map((m) => (
              <Link
                key={m.title}
                href={m.href}
                className='group p-5 md:p-8 rounded-2xl border border-border bg-white dark:bg-white/3 hover:border-brand/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                <div className='p-3 w-fit rounded-xl bg-brand/10 text-brand mb-5 group-hover:bg-brand group-hover:text-white transition-all duration-300'>
                  <m.icon size={24} />
                </div>
                <h3 className='text-lg font-semibold mb-1'>{m.title}</h3>
                <p className='text-sm text-muted-foreground mb-3'>
                  {m.description}
                </p>
                <span className='text-sm font-semibold text-brand'>
                  {m.detail}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sales CTA */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B] relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-125 h-125 rounded-full bg-brand/5 blur-[120px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12'>
          <div className='grid md:grid-cols-2 gap-10 md:gap-16 items-center'>
            <div>
              <span className='inline-block px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-brand/10 text-brand mb-4'>
                Enterprise
              </span>
              <h2 className='text-2xl md:text-4xl font-bold text-foreground mb-4'>
                Custom Solutions
              </h2>
              <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                For high-volume merchants, fintechs, and enterprises needing
                custom pricing, dedicated support, or tailored integrations —
                our sales team is here to help.
              </p>
              <Link
                href='mailto:onboarding@kulmipay.com'
                className='group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-all shadow-lg hover:-translate-y-0.5'>
                Talk to Sales
                <HiOutlineArrowRight
                  size={18}
                  className='group-hover:translate-x-0.5 transition-transform'
                />
              </Link>
            </div>
            <div className='rounded-2xl border bg-muted/30 dark:bg-white/3 border-border dark:border-white/8 p-8'>
              <h3 className='text-xl font-semibold text-foreground mb-4'>
                What We Can Help With
              </h3>
              <ul className='space-y-3'>
                {[
                  "Custom pricing for high-volume merchants",
                  "Dedicated account manager",
                  "Priority API support & SLA guarantees",
                  "Custom payment solutions",
                  "Bulk disbursement configuration",
                ].map((item) => (
                  <li key={item} className='flex items-center gap-3'>
                    <div className='w-1.5 h-1.5 rounded-full bg-brand shrink-0' />
                    <span className='text-sm text-muted-foreground'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

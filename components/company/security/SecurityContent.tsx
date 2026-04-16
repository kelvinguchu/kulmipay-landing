import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineFingerPrint,
  HiOutlineServerStack,
  HiOutlineArrowRight,
  HiOutlineEye,
  HiOutlineCpuChip,
  HiOutlineCheckBadge,
} from "react-icons/hi2";

const securityFeatures = [
  {
    icon: HiOutlineLockClosed,
    title: "End-to-End Encryption",
    description:
      "All data in transit is protected with 256-bit TLS encryption. Sensitive data at rest uses AES-256 encryption, meeting the highest industry standards.",
  },
  {
    icon: HiOutlineFingerPrint,
    title: "3D Secure Authentication",
    description:
      "Every card transaction goes through 3DS verification, adding an extra layer of payer authentication to prevent unauthorised charges.",
  },
  {
    icon: HiOutlineServerStack,
    title: "PCI-DSS Level 1",
    description:
      "KulmiPay is PCI-DSS Level 1 compliant — the highest level of payment card security certification, validated through annual audits.",
  },
  {
    icon: HiOutlineEye,
    title: "Real-Time Fraud Monitoring",
    description:
      "Our AI-powered fraud engine monitors transactions 24/7, flagging suspicious activity and blocking threats before they impact your business.",
  },
  {
    icon: HiOutlineCpuChip,
    title: "Secure API Infrastructure",
    description:
      "API keys are hashed, rate-limited, and scoped. Webhook signatures ensure data integrity, and IP whitelisting adds an extra layer of access control.",
  },
  {
    icon: HiOutlineCheckBadge,
    title: "Two-Factor Authentication",
    description:
      "Protect your merchant dashboard with 2FA using authenticator apps or SMS verification for all sensitive operations.",
  },
];

const compliance = [
  {
    icon: HiOutlineShieldCheck,
    title: "Data Protection Act",
    description:
      "Fully compliant with the Kenya Data Protection Act (2019) for handling personal and financial data.",
  },
  {
    icon: HiOutlineLockClosed,
    title: "AML & KYC Compliance",
    description:
      "Rigorous Anti-Money Laundering and Know Your Customer procedures for all merchants and transactions.",
  },
  {
    icon: HiOutlineServerStack,
    title: "SOC 2 Type II",
    description:
      "Our infrastructure and processes undergo SOC 2 Type II audits for security, availability, and confidentiality.",
  },
];

export function SecurityContent() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-40 w-150 h-150 rounded-full bg-brand/8 blur-[120px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12 pt-32 pb-6 md:pt-40 md:pb-8'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4'>
              Security Is{" "}
              <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
                Non-Negotiable
              </span>
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed'>
              At KulmiPay, security isn&apos;t a feature — it&apos;s the
              foundation. Every layer of our infrastructure is built with
              bank-grade protections to keep your funds and data safe.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className='py-6 md:py-10'>
        <div className='w-full px-6 md:px-12'>
          <div className='text-center mb-6 md:mb-10'>
            <h2 className='text-2xl md:text-4xl font-bold tracking-tight'>
              Multi-Layer Protection
            </h2>
          </div>
          <div className='grid md:grid-cols-3 gap-4 md:gap-6'>
            {securityFeatures.map((f) => (
              <div
                key={f.title}
                className='group p-5 md:p-8 rounded-2xl border border-border bg-white dark:bg-white/3 hover:border-brand/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                <div className='p-3 w-fit rounded-xl bg-brand/10 text-brand mb-5 group-hover:bg-brand group-hover:text-white transition-all duration-300'>
                  <f.icon size={24} />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{f.title}</h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B] relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-125 h-125 rounded-full bg-brand/5 blur-[120px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12'>
          <div className='max-w-3xl mb-6 md:mb-10'>
            <SectionHeading
              title='Regulatory Compliance'
              subtitle='We adhere to the strictest financial regulations and undergo regular audits to maintain the trust of our merchants and their customers.'
            />
          </div>
          <div className='grid md:grid-cols-2 gap-4 md:gap-6'>
            {compliance.map((c) => (
              <div
                key={c.title}
                className='flex items-start gap-4 p-6 rounded-2xl border bg-muted/30 dark:bg-white/3 border-border dark:border-white/8'>
                <div className='p-3 rounded-xl bg-brand/10 text-brand shrink-0'>
                  <c.icon size={24} />
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-1'>
                    {c.title}
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {c.description}
                  </p>
                </div>
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
            Security First
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-10'>
            Have security questions or want to report a vulnerability? Our
            security team is available around the clock.
          </p>
          <div className='flex flex-row items-center justify-center gap-4'>
            <Link
              href='mailto:onboarding@kulmipay.com'
              className='group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-all shadow-lg hover:-translate-y-0.5'>
              Contact Security Team
              <HiOutlineArrowRight
                size={18}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>
            <Link
              href='/privacy-policy'
              className='inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-foreground border-2 border-border rounded-xl hover:border-brand/40 transition-all'>
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

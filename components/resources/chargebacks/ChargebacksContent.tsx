"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HiOutlineShieldCheck,
  HiOutlineBellAlert,
  HiOutlineClipboardDocumentCheck,
  HiOutlineDocumentArrowUp,
  HiOutlineChatBubbleLeftRight,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const processSteps = [
  {
    icon: HiOutlineBellAlert,
    title: "You Get Notified",
    description:
      "As soon as a cardholder's bank opens a dispute, KulmiPay notifies you by email and dashboard alert — including the payment ID and the reason code.",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "Review & Respond",
    description:
      "Check the transaction details. Did the customer receive their goods? Is there proof of delivery? Gather all evidence including invoices, shipping confirmations, and correspondence.",
  },
  {
    icon: HiOutlineDocumentArrowUp,
    title: "Submit Evidence",
    description:
      "Upload your supporting documents through the KulmiPay dashboard. We represent the dispute on your behalf with the card issuing bank within the 7-day representment window.",
  },
];

const preventionTips = [
  {
    icon: HiOutlineCheckCircle,
    title: "Crystal-Clear Return Policy",
    description:
      "Post your return and refund policies prominently on your website. When customers know the rules upfront, they contact you first — not their bank.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Proactive Communication",
    description:
      "Keep customers updated at every stage of their order. Automated order confirmations, shipping updates, and delivery notifications eliminate ambiguity.",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "Document Everything",
    description:
      "Share tracking numbers, invoices, and delivery proofs with your buyers. A solid paper trail is your strongest defense when a dispute arises.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Verify Before Shipping",
    description:
      "For high-value orders, confirm the buyer's identity and shipping address. A quick verification call or email can prevent fraudulent purchases.",
  },
];

const faqs = [
  {
    q: "What exactly is a chargeback?",
    a: "A chargeback is a dispute filed by a cardholder through their issuing bank, requesting a reversal of a transaction. Card networks like Visa and Mastercard created this mechanism to protect cardholders from unauthorized or fraudulent charges.",
  },
  {
    q: "Why should I work to prevent chargebacks?",
    a: "Excessive chargebacks can label your business as high-risk, resulting in higher processing fees, withheld settlements, or even loss of your payment processing account entirely. Prevention is always cheaper than resolution.",
  },
  {
    q: "How long does a customer have to file a chargeback?",
    a: "Cardholders typically have up to 180 days from the transaction date to file a dispute. This means your revenue from card payments is technically reversible for six months.",
  },
  {
    q: "How does KulmiPay help with chargebacks?",
    a: "KulmiPay provides real-time dispute notifications, guided evidence submission, and direct representation with card networks. Our built-in fraud screening also catches suspicious transactions before they become chargebacks.",
  },
  {
    q: "What happens if I lose a chargeback dispute?",
    a: "The disputed amount is deducted from your account and returned to the cardholder. Repeated losses increase your chargeback ratio, which can trigger enhanced monitoring or account restrictions from card networks.",
  },
];

export function ChargebacksContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100/50 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-40 w-100 h-100 rounded-full bg-brand/8 blur-[100px] pointer-events-none' />
        <div
          className='absolute inset-0 opacity-[0.02]'
          style={{
            backgroundImage: `linear-gradient(rgba(245,110,15,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,110,15,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className='relative w-full px-6 md:px-12 pt-28 pb-6 md:pt-36 md:pb-10'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4'>
              Understanding{" "}
              <span className='bg-linear-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent'>
                Chargebacks
              </span>
              <br />
              And How to Prevent Them
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed'>
              A chargeback is a transaction reversal initiated by a cardholder
              through their bank. While designed to protect consumers, excessive
              chargebacks can seriously impact your business. Here&apos;s
              everything you need to know.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Dispute Process' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                className='rounded-xl border border-border dark:border-white/10 p-5 bg-white dark:bg-white/2'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center'>
                    <span className='text-xs font-bold text-brand'>
                      {idx + 1}
                    </span>
                  </div>
                  <step.icon size={20} className='text-brand' />
                </div>
                <h3 className='text-sm font-semibold text-foreground mb-1'>
                  {step.title}
                </h3>
                <p className='text-xs text-muted-foreground leading-relaxed'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Avoid */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
            <div>
              <SectionHeading title='Chargeback Impact' />
              <p className='text-sm text-muted-foreground leading-relaxed mb-4'>
                Chargebacks are more than lost revenue. A high ratio triggers
                cascading consequences that can threaten your entire business.
              </p>
              <ul className='space-y-3'>
                {[
                  "Banks may label your business as high-risk, increasing fees dramatically",
                  "Card networks can withhold settlements for extended review periods",
                  "Payment processing privileges can be revoked entirely",
                  "Revenue from any card sale remains reversible for up to 180 days",
                ].map((text) => (
                  <li
                    key={text}
                    className='flex items-start gap-2 text-xs text-muted-foreground'>
                    <HiOutlineXCircle
                      size={14}
                      className='text-red-500 dark:text-red-400 mt-0.5 shrink-0'
                    />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className='rounded-xl border border-border dark:border-white/10 bg-white dark:bg-white/2 p-5'>
              <div className='text-center mb-4'>
                <div className='text-3xl font-bold font-mono text-brand mb-1'>
                  0.65%
                </div>
                <p className='text-xs text-muted-foreground'>
                  Industry average chargeback rate
                </p>
              </div>
              <div className='space-y-2'>
                <div className='flex justify-between items-center p-2.5 rounded-lg bg-muted/30 dark:bg-white/5'>
                  <span className='text-xs text-muted-foreground'>
                    Monitoring threshold
                  </span>
                  <span className='text-xs font-semibold font-mono text-yellow-500 dark:text-yellow-400'>
                    1.0%
                  </span>
                </div>
                <div className='flex justify-between items-center p-2.5 rounded-lg bg-muted/30 dark:bg-white/5'>
                  <span className='text-xs text-muted-foreground'>
                    Excessive threshold
                  </span>
                  <span className='text-xs font-semibold font-mono text-red-500 dark:text-red-400'>
                    1.5%
                  </span>
                </div>
                <div className='flex justify-between items-center p-2.5 rounded-lg bg-muted/30 dark:bg-white/5'>
                  <span className='text-xs text-muted-foreground'>
                    Account termination risk
                  </span>
                  <span className='text-xs font-semibold font-mono text-red-500 dark:text-red-400'>
                    2.0%+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Prevention Tips' />
          <p className='text-sm text-muted-foreground mb-4 max-w-lg'>
            Most chargebacks stem from miscommunication. These practices will
            dramatically reduce your dispute rate.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {preventionTips.map((tip) => (
              <div
                key={tip.title}
                className='rounded-xl border border-border dark:border-white/10 p-5 bg-white dark:bg-white/2'>
                <tip.icon size={20} className='text-brand mb-3' />
                <h3 className='text-sm font-semibold text-foreground mb-1'>
                  {tip.title}
                </h3>
                <p className='text-xs text-muted-foreground leading-relaxed'>
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <SectionHeading title='Common Questions' />
          <div className='space-y-2'>
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className='rounded-xl border border-border dark:border-white/10 bg-white dark:bg-white/2 overflow-hidden'>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className='w-full flex items-center justify-between px-4 py-3 text-left'>
                  <span className='text-sm font-semibold text-foreground pr-4'>
                    {faq.q}
                  </span>
                  <HiOutlineChevronDown
                    size={16}
                    className={`shrink-0 text-muted-foreground transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${openFaq === i ? "max-h-40 pb-4 px-4" : "max-h-0"}`}>
                  <p className='text-xs text-muted-foreground leading-relaxed'>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'>
        <div className='w-full px-6 md:px-12'>
          <div className='rounded-xl border border-border dark:border-white/10 bg-linear-to-br from-brand-50 to-white dark:from-brand/5 dark:to-[#0A0A0B] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <div>
              <h3 className='text-lg md:text-xl font-bold text-foreground mb-1'>
                Protect your revenue
              </h3>
              <p className='text-sm text-muted-foreground'>
                Built-in fraud screening catches disputes before they happen.
              </p>
            </div>
            <Link
              href='https://app.kulmipay.com/account/signup/'
              className='group inline-flex items-center gap-2 px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors duration-200 shrink-0'>
              Start Selling Securely
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

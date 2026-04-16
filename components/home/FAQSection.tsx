"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineArrowRight, HiOutlineChevronDown } from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    question: "What is Kulmi Pay?",
    answer:
      "Kulmi Pay is payment infrastructure for African businesses. We provide the APIs, fraud detection, and mobile money network connectivity that companies use to build payment features into their products. Instead of building payment infrastructure from scratch or integrating with each mobile money network separately, businesses build on our infrastructure and get access to multiple networks through one integration.",
  },
  {
    question: "What payment methods does Kulmi Pay support?",
    answer:
      "Kulmi Pay supports a wide range of payment methods, allowing merchants to accept payments from both local and international customers. These include M-Pesa, PesaLink, and Bank Payments.",
  },
  {
    question: "Does Kulmi Pay support international payments?",
    answer:
      "Yes, Kulmi Pay supports international payments, allowing you to receive payments from customers across the world.",
  },
  {
    question: "Who uses Kulmi Pay infrastructure?",
    answer:
      "Betting and gaming platforms, e-commerce businesses (Shopify/WooCommerce), fintech companies, payroll and HR tech platforms, marketplaces, and NGOs across Africa. Any business that needs to collect or send mobile money payments builds on Kulmi Pay infrastructure to avoid months of development work.",
  },
  {
    question: "Do you support card payments?",
    answer:
      "Currently, Kulmi Pay is not supporting card payments. However, we offer other payment options; mobile payments and Bank Payments.",
  },
  {
    question: "Is Kulmi Pay available outside Kenya?",
    answer:
      "Currently, Kulmi Pay supports merchants in Kenya, Uganda and Tanzania. However, it is available for disbursements in Ghana, Cameroon, Burkina Faso, Nigeria, Ivory Coast and Sierra Leone.",
  },
  {
    question: "What African markets does Kulmi Pay infrastructure support?",
    answer:
      "Collections (accept payments): Kenya, Uganda, Tanzania. Disbursements (send payments): Kenya, Uganda, Tanzania, Nigeria, Ghana, Ivory Coast, Cameroon, Burkina Faso, Sierra Leone. Coverage is actively expanding.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className='relative py-6 md:py-10 bg-gray-50/80 dark:bg-[#0A0A0B]'
      id='faq-section'>
      <div className='w-full px-6 md:px-12'>
        <SectionHeading title='FAQ' />

        {/* Accordion */}
        <div className='w-full space-y-3 mb-12'>
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`rounded-xl border transition-all duration-200 ${
                openIndex === i
                  ? "border-brand/20 bg-brand-50/30 dark:bg-brand-900/10"
                  : "border-border hover:border-brand/10 bg-white dark:bg-white/2"
              }`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className='flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer'
                id={`faq-item-${i}`}>
                <span
                  className={`text-sm font-semibold pr-4 transition-colors ${
                    openIndex === i ? "text-brand" : "text-foreground"
                  }`}>
                  {faq.question}
                </span>
                <HiOutlineChevronDown
                  size={18}
                  className={`shrink-0 transition-transform duration-200 ${
                    openIndex === i
                      ? "rotate-180 text-brand"
                      : "text-foreground/30"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}>
                <p className='px-6 pb-5 text-sm text-muted-foreground leading-relaxed'>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className='flex items-center justify-center gap-4'>
          <Link
            href='https://app.kulmipay.com/account/signup/'
            className='group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand border-2 border-brand rounded-xl hover:bg-brand-dark hover:border-brand-dark transition-colors duration-200'
            id='faq-cta-signup'>
            Get Started
            <HiOutlineArrowRight
              size={16}
              className='group-hover:translate-x-0.5 transition-transform'
            />
          </Link>
          <Link
            href='/contact'
            className='inline-flex items-center px-6 py-3 text-sm font-semibold text-foreground dark:text-white border-2 border-border dark:border-white/20 rounded-xl hover:border-brand/30 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all duration-200'
            id='faq-cta-contact'>
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

const partners = [
  {
    name: "M-Pesa",
    logo: "/partners/mpesa.avif",
    width: 140,
    invertDark: false,
  },
  { name: "Visa", logo: "/partners/visa.svg", width: 80, invertDark: false },
  {
    name: "Mastercard",
    logo: "/partners/mastercard.svg",
    width: 52,
    invertDark: false,
  },
  {
    name: "Apple Pay",
    logo: "/partners/apple-pay.svg",
    width: 90,
    invertDark: true,
  },
  {
    name: "Google Pay",
    logo: "/partners/google-pay.png",
    width: 80,
    invertDark: false,
  },
  {
    name: "PesaLink",
    logo: "/partners/pesalink.svg",
    width: 110,
    invertDark: true,
  },
  {
    name: "Cybersource",
    logo: "/partners/cybersource-a-visa-solution.svg",
    width: 160,
    invertDark: true,
  },
  {
    name: "Co-operative Bank",
    logo: "/partners/co-operative.jpeg",
    width: 52,
    invertDark: false,
  },
];

function PartnerLogo({
  partner,
}: Readonly<{ partner: (typeof partners)[number] }>) {
  return (
    <div className='shrink-0 flex items-center justify-center px-4'>
      <Image
        src={partner.logo}
        alt={partner.name}
        width={partner.width}
        height={40}
        className={`h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300${partner.invertDark ? " dark:invert" : ""}`}
      />
    </div>
  );
}

export function PartnersSection() {
  return (
    <section
      className='relative py-6 md:py-10 bg-white dark:bg-[#0A0A0B]'
      id='partners-section'>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className='w-full px-6 md:px-12'>
        <SectionHeading title='Partners' />

        {/* Desktop — static wrap */}
        <div className='hidden md:flex flex-wrap items-center justify-center gap-16'>
          {partners.map((partner) => (
            <div
              key={partner.name}
              className='flex items-center justify-center'>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={40}
                className={`h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300${partner.invertDark ? " dark:invert" : ""}`}
              />
            </div>
          ))}
        </div>

        {/* Mobile — infinite marquee */}
        <div className='md:hidden overflow-hidden -mx-6 relative'>
          {/* Left/right vignette */}
          <div className='absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white to-transparent dark:from-[#0A0A0B] z-10 pointer-events-none' />
          <div className='absolute inset-y-0 right-0 w-12 bg-linear-to-l from-white to-transparent dark:from-[#0A0A0B] z-10 pointer-events-none' />
          <div
            className='flex w-max'
            style={{ animation: "marquee-scroll 20s linear infinite" }}>
            {/* Duplicate the set for seamless loop */}
            {[...partners, ...partners].map((partner, i) => (
              <PartnerLogo key={`${partner.name}-${i}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

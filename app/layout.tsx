import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import { Header, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kulmipay.com"),
  title: {
    default: "Kulmi Pay — Payment Infrastructure for African Businesses",
    template: "%s — KulmiPay",
  },
  description:
    "Kulmi Pay is a Kenyan-based payment gateway that enables businesses to securely accept payments through M-Pesa, Visa, Mastercard, Google Pay, Apple Pay, and CashApp. Licensed by the Central Bank of Kenya.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "https://www.kulmipay.com",
  },
  openGraph: {
    title: "Kulmi Pay — Payment Infrastructure for African Businesses",
    description:
      "Build mobile money payments into your product without building infrastructure from scratch. APIs, fraud protection, and network connectivity across Africa.",
    url: "https://www.kulmipay.com",
    siteName: "Kulmi Pay",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "KulmiPay Payment Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kulmi Pay — Payment Infrastructure for African Businesses",
    description:
      "Build mobile money payments into your product. APIs, fraud protection, and network connectivity across Africa.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning>
      <body className='min-h-full flex flex-col'>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-ZFP371R0P1'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZFP371R0P1');
          `}
        </Script>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "KulmiPay",
            url: "https://www.kulmipay.com",
            logo: "https://www.kulmipay.com/favicon.png",
            description:
              "Kenyan-based payment gateway enabling businesses to securely accept payments through M-Pesa, Visa, Mastercard, Google Pay, Apple Pay, and CashApp.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            sameAs: [
              "https://twitter.com/kulmipay",
              "https://www.linkedin.com/company/kulmipay",
            ],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "KulmiPay",
            url: "https://www.kulmipay.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.kulmipay.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }}
        />
        <ThemeProvider>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

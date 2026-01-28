import type { Metadata } from 'next'
import Script from 'next/script'
import { bricolage, dmSans, inter, newsreader } from './fonts'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClipMarketer | Clip Marketing & Short-Form Content Distribution for Brands & Creators',
  description: 'ClipMarketer is a clip marketing software that helps brands, creators, and influencers repurpose long-form content into short-form videos for TikTok, Reels, and Shorts—powering consistent social media marketing and organic growth.',
  metadataBase: new URL('https://clipmarketer.com'),
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ClipMarketer',
  url: 'https://clipmarketer.com',
  logo: 'https://clipmarketer.com/images/clip-marketing.jpg',
  description: 'ClipMarketer transforms long-form content into professional short-form clips for TikTok, Reels, and Shorts. Human-crafted quality, AI-verified.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@clipmarketer.com',
    telephone: '+4915164327820',
    contactType: 'customer service',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dorothea-Erxleben-Straße 56',
    addressLocality: 'Lübeck',
    postalCode: '23562',
    addressCountry: 'DE',
  },
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable} ${inter.variable} ${newsreader.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-600 text-slate-900 bg-[#F8F9FB] antialiased relative">
        <ScrollToTop />
        <Navigation />
        {children}
        <Footer />

        {/* Cookie Consent Script */}
        <Script
          src="https://cdn.ccm19.de/app.js?apiKey=b94e64b704d9ba6cd1911cc01a18e8abda0a6111787d56a0&domain=696b9a1a5c4ada3c5a0a68e2"
          referrerPolicy="origin"
          strategy="afterInteractive"
        />

        {/* Unicorn Studio Script - Local Version */}
        <Script src="/unicornStudio.umd.js" strategy="beforeInteractive" />
        <Script id="unicorn-studio-init" strategy="lazyOnload">
          {`(function check(){if(window.UnicornStudio){UnicornStudio.init()}else{setTimeout(check,50)}})();`}
        </Script>
      </body>
    </html>
  )
}

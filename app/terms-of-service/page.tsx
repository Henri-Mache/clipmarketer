import type { Metadata } from 'next'
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Terms of Service | ClipMarketer',
  description: 'Read the terms and conditions for using ClipMarketer services. Understand your rights and obligations when using our video clipping and content distribution platform.',
  alternates: {
    canonical: 'https://www.clipmarketer.com/terms-of-service',
    languages: {
      'en': 'https://www.clipmarketer.com/terms-of-service',
      'de': 'https://www.clipmarketer.com/de/agb',
    },
  },
}

export default function TermsOfServicePage() {
  return (
    <main className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <AnimateOnScroll>
          <h1 className="text-4xl md:text-5xl font-newsreader font-semibold text-slate-900 mb-8 tracking-tight">
            Terms and Conditions
          </h1>
        </AnimateOnScroll>

        <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="text-slate-600 leading-relaxed">
          <AnimateOnScroll delay="delay-75">
            <p className="mb-4">
              for the provision of services by
            </p>
            <p className="mb-2 text-slate-900">Henri Matteo Mache</p>
            <p className="mb-2">Dorothea-Erxleben-Straße 56</p>
            <p className="mb-2">23562 Lübeck</p>
            <p className="mb-4">Germany</p>
            <p className="mb-6">
              Email:{' '}
              <a href="mailto:hello@clipmarketer.com" className="text-indigo-600 hover:text-indigo-500 underline">
                hello@clipmarketer.com
              </a>
            </p>
            <p className="mb-6">(hereinafter referred to as the &quot;Contractor&quot;)</p>
            <p className="mb-6">towards his customers (hereinafter referred to as the &quot;Client&quot;)</p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-150">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              1. General
            </h2>
            <p className="mb-4">
              1.1 These Terms and Conditions govern all contracts between the Client and the Contractor for the provision of services, including these Terms and Conditions.
            </p>
            <p className="mb-4">
              1.2 The Contractor may engage subcontractors in his own name and at his own expense. The Contractor remains the sole contractual partner of the Client.
            </p>
            <p className="mb-4">
              1.3 In the event of conflicts, individual agreements or service descriptions shall prevail over these Terms and Conditions.
            </p>
            <p className="mb-6">
              1.4 Deviating terms and conditions of the Client shall not apply unless expressly agreed in writing.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-225">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              2. Subject Matter and Scope of Services
            </h2>
            <p className="mb-4">
              2.1 The Contractor provides services in the field of <span className="text-slate-900">clip marketing, short-form video creation, content clipping, content repurposing, distribution, and analysis</span>, in particular via <span className="text-slate-900">ClipMarketer.com</span>.
            </p>
            <p className="mb-4">
              2.2 ClipMarketer.com processes Client-provided long-form content to create and distribute short-form social media content. The Contractor does not claim ownership of Client content.
            </p>
            <p className="mb-4">
              2.3 The specific scope of services depends on the selected package, subscription, or individual agreement.
            </p>
            <p className="mb-4">
              2.4 Services are provided with due care in accordance with industry standards.
            </p>
            <p className="mb-4">
              2.5 No guarantee is given regarding marketing results, reach, engagement, follower growth, or revenue.
            </p>
            <p className="mb-6">
              2.6 The Contractor performs services independently and is not subject to instructions regarding time, place, or manner of performance.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-300">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              3. Client Obligations
            </h2>
            <p className="mb-4">
              3.1 The Client ensures all provided content is lawful and free of third-party rights.
            </p>
            <p className="mb-4">
              3.2 The Client is solely responsible for compliance with applicable laws and platform policies.
            </p>
            <p className="mb-6">
              3.3 The Contractor is not liable for issues caused by unlawful or incomplete Client content.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-375">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              4. Remuneration
            </h2>
            <p className="mb-4">
              4.1 Fees are based on the agreed pricing or current price list.
            </p>
            <p className="mb-4">
              4.2 Fees are due after service delivery or per subscription period.
            </p>
            <p className="mb-6">
              4.3 Invoices are payable within 14 days of receipt.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-450">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              5. Liability and Indemnification
            </h2>
            <p className="mb-4">
              5.1 Unlimited liability applies in cases of intent, gross negligence, or injury to life, body, or health.
            </p>
            <p className="mb-4">
              5.2 Liability for negligent breach of essential obligations is limited to foreseeable damages.
            </p>
            <p className="mb-4">
              5.3 No liability is assumed for platform algorithms, third-party services, or business outcomes.
            </p>
            <p className="mb-6">
              5.4 The Client indemnifies the Contractor against third-party claims arising from Client content.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-525">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              6. Term and Termination
            </h2>
            <p className="mb-4">
              6.1 Contract terms are defined by the agreed subscription or contract.
            </p>
            <p className="mb-4">
              6.2 Termination for cause remains unaffected.
            </p>
            <p className="mb-6">
              6.3 Client content will be deleted or returned upon termination unless retention is legally required.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-600">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              7. Confidentiality and Data Protection
            </h2>
            <p className="mb-4">
              7.1 All confidential information shall be treated as such indefinitely.
            </p>
            <p className="mb-6">
              7.2 The Contractor complies with GDPR and applicable data protection laws.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-675">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              8. Special Provisions for ClipMarketer.com
            </h2>
            <p className="mb-4">
              8.1 ClipMarketer.com is not a content hosting or streaming service.
            </p>
            <p className="mb-4">
              8.2 Use is limited to content processing and marketing purposes.
            </p>
            <p className="mb-4">
              8.3 Abuse, scraping, or circumvention of safeguards is prohibited.
            </p>
            <p className="mb-4">
              8.4 No guarantee of uninterrupted availability is provided.
            </p>
            <p className="mb-6">
              8.5 The Contractor may discontinue the platform if required for legal, technical, or economic reasons.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-750">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              9. Final Provisions
            </h2>
            <p className="mb-4">
              9.1 German law applies, excluding CISG.
            </p>
            <p className="mb-4">
              9.2 Invalid provisions do not affect the validity of remaining terms.
            </p>
            <p className="mb-6">
              9.3 Jurisdiction shall be the Contractor&apos;s place of business where legally permissible.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-825">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              10. Online Dispute Resolution
            </h2>
            <p className="mb-4">
              The European Commission provides an ODR platform at:{' '}
              <a href="https://ec.europa.eu/consumers/odr" className="text-indigo-600 hover:text-indigo-500 underline" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="mb-6">
              The Contractor is neither obliged nor willing to participate in dispute resolution proceedings.
            </p>
          </AnimateOnScroll>
          </div>
        </div>
      </div>
    </main>
  )
}

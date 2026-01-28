import type { Metadata } from 'next'
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Imprint | ClipMarketer',
  description: 'Legal information and contact details for ClipMarketer. Company information according to German law (§ 5 TMG).',
  alternates: {
    canonical: 'https://www.clipmarketer.com/imprint',
    languages: {
      'en': 'https://www.clipmarketer.com/imprint',
      'de': 'https://www.clipmarketer.com/de/impressum',
    },
  },
}

export default function ImprintPage() {
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
            Imprint
          </h1>
        </AnimateOnScroll>

        <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="text-slate-600 leading-relaxed">
          <AnimateOnScroll delay="delay-75">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              Information according to § 5 TMG
            </h2>
            <p className="mb-2">Henri Matteo Mache</p>
            <p className="mb-2">Dorothea-Erxleben-Straße 56</p>
            <p className="mb-2">23562 Lübeck</p>
            <p className="mb-6">Germany</p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-150">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              Contact
            </h2>
            <p className="mb-2">Phone: +4915164327820</p>
            <p className="mb-6">Email: hello@clipmarketer.com</p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-225">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              Business Identification Number
            </h2>
            <p className="mb-6">DE456228655</p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-300">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              Responsible for Content
            </h2>
            <p className="mb-2">Henri Matteo Mache</p>
            <p className="mb-2">Dorothea-Erxleben-Straße 56</p>
            <p className="mb-2">23562 Lübeck</p>
            <p className="mb-6">Germany</p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-375">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              Consumer Dispute Resolution
            </h2>
            <p className="mb-6">
              We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </AnimateOnScroll>
          </div>
        </div>
      </div>
    </main>
  )
}

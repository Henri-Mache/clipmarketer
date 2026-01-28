import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

export function PrimaryAudience() {
  return (
    <section className="border-y border-slate-200 bg-white py-24">
      <AnimateOnScroll>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl text-slate-900 font-newsreader tracking-tight mb-6">
            Built for Brands, Personal Brands, Creators and Influencers
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto text-lg mb-8">
            ClipMarketer is used by companies running social media advertising programs, personal brands scaling reach, and creators who want a repeatable clip marketing system. The product is designed for anyone producing long-form content who wants a simple, reliable way to scale short-form posts with mass social media advertising without technical complexity or manual posting workflows.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  )
}

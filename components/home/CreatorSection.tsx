import { Check } from 'lucide-react'
import Image from 'next/image'
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

const features = [
  'Repurpose podcasts and YouTube videos into native clips',
  'Maintain a predictable posting cadence across platforms',
  'Spend more time creating, less time distributing',
]

export function CreatorSection() {
  return (
    <section id="creators" className="max-w-7xl mx-auto py-16 md:py-24 px-4">
      <AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 text-white stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <span className="inline-block mb-2 text-[10px] uppercase text-indigo-600 bg-indigo-50 px-2 py-1 rounded font-medium tracking-wider">
                  For Creators
                </span>
                <h3 className="text-2xl font-medium text-slate-900">
                  Clip Marketing for Creators
                </h3>
              </div>
            </div>

            <p className="text-slate-500 font-medium leading-relaxed">
              ClipMarketer helps creators and influencers repurpose podcasts and YouTube videos into a steady stream of short clips and scale social media advertising without extra ops work.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50/40 hover:border-gray-200 transition-colors">
                  <Check className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl overflow-hidden shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] relative min-h-[400px]">
            <Image
              src="/indexcreator.jpg"
              alt="Creator content"
              fill
              className="object-cover opacity-60"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white via-white/90 to-transparent">
              <div className="flex items-center gap-1 mb-4 text-indigo-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-slate-900 font-newsreader leading-relaxed">
                "ClipMarketer works as a professional clip marketing engine without complex setup or technical knowledge."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm font-medium">
                  JD
                </div>
                <div>
                  <div className="text-sm text-slate-900 font-medium">Jane Doe</div>
                  <div className="text-xs text-slate-500">Content Creator</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  )
}

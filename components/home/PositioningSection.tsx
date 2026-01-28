import { Check } from 'lucide-react'
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

const benefits = [
  'Consistent clip quality',
  'Predictable delivery and account health for mass campaigns',
  'Reliable, centralized performance data',
  'A software experience, not a freelance management problem',
]

export function PositioningSection() {
  return (
    <section className="max-w-7xl mx-auto py-10 md:py-12 px-4">
      <AnimateOnScroll>
        <div className="flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 md:p-12 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-6 h-6 text-white stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-slate-900">
                    Clip Marketing, Not a Freelance Marketplace
                  </h3>
                  <p className="text-slate-500 mt-1 font-medium">
                    Software-like reliability without the management overhead.
                  </p>
                </div>
              </div>

              <p className="text-slate-500 font-medium leading-relaxed mb-6">
                ClipMarketer is not an open clip marketplace. You do not have to source editors, negotiate prices or manage freelancers. All clipping and video repurposing runs behind the product through a vetted editor network.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/40">
                    <Check className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="bg-gray-50/40 rounded-2xl border border-gray-100/60 p-6 relative overflow-hidden min-h-[250px] flex items-center justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/30 blur-[40px]"></div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center border border-gray-100 shadow-lg">
                    <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-slate-900 font-medium text-lg">Software-Like Reliability</h3>
                  <p className="text-sm text-slate-500 mt-1">
                    No freelancer management required
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Fully managed workflow
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  )
}

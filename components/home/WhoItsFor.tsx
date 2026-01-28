import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

const audiences = [
  'Brands and companies scaling organic reach through bulk distribution',
  'Personal brands and course sellers growing audiences with podcast clips',
  'Creators and influencers repurposing long-form content into daily shorts',
  'Agencies and teams managing multiple content streams and clients',
]

export function WhoItsFor() {
  return (
    <section className="max-w-7xl mx-auto py-12 md:py-16 px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 p-8 md:p-12 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.15)_0px_25px_50px_-10px,_rgba(0,_0,_0,_0.1)_0px_15px_30px_-15px]">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-slate-900 font-newsreader tracking-tight mb-4">
                Who ClipMarketer Is Built For
              </h2>
              <p className="text-slate-600">
                ClipMarketer is for teams using clip marketing, video repurposing and mass social media advertising as core growth channels:
              </p>
            </div>
            <div className="space-y-4">
              {audiences.map((audience, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl border border-slate-200 text-sm text-slate-700 shadow-sm"
                >
                  {audience}
                </div>
              ))}
            </div>
          </div>
          <p className="md:text-center text-sm text-slate-500 text-center mt-8">
            If your goal is consistent short-form visibility powered by bulk distribution and clipping, ClipMarketer provides the infrastructure.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

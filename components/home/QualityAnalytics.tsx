import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

const tags = ['Authentic, platform-native content', 'Scalable output for mass social media distribution', 'Reliable quality control that protects brand safety']

const platformStats = [
  { platform: 'TikTok', views: '1.2M' },
  { platform: 'Reels', views: '850K' },
  { platform: 'Shorts', views: '2.1M' },
]

export function QualityAnalytics() {
  return (
    <section className="max-w-7xl mx-auto py-16 md:py-24 px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 p-8 md:p-12 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.15)_0px_25px_50px_-10px,_rgba(0,_0,_0,_0.1)_0px_15px_30px_-15px]">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Quality */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl text-slate-900 font-newsreader mb-4">
                Human-Crafted Clips with Tech-Driven QA
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                We believe the best short-form content is human-crafted and scaled with technology. Editors craft clips with narrative and context; technology verifies quality, enforces guidelines and keeps consistency across high-volume campaigns.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Analytics */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl text-slate-900 font-newsreader mb-4">
                Centralized Analytics for Mass Campaigns
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                ClipMarketer provides a centralized analytics dashboard tailored for clip marketing and bulk social media advertising. Track views and engagement across TikTok, Reels and Shorts. Performance by clip, campaign and client. Posting consistency and ROI for mass campaigns.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {platformStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 p-3 rounded-lg text-center shadow-sm"
                  >
                    <span className="block text-[10px] text-slate-500 uppercase">
                      {stat.platform}
                    </span>
                    <span className="text-slate-900 font-medium">{stat.views}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

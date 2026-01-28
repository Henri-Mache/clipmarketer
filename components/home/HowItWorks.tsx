import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'
import { Upload, Scissors, CheckCircle, Send, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Upload Long-Form Content',
    description: 'Upload podcasts, YouTube videos, interviews, webinars or any long-form recording.',
  },
  {
    icon: Scissors,
    title: 'Clips Are Created by Experienced Editors',
    description: 'Our vetted editors create platform-native clips that focus on hooks, pacing and retention.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Is Automatically Verified',
    description: 'Every clip goes through AI-assisted QA and human review to ensure format and brand safety.',
  },
  {
    icon: Send,
    title: 'Bulk Social Media Distribution',
    description: 'Clips are posted automatically from controlled accounts at optimized times.',
  },
  {
    icon: BarChart3,
    title: 'Track Performance in One Dashboard',
    description: 'Views, engagement and campaign ROI are displayed in a single dashboard.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-7xl mx-auto py-16 md:py-24 px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 p-8 md:p-12 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.15)_0px_25px_50px_-10px,_rgba(0,_0,_0,_0.1)_0px_15px_30px_-15px]">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6 font-newsreader">
              How ClipMarketer Works
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Designed to be simple and intuitive, even for teams new to social media advertising or clipping.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-200 hidden md:block"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <AnimateOnScroll key={index} delay={`delay-${Math.min((index + 1) * 75, 375)}`}>
                  <div className="flex gap-6 items-start">
                    {/* Icon */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-indigo-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <step.icon className="w-5 h-5 text-indigo-600" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-indigo-500 font-medium bg-indigo-50 px-2 py-0.5 rounded">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

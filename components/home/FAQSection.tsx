'use client'

import { ChevronDown } from 'lucide-react'
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

interface FAQItem {
  question: string
  answer: (string | { type: 'list'; items: string[] })[]
}

const faqs: FAQItem[] = [
  {
    question: 'What Is Clipping in Social Media Marketing?',
    answer: [
      'Clipping is the process of extracting short, high-impact video segments from long-form content and turning them into short-form videos optimized for social media platforms.',
      'In social media marketing, clipping is most commonly used to repurpose podcasts, interviews, YouTube videos, webinars, and long-form recordings into short clips that can be published on TikTok, Instagram Reels, and YouTube Shorts.',
      'These clips typically highlight key moments, strong hooks, insights, reactions, or emotional points that perform well in short-form feeds.',
    ],
  },
  {
    question: 'What is Clip Marketing?',
    answer: [
      'Clip Marketing is a social media marketing strategy that focuses on turning long-form content into short-form video clips that are distributed across platforms like TikTok, Instagram Reels, and YouTube Shorts.',
      'Instead of creating new content from scratch, Clip Marketing repurposes podcasts, interviews, YouTube videos, webinars, and recordings into multiple short-form clips designed for organic reach and engagement. This approach allows brands, creators, and influencers to increase visibility, stay consistent, and grow on social media using content they already produce.',
      'ClipMarketer is a Clip Marketing product built specifically to manage this process from clip creation to distribution and performance tracking.',
    ],
  },
  {
    question: 'What is ClipMarketer?',
    answer: [
      'ClipMarketer is a short-form content distribution product that helps brands, creators, influencers, and companies turn long-form videos into professionally edited short-form clips and distribute them across social media platforms.',
      'The product combines human-edited clips, automated posting, and centralized analytics so users can manage short-form content marketing without handling editors, posting schedules, or multiple tools.',
      'ClipMarketer is designed to make Clip Marketing simple, repeatable, and measurable.',
    ],
  },
  {
    question: 'Who is ClipMarketer for?',
    answer: [
      'ClipMarketer is built for:',
      { type: 'list', items: [
        'Brands running social media marketing campaigns',
        'Companies building organic distribution channels',
        'Personal brands growing on short-form platforms',
        'Creators and influencers producing long-form content',
        'Founders using content marketing for visibility',
      ]},
      'It is designed for beginners and experienced users alike. You do not need prior marketing knowledge to use ClipMarketer.',
    ],
  },
  {
    question: 'How does ClipMarketer help with social media marketing?',
    answer: [
      'ClipMarketer supports social media marketing by turning long-form content into consistent short-form output across multiple platforms.',
      'Instead of manually editing videos, uploading content, and tracking results separately, ClipMarketer provides a single workflow where clips are created, published, and measured automatically. This helps brands and creators stay active on social media while focusing on content strategy instead of daily execution.',
    ],
  },
  {
    question: 'What platforms does ClipMarketer support?',
    answer: [
      'ClipMarketer distributes short-form video content to:',
      { type: 'list', items: [
        'TikTok',
        'Instagram Reels',
        'YouTube Shorts',
      ]},
      'These platforms are the core of modern short-form social media marketing and Clip Marketing strategies.',
    ],
  },
  {
    question: 'What kind of content can I upload to ClipMarketer?',
    answer: [
      'You can upload any long-form video content, including:',
      { type: 'list', items: [
        'Podcasts',
        'YouTube videos',
        'Interviews',
        'Webinars',
        'Livestream recordings',
        'Educational videos',
        'Personal brand content',
      ]},
      'ClipMarketer turns these videos into short-form clips optimized for social media performance.',
    ],
  },
  {
    question: 'Are the clips created by AI or humans?',
    answer: [
      'Clips on ClipMarketer are created by experienced human editors who specialize in short-form social media content.',
      'AI is used for quality verification, format checks, and consistency enforcement, but the actual clip selection, pacing, and storytelling are handled by humans. This ensures clips feel natural and platform-native rather than automated.',
    ],
  },
  {
    question: 'What makes ClipMarketer different from video editing tools?',
    answer: [
      'Video editing tools focus on manual creation. ClipMarketer focuses on distribution, consistency, and performance.',
      'Instead of editing clips yourself, ClipMarketer operates as a Clip Marketing product that handles:',
      { type: 'list', items: [
        'Clip creation',
        'Social media posting',
        'Platform optimization',
        'Analytics and reporting',
      ]},
      'This makes it more than a tool and closer to an infrastructure for short-form content marketing.',
    ],
  },
  {
    question: 'Can beginners use ClipMarketer?',
    answer: [
      'Yes. ClipMarketer is designed to be easy to use even if you have no experience in social media marketing or content distribution.',
      'The workflow is simple: Upload content, approve clips, and track performance.',
      'All technical and operational complexity runs in the background.',
    ],
  },
  {
    question: 'How does ClipMarketer help creators and influencers grow?',
    answer: [
      'Creators and influencers use ClipMarketer to:',
      { type: 'list', items: [
        'Repurpose long-form content into short-form clips',
        'Stay consistent across platforms',
        'Increase reach without increasing workload',
        'Track what content performs best',
      ]},
      'ClipMarketer acts as a professional content engine that supports long-term growth on short-form platforms.',
    ],
  },
  {
    question: 'Is ClipMarketer only for agencies?',
    answer: [
      'No. ClipMarketer is not agency-only and does not require managing clients.',
      'It is designed primarily for brands, creators, influencers, and companies that want a structured way to run Clip Marketing and social media marketing without turning content operations into a full-time job.',
    ],
  },
  {
    question: 'How does analytics work in ClipMarketer?',
    answer: [
      'ClipMarketer provides a centralized analytics dashboard that shows:',
      { type: 'list', items: [
        'Views and engagement per clip',
        'Performance across platforms',
        'Output consistency',
        'Results over time',
      ]},
      'This helps users understand what works in their short-form content marketing strategy without relying on screenshots or manual reporting.',
    ],
  },
  {
    question: 'What is Clip Marketing used for?',
    answer: [
      'Clip Marketing is commonly used for:',
      { type: 'list', items: [
        'Brand awareness',
        'Organic social media growth',
        'Personal brand building',
        'Content marketing',
        'Thought leadership',
        'Audience expansion on short-form platforms',
      ]},
      'It is especially effective when combined with podcasts and long-form video content.',
    ],
  },
  {
    question: 'How is ClipMarketer priced?',
    answer: [
      'ClipMarketer uses a performance-based pricing model designed for measurable social media marketing.',
      'Pricing is transparent and aligned with content performance, allowing brands and creators to scale short-form content output while keeping costs predictable.',
    ],
  },
  {
    question: 'Why is Clip Marketing important for social media growth?',
    answer: [
      'Short-form video is the dominant format on modern social media platforms.',
      'Clip Marketing allows brands and creators to stay visible, relevant, and consistent without producing new content daily. By repurposing long-form content into multiple short-form clips, social media marketing becomes more efficient and scalable.',
    ],
  },
  {
    question: 'How do I get started with ClipMarketer?',
    answer: [
      'Getting started with ClipMarketer is simple:',
      { type: 'list', items: [
        'Upload your long-form content',
        'Approve generated clips',
        'Track performance in the dashboard',
      ]},
      'You can book a demo or talk to the team to see how ClipMarketer fits into your social media marketing strategy.',
    ],
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="max-w-7xl mx-auto py-16 md:py-24 px-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-4">
        <div className="max-w-2xl">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm border border-indigo-200/50 shadow-sm font-medium">
                04
              </span>
              <span className="h-px w-20 bg-gradient-to-r to-transparent from-indigo-200"></span>
            </div>
            <h2 className="text-4xl lg:text-[2.75rem] text-slate-900 mb-5 font-newsreader">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Everything you need to know about ClipMarketer and Clip Marketing.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <AnimateOnScroll key={index} delay={`delay-${Math.min((index + 1) * 75, 700)}`}>
            <details className="group bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.15)_0px_25px_50px_-12px,_rgba(0,_0,_0,_0.15)_0px_15px_30px_-15px] open:border-indigo-200 open:shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50/50 transition-colors">
                <h3 className="text-base text-slate-900 font-medium pr-8">
                  {faq.question}
                </h3>
                <span className="relative flex-shrink-0 ml-auto w-5 h-5 text-slate-400 group-open:text-indigo-500 transition-colors">
                  <ChevronDown className="absolute inset-0 w-5 h-5 transform transition-transform duration-300 group-open:rotate-180" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed space-y-4">
                {faq.answer.map((item, pIndex) => {
                  if (typeof item === 'string') {
                    return <p key={pIndex}>{item}</p>
                  }
                  if (item.type === 'list') {
                    return (
                      <ul key={pIndex} className="list-disc pl-5 space-y-1">
                        {item.items.map((listItem, lIndex) => (
                          <li key={lIndex}>{listItem}</li>
                        ))}
                      </ul>
                    )
                  }
                  return null
                })}
              </div>
            </details>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}

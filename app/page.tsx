import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { ProductApproach } from '@/components/home/ProductApproach'
import { HowItWorks } from '@/components/home/HowItWorks'
import { PositioningSection } from '@/components/home/PositioningSection'
import { AgencySection } from '@/components/home/AgencySection'
import { CreatorSection } from '@/components/home/CreatorSection'
import { QualityAnalytics } from '@/components/home/QualityAnalytics'
import { PricingSection } from '@/components/home/PricingSection'
import { WhoItsFor } from '@/components/home/WhoItsFor'
import { FAQSection } from '@/components/home/FAQSection'
import { BlogPreview } from '@/components/home/BlogPreview'
import { getAllPosts } from '@/lib/blog'
import { UnicornStudioBackground } from '@/components/animations/UnicornStudioBackground'

export const metadata: Metadata = {
  title: 'ClipMarketer | Mass Social Media Advertising & Clipping for Short-Form Video',
  description:
    'ClipMarketer is a mass social media advertising and clipping platform that turns long-form videos into high-volume short-form content. Create, clip, and distribute videos at scale across TikTok, Instagram Reels, and YouTube Shorts. Built for brands, creators, and agencies that want predictable social media reach through bulk video distribution.',
  openGraph: {
    title: 'ClipMarketer | Mass Social Media Advertising & Clipping Platform',
    description:
      'Turn long-form content into scalable short-form video for mass social media advertising. Clip, distribute, and track performance across TikTok, Instagram Reels, and YouTube Shorts.',
    images: ['/images/clip-marketing.jpg'],
    type: 'website',
    siteName: 'ClipMarketer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClipMarketer | Mass Social Media Advertising & Clipping',
    description:
      'Convert long-form videos into bulk short-form content for TikTok, Instagram Reels, and YouTube Shorts. Built for scalable social media advertising and organic growth.',
    images: ['/images/clip-marketing.jpg'],
  },
}

export default function Home() {
  const posts = getAllPosts()

  return (
    <>
      {/* Full-page Unicorn Studio Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <UnicornStudioBackground projectSrc="/model-new.json" />
      </div>

      <Hero />
      <ProductApproach />
      <HowItWorks />
      <PositioningSection />
      <AgencySection />
      <CreatorSection />
      <QualityAnalytics />
      <PricingSection />
      <WhoItsFor />
      <FAQSection />
      <BlogPreview posts={posts} />
    </>
  )
}

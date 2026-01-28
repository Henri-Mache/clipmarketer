import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Blog | Video Repurposing & Short-Form Content Strategy Tips | ClipMarketer',
  description: 'Learn how to repurpose video content, turn podcasts into TikTok clips, and master short-form content strategy. Expert guides on content distribution and social media growth.',
  openGraph: {
    title: 'ClipMarketer Blog | Video Repurposing & Content Strategy',
    description: 'Expert guides on video repurposing, podcast clipping, and short-form content strategy for TikTok, Reels, and Shorts.',
    type: 'website',
  },
}

export default function ArticlesPage() {
  const posts = getAllPosts()

  return (
    <main className="relative min-h-screen pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 font-newsreader tracking-tight mb-6">
              ClipMarketer Blog
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Insights on short-form content strategy, distribution, and social media growth.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay="delay-150">
          <BlogGrid posts={posts} />
        </AnimateOnScroll>
      </div>
    </main>
  )
}

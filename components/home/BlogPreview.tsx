import { ArrowRight } from 'lucide-react'
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'
import { BlogGrid } from '@/components/blog/BlogGrid'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  coverImage: string
  readTime?: string
}

interface BlogPreviewProps {
  posts: BlogPost[]
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section id="blog" className="max-w-7xl mx-auto py-16 md:py-24 px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 p-8 md:p-12 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.15)_0px_25px_50px_-10px,_rgba(0,_0,_0,_0.1)_0px_15px_30px_-15px]">
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl text-slate-900 font-newsreader tracking-tight mb-4">
                Latest from the Blog
              </h2>
              <p className="text-slate-600">
                Insights on short-form content strategy and distribution.
              </p>
            </div>
            <a
              href="/blog"
              className="text-sm text-indigo-600 hover:text-indigo-500 flex items-center gap-2 transition-colors font-medium"
            >
              View all posts
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay="delay-150">
          <BlogGrid posts={posts.slice(0, 3)} />
        </AnimateOnScroll>
      </div>
    </section>
  )
}

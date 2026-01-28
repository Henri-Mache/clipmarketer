import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'

interface ArticleHeaderProps {
  title: string
  category: string
  author?: string
  date: string
  readTime?: string
  coverImage: string
}

export function ArticleHeader({
  title,
  category,
  author = 'David Park',
  date,
  readTime = '6 min read',
  coverImage,
}: ArticleHeaderProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-12 relative z-10">
      <div className="flex flex-col items-center text-center mb-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-semibold mb-6 hover:bg-indigo-200 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          {category}
        </a>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 font-newsreader font-semibold tracking-tight mb-6 leading-[1.1]">
          {title}
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                alt={author}
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <span className="text-slate-900 font-medium">{author}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span>{date}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span>{readTime}</span>
        </div>
      </div>

      <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-slate-200 shadow-xl shadow-slate-200/50 bg-slate-100 relative">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>
    </div>
  )
}

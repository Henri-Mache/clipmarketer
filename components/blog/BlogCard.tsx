import Image from 'next/image'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  coverImage: string
  readTime?: string
}

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  date,
  coverImage,
}: BlogCardProps) {
  return (
    <a href={`/blog/${slug}`} className="group block">
      <div className="aspect-video rounded-2xl bg-slate-100 overflow-hidden mb-4 border border-slate-200 relative shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs uppercase tracking-wider text-indigo-600 font-semibold bg-indigo-100 px-2 py-1 rounded-full">
          {category}
        </span>
        <span className="text-xs text-slate-500">{date}</span>
      </div>
      <h3 className="text-lg text-slate-900 font-medium mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-600 line-clamp-2">
        {excerpt}
      </p>
    </a>
  )
}

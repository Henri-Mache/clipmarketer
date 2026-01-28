import { BlogCard } from './BlogCard'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  coverImage: string
  readTime?: string
}

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  )
}

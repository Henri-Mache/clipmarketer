const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const baseUrl = 'https://clipmarketer.com'

function getAllBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog')

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        date: data.date,
      }
    })
}

function generateSitemap() {
  const posts = getAllBlogPosts()
  const today = new Date().toISOString().split('T')[0]

  const staticPages = [
    { url: '', changefreq: 'weekly', priority: '1.0' },
    { url: '/blog', changefreq: 'weekly', priority: '0.8' },
    { url: '/booking', changefreq: 'monthly', priority: '0.9' },
    { url: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
    { url: '/terms-of-service', changefreq: 'yearly', priority: '0.3' },
    { url: '/imprint', changefreq: 'yearly', priority: '0.3' },
    { url: '/de/impressum', changefreq: 'yearly', priority: '0.3' },
    { url: '/de/datenschutzerklaerung', changefreq: 'yearly', priority: '0.3' },
    { url: '/de/agb', changefreq: 'yearly', priority: '0.3' },
  ]

  const staticUrls = staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')

  const blogUrls = posts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticUrls}${blogUrls}
</urlset>`

  const publicDir = path.join(process.cwd(), 'public')
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)

  console.log('✓ Sitemap generated successfully at public/sitemap.xml')
}

generateSitemap()

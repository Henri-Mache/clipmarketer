# ClipMarketer Next.js

A modern Next.js application for ClipMarketer's marketing website, featuring static site generation (SSG), MDX blog content, and a beautiful dark theme with glassmorphism effects.

## Features

- **Static Site Generation**: Full static export for fast, secure hosting
- **MDX Blog**: Content managed via MDX files with frontmatter
- **Modern Design**: Dark theme with orange accents (#050505 bg, #F97215 orange)
- **Animations**: Scroll-triggered animations using Intersection Observer
- **Typography**: Custom Google Fonts (Bricolage Grotesque, DM Sans, Inter)
- **Responsive**: Mobile-first design with mobile menu

## Tech Stack

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS 3**: Utility-first styling
- **MDX**: Markdown with JSX for blog posts
- **Lucide Icons**: Beautiful icon library
- **Gray Matter**: Frontmatter parsing

## Project Structure

```
clipmarketer-nextjs/
├── app/
│   ├── blog/
│   │   ├── [slug]/page.tsx    # Dynamic blog post pages
│   │   └── page.tsx           # Blog listing page
│   ├── privacy-policy/
│   │   └── page.tsx           # Privacy policy page
│   ├── fonts.ts               # Google Fonts configuration
│   ├── globals.css            # Global styles and utilities
│   ├── layout.tsx             # Root layout
│   ├── not-found.tsx          # 404 page
│   └── page.tsx               # Home page
├── components/
│   ├── animations/
│   │   └── AnimateOnScroll.tsx
│   ├── blog/
│   │   ├── ArticleHeader.tsx
│   │   ├── BlogCard.tsx
│   │   └── BlogGrid.tsx
│   ├── home/
│   │   ├── BlogPreview.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   └── PricingSection.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Navigation.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Logo.tsx
├── content/
│   └── blog/                  # MDX blog posts
│       ├── 0-to-100k-followers-90-days.mdx
│       ├── repurpose-podcast-into-clips.mdx
│       └── tiktok-vs-shorts-vs-reels-2025.mdx
├── lib/
│   └── blog.ts                # Blog data fetching
└── public/                    # Static assets

```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

Static files will be generated in the `./out` directory.

### Preview Production Build

```bash
npx serve out
```

## Adding Blog Posts

Create a new `.mdx` file in `content/blog/` with the following frontmatter:

```mdx
---
title: "Your Post Title"
excerpt: "Brief description for previews"
category: "Strategy"
date: "2024-10-12"
author: "David Park"
coverImage: "https://images.unsplash.com/..."
readTime: "6 min read"
---

Your content here...
```

The post will automatically be:
- Added to the blog listing page
- Given a dynamic route at `/blog/[slug]`
- Included in static generation

## Deployment

The static export can be deployed to any static hosting provider:

- **Vercel**: `npm run build` (auto-detected)
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **GitHub Pages**: Copy `out` directory contents
- **Any CDN**: Upload `out` directory

## Design System

### Colors

- Background: `#050505`
- Orange Accent: `#F97215`
- Text: White with neutral grays

### Fonts

- Headings: Bricolage Grotesque
- Body: DM Sans
- Base: Inter

### Animations

- Scroll animations trigger at 10% from bottom
- Delays: 75ms increments (75ms, 150ms, 225ms, etc.)
- Fade-in with blur effect on scroll

## Performance

- Lighthouse score: 90+ (performance)
- Fully static HTML
- Optimized images via Next.js Image
- Font optimization via next/font

## License

This is a conversion of the ClipMarketer marketing website to Next.js.

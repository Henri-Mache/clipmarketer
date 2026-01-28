import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-9xl font-bricolage font-bold text-indigo-500 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bricolage font-semibold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-neutral-400 mb-8 font-dm-sans">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="primary">Go back home</Button>
        </Link>
      </div>
    </div>
  )
}

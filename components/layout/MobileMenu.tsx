'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: { href: string; label: string; sectionId: string }[]
  activeSection: string
}

export function MobileMenu({ isOpen, onClose, navLinks, activeSection }: MobileMenuProps) {
  const pathname = usePathname()

  if (!isOpen) return null

  const isActiveLink = (sectionId: string) => {
    if (sectionId === 'blog') {
      return pathname === '/blog' || pathname.startsWith('/blog/')
    }
    if (pathname !== '/') return false
    return activeSection === sectionId
  }

  return (
    <div className="fixed top-24 left-0 right-0 z-40 flex justify-center align-center px-4">
      <div className="w-[90vw] max-w-sm bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-5 shadow-xl">
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActiveLink(link.sectionId)
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={onClose}
            className="mt-2 text-center px-6 py-3 rounded-full bg-[#0F172A] text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/25"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </div>
  )
}

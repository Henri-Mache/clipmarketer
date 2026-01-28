'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/ui/Logo'
import { Menu } from 'lucide-react'
import { MobileMenu } from './MobileMenu'

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/#how-it-works', label: 'How it Works' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <>
      <nav className="animate-entry delay-75 fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex w-full max-w-5xl transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] bg-white border-white/50 border rounded-full py-2 px-2 shadow-[0_4px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl items-center">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2 pl-2 hover:opacity-80 transition-opacity">
            <div className="relative flex items-center justify-center w-8 h-8">
              <Logo />
            </div>
            <span className="text-lg text-slate-800 font-semibold tracking-tight">
              ClipMarketer
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/booking"
            className="hidden md:block text-sm text-white bg-[#0F172A] hover:bg-slate-800 rounded-full px-6 py-3 shadow-lg shadow-slate-900/20 transition-all transform hover:scale-[1.02] font-medium"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-700 p-2 mr-2 ml-auto"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks.map(l => ({ ...l, sectionId: l.href.replace('/#', '').replace('/', '') }))}
        activeSection=""
      />
    </>
  )
}

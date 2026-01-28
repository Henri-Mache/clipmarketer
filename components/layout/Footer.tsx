'use client'

import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { ArrowRight } from 'lucide-react'
import { useLocale, footerLinks } from '@/hooks/useLocale'

export function Footer() {
  const locale = useLocale()
  const links = footerLinks[locale]

  return (
    <footer className="bg-white border-t pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="overflow-hidden group md:rounded-[2.5rem] md:p-12 md:mb-24 lg:p-16 bg-[#F8F9FB] border-slate-200/60 border rounded-[2rem] mb-24 p-8 relative shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 z-10 relative items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] text-slate-900 leading-[1.1] mb-8 font-newsreader">
                Ready to Scale Your Short-Form Content?
              </h2>

              <div className="flex flex-wrap gap-4 mb-12 items-center">
                <Link
                  href="/booking"
                  className="group inline-flex items-center gap-2 bg-[#0F172A] text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/#pricing"
                  className="group inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 font-medium"
                >
                  View Pricing
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-8 border-slate-200 border-t pt-8">
                <div>
                  <div className="text-3xl text-slate-900 mb-1 font-newsreader">
                    10M+
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    Clips distributed
                  </div>
                </div>
                <div>
                  <div className="text-3xl text-slate-900 mb-1 font-newsreader">
                    500+
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    Brands & creators
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="aspect-[4/3] transform lg:translate-x-12 transition-transform hover:scale-[1.02] duration-500 overflow-hidden bg-white border-gray-200/80 border rounded-2xl relative shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">
                {/* Browser Header */}
                <div className="h-9 bg-[#F9FAFB] border-b border-gray-200 flex items-center px-4 gap-2 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="ml-3 h-5 flex-1 max-w-[140px] bg-white border border-gray-200 rounded flex items-center px-2">
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    <div className="w-12 h-1 ml-1.5 rounded-full bg-slate-100"></div>
                  </div>
                </div>

                {/* App Layout */}
                <div className="flex flex-1 h-[calc(100%-2.25rem)]">
                  {/* Sidebar */}
                  <div className="flex flex-col gap-3 shrink-0 bg-[#FCFCFD] w-14 border-gray-100 border-r pt-4 pb-4 items-center">
                    <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center mb-1">
                      <div className="w-4 h-4 text-white">
                        <Logo className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-sm bg-indigo-500/20"></div>
                    </div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center opacity-60">
                      <div className="w-4 h-4 rounded-sm bg-slate-300"></div>
                    </div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center opacity-60">
                      <div className="w-4 h-4 rounded-sm bg-slate-300"></div>
                    </div>
                    <div className="mt-auto w-6 h-6 rounded-full bg-slate-100 border border-slate-200"></div>
                  </div>

                  {/* Main Dashboard */}
                  <div className="flex-1 bg-white p-4 flex flex-col overflow-hidden relative">
                    <div className="flex justify-between items-center mb-4 shrink-0">
                      <div className="space-y-1.5">
                        <div className="h-2.5 w-20 bg-slate-900 rounded-sm"></div>
                        <div className="h-2 w-28 bg-slate-100 rounded-sm"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-7 w-7 bg-white border border-slate-200 rounded-md"></div>
                        <div className="h-7 w-16 bg-slate-900 rounded-md"></div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                        <div className="h-2 w-8 bg-slate-200 rounded mb-2"></div>
                        <div className="h-4 w-12 bg-slate-900 rounded"></div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                        <div className="h-2 w-8 bg-slate-200 rounded mb-2"></div>
                        <div className="h-4 w-10 bg-emerald-500 rounded"></div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                        <div className="h-2 w-8 bg-slate-200 rounded mb-2"></div>
                        <div className="h-4 w-14 bg-indigo-500 rounded"></div>
                      </div>
                    </div>

                    {/* Chart Mockup */}
                    <div className="flex-1 bg-slate-50 rounded-lg border border-slate-100 p-3">
                      <div className="h-full flex items-end gap-1 justify-around">
                        <div className="w-4 h-[30%] bg-indigo-200 rounded-t"></div>
                        <div className="w-4 h-[50%] bg-indigo-300 rounded-t"></div>
                        <div className="w-4 h-[40%] bg-indigo-200 rounded-t"></div>
                        <div className="w-4 h-[70%] bg-indigo-400 rounded-t"></div>
                        <div className="w-4 h-[60%] bg-indigo-300 rounded-t"></div>
                        <div className="w-4 h-[80%] bg-indigo-500 rounded-t"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row text-sm text-slate-500 gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Logo className="w-5 h-5" />
              <span className="font-medium text-slate-700">ClipMarketer</span>
            </div>
            <a
              href="mailto:hello@clipmarketer.com"
              className="text-slate-500 hover:text-slate-700 transition-colors"
            >
              hello@clipmarketer.com
            </a>
          </div>
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-slate-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p>© 2026 ClipMarketer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

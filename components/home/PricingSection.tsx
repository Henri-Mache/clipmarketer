'use client'

import { Check, ArrowRight } from 'lucide-react'
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'
import Link from 'next/link'

const features = [
  'Pay-as-you-grow (view-based billing)',
  'Prepaid wallet system for bulk campaigns',
  'Transparent pricing and per-clip cost breakdowns',
  'No long-term contracts required',
  'Full access to all platform features',
  'Priority support and onboarding',
]

export function PricingSection() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto py-16 md:py-24 px-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-4">
        <div className="max-w-2xl">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm border border-indigo-200/50 shadow-sm font-medium">
                03
              </span>
              <span className="h-px w-20 bg-gradient-to-r to-transparent from-indigo-200"></span>
            </div>
            <h2 className="text-4xl lg:text-[2.75rem] text-slate-900 mb-5 font-newsreader">
              Pay-Per-View Pricing
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Performance-aligned pricing that scales with your results. No hidden fees.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      <AnimateOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pricing Card */}
          <div className="flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 text-white stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-slate-900">
                  Performance Wallet
                </h3>
                <p className="text-slate-500 mt-1 font-medium">
                  Prepay and scale as you grow.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50/40 hover:border-gray-200 transition-colors">
                  <Check className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/booking"
              className="group w-full inline-flex items-center justify-center gap-2 bg-[#0F172A] text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 font-medium"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Stats Card - Animated */}
          <div className="flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 text-white stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-slate-900">
                  Why Performance Pricing?
                </h3>
                <p className="text-slate-500 mt-1 font-medium">
                  Aligned incentives for growth.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-gray-50/40 rounded-2xl p-6 border border-gray-100/60">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
                  <div className="text-[10px] uppercase text-slate-400 mb-2 font-medium">Avg. Cost per View</div>
                  <div className="text-2xl text-slate-900 font-newsreader flex items-baseline gap-1">
                    <span className="text-indigo-500">$</span>
                    <span className="animate-count-up">0.002</span>
                  </div>
                  <div className="text-xs text-emerald-600 bg-emerald-50 inline-flex items-center gap-1 px-2 py-0.5 rounded mt-2 font-medium">
                    <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                    Industry low
                  </div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
                  <div className="text-[10px] uppercase text-slate-400 mb-2 font-medium">Avg. ROI</div>
                  <div className="text-2xl text-slate-900 font-newsreader flex items-baseline gap-1">
                    <span className="animate-count-up">8.4</span>
                    <span className="text-indigo-500">x</span>
                  </div>
                  <div className="text-xs text-indigo-600 bg-indigo-50 inline-flex items-center gap-1 px-2 py-0.5 rounded mt-2 font-medium">
                    <span className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse"></span>
                    Verified
                  </div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
                  <div className="text-[10px] uppercase text-slate-400 mb-2 font-medium">Brands Active</div>
                  <div className="text-2xl text-slate-900 font-newsreader flex items-baseline gap-1">
                    <span className="animate-count-up">500</span>
                    <span className="text-indigo-500">+</span>
                  </div>
                  <div className="h-1 w-full bg-gray-100 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full animate-progress-bar" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
                  <div className="text-[10px] uppercase text-slate-400 mb-2 font-medium">Views Delivered</div>
                  <div className="text-2xl text-slate-900 font-newsreader flex items-baseline gap-1">
                    <span className="animate-count-up">10</span>
                    <span className="text-indigo-500">M+</span>
                  </div>
                  <div className="h-1 w-full bg-gray-100 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full animate-progress-bar" style={{ width: '90%', animationDelay: '0.3s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <p className="text-sm text-slate-600 font-medium">
                No monthly fees. Only pay when your clips perform. Start with as little as $100.
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  )
}

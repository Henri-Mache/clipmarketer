'use client'

import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

export function ProductApproach() {
  return (
    <section className="max-w-7xl mx-auto pt-16 pb-16 md:pt-24 md:pb-24 px-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-4">
        <div className="max-w-2xl">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm border border-indigo-200/50 shadow-sm font-medium">
                01
              </span>
              <span className="h-px w-20 bg-gradient-to-r to-transparent from-indigo-200"></span>
            </div>
            <h2 className="text-4xl lg:text-[2.75rem] text-slate-900 mb-5 font-newsreader">
              A Product Approach to Clip Marketing
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Connect every part of your content workflow in one unified interface. Create clips, distribute across platforms, and track performance with confidence.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Human-Crafted Clips */}
        <AnimateOnScroll>
          <div className="flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-8 h-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-slate-900">Human-Crafted Clips</h3>
                <p className="text-slate-500 mt-1 font-medium">Professional editors create engaging short-form content from your long-form videos.</p>
              </div>
            </div>

            <div className="bg-gray-50/40 rounded-2xl p-6 border border-gray-100/60">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]"></div>
                  <span className="text-sm text-slate-600 font-medium">Clip Quality Score</span>
                </div>
                <span className="text-sm text-emerald-600 font-medium">98% Approval Rate</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                  <span className="text-sm text-slate-600">Hook Strength</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[90%] h-full bg-indigo-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-slate-500">90%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                  <span className="text-sm text-slate-600">Pacing</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[95%] h-full bg-indigo-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-slate-500">95%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                  <span className="text-sm text-slate-600">Platform Fit</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[88%] h-full bg-indigo-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-slate-500">88%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Card 2: Automated Distribution */}
        <AnimateOnScroll delay="delay-100">
          <div className="flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-8 h-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-slate-900">Automated Distribution</h3>
                <p className="text-slate-500 mt-1 font-medium">Clips are posted to TikTok, Instagram Reels and YouTube Shorts automatically.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-slate-900 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.46a6.33 6.33 0 0 0 10.86 3.1 5.6 5.6 0 0 0 1.06-2.7V10.4a8.36 8.36 0 0 0 4.69 1.48V8.35a4.86 4.86 0 0 1-2.02-1.66z" />
                  </svg>
                </div>
                <div className="text-[11px] text-slate-400 mb-1 font-medium">TikTok</div>
                <div className="text-sm text-emerald-600 font-medium">Connected</div>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="text-[11px] text-slate-400 mb-1 font-medium">Reels</div>
                <div className="text-sm text-emerald-600 font-medium">Connected</div>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-red-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div className="text-[11px] text-slate-400 mb-1 font-medium">Shorts</div>
                <div className="text-sm text-emerald-600 font-medium">Connected</div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                  <span className="text-sm text-slate-700 font-medium">Next scheduled post in 2 hours</span>
                </div>
                <span className="text-xs text-indigo-600 font-medium">TikTok</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Card 3: Centralized Analytics */}
        <AnimateOnScroll>
          <div className="flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-8 h-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-slate-900">Centralized Analytics</h3>
                <p className="text-slate-500 mt-1 font-medium">Track views, engagement and clip performance in one dashboard.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="text-[11px] text-slate-400 mb-1 font-medium">Total Views</div>
                <div className="text-2xl text-slate-900 font-medium">4.2M</div>
                <div className="text-xs text-emerald-600 font-medium">+32% this month</div>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="text-[11px] text-slate-400 mb-1 font-medium">Engagement</div>
                <div className="text-2xl text-indigo-500 font-medium">8.2%</div>
                <div className="text-xs text-emerald-600 font-medium">Above average</div>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="text-[11px] text-slate-400 mb-1 font-medium">Clips Posted</div>
                <div className="text-2xl text-slate-900 font-medium">156</div>
                <div className="text-xs text-slate-400 font-medium">This month</div>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="text-[11px] text-slate-400 mb-1 font-medium">Best Platform</div>
                <div className="text-2xl text-slate-900 font-medium">TikTok</div>
                <div className="text-xs text-emerald-600 font-medium">Highest reach</div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Card 4: Simple Workflow */}
        <AnimateOnScroll delay="delay-100">
          <div className="flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-8 h-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-slate-900">Simple Workflow</h3>
                <p className="text-slate-500 mt-1 font-medium">Upload content, approve clips, track results. That's it.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-medium">1</div>
                <div>
                  <div className="text-sm text-slate-900 font-medium">Upload Long-Form Content</div>
                  <div className="text-xs text-slate-500">Podcasts, YouTube videos, interviews, webinars</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-medium">2</div>
                <div>
                  <div className="text-sm text-slate-900 font-medium">Approve Clips</div>
                  <div className="text-xs text-slate-500">Review and approve clips created by editors</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-medium">3</div>
                <div>
                  <div className="text-sm text-slate-900 font-medium">Track Results</div>
                  <div className="text-xs text-slate-500">Monitor performance across all platforms</div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

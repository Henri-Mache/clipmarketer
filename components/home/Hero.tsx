'use client'

import { useState, useRef } from 'react'
import { Play, Sparkles, X, Upload, Scissors, Send, BarChart3, CheckCircle, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  const [showDemo, setShowDemo] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleDemoClick = () => {
    setShowDemo(true)
  }

  const handleCloseDemo = () => {
    setShowDemo(false)
    setIsVideoPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
    setTimeout(() => {
      videoRef.current?.play()
    }, 100)
  }

  const handleVideoEnd = () => {
    setIsVideoPlaying(false)
  }

  return (
    <main className="flex flex-col overflow-visible max-w-7xl mx-auto pt-28 md:pt-40 pb-16 md:pb-20 relative items-center">
      {/* Floating Decorations - Left Calendar */}
      <div className="hidden lg:block absolute left-10 top-60 w-32 h-32 rotate-[-12deg] opacity-80 z-0 animate-entry delay-500">
        <div className="relative w-full h-full bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-4">
          <div className="absolute top-0 w-12 h-2 bg-gray-200 rounded-b-lg mb-2"></div>
          <div className="flex gap-4 mb-2 absolute top-[-6px]">
            <div className="w-2 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-4 bg-gray-300 rounded-full"></div>
          </div>
          <span className="text-6xl text-gray-300 font-newsreader mt-2">24</span>
        </div>
      </div>

      {/* Floating Decorations - Right Chart Cards */}
      <div className="hidden lg:block pointer-events-none z-0 w-48 h-48 absolute top-52 right-0 animate-entry delay-500">
        <div className="bg-gradient-to-br from-indigo-400 to-indigo-500 opacity-90 w-28 h-28 rounded-3xl absolute top-0 right-8 shadow-lg rotate-[10deg]"></div>
        <div className="absolute right-14 top-8 w-32 h-32 bg-white/20 backdrop-blur-xl border border-white/40 rounded-3xl flex items-end justify-center pb-4 gap-2 z-10 rotate-[5deg] shadow-[0_20px_50px_rgba(99,102,241,0.2)]">
          <div className="w-2 h-8 bg-white/40 rounded-full"></div>
          <div className="w-2 h-14 bg-white/60 rounded-full"></div>
          <div className="w-2 h-11 bg-white/40 rounded-full"></div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-10 transition-transform hover:scale-105 cursor-default animate-entry delay-100">
        <Sparkles className="w-3.5 h-3.5 text-slate-500" />
        <span className="text-xs text-slate-500 uppercase font-medium">
          POSTS TO TIKTOK · REELS · SHORTS
        </span>
      </div>

      {/* Headlines */}
      <h1 className="leading-[1.1] md:text-5xl lg:text-7xl text-4xl text-slate-900 font-newsreader text-center max-w-4xl mx-auto mb-8 px-4 animate-entry delay-200">
        Mass Social Media
        <br />
        <span className="text-slate-900 font-newsreader">
          Advertising & Clipping
        </span>
      </h1>

      <div className="text-center max-w-3xl mb-12 px-4 animate-entry delay-300">
        <p className="leading-relaxed md:text-2xl text-xl text-slate-700 font-newsreader mb-4">
          Turn long-form content into high-volume short-form video for mass social media reach.
        </p>
        <p className="leading-relaxed text-lg text-slate-500">
          ClipMarketer helps brands, creators and teams run scalable social media advertising across TikTok, Instagram Reels and YouTube Shorts. Upload once, distribute in bulk, and turn clipping into a predictable growth channel.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full mb-24 px-4 items-center justify-center animate-entry delay-400">
        <Link
          href="/booking"
          className="w-full sm:w-auto px-8 py-4 bg-[#0F172A] hover:bg-slate-800 text-white rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] transition-all transform hover:-translate-y-0.5 text-lg font-medium text-center flex items-center justify-center gap-2"
        >
          Book a Demo
          <span aria-hidden="true">→</span>
        </Link>
        <button
          onClick={handleDemoClick}
          className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-slate-900 border border-gray-200/80 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 text-lg flex items-center justify-center gap-2 font-medium"
        >
          <Play className="w-5 h-5 text-gray-400" />
          Watch Demo
        </button>
      </div>

      {/* Browser Mockup */}
      <div className="group z-10 w-full max-w-[1200px] mx-auto mb-32 px-4 relative animate-entry delay-500">
        {/* Glow behind dashboard */}
        <div
          className="-inset-1 transition-all duration-700 group-hover:opacity-50 group-hover:duration-300 group-hover:blur-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-[1.6rem] absolute blur-xl animate-gradient-move"
        ></div>

        <div className="overflow-hidden bg-white border-gray-200/80 border rounded-3xl relative shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">
          {/* Browser Header */}
          <div className="flex bg-[#F9FAFB] h-10 border-gray-200 border-b px-4 items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            </div>
            <div className="bg-white border border-gray-200 px-3 py-0.5 rounded text-[11px] text-gray-400 flex items-center gap-1 font-medium">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              app.clipmarketer.com / dashboard
            </div>
            <div className="w-10"></div>
          </div>

          {/* App Layout */}
          <div className="flex md:h-[600px] bg-white h-[500px]">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col bg-[#FCFCFD] w-64 border-gray-100 border-r p-5">
              <div className="flex items-center gap-3 mb-8">
                <div>
                  <div className="text-sm text-slate-900 font-medium">ClipMarketer</div>
                  <div className="text-xs text-slate-500 font-medium">Pro Plan</div>
                </div>
                <svg className="w-4 h-4 ml-auto text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>

              {/* Status Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] text-blue-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  TikTok
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] text-pink-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                  Reels
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-100 text-[10px] text-red-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  Shorts
                </span>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                <a className="flex items-center gap-3 px-3 py-2.5 bg-[#0F172A] text-white rounded-lg text-sm shadow-md shadow-slate-900/10 font-medium">
                  <svg className="w-4 h-4 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                    <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                  </svg>
                  Dashboard
                  <div className="w-2 h-2 ml-auto rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-gray-100 rounded-lg text-sm transition-colors font-medium">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 21v-6"></path>
                    <path d="M12 21V3"></path>
                    <path d="M19 21V9"></path>
                  </svg>
                  Analytics
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-gray-100 rounded-lg text-sm transition-colors font-medium">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <circle cx="8" cy="16" r="6"></circle>
                    <path d="M9.5 17.5 8 16.25V14"></path>
                  </svg>
                  Campaigns
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-gray-100 rounded-lg text-sm transition-colors font-medium">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Accounts
                </a>
              </nav>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 text-sm transition-colors font-medium">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  </svg>
                  Settings
                </a>
              </div>
            </aside>

            {/* Main Dashboard Area */}
            <main className="flex-1 bg-white p-6 md:p-8 overflow-y-auto">
              {/* Header */}
              <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl text-slate-900 font-newsreader">Overview</h2>
                  <p className="text-sm text-slate-500 mt-1 font-medium">Track clips, distribution, and performance.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-slate-600 shadow-sm hover:bg-gray-50 font-medium">
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    Last 30 days
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-[#0F172A] text-white rounded-lg text-sm shadow-sm hover:bg-slate-800 font-medium">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 15V3"></path>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10 5 5 5-5"></path>
                    </svg>
                    Export
                  </button>
                </div>
              </header>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Large Chart Card */}
                <div className="lg:col-span-7 bg-white rounded-xl border border-gray-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                        <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg text-slate-900 font-medium">Total Views</h3>
                        <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed font-medium">Cumulative views across all platforms.</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 uppercase font-medium">This Month</div>
                      <div className="text-lg text-slate-900 flex items-center justify-end gap-1 font-medium">
                        +24%
                        <span className="text-xs text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">MoM</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Area Chart */}
                  <div className="relative h-48 w-full">
                    <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.2"></stop>
                          <stop offset="100%" stopColor="#818CF8" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="150" x2="400" y2="150" stroke="#F1F5F9" strokeWidth="1"></line>
                      <line x1="0" y1="100" x2="400" y2="100" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4"></line>
                      <line x1="0" y1="50" x2="400" y2="50" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4"></line>
                      <path d="M0 120 C 50 120, 80 80, 120 90 C 160 100, 180 130, 220 110 C 260 90, 280 40, 320 60 C 350 75, 380 20, 400 10 L 400 150 L 0 150 Z" fill="url(#gradient)"></path>
                      <path d="M0 120 C 50 120, 80 80, 120 90 C 160 100, 180 130, 220 110 C 260 90, 280 40, 320 60 C 350 75, 380 20, 400 10" fill="none" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round"></path>
                    </svg>
                    <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                      <span>Week 1</span>
                      <span>Week 2</span>
                      <span>Week 3</span>
                      <span>Week 4</span>
                      <span>Current</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                      <span className="text-xs text-slate-500 font-medium">Projected trend</span>
                    </div>
                    <div className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 text-xs flex items-center gap-1 font-medium">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      Stable growth
                    </div>
                  </div>
                </div>

                {/* Right Column Stats */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  {/* Stats Card */}
                  <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg text-slate-900 font-medium">Live Distribution</h3>
                      <button className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 border border-gray-200 rounded px-2 py-1 bg-gray-50 font-medium">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                          <path d="M16 16h5v5"></path>
                        </svg>
                        Sync
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-6">
                      <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                        <div className="text-[10px] uppercase text-gray-400 mb-1 font-medium">Clips</div>
                        <div className="text-xl text-slate-900 font-medium">142</div>
                        <div className="text-[10px] text-emerald-600 bg-emerald-50 inline-block px-1 rounded mt-1 font-medium">+12%</div>
                      </div>
                      <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                        <div className="text-[10px] uppercase text-gray-400 mb-1 font-medium">Views</div>
                        <div className="text-xl text-slate-900 font-medium">2.4M</div>
                        <div className="text-[10px] text-emerald-600 bg-emerald-50 inline-block px-1 rounded mt-1 font-medium">+8%</div>
                      </div>
                      <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                        <div className="text-[10px] uppercase text-gray-400 mb-1 font-medium">Eng.</div>
                        <div className="text-xl text-slate-900 font-medium">8.2%</div>
                        <div className="text-[10px] text-emerald-600 bg-emerald-50 inline-block px-1 rounded mt-1 font-medium">Good</div>
                      </div>
                    </div>

                    {/* Alert Box */}
                    <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                            <path d="M12 9v4"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                          <span className="text-sm text-slate-800 font-medium">New clip ready for review</span>
                        </div>
                        <button className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-200 transition-colors font-medium">Review</button>
                      </div>
                      <p className="text-xs text-slate-500 mb-3 font-medium">Podcast Episode #42 has 3 clips pending approval.</p>
                      <div className="w-full h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 w-[75%] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="flex-1 bg-white rounded-xl border border-gray-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <div className="flex items-center gap-3 mb-4">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <div>
                        <h3 className="text-base text-slate-900 font-medium">Recent Activity</h3>
                        <p className="text-xs text-slate-500 font-medium">Latest distribution updates</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex items-center gap-3">
                          <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.46a6.33 6.33 0 0 0 10.86 3.1 5.6 5.6 0 0 0 1.06-2.7V10.4a8.36 8.36 0 0 0 4.69 1.48V8.35a4.86 4.86 0 0 1-2.02-1.66z"></path>
                          </svg>
                          <div>
                            <div className="text-xs text-slate-900 font-medium">Clip posted to TikTok</div>
                            <div className="text-[10px] text-slate-400 font-medium">2 min ago · @brandaccount</div>
                          </div>
                        </div>
                        <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded font-medium">Live</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 opacity-60">
                        <div className="flex items-center gap-3">
                          <svg className="w-4 h-4 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                          <div>
                            <div className="text-xs text-slate-900 font-medium">Scheduled for Reels</div>
                            <div className="text-[10px] text-slate-400 font-medium">In 2 hours</div>
                          </div>
                        </div>
                        <span className="text-[10px] text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded font-medium">Queued</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Demo Modal - Scrollable Layout */}
      {showDemo && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleCloseDemo}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed */}
            <button
              onClick={handleCloseDemo}
              className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors border border-gray-200"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            {/* Video Section with Thumbnail */}
            <div className="relative sticky top-0 z-10">
              {!isVideoPlaying ? (
                <div className="relative aspect-video bg-slate-100 overflow-hidden rounded-t-3xl">
                  <Image
                    src="/video-preview.jpg"
                    alt="ClipMarketer Demo"
                    fill
                    className="object-cover"
                  />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={handlePlayVideo}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-xl scale-150 group-hover:scale-[1.75] transition-transform"></div>
                      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-slate-900 ml-1" fill="currentColor" />
                      </div>
                    </button>
                  </div>

                  {/* Video info badge */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/60">
                      <p className="text-slate-900 font-medium">See ClipMarketer in Action</p>
                      <p className="text-slate-500 text-sm">2 min demo · Full workflow walkthrough</p>
                    </div>
                  </div>
                </div>
              ) : (
                <video
                  ref={videoRef}
                  src="/video.mp4"
                  className="w-full aspect-video rounded-t-3xl"
                  controls
                  autoPlay
                  onEnded={handleVideoEnd}
                />
              )}
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-10">
              {/* What ClipMarketer Does */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm border border-indigo-200/50 shadow-sm font-medium">
                    01
                  </span>
                  <span className="h-px w-12 bg-gradient-to-r to-transparent from-indigo-200"></span>
                </div>
                <h2 className="text-3xl text-slate-900 font-newsreader mb-4">What ClipMarketer Does</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  ClipMarketer is a clip marketing platform that turns your podcasts, YouTube videos, webinars, and interviews into dozens of short-form clips optimized for TikTok, Instagram Reels, and YouTube Shorts. Instead of manually editing and posting content, ClipMarketer handles the entire workflow from clipping to distribution.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-5 bg-gray-50/80 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-200/50 flex items-center justify-center flex-shrink-0">
                      <Scissors className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Human-Crafted Clips</h4>
                      <p className="text-sm text-slate-500">Professional editors identify the best moments and create platform-native clips.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gray-50/80 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-200/50 flex items-center justify-center flex-shrink-0">
                      <Send className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Automated Distribution</h4>
                      <p className="text-sm text-slate-500">Clips are automatically posted to your connected social accounts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gray-50/80 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-200/50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Quality Verification</h4>
                      <p className="text-sm text-slate-500">Every clip goes through AI-assisted quality checks and human review.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gray-50/80 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-200/50 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Centralized Analytics</h4>
                      <p className="text-sm text-slate-500">Track views, engagement, and performance across all platforms.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Process */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm border border-indigo-200/50 shadow-sm font-medium">
                    02
                  </span>
                  <span className="h-px w-12 bg-gradient-to-r to-transparent from-indigo-200"></span>
                </div>
                <h2 className="text-3xl text-slate-900 font-newsreader mb-4">The Process: From Upload to Views</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-medium flex-shrink-0 text-sm">1</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Upload Your Long-Form Content</h4>
                      <p className="text-sm text-slate-500">Upload podcasts, YouTube videos, interviews, webinars, or any video recording to ClipMarketer.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-medium flex-shrink-0 text-sm">2</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Editors Create Clips</h4>
                      <p className="text-sm text-slate-500">Our vetted editors watch your content and create 10-30 short-form clips per hour of footage, focusing on hooks, insights, and engaging moments.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-medium flex-shrink-0 text-sm">3</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Review and Approve</h4>
                      <p className="text-sm text-slate-500">Preview clips in your dashboard and approve or request edits. You stay in control of what gets posted.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-medium flex-shrink-0 text-sm">4</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Automatic Distribution</h4>
                      <p className="text-sm text-slate-500">Approved clips are scheduled and posted automatically to TikTok, Instagram Reels, and YouTube Shorts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-medium flex-shrink-0 text-sm">5</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Track Results</h4>
                      <p className="text-sm text-slate-500">Monitor views, engagement, and growth across all platforms. See which clips perform best and optimize your strategy.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Expected Outcomes */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm border border-indigo-200/50 shadow-sm font-medium">
                    03
                  </span>
                  <span className="h-px w-12 bg-gradient-to-r to-transparent from-indigo-200"></span>
                </div>
                <h2 className="text-3xl text-slate-900 font-newsreader mb-4">Expected Outcomes</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <div className="text-4xl font-newsreader text-indigo-600 mb-2">10-30x</div>
                    <p className="text-sm text-slate-600">More content output from the same production effort</p>
                  </div>
                  <div className="text-center p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <div className="text-4xl font-newsreader text-indigo-600 mb-2">Daily</div>
                    <p className="text-sm text-slate-600">Posting across platforms without daily work</p>
                  </div>
                  <div className="text-center p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <div className="text-4xl font-newsreader text-indigo-600 mb-2">Scalable</div>
                    <p className="text-sm text-slate-600">Turn clipping into a predictable growth channel</p>
                  </div>
                </div>
              </section>

              {/* Who It's For */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm border border-indigo-200/50 shadow-sm font-medium">
                    04
                  </span>
                  <span className="h-px w-12 bg-gradient-to-r to-transparent from-indigo-200"></span>
                </div>
                <h2 className="text-3xl text-slate-900 font-newsreader mb-4">Who ClipMarketer Is For</h2>

                <div className="space-y-3">
                  {[
                    'Brands and companies scaling organic reach through bulk distribution',
                    'Personal brands and course sellers growing audiences with podcast clips',
                    'Creators and influencers repurposing long-form content into daily shorts',
                    'Agencies and teams managing multiple content streams and clients',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <Check className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <div className="bg-slate-900 rounded-2xl p-8 text-center">
                <h3 className="text-2xl text-white font-newsreader mb-3">Ready to Scale Your Short-Form Content?</h3>
                <p className="text-slate-400 mb-6">Get a personalized walkthrough of how ClipMarketer can work for your content.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 rounded-xl font-medium transition-all"
                    onClick={handleCloseDemo}
                  >
                    Book a Demo Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={handleCloseDemo}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all border border-white/20"
                  >
                    Continue Exploring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

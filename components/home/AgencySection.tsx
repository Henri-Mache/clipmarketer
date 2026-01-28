'use client'

import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'
import { Check } from 'lucide-react'

const capabilities = [
  'Multiple brands or creators under one account',
  'Campaign-level performance tracking for bulk ads',
  'Centralized billing and prepaid wallets',
  'Clear reporting per brand and client',
]

const clients = [
  { name: 'TechFlow Inc.', initial: 'T', color: 'blue', campaigns: 2, views: '1.2M', growth: '+12%' },
  { name: 'Sarah Yoga', initial: 'S', color: 'purple', campaigns: 1, views: '450K', growth: '+5%' },
  { name: 'MoreClients Co.', initial: 'M', color: 'amber', campaigns: 0, views: null, status: 'Onboarding' },
]

export function AgencySection() {
  return (
    <section id="agency" className="max-w-7xl mx-auto py-16 md:py-24 px-4">
      <AnimateOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Text Card */}
          <div className="flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 text-white stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div>
                <span className="inline-block mb-2 text-[10px] uppercase text-indigo-600 bg-indigo-50 px-2 py-1 rounded font-medium tracking-wider">
                  Agency & Enterprise
                </span>
                <h3 className="text-2xl font-medium text-slate-900">
                  For Agencies Managing Clients
                </h3>
              </div>
            </div>

            <p className="text-slate-500 font-medium leading-relaxed">
              ClipMarketer is built for brands and creators, and it's also used by agencies running bulk social media advertising and clip marketing programs for clients.
            </p>

            <div className="space-y-3">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50/40 hover:border-gray-200 transition-colors">
                  <Check className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview Card - Animated */}
          <div className="flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 text-white stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-slate-900">
                  Agency Dashboard
                </h3>
                <p className="text-slate-500 mt-1 font-medium">
                  Manage all clients from one place.
                </p>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="flex-1 bg-gray-50/40 rounded-2xl border border-gray-100/60 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                </div>
                <div className="flex-1 text-center text-[10px] text-slate-400 font-medium flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  agency.clipmarketer.com
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-2.5 w-20 bg-slate-900 rounded-sm"></div>
                  <div className="h-7 w-20 bg-slate-900 rounded-md flex items-center justify-center">
                    <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span>
                  </div>
                </div>
                <div className="space-y-3">
                  {clients.map((client, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 shadow-sm transition-all hover:shadow-md animate-slide-in-right ${client.status ? 'opacity-60' : ''}`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded bg-${client.color}-100 text-${client.color}-600 flex items-center justify-center text-xs font-bold`}
                          style={{
                            backgroundColor: client.color === 'blue' ? '#dbeafe' : client.color === 'purple' ? '#f3e8ff' : '#fef3c7',
                            color: client.color === 'blue' ? '#2563eb' : client.color === 'purple' ? '#9333ea' : '#d97706'
                          }}
                        >
                          {client.initial}
                        </div>
                        <div>
                          <div className="text-sm text-slate-900 font-medium">{client.name}</div>
                          <div className="text-[10px] text-slate-500">
                            {client.status ? 'Setup in progress' : `${client.campaigns} Campaign${client.campaigns !== 1 ? 's' : ''} Active`}
                          </div>
                        </div>
                      </div>
                      {client.views ? (
                        <div className="text-right">
                          <div className="text-sm text-slate-900 font-medium">{client.views} Views</div>
                          <div className="text-[10px] text-emerald-600 bg-emerald-50 inline-flex items-center gap-1 px-1 rounded">
                            <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            {client.growth}
                          </div>
                        </div>
                      ) : (
                        <div className="text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 flex items-center gap-1">
                          <span className="w-1 h-1 bg-amber-500 rounded-full animate-pulse"></span>
                          {client.status}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  )
}

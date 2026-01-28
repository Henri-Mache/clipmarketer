export default function BookingPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-newsreader font-semibold text-slate-900 mb-4 tracking-tight">
            Book a Demo
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Schedule a call with our team to learn how ClipMarketer can help you turn long-form content into consistent short-form growth.
          </p>
        </div>

        {/* Cal.com Embed */}
        <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl p-4 md:p-8 shadow-xl shadow-slate-200/50 overflow-hidden">
          <iframe
            src="https://www.cal.eu/clipmarketer/discovery?embed=true&layout=month_view&theme=light"
            width="100%"
            height="700"
            frameBorder="0"
            className="rounded-2xl"
            allow="payment"
          />
        </div>
      </div>
    </main>
  )
}

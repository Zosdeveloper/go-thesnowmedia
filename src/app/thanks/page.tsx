export default function ThanksPage() {
  return (
    <main className="min-h-[100dvh] bg-zinc-950 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl text-center">
        <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mx-auto mb-8">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFB949"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          You&apos;re In. Here&apos;s What Happens Next.
        </h1>

        <div className="space-y-8 mt-12 text-left max-w-md mx-auto">
          <div className="flex gap-4">
            <span className="shrink-0 w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold text-sm font-bold">
              1
            </span>
            <div>
              <p className="text-white font-medium">Check your inbox</p>
              <p className="text-zinc-500 text-sm mt-1">
                You&apos;ll get a confirmation email with your call details
                within the next few minutes.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="shrink-0 w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold text-sm font-bold">
              2
            </span>
            <div>
              <p className="text-white font-medium">Watch the prep video</p>
              <p className="text-zinc-500 text-sm mt-1">
                60 seconds so we can hit the ground running on your call.
              </p>
              <div className="mt-3 aspect-video bg-zinc-900 rounded-xl border border-zinc-800/50 flex items-center justify-center">
                <p className="text-zinc-600 text-sm">Prep video coming soon</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="shrink-0 w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold text-sm font-bold">
              3
            </span>
            <div>
              <p className="text-white font-medium">
                Have these ready for the call
              </p>
              <ul className="mt-3 space-y-2.5">
                <li className="flex items-start gap-2.5 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 shrink-0 mt-1.5" />
                  Your current monthly ad spend (or marketing budget)
                </li>
                <li className="flex items-start gap-2.5 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 shrink-0 mt-1.5" />
                  Your biggest lead source right now
                </li>
                <li className="flex items-start gap-2.5 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 shrink-0 mt-1.5" />
                  Monthly revenue (rough number is fine)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Calendly placeholder */}
        <div className="mt-14 p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800/50">
          <p className="text-white font-medium mb-2">
            Pick a time that works for you
          </p>
          <p className="text-zinc-500 text-sm mb-6">
            If you haven&apos;t booked yet, choose a slot below.
          </p>
          {/* TODO: Integrate Calendly inline widget */}
          <div className="h-[400px] bg-zinc-900 rounded-xl border border-zinc-800/30 flex items-center justify-center">
            <p className="text-zinc-600 text-sm">
              Calendly integration placeholder
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

'use client'

interface AttentionBarProps {
  children: React.ReactNode
}

export default function AttentionBar({ children }: AttentionBarProps) {
  return (
    <div className="w-full bg-brand-maroon text-white">
      <div className="max-w-6xl mx-auto px-4 py-2.5 text-center text-[11px] md:text-xs font-sans font-bold uppercase tracking-[0.18em]">
        {children}
      </div>
    </div>
  )
}

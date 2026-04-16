'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface Metric {
  value: string
  label: string
}

interface SocialProofCardProps {
  client: string
  industry: string
  metrics: Metric[]
  featured?: boolean
}

export default function SocialProofCard({
  client,
  industry,
  metrics,
  featured = false,
}: SocialProofCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const spotlightX = useSpring(mouseX, { stiffness: 200, damping: 30 })
  const spotlightY = useSpring(mouseY, { stiffness: 200, damping: 30 })
  const spotlightOpacity = useMotionValue(0)

  const background = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,185,73,0.06), transparent 70%)`
  )

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
    spotlightOpacity.set(1)
  }

  function handleMouseLeave() {
    spotlightOpacity.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`relative rounded-2xl border p-8 overflow-hidden h-full ${
        featured
          ? 'bg-zinc-900/80 border-brand-gold/20 shadow-[0_20px_40px_-15px_rgba(9,9,11,0.5)]'
          : 'bg-zinc-900/50 border-zinc-800/50 shadow-[0_20px_40px_-15px_rgba(9,9,11,0.4)]'
      }`}
    >
      {/* Spotlight follow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{ background, opacity: spotlightOpacity }}
      />

      <div className="relative z-10">
        <p className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-1">
          {industry}
        </p>
        <h3 className="text-xl font-bold text-white mb-6">{client}</h3>
        <div className="space-y-4">
          {metrics.map((metric, i) => (
            <div key={i} className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-brand-gold tabular-nums">
                {metric.value}
              </span>
              <span className="text-sm text-zinc-500">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

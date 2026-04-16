'use client'

import { motion } from 'framer-motion'

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`relative h-full bg-white border p-8 md:p-10 ${
        featured
          ? 'border-brand-maroon/20 border-l-[6px] border-l-brand-maroon shadow-[0_18px_40px_-24px_rgba(20,20,20,0.25)]'
          : 'border-black/10 shadow-[0_12px_28px_-22px_rgba(20,20,20,0.18)]'
      }`}
    >
      <p className="text-xs font-semibold text-brand-maroon uppercase tracking-[0.2em] mb-2">
        {industry}
      </p>
      <h3 className="font-display font-extrabold text-2xl md:text-3xl text-brand-ink mb-8">
        {client}
      </h3>

      <div className="divide-y divide-black/10">
        {metrics.map((metric, i) => (
          <div key={i} className="flex items-baseline gap-4 py-4 first:pt-0 last:pb-0">
            <span className="font-display font-extrabold text-3xl md:text-4xl text-brand-green tabular-nums leading-none">
              {metric.value}
            </span>
            <span className="text-sm md:text-base text-brand-ink/65 leading-snug">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

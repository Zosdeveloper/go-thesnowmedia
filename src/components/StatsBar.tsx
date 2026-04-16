'use client'

import { motion } from 'framer-motion'

interface Stat {
  value: string
  label: string
}

interface StatsBarProps {
  stats: Stat[]
  theme?: 'light' | 'dark'
}

export default function StatsBar({ stats, theme = 'light' }: StatsBarProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className={`w-full border-y ${
        isDark
          ? 'border-white/10 bg-brand-ink'
          : 'border-black/10 bg-brand-paper'
      }`}
    >
      <div
        className={`max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x md:divide-y-0 ${
          isDark ? 'divide-white/10' : 'divide-black/10'
        }`}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.06 }}
            className="px-5 py-7 md:px-8 md:py-10 text-center"
          >
            <div
              className={`font-display font-extrabold text-3xl md:text-5xl tabular-nums leading-none mb-2 ${
                isDark ? 'text-brand-gold' : 'text-brand-maroon'
              }`}
            >
              {stat.value}
            </div>
            <div
              className={`text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] ${
                isDark ? 'text-white/60' : 'text-brand-ink/60'
              }`}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'

interface AccentHeadlineProps {
  gold: string
  black: string
}

export default function AccentHeadline({ gold, black }: AccentHeadlineProps) {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="font-display italic text-brand-gold-deep text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] font-semibold"
      >
        &ldquo;{gold}&rdquo;
      </motion.p>
      <motion.h3
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="font-display font-extrabold text-brand-ink text-[clamp(1.6rem,3.2vw,2.75rem)] leading-[1.15] mt-4"
      >
        {black}
      </motion.h3>
    </div>
  )
}

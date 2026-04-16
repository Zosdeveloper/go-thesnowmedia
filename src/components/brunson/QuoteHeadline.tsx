'use client'

import { motion } from 'framer-motion'

interface QuoteHeadlineProps {
  children: React.ReactNode
  size?: 'md' | 'lg' | 'xl'
}

export default function QuoteHeadline({
  children,
  size = 'lg',
}: QuoteHeadlineProps) {
  const sizes = {
    md: 'text-[clamp(1.5rem,3vw,2.25rem)]',
    lg: 'text-[clamp(1.75rem,4vw,3.5rem)]',
    xl: 'text-[clamp(2rem,5vw,4.5rem)]',
  }

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 80, damping: 22 }}
      className={`font-display font-extrabold text-brand-ink leading-[1.08] text-center max-w-4xl mx-auto ${sizes[size]}`}
    >
      &ldquo;{children}&rdquo;
    </motion.h2>
  )
}

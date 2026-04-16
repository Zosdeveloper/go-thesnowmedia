'use client'

import { motion } from 'framer-motion'

interface EventBlockProps {
  label: string
  title: string
  photo: string
  photoAlt: string
  children: React.ReactNode
  reversed?: boolean
}

export default function EventBlock({
  label,
  title,
  photo,
  photoAlt,
  children,
  reversed = false,
}: EventBlockProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="inline-block bg-brand-tan-dark text-white px-8 md:px-10 py-4 md:py-5 rounded-t-xl mx-auto block max-w-3xl text-center shadow-[0_14px_30px_-12px_rgba(0,0,0,0.3)]"
      >
        <p className="font-display font-bold text-brand-gold text-xs md:text-sm uppercase tracking-[0.2em]">
          {label}
        </p>
        <h3 className="font-display font-extrabold text-white text-2xl md:text-[32px] leading-tight mt-1">
          {title}
        </h3>
      </motion.div>

      <div
        className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mt-10 md:mt-12 ${
          reversed ? 'md:[direction:rtl]' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: reversed ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="md:col-span-6 md:[direction:ltr]"
        >
          <img
            src={photo}
            alt={photoAlt}
            className="w-full rounded-xl shadow-[0_24px_50px_-20px_rgba(0,0,0,0.3)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reversed ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.08 }}
          className="md:col-span-6 md:[direction:ltr] text-brand-ink/85 text-base md:text-lg leading-[1.75] space-y-4"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import CTAButton from '@/components/CTAButton'

interface BrunsonCTABandProps {
  preline: string
  headline: string
  ctaText: string
  ctaSubline?: string
  ctaHref: string
  photo: string
  photoAlt: string
  reversed?: boolean
}

export default function BrunsonCTABand({
  preline,
  headline,
  ctaText,
  ctaSubline,
  ctaHref,
  photo,
  photoAlt,
  reversed = false,
}: BrunsonCTABandProps) {
  return (
    <section
      className="relative py-16 md:py-24 px-6"
      style={{ backgroundColor: '#1a1411' }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, rgba(220,194,133,0.15), transparent 60%)',
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center ${
            reversed ? 'md:[direction:rtl]' : ''
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="md:[direction:ltr]"
          >
            <img
              src={photo}
              alt={photoAlt}
              className="w-full rounded-xl border border-white/10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="text-white md:[direction:ltr]"
          >
            <p className="font-display font-bold text-brand-gold uppercase tracking-[0.15em] text-xs md:text-sm">
              {preline}
            </p>
            <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] mt-3">
              {headline}
            </h2>
            <div className="mt-8">
              <CTAButton text={ctaText} subline={ctaSubline} href={ctaHref} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

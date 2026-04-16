'use client'

import { motion } from 'framer-motion'
import VideoEmbed from '@/components/VideoEmbed'
import CTAButton from '@/components/CTAButton'

interface BrunsonHeroProps {
  preHeadline: string
  headline: React.ReactNode
  accentHeadline: string
  subline?: string
  ctaText: string
  ctaSubline?: string
  ctaHref: string
  bgImage: string
}

export default function BrunsonHero({
  preHeadline,
  headline,
  accentHeadline,
  subline,
  ctaText,
  ctaSubline,
  ctaHref,
  bgImage,
}: BrunsonHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Dark-overlaid photo background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-14 pb-20 md:pt-20 md:pb-28 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-display font-bold uppercase tracking-[0.1em] text-sm md:text-[22px] leading-tight"
        >
          {preHeadline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-extrabold uppercase tracking-tight text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.05] mt-3"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="font-display font-extrabold text-brand-gold text-[clamp(2rem,6vw,5rem)] leading-[1.05] mt-2 italic"
        >
          &ldquo;{accentHeadline}&rdquo;
        </motion.p>

        {subline && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-white/80 mt-8 max-w-[62ch] mx-auto leading-relaxed"
          >
            {subline}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 md:mt-12 max-w-3xl mx-auto"
        >
          <VideoEmbed />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 md:mt-10 flex justify-center"
        >
          <CTAButton text={ctaText} subline={ctaSubline} href={ctaHref} />
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import CTAButton from '@/components/CTAButton'

interface SignoffProps {
  intro: React.ReactNode
  portrait: string
  name: string
  title: string
  ctaText: string
  ctaSubline?: string
  ctaHref: string
}

export default function Signoff({
  intro,
  portrait,
  name,
  title,
  ctaText,
  ctaSubline,
  ctaHref,
}: SignoffProps) {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 100, damping: 22 }}
        src={portrait}
        alt={name}
        className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover mx-auto border-4 border-brand-gold shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]"
      />
      <div className="mt-8 text-brand-ink/85 text-lg md:text-xl leading-[1.75] space-y-4 text-left max-w-2xl mx-auto">
        {intro}
      </div>
      <p
        className="mt-8 font-display italic text-brand-ink text-3xl md:text-4xl"
        style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
      >
        {name}
      </p>
      <p className="text-brand-ink/55 text-sm mt-1">{title}</p>
      <div className="mt-12 flex justify-center">
        <CTAButton text={ctaText} subline={ctaSubline} href={ctaHref} />
      </div>
    </div>
  )
}

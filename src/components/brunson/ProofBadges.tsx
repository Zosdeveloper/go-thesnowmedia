'use client'

import { motion } from 'framer-motion'
import CTAButton from '@/components/CTAButton'

interface Badge {
  value: string
  label: string
}

interface ProofBadgesProps {
  headline: string
  subhead: string
  badges: Badge[]
  ctaText: string
  ctaSubline?: string
  ctaHref: string
  footerLine?: string
  bgImage?: string
}

export default function ProofBadges({
  headline,
  subhead,
  badges,
  ctaText,
  ctaSubline,
  ctaHref,
  footerLine,
  bgImage,
}: ProofBadgesProps) {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: bgImage
            ? `linear-gradient(rgba(20,12,8,0.88), rgba(20,12,8,0.92)), url(${bgImage})`
            : 'linear-gradient(180deg, #1a1208 0%, #2a1a0d 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center text-white">
        <h2 className="font-display font-extrabold uppercase text-[clamp(1.75rem,3.8vw,3rem)] leading-[1.1]">
          {headline}
        </h2>
        <p className="text-brand-gold text-base md:text-lg mt-4 max-w-[60ch] mx-auto leading-relaxed">
          {subhead}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mt-14 md:mt-16">
          {badges.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 22,
                delay: i * 0.08,
              }}
              className="flex flex-col items-center"
            >
              <div
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, #4a3a1f 0%, #1a1208 70%)',
                  boxShadow:
                    'inset 0 2px 4px rgba(255,215,150,0.25), inset 0 -4px 10px rgba(0,0,0,0.6), 0 10px 30px -8px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(220,194,133,0.35)',
                }}
              >
                <span className="font-display font-extrabold text-4xl md:text-5xl text-white tabular-nums leading-none">
                  {b.value}
                </span>
              </div>
              <p className="mt-5 text-brand-gold text-sm md:text-base font-semibold leading-snug max-w-[18ch]">
                {b.label}
              </p>
            </motion.div>
          ))}
        </div>

        {footerLine && (
          <p className="text-white/85 text-base md:text-lg italic mt-14 md:mt-16 max-w-[60ch] mx-auto leading-relaxed">
            {footerLine}
          </p>
        )}

        <div className="mt-10 flex justify-center">
          <CTAButton text={ctaText} subline={ctaSubline} href={ctaHref} />
        </div>
      </div>
    </section>
  )
}

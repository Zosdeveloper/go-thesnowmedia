'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

interface CTAButtonProps {
  text: string
  href: string
  subtext?: string
  variant?: 'maroon' | 'green'
  className?: string
}

export default function CTAButton({
  text,
  href,
  subtext,
  variant = 'maroon',
  className = '',
}: CTAButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.12)
    y.set((e.clientY - cy) * 0.12)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const color =
    variant === 'green'
      ? 'bg-brand-green hover:bg-brand-green-hover'
      : 'bg-brand-maroon hover:bg-brand-maroon-hover'

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      <motion.a
        href={href}
        style={{ x: springX, y: springY }}
        whileTap={{ scale: 0.98, y: 1 }}
        className={`group relative inline-flex items-center justify-center gap-3 ${color} text-white font-display font-extrabold uppercase tracking-wide py-5 px-10 text-base md:text-lg rounded-md cursor-pointer w-full md:w-auto border-b-[3px] border-black/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_-8px_rgba(154,50,61,0.45)] transition-all duration-200`}
      >
        <span>{text}</span>
        <ArrowRight
          size={22}
          weight="bold"
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </motion.a>
      {subtext && (
        <div className="mt-3 bg-brand-gold/95 text-brand-ink text-xs md:text-sm font-semibold uppercase tracking-wider text-center py-2 px-4 rounded-sm border-b-2 border-brand-gold-dark">
          {subtext}
        </div>
      )}
    </div>
  )
}

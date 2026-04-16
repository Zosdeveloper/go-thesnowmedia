'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface CTAButtonProps {
  text: string
  subline?: string
  href: string
  className?: string
  size?: 'md' | 'lg'
}

export default function CTAButton({
  text,
  subline,
  href,
  className = '',
  size = 'lg',
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
    x.set((e.clientX - cx) * 0.1)
    y.set((e.clientY - cy) * 0.1)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const padding = size === 'lg' ? 'py-6 px-12' : 'py-4 px-8'
  const mainText = size === 'lg' ? 'text-xl md:text-3xl' : 'text-base md:text-xl'
  const subText = size === 'lg' ? 'text-xs md:text-sm' : 'text-[10px] md:text-xs'

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
        whileTap={{ scale: 0.98 }}
        className={`group block bg-brand-maroon hover:bg-brand-maroon-hover text-white text-center rounded-xl ${padding} cursor-pointer transition-colors duration-200 border-b-[3px] border-black/25`}
      >
        <div
          className={`font-display font-extrabold uppercase tracking-wide ${mainText} leading-[1.1]`}
        >
          {text}
        </div>
        {subline && (
          <div
            className={`${subText} font-sans font-normal uppercase tracking-[0.12em] text-white/85 mt-2 leading-tight`}
          >
            {subline}
          </div>
        )}
      </motion.a>
    </div>
  )
}

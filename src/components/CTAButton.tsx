'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

interface CTAButtonProps {
  text: string
  href: string
  className?: string
}

export default function CTAButton({
  text,
  href,
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
    x.set((e.clientX - cx) * 0.15)
    y.set((e.clientY - cy) * 0.15)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

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
        whileTap={{ scale: 0.97, y: 1 }}
        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-brand-gold to-amber-500 text-zinc-950 font-bold py-5 px-10 text-lg rounded-xl cursor-pointer w-full md:w-auto justify-center border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_8px_24px_rgba(0,0,0,0.4)] hover:brightness-110"
      >
        <span>{text}</span>
        <ArrowRight
          size={22}
          weight="bold"
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </motion.a>
    </div>
  )
}

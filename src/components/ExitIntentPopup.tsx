'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from '@phosphor-icons/react'

interface ExitIntentPopupProps {
  guideName: string
  headline: string
  description: string
  ctaText: string
}

export default function ExitIntentPopup({
  guideName,
  headline,
  description,
  ctaText,
}: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (
      e.clientY <= 0 &&
      !sessionStorage.getItem('exitPopupShown')
    ) {
      setIsVisible(true)
      sessionStorage.setItem('exitPopupShown', 'true')
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseLeave])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: Send to n8n webhook or API route
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-zinc-950/80 backdrop-blur-sm"
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              <X size={20} weight="bold" />
            </button>

            {!submitted ? (
              <>
                <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
                  {guideName}
                </p>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {headline}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {description}
                </p>
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-gold/50 text-sm"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-gradient-to-r from-brand-gold to-amber-500 text-zinc-950 font-bold px-5 py-3 rounded-xl text-sm cursor-pointer hover:shadow-[0_0_30px_rgba(255,185,73,0.3)] transition-shadow"
                  >
                    {ctaText}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <p className="text-brand-gold text-lg font-semibold mb-2">
                  Check your inbox.
                </p>
                <p className="text-zinc-400 text-sm">
                  The guide is on its way.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

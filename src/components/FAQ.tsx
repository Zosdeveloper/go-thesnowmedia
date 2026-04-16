'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from '@phosphor-icons/react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="w-full max-w-3xl mx-auto divide-y divide-black/10 border-y border-black/10">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
            >
              <span
                className={`font-display font-extrabold text-lg md:text-xl pr-8 transition-colors duration-200 ${
                  open ? 'text-brand-maroon' : 'text-brand-ink group-hover:text-brand-maroon'
                }`}
              >
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                className="shrink-0"
              >
                {open ? (
                  <Minus size={22} weight="bold" className="text-brand-maroon" />
                ) : (
                  <Plus size={22} weight="bold" className="text-brand-ink/60" />
                )}
              </motion.div>
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 26 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-brand-ink/75 text-base md:text-lg leading-relaxed max-w-[65ch]">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

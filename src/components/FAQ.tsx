'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretDown } from '@phosphor-icons/react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="w-full max-w-3xl mx-auto">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={`border-b border-zinc-800/70 transition-colors duration-300 ${
            openIndex === i ? 'bg-zinc-900/30 -mx-4 px-4 rounded-xl border-transparent' : ''
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
          >
            <span
              className={`text-lg font-semibold pr-8 transition-colors duration-200 ${
                openIndex === i
                  ? 'text-brand-gold'
                  : 'text-white group-hover:text-brand-gold'
              }`}
            >
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <CaretDown
                size={20}
                weight="bold"
                className={`shrink-0 transition-colors duration-200 ${
                  openIndex === i ? 'text-brand-gold' : 'text-zinc-500'
                }`}
              />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-zinc-400 leading-relaxed max-w-[65ch]">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

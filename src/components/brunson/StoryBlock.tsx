'use client'

import { motion } from 'framer-motion'

interface StoryBlockProps {
  children: React.ReactNode
  photo: string
  photoAlt: string
  reversed?: boolean
  caption?: string
}

export default function StoryBlock({
  children,
  photo,
  photoAlt,
  reversed = false,
  caption,
}: StoryBlockProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div
        className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start ${
          reversed ? 'md:[direction:rtl]' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="md:col-span-7 md:[direction:ltr] text-brand-ink/85 text-[17px] md:text-lg leading-[1.75] space-y-5"
        >
          {children}
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 20,
            delay: 0.1,
          }}
          className="md:col-span-5 md:[direction:ltr]"
        >
          <img
            src={photo}
            alt={photoAlt}
            className="w-full rounded-lg shadow-[0_24px_50px_-20px_rgba(0,0,0,0.3)]"
          />
          {caption && (
            <figcaption className="mt-3 text-xs md:text-sm text-brand-ink/55 italic text-center">
              {caption}
            </figcaption>
          )}
        </motion.figure>
      </div>
    </div>
  )
}

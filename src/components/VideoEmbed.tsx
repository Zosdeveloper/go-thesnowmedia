'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from '@phosphor-icons/react'

interface VideoEmbedProps {
  videoId?: string
  platform?: 'vimeo' | 'wistia'
  thumbnailUrl?: string
}

export default function VideoEmbed({
  videoId,
  platform = 'vimeo',
  thumbnailUrl,
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const videoSrc =
    platform === 'vimeo'
      ? `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`
      : `https://fast.wistia.net/embed/iframe/${videoId}?autoplay=true`

  return (
    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/50 shadow-[0_20px_40px_-15px_rgba(9,9,11,0.6)]">
      {/* Subtle grid pattern for empty state */}
      {!thumbnailUrl && !isPlaying && (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,185,73,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,185,73,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      )}

      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => videoId && setIsPlaying(true)}
            className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer group"
          >
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-zinc-950/30" />

            {/* Play button with inner shadow treatment, no outer glow */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold/90 border border-white/20 shadow-[inset_0_2px_0_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:brightness-110"
            >
              <Play size={32} weight="fill" className="text-zinc-950 ml-1" />
            </motion.div>

            {!videoId && (
              <div className="absolute bottom-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold/40 animate-pulse" />
                <p className="text-zinc-500 text-sm">Video coming soon</p>
              </div>
            )}
          </motion.button>
        )}
      </AnimatePresence>
      {isPlaying && videoId && (
        <iframe
          src={videoSrc}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}
    </div>
  )
}

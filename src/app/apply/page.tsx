'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

export default function ApplyPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    challenge: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Send form data to API (n8n webhook, email notification, CRM)
    await new Promise((resolve) => setTimeout(resolve, 800))
    router.push('/thanks')
  }

  const inputClasses =
    'w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-colors'

  return (
    <main className="min-h-[100dvh] bg-zinc-950 flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="w-full max-w-xl"
      >
        <div className="text-center mb-10">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-4">
            Free Strategy Call
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Let&apos;s See If We&apos;re a Fit
          </h1>
          <p className="text-zinc-400 text-lg max-w-md mx-auto">
            Answer 5 quick questions so we can prepare your custom strategy.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClasses}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className={inputClasses}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-300">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="Your business name"
              className={inputClasses}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-300">
              Annual Revenue Range
            </label>
            <select
              name="revenue"
              required
              value={formData.revenue}
              onChange={handleChange}
              className={`${inputClasses} cursor-pointer`}
            >
              <option value="">Select a range</option>
              <option value="under-500k">Under $500K</option>
              <option value="500k-1m">$500K - $1M</option>
              <option value="1m-3m">$1M - $3M</option>
              <option value="3m-plus">$3M+</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-300">
              What&apos;s your biggest bottleneck with leads right now?
            </label>
            <textarea
              name="challenge"
              required
              value={formData.challenge}
              onChange={handleChange}
              rows={3}
              placeholder="Two sentences is plenty."
              className={`${inputClasses} resize-none`}
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileTap={{ scale: 0.97 }}
            className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-gold to-amber-500 text-zinc-950 font-bold py-5 px-10 text-lg rounded-xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,185,73,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <span>Book My Free Strategy Call</span>
                <ArrowRight
                  size={22}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </>
            )}
          </motion.button>

          <p className="text-center text-sm text-zinc-600">
            No obligation. No credit card. Just a conversation about your
            growth.
          </p>
        </form>
      </motion.div>
    </main>
  )
}

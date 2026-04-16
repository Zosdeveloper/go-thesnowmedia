'use client'

import CTAButton from '@/components/CTAButton'
import VideoEmbed from '@/components/VideoEmbed'
import FAQ from '@/components/FAQ'
import SocialProofCard from '@/components/SocialProofCard'
import AnimatedSection from '@/components/AnimatedSection'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from '@phosphor-icons/react'

const faqItems = [
  {
    question: 'Does AI actually work for home services?',
    answer:
      'Yes. Contractors are one of the best fits because the problem is simple: missed calls and slow follow-up cost real money. AI solves both without changing how your crew operates.',
  },
  {
    question: 'What if I already have a receptionist?',
    answer:
      'The system handles overflow, after-hours, and weekends. Your receptionist keeps doing what they do. This catches everything they cannot.',
  },
  {
    question: "I'm not technical. How much of my time does this take?",
    answer:
      'About 30 minutes for onboarding. After that, zero. I build, maintain, and optimize everything. You just check the dashboard.',
  },
  {
    question: 'How fast can this be running?',
    answer:
      'Most contractors are live within 7 to 14 days. I handle all the setup.',
  },
  {
    question: 'What does it cost?',
    answer:
      "Pricing depends on which parts of the system you need. I'll cover that on the strategy call after I understand your business. No surprises.",
  },
]

const mechanisms = [
  {
    name: 'The After-Hours Revenue Recovery System',
    description:
      'Answers every call 24/7, qualifies the lead, and books the estimate on your calendar. No more jobs lost to voicemail.',
  },
  {
    name: 'The Silent Closer',
    description:
      'Follows up on every unsold estimate automatically until they book or say no. Persistent, professional, never forgets.',
  },
  {
    name: 'The Dormant Revenue Reactivator',
    description:
      "Re-engages past customers and dormant accounts who haven't called in over a year. Revenue sitting untouched in your existing database.",
  },
  {
    name: 'The Growth Scoreboard',
    description:
      "See every lead, call, and booking in one place. Know exactly what's working and what needs attention, every single day.",
  },
]

const beforeItems = [
  'Missed calls after 5pm go straight to voicemail',
  'Estimates sent out and never followed up',
  '$200+ leads going cold because response is slow',
  'No idea which marketing is actually working',
  'Past customers forgotten in an old spreadsheet',
]

const afterItems = [
  'Every call answered, 24/7, including holidays',
  'Every estimate followed up automatically until they book',
  'Leads responded to in under 60 seconds',
  'Live dashboard showing every lead and booking',
  'Past customers re-engaged and coming back',
]

export default function ContractorsPage() {
  return (
    <main className="bg-zinc-950 text-white font-sans overflow-x-hidden">
      {/* ─── EXIT INTENT ──────────────────────────────────────────── */}
      <ExitIntentPopup
        guideName="Free Guide"
        headline="Not Ready for a Call?"
        description="Get the free breakdown: 5 Revenue Leaks Costing Contractors $10K+ Per Month. Delivered to your inbox in 60 seconds."
        ctaText="Send It"
      />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="min-h-[100dvh] flex items-center bg-zinc-950 py-20 md:py-28 px-6">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-6"
              >
                For contractors doing $500K+ per year
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.08] text-white"
              >
                How Contractors Are Recovering{' '}
                <span className="text-brand-gold">$15K+ Per Month</span> in
                Lost Revenue Without Hiring a Single Person
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="text-lg md:text-xl text-zinc-400 mt-6 max-w-[55ch] leading-relaxed"
              >
                Discover the system 107 service businesses use to stop losing
                jobs to voicemail and start booking estimates around the clock.
                Setup takes 30 minutes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="mt-8"
              >
                <CTAButton
                  text="See If You Qualify"
                  href="/apply"
                  className="w-full md:w-auto"
                />
                <p className="text-sm text-zinc-600 mt-4">
                  We partner with 3 new contractors per month. Spots for May are
                  filling.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 self-center"
            >
              <VideoEmbed />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── PROBLEM AGITATION ────────────────────────────────────── */}
      <AnimatedSection className="bg-zinc-900 py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-12">
            The Revenue You&apos;re Leaving on the Table
          </p>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="relative pl-0 md:pl-8"
            >
              <span className="block text-6xl font-bold text-zinc-800 leading-none mb-4 select-none">
                01
              </span>
              <h2 className="text-2xl font-bold text-white mb-3">
                Missed Calls, Lost Jobs
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-[60ch]">
                Every missed call is a $3,000 to $15,000 job walking straight to
                your competitor. Not because they&apos;re better. Because they
                answered. Your crew is on a roof. Your office manager is on
                another line. The homeowner calls the next company on the list.
                This happens 10 to 20 times a month for most contractors we talk
                to.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 20,
                delay: 0.05,
              }}
              className="relative pl-0 md:pl-16"
            >
              <span className="block text-6xl font-bold text-zinc-800 leading-none mb-4 select-none">
                02
              </span>
              <h2 className="text-2xl font-bold text-white mb-3">
                Unsold Estimates Sitting in a Drawer
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-[60ch]">
                40% of the homeowners who got a quote but did not book are still
                interested. Nobody follows up because your team is busy running
                jobs. That backlog is worth $50K to $200K in recoverable revenue
                sitting untouched.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 20,
                delay: 0.1,
              }}
              className="relative pl-0 md:pl-8"
            >
              <span className="block text-6xl font-bold text-zinc-800 leading-none mb-4 select-none">
                03
              </span>
              <h2 className="text-2xl font-bold text-white mb-3">
                Expensive Leads Going Cold
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-[60ch]">
                You&apos;re paying $150 to $400 per lead from Google Ads, and
                half of them go cold because the follow-up is slow. The leads
                are not the problem. The speed is.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── EPIPHANY BRIDGE + ATTRACTIVE CHARACTER ───────────────── */}
      <AnimatedSection className="bg-zinc-950 py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            {/* Replace with real headshot: <img src="/milos.jpg" ... /> */}
            <div className="w-14 h-14 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center shrink-0">
              <span className="text-brand-gold font-bold text-lg">M</span>
            </div>
            <div>
              <p className="text-white font-semibold text-lg">Milos</p>
              <p className="text-zinc-500 text-sm">Founder, Snow Media</p>
            </div>
          </div>

          <div className="space-y-5 text-zinc-300 leading-relaxed text-lg border-l border-zinc-800/60 pl-8">
            <p>
              Over the past six years, I&apos;ve managed ad campaigns for over
              100 service businesses, including contractors in plumbing, HVAC,
              roofing, and solar.
            </p>
            <p>
              Here&apos;s what I kept seeing: the campaigns were working. The
              leads were coming in. But the revenue wasn&apos;t matching the
              lead volume. So I started pulling call logs and matching them
              against ad data. What I found was the same pattern, over and over.
              Leads calling after 5pm, going to voicemail. Estimates sent out
              and never followed up. Past customers who hadn&apos;t been
              contacted in over a year. The money was there. Nobody was picking
              it up.
            </p>
            <p>
              The problem was never the ads. It was the 16 hours a day when
              nobody was answering the phone, and the follow-up that never
              happened.
            </p>
            <p className="text-white font-medium text-xl">
              That&apos;s when I built The Growth System. Not another ad
              strategy. A system that makes sure every lead gets answered, every
              estimate gets followed up, and every past customer gets
              re-engaged. Automatically.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── BIG DOMINO ───────────────────────────────────────────── */}
      <AnimatedSection className="bg-zinc-900 py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="bg-brand-gold/5 rounded-2xl p-10 border-l-2 border-brand-gold"
          >
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
              The contractor who responds fastest wins the job. Not the best
              contractor, not the cheapest. The fastest. AI makes you the
              fastest 24 hours a day, 365 days a year.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      <div className="section-divider" />

      {/* ─── SOCIAL PROOF (moved before solution) ─────────────────── */}
      <AnimatedSection className="bg-zinc-950 py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-zinc-500 mb-8 text-center">
            Results from campaigns I&apos;ve managed. Real clients, exact
            metrics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:row-span-2">
              <SocialProofCard
                client="PlugPV"
                industry="Solar / Energy"
                metrics={[
                  { value: '230%', label: 'boost in qualified leads' },
                  { value: '36%', label: 'lower cost per lead' },
                  { value: '52%', label: 'increase in website traffic' },
                ]}
                featured
              />
            </div>
            <SocialProofCard
              client="BMS Moving & Storage"
              industry="Moving / Storage"
              metrics={[
                { value: '70%', label: 'uplift in qualified leads' },
                { value: '58%', label: 'reduction in cost per lead' },
                { value: '222%', label: 'boost in conversion rate' },
              ]}
            />
            <SocialProofCard
              client="SPEAR Physical Therapy"
              industry="Health Services"
              metrics={[
                { value: '63%', label: 'increase in bookings' },
                { value: '16%', label: 'decrease in cost per acquisition' },
                { value: '82%', label: 'increase in website traffic' },
              ]}
            />
          </div>
        </div>
      </AnimatedSection>

      <div className="section-divider" />

      {/* ─── SOLUTION REVEAL (mechanisms, first-person) ───────────── */}
      <AnimatedSection className="bg-zinc-900 py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-4">
              The Growth System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              One System Behind Your Existing Business
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-14 max-w-[60ch]">
              I built The Growth System specifically for contractors. It
              combines AI call handling, automated estimate follow-up, and a
              lead recovery engine into one system that runs behind your
              existing business. You do not change how you work. You just stop
              losing the leads you already paid for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mechanisms.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: i * 0.07,
                }}
                className="bg-zinc-950/60 border border-zinc-800/50 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm pl-5">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── BEFORE / AFTER TRANSFORMATION ────────────────────────── */}
      <AnimatedSection className="bg-zinc-950 py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            See the Transformation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BEFORE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
                Before The Growth System
              </p>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle
                      size={20}
                      weight="fill"
                      className="text-zinc-600 shrink-0 mt-0.5"
                    />
                    <span className="text-zinc-400 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* AFTER */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="bg-brand-gold/5 border border-brand-gold/20 rounded-2xl p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-6">
                After The Growth System
              </p>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="text-brand-gold shrink-0 mt-0.5"
                    />
                    <span className="text-zinc-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── MID CTA ──────────────────────────────────────────────── */}
      <AnimatedSection className="bg-zinc-900 py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <CTAButton
            text="See If You Qualify"
            href="/apply"
            className="w-full md:w-auto"
          />
          <p className="text-sm text-zinc-600 mt-4">
            We partner with 3 new contractors per month.
          </p>
        </div>
      </AnimatedSection>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <AnimatedSection className="bg-zinc-950 py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Questions We Hear Before Every First Call
          </h2>
          <FAQ items={faqItems} />
        </div>
      </AnimatedSection>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <AnimatedSection className="bg-zinc-900 py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Stop Losing Revenue to Missed Calls and Slow Follow-Up
          </h2>
          <p className="text-zinc-400 text-lg mt-4 leading-relaxed max-w-[52ch] mx-auto">
            Book a free strategy call. I&apos;ll review your lead flow, show
            you where the biggest wins are, and map out a plan.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CTAButton
              text="See If You Qualify"
              href="/apply"
              className="w-full md:w-auto"
            />
            <p className="text-sm text-zinc-600">
              We partner with 3 new contractors per month.
            </p>
          </div>

          <p className="text-xs text-zinc-700 mt-16">
            &copy; 2026 The Snow Media
          </p>
        </div>
      </AnimatedSection>
    </main>
  )
}

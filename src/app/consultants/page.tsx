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
    question: 'I sell high-ticket ($5K+). Does AI work for complex sales?',
    answer:
      "AI doesn't replace your sales call. It gets more qualified people to that call faster. The conversation, the close, the relationship, that's still you.",
  },
  {
    question: 'Will this feel robotic to my audience?',
    answer:
      'No. The system uses your voice, your brand language, your qualifying criteria. Prospects experience fast, professional follow-up. Not a chatbot.',
  },
  {
    question: 'I already have a VA handling leads.',
    answer:
      'Most VAs check leads 2 to 3 times a day. This system responds in under 60 seconds and follows up persistently. Your VA can focus on higher-value tasks.',
  },
  {
    question: 'How is this different from a CRM with automations?',
    answer:
      "CRMs send sequences. This system qualifies, responds contextually, and adapts follow-up based on prospect behavior. It's not a drip campaign.",
  },
  {
    question: "What's the investment?",
    answer:
      "It depends on your lead volume and which components you need. I'll walk through pricing on the call after I understand your setup.",
  },
]

const mechanisms = [
  {
    name: 'The 60-Second First Touch',
    description:
      'Every inquiry gets a response in under 60 seconds, 24 hours a day, 7 days a week. Your prospects never wait.',
  },
  {
    name: 'The Calendar Gatekeeper',
    description:
      'Filters tire-kickers before they reach your calendar. Only qualified prospects who match your criteria book time with you.',
  },
  {
    name: 'The Persistent Pipeline',
    description:
      'Email, SMS, and chat follow-up runs automatically until the prospect books or opts out. Persistent without being pushy.',
  },
  {
    name: 'The Growth Scoreboard',
    description:
      "Weekly lead quality scoring and conversion tracking. See exactly what's driving revenue and what needs to change.",
  },
]

const beforeItems = [
  'Leads fill out your form and hear back 4 to 8 hours later',
  'Discovery calls dry up when you stop posting or running ads',
  'Tire-kickers clog your calendar every week',
  'Follow-up stops after one email',
  'No clear picture of which leads are worth your time',
]

const afterItems = [
  'Every lead gets a response in under 60 seconds',
  'Calendar fills automatically while you focus on clients',
  'Only qualified prospects make it to your schedule',
  'Multi-channel follow-up runs until they book or say no',
  'Dashboard shows lead quality, source, and conversion data',
]

export default function ConsultantsPage() {
  return (
    <main className="bg-zinc-950 text-white font-sans overflow-x-hidden">
      {/* ─── EXIT INTENT ──────────────────────────────────────────── */}
      <ExitIntentPopup
        guideName="Free Guide"
        headline="Not Ready for a Call?"
        description="Get the free breakdown: 5 Reasons Your Discovery Calls Dried Up (And How to Fix Each One). Delivered to your inbox in 60 seconds."
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
                For coaches and consultants doing $500K+ per year
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.08] text-white"
              >
                How Consultants Are Filling Their Calendar With{' '}
                <span className="text-brand-gold">Qualified Calls</span>{' '}
                Without Posting, Emailing, or Chasing a Single Lead
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="text-lg md:text-xl text-zinc-400 mt-6 max-w-[55ch] leading-relaxed"
              >
                Discover the system that turns your existing lead flow into a
                fully booked calendar. Responds in 60 seconds, qualifies
                automatically, books while you sleep. Setup takes 30 minutes.
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
                  We partner with 3 new consultants per month.
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
            The Pipeline Problem Nobody Talks About
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
                Your Close Rate Is Strong. Your Calendar Isn&apos;t.
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-[60ch]">
                You know your close rate on discovery calls is strong. 30%,
                maybe 40%. The bottleneck is not your offer or your sales
                ability. It is getting enough qualified people on those calls
                every week. When you stop posting, emailing, or running ads for
                a week, the pipeline dries up instantly.
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
                10 Minutes Is the Difference Between a Client and a Ghost
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-[60ch]">
                Every lead that fills out a form and does not hear back in 10
                minutes is 5x less likely to book a call. Your VA checks the
                inbox at 2pm. By then, the prospect booked with someone who
                responded at 9:01am.
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
                One Follow-Up Is Not a System
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-[60ch]">
                You are paying for ads or spending hours on content, but the
                leads that come in get one follow-up email and then nothing. The
                money is not in the first touch. It is in the fifth.
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
              Over the past six years, I&apos;ve managed lead generation
              campaigns for over 100 businesses, including coaches, consultants,
              and service providers across three countries.
            </p>
            <p>
              Here&apos;s what I kept seeing: strong closers with empty
              calendars. Consultants who closed 30 to 40% of their discovery
              calls, but only had 3 to 4 calls a week. The ads were working.
              The leads were filling out forms. But by the time someone
              responded, the prospect had already moved on.
            </p>
            <p>
              I started tracking response times across our client base. The
              pattern was undeniable: the consultant who responded first won the
              client. Not the best consultant, not the cheapest. The fastest.
              Most of our clients were responding in 4 to 8 hours. Their
              competitors were responding in minutes.
            </p>
            <p className="text-white font-medium text-xl">
              That&apos;s when I built The Growth System. Not more ads. Not a
              better CRM. A system that responds to every lead in under 60
              seconds, qualifies them, and books the call. Before your VA even
              opens the inbox.
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
              The coaches scaling past $1M all have one thing in common. They
              removed themselves from lead generation entirely. AI handles the
              first touch, the follow-up, and the qualification. The coach only
              shows up when someone is ready to buy.
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
                client="Elevated Diversity"
                industry="Recruitment / HR Consulting"
                metrics={[
                  { value: '24%', label: 'increase in qualified leads' },
                  { value: '15%', label: 'lower cost per lead' },
                  { value: '38%', label: 'boost in website traffic' },
                ]}
                featured
              />
            </div>
            <SocialProofCard
              client="Health & Wellness with HBOT"
              industry="Health / Wellness Consulting"
              metrics={[
                { value: '21%', label: 'growth in lead volume' },
                { value: '27%', label: 'lower cost per acquisition' },
                { value: '12%', label: 'spend efficiency gain' },
              ]}
            />
            <SocialProofCard
              client="Waxxpot"
              industry="Service Business (Bookings)"
              metrics={[
                { value: '37%', label: 'increase in online bookings' },
                { value: '42%', label: 'reduction in cost per acquisition' },
                { value: '29%', label: 'boost in revenue' },
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
              Your Calendar Fills While You Focus on Clients
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-14 max-w-[60ch]">
              I built The Growth System specifically for consultants. It
              combines instant lead response, AI-powered qualification, and
              persistent follow-up into one engine that runs behind your
              existing business. You keep your offer, your process, your brand.
              You just get more qualified calls on your calendar without doing
              the chasing.
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
            We partner with 3 new consultants per month.
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
            Stop Chasing Leads. Start Closing Them.
          </h2>
          <p className="text-zinc-400 text-lg mt-4 leading-relaxed max-w-[52ch] mx-auto">
            Book a free strategy call. I&apos;ll review your lead flow, show
            you where the biggest wins are, and map out a plan to fill your
            calendar with qualified prospects.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CTAButton
              text="See If You Qualify"
              href="/apply"
              className="w-full md:w-auto"
            />
            <p className="text-sm text-zinc-600">
              We partner with 3 new consultants per month.
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

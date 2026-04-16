'use client'

import CTAButton from '@/components/CTAButton'
import VideoEmbed from '@/components/VideoEmbed'
import FAQ from '@/components/FAQ'
import SocialProofCard from '@/components/SocialProofCard'
import AnimatedSection from '@/components/AnimatedSection'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import StatsBar from '@/components/StatsBar'
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

const stats = [
  { value: '100+', label: 'Businesses Served' },
  { value: '6 YRS', label: 'Running Campaigns' },
  { value: '60 SEC', label: 'Avg Response Time' },
  { value: '24/7', label: 'Always On' },
]

export default function ContractorsPage() {
  return (
    <main className="bg-white text-brand-ink font-body overflow-x-hidden">
      <ExitIntentPopup
        guideName="Free Guide"
        headline="Not Ready for a Call?"
        description="Get the free breakdown: 5 Revenue Leaks Costing Contractors $10K+ Per Month. Delivered to your inbox in 60 seconds."
        ctaText="Send It"
      />

      {/* ─── HERO (dark) ──────────────────────────────────────────── */}
      <section className="relative hero-grain bg-brand-ink text-white overflow-hidden">
        {/* Radial lighting */}
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background:
              'radial-gradient(900px 600px at 20% 20%, rgba(232,182,76,0.08), transparent 60%), radial-gradient(700px 500px at 90% 80%, rgba(154,50,61,0.18), transparent 60%)',
          }}
        />

        {/* Top eyebrow strip (Brunson-style warning bar) */}
        <div className="relative z-10 border-b border-white/10 bg-black/40">
          <div className="max-w-6xl mx-auto px-6 py-3 text-center text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Attention contractors doing $500K+ per year
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="font-display font-extrabold tracking-tightest text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] text-white"
              >
                How Contractors Are Recovering{' '}
                <span className="brunson-highlight">$15K+ Per Month</span>{' '}
                In Lost Revenue Without Hiring A Single Person
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl text-white/75 mt-8 max-w-[58ch] leading-relaxed"
              >
                Discover the system 107 service businesses use to stop losing
                jobs to voicemail and start booking estimates around the clock.
                Setup takes 30 minutes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10"
              >
                <CTAButton
                  text="See If You Qualify"
                  href="/apply"
                  subtext="Only 3 Contractor Spots Open For May"
                  className="w-full md:w-auto"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <VideoEmbed />
              <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold/90 mt-4">
                Watch: 2 Min Breakdown
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR (light) ───────────────────────────────────── */}
      <StatsBar stats={stats} theme="light" />

      {/* ─── PROBLEM AGITATION (white, editorial) ───────────────── */}
      <AnimatedSection className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-maroon text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Part One
          </p>
          <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-brand-ink mb-4">
            The Revenue You&apos;re Leaving On The Table
          </h2>
          <hr className="rule-gold my-8" />

          <div className="space-y-14 md:space-y-20">
            {[
              {
                num: '01',
                title: 'Missed Calls, Lost Jobs',
                body:
                  'Every missed call is a $3,000 to $15,000 job walking straight to your competitor. Not because they\u2019re better. Because they answered. Your crew is on a roof. Your office manager is on another line. The homeowner calls the next company on the list. This happens 10 to 20 times a month for most contractors we talk to.',
              },
              {
                num: '02',
                title: 'Unsold Estimates Sitting In A Drawer',
                body:
                  '40% of the homeowners who got a quote but did not book are still interested. Nobody follows up because your team is busy running jobs. That backlog is worth $50K to $200K in recoverable revenue sitting untouched.',
              },
              {
                num: '03',
                title: 'Expensive Leads Going Cold',
                body:
                  'You\u2019re paying $150 to $400 per lead from Google Ads, and half of them go cold because the follow-up is slow. The leads are not the problem. The speed is.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 80, damping: 20, delay: i * 0.05 }}
                className="grid grid-cols-[auto,1fr] gap-6 md:gap-10 items-start"
              >
                <span className="font-display font-extrabold text-5xl md:text-6xl text-brand-gold/60 leading-none tabular-nums select-none">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-brand-ink mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-brand-ink/75 text-base md:text-lg leading-relaxed max-w-[60ch]">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── EPIPHANY BRIDGE + ATTRACTIVE CHARACTER ───────────────── */}
      <AnimatedSection className="bg-brand-paper py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-maroon text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            A Note From Milos
          </p>
          <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-brand-ink mb-4">
            &ldquo;The Money Was There. Nobody Was Picking It Up.&rdquo;
          </h2>
          <hr className="rule-gold my-8" />

          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-full bg-brand-maroon flex items-center justify-center shrink-0 border-2 border-white shadow-md">
              <span className="text-white font-display font-extrabold text-xl">
                M
              </span>
            </div>
            <div>
              <p className="text-brand-ink font-display font-extrabold text-lg">
                Milos
              </p>
              <p className="text-brand-ink/55 text-sm">
                Founder, Snow Media
              </p>
            </div>
          </div>

          <div className="space-y-5 text-brand-ink/85 leading-relaxed text-lg md:text-xl border-l-[3px] border-brand-gold pl-6 md:pl-8">
            <p>
              Over the past six years, I&apos;ve managed ad campaigns for over
              100 service businesses, including contractors in plumbing, HVAC,
              roofing, and solar.
            </p>
            <p>
              Here&apos;s what I kept seeing: the campaigns were working. The
              leads were coming in. But the revenue wasn&apos;t matching the
              lead volume. So I started pulling call logs and matching them
              against ad data. What I found was the same pattern, over and
              over. Leads calling after 5pm, going to voicemail. Estimates
              sent out and never followed up. Past customers who hadn&apos;t
              been contacted in over a year. The money was there. Nobody was
              picking it up.
            </p>
            <p>
              The problem was never the ads. It was the 16 hours a day when
              nobody was answering the phone, and the follow-up that never
              happened.
            </p>
            <p className="text-brand-ink font-display font-extrabold text-xl md:text-2xl leading-snug">
              That&apos;s when I built The Growth System. Not another ad
              strategy. A system that makes sure every lead gets answered,
              every estimate gets followed up, and every past customer gets
              re-engaged. Automatically.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── BIG DOMINO ───────────────────────────────────────────── */}
      <AnimatedSection className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-maroon text-xs font-semibold uppercase tracking-[0.25em] mb-6">
            The One Thing
          </p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="font-display font-extrabold text-[clamp(1.6rem,3.2vw,2.5rem)] leading-[1.2] text-brand-ink"
          >
            The contractor who responds fastest wins the job. Not the best
            contractor, not the cheapest. The{' '}
            <span className="text-brand-maroon">fastest</span>. AI makes you
            the fastest 24 hours a day, 365 days a year.
          </motion.p>
          <hr className="rule-gold mx-auto mt-10" />
        </div>
      </AnimatedSection>

      {/* ─── SOCIAL PROOF ─────────────────────────────────────────── */}
      <AnimatedSection className="bg-brand-paper py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-maroon text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Real Results
            </p>
            <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-brand-ink">
              Campaigns I&apos;ve Actually Run
            </h2>
            <p className="text-brand-ink/65 mt-4 max-w-[52ch] mx-auto">
              Real clients. Exact metrics. Numbers pulled from the dashboards, not the marketing deck.
            </p>
          </div>

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

      {/* ─── SOLUTION REVEAL ──────────────────────────────────────── */}
      <AnimatedSection className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-brand-maroon text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              The Growth System
            </p>
            <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-brand-ink mb-6">
              One System Behind Your Existing Business
            </h2>
            <hr className="rule-gold mb-8" />
            <p className="text-brand-ink/75 text-base md:text-lg leading-relaxed max-w-[62ch]">
              I built The Growth System specifically for contractors. It
              combines AI call handling, automated estimate follow-up, and a
              lead recovery engine into one system that runs behind your
              existing business. You do not change how you work. You just
              stop losing the leads you already paid for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
            {mechanisms.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: i * 0.06 }}
                className="border-t-2 border-brand-ink/90 pt-6"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display font-extrabold text-brand-gold text-base tabular-nums">
                    0{i + 1}
                  </span>
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-brand-ink leading-tight">
                    {item.name}
                  </h3>
                </div>
                <p className="text-brand-ink/70 text-base leading-relaxed max-w-[52ch]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── BEFORE / AFTER TRANSFORMATION ────────────────────────── */}
      <AnimatedSection className="bg-brand-ink text-white py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              The Shift
            </p>
            <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-white">
              See The Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="border border-white/10 p-8 md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50 mb-6">
                Before
              </p>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle
                      size={22}
                      weight="fill"
                      className="text-white/25 shrink-0 mt-0.5"
                    />
                    <span className="text-white/70 leading-relaxed">
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
              className="border border-brand-gold/30 bg-brand-gold/[0.06] p-8 md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-6">
                After The Growth System
              </p>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={22}
                      weight="fill"
                      className="text-brand-gold shrink-0 mt-0.5"
                    />
                    <span className="text-white leading-relaxed">
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
      <AnimatedSection className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h3 className="font-display font-extrabold text-2xl md:text-3xl text-brand-ink mb-6 leading-tight">
            Ready To Stop Losing Jobs To Voicemail?
          </h3>
          <CTAButton
            text="See If You Qualify"
            href="/apply"
            subtext="3 Contractor Spots Per Month"
          />
        </div>
      </AnimatedSection>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <AnimatedSection className="bg-brand-paper py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-maroon text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              FAQ
            </p>
            <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-brand-ink">
              Questions We Hear Before Every First Call
            </h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </AnimatedSection>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <AnimatedSection className="bg-brand-ink text-white py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Last Step
          </p>
          <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-white">
            Stop Losing Revenue To Missed Calls And Slow Follow-Up
          </h2>
          <p className="text-white/70 text-lg mt-6 leading-relaxed max-w-[54ch] mx-auto">
            Book a free strategy call. I&apos;ll review your lead flow, show
            you where the biggest wins are, and map out a plan.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CTAButton
              text="See If You Qualify"
              href="/apply"
              subtext="Limited To 3 Contractors Per Month"
            />
          </div>

          <p className="text-xs text-white/30 mt-20">
            &copy; 2026 The Snow Media
          </p>
        </div>
      </AnimatedSection>
    </main>
  )
}

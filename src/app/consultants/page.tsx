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

const stats = [
  { value: '100+', label: 'Businesses Served' },
  { value: '6 YRS', label: 'Running Campaigns' },
  { value: '60 SEC', label: 'Avg Response Time' },
  { value: '3x', label: 'Avg Pipeline Lift' },
]

export default function ConsultantsPage() {
  return (
    <main className="bg-white text-brand-ink font-body overflow-x-hidden">
      <ExitIntentPopup
        guideName="Free Guide"
        headline="Not Ready for a Call?"
        description="Get the free breakdown: 5 Reasons Your Discovery Calls Dried Up (And How to Fix Each One). Delivered to your inbox in 60 seconds."
        ctaText="Send It"
      />

      {/* ─── HERO (dark) ──────────────────────────────────────────── */}
      <section className="relative hero-grain bg-brand-ink text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background:
              'radial-gradient(900px 600px at 20% 20%, rgba(232,182,76,0.08), transparent 60%), radial-gradient(700px 500px at 90% 80%, rgba(15,87,69,0.22), transparent 60%)',
          }}
        />

        <div className="relative z-10 border-b border-white/10 bg-black/40">
          <div className="max-w-6xl mx-auto px-6 py-3 text-center text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Attention coaches &amp; consultants doing $500K+ per year
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
                How Consultants Are Filling Their Calendar With{' '}
                <span className="brunson-highlight">Qualified Calls</span>{' '}
                Without Posting, Emailing, Or Chasing A Single Lead
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl text-white/75 mt-8 max-w-[58ch] leading-relaxed"
              >
                Discover the system that turns your existing lead flow into a
                fully booked calendar. Responds in 60 seconds, qualifies
                automatically, books while you sleep. Setup takes 30 minutes.
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
                  subtext="Only 3 Consultant Spots Open For May"
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

      {/* ─── STATS BAR ───────────────────────────────────────────── */}
      <StatsBar stats={stats} theme="light" />

      {/* ─── PROBLEM AGITATION ───────────────────────────────────── */}
      <AnimatedSection className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-maroon text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Part One
          </p>
          <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-brand-ink mb-4">
            The Pipeline Problem Nobody Talks About
          </h2>
          <hr className="rule-gold my-8" />

          <div className="space-y-14 md:space-y-20">
            {[
              {
                num: '01',
                title: 'Your Close Rate Is Strong. Your Calendar Isn\u2019t.',
                body:
                  'You know your close rate on discovery calls is strong. 30%, maybe 40%. The bottleneck is not your offer or your sales ability. It is getting enough qualified people on those calls every week. When you stop posting, emailing, or running ads for a week, the pipeline dries up instantly.',
              },
              {
                num: '02',
                title: '10 Minutes Is The Difference Between A Client And A Ghost',
                body:
                  'Every lead that fills out a form and does not hear back in 10 minutes is 5x less likely to book a call. Your VA checks the inbox at 2pm. By then, the prospect booked with someone who responded at 9:01am.',
              },
              {
                num: '03',
                title: 'One Follow-Up Is Not A System',
                body:
                  'You are paying for ads or spending hours on content, but the leads that come in get one follow-up email and then nothing. The money is not in the first touch. It is in the fifth.',
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

      {/* ─── EPIPHANY BRIDGE ─────────────────────────────────────── */}
      <AnimatedSection className="bg-brand-paper py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-maroon text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            A Note From Milos
          </p>
          <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-brand-ink mb-4">
            &ldquo;Strong Closers. Empty Calendars. I Saw The Same Pattern Everywhere.&rdquo;
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
              Over the past six years, I&apos;ve managed lead generation
              campaigns for over 100 businesses, including coaches,
              consultants, and service providers across three countries.
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
              pattern was undeniable: the consultant who responded first won
              the client. Not the best consultant, not the cheapest. The
              fastest. Most of our clients were responding in 4 to 8 hours.
              Their competitors were responding in minutes.
            </p>
            <p className="text-brand-ink font-display font-extrabold text-xl md:text-2xl leading-snug">
              That&apos;s when I built The Growth System. Not more ads. Not
              a better CRM. A system that responds to every lead in under 60
              seconds, qualifies them, and books the call. Before your VA
              even opens the inbox.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── BIG DOMINO ──────────────────────────────────────────── */}
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
            The coaches scaling past $1M all have one thing in common. They
            removed themselves from lead generation entirely. AI handles the
            first touch, the follow-up, and the qualification. The coach
            only shows up when someone is{' '}
            <span className="text-brand-maroon">ready to buy</span>.
          </motion.p>
          <hr className="rule-gold mx-auto mt-10" />
        </div>
      </AnimatedSection>

      {/* ─── SOCIAL PROOF ────────────────────────────────────────── */}
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

      {/* ─── SOLUTION REVEAL ─────────────────────────────────────── */}
      <AnimatedSection className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-brand-maroon text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              The Growth System
            </p>
            <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-brand-ink mb-6">
              Your Calendar Fills While You Focus On Clients
            </h2>
            <hr className="rule-gold mb-8" />
            <p className="text-brand-ink/75 text-base md:text-lg leading-relaxed max-w-[62ch]">
              I built The Growth System specifically for consultants. It
              combines instant lead response, AI-powered qualification, and
              persistent follow-up into one engine that runs behind your
              existing business. You keep your offer, your process, your
              brand. You just get more qualified calls on your calendar
              without doing the chasing.
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

      {/* ─── BEFORE / AFTER ──────────────────────────────────────── */}
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

      {/* ─── MID CTA ─────────────────────────────────────────────── */}
      <AnimatedSection className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h3 className="font-display font-extrabold text-2xl md:text-3xl text-brand-ink mb-6 leading-tight">
            Ready To Fill Your Calendar On Autopilot?
          </h3>
          <CTAButton
            text="See If You Qualify"
            href="/apply"
            subtext="3 Consultant Spots Per Month"
          />
        </div>
      </AnimatedSection>

      {/* ─── FAQ ─────────────────────────────────────────────────── */}
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

      {/* ─── FINAL CTA ───────────────────────────────────────────── */}
      <AnimatedSection className="bg-brand-ink text-white py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Last Step
          </p>
          <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-white">
            Stop Chasing Leads. Start Closing Them.
          </h2>
          <p className="text-white/70 text-lg mt-6 leading-relaxed max-w-[54ch] mx-auto">
            Book a free strategy call. I&apos;ll review your lead flow,
            show you where the biggest wins are, and map out a plan to fill
            your calendar with qualified prospects.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CTAButton
              text="See If You Qualify"
              href="/apply"
              subtext="Limited To 3 Consultants Per Month"
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

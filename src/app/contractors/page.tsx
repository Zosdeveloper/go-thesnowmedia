'use client'

import AttentionBar from '@/components/brunson/AttentionBar'
import BrunsonHero from '@/components/brunson/BrunsonHero'
import BrunsonCTABand from '@/components/brunson/BrunsonCTABand'
import QuoteHeadline from '@/components/brunson/QuoteHeadline'
import StoryBlock from '@/components/brunson/StoryBlock'
import ProofBadges from '@/components/brunson/ProofBadges'
import AccentHeadline from '@/components/brunson/AccentHeadline'
import EventBlock from '@/components/brunson/EventBlock'
import Signoff from '@/components/brunson/Signoff'
import Footer from '@/components/brunson/Footer'
import FAQ from '@/components/FAQ'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import CTAButton from '@/components/CTAButton'
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

const IMG = {
  heroBg: 'https://picsum.photos/seed/contractor-event-crowd/1920/1080',
  teamCta: 'https://picsum.photos/seed/contractor-crew-truck/1200/1000',
  milosPortrait: 'https://i.pravatar.cc/400?img=52',
  milosWide: 'https://picsum.photos/seed/milos-working-desk/900/1100',
  storyMissedCalls: 'https://picsum.photos/seed/phone-office-silent/900/1100',
  storyEstimates: 'https://picsum.photos/seed/paper-estimates-desk/900/1100',
  storyColdLeads: 'https://picsum.photos/seed/laptop-analytics-late/900/1100',
  mech1: 'https://picsum.photos/seed/ai-phone-dashboard/1100/900',
  mech2: 'https://picsum.photos/seed/crm-followup-chat/1100/900',
  mech3: 'https://picsum.photos/seed/database-customers/1100/900',
  mech4: 'https://picsum.photos/seed/scoreboard-chart-revenue/1100/900',
  proofBg: 'https://picsum.photos/seed/contractor-trucks-night/1920/1080',
}

export default function ContractorsPage() {
  return (
    <main className="bg-white text-brand-ink font-sans overflow-x-hidden">
      <ExitIntentPopup
        guideName="Free Guide"
        headline="Not Ready for a Call?"
        description="Get the free breakdown: 5 Revenue Leaks Costing Contractors $10K+ Per Month. Delivered to your inbox in 60 seconds."
        ctaText="Send It"
      />

      <AttentionBar>
        Attention: We Partner With Only 3 New Contractors Per Month &mdash; Only 3 Spots Left For May
      </AttentionBar>

      <BrunsonHero
        preHeadline="For Contractors Doing $500K+ Per Year"
        headline={
          <>
            How Contractors Are Recovering <br className="hidden md:block" />
            $15K+ Per Month In Lost Revenue
          </>
        }
        accentHeadline="Without Hiring A Single Person"
        subline="Discover the system 107 service businesses use to stop losing jobs to voicemail and start booking estimates around the clock. Setup takes 30 minutes."
        ctaText="Apply To See If You Qualify"
        ctaSubline="I am looking for fast action takers — 3 spots left for May"
        ctaHref="/apply"
        bgImage={IMG.heroBg}
      />

      <BrunsonCTABand
        preline="If That's You..."
        headline="Apply Below And Let's Recover The Revenue Your Business Is Leaving Behind."
        ctaText="Apply For The Growth System Now"
        ctaSubline="Only 3 Contractor Spots Open — Act Now Before They're Gone"
        ctaHref="/apply"
        photo={IMG.teamCta}
        photoAlt="Contractor crew answering calls"
      />

      {/* ─── PROBLEM: 3 story blocks with big quote headlines ──────── */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="space-y-20 md:space-y-28">
          <div>
            <div className="mb-10 md:mb-14">
              <QuoteHeadline>Missed Calls, Lost Jobs.</QuoteHeadline>
            </div>
            <StoryBlock
              photo={IMG.storyMissedCalls}
              photoAlt="Silent phone after hours"
              caption="The 5pm to 8am dead zone is where most contractor revenue disappears."
            >
              <p
                className="italic text-brand-ink/70 text-lg border-l-4 border-brand-gold pl-5"
              >
                &ldquo;Fast response is the single biggest lever in home services marketing.&rdquo;
                <span className="block mt-2 text-sm text-brand-ink/50 not-italic">
                  &mdash; Dan Antonelli, KickCharge Creative
                </span>
              </p>
              <p>
                Every missed call is a $3,000 to $15,000 job walking straight to
                your competitor. Not because they&apos;re better. Because they
                answered.
              </p>
              <p>
                Your crew is on a roof. Your office manager is on another line. The
                homeowner calls the next company on the list. This happens 10 to 20
                times a month for most contractors we talk to.
              </p>
              <p className="font-display font-bold text-brand-ink text-xl">
                The leads aren&apos;t broken. The pickup is.
              </p>
            </StoryBlock>
          </div>

          <div>
            <div className="mb-10 md:mb-14">
              <QuoteHeadline>Unsold Estimates Sitting In A Drawer.</QuoteHeadline>
            </div>
            <StoryBlock
              photo={IMG.storyEstimates}
              photoAlt="Stack of paper estimates"
              reversed
              caption="40% of unsold estimates are still interested. Most never get a second call."
            >
              <p>
                40% of the homeowners who got a quote but did not book are still
                interested. They didn&apos;t say no. They just got busy, compared a
                second bid, and waited.
              </p>
              <p>
                Nobody follows up because your team is busy running jobs. That
                backlog is worth $50K to $200K in recoverable revenue sitting
                untouched on your server.
              </p>
              <p className="font-display font-bold text-brand-ink text-xl">
                The money isn&apos;t in the first quote. It&apos;s in the fifth follow-up.
              </p>
            </StoryBlock>
          </div>

          <div>
            <div className="mb-10 md:mb-14">
              <QuoteHeadline>Expensive Leads Going Cold.</QuoteHeadline>
            </div>
            <StoryBlock
              photo={IMG.storyColdLeads}
              photoAlt="Late-night dashboard analytics"
              caption="Your Google Ads leads are arriving when nobody's watching the inbox."
            >
              <p>
                You&apos;re paying $150 to $400 per lead from Google Ads, and half
                of them go cold because the follow-up is slow.
              </p>
              <p>
                Every five minutes you take to respond cuts your chance of closing
                in half. Leads are not the problem. Speed is.
              </p>
              <p className="font-display font-bold text-brand-ink text-xl">
                You don&apos;t need more ad spend. You need faster pickup.
              </p>
            </StoryBlock>
          </div>
        </div>
      </section>

      {/* ─── EPIPHANY / STORY HEADLINE ─────────────────────────────── */}
      <section className="bg-brand-paper py-20 md:py-28 px-6">
        <div className="mb-10 md:mb-14">
          <QuoteHeadline size="xl">
            The Money Was There. Nobody Was Picking It Up.
          </QuoteHeadline>
        </div>

        <StoryBlock
          photo={IMG.milosWide}
          photoAlt="Milos at work"
          caption="Milos, Founder of The Snow Media — Eagle, Idaho"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-brand-ink/55 font-bold">
            From: Milos &middot; Eagle, Idaho
          </p>
          <p>
            Over the past six years, I&apos;ve managed ad campaigns for over 100
            service businesses, including contractors in plumbing, HVAC, roofing,
            and solar.
          </p>
          <p>
            Here&apos;s what I kept seeing: the campaigns were working. The leads
            were coming in. But the revenue wasn&apos;t matching the lead volume.
          </p>
          <p>
            So I started pulling call logs and matching them against ad data. What
            I found was the same pattern, over and over. Leads calling after 5pm,
            going to voicemail. Estimates sent out and never followed up. Past
            customers who hadn&apos;t been contacted in over a year.
          </p>
          <p>
            The money was there. Nobody was picking it up. The problem was never
            the ads. It was the 16 hours a day when nobody was answering the
            phone, and the follow-up that never happened.
          </p>
          <p className="font-display font-extrabold text-brand-ink text-xl md:text-2xl leading-snug">
            That&apos;s when I built The Growth System. Not another ad strategy.
            A system that makes sure every lead gets answered, every estimate
            gets followed up, and every past customer gets re-engaged.
            Automatically.
          </p>
        </StoryBlock>
      </section>

      {/* ─── BIG DOMINO ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-6">
        <AccentHeadline
          gold="The contractor who responds fastest wins the job."
          black="Not the best contractor, not the cheapest. The fastest. AI makes you the fastest 24 hours a day, 365 days a year."
        />
      </section>

      {/* ─── SOCIAL PROOF ─────────────────────────────────────────── */}
      <ProofBadges
        headline="Proof! Look At The Results Our Service Businesses Are Booking."
        subhead="Exact numbers pulled from live campaign dashboards — not the marketing deck."
        badges={[
          { value: '107', label: 'Service Businesses Partnered With' },
          { value: '230%', label: 'Lead Boost (PlugPV Solar)' },
          { value: '70%', label: 'Qualified Leads Uplift (BMS)' },
          { value: '63%', label: 'Booking Increase (SPEAR)' },
        ]}
        footerLine="That isn't to brag. It's proof that when the system picks up every call and follows up every lead, revenue shows up in the bank account."
        ctaText="Apply For The Growth System Now"
        ctaSubline="Only 3 Contractor Spots Open For May"
        ctaHref="/apply"
        bgImage={IMG.proofBg}
      />

      {/* ─── "A RISING TIDE" EQUIVALENT ───────────────────────────── */}
      <section className="bg-brand-paper py-20 md:py-24 px-6">
        <AccentHeadline
          gold="A rising tide lifts all boats."
          black="Here's exactly what you get when you plug The Growth System into your business."
        />
      </section>

      {/* ─── MECHANISMS (4 Event blocks) ──────────────────────────── */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="space-y-24 md:space-y-32">
          <EventBlock
            label="Component #1"
            title="The After-Hours Revenue Recovery System"
            photo={IMG.mech1}
            photoAlt="AI phone system dashboard"
          >
            <p>
              Every call 24/7 gets answered by an AI receptionist tuned to your
              business. It qualifies the lead, confirms the service area, and
              drops a booked estimate straight onto your calendar.
            </p>
            <p>
              The missed call becomes a booked appointment before your crew even
              finishes the current job. You pick up the next morning with new
              estimates already on the schedule.
            </p>
            <p className="font-display font-bold text-brand-ink">
              No more jobs lost to voicemail.
            </p>
          </EventBlock>

          <EventBlock
            label="Component #2"
            title="The Silent Closer"
            photo={IMG.mech2}
            photoAlt="Automated follow-up messaging"
            reversed
          >
            <p>
              Every unsold estimate triggers a sequenced follow-up across email,
              SMS, and voice. It runs for weeks, professionally, until the
              homeowner books or says no.
            </p>
            <p>
              Most contractors follow up once. We follow up seven times. That
              sixth and seventh touch is where the 40% of &ldquo;maybes&rdquo;
              become jobs.
            </p>
            <p className="font-display font-bold text-brand-ink">
              Persistent, professional, never forgets.
            </p>
          </EventBlock>

          <EventBlock
            label="Component #3"
            title="The Dormant Revenue Reactivator"
            photo={IMG.mech3}
            photoAlt="Customer database reactivation"
          >
            <p>
              Every past customer who hasn&apos;t called in over a year gets
              re-engaged with a tailored offer. Service reminders, seasonal tune-ups,
              and product upgrades they already signed off on once.
            </p>
            <p>
              This is revenue sitting untouched in your existing database. Most
              contractors have $100K+ of it and no system to unlock it.
            </p>
            <p className="font-display font-bold text-brand-ink">
              Revenue you already earned, waiting to be collected.
            </p>
          </EventBlock>

          <EventBlock
            label="Component #4"
            title="The Growth Scoreboard"
            photo={IMG.mech4}
            photoAlt="Live performance dashboard"
            reversed
          >
            <p>
              One dashboard. Every lead. Every call. Every booking. Source,
              status, dollar value, response time. You see exactly what&apos;s
              working and what&apos;s broken.
            </p>
            <p>
              No more pulling reports across three platforms. No more guessing
              which marketing is paying. You know on a Monday morning what last
              week brought in.
            </p>
            <p className="font-display font-bold text-brand-ink">
              Know what&apos;s working. Every single day.
            </p>
          </EventBlock>
        </div>
      </section>

      {/* ─── BEFORE / AFTER ─────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 px-6 text-white"
        style={{ backgroundColor: '#1a1411' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-gold font-bold uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
              Before &amp; After
            </p>
            <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1]">
              The Transformation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="border border-white/10 p-8 md:p-10 rounded-xl bg-white/[0.02]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50 mb-6">
                Before
              </p>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle
                      size={22}
                      weight="fill"
                      className="text-white/30 shrink-0 mt-0.5"
                    />
                    <span className="text-white/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="border border-brand-gold/40 bg-brand-gold/[0.06] p-8 md:p-10 rounded-xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold mb-6">
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
                    <span className="text-white leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MID CTA ───────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h3 className="font-display font-extrabold text-brand-ink text-[clamp(1.5rem,3vw,2.25rem)] mb-8 leading-tight">
            Ready To Stop Losing Jobs To Voicemail?
          </h3>
          <CTAButton
            text="Apply For The Growth System Now"
            subline="Only 3 Contractor Spots Open For May"
            href="/apply"
          />
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-brand-paper py-20 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-maroon text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-4">
              Questions Before You Apply
            </p>
            <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-brand-ink">
              Questions We Hear Before Every First Call
            </h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* ─── FINAL SIGNOFF CTA ───────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6">
        <Signoff
          portrait={IMG.milosPortrait}
          name="Milos"
          title="Founder, The Snow Media"
          intro={
            <>
              <p>
                The great Dan Kennedy once said: &ldquo;Speed of response is the
                single most profitable advantage in any business that books
                appointments.&rdquo;
              </p>
              <p>
                That&apos;s exactly what The Growth System gives you. The fastest
                pickup. The most persistent follow-up. The most complete reactivation.
                Built behind your existing crew without changing anything about how
                you run jobs.
              </p>
              <p>
                Go ahead and click the button below to apply. I&apos;ll personally
                review your business, walk through your lead flow, and tell you
                straight whether this is a fit.
              </p>
              <p>
                Once the May spots are taken, this page closes until June.
              </p>
              <p className="text-brand-ink/70">Excited to have you in,</p>
            </>
          }
          ctaText="Apply For The Growth System Now"
          ctaSubline="Limited To 3 Contractors Per Month"
          ctaHref="/apply"
        />
      </section>

      <Footer />
    </main>
  )
}

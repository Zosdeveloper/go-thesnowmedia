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

const IMG = {
  heroBg: 'https://picsum.photos/seed/consultant-stage-audience/1920/1080',
  teamCta: 'https://picsum.photos/seed/consultant-laptop-cafe/1200/1000',
  milosPortrait: 'https://i.pravatar.cc/400?img=52',
  milosWide: 'https://picsum.photos/seed/milos-working-desk/900/1100',
  storyEmptyCalendar:
    'https://picsum.photos/seed/empty-calendar-planner/900/1100',
  storyLeadGhost: 'https://picsum.photos/seed/leads-inbox-ghost/900/1100',
  storyOneEmail: 'https://picsum.photos/seed/single-email-screen/900/1100',
  mech1: 'https://picsum.photos/seed/instant-reply-automation/1100/900',
  mech2: 'https://picsum.photos/seed/calendar-qualifier-gate/1100/900',
  mech3: 'https://picsum.photos/seed/multichannel-pipeline/1100/900',
  mech4: 'https://picsum.photos/seed/consultant-scoreboard-kpi/1100/900',
  proofBg: 'https://picsum.photos/seed/consultant-mastermind-room/1920/1080',
}

export default function ConsultantsPage() {
  return (
    <main className="bg-white text-brand-ink font-sans overflow-x-hidden">
      <ExitIntentPopup
        guideName="Free Guide"
        headline="Not Ready for a Call?"
        description="Get the free breakdown: 5 Reasons Your Discovery Calls Dried Up (And How to Fix Each One). Delivered to your inbox in 60 seconds."
        ctaText="Send It"
      />

      <AttentionBar>
        Attention: We Partner With Only 3 New Consultants Per Month &mdash; Only 3 Spots Left For May
      </AttentionBar>

      <BrunsonHero
        preHeadline="For Coaches &amp; Consultants Doing $500K+ Per Year"
        headline={
          <>
            How Consultants Are Filling Their <br className="hidden md:block" />
            Calendar With Qualified Calls
          </>
        }
        accentHeadline="Without Posting, Emailing, Or Chasing A Single Lead"
        subline="Discover the system that turns your existing lead flow into a fully booked calendar. Responds in 60 seconds, qualifies automatically, books while you sleep."
        ctaText="Apply To See If You Qualify"
        ctaSubline="I am looking for fast action takers — 3 spots left for May"
        ctaHref="/apply"
        bgImage={IMG.heroBg}
      />

      <BrunsonCTABand
        preline="If That's You..."
        headline="Apply Below And Let's Fill Your Calendar With Qualified Calls."
        ctaText="Apply For The Growth System Now"
        ctaSubline="Only 3 Consultant Spots Open — Act Now Before They're Gone"
        ctaHref="/apply"
        photo={IMG.teamCta}
        photoAlt="Consultant taking a qualified discovery call"
      />

      {/* ─── PROBLEM ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="space-y-20 md:space-y-28">
          <div>
            <div className="mb-10 md:mb-14">
              <QuoteHeadline>
                Your Close Rate Is Strong. Your Calendar Isn&rsquo;t.
              </QuoteHeadline>
            </div>
            <StoryBlock
              photo={IMG.storyEmptyCalendar}
              photoAlt="Empty weekly calendar"
              caption="Strong closers with empty calendars is the single biggest pattern in consulting."
            >
              <p
                className="italic text-brand-ink/70 text-lg border-l-4 border-brand-gold pl-5"
              >
                &ldquo;You are not a marketing problem. You are a speed
                problem.&rdquo;
                <span className="block mt-2 text-sm text-brand-ink/50 not-italic">
                  &mdash; Alex Hormozi, Acquisition.com
                </span>
              </p>
              <p>
                You know your close rate on discovery calls is strong. 30%,
                maybe 40%. The bottleneck is not your offer or your sales
                ability.
              </p>
              <p>
                The bottleneck is getting enough qualified people on those
                calls every single week. When you stop posting, emailing, or
                running ads, the pipeline dries up instantly.
              </p>
              <p className="font-display font-bold text-brand-ink text-xl">
                You&apos;re not an execution problem. You&apos;re a pipeline problem.
              </p>
            </StoryBlock>
          </div>

          <div>
            <div className="mb-10 md:mb-14">
              <QuoteHeadline>
                10 Minutes Is The Difference Between A Client And A Ghost.
              </QuoteHeadline>
            </div>
            <StoryBlock
              photo={IMG.storyLeadGhost}
              photoAlt="Inbox with unread leads"
              reversed
              caption="Every minute past the 10-minute mark, your close probability halves."
            >
              <p>
                Every lead that fills out your form and does not hear back in
                10 minutes is 5x less likely to book a call. Your VA checks
                the inbox at 2pm. By then, the prospect booked with someone
                who responded at 9:01am.
              </p>
              <p>
                Speed of response is not a detail. In high-ticket consulting,
                it&apos;s the single biggest predictor of close rate.
              </p>
              <p className="font-display font-bold text-brand-ink text-xl">
                The consultant who responds first wins the client. Every time.
              </p>
            </StoryBlock>
          </div>

          <div>
            <div className="mb-10 md:mb-14">
              <QuoteHeadline>One Follow-Up Is Not A System.</QuoteHeadline>
            </div>
            <StoryBlock
              photo={IMG.storyOneEmail}
              photoAlt="Single follow-up email on screen"
              caption="The fifth follow-up is where the sale happens. Most consultants stop at one."
            >
              <p>
                You&apos;re paying for ads or spending hours on content, but the
                leads that come in get one follow-up email and then nothing.
              </p>
              <p>
                The money is not in the first touch. It is in the fifth.
                Nobody buys high-ticket consulting off of one email. They buy
                because you stayed in their inbox long enough to be the
                obvious answer when they were ready.
              </p>
              <p className="font-display font-bold text-brand-ink text-xl">
                Persistence is the entire game.
              </p>
            </StoryBlock>
          </div>
        </div>
      </section>

      {/* ─── EPIPHANY / STORY ─────────────────────────────────────── */}
      <section className="bg-brand-paper py-20 md:py-28 px-6">
        <div className="mb-10 md:mb-14">
          <QuoteHeadline size="xl">
            Strong Closers. Empty Calendars. I Saw The Same Pattern Everywhere.
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
            Over the past six years, I&apos;ve managed lead generation
            campaigns for over 100 businesses, including coaches,
            consultants, and service providers across three countries.
          </p>
          <p>
            Here&apos;s what I kept seeing: strong closers with empty
            calendars. Consultants who closed 30 to 40% of their discovery
            calls, but only had three or four calls a week. The ads were
            working. The leads were filling out forms. But by the time
            someone responded, the prospect had already moved on.
          </p>
          <p>
            I started tracking response times across our client base. The
            pattern was undeniable: the consultant who responded first won
            the client. Not the best consultant, not the cheapest. The
            fastest. Most were responding in 4 to 8 hours. Their competitors
            were responding in minutes.
          </p>
          <p className="font-display font-extrabold text-brand-ink text-xl md:text-2xl leading-snug">
            That&apos;s when I built The Growth System. Not more ads. Not a
            better CRM. A system that responds to every lead in under 60
            seconds, qualifies them, and books the call. Before your VA even
            opens the inbox.
          </p>
        </StoryBlock>
      </section>

      {/* ─── BIG DOMINO ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-6">
        <AccentHeadline
          gold="The coaches scaling past $1M all have one thing in common."
          black="They removed themselves from lead generation entirely. AI handles the first touch, the follow-up, and the qualification. The coach only shows up when someone is ready to buy."
        />
      </section>

      {/* ─── PROOF ────────────────────────────────────────────────── */}
      <ProofBadges
        headline="Proof! Look At The Results Our Consulting Clients Are Booking."
        subhead="Exact numbers pulled from live campaign dashboards — not the marketing deck."
        badges={[
          { value: '100+', label: 'Businesses Partnered With' },
          { value: '24%', label: 'Lead Lift (Elevated Diversity)' },
          { value: '37%', label: 'Booking Boost (Waxxpot)' },
          { value: '21%', label: 'Volume Growth (HBOT)' },
        ]}
        footerLine="That isn't to brag. It's proof that when the system responds in 60 seconds and follows up until they book, qualified calls land on the calendar whether you show up or not."
        ctaText="Apply For The Growth System Now"
        ctaSubline="Only 3 Consultant Spots Open For May"
        ctaHref="/apply"
        bgImage={IMG.proofBg}
      />

      {/* ─── "A RISING TIDE" EQUIVALENT ───────────────────────────── */}
      <section className="bg-brand-paper py-20 md:py-24 px-6">
        <AccentHeadline
          gold="A rising tide lifts all boats."
          black="Here's exactly what you get when you plug The Growth System into your practice."
        />
      </section>

      {/* ─── MECHANISMS ───────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="space-y-24 md:space-y-32">
          <EventBlock
            label="Component #1"
            title="The 60-Second First Touch"
            photo={IMG.mech1}
            photoAlt="Instant AI response system"
          >
            <p>
              Every inquiry that hits your form, chat, or inbox gets a
              response in under 60 seconds. Personalized. Contextual. In
              your voice, not a canned auto-reply.
            </p>
            <p>
              Your prospects never wait. The speed alone wins 30 to 50% of
              the deals that used to slip to competitors with 9-to-5 VAs.
            </p>
            <p className="font-display font-bold text-brand-ink">
              Fastest consultant wins. Every time.
            </p>
          </EventBlock>

          <EventBlock
            label="Component #2"
            title="The Calendar Gatekeeper"
            photo={IMG.mech2}
            photoAlt="Lead qualification engine"
            reversed
          >
            <p>
              Before anything hits your calendar, the system qualifies the
              lead against your exact criteria: revenue, industry, readiness
              to invest, alignment with your offer.
            </p>
            <p>
              Tire-kickers get filtered out with a polite, helpful
              deflection. Only prospects who match your ideal client profile
              make it to your schedule.
            </p>
            <p className="font-display font-bold text-brand-ink">
              No more Mondays wasted on unqualified calls.
            </p>
          </EventBlock>

          <EventBlock
            label="Component #3"
            title="The Persistent Pipeline"
            photo={IMG.mech3}
            photoAlt="Multi-channel follow-up engine"
          >
            <p>
              Every lead that doesn&apos;t book on the first touch gets rolled
              into a multi-channel sequence: email, SMS, chat. Ongoing,
              context-aware, adjusting based on what they click and when.
            </p>
            <p>
              It runs until they book or opt out. Not a drip campaign. A
              persistent system that treats every lead like a human being,
              not a list entry.
            </p>
            <p className="font-display font-bold text-brand-ink">
              Persistent without being pushy.
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
              Weekly lead quality scoring and conversion tracking. See which
              sources bring the closers, which ones bring the ghosters, and
              where your actual ROI lives.
            </p>
            <p>
              No more guessing which content, channel, or campaign is
              paying. You see it on Monday morning before your first call.
            </p>
            <p className="font-display font-bold text-brand-ink">
              Know what drives revenue. Drop the rest.
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
                    <span className="text-white/75 leading-relaxed">
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
            Ready To Fill Your Calendar On Autopilot?
          </h3>
          <CTAButton
            text="Apply For The Growth System Now"
            subline="Only 3 Consultant Spots Open For May"
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

      {/* ─── FINAL SIGNOFF ───────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6">
        <Signoff
          portrait={IMG.milosPortrait}
          name="Milos"
          title="Founder, The Snow Media"
          intro={
            <>
              <p>
                The great Alex Hormozi once said: &ldquo;The business that is
                willing to respond the fastest, follow up the most, and care
                the longest always wins.&rdquo;
              </p>
              <p>
                That&apos;s exactly what The Growth System gives you. The
                fastest first touch. The most persistent follow-up. The
                cleanest qualifying gate. Built behind your existing practice
                so you keep your offer, your voice, your relationships.
              </p>
              <p>
                Go ahead and click the button below to apply. I&apos;ll
                personally review your lead flow and tell you straight
                whether this is a fit for your practice.
              </p>
              <p>Once the May spots are taken, this page closes until June.</p>
              <p className="text-brand-ink/70">Excited to have you in,</p>
            </>
          }
          ctaText="Apply For The Growth System Now"
          ctaSubline="Limited To 3 Consultants Per Month"
          ctaHref="/apply"
        />
      </section>

      <Footer />
    </main>
  )
}

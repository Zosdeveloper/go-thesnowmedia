# Go The Snow Media - Landing Pages

## Project Overview
Brunson-style landing pages for selling AI services (AI agents + AI automations bundled as "The Growth System") to two niches via Google Ads.

**Deploy target:** go.thesnowmedia.com (subdomain, Vercel)
**Tech stack:** Next.js 15 SSG, TypeScript, Tailwind CSS v3, Framer Motion, Phosphor Icons
**Repo:** Zosdeveloper/go-thesnowmedia

## Routes
| Route | Purpose |
|-------|---------|
| `/contractors` | Home Services landing page (plumbing, HVAC, roofing, solar) |
| `/consultants` | Coaching/Consulting landing page |
| `/apply` | 5-field qualifying application form |
| `/thanks` | Post-submission confirmation + Calendly placeholder |

## Current Status (April 2026)
**V1 is built and compiles clean.** All copy, section structure, and Brunson framework are implemented. BUT the visual design is WRONG and needs a complete redesign.

### What's Done
- All Brunson copywriting implemented (Hook/Story/Offer, Epiphany Bridge, Big Domino, named mechanisms, Before/After, curiosity headlines)
- Shared components: CTAButton (magnetic hover), VideoEmbed (click-to-play), FAQ (animated accordion), SocialProofCard (spotlight hover), AnimatedSection, ExitIntentPopup
- Application form with 5 qualifying fields
- Thank-you page with 3-step next actions + Calendly placeholder
- No navigation, no footer, no outbound links (pure conversion focus)
- Exit-intent popup with alternate offer (free guide)
- Research PDFs saved in `/research/`

### What Needs to Change (NEXT SESSION)
The visual layer is completely wrong. Current: all-dark zinc-950 developer aesthetic. Brunson's actual pages use:

1. **Dark hero section ONLY.** Everything below switches to WHITE background.
2. **White/light background** for 80%+ of the page. Black text on white.
3. **Red/maroon CTA buttons** (rgb 154,50,61) or dark green (rgb 15,87,69). NOT gold. Gold is accent only for labels/highlights.
4. **Real photography everywhere.** Milos headshot (REQUIRED), system mockup, event/work photos.
5. **Long-form editorial copy style** on white background. Not short punchy cards.
6. **Montserrat for headlines (800 weight), Open Sans for body text.**
7. **Stats bar** with big numbers.
8. **Video testimonials** in grid layout where available.

### What Does NOT Change
- All copy stays (headlines, Epiphany Bridge story, Big Domino, FAQ, mechanism names)
- Section order stays (Hero, Problem, Story, Big Domino, Social Proof, Solution, Before/After, CTA, FAQ, Final CTA)
- Funnel flow stays (Landing Page → Application → Thank You/Calendar)
- Exit-intent popup stays
- No navigation, no footer

## Research Files
All in `/research/`:
| File | Contents |
|------|----------|
| `01-Landing-Page-Strategy-Research.pdf` | 6-agent research: landing pages vs service pages, niche specificity, buyer psychology, Google Ads quality score |
| `02-Brunson-Methodology-Research.pdf` | 6-agent research: funnel architecture, copywriting (Hook/Story/Offer, Epiphany Bridge, Big Domino), VSL script, post-click flow, B2B adaptations |
| `03-Brunson-Review-And-Improvements.pdf` | "Act as Brunson" critique, 10 improvements, design audit, visual analysis of real Brunson pages |
| `04-Brunson-Page-Directory.pdf` | 100+ real Brunson page URLs organized by category |
| `brunson-pages.html` (project root) | Interactive version of the URL directory with clickable links |

## Key Reference Pages (Brunson)
Study these before redesigning:
- `innercircleforlife.com` - $50K/yr application funnel (closest to our use case)
- `twocommaclubx.com/2ccx-application` - $25K/yr application with VSL
- `dotcomsecrets.com` - Classic free+shipping book funnel
- `sellingonline.com` - Current primary challenge funnel

## Copy Assets
### Contractors Page Headlines
- Pre-headline: "For contractors doing $500K+ per year"
- H1: "How Contractors Are Recovering $15K+ Per Month in Lost Revenue Without Hiring a Single Person"
- Subheadline: "Discover the system 107 service businesses use to stop losing jobs to voicemail and start booking estimates around the clock. Setup takes 30 minutes."
- CTA: "See If You Qualify"

### Consultants Page Headlines  
- Pre-headline: "For coaches and consultants doing $500K+ per year"
- H1: "How Consultants Are Filling Their Calendar With Qualified Calls Without Posting, Emailing, or Chasing a Single Lead"
- CTA: "See If You Qualify"

### Named Mechanisms (Contractors)
- The After-Hours Revenue Recovery System
- The Silent Closer
- The Dormant Revenue Reactivator
- The Growth Scoreboard

### Named Mechanisms (Consultants)
- The 60-Second First Touch
- The Calendar Gatekeeper
- The Persistent Pipeline
- The Growth Scoreboard

## Case Studies Used
### Contractors Page
- PlugPV: 230% boost in qualified leads, 36% lower CPL, 52% more traffic
- BMS Moving: 70% uplift in SQLs, 58% reduction in CPL, 222% boost in CVR
- SPEAR PT: 63% increase in bookings, 16% decrease in CPA, 82% more traffic

### Consultants Page
- Elevated Diversity: 24% increase in leads, 15% lower CPL, 38% more traffic
- HBOT: 21% lead growth, 27% lower CPA, 12% efficiency gain
- Waxxpot: 37% increase in bookings, 42% reduction in CPA, 29% revenue boost

## Rules
- No em dashes or double hyphens in any copy
- No fabricated stats or case studies (all metrics from verified Snow Media case studies)
- First-person voice ("I built..." not "We built...")
- Montserrat is the brand font (stays)
- No countdown timers, structural scarcity only
- `noindex, nofollow` on all pages (ad traffic only, not for organic)

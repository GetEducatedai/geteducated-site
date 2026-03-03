# GetEducated.ai — Site Brief (v2 — Final)

## Design Direction
Reference: Whenevr + Viral Framer templates
- Light mode: warm soft white/cream background `#F5F2EE` (not pure white)
- Section alternates: `#FFFFFF` and `#F5F2EE`
- Text: near-black `#0D0D0D`
- Color splash: floating gradient blobs (blue + violet + soft purple) as CSS radial-gradient backgrounds — used in hero and key sections
- Rounded everywhere: cards (radius 20px+), buttons (pill/full), tags (pill), nav items
- Black pill CTA buttons with white text
- White cards with subtle border `#E8E4DF`, generous padding, rounded corners
- Heavy white space — sections breathe

## Typography
- **Display/Headlines:** Plus Jakarta Sans (800/900 weight) — bold, modern, clean
- **Italic accent words in headlines:** Playfair Display Italic — creates elegant contrast like "World-class design *whenevr* you need it" — use on ONE key word per headline
- **Body:** Inter (400/500) — clean, readable
- Import both from Google Fonts

## Headline style example:
`You don't need another course. You need` ***infrastructure.***
(where "infrastructure." is in Playfair Display Italic)

## Color Palette
- Background: `#F5F2EE`
- White sections: `#FFFFFF`  
- Text: `#0D0D0D`
- Muted text: `#6B6B6B`
- Accent blob colors: `#7C3AED` (violet), `#3B82F6` (blue), `#A855F7` (purple) — used only as gradient blobs, never as solid fills on text/buttons
- CTA buttons: `#0D0D0D` background, `#FFFFFF` text, border-radius: 9999px

## Brand Voice
- Direct. No corporate speak.
- Anti-establishment with a plan.
- Short punchy sentences. Rhythm variation.
- No fake urgency. No emojis in body copy.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- TypeScript
- Google Fonts: Plus Jakarta Sans + Playfair Display + Inter

## Sections (in order)
1. **Nav** — Logo (text: "GetEducated.ai" in Plus Jakarta Sans) + nav links (Home, Academy, Community, Events, About) + "Join Community" black pill CTA
2. **Hero** — Large headline with Playfair italic accent word, subline in Inter, two CTAs ("Join Community" black pill + "Watch Free Masterclass" ghost pill), floating gradient blob right side, social proof badge "150+ members building in public"
3. **Marquee** — "Powered by the world's best AI tools" — scrolling logos: Midjourney, Runway, Claude, ElevenLabs, HeyGen, Gamma, OpenAI, Notion
4. **Bento Grid** — 6 white cards on cream bg: Community, Academy, Templates, Collaborations, Events, "Find Your People. Build Your Future." — staggered Framer Motion entrance
5. **Why We're Different** — Side by side or card comparison: Traditional Education vs GetEducated.ai
6. **How It Works** — 3 large numbered steps with gradient blob accent: 01 Learn → 02 Build → 03 Lead
7. **Masterclass** — Soft gradient blob background section, AI Consultant Blueprint free course CTA
8. **Courses** — White card grid, 4 courses with cover images (use placeholder gradients), hover lift effect
9. **Pricing** — White cards on cream bg. Members ($97/mo) vs Architects ($199/mo). Quarterly/Annual toggle. Black pill CTA. 7-day guarantee badge.
10. **Founding Member** — Special full-width section with gradient blob bg, "Free for the first 50 founding members." Email input + black CTA button
11. **Events** — Two event cards: RE:WIRE Dubai + Visionaries in Paradise Tulum
12. **Footer** — Cream bg, logo, nav links, social icons (Instagram, YouTube, Twitter, LinkedIn), email signup, copyright

## Key CTAs
- Primary: "Join Community" → https://go.geteducated.ai
- Secondary: "Watch Free Masterclass"
- Founding Member: Email capture → form submit

## Animations (Framer Motion)
- Hero: staggered text reveal (each word or line fades up)
- Scroll: fade-up entrance for each section (AnimateIn wrapper)
- Bento cards: staggered entrance
- Pricing toggle: smooth spring transition
- Marquee: continuous auto-scroll with pause on hover
- Gradient blobs: slow float/pulse animation (CSS keyframes)
- Buttons: subtle scale on hover

## Chatbot Widget
- Bottom right, black circular floating button with chat icon
- Opens modal — FAQ answers about GetEducated.ai
- Clean white modal, rounded corners

## Notes
- Mobile responsive (priority — single column on mobile)
- Gradient blobs = CSS only (no images) for fast load
- Deploy ready for Vercel
- Push to GitHub: GetEducatedai/geteducated-site

---

## SERVICES PAGE (Critical — Add This)

Separate `/services` page. This is the primary cold traffic landing page for ads. Conversion is the #1 priority.

### Services to feature:

**1. Custom AI Agents**
- Lead generation agents (qualify + nurture leads automatically)
- Content creation agents (auto-generate + schedule social content)
- Marketing automation agents
- Operations agents (internal workflows, client onboarding, reporting)

**2. AI Brand Revamp**
- Give legacy/old brands a facelift for the digital age
- Includes: new logo, website redesign, brand identity system
- "Your brand was built for the old world. We rebuild it for AI."

**3. Custom App & SaaS Development**
- Full-stack app builds
- SaaS MVP development
- AI-powered product features

### Services Page Design:
- Same aesthetic as home page (cream bg, pill buttons, gradient blobs)
- Hero: bold headline + subline + "Book a Free Strategy Call" black pill CTA
- Each service = large card with icon, name, description, benefit bullets, starting price (optional)
- Social proof section: logos or brief case study snippets (La Villa, The Archispace)
- Bottom CTA: full-width "Ready to Build?" section with email/calendar booking form
- Mobile-first, fast-loading, conversion-optimized

### Nav update:
Add "Services" link to main nav pointing to `/services`

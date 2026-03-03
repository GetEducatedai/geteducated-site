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

---

## ANIMATIONS & INTERACTIVE COMPONENTS (Priority — Make It Futuristic)

### Hero Animations
- Text reveal: words animate in with staggered fade+slide (not all at once)
- Gradient blobs: slow continuous float + scale pulse (CSS keyframes)
- Scroll indicator: animated bouncing arrow or dot
- Counter animation: "150+ members" counts up when scrolled into view

### Service Cards (Services Page)
- Hover: card lifts (translateY -8px), subtle violet glow shadow, image zooms 1.05x
- Icon: rotates or pulses on hover
- Reveal: cards stagger in from bottom on scroll

### Bento Grid
- Each card has a unique micro-animation on hover (scale, glow, border color shift)
- Mix card sizes (2 large, 4 small) for asymmetric editorial layout
- One card has an animated counter/number
- One card has a looping gradient shimmer effect

### Global
- Smooth page transitions (Framer Motion layout animations)
- Magnetic buttons: CTAs subtly follow cursor on hover (JS mousemove)
- Custom cursor: replace default cursor with a small dot + circle follower
- Scroll-triggered reveals: every section fades+slides up as it enters viewport
- Number counters animate when scrolled into view
- Marquee pauses on hover, resumes on mouseout

### Services Page Specific
- Hero section: floating 3D-ish cards rotate slightly on scroll (parallax)
- Service cards: click to expand with more details (accordion style)
- Stats section: animated counters (e.g. "50+ AI Agents Built", "3 Countries", "2 Happy Clients")
- Process steps: numbered steps with connecting animated line between them

### Typography Effects
- Hero headline: each word or line has a slight blur-to-clear reveal
- Key italic Playfair words: subtle underline draw animation on load

---

## COMPREHENSIVE UI/UX UPGRADE (Priority — Make It Sexy)

### Navigation
- Glassmorphism blur on scroll: `backdrop-blur-md bg-white/70 border-b border-white/20` when scrolled
- Add LOGIN button (ghost/outline pill) → links to https://go.geteducated.ai
- Nav: Logo | Home | Academy | Services | Community | Events | About | [LOGIN] [Join Community]

### Hero Section
- Change "150+ members" → "50+ Founding Members" or "Join as a Founding Beta Member"
- "Join Community" CTA → smooth scroll to #pricing section (NOT to go.geteducated.ai)
- "Watch Free Masterclass" → add ▶ play icon before text
- More personality, color, soul

### AI Tools Marquee
- Replace pill text components with ACTUAL LOGOS (SVG/PNG) for each tool
- Get logo images from: Midjourney, Runway, Claude (Anthropic), ElevenLabs, HeyGen, Gamma.app, OpenAI, Notion, ChatGPT
- Use brand colors where possible

### Bento Grid (being rebuilt by separate agent)
- Already in progress — rich visual cards per earlier spec

### Why We're Different
- Redesign completely — less table, more visual
- Inspiration: the reference Framer screenshots sent earlier
- Use visual contrast cards or split layout instead of comparison table

### How It Works — 3 Steps (Interactive Timeline)
- New heading: "Your Journey Starts Here" or "The GetEducated Path"
- Make it an interactive visual timeline/journey, not just numbered cards
- Step 01 — LEARN: "Master the AI tools shaping the world" — show AI tool logos floating
- Step 02 — BUILD: "Build in public. Share your progress with a community that gets it." — show a post/thread UI mockup
- Step 03 — LEAD: "Lead with confidence in the AI era." — show metrics/growth visual
- Add connecting animated line between steps
- Hover: each step expands or glows

### Courses Section
- Only AI Consultant Blueprint is LIVE and FREE — mark it clearly with a "FREE" badge
- All other courses: placeholder gradient covers with "Coming Soon" badge overlay
- Remove specific course names if not decided yet — use generic: "AI Tools Mastery", "Creator's Playbook", "AI for Business"

### Pricing Cards
- MUCH more modern and futuristic
- Add gradient accent borders or glow effects
- Add floating icons or visual elements in the cards
- More personality — Members vs Architects should feel like different worlds
- Add a "Most Popular" badge to Architects
- "Join Community" on pricing CTA → takes them to https://go.geteducated.ai to checkout

### Events Section
- RE:WIRE: use Dubai skyline photo (dramatic, golden hour — find on Unsplash)
  - Description: "The quarterly event at the convergence of AI, entrepreneurship, wellness tech and community building."
  - Next event: May 2026, Dubai
- Visionaries in Paradise: use Tulum/exotic aerial beach photo
- Both cards should be more immersive — full bleed photo with overlay text

### Font Cohesion
- Reduce the size gap between Playfair Display italic and Plus Jakarta Sans headers
- Make Playfair italic feel MORE BOLD — use font-weight 700 or 900 if available, or increase size slightly
- The two fonts should feel harmonious not jarring

### Testimonials (when added)
- Round circular profile photos for each testimonial author
- Clean card design with quote mark graphic

### Animations & Feel
- Full smooth scroll behavior (CSS: scroll-behavior: smooth + scroll-snap where appropriate)
- Add more micro-animations: hover states, button press effects, card lifts
- Stagger ALL section entrance animations
- Add subtle parallax to hero and event cards
- The site should feel FLUID and ALIVE like a premium Framer site

### Social Links (Footer — FINAL)
- Email: info@geteducated.ai
- Instagram: https://instagram.com/geteducated.ai
- X/Twitter: https://twitter.com/geteducated_ai
- TikTok: https://tiktok.com/geteducated.ai
- YouTube: https://www.youtube.com/@GetEducatedAI
- LinkedIn: https://www.linkedin.com/company/geteducated-ai
- Facebook: https://www.facebook.com/geteducatedai
- Add TikTok icon to footer (was missing)

---

## ABOUT / INSTRUCTOR SECTION — Final Copy

**Section header:** "Meet Your Instructor"

**Name:** Emaan Faith
**Title:** Founder of GetEducated.ai

**Bio copy (use verbatim):**
"I'm Emaan Faith, the Founder of GetEducated.ai. I went from self-taught artist to building a thriving AI consulting business without learning how to code.

I didn't start as a technical person. I'm a visual artist known for painting murals around the world. No computer science degree. No coding bootcamp. Just curiosity and a business mindset.

When I discovered AI, I saw what most people miss: The biggest opportunity isn't building the technology. It's bridging the gap between businesses that need it and the solutions that exist.

So I started consulting. Not as a developer, but as a strategic guide. Someone who could understand business problems, recommend the right AI solutions, and partner with technical experts for delivery.

Now I'm teaching non-technical people like you to do what I did: Turn AI knowledge into high-income AI consulting, without becoming a developer.

This masterclass is the complete system I wish I had when I started. No hype. No theory. Just the real playbook. And I'm giving it to you for free."

**Photo:** /images/emaan-headshot.jpg (already saved)

**Design:** Split layout — photo left (or right), bio text on other side. Warm, personal, confident. Add subtle floating credential badges or stats (10 years as artist, murals worldwide, self-taught).

---

## SOCIAL PROOF WIDGET (Hero Section)

Replace the "150+ members" badge with this exact style:
- 3 overlapping circular avatar photos (diverse faces, real-looking)
- Bold number: "50+" 
- 5 gold star icons (⭐⭐⭐⭐⭐)
- Two lines of text: "Multiple continents" + "One shared vision"
- Compact pill/widget style, positioned near hero CTAs
- Keep it small and elegant — not a big section, just a trust signal

---

## CONTACT PAGE (src/app/contact/page.tsx)

Route: /contact
Nav: Add "Contact" link to Nav

Design: Clean, minimal, editorial feel matching site aesthetic
- Section header: "Let's Talk" or "Get In Touch"
- Subheading: "Whether you're ready to build or just curious — we'd love to hear from you."
- Contact form fields: Name, Email, Subject (dropdown: General Inquiry / AI Consulting / Partnership / Events / Press), Message
- Form submission: mailto:info@geteducated.ai (or Formspree/Resend integration)
- Direct email CTA: "Prefer email? Reach us at info@geteducated.ai"
- Social links strip at bottom (same icons as footer)
- Also add mailto:info@geteducated.ai to footer "Contact" link

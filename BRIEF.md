# GetEducated.ai — Site Brief

## Brand
- Luxury, minimal, Apple-inspired aesthetic
- Bold and revolutionary, inspiring, empowering
- Anti-establishment, pro-freedom, pro-lifestyle design
- Color palette: near-black (#0A0A0A) + warm off-white (#F5F0E8) + jade/teal accent (#2D9E8A)
- Typography: bold, clean, modern (Inter or similar)
- Heavy white space, fluid animations, premium feel

## Brand Voice
- Direct. No corporate speak.
- Anti-establishment with a plan.
- Short punchy sentences. Rhythm variation.
- No fake urgency. No clickbait. No emojis in body copy.
- "You don't need another course. You need infrastructure."

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion (animations)
- TypeScript

## Sections (in order)
1. **Nav** — Logo + nav links + "Join Community" CTA button
2. **Hero** — Bold headline, subline, two CTAs (Join Community / Watch Free Masterclass), floating social proof badge ("150+ members building in public")
3. **Marquee** — Scrolling AI tool logos (Midjourney, Runway, Claude, ElevenLabs, HeyGen, Gamma, OpenAI, etc.)
4. **Bento Grid** — 6 cards: Community, Academy, Templates, Collaborations, Events, "Find Your People. Build Your Future."
5. **Why We're Different** — Comparison: Traditional Education vs GetEducated.ai (clean table/cards)
6. **How It Works** — 3 steps: 01 Learn → 02 Build → 03 Lead
7. **Masterclass** — AI Consultant Blueprint free course CTA
8. **Courses** — Grid of 4 course cards
9. **Pricing** — Members ($97/mo quarterly, save 20% annual) vs Architects ($199/mo quarterly, save 20% annual). Toggle between quarterly/annual. 7-day money back guarantee.
10. **Founding Member Banner** — Special section: "Be a Founding Member. Free for the first 50." Email capture modal.
11. **Events** — RE:WIRE Dubai + Visionaries in Paradise Tulum
12. **Footer** — Logo, nav links, social icons, email signup, copyright

## Key CTAs
- Primary: "Join Community" → https://go.geteducated.ai
- Secondary: "Watch Free Masterclass"
- Founding Member: Email capture (modal popup)

## Animations
- Smooth scroll
- Fade-in on scroll for each section
- Staggered card animations
- Marquee auto-scroll
- Pricing toggle with smooth transition
- Hero text reveal animation

## Chatbot Widget
- Bottom right floating button
- Opens modal chat powered by a simple FAQ response system
- Answers: What is GetEducated.ai? How much does it cost? What courses are available? How do I join?

## Notes
- Mobile responsive (priority)
- Fast load (no heavy images, use CSS gradients and SVG where possible)
- Deploy ready for Vercel
- No external fonts that slow load — use system font stack or self-hosted Inter

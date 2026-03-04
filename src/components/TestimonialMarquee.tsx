'use client';

const testimonials = [
  {
    name: 'Sarah B.',
    handle: '@sarah_builds',
    platform: 'twitter',
    quote: 'Just landed my first AI consulting client — $2,500 retainer in week 3!',
    photo: 'photo-1494790108377-be9c29b29330',
  },
  {
    name: 'Marcus A.',
    handle: '@marcus_ai',
    platform: 'twitter',
    quote: 'Shipped a ManyChat automation for a restaurant chain. 3 new clients this month',
    photo: 'photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Priya C.',
    handle: '@priya.creates',
    platform: 'instagram',
    quote: 'Went from zero to $8K/month in 60 days using the blueprint',
    photo: 'photo-1438761681033-6461ffad8d80',
  },
  {
    name: 'Alex R.',
    handle: '@alex_nomad',
    platform: 'twitter',
    quote: 'Quit my 9-5 after landing 2 retainer clients through GetEducated strategies',
    photo: 'photo-1500648767791-00dcc994a43e',
  },
  {
    name: 'Luna B.',
    handle: '@luna_builds',
    platform: 'twitter',
    quote: 'Built my first n8n workflow for a client — charged $1,800. Mind blown',
    photo: 'photo-1534528741775-53994a69daeb',
  },
  {
    name: 'David C.',
    handle: '@david_ai',
    platform: 'twitter',
    quote: 'The community alone is worth 10x the membership fee. Invaluable connections',
    photo: 'photo-1488426862026-3ee34a7d66df',
  },
  {
    name: 'Maya S.',
    handle: '@maya_studio',
    platform: 'instagram',
    quote: 'Got my first $5K project in week 6. The outreach scripts are gold',
    photo: 'photo-1489424731084-a5d8b219a5bb',
  },
  {
    name: 'James L.',
    handle: '@james_creator',
    platform: 'twitter',
    quote: 'From clueless to confident in AI consulting in literally 30 days',
    photo: 'photo-1539571696357-5a69c17a67c6',
  },
  {
    name: 'Sofia T.',
    handle: '@sofia_tech',
    platform: 'twitter',
    quote: 'The 1-on-1 mentorship helped me close my biggest deal — $12K project',
    photo: 'photo-1517841905240-472988babdf9',
  },
  {
    name: 'Noah B.',
    handle: '@noah_builds',
    platform: 'twitter',
    quote: '3 paying clients in 45 days. The AI Business Audit template is a cheat code',
    photo: 'photo-1524504388940-b1c1722653e1',
  },
  {
    name: 'Emma A.',
    handle: '@emma_ai',
    platform: 'instagram',
    quote: 'Community calls alone changed how I think about positioning and pricing',
    photo: 'photo-1463453091185-61582044d556',
  },
  {
    name: 'Ryan C.',
    handle: '@ryan_creator',
    platform: 'twitter',
    quote: 'Landed a $4K retainer for AI content automation. Paid for years of membership',
    photo: 'photo-1521119989659-a83eee488004',
  },
];

const row1 = testimonials.slice(0, 6);
const row2 = testimonials.slice(6, 12);

function TwitterIcon() {
  return (
    <svg className="w-4 h-4 text-white/30" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4 text-white/30" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5 mt-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="url(#star-gradient)">
          <defs>
            <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#9B1C1C" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="flex-shrink-0 w-[340px] bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={`https://images.unsplash.com/${t.photo}?w=80&h=80&fit=crop&crop=face`}
          alt={t.name}
          crossOrigin="anonymous"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-display font-semibold">{t.name}</p>
          <p className="text-white/40 text-xs">{t.handle}</p>
        </div>
        {t.platform === 'twitter' ? <TwitterIcon /> : <InstagramIcon />}
      </div>
      <p className="text-white/70 text-sm leading-relaxed">{t.quote}</p>
      <StarRating />
    </div>
  );
}

export default function TestimonialMarquee() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="max-w-5xl mx-auto px-6 text-center mb-14">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] rounded-full px-4 py-1.5 text-xs font-semibold font-display">
            <span className="w-2 h-2 bg-[#9B1C1C] rounded-full" />
            Member Wins
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Real results from{' '}
          <span className="font-serif italic font-normal">real builders</span>
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-6">
        <div className="flex gap-6 animate-marquee-left">
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee-right">
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

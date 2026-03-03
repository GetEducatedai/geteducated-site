"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ───────────────── shared ───────────────── */

const TALLY_URL = "https://tally.so/r/PdzRxb";

function AnimateIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm text-white/80 text-xs font-display font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
      {children}
    </span>
  );
}

function PillBadgeDark({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-ink/5 border border-ink/10 text-ink/60 text-xs font-display font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
      {children}
    </span>
  );
}

function EmailCapture({
  dark = false,
  buttonText = "Get Access",
}: {
  dark?: boolean;
  buttonText?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center gap-3 px-5 py-3 rounded-full ${
          dark ? "bg-white/10 text-white" : "bg-ink/5 text-ink"
        }`}
      >
        <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm font-display font-semibold">
          You&apos;re in! Check your inbox for access.
        </span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className={`flex-1 px-5 py-3 rounded-full text-sm font-body focus:outline-none transition ${
          dark
            ? "bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:border-white/30"
            : "bg-white border border-ink/10 text-ink placeholder:text-ink/40 focus:border-ink/30"
        }`}
      />
      <button
        type="submit"
        className={`px-6 py-3 rounded-full text-sm font-display font-semibold transition btn-press shrink-0 ${
          dark
            ? "bg-white text-ink hover:opacity-90"
            : "bg-ink text-white hover:opacity-90"
        }`}
      >
        {buttonText}
      </button>
    </form>
  );
}

function SocialProof({ dark = true }: { dark?: boolean }) {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face",
  ];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Stacked avatars */}
      <div className="flex -space-x-3">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`w-9 h-9 rounded-full object-cover ring-2 ${
              dark ? "ring-[#0D0D0D]" : "ring-cream"
            }`}
          />
        ))}
        <span
          className={`flex items-center justify-center w-9 h-9 rounded-full text-xs font-display font-bold ring-2 ${
            dark
              ? "bg-white/10 text-white ring-[#0D0D0D]"
              : "bg-ink/10 text-ink ring-cream"
          }`}
        >
          250+
        </span>
      </div>

      {/* Stars + text */}
      <div>
        <div className="flex gap-0.5 mb-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className={`text-xs font-body ${dark ? "text-white/50" : "text-ink/50"}`}>
          No credit card required. Instant access.
        </p>
      </div>
    </div>
  );
}

/* ───────────────── Section 1: Hero ───────────────── */

function Hero() {
  return (
    <section className="relative bg-[#0D0D0D] pt-28 pb-20 px-6 overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#1a1a2e]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <AnimateIn>
          <span className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/20 text-red-400 text-xs font-display font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Live Now
          </span>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Build a profitable AI consulting business in 30 days
            <br />
            <span className="font-serif italic text-white/80">for non-techies</span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-white/50 text-lg sm:text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed">
            The complete system for positioning yourself as an AI expert, landing $5K–$15K clients, and delivering world-class solutions — even if you&apos;re completely non-technical.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="flex flex-col items-center gap-6">
            <EmailCapture dark />
            <SocialProof dark />
          </div>
        </AnimateIn>

        {/* VSL Placeholder */}
        <AnimateIn delay={0.4}>
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative bg-[#1a1a1a] rounded-2xl border border-white/10 aspect-video flex items-center justify-center overflow-hidden group cursor-pointer">
              {/* Laptop bezel effect */}
              <div className="absolute inset-3 bg-[#111] rounded-xl" />
              {/* Play button */}
              <a
                href={TALLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all group-hover:scale-110">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white/40 text-sm font-display font-medium tracking-wide">
                  Free Masterclass Video
                </span>
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ───────────────── Section 2: Problem ───────────────── */

const painPoints = [
  {
    title: "\"I'm not technical enough\"",
    body: "You've heard AI is the future, but every course assumes you can code. You're strategic and business-savvy — but not a developer. And you think that disqualifies you.",
  },
  {
    title: "\"I don't know where to start\"",
    body: "Thousands of AI tools. Everyone talking about ChatGPT and automation. But which tools actually matter for consulting? How do you cut through the noise?",
  },
  {
    title: "\"I can't deliver the work\"",
    body: "Maybe you could sell AI consulting services — but then what? How do you actually build the solutions? You don't have time to become a developer. And you can't afford to fail your first client.",
  },
];

function ProblemSection() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink text-center leading-tight mb-4">
            You&apos;re not alone. Most people feel{" "}
            <span className="font-serif italic">this way.</span>
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {painPoints.map((p, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-border p-8 h-full hover:-translate-y-1 transition-transform">
                <h3 className="font-display text-lg font-bold text-ink mb-4">{p.title}</h3>
                <p className="text-muted text-sm font-body leading-relaxed">{p.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="font-display text-2xl sm:text-3xl font-extrabold text-ink mb-6">
              Here&apos;s the truth: Being non-technical is actually your{" "}
              <span className="font-serif italic">biggest advantage.</span>
            </p>
            <div className="space-y-2 text-muted font-body text-base mb-6">
              <p>You speak business language, not code.</p>
              <p>You understand client problems, not algorithms.</p>
              <p>You ask the right questions instead of jumping to technical solutions.</p>
            </div>
            <p className="font-display font-bold text-ink text-lg mb-8">
              This is exactly what businesses need.
            </p>
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-ink text-white font-display font-semibold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition btn-press"
            >
              Get Instant Access
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ───────────────── Section 3: Right For You ───────────────── */

const forYou = [
  "You're a consultant, coach, or freelancer who wants to add AI to your offering",
  "You're business-savvy but not technical",
  "You want a proven system — not another tool tutorial",
  "You're ready to take action in the next 30 days",
  "You're willing to do direct outreach to land clients",
];

const notForYou = [
  "You're looking for passive income or get-rich-quick schemes",
  "You expect results without doing outreach",
  "You don't actually want to build an AI business",
  "You can't invest 10–15 hours per week for 30 days",
  "You're not willing to hear \"no\" from prospects",
];

function RightForYou() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight mb-4">
              Is this training right{" "}
              <span className="font-serif italic">for you?</span>
            </h2>
            <p className="text-muted font-body text-lg max-w-xl mx-auto">
              You don&apos;t want to learn AI for curiosity — you want to build leverage.
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn delay={0.1}>
            <div className="bg-cream rounded-2xl border border-border p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-lg">✓</span>
                <h3 className="font-display text-lg font-bold text-ink">This is for you if</h3>
              </div>
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-body text-ink/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="bg-cream rounded-2xl border border-border p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-lg">✗</span>
                <h3 className="font-display text-lg font-bold text-ink">This is not for you if</h3>
              </div>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm font-body text-ink/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.3}>
          <div className="text-center mt-12">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-ink text-white font-display font-semibold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition btn-press"
            >
              Get Started Now
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ───────────────── Section 4: Tech Logos ───────────────── */

const techLogos = [
  { name: "n8n", domain: "n8n.io" },
  { name: "Make", domain: "make.com" },
  { name: "OpenAI", domain: "openai.com" },
  { name: "Midjourney", domain: "midjourney.com" },
  { name: "Runway", domain: "runwayml.com" },
];

function TechLogos() {
  return (
    <section className="bg-[#0D0D0D] py-14 px-6 border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] font-display font-semibold tracking-[0.25em] uppercase text-white/30 mb-8">
          Powered by world-class tech
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
          {techLogos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
              <img
                src={`https://logo.clearbit.com/${logo.domain}`}
                alt={logo.name}
                className="h-7 w-7 rounded"
                loading="lazy"
              />
              <span className="text-white text-sm font-display font-semibold hidden sm:inline">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Section 5: Curriculum ───────────────── */

const curriculum = [
  {
    num: "01",
    title: "The positioning formula",
    sub: "Position yourself as an AI expert — starting from zero.",
    bullets: [
      "3 AI consulting angles that work right now",
      "Craft your specialist statement",
      "Sound credible in your very first conversation",
    ],
  },
  {
    num: "02",
    title: "Client acquisition",
    sub: "Find businesses already paying $5K–$15K for AI help.",
    bullets: [
      "3 highest-ROI client acquisition channels",
      "The \"AI Business Audit\" framework (80% conversion rate)",
      "Outreach scripts for LinkedIn, email, and communities",
    ],
  },
  {
    num: "03",
    title: "Pricing & closing",
    sub: "Price confidently and close deals without feeling salesy.",
    bullets: [
      "Value-based pricing framework",
      "Pricing & proposal templates you can use today",
      "Monthly retainer model for recurring revenue",
    ],
  },
  {
    num: "04",
    title: "Delivery without coding",
    sub: "Deliver world-class AI solutions without building anything yourself.",
    bullets: [
      "Path A: work with developers (DIY model)",
      "Path B: partnership delivery — earn 30–40%",
      "Scale without becoming the bottleneck",
    ],
  },
  {
    num: "05",
    title: "Your 30-day roadmap",
    sub: "The exact week-by-week plan to land your first client.",
    bullets: [
      "What to focus on in your first 30 days",
      "What to ignore (this is just as important)",
      "Move from learning → outreach → paid work",
    ],
  },
];

function Curriculum() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight mb-4">
              What you&apos;ll learn in this{" "}
              <span className="font-serif italic">free masterclass</span>
            </h2>
            <p className="text-muted font-body text-lg max-w-xl mx-auto">
              A repeatable system for turning AI into paid advisory work — without becoming technical.
            </p>
          </div>
        </AnimateIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-ink/10" />

          <div className="space-y-4">
            {curriculum.map((item, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div
                  className="relative pl-16 cursor-pointer group"
                  onMouseEnter={() => setExpanded(i)}
                  onMouseLeave={() => setExpanded(null)}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  {/* Number badge */}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center font-display font-bold text-sm group-hover:scale-110 transition-transform">
                    {item.num}
                  </div>

                  <div className="bg-white rounded-2xl border border-border p-6 group-hover:shadow-lg transition-all">
                    <h3 className="font-display text-lg font-bold text-ink mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm font-body">{item.sub}</p>

                    <AnimatePresence>
                      {expanded === i && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-4 space-y-2"
                        >
                          {item.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-ink/70 font-body">
                              <span className="text-ink/30 mt-1">—</span>
                              {b}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={0.4}>
          <div className="text-center mt-14">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-ink text-white font-display font-semibold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition btn-press"
            >
              Watch Free Masterclass
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ───────────────── Section 6: Bonus Templates ───────────────── */

const templates = [
  {
    title: "AI Services Catalog",
    desc: "Comprehensive list of AI solutions with pricing frameworks",
  },
  {
    title: "AI Business Audit Template",
    desc: "The framework that converts prospects to paying clients",
  },
  {
    title: "Proposal & Contract Templates",
    desc: "Done-for-you proposals ready to send",
  },
  {
    title: "Outreach Script Library",
    desc: "20+ proven scripts for cold outreach",
  },
  {
    title: "30-Day Launch Roadmap",
    desc: "Week-by-week action plan to your first client",
  },
];

function BonusTemplates() {
  return (
    <section className="bg-[#0D0D0D] py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-14">
            <PillBadge>Modules</PillBadge>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mt-6 mb-4">
              Plus, you&apos;ll get access to these free{" "}
              <span className="font-serif italic text-white/80">plug-and-play templates</span>
            </h2>
            <p className="text-white/50 font-body text-lg max-w-xl mx-auto">
              Stop building from scratch. Get the exact templates and scripts we use with our paying clients.
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Blueprint cover */}
          <AnimateIn delay={0.1}>
            <div className="flex justify-center">
              <div className="relative w-72 aspect-[3/4] bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 mb-6">
                  <Image
                    src="/images/emaan-headshot.jpg"
                    alt="Emaan Faith"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-white/40 mb-2">
                  GetEducated.ai
                </p>
                <h3 className="font-display text-lg font-extrabold text-white text-center leading-snug">
                  AI Consultant
                  <br />
                  Blueprint
                </h3>
                <p className="text-white/40 text-xs font-body mt-3 text-center">
                  The complete system
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Template list */}
          <div className="space-y-4">
            {templates.map((t, i) => (
              <AnimateIn key={i} delay={0.15 + i * 0.08}>
                <div className="flex items-start gap-4 bg-white/5 rounded-xl border border-white/5 p-5 hover:bg-white/[0.08] transition">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-display font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-white text-sm mb-1">{t.title}</h4>
                    <p className="text-white/40 text-xs font-body leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={0.5}>
          <div className="text-center mt-14">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-white text-ink font-display font-semibold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition btn-press"
            >
              Get Instant Access
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ───────────────── Section 7: Meet Your Instructor ───────────────── */

function Instructor() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-14">
            <PillBadgeDark>Meet Your Instructor</PillBadgeDark>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateIn delay={0.1}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/emaan-casual.jpg"
                alt="Emaan Faith"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight mb-2">
                Hey, I&apos;m{" "}
                <span className="font-serif italic">Emaan Faith.</span>
              </h2>
              <p className="text-muted text-xs font-display font-semibold uppercase tracking-wider mb-6">
                Founder of GetEducated.ai
              </p>

              <div className="space-y-4 text-ink/70 font-body text-sm leading-relaxed">
                <p>
                  I went from self-taught artist to building a thriving AI consulting business without learning how to code.
                </p>
                <p>
                  I didn&apos;t start as a technical person. I&apos;m a visual artist known for painting murals around the world. No computer science degree. No coding bootcamp. Just curiosity and a business mindset.
                </p>
                <p>
                  When I discovered AI, I saw what most people miss: The biggest opportunity isn&apos;t building the technology. It&apos;s bridging the gap between businesses that need it and the solutions that exist.
                </p>
                <p>
                  So I started consulting. Not as a developer, but as a strategic guide. Someone who could understand business problems, recommend the right AI solutions, and partner with technical experts for delivery.
                </p>
                <p>
                  Now I&apos;m teaching non-technical people like you to do what I did: Turn AI knowledge into high-income AI consulting, without becoming a developer.
                </p>
                <p className="font-display font-semibold text-ink">
                  This masterclass is the complete system I wish I had when I started. No hype. No theory. Just the real playbook. And I&apos;m giving it to you for free.
                </p>
              </div>

              <a
                href={TALLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-ink text-white font-display font-semibold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition btn-press mt-8"
              >
                Get Instant Access
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Section 8: FAQ ───────────────── */

const faqs = [
  {
    q: "Is this really free?",
    a: "Yes, completely free. No credit card required, no hidden fees. We created this masterclass to help non-technical people understand the real opportunity in AI consulting. When you're ready to go deeper, we offer paid programs — but this training stands on its own.",
  },
  {
    q: "How long is the training?",
    a: "The core masterclass is about 90 minutes. You can watch it in one sitting or break it up. The templates and resources are yours to keep and reference anytime.",
  },
  {
    q: "Do I need any technical skills?",
    a: "No. This masterclass was specifically designed for non-technical people. If you can use email and social media, you have enough technical skill. The whole system is built around leveraging your business skills, not coding.",
  },
  {
    q: "What if I don't have time to start a business right now?",
    a: "The masterclass is available on-demand — watch it whenever you're ready. But the strategies work best when you take action within 30 days. The market is moving fast, and first movers have a significant advantage.",
  },
  {
    q: "What happens after I register?",
    a: "You'll get instant access to the full masterclass video, all bonus templates, and the 30-day launch roadmap. Everything is delivered to your inbox immediately.",
  },
  {
    q: "How is this different from other platforms?",
    a: "Most AI courses teach you tools. We teach you business. You won't learn how to write prompts — you'll learn how to position, price, sell, and deliver AI consulting services. It's a business system, not a tool tutorial.",
  },
  {
    q: "Do you offer refunds?",
    a: "The masterclass is free, so there's nothing to refund. If you upgrade to a paid program later, those come with a 7-day money-back guarantee.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-14">
            <PillBadgeDark>
              <span className="w-2 h-2 bg-ink/40 rounded-full" />
              FAQs
            </PillBadgeDark>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight mt-6 mb-4">
              Got questions?{" "}
              <span className="font-serif italic">We have answers</span>
            </h2>
            <p className="text-muted font-body text-lg max-w-xl mx-auto">
              Everything you need to know about our process, and how we deliver results.
            </p>
          </div>
        </AnimateIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimateIn key={i} delay={i * 0.05}>
              <div className="bg-cream rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-display font-bold text-ink text-sm pr-4">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-ink/40 text-xl shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted font-body leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Section 9: Email Capture Footer ───────────────── */

function EmailFooter() {
  return (
    <section className="bg-[#0D0D0D] py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <AnimateIn>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Learn with intention. Build with clarity.{" "}
            <span className="font-serif italic text-white/80">Rise collectively.</span>
          </h2>
          <p className="text-white/40 font-body text-base mb-10">
            Thoughts on AI, building, and intentional work — shared directly to your inbox.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="flex justify-center">
            <EmailCapture dark buttonText="Subscribe" />
          </div>
          <p className="text-white/25 text-xs font-body mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ───────────────── Main Export ───────────────── */

export default function Masterclass() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <RightForYou />
      <TechLogos />
      <Curriculum />
      <BonusTemplates />
      <Instructor />
      <FAQ />
      <EmailFooter />
    </>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const avatars = [
  "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=80&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format&fit=crop",
];

const painCards = [
  {
    title: "I\u2019m not technical enough",
    body: "You\u2019ve seen the AI hype, but every course assumes you already know Python, APIs, or machine learning. You feel like you\u2019re too far behind to catch up.",
  },
  {
    title: "I don\u2019t know where to start",
    body: "There are thousands of AI tools, a new one every day. You\u2019ve watched dozens of YouTube videos but still have no clear path from \u201clearning\u201d to \u201cearning.\u201d",
  },
  {
    title: "I can\u2019t deliver the work",
    body: "Even if you land a client, you have no idea how you\u2019d actually fulfill the project. You\u2019re afraid of over-promising and under-delivering.",
  },
];

const forYouItems = [
  "You\u2019re a consultant, coach, or expert adding AI to your services",
  "You\u2019re business-savvy but not technical",
  "You want a proven system \u2014 not tool tutorials",
  "You\u2019re ready to take action in the next 30 days",
  "You\u2019re willing to do outreach and talk to prospects",
];

const notForYouItems = [
  "You\u2019re looking for passive income or get-rich-quick",
  "You expect results without doing outreach",
  "You don\u2019t actually want to build an AI business",
  "You can\u2019t invest 10\u201315 hours/week for 30 days",
  "You\u2019re not willing to hear \u201cno\u201d",
];

const techLogos = [
  { name: "n8n", url: "https://logo.clearbit.com/n8n.io" },
  { name: "Make", url: "https://logo.clearbit.com/make.com" },
  { name: "OpenAI", url: "https://logo.clearbit.com/openai.com" },
  { name: "Midjourney", url: "https://logo.clearbit.com/midjourney.com" },
  { name: "Runway", url: "https://logo.clearbit.com/runway.ml" },
];

const curriculumSteps = [
  {
    num: "01",
    title: "The positioning formula",
    subtitle: "How to position yourself as an AI expert \u2014 starting from zero",
    bullets: [
      "3 proven AI consulting angles",
      "Your specialist statement",
      "How to sound credible in your first conversation",
    ],
  },
  {
    num: "02",
    title: "Client acquisition",
    subtitle: "How to find businesses that will pay $5K\u2013$15K",
    bullets: [
      "3 highest-ROI channels",
      "The \u2018AI Business Audit\u2019 framework (80% conversion)",
      "Outreach scripts for LinkedIn, email, and communities",
    ],
  },
  {
    num: "03",
    title: "Pricing & closing",
    subtitle: "How to price confidently and close deals",
    bullets: [
      "Value-based pricing framework",
      "Pricing & proposal templates",
      "Monthly retainer model for recurring revenue",
    ],
  },
  {
    num: "04",
    title: "Delivery without coding",
    subtitle: "How to deliver without building anything yourself",
    bullets: [
      "Path A: work with developers (DIY model)",
      "Path B: partnership delivery (earn 30\u201340%)",
      "How to scale without becoming the bottleneck",
    ],
  },
  {
    num: "05",
    title: "Your 30-day roadmap",
    subtitle: "Your exact week-by-week plan to land your first client",
    bullets: [
      "What to focus on in the first 30 days",
      "What to ignore",
      "How to move from learning \u2192 outreach \u2192 paid work",
    ],
  },
];

const templates = [
  { title: "AI Services Catalog", desc: "Comprehensive list of AI solutions with pricing" },
  { title: "AI Business Audit Template", desc: "Converts prospects to clients" },
  { title: "Proposal & Contract Templates", desc: "Done-for-you proposals" },
  { title: "Outreach Script Library", desc: "20+ proven scripts for cold outreach" },
  { title: "30-Day Launch Roadmap", desc: "Week-by-week action plan" },
];

const faqs = [
  {
    q: "Is this really free?",
    a: "Yes, 100% free. No credit card required. We created this masterclass to give you a genuine head start \u2014 no strings attached.",
  },
  {
    q: "How long is the training?",
    a: "The core masterclass is about 2 hours. But you\u2019ll also get templates and resources you can implement immediately.",
  },
  {
    q: "Do I need any technical skills?",
    a: "Not at all. This masterclass was specifically designed for non-technical people. If you can use email and social media, you have all the skills you need to start.",
  },
  {
    q: "What if I don\u2019t have time to start a business right now?",
    a: "The masterclass is available on-demand, so you can watch it whenever you\u2019re ready. The templates and resources don\u2019t expire.",
  },
  {
    q: "What happens after I register?",
    a: "You\u2019ll get instant access to the full masterclass, all templates, and our community resources. No waiting period.",
  },
  {
    q: "How is this different from other platforms?",
    a: "We focus on implementation, not theory. Every module comes with done-for-you templates and real-world scripts you can use immediately.",
  },
  {
    q: "Do you offer refunds?",
    a: "Since the masterclass is completely free, there\u2019s nothing to refund. You have zero risk.",
  },
];

const bioParagraphs = [
  "I\u2019m Emaan Faith, the Founder of GetEducated.ai. I went from self-taught artist to building a thriving AI consulting business without learning how to code.",
  "I didn\u2019t start as a technical person. I\u2019m a visual artist known for painting murals around the world. No computer science degree. No coding bootcamp. Just curiosity and a business mindset.",
  "When I discovered AI, I saw what most people miss: The biggest opportunity isn\u2019t building the technology. It\u2019s bridging the gap between businesses that need it and the solutions that exist.",
  "So I started consulting. Not as a developer, but as a strategic guide.",
  "Now I\u2019m teaching non-technical people like you to do what I did: Turn AI knowledge into high-income AI consulting, without becoming a developer.",
  "This masterclass is the complete system I wish I had when I started. No hype. No theory. Just the real playbook. And I\u2019m giving it to you for free.",
];

/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */

export default function Masterclass() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="font-display">
      {/* ───────── SECTION 1: HERO ───────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#080808]">
        {/* Conic gradient orbs */}
        <div
          className="conic-orb w-[700px] h-[700px] top-[-20%] left-[5%]"
          style={{
            background: `conic-gradient(from calc(var(--orb-angle) * 2) at 40% 60%, #D97706, transparent 25% 75%, #D97706),
                         conic-gradient(from calc(var(--orb-angle) * -1) at 60% 40%, #FCD34D, transparent 30% 70%, #FCD34D)`,
            filter: "blur(90px)",
          }}
        />
        <div
          className="conic-orb-slow w-[600px] h-[600px] bottom-[-15%] left-[-5%]"
          style={{
            background: `conic-gradient(from calc(var(--orb-angle) * 1.5) at 35% 65%, #5B21B6, transparent 20% 80%, #5B21B6),
                         conic-gradient(from calc(var(--orb-angle) * -2) at 65% 35%, #4338CA, transparent 35% 65%, #4338CA)`,
            filter: "blur(100px)",
          }}
        />
        <div
          className="conic-orb w-[450px] h-[450px] top-[10%] right-[-5%]"
          style={{
            background: `conic-gradient(from calc(var(--orb-angle) * -1.5) at 50% 50%, #9B1C1C, transparent 30% 70%, #9B1C1C),
                         conic-gradient(from calc(var(--orb-angle) * 3) at 30% 70%, #7F1D1D, transparent 40% 60%, #7F1D1D)`,
            filter: "blur(80px)",
            animationDuration: "45s, 20s",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* LIVE pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30 rounded-full px-4 py-1.5 text-xs font-semibold font-display">
              <span className="w-2 h-2 bg-[#9B1C1C] rounded-full animate-pulse" />
              LIVE NOW
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Build a profitable AI consulting
            <br />
            business in 30 days
            <br />
            for{" "}
            <span className="font-serif italic font-bold">non-techies</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            The complete system for positioning yourself as an AI expert, landing
            $5K&ndash;$15K clients, and delivering world-class solutions&mdash;
            even if you&apos;re completely non-technical.
          </motion.p>

          {/* Email input + CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#D97706]/60 transition font-display text-sm"
            />
            <button className="btn-gradient btn-glow rounded-full px-8 py-4 text-white font-display font-semibold text-sm whitespace-nowrap">
              Get Access
            </button>
          </motion.div>

          {/* VSL Mockup */}
          <motion.div
            className="max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <div className="bg-gradient-to-br from-[#D97706] via-[#9B1C1C] to-[#5B21B6] p-[2px] rounded-2xl">
              <div className="bg-[#0D0D0D] rounded-2xl flex items-center justify-center aspect-video">
                {/* Play button */}
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition cursor-pointer">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-white/60 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Member"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="font-display font-extrabold text-white text-lg">
              250+
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>No credit card required. Instant access.</span>
          </motion.div>
        </div>
      </section>

      {/* ───────── SECTION 2: PROBLEM ───────── */}
      <section className="py-24 px-6 bg-[#F5F2EE] text-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              You&apos;re not alone. Most people feel this way.
            </h2>
          </motion.div>

          {/* Pain cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {painCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-[#E8E4DF] p-8 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold mb-3">
                  &ldquo;{card.title}&rdquo;
                </h3>
                <p className="text-[#0D0D0D]/70 leading-relaxed text-sm">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Truth statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="font-display text-2xl sm:text-3xl font-extrabold mb-6">
              Here&apos;s the truth: Being non-technical is actually your{" "}
              <span className="gradient-text">biggest advantage.</span>
            </p>
            <div className="space-y-2 text-[#0D0D0D]/70 text-base mb-6">
              <p>You speak business language, not code.</p>
              <p>You understand client problems, not algorithms.</p>
              <p>You ask the right questions instead of jumping to technical solutions.</p>
            </div>
            <p className="font-display font-bold text-lg mb-10">
              This is exactly what businesses need.
            </p>
            <a
              href="https://tally.so/r/PdzRxb"
              className="btn-gradient btn-glow rounded-full px-8 py-4 text-white font-display font-semibold inline-block"
            >
              Get Instant Access
            </a>
          </motion.div>
        </div>
      </section>

      {/* ───────── SECTION 3: RIGHT FOR YOU ───────── */}
      <section className="py-24 px-6 bg-[#0D0D0D] text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              Is this training right for{" "}
              <span className="font-serif italic font-bold">you?</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              You don&apos;t want to learn AI for curiosity &mdash; you want to
              build leverage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* For you */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="font-display font-bold text-lg mb-6 text-[#D97706]">
                THIS IS FOR YOU IF
              </h3>
              <ul className="space-y-4">
                {forYouItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#D97706] mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not for you */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="font-display font-bold text-lg mb-6 text-[#9B1C1C]">
                THIS IS NOT FOR YOU IF
              </h3>
              <ul className="space-y-4">
                {notForYouItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#9B1C1C] mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <a
              href="https://tally.so/r/PdzRxb"
              className="btn-gradient btn-glow rounded-full px-8 py-4 text-white font-display font-semibold inline-block"
            >
              Get Instant Access
            </a>
          </div>
        </div>
      </section>

      {/* ───────── SECTION 4: TECH LOGOS ───────── */}
      <section className="py-16 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-8 font-display">
            Powered by world-class tech
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {techLogos.map((logo) => (
              <div
                key={logo.name}
                className="bg-white/5 rounded-xl p-4 flex items-center justify-center"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-8 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SECTION 5: CURRICULUM ───────── */}
      <section className="py-24 px-6 bg-[#F5F2EE] text-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30 rounded-full px-4 py-1.5 text-xs font-semibold font-display mb-4">
              <span className="w-2 h-2 bg-[#9B1C1C] rounded-full" />
              Curriculum
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              What you&apos;ll learn in this free{" "}
              <span className="font-serif italic font-bold">masterclass</span>
            </h2>
            <p className="text-[#0D0D0D]/60 max-w-xl mx-auto">
              A repeatable system for turning AI into paid advisory work &mdash;
              without becoming technical.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {curriculumSteps.map((step, i) => (
              <div key={step.num} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Left: number + line */}
                <div className="flex flex-col items-center">
                  <button
                    onClick={() =>
                      setExpandedStep(expandedStep === i ? null : i)
                    }
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D97706] to-[#9B1C1C] flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0 z-10 hover:scale-110 transition-transform"
                  >
                    {step.num}
                  </button>
                  {i < curriculumSteps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-[#D97706] to-[#9B1C1C] mt-2" />
                  )}
                </div>

                {/* Right: content */}
                <div className="flex-1 pt-2">
                  <button
                    onClick={() =>
                      setExpandedStep(expandedStep === i ? null : i)
                    }
                    className="text-left w-full"
                  >
                    <h3 className="font-display text-xl font-bold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#0D0D0D]/60 text-sm">{step.subtitle}</p>
                  </button>

                  <AnimatePresence>
                    {expandedStep === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2">
                          {step.bullets.map((bullet, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-[#0D0D0D]/70"
                            >
                              <span className="w-1.5 h-1.5 bg-[#D97706] rounded-full mt-1.5 flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://tally.so/r/PdzRxb"
              className="btn-gradient btn-glow rounded-full px-8 py-4 text-white font-display font-semibold inline-block"
            >
              Watch Free Masterclass
            </a>
          </div>
        </div>
      </section>

      {/* ───────── SECTION 6: BONUS TEMPLATES ───────── */}
      <section className="py-24 px-6 bg-[#0D0D0D] text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30 rounded-full px-4 py-1.5 text-xs font-semibold font-display mb-4">
              <span className="w-2 h-2 bg-[#9B1C1C] rounded-full" />
              Modules
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              Plus, you&apos;ll get access to these free
              <br />
              plug-and-play{" "}
              <span className="font-serif italic font-bold">templates</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Stop building from scratch. Get the exact templates and scripts we
              use with our paying clients.
            </p>
          </motion.div>

          {/* Course cover card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xs mx-auto mb-12"
          >
            <div className="relative rounded-2xl border border-white/10 overflow-hidden">
              <img
                src="/images/emaan-headshot.jpg"
                alt="AI Consultant Blueprint"
                className="w-full object-cover aspect-[3/4]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="font-display font-bold text-white text-lg">
                  AI Consultant Blueprint
                </p>
              </div>
            </div>
          </motion.div>

          {/* Template items */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {templates.map((tpl, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <span className="w-2 h-2 bg-[#D97706] rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-display font-bold text-sm mb-0.5">
                    {tpl.title}
                  </p>
                  <p className="text-white/50 text-xs">{tpl.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://tally.so/r/PdzRxb"
              className="btn-gradient btn-glow rounded-full px-8 py-4 text-white font-display font-semibold inline-block"
            >
              Get Instant Access
            </a>
          </div>
        </div>
      </section>

      {/* ───────── SECTION 7: INSTRUCTOR ───────── */}
      <section className="py-24 px-6 bg-[#F5F2EE] text-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30 rounded-full px-4 py-1.5 text-xs font-semibold font-display mb-4">
              <span className="w-2 h-2 bg-[#9B1C1C] rounded-full" />
              Instructor
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Meet Your{" "}
              <span className="font-serif italic font-bold">Instructor</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/images/emaan-casual.jpg"
                alt="Emaan Faith"
                className="rounded-2xl object-cover aspect-[4/5] w-full"
              />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-display text-2xl font-bold mb-6">
                Hey, I&apos;m Emaan Faith.
              </h3>
              <div className="space-y-4 text-[#0D0D0D]/70 text-sm leading-relaxed">
                {bioParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://tally.so/r/PdzRxb"
                  className="btn-gradient btn-glow rounded-full px-8 py-4 text-white font-display font-semibold inline-block"
                >
                  Get Instant Access
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────── SECTION 8: FAQ ───────── */}
      <section className="py-24 px-6 bg-[#0D0D0D] text-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30 rounded-full px-4 py-1.5 text-xs font-semibold font-display mb-4">
              <span className="w-2 h-2 bg-[#9B1C1C] rounded-full" />
              FAQs
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              Got questions? We have{" "}
              <span className="font-serif italic font-bold">answers</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Everything you need to know about our process, and how we deliver
              results.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-xl transition-colors ${
                  openIndex === i
                    ? "border-[#D97706]/30"
                    : "border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-display font-semibold text-sm pr-4">
                    {faq.q}
                  </span>
                  <span className="text-white/60 text-xl flex-shrink-0">
                    {openIndex === i ? "\u2212" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SECTION 9: EMAIL CAPTURE FOOTER ───────── */}
      <section className="py-24 px-6 bg-[#F5F2EE] text-[#0D0D0D]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Learn with intention. Build with clarity.
              <br />
              Rise{" "}
              <span className="font-serif italic font-bold">collectively.</span>
            </h2>
            <p className="text-[#0D0D0D]/60 max-w-lg mx-auto mb-10">
              Thoughts on AI, building, and intentional work &mdash; shared
              directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-full bg-white border border-[#E8E4DF] text-[#0D0D0D] placeholder-[#0D0D0D]/40 focus:outline-none focus:border-[#D97706]/60 transition font-display text-sm"
              />
              <button className="btn-gradient btn-glow rounded-full px-8 py-4 text-white font-display font-semibold text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-[#6B6B6B]">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

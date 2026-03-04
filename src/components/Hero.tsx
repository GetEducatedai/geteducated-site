"use client";

const heroTools = [
  { name: "OpenAI",      logo: "https://logo.clearbit.com/openai.com" },
  { name: "Claude",      logo: "https://logo.clearbit.com/anthropic.com" },
  { name: "Gemini",      logo: "https://logo.clearbit.com/google.com" },
  { name: "ElevenLabs",  logo: "https://logo.clearbit.com/elevenlabs.io" },
  { name: "Midjourney",  logo: "https://logo.clearbit.com/midjourney.com" },
  { name: "Runway",      logo: "https://logo.clearbit.com/runwayml.com" },
  { name: "Higgsfield",  logo: "https://logo.clearbit.com/higgsfield.ai" },
  { name: "HeyGen",      logo: "https://logo.clearbit.com/heygen.com" },
  { name: "Freepik",     logo: "https://logo.clearbit.com/freepik.com" },
  { name: "Notion",      logo: "https://logo.clearbit.com/notion.so" },
  { name: "Make",        logo: "https://logo.clearbit.com/make.com" },
  { name: "n8n",         logo: "https://logo.clearbit.com/n8n.io" },
];

import { motion } from "framer-motion";

// Real diverse headshots for social proof widget
const avatars = [
  "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=80&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format&fit=crop",
];

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-[#080808]">
      {/* Taskade-style conic gradient orbs — mix-blend-mode: screen, CSS @property rotation */}
      {/* Amber orb — top center */}
      <div
        className="conic-orb w-[700px] h-[700px] top-[-20%] left-[5%]"
        style={{
          background: `conic-gradient(from calc(var(--orb-angle) * 2) at 40% 60%, #D97706, transparent 25% 75%, #D97706),
                       conic-gradient(from calc(var(--orb-angle) * -1) at 60% 40%, #FCD34D, transparent 30% 70%, #FCD34D)`,
          filter: "blur(90px)",
        }}
      />
      {/* Deep indigo-purple orb — bottom left */}
      <div
        className="conic-orb-slow w-[600px] h-[600px] bottom-[-15%] left-[-5%]"
        style={{
          background: `conic-gradient(from calc(var(--orb-angle) * 1.5) at 35% 65%, #5B21B6, transparent 20% 80%, #5B21B6),
                       conic-gradient(from calc(var(--orb-angle) * -2) at 65% 35%, #4338CA, transparent 35% 65%, #4338CA)`,
          filter: "blur(100px)",
        }}
      />
      {/* Deep red orb — right side */}
      <div
        className="conic-orb w-[450px] h-[450px] top-[10%] right-[-5%]"
        style={{
          background: `conic-gradient(from calc(var(--orb-angle) * -1.5) at 50% 50%, #9B1C1C, transparent 30% 70%, #9B1C1C),
                       conic-gradient(from calc(var(--orb-angle) * 3) at 30% 70%, #7F1D1D, transparent 40% 60%, #7F1D1D)`,
          filter: "blur(80px)",
          animationDuration: "45s, 20s",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex-1 flex flex-col items-center justify-center pt-16">
        {/* Social Proof Widget — real headshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2.5 mb-8 shadow-sm"
        >
          {/* Stacked real photo avatars */}
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
          <span className="w-2 h-2 bg-[#9B1C1C] rounded-full animate-pulse" />
          <span className="font-display font-semibold text-white/80 text-sm">Join 250+ AI creators building in public</span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          You don&apos;t need
          <br />
          another course.
          <br />
          You need{" "}
          <span className="font-serif italic font-bold">infrastructure.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The community for AI creators who are done watching from the sidelines.
          Learn real skills. Build real income. Lead the future.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="/#pricing"
            className="btn-gradient btn-glow text-white font-display font-semibold px-8 py-4 rounded-full text-lg transition btn-press"
          >
            Join Community
          </a>
          <a
            href="/masterclass"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-display font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition btn-press"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch Free Masterclass
          </a>
        </motion.div>

      </div>

      {/* Logo strip — floats at the very bottom of the hero, no harsh separation */}
      <div className="relative z-10 pb-8 pt-4">
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/25 font-display mb-5">
          Powered by the world&apos;s best AI tools
        </p>
        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #080808, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #080808, transparent)" }} />
          <div className="flex animate-marquee">
            {[...heroTools, ...heroTools].map((tool, i) => (
              <div key={`${tool.name}-${i}`} className="flex-shrink-0 flex items-center gap-2 mx-8 opacity-40 hover:opacity-80 transition-opacity duration-300">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  width={18}
                  height={18}
                  className="object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <span className="text-xs font-semibold text-white whitespace-nowrap font-display">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

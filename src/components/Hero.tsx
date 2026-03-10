"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const avatars = [
  { initials: "EF", bg: "bg-red" },
  { initials: "AK", bg: "bg-violet" },
  { initials: "MS", bg: "bg-blue" },
];

const dashboardMembers = [
  { name: "Alex K.", status: "Just joined", time: "2m ago" },
  { name: "Maria S.", status: "Completed Module 5", time: "5m ago" },
  { name: "Jordan T.", status: "Started AI Basics", time: "12m ago" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark-bg dot-grid overflow-hidden">
      {/* Ambient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, #08080E 80%)",
        }}
      />

      {/* Ambient glow behind right column */}
      <div
        className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.15), transparent 60%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* LEFT COLUMN */}
        <div>
          {/* Eyebrow pill */}
          <motion.div variants={leftVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white text-dark-bg px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 bg-red rounded-full" />
              AI Education Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={leftVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-white mb-6"
          >
            Learn AI.
            <br />
            Build Income.
            <br />
            Lead the Future.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={leftVariants}
            className="text-lg text-[#888] max-w-lg mb-8 leading-relaxed"
          >
            Join 2,000+ creators building AI-powered businesses and escaping
            the traditional grind.
          </motion.p>

          {/* CTA Row */}
          <motion.div variants={leftVariants} className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://go.geteducated.ai"
              className="bg-dark-bg2 text-white font-semibold px-7 py-3.5 rounded-full border border-white/10 hover:border-white/20 transition text-sm"
            >
              Join Community
            </a>
            <a
              href="#ecosystem"
              className="text-white/60 hover:text-white font-medium px-7 py-3.5 rounded-full transition text-sm flex items-center gap-2"
            >
              Explore Programs
              <span>&rarr;</span>
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={leftVariants} className="flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2">
              {avatars.map((a) => (
                <div
                  key={a.initials}
                  className={`w-9 h-9 rounded-full ${a.bg} flex items-center justify-center text-white text-xs font-bold border-2 border-dark-bg`}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <span className="text-white text-sm font-semibold">2,000+ members</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/40 text-xs">Multiple continents. One vision.</span>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — Dashboard Card */}
        <motion.div variants={rightVariants} className="flex justify-center lg:justify-end">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="w-full max-w-sm"
          >
            <div className="gradient-border-card p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-white font-bold text-sm">Community Dashboard</h3>
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-white/[0.04] rounded-xl p-3">
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Members Online</p>
                  <p className="text-white font-bold text-xl">2,847</p>
                </div>
                <div className="bg-white/[0.04] rounded-xl p-3">
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Completion Rate</p>
                  <p className="text-white font-bold text-xl">94%</p>
                </div>
              </div>

              {/* Member rows */}
              <div className="space-y-3">
                {dashboardMembers.map((m) => (
                  <div key={m.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-[10px] font-bold">
                      {m.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-medium">{m.name}</p>
                      <p className="text-white/40 text-[10px]">{m.status}</p>
                    </div>
                    <span className="text-white/30 text-[10px]">{m.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

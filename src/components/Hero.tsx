"use client";

import { motion } from "framer-motion";

const avatars = [
  "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=80&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop",
];

const sidebarItems = [
  { label: "Dashboard", active: true },
  { label: "Academy", active: false },
  { label: "Community", active: false },
  { label: "Templates", active: false },
  { label: "Events", active: false },
  { label: "Settings", active: false },
];

function DashboardCard() {
  return (
    <div
      className="relative w-full max-w-[480px] animate-hero-float"
      style={{
        transform: "perspective(1200px) rotateX(3deg)",
      }}
    >
      <div
        className="rounded-[18px] overflow-hidden"
        style={{
          background: "rgba(13,13,26,0.85)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.6), 0 0 80px rgba(124,58,237,0.12)",
        }}
      >
        {/* macOS title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-[11px] text-white/30 font-display">
            Community Dashboard — GetEducated.ai
          </span>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-[140px] border-r border-white/5 p-3 hidden sm:block">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`px-3 py-2 rounded-lg text-[12px] font-display mb-0.5 ${
                  item.active
                    ? "bg-[#DC2626]/15 text-[#DC2626] font-semibold"
                    : "text-white/30 hover:text-white/50"
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white text-[13px] font-semibold font-display">
                Your Progress
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full font-display font-semibold">
                Active Member
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <div className="text-[#DC2626] text-lg font-bold font-display">
                  $3.2K
                </div>
                <div className="text-white/30 text-[10px] font-display">
                  Earned
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <div className="text-white text-lg font-bold font-display">
                  12
                </div>
                <div className="text-white/30 text-[10px] font-display">
                  Courses
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <div className="text-violet-400 text-lg font-bold font-display">
                  94%
                </div>
                <div className="text-white/30 text-[10px] font-display">
                  Complete
                </div>
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-3">
              {[
                { label: "AI Foundations", pct: 94, color: "#DC2626" },
                { label: "Client Systems", pct: 67, color: "#7C3AED" },
                { label: "Automation", pct: 45, color: "#14B8A6" },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-[10px] text-white/40 font-display mb-1">
                    <span>{bar.label}</span>
                    <span>{bar.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${bar.pct}%`,
                        background: `linear-gradient(90deg, ${bar.color}, ${bar.color}88)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const stagger = 0.15;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#08080E] dot-grid">
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 0% 100%, rgba(220,38,38,0.12), transparent)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 100% 0%, rgba(124,58,237,0.10), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-3 rounded-full px-4 py-2 mb-8"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <span className="w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-display">
                250+ AI creators building in public
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: stagger }}
              className="font-display font-black tracking-[-0.04em] leading-[1.05] mb-6 text-white"
              style={{
                fontSize: "clamp(52px, 7vw, 96px)",
              }}
            >
              You don&apos;t need
              <br />
              another course.
              <br />
              You need{" "}
              <span className="text-[#DC2626]">infrastructure.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: stagger * 2,
              }}
              className="text-base text-white/50 max-w-md mb-8 font-display"
            >
              The community for AI creators who are done watching from the
              sidelines. Learn real skills. Build real income. Lead the future.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: stagger * 3,
              }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="/#pricing"
                className="bg-[#DC2626] text-white font-display font-semibold px-8 py-4 rounded-full text-base hover:bg-[#B91C1C] transition btn-press text-center"
              >
                Join the Community
              </a>
              <a
                href="/masterclass"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-display font-semibold px-8 py-4 rounded-full text-base hover:bg-white/5 transition btn-press"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Free Masterclass
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: stagger * 4,
              }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Member"
                    className="w-9 h-9 rounded-full border-2 border-[#08080E] object-cover"
                  />
                ))}
              </div>
              <span className="text-white/40 text-sm font-display">
                2,500+ members across 47 countries
              </span>
            </motion.div>
          </div>

          {/* Right column — Dashboard card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <DashboardCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

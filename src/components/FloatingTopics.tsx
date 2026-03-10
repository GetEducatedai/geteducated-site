"use client";

import { motion } from "framer-motion";

const leftPills = [
  { emoji: "\ud83d\udd25", label: "Entrepreneurship", y: [-8, 8, -8], dur: 4.2, rot: -5 },
  { emoji: "\ud83e\udde0", label: "Mindset", y: [-6, 6, -6], dur: 3.8, rot: -3 },
  { emoji: "\ud83d\udcf1", label: "Marketing", y: [-10, 10, -10], dur: 4.8, rot: -7 },
];

const rightPills = [
  { emoji: "\u26a1", label: "AI Tools", y: [-7, 7, -7], dur: 3.5, rot: 4 },
  { emoji: "\ud83d\udcac", label: "Branding", y: [-9, 9, -9], dur: 4.5, rot: 6 },
  { emoji: "\ud83c\udfaf", label: "Strategy", y: [-6, 6, -6], dur: 5, rot: 3 },
];

const pillSpring = {
  type: "spring" as const,
  stiffness: 60,
  damping: 15,
};

export default function FloatingTopics() {
  return (
    <section className="caustic-bg py-28 lg:py-36 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="relative flex items-center justify-center min-h-[400px]">
          {/* Left pills */}
          <div className="absolute left-0 top-0 bottom-0 w-1/4 hidden lg:flex flex-col justify-center gap-8">
            {leftPills.map((pill, i) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...pillSpring, delay: i * 0.1 }}
              >
                <motion.div
                  animate={{ y: pill.y }}
                  transition={{ duration: pill.dur, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2 text-sm font-semibold text-dark-bg"
                  style={{ transform: `rotate(${pill.rot}deg)` }}
                >
                  <span>{pill.emoji}</span>
                  {pill.label}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Center text */}
          <div className="text-center max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0A] leading-tight mb-6"
            >
              A space for visionaries to build wealth, freedom and impact in the AI era
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-light-muted text-lg"
            >
              Everything you need. In one ecosystem.
            </motion.p>
          </div>

          {/* Right pills */}
          <div className="absolute right-0 top-0 bottom-0 w-1/4 hidden lg:flex flex-col justify-center items-end gap-8">
            {rightPills.map((pill, i) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...pillSpring, delay: i * 0.1 }}
              >
                <motion.div
                  animate={{ y: pill.y }}
                  transition={{ duration: pill.dur, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2 text-sm font-semibold text-dark-bg"
                  style={{ transform: `rotate(${pill.rot}deg)` }}
                >
                  <span>{pill.emoji}</span>
                  {pill.label}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile pills - horizontal row */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 lg:hidden">
            {[...leftPills, ...rightPills].map((pill) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2 text-sm font-semibold text-dark-bg"
              >
                <span>{pill.emoji}</span>
                {pill.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const tradItems = [
  "Theory-heavy, outdated curriculum",
  "$50K+ debt before earning a dollar",
  "4-year commitment minimum",
  "Learn alone, struggle alone",
  "A diploma that doesn't guarantee income",
];

const geItems = [
  "Live, practical, built for today",
  "From $97/mo — start today",
  "Earn in weeks, not years",
  "24/7 community + mentorship",
  "Real skills that generate real revenue",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
};

export default function WhyDifferent() {
  return (
    <section className="bg-dark-bg dot-grid py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-white/40 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 bg-red rounded-full" />
            Why Us
          </span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            How GetEducated.ai is different
          </h2>
        </motion.div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Traditional Education */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-[20px] p-8 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Permanent teal glow */}
            <div
              className="absolute inset-x-0 top-0 h-40 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at top, rgba(20,184,166,0.18), transparent 60%)",
              }}
            />
            <div className="relative z-10">
              <div className="text-3xl mb-3">&#128532;</div>
              <h3 className="text-white text-xl font-bold mb-6">Traditional Education</h3>
              <ul className="space-y-4">
                {tradItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red font-bold mt-0.5">&#x2717;</span>
                    <span className="text-white/50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* GetEducated.ai */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-[20px] p-8 overflow-hidden md:scale-[1.02]"
            style={{
              background: "linear-gradient(#0D0D1A, #0D0D1A) padding-box, linear-gradient(135deg, #F97316, #DC2626, #7C3AED) border-box",
              border: "1px solid transparent",
            }}
          >
            {/* Permanent violet glow */}
            <div
              className="absolute inset-x-0 top-0 h-40 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at top, rgba(124,58,237,0.22), transparent 60%)",
              }}
            />
            <div className="relative z-10">
              <div className="text-3xl mb-3">&#128522;</div>
              <h3 className="text-white text-xl font-bold mb-6">GetEducated.ai</h3>
              <ul className="space-y-4">
                {geItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold mt-0.5">&#x2713;</span>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://go.geteducated.ai"
            className="inline-block bg-dark-bg2 text-white font-semibold px-8 py-4 rounded-full border border-white/10 hover:border-white/20 transition text-sm btn-press"
          >
            Join Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}

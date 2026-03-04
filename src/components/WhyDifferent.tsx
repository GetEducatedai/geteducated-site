"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const bullets = [
  "Built by AI creators, for AI creators — not academics",
  "Revenue-focused curriculum, not theory",
  "Templates and workflows you deploy immediately",
  "A community that holds you accountable",
  "Real results within 90 days, or your money back",
];

const comparisons = [
  { trad: "Theory-heavy, outdated curriculum", ge: "Live, practical, built for today" },
  { trad: "$50K+ debt before earning a dollar", ge: "From $97/mo — start today" },
  { trad: "4-year commitment minimum", ge: "Earn in weeks, not years" },
  { trad: "Learn alone, struggle alone", ge: "24/7 community + mentorship" },
  { trad: "A diploma that doesn't guarantee income", ge: "Real skills that generate real revenue" },
];

export default function WhyDifferent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="relative py-24 px-6 bg-[#08080E] dot-grid overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[#DC2626] text-sm font-semibold font-display mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-[#DC2626]" />
              Why We&apos;re Different
            </p>
            <h2 className="text-white font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              Not a course.
              <br />
              Not a coach.
              <br />
              <span className="text-[#DC2626]">Infrastructure.</span>
            </h2>
            <p className="text-white/50 text-base mb-8 max-w-md font-display leading-relaxed">
              We don&apos;t sell you information — we give you the systems,
              community, and tools to build a real AI business.
            </p>
            <ul className="space-y-3">
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3 text-white/70 text-sm font-display"
                >
                  <span className="text-[#DC2626] mt-0.5">—</span>
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right column — Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Header */}
            <div className="grid grid-cols-2 border-b border-white/[0.06]">
              <div className="px-6 py-4">
                <span className="text-white/40 text-xs font-semibold font-display uppercase tracking-wider">
                  Traditional Education
                </span>
              </div>
              <div className="px-6 py-4 border-l border-white/[0.06]">
                <span className="text-[#DC2626] text-xs font-semibold font-display uppercase tracking-wider">
                  GetEducated.ai
                </span>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="grid grid-cols-2 border-b border-white/[0.06] last:border-b-0"
              >
                <div className="px-6 py-4">
                  <span className="text-white/30 text-sm font-display line-through">
                    {row.trad}
                  </span>
                </div>
                <div className="px-6 py-4 border-l border-white/[0.06]">
                  <span className="text-white/80 text-sm font-display">
                    {row.ge}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

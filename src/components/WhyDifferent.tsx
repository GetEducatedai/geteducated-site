"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const rows = [
  { label: "Cost", trad: "$50,000+ debt", ge: "From $97/mo" },
  { label: "Timeline", trad: "4 years", ge: "Start earning in weeks" },
  { label: "Curriculum", trad: "Outdated by graduation", ge: "Updated weekly with AI trends" },
  { label: "Network", trad: "Alumni you never talk to", ge: "Active builders shipping daily" },
  { label: "Outcome", trad: "A diploma", ge: "A business" },
  { label: "Support", trad: "Office hours (good luck)", ge: "24/7 community + mentors" },
];

export default function WhyDifferent() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-ink">
            Why we&apos;re{" "}
            <span className="font-serif italic font-normal">different</span>
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-16 font-body">
            Traditional education wasn&apos;t built for this era. We were.
          </p>
        </AnimateIn>

        <div className="rounded-[20px] border border-border overflow-hidden bg-white shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-3 bg-cream">
            <div className="p-5 text-sm font-medium text-muted font-display" />
            <div className="p-5 text-sm font-medium text-muted text-center font-display">
              Traditional Education
            </div>
            <div className="p-5 text-sm font-bold text-ink text-center font-display">
              GetEducated.ai
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid grid-cols-3 border-t border-border"
            >
              <div className="p-5 text-sm font-semibold text-ink font-display">
                {row.label}
              </div>
              <div className="p-5 text-sm text-muted text-center font-body">
                {row.trad}
              </div>
              <div className="p-5 text-sm text-ink text-center font-semibold font-display">
                {row.ge}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

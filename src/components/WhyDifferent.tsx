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
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Why we&apos;re <span className="text-brand-jade">different</span>
          </h2>
          <p className="text-brand-cream/50 text-center max-w-xl mx-auto mb-16">
            Traditional education wasn&apos;t built for this era. We were.
          </p>
        </AnimateIn>

        <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-white/[0.03]">
            <div className="p-5 text-sm font-medium text-brand-cream/40" />
            <div className="p-5 text-sm font-medium text-brand-cream/40 text-center">
              Traditional Education
            </div>
            <div className="p-5 text-sm font-medium text-brand-jade text-center">
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
              className="grid grid-cols-3 border-t border-white/[0.06]"
            >
              <div className="p-5 text-sm font-semibold">{row.label}</div>
              <div className="p-5 text-sm text-brand-cream/40 text-center">
                {row.trad}
              </div>
              <div className="p-5 text-sm text-brand-jade text-center font-medium">
                {row.ge}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

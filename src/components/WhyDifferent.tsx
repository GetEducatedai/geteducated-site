"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const tradItems = [
  { icon: "💸", label: "$50,000+ debt", detail: "Before you even start" },
  { icon: "📅", label: "4 years minimum", detail: "Outdated by graduation" },
  { icon: "📄", label: "A diploma", detail: "That doesn't guarantee income" },
  { icon: "👤", label: "Office hours", detail: "If you're lucky" },
];

const geItems = [
  { icon: "⚡", label: "From $97/mo", detail: "Start immediately, cancel anytime" },
  { icon: "🚀", label: "Earn in weeks", detail: "Real skills, real income, fast" },
  { icon: "🏗️", label: "A business", detail: "That generates actual revenue" },
  { icon: "🤝", label: "24/7 community", detail: "Mentors + builders on demand" },
];

export default function WhyDifferent() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-ink">
            Why we&apos;re{" "}
            <span className="font-serif italic font-bold">different</span>
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-16 font-body">
            Traditional education wasn&apos;t built for this era. We were.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[24px] border border-border bg-cream/50 p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,_#dc2626_0%,_transparent_70%)] opacity-5 blur-2xl" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-ink">Traditional Education</h3>
            </div>
            <div className="space-y-5">
              {tradItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-display font-semibold text-ink text-sm">{item.label}</p>
                    <p className="text-muted text-xs font-body">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GetEducated Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[24px] border-2 border-violet/30 bg-white p-8 sm:p-10 relative overflow-hidden shadow-lg shadow-violet/5"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,_#7C3AED_0%,_transparent_70%)] opacity-10 blur-2xl" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-violet/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-ink">GetEducated.ai</h3>
            </div>
            <div className="space-y-5">
              {geItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-display font-semibold text-ink text-sm">{item.label}</p>
                    <p className="text-muted text-xs font-body">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

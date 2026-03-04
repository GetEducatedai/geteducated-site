"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const tradItems = [
  { label: "$50,000+ in debt", detail: "Before you've earned a dollar" },
  { label: "4 years minimum", detail: "Outdated by the time you graduate" },
  { label: "A diploma", detail: "That doesn't guarantee income" },
  { label: "Office hours (if you're lucky)", detail: "Learn alone, implement alone" },
  { label: "Theoretical knowledge", detail: "With zero real-world application" },
  { label: "One-size-fits-all curriculum", detail: "Built for the last decade" },
];

const geItems = [
  { label: "From $97/month", detail: "Start today. Cancel anytime." },
  { label: "Earn in weeks, not years", detail: "Real skills. Real income. Fast." },
  { label: "A business", detail: "That generates actual revenue" },
  { label: "24/7 community", detail: "Mentors + builders on demand" },
  { label: "Hands-on, live curriculum", detail: "Built for the AI era, right now" },
  { label: "Your own path", detail: "Curated for where you want to go" },
];

function XIcon() {
  return (
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
      <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 14 14" fill="none">
        <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function SadFaceIcon() {
  return (
    <svg className="w-5 h-5 text-ink/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 15s1.5-2 4-2 4 2 4 2" strokeLinecap="round" />
      <circle cx="9" cy="9.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SmileFaceIcon() {
  return (
    <svg className="w-5 h-5 text-ink/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 13s1.5 3 4 3 4-3 4-3" strokeLinecap="round" />
      <circle cx="9" cy="9.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function WhyDifferent() {
  return (
    <section className="py-24 px-6 bg-[#EBEBEB]">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30 rounded-full px-4 py-1.5 text-xs font-semibold font-display">
              <span className="w-1.5 h-1.5 bg-[#9B1C1C] rounded-full" />
              Why Us
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-ink">
            How GetEducated.ai is{" "}
            <span className="font-serif italic font-bold">different</span>
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-14 font-body text-base">
            The traditional way of learning and building businesses is outdated.
            We&apos;re building what comes next.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Traditional AI Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[20px] bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-7">
              <SadFaceIcon />
              <h3 className="font-body text-base font-semibold text-ink/60">
                Traditional AI Education
              </h3>
            </div>
            <div className="space-y-4">
              {tradItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <XIcon />
                  <div>
                    <p className="text-sm font-semibold text-ink/80 font-display">{item.label}</p>
                    <p className="text-xs text-ink/50 font-body mt-0.5">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GetEducated.ai Ecosystem Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[20px] bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-7">
              <SmileFaceIcon />
              <h3 className="font-body text-base font-semibold text-ink">
                GetEducated.ai Ecosystem
              </h3>
            </div>
            <div className="space-y-4">
              {geItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <CheckIcon />
                  <div>
                    <p className="text-sm font-semibold text-ink font-display">{item.label}</p>
                    <p className="text-xs text-ink/50 font-body mt-0.5">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <AnimateIn delay={0.3}>
          <div className="flex justify-center mt-12">
            <a
              href="#pricing"
              className="btn-gradient btn-glow text-white text-sm font-semibold px-8 py-3.5 rounded-full transition font-display btn-press"
            >
              Join Community
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

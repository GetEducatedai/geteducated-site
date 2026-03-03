"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const tradItems = [
  "Static courses that become outdated",
  "Learn alone, implement alone",
  "AI tools without context",
  "Consume endlessly, build nothing",
  "Hustle until you burn out",
  "Access to everyone",
  "Fragmented across platforms",
];

const geItems = [
  "Living curriculum that evolves with AI",
  "Build alongside vetted creators and founders",
  "Strategy + systems + community",
  "Ship within your first 30 days",
  "Build while prioritizing your wellbeing",
  "Curating community with standards",
  "One integrated operating system",
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
            <span className="inline-flex items-center gap-2 bg-white text-ink text-xs font-semibold px-4 py-2 rounded-full border border-border shadow-sm font-body">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
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
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <XIcon />
                  <span className="text-sm text-ink/70 font-body">{item}</span>
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
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <CheckIcon />
                  <span className="text-sm text-ink font-body">{item}</span>
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
              className="bg-ink text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition font-display btn-press"
            >
              Join Community
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

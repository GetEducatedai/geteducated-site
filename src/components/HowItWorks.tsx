"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Learn",
    subtitle: "Master the AI tools shaping the world",
    description:
      "Dive deep into the tools replacing entire industries. Midjourney, Claude, Runway, ElevenLabs — not theory, but practical skills you can monetize this week.",
    tags: ["OpenAI", "Claude", "Midjourney", "Runway"],
  },
  {
    num: "02",
    title: "Build",
    subtitle: "Build in public with people who get it",
    description:
      "Launch your AI-powered service, product, or creative business. Use our templates, workflows, and community accountability to ship fast.",
    tags: ["Templates", "Workflows", "Community", "Accountability"],
  },
  {
    num: "03",
    title: "Lead",
    subtitle: "Lead with confidence in the AI era",
    description:
      "Become the expert in your space. Teach others. Build your brand. Create the life and income you actually want.",
    tags: ["Coach", "Consultant", "Creator", "Founder"],
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 px-6 bg-[#08080E] dot-grid overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#DC2626] text-sm font-semibold font-display mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-[#DC2626]" />
            How It Works
          </p>
          <h2 className="text-white font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Learn. Build.{" "}
            <span className="text-[#DC2626]">Lead.</span>
          </h2>
          <p className="text-white/50 text-base mt-4 max-w-lg font-display">
            Three steps. No BS. We stripped out everything that doesn&apos;t
            lead to results.
          </p>
        </motion.div>

        {/* Step cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-300"
              style={{ border: "1px solid var(--light-border, #D4D4D4)" }}
            >
              {/* Step number */}
              <span className="text-[#DC2626] text-sm font-bold font-display">
                {step.num}
              </span>

              {/* Title */}
              <h3 className="text-[#0A0A0A] text-2xl font-black font-display mt-2 mb-1">
                {step.title}
              </h3>

              {/* Subtitle */}
              <p className="text-[#DC2626] text-xs font-semibold font-display mb-3">
                {step.subtitle}
              </p>

              {/* Description */}
              <p className="text-[#6B6B6B] text-sm leading-relaxed font-display mb-5">
                {step.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {step.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-[#DC2626]/10 text-[#DC2626] px-3 py-1 rounded-full font-display font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow connector row */}
        <div className="hidden md:flex justify-center items-center gap-4 mt-8">
          <span className="text-white/30 font-display text-sm tracking-wide">Learn</span>
          <span className="text-[#DC2626]">&rarr;</span>
          <span className="text-white/30 font-display text-sm tracking-wide">Build</span>
          <span className="text-[#DC2626]">&rarr;</span>
          <span className="text-white/30 font-display text-sm tracking-wide">Lead</span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    title: "Learn",
    subtitle: "Master the AI tools shaping the world",
    description:
      "Dive deep into the tools replacing entire industries. Midjourney, Claude, Runway, ElevenLabs — not theory, but practical skills you can monetize this week.",
    visual: (
      <div className="flex flex-wrap gap-2 mt-4">
        {["OpenAI", "Claude", "Midjourney", "Runway"].map((t) => (
          <span key={t} className="text-xs bg-[#D97706]/10 text-[#D97706] px-3 py-1 rounded-full font-display font-semibold">{t}</span>
        ))}
      </div>
    ),
    accent: "from-[#D97706] to-[#9B1C1C]",
  },
  {
    num: "02",
    title: "Build",
    subtitle: "Build in public with people who get it",
    description:
      "Launch your AI-powered service, product, or creative business. Use our templates, workflows, and community accountability to ship fast.",
    visual: (
      <div className="mt-4 bg-cream rounded-xl p-3 border border-border">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-[#D97706]/20" />
          <span className="text-xs font-display font-semibold text-ink">@builder</span>
          <span className="text-xs text-muted">just shipped</span>
        </div>
        <div className="h-2 bg-[#D97706]/20 rounded-full w-3/4" />
        <div className="h-2 bg-[#D97706]/10 rounded-full w-1/2 mt-1.5" />
      </div>
    ),
    accent: "from-[#9B1C1C] to-[#5B21B6]",
  },
  {
    num: "03",
    title: "Lead",
    subtitle: "Lead with confidence in the AI era",
    description:
      "Become the expert in your space. Teach others. Build your brand. Create the life and income you actually want.",
    visual: (
      <div className="mt-4 flex flex-wrap gap-2">
        {["Coach", "Consultant", "Creator", "Founder"].map((t) => (
          <span key={t} className="text-xs bg-[#D97706]/10 text-[#D97706] px-3 py-1 rounded-full font-display font-semibold border border-[#D97706]/20">{t}</span>
        ))}
      </div>
    ),
    accent: "from-[#5B21B6] to-[#D97706]",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30 rounded-full px-4 py-1.5 text-xs font-semibold font-display mb-4">
              <span className="w-1.5 h-1.5 bg-[#9B1C1C] rounded-full" />
              How It Works
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-ink">
            Your journey{" "}
            <span className="font-serif italic font-bold">starts here</span>
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-16 font-body">
            Three steps. No BS. We stripped out everything that doesn&apos;t lead to results.
          </p>
        </AnimateIn>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-[#D97706] via-[#9B1C1C] to-[#5B21B6]"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white font-display font-extrabold text-lg shadow-lg`}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.num}
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  <motion.div
                    className="bg-white rounded-[20px] border border-border p-8 shadow-sm hover:shadow-lg hover:shadow-[#D97706]/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.01 }}
                  >
                    {/* Glow accent on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />

                    <div className="relative z-10">
                      {/* Mobile number badge */}
                      <div className={`md:hidden inline-flex w-10 h-10 rounded-full bg-gradient-to-br ${step.accent} items-center justify-center text-white font-display font-bold text-sm mb-4`}>
                        {step.num}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-ink mb-1">
                        {step.title}
                      </h3>
                      <p className="font-display text-sm font-semibold text-[#D97706] mb-3">
                        {step.subtitle}
                      </p>
                      <p className="text-muted text-sm leading-relaxed font-body">
                        {step.description}
                      </p>
                      {step.visual}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

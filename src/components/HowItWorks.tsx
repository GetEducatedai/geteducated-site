"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    title: "Learn",
    description:
      "Master the AI tools that are replacing entire industries. Not theory — practical, income-generating skills you can use this week.",
  },
  {
    num: "02",
    title: "Build",
    description:
      "Launch your AI-powered service, product, or creative business. Use our templates, workflows, and community to ship fast.",
  },
  {
    num: "03",
    title: "Lead",
    description:
      "Become the expert in your space. Teach others. Build your brand. Create the life you actually want.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-ink">
            Three steps.{" "}
            <span className="font-serif italic font-normal">No BS.</span>
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-16 font-body">
            We stripped out everything that doesn&apos;t lead to results.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-white rounded-[20px] border border-border p-8 shadow-sm"
            >
              {/* Gradient blob accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(circle,_#7C3AED_0%,_#3B82F6_50%,_transparent_70%)] opacity-15 blur-2xl pointer-events-none" />

              <span className="font-display text-6xl font-extrabold text-cream">
                {step.num}
              </span>
              <h3 className="font-display text-2xl font-bold -mt-2 mb-3 text-ink">
                {step.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed font-body">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 text-border">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

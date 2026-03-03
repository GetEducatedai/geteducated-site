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
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Three steps. <span className="text-brand-jade">No BS.</span>
          </h2>
          <p className="text-brand-cream/50 text-center max-w-xl mx-auto mb-16">
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
              className="relative"
            >
              <span className="text-7xl font-bold text-brand-jade/10">
                {step.num}
              </span>
              <h3 className="text-2xl font-bold -mt-4 mb-3">{step.title}</h3>
              <p className="text-brand-cream/50 text-sm leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 w-8 text-brand-jade/30">
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

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Learn what matters",
    body: "Skip the noise. Master the AI tools and business strategies that actually generate revenue. Our curated curriculum cuts through the hype.",
  },
  {
    num: "02",
    title: "Build real systems",
    body: "Use our templates, workflows, and community accountability to ship real projects. Build an AI-powered business — not just a portfolio.",
  },
  {
    num: "03",
    title: "Lead with confidence",
    body: "Become the expert in your space. Teach others. Build your brand. Create the life and income you actually want — on your terms.",
  },
];

const logos = [
  "ChatGPT", "Claude", "Midjourney", "Make", "n8n",
  "Runway", "ElevenLabs", "Notion", "Zapier",
];

export default function HowItWorks() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="caustic-bg py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — Header */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-light-muted text-sm font-medium mb-4">
                <span className="w-1.5 h-1.5 bg-dark-bg rounded-full" />
                How It Works
              </span>
              <h2 className="text-[#0A0A0A] text-3xl sm:text-4xl lg:text-[52px] font-black tracking-tight leading-tight mb-4">
                How the ecosystem works
              </h2>
              <p className="text-light-muted text-base mb-8 max-w-md">
                From joining to building to leading — your path inside.
              </p>
              <a
                href="https://go.geteducated.ai"
                className="inline-block bg-dark-bg2 text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-dark-bg transition btn-press"
              >
                Get Started
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Timeline */}
          <div ref={timelineRef} className="relative pl-8">
            {/* Animated red line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-light-border">
              <motion.div
                className="absolute top-0 left-0 w-full bg-red origin-top"
                style={{ scaleY: lineScale, height: "100%" }}
              />
            </div>

            <div className="space-y-16">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Red bracket accent */}
                  <div className="absolute -right-2 -top-2 text-red text-xl font-light opacity-30">
                    &#x2510;
                  </div>
                  <span className="text-light-muted text-xs tracking-wider">{step.num}</span>
                  <h3 className="text-[#0A0A0A] text-2xl font-black mt-1 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-light-muted text-sm leading-relaxed max-w-md">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Marquee */}
        <div className="mt-24 pt-12 border-t border-light-border">
          <p className="text-light-muted text-xs uppercase tracking-widest text-center mb-8">
            Master world-class tech
          </p>
          <div className="overflow-hidden">
            <div className="animate-marquee-logos flex items-center gap-8">
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={`${logo}-${i}`}
                  className="inline-flex items-center bg-white rounded-full px-5 py-2.5 text-sm font-semibold text-light-text shadow-sm whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const credentials = [
  { label: "10+ years", detail: "Visual artist" },
  { label: "Worldwide", detail: "Murals painted" },
  { label: "Self-taught", detail: "No CS degree" },
];

export default function InstructorBio() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 text-ink">
            Meet your{" "}
            <span className="font-serif italic font-bold">instructor</span>
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-cream">
              <img
                src="/images/emaan-headshot.jpg"
                alt="Emaan Faith — Founder of GetEducated.ai"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating credential badges */}
            <div className="absolute -bottom-4 left-4 right-4 flex gap-2 justify-center">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm border border-border rounded-xl px-3 py-2 shadow-sm text-center"
                >
                  <p className="font-display font-bold text-ink text-sm">{c.label}</p>
                  <p className="text-muted text-xs font-body">{c.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative blob */}
            <div className="gradient-blob w-[200px] h-[200px] bg-[radial-gradient(circle,_#7C3AED_0%,_#3B82F6_50%,_transparent_70%)] -top-8 -right-8 opacity-15 animate-blob-float" />
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="inline-block text-sm font-semibold text-violet uppercase tracking-widest mb-4 font-display">
              Founder
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-2">
              Emaan Faith
            </h3>
            <p className="text-muted text-sm font-display mb-6">
              Founder of GetEducated.ai
            </p>

            <div className="space-y-4 text-muted text-sm leading-relaxed font-body">
              <p>
                I&apos;m Emaan Faith, the Founder of GetEducated.ai. I went from self-taught artist to building a thriving AI consulting business without learning how to code.
              </p>
              <p>
                I didn&apos;t start as a technical person. I&apos;m a visual artist known for painting murals around the world. No computer science degree. No coding bootcamp. Just curiosity and a business mindset.
              </p>
              <p>
                When I discovered AI, I saw what most people miss: The biggest opportunity isn&apos;t building the technology. It&apos;s bridging the gap between businesses that need it and the solutions that exist.
              </p>
              <p>
                So I started consulting. Not as a developer, but as a strategic guide. Someone who could understand business problems, recommend the right AI solutions, and partner with technical experts for delivery.
              </p>
              <p>
                Now I&apos;m teaching non-technical people like you to do what I did: Turn AI knowledge into high-income AI consulting, without becoming a developer.
              </p>
              <p className="font-semibold text-ink">
                This masterclass is the complete system I wish I had when I started. No hype. No theory. Just the real playbook. And I&apos;m giving it to you for free.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

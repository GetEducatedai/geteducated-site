"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    name: "Custom AI Agents",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5m-4.75-11.396c.251.023.501.05.75.082M5 14.5l-1.456 1.456a1.5 1.5 0 0 0 1.06 2.544h14.792a1.5 1.5 0 0 0 1.06-2.544L19 14.5m-14 0h14"
        />
      </svg>
    ),
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    description:
      "AI agents that work 24/7 so you don't have to. We build systems that generate leads, create content, and automate operations — on autopilot.",
    benefits: [
      "Lead generation agents that qualify & nurture automatically",
      "Content creation agents that write, schedule & post for you",
      "Marketing automation that runs your funnels while you sleep",
      "Operations agents for onboarding, reporting & internal workflows",
    ],
  },
  {
    name: "AI Brand Revamp",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    description:
      "Your brand was built for the old world. We rebuild it for AI. A complete facelift for the digital age — from logo to full identity system.",
    benefits: [
      "Modern logo & visual identity designed for digital-first",
      "Full website redesign that converts visitors into customers",
      "Brand identity system — colors, type, voice, guidelines",
      "Social media templates & asset libraries included",
    ],
  },
  {
    name: "Custom App & SaaS Dev",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description:
      "From idea to shipped product. We build full-stack apps, SaaS MVPs, and AI-powered features that give you an unfair advantage.",
    benefits: [
      "Full-stack web & mobile app development",
      "SaaS MVP builds — idea to launch in weeks, not months",
      "AI-powered product features that set you apart",
      "Scalable architecture built for growth from day one",
    ],
  },
];

const clients = [
  { name: "La Villa", type: "Hospitality" },
  { name: "The Archispace", type: "Architecture & Design" },
];

export default function Services() {
  return (
    <>
      {/* Hero — dark */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-16 overflow-hidden bg-[#08080E] dot-grid">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#DC2626] text-sm font-semibold font-display mb-6 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" />
              Now accepting new clients
            </p>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Your competitors are building
            <br />
            AI-powered{" "}
            <span className="text-[#DC2626]">systems.</span>
            <br />
            Are you?
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We build custom AI agents, brand systems, and software that grow
            your business while you sleep.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a
              href="https://tally.so/r/PdzRxb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] text-white font-display font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#B91C1C] transition btn-press"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="/#pricing"
              className="border border-white/20 text-white font-display font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/5 transition btn-press"
            >
              Join Community
            </a>
          </motion.div>
        </div>
      </section>

      {/* Service Cards — light */}
      <section id="services" className="py-24 px-6 noise-light" style={{ background: "#EBEBEB" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <p className="text-[#DC2626] text-sm font-semibold font-display mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-[#DC2626]" />
              What We Build
            </p>
            <h2 className="text-[#0A0A0A] font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Three core services.
              <br />
              <span className="text-[#DC2626]">One unfair advantage.</span>
            </h2>
          </motion.div>

          <div className="grid gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300"
                style={{ border: "1px solid #D4D4D4" }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div
                    className={`relative h-64 md:h-auto min-h-[320px] overflow-hidden ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center">
                        {service.icon}
                      </div>
                      <span className="text-xs font-semibold text-[#DC2626] bg-[#DC2626]/10 px-3 py-1 rounded-full font-display uppercase tracking-wider">
                        Service
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0A0A0A] mb-3">
                      {service.name}
                    </h3>

                    <p className="text-[#6B6B6B] leading-relaxed font-display mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-sm text-[#0A0A0A]/80 font-display"
                        >
                          <span className="text-[#DC2626] font-bold mt-0.5">—</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://tally.so/r/PdzRxb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0A0A0A] text-white font-display font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#1a1a1a] transition btn-press self-start"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof — dark */}
      <section className="py-20 px-6 bg-[#08080E] dot-grid">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-white/40 text-center font-display uppercase tracking-widest mb-10"
          >
            Trusted by forward-thinking brands
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="font-display text-2xl font-black text-white">
                  {client.name}
                </span>
                <p className="text-sm text-white/40 font-display mt-2">
                  {client.type}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA — light */}
      <section className="relative py-24 px-6 noise-light overflow-hidden" style={{ background: "#EBEBEB" }}>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[#DC2626] text-sm font-semibold font-display mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-[#DC2626]" />
              Let&apos;s Build
              <span className="w-6 h-px bg-[#DC2626]" />
            </p>
            <h2 className="text-[#0A0A0A] font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Ready to <span className="text-[#DC2626]">build?</span>
            </h2>
            <p className="text-[#6B6B6B] text-lg max-w-xl mx-auto mb-10 font-display">
              Stop watching your competitors automate. Book a free strategy call
              and let&apos;s build something that works while you sleep.
            </p>
            <a
              href="https://tally.so/r/PdzRxb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#DC2626] text-white font-display font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#B91C1C] transition btn-press"
            >
              Book a Free Strategy Call
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

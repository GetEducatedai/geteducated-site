"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const plans = [
  {
    name: "Members",
    monthlyPrice: 97,
    annualPrice: 67,
    savingsPercent: 31,
    description: "For creators ready to learn and build with AI.",
    features: [
      "Full community access",
      "All Academy courses",
      "Templates library",
      "Weekly group calls",
      "Member-only events",
    ],
    cta: "Join as Member",
    popular: false,
  },
  {
    name: "Architects",
    monthlyPrice: 199,
    annualPrice: 139,
    savingsPercent: 30,
    description: "For builders ready to lead and scale.",
    features: [
      "Everything in Members",
      "1-on-1 mentorship sessions",
      "Priority collaboration matching",
      "Advanced automation templates",
      "Exclusive mastermind access",
      "Early access to all new tools",
    ],
    cta: "Join as Architect",
    popular: true,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="relative py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Conic orbs */}
      <div
        className="conic-orb w-[600px] h-[600px] top-[-150px] left-[-200px] opacity-30"
        style={{
          background:
            "conic-gradient(from var(--orb-angle), #D97706 0%, #9B1C1C 33%, #5B21B6 66%, #D97706 100%)",
        }}
      />
      <div
        className="conic-orb-slow w-[500px] h-[500px] bottom-[-100px] right-[-150px] opacity-20"
        style={{
          background:
            "conic-gradient(from var(--orb-angle), #5B21B6 0%, #D97706 33%, #9B1C1C 66%, #5B21B6 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimateIn>
          {/* Urgency banner */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30 rounded-full px-4 py-1.5 text-xs font-semibold font-display mb-8">
              <span className="w-2 h-2 bg-[#9B1C1C] rounded-full animate-pulse" />
              Only 12 founding member spots left this quarter — price increases
              next month
            </div>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
            Simple{" "}
            <span className="font-serif italic font-bold">pricing</span>
          </h2>
          <p className="text-white/60 text-center max-w-xl mx-auto mb-10 font-display">
            No hidden fees. No upsells. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <button
                onClick={() => setAnnual(!annual)}
                className="relative w-[200px] bg-white/10 rounded-full p-1 h-12 flex items-center"
                aria-label="Toggle billing period"
              >
                {/* Animated slider */}
                <motion.div
                  className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full"
                  animate={{ left: annual ? "calc(50% + 2px)" : "4px" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />

                {/* Labels */}
                <span
                  className={`relative z-10 flex-1 text-center text-sm font-display font-semibold transition-colors ${
                    !annual ? "text-[#0D0D0D]" : "text-white/60"
                  }`}
                >
                  Monthly
                </span>
                <span
                  className={`relative z-10 flex-1 text-center text-sm font-display font-semibold transition-colors ${
                    annual ? "text-[#0D0D0D]" : "text-white/60"
                  }`}
                >
                  Annual
                </span>
              </button>

              {/* 2 months FREE badge */}
              <span className="absolute top-[-8px] right-[-10px] bg-[#D97706] text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                2 months FREE
              </span>
            </div>
          </div>
        </AnimateIn>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, i) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {plan.popular ? (
                  /* Featured card - gradient border trick */
                  <div
                    className="rounded-[24px] p-[1.5px] bg-gradient-to-br from-[#D97706] via-[#9B1C1C] to-[#5B21B6] relative"
                    style={{
                      boxShadow: "0 0 60px rgba(217,119,6,0.25)",
                    }}
                  >
                    <div className="bg-[#0D0D0D] rounded-[23px] p-8 relative">
                      {/* Most Popular badge */}
                      <span className="absolute top-4 right-4 bg-[#D97706] text-white text-xs font-bold px-3 py-1 rounded-full font-display z-10">
                        Most Popular
                      </span>

                      {/* Plan name */}
                      <h3 className="font-display text-2xl font-bold text-white mb-1">
                        {plan.name}
                      </h3>

                      {/* Description */}
                      <p className="text-white/50 text-sm mb-6">
                        {plan.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline gap-1 mb-1">
                        <motion.span
                          key={price}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="font-display text-5xl font-extrabold text-white"
                        >
                          ${price}
                        </motion.span>
                        <span className="text-white/40 text-sm">/mo</span>
                      </div>

                      {/* Billing info */}
                      <div className="flex items-center gap-2 mb-8">
                        <span className="text-white/30 text-xs">
                          {annual ? "billed annually" : "billed quarterly"}
                        </span>
                        {annual && (
                          <span className="text-[#D97706] text-xs font-semibold">
                            Save {plan.savingsPercent}%
                          </span>
                        )}
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-3 text-sm"
                          >
                            <svg
                              className="w-4 h-4 flex-shrink-0 text-[#D97706]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-white/70">{f}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <a
                        href="https://go.geteducated.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gradient btn-glow rounded-full px-6 py-4 text-white font-display font-semibold w-full text-center block"
                      >
                        {plan.cta}
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Regular card */
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-8 h-full relative">
                    {/* Plan name */}
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      {plan.name}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 text-sm mb-6">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-1">
                      <motion.span
                        key={price}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl font-extrabold text-white"
                      >
                        ${price}
                      </motion.span>
                      <span className="text-white/40 text-sm">/mo</span>
                    </div>

                    {/* Billing info */}
                    <div className="flex items-center gap-2 mb-8">
                      <span className="text-white/30 text-xs">
                        {annual ? "billed annually" : "billed quarterly"}
                      </span>
                      {annual && (
                        <span className="text-[#D97706] text-xs font-semibold">
                          Save {plan.savingsPercent}%
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-sm"
                        >
                          <svg
                            className="w-4 h-4 flex-shrink-0 text-white/40"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-white/70">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="https://go.geteducated.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/20 text-white rounded-full px-6 py-4 font-display font-semibold hover:bg-white/10 transition w-full text-center block"
                    >
                      {plan.cta}
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* FOMO */}
        <AnimateIn>
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-display">
                3 people joined in the last 24 hours
              </span>
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face"
                  alt=""
                  className="w-6 h-6 rounded-full border border-white/20 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
                  alt=""
                  className="w-6 h-6 rounded-full border border-white/20 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face"
                  alt=""
                  className="w-6 h-6 rounded-full border border-white/20 object-cover"
                />
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Guarantee badge */}
        <AnimateIn>
          <div className="flex justify-center mt-4">
            <div className="inline-flex items-center gap-2 text-white/40 text-sm font-display">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              30-day money-back guarantee
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

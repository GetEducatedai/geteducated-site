"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="pricing"
      className="relative py-24 px-6 noise-light"
      style={{ background: "#EBEBEB" }}
    >
      <div className="relative z-10 max-w-5xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-[#DC2626] text-sm font-semibold font-display mb-4 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#DC2626]" />
            Pricing
            <span className="w-6 h-px bg-[#DC2626]" />
          </p>
          <h2 className="text-[#0A0A0A] font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Simple, honest pricing.
          </h2>
          <p className="text-[#6B6B6B] max-w-lg mx-auto font-display">
            No hidden fees. No upsells. Cancel anytime.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex justify-center mb-14"
        >
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-[200px] bg-[#D4D4D4] rounded-full p-1 h-12 flex items-center"
            aria-label="Toggle billing period"
          >
            <motion.div
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full"
              animate={{
                left: annual ? "calc(50% + 2px)" : "4px",
                backgroundColor: annual ? "#DC2626" : "#0A0A0A",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <span
              className={`relative z-10 flex-1 text-center text-sm font-display font-semibold transition-colors ${
                !annual ? "text-white" : "text-[#6B6B6B]"
              }`}
            >
              Monthly
            </span>
            <span
              className={`relative z-10 flex-1 text-center text-sm font-display font-semibold transition-colors ${
                annual ? "text-white" : "text-[#6B6B6B]"
              }`}
            >
              Annual
            </span>
          </button>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, i) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className={`bg-white rounded-2xl p-8 relative ${
                  plan.popular
                    ? "ring-2 ring-[#DC2626] shadow-[0_0_0_2px_#DC2626]"
                    : "shadow-sm"
                }`}
                style={{
                  border: plan.popular ? "none" : "1px solid #D4D4D4",
                }}
              >
                {/* Most Popular badge */}
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full font-display">
                    Most Popular
                  </span>
                )}

                {/* Plan name */}
                <p
                  className={`text-xs uppercase tracking-wider font-semibold font-display mb-2 ${
                    plan.popular ? "text-[#DC2626]" : "text-[#6B6B6B]"
                  }`}
                >
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-1">
                  <motion.span
                    key={price}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`font-display font-black tracking-tight ${
                      plan.popular ? "text-[#DC2626]" : "text-[#0A0A0A]"
                    }`}
                    style={{ fontSize: "clamp(48px, 8vw, 80px)" }}
                  >
                    ${price}
                  </motion.span>
                  <span className="text-[#6B6B6B] text-sm">/mo</span>
                </div>

                {/* Billing info */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-[#6B6B6B] text-xs font-display">
                    {annual ? "billed annually" : "billed monthly"}
                  </span>
                  {annual && (
                    <span className="text-[#DC2626] text-xs font-semibold font-display">
                      Save {plan.savingsPercent}%
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[#6B6B6B] text-sm mb-6 font-display">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm font-display"
                    >
                      <span className="text-[#DC2626] font-bold">—</span>
                      <span className="text-[#0A0A0A]">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://go.geteducated.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full px-6 py-4 font-display font-semibold w-full text-center block transition btn-press ${
                    plan.popular
                      ? "bg-[#DC2626] text-white hover:bg-[#B91C1C]"
                      : "bg-[#0A0A0A] text-white hover:bg-[#1a1a1a]"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <div className="inline-flex items-center gap-2 text-[#6B6B6B] text-sm font-display">
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
        </motion.div>
      </div>
    </section>
  );
}

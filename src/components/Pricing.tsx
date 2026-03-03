"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const plans = [
  {
    name: "Members",
    quarterlyPrice: 97,
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
    quarterlyPrice: 199,
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
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Simple <span className="text-brand-jade">pricing</span>
          </h2>
          <p className="text-brand-cream/50 text-center max-w-xl mx-auto mb-10">
            No hidden fees. No upsells. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span
              className={`text-sm ${!annual ? "text-brand-cream" : "text-brand-cream/40"}`}
            >
              Quarterly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-7 bg-white/10 rounded-full transition-colors"
              aria-label="Toggle billing period"
            >
              <motion.div
                className="absolute top-1 w-5 h-5 bg-brand-jade rounded-full"
                animate={{ left: annual ? "calc(100% - 24px)" : "4px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`text-sm ${annual ? "text-brand-cream" : "text-brand-cream/40"}`}
            >
              Annual{" "}
              <span className="text-brand-jade text-xs font-semibold">
                Save 20%
              </span>
            </span>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, i) => {
            const price = annual
              ? Math.round(plan.quarterlyPrice * 0.8)
              : plan.quarterlyPrice;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl border p-8 sm:p-10 ${
                  plan.popular
                    ? "border-brand-jade/40 bg-brand-jade/5"
                    : "border-white/[0.06] bg-white/[0.02]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-8 bg-brand-jade text-brand-black text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-brand-cream/50 text-sm mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1 mb-8">
                  <motion.span
                    key={price}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold"
                  >
                    ${price}
                  </motion.span>
                  <span className="text-brand-cream/40 text-sm">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <svg
                        className="w-4 h-4 text-brand-jade flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-brand-cream/70">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://go.geteducated.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-semibold px-6 py-3.5 rounded-full transition hover:scale-[1.02] active:scale-[0.98] ${
                    plan.popular
                      ? "bg-brand-jade text-brand-black hover:brightness-110"
                      : "border border-white/20 text-brand-cream hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        <AnimateIn>
          <p className="text-center text-brand-cream/30 text-sm mt-8">
            7-day money-back guarantee. No questions asked.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

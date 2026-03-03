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
    <section id="pricing" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-ink">
            Simple{" "}
            <span className="font-serif italic font-normal">pricing</span>
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-10 font-body">
            No hidden fees. No upsells. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span
              className={`text-sm font-display ${!annual ? "text-ink font-semibold" : "text-muted"}`}
            >
              Quarterly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-7 bg-border rounded-full transition-colors"
              aria-label="Toggle billing period"
            >
              <motion.div
                className="absolute top-1 w-5 h-5 bg-ink rounded-full"
                animate={{ left: annual ? "calc(100% - 24px)" : "4px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`text-sm font-display ${annual ? "text-ink font-semibold" : "text-muted"}`}
            >
              Annual{" "}
              <span className="text-violet text-xs font-semibold">
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
                className={`relative rounded-[20px] border p-8 sm:p-10 bg-white ${
                  plan.popular
                    ? "border-ink shadow-lg"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-8 bg-ink text-white text-xs font-bold px-4 py-1 rounded-full font-display">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold mb-1 text-ink">
                  {plan.name}
                </h3>
                <p className="text-muted text-sm mb-6 font-body">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1 mb-8">
                  <motion.span
                    key={price}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-display text-5xl font-extrabold text-ink"
                  >
                    ${price}
                  </motion.span>
                  <span className="text-muted text-sm font-body">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <svg
                        className="w-4 h-4 text-ink flex-shrink-0"
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
                      <span className="text-muted font-body">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://go.geteducated.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-display font-semibold px-6 py-3.5 rounded-full transition hover:scale-[1.02] active:scale-[0.98] ${
                    plan.popular
                      ? "bg-ink text-white hover:opacity-90"
                      : "border border-ink/20 text-ink hover:bg-ink/5"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        <AnimateIn>
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm text-muted shadow-sm font-body">
              <svg className="w-4 h-4 text-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              7-day money-back guarantee. No questions asked.
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

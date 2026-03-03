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
    accent: "violet",
    gradient: "from-violet/20 via-blue/10 to-transparent",
    borderGlow: "hover:shadow-violet/10",
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
    accent: "purple",
    gradient: "from-purple/20 via-violet/10 to-transparent",
    borderGlow: "hover:shadow-purple/15",
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
            <span className="font-serif italic font-bold">pricing</span>
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

        <div className="grid md:grid-cols-2 gap-8">
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
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative rounded-[24px] p-[1px] group ${
                  plan.popular
                    ? "bg-gradient-to-br from-violet via-purple to-blue"
                    : "bg-border"
                }`}
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 rounded-[26px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                    plan.popular
                      ? "bg-gradient-to-br from-violet/30 via-purple/20 to-blue/30"
                      : "bg-violet/10"
                  }`}
                />

                <div className="relative rounded-[23px] bg-white p-8 sm:p-10 h-full overflow-hidden">
                  {/* Background gradient accent */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${plan.gradient} opacity-50 blur-3xl pointer-events-none`} />

                  {plan.popular && (
                    <span className="absolute -top-px left-8 bg-gradient-to-r from-violet to-purple text-white text-xs font-bold px-5 py-1.5 rounded-b-lg font-display shadow-lg shadow-violet/20">
                      Most Popular
                    </span>
                  )}

                  <div className="relative z-10">
                    {/* Floating icon */}
                    <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center ${
                      plan.popular
                        ? "bg-gradient-to-br from-violet to-purple"
                        : "bg-cream"
                    }`}>
                      {plan.popular ? (
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                      )}
                    </div>

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
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            plan.popular ? "bg-violet/10" : "bg-cream"
                          }`}>
                            <svg
                              className={`w-3 h-3 ${plan.popular ? "text-violet" : "text-ink"}`}
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
                          </div>
                          <span className="text-muted font-body">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://go.geteducated.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center font-display font-semibold px-6 py-4 rounded-full transition btn-press ${
                        plan.popular
                          ? "bg-gradient-to-r from-violet to-purple text-white hover:opacity-90 shadow-lg shadow-violet/20"
                          : "border border-ink/20 text-ink hover:bg-ink hover:text-white"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
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

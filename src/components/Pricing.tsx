"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Members",
    icon: "\ud83d\udca1",
    quarterlyPrice: 97,
    annualPrice: 78,
    billing: { quarterly: "Billed quarterly", annual: "Billed annually" },
    description: "For creators ready to learn and build with AI.",
    features: [
      "Full community access",
      "All Academy courses",
      "Templates library",
      "Weekly group calls",
      "Member-only events",
    ],
    cta: "Join As Member",
    popular: false,
  },
  {
    name: "Architects",
    icon: "\ud83d\udd25",
    quarterlyPrice: 199,
    annualPrice: 159,
    billing: { quarterly: "Billed quarterly", annual: "Billed annually" },
    description: "For builders ready to lead and scale.",
    features: [
      "Everything in Members",
      "1-on-1 mentorship sessions",
      "Priority collaboration matching",
      "Advanced automation templates",
      "Exclusive mastermind access",
      "Early access to all new tools",
    ],
    cta: "Join As Architect",
    popular: true,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
};

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="caustic-bg py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-light-muted text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 bg-dark-bg rounded-full" />
            Memberships
          </span>
          <h2 className="text-[#0A0A0A] text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Choose your path to fulfillment
          </h2>
        </motion.div>

        {/* Toggle */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => setAnnual(false)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
              !annual ? "bg-[#0A0A0A] text-white" : "text-light-muted hover:text-light-text"
            }`}
          >
            Quarterly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 ${
              annual ? "bg-[#0A0A0A] text-white" : "text-light-muted hover:text-light-text"
            }`}
          >
            Annual
            <span className="text-red text-xs font-bold">Save 20%</span>
          </button>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => {
            const price = annual ? plan.annualPrice : plan.quarterlyPrice;
            const billingText = annual ? plan.billing.annual : plan.billing.quarterly;

            if (plan.popular) {
              return (
                <motion.div
                  key={plan.name}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="relative rounded-[20px] p-8 overflow-hidden md:scale-[1.02]"
                  style={{
                    background: "linear-gradient(#0D0D1A, #0D0D1A) padding-box, linear-gradient(135deg, #F97316, #DC2626, #7C3AED) border-box",
                    border: "1px solid transparent",
                  }}
                >
                  {/* Violet glow */}
                  <div
                    className="absolute inset-x-0 top-0 h-32 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at top, rgba(124,58,237,0.22), transparent 60%)",
                    }}
                  />
                  {/* Popular badge */}
                  <span className="absolute top-4 right-4 bg-red text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Popular
                  </span>

                  <div className="relative z-10">
                    <p className="text-2xl mb-2">{plan.icon}</p>
                    <p className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-2">
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <motion.span
                        key={price}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-5xl font-black"
                      >
                        ${price}
                      </motion.span>
                      <span className="text-white/40 text-sm">/mo</span>
                    </div>
                    <p className="text-white/40 text-xs italic mb-6">({billingText})</p>
                    <p className="text-white/50 text-sm mb-6">{plan.description}</p>

                    <a
                      href="https://go.geteducated.ai"
                      className="block bg-white text-dark-bg font-semibold px-6 py-4 rounded-full text-center text-sm hover:opacity-90 transition btn-press mb-6"
                    >
                      {plan.cta}
                    </a>

                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm">
                          <span className="text-white font-bold">&#x2713;</span>
                          <span className="text-white/70">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={plan.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="bg-white rounded-[20px] p-8 border border-light-border"
              >
                <p className="text-2xl mb-2">{plan.icon}</p>
                <p className="text-light-muted text-xs uppercase tracking-wider font-semibold mb-2">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <motion.span
                    key={price}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#0A0A0A] text-5xl font-black"
                  >
                    ${price}
                  </motion.span>
                  <span className="text-light-muted text-sm">/mo</span>
                </div>
                <p className="text-light-muted text-xs italic mb-6">({billingText})</p>
                <p className="text-light-muted text-sm mb-6">{plan.description}</p>

                <a
                  href="https://go.geteducated.ai"
                  className="block bg-dark-bg2 text-white font-semibold px-6 py-4 rounded-full text-center text-sm hover:bg-dark-bg transition btn-press mb-6"
                >
                  {plan.cta}
                </a>

                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="text-[#0A0A0A] font-bold">&#x2713;</span>
                      <span className="text-[#0A0A0A]">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-light-muted text-sm mt-10"
        >
          7-Day Money-Back Guarantee &bull; Cancel Anytime &bull; Secure Checkout
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

export default function FoundingMember() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <>
      <section className="py-24 px-6">
        <AnimateIn>
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative rounded-3xl border border-brand-jade/30 bg-gradient-to-b from-brand-jade/10 to-transparent p-10 sm:p-16 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-jade/5 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block text-sm font-bold text-brand-jade uppercase tracking-widest mb-4">
                  Limited
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Be a Founding Member.
                  <br />
                  <span className="text-brand-jade">
                    Free for the first 50.
                  </span>
                </h2>
                <p className="text-brand-cream/50 max-w-lg mx-auto mb-8">
                  Get lifetime access at no cost. Shape the community from day
                  one. Only 50 spots. Once they&apos;re gone, they&apos;re gone.
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex bg-brand-jade text-brand-black font-semibold px-8 py-4 rounded-full text-lg hover:brightness-110 transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  Claim Your Spot
                </button>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-brand-black border border-white/10 rounded-2xl p-8 sm:p-10 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-brand-cream/40 hover:text-brand-cream transition"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {submitted ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-brand-jade/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-brand-jade" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">You&apos;re in.</h3>
                  <p className="text-brand-cream/50 text-sm">
                    Check your email. Welcome to the founding class.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2">
                    Claim your founding spot
                  </h3>
                  <p className="text-brand-cream/50 text-sm mb-6">
                    Enter your email. We&apos;ll send you everything you need.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-jade/50 transition"
                    />
                    <button
                      type="submit"
                      className="w-full bg-brand-jade text-brand-black font-semibold py-3 rounded-xl hover:brightness-110 transition"
                    >
                      Join the Founding 50
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

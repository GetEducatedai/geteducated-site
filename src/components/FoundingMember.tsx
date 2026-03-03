"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

export default function FoundingMember() {
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
    <section className="py-24 px-6 bg-white">
      <AnimateIn>
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[24px] overflow-hidden p-10 sm:p-16 bg-cream">
            {/* Gradient blobs */}
            <div className="gradient-blob w-[400px] h-[400px] bg-[radial-gradient(circle,_#7C3AED_0%,_#3B82F6_50%,_transparent_70%)] top-[-100px] right-[-100px] opacity-20 animate-blob-float" />
            <div className="gradient-blob w-[300px] h-[300px] bg-[radial-gradient(circle,_#A855F7_0%,_#7C3AED_50%,_transparent_70%)] bottom-[-80px] left-[-60px] opacity-15 animate-blob-float-delay" />
            <div className="gradient-blob w-[250px] h-[250px] bg-[radial-gradient(circle,_#3B82F6_0%,_#A855F7_50%,_transparent_70%)] top-[40%] left-[50%] opacity-10 animate-blob-pulse" />

            <div className="relative z-10 text-center">
              <span className="inline-block text-sm font-bold text-violet uppercase tracking-widest mb-4 font-display">
                Limited
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-ink">
                Be a Founding Member.
                <br />
                Free for the first{" "}
                <span className="font-serif italic font-normal">50.</span>
              </h2>
              <p className="text-muted max-w-lg mx-auto mb-8 font-body">
                Get lifetime access at no cost. Shape the community from day
                one. Only 50 spots. Once they&apos;re gone, they&apos;re gone.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-6 py-3 shadow-sm"
                  >
                    <svg className="w-5 h-5 text-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-display font-semibold text-ink">You&apos;re in. Check your email.</span>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 bg-white border border-border rounded-full px-5 py-3.5 text-ink placeholder:text-muted/50 focus:outline-none focus:border-violet/50 transition font-body shadow-sm"
                    />
                    <button
                      type="submit"
                      className="bg-ink text-white font-display font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                    >
                      Claim Your Spot
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}

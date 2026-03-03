"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-jade/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-jade/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-brand-cream/80 mb-8">
            <span className="w-2 h-2 bg-brand-jade rounded-full animate-pulse" />
            150+ members building in public
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          You don&apos;t need
          <br />
          another course.
          <br />
          <span className="text-brand-jade">You need infrastructure.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-brand-cream/60 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The community for AI creators who are done watching from the sidelines.
          Learn real skills. Build real income. Lead the future.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="https://go.geteducated.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-jade text-brand-black font-semibold px-8 py-4 rounded-full text-lg hover:brightness-110 transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Join Community
          </a>
          <a
            href="#masterclass"
            className="border border-white/20 text-brand-cream font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/5 transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Watch Free Masterclass
          </a>
        </motion.div>
      </div>
    </section>
  );
}

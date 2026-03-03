"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-cream">
      {/* Floating gradient blobs */}
      <div className="gradient-blob w-[500px] h-[500px] bg-[radial-gradient(circle,_#7C3AED_0%,_#3B82F6_50%,_transparent_70%)] top-[10%] right-[-5%] opacity-30 animate-blob-float" />
      <div className="gradient-blob w-[400px] h-[400px] bg-[radial-gradient(circle,_#A855F7_0%,_#7C3AED_50%,_transparent_70%)] bottom-[15%] right-[10%] opacity-20 animate-blob-float-delay" />
      <div className="gradient-blob w-[300px] h-[300px] bg-[radial-gradient(circle,_#3B82F6_0%,_#A855F7_50%,_transparent_70%)] top-[30%] right-[20%] opacity-25 animate-blob-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-1.5 text-sm text-muted mb-8 shadow-sm">
            <span className="w-2 h-2 bg-violet rounded-full animate-pulse" />
            150+ members building in public
          </div>
        </motion.div>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6 text-ink"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          You don&apos;t need
          <br />
          another course.
          <br />
          You need{" "}
          <span className="font-serif italic font-normal">infrastructure.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 font-body"
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
            className="bg-ink text-white font-display font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Join Community
          </a>
          <a
            href="#masterclass"
            className="border border-ink/20 text-ink font-display font-semibold px-8 py-4 rounded-full text-lg hover:bg-ink/5 transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Watch Free Masterclass
          </a>
        </motion.div>
      </div>
    </section>
  );
}

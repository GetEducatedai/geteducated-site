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
        {/* Social Proof Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-border rounded-full px-5 py-2.5 mb-8 shadow-sm"
        >
          {/* Stacked avatars */}
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet to-blue border-2 border-white flex items-center justify-center text-white text-xs font-bold">E</div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple to-violet border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue to-purple border-2 border-white flex items-center justify-center text-white text-xs font-bold">M</div>
          </div>
          <span className="font-display font-extrabold text-ink text-lg">50+</span>
          {/* 5 gold stars */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-xs text-muted font-body leading-tight hidden sm:block">
            <div className="font-semibold text-ink">Multiple continents</div>
            <div>One shared vision</div>
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
          <span className="font-serif italic font-bold">infrastructure.</span>
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
            href="#pricing"
            className="bg-ink text-white font-display font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition btn-press"
          >
            Join Community
          </a>
          <a
            href="#masterclass"
            className="inline-flex items-center justify-center gap-2 border border-ink/20 text-ink font-display font-semibold px-8 py-4 rounded-full text-lg hover:bg-ink/5 transition btn-press"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch Free Masterclass
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6 mx-auto text-muted/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

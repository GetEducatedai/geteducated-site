"use client";

import { motion } from "framer-motion";

export default function CTABand() {
  return (
    <section className="relative py-24 px-6 bg-[#08080E] dot-grid">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6"
        >
          Ready to build your{" "}
          <span className="text-[#DC2626]">future?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-white/50 text-base mb-10 font-display max-w-lg mx-auto"
        >
          Join 2,500+ AI creators who stopped waiting and started building.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/#pricing"
            className="bg-[#DC2626] text-white font-display font-semibold px-8 py-4 rounded-full text-base hover:bg-[#B91C1C] transition btn-press"
          >
            Get Started Today
          </a>
          <a
            href="/masterclass"
            className="border border-white/20 text-white font-display font-semibold px-8 py-4 rounded-full text-base hover:bg-white/5 transition btn-press"
          >
            Watch Free Masterclass
          </a>
        </motion.div>
      </div>
    </section>
  );
}

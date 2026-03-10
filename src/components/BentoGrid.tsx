"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
};

export default function BentoGrid() {
  return (
    <section id="ecosystem" className="caustic-bg py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-light-muted text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 bg-dark-bg rounded-full" />
            Ecosystem
          </span>
          <h2 className="text-[#0A0A0A] text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            What&apos;s inside GetEducated.ai
          </h2>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Cell 1 — COMMUNITY (tall) */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="bg-white rounded-2xl p-8 md:row-span-2 flex flex-col justify-between card-lift"
          >
            <div>
              <h3 className="text-[#0A0A0A] text-2xl font-black mb-4">Community</h3>
              <p className="text-light-muted text-sm leading-relaxed">
                24/7 access to a global network of AI creators. Connection replaces
                isolation. Collaboration replaces competition.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["EF", "AK", "MS", "JT"].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-light-bg flex items-center justify-center text-[10px] font-bold text-light-muted border-2 border-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-light-muted text-xs">2,000+ members</span>
            </div>
          </motion.div>

          {/* Cell 2 — ACADEMY (wide) */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="bg-white rounded-2xl p-8 md:col-span-2 card-lift"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-[#0A0A0A] text-2xl font-black mb-3">Academy</h3>
                <p className="text-light-muted text-sm leading-relaxed mb-4">
                  World-class courses built for the AI era. From automation to
                  client acquisition — learn what actually makes money.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["\ud83e\udde0 Mindset", "\u26a1 AI", "\ud83d\udcbc Business"].map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-light-bg text-light-muted px-3 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full sm:w-40 h-48 rounded-xl bg-dark-bg2 flex items-end p-4 flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #0D0D1A 0%, #1a1a2e 100%)",
                }}
              >
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Featured</p>
                  <p className="text-white font-bold text-sm">The AI Academy</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cell 3 — TEMPLATES (dark) */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="rounded-2xl p-8 card-lift text-white"
            style={{
              background: "linear-gradient(135deg, #1A1A1A 0%, #2a2a2a 100%)",
            }}
          >
            <h3 className="text-white text-xl font-black mb-3">Templates</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Done-for-you workflows, proposals, and automation blueprints.
              Deploy in minutes — not weeks.
            </p>
          </motion.div>

          {/* Cell 4 — COLLABORATIONS */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="bg-white rounded-2xl p-8 card-lift"
          >
            <h3 className="text-[#0A0A0A] text-xl font-black mb-4">Collaborations</h3>
            <p className="text-light-muted text-sm leading-relaxed mb-5">
              Get matched with members for joint ventures and creative partnerships.
            </p>
            {/* Chat mockup */}
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-violet/20 flex items-center justify-center text-[8px] font-bold text-violet flex-shrink-0">A</div>
                <div className="bg-light-bg rounded-xl rounded-tl-none px-3 py-2 text-xs text-light-text">
                  Hey, I love your work!
                </div>
              </div>
              <div className="flex items-start gap-2 flex-row-reverse">
                <div className="w-6 h-6 rounded-full bg-red/20 flex items-center justify-center text-[8px] font-bold text-red flex-shrink-0">Y</div>
                <div className="bg-dark-bg2 rounded-xl rounded-tr-none px-3 py-2 text-xs text-white">
                  Let&apos;s collaborate!
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cell 5 — EVENTS (wide) */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 rounded-2xl p-8 card-lift text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #065f46 0%, #0d9488 50%, #14b8a6 100%)",
            }}
          >
            <h3 className="text-white text-2xl font-black mb-2">Live Events & Retreats</h3>
            <p className="text-white/80 text-sm mb-4">
              Dubai. Tulum. Bali. Your city next.
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Weekly workshops, AMAs, and masterminds with top AI builders.
              Plus exclusive in-person retreats around the world.
            </p>
          </motion.div>

          {/* Cell 6 — CTA Card (dark) */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="rounded-2xl p-8 dot-grid card-lift flex flex-col justify-between"
            style={{ background: "#0D0D1A" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex -space-x-1.5">
                  {["E", "M", "K"].map((l) => (
                    <div
                      key={l}
                      className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[9px] font-bold text-white border border-dark-bg2"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <span className="text-white/40 text-xs">+52 this week</span>
              </div>
              <h3 className="text-white text-xl font-black leading-tight">
                Find Your People.
                <br />
                <span className="text-red">Build Your Future.</span>
              </h3>
            </div>
            <a
              href="https://go.geteducated.ai"
              className="mt-6 inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all"
            >
              Join now <span>&rarr;</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

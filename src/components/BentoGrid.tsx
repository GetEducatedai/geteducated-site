"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Animated Counter ─── */
function Counter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const duration = 2000; // ms
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── Avatar URLs ─── */
const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
];

/* ─── Social Proof Quotes ─── */
const quotes = [
  {
    handle: "@sarah_builds",
    text: "Just landed my first AI consulting client \u2014 $3,500 retainer!",
  },
  {
    handle: "@marcus_ai",
    text: "Shipped my ManyChat automation for a restaurant chain. 3 new clients this week",
  },
  {
    handle: "@priya.creates",
    text: "Went from zero to $8K/mo in 60 days using the blueprint",
  },
];

/* ─── Main Section ─── */
export default function BentoGrid() {
  return (
    <section id="community" className="py-24 px-6 bg-[#080808] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30 rounded-full px-4 py-1.5 text-xs font-semibold font-display mb-4">
            <span>&#9679;</span> Community
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Built for{" "}
            <span className="font-serif italic font-normal">
              collective growth
            </span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-display">
            A global network of AI creators, builders, and entrepreneurs.
          </p>
        </div>

        {/* Part A — Stats Row */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
          <div className="text-center">
            <div className="font-display text-5xl sm:text-6xl font-extrabold gradient-text-warm">
              <Counter target={2500} suffix="+" />
            </div>
            <p className="text-white/50 text-sm mt-2 font-display">
              Members Worldwide
            </p>
          </div>
          <div className="text-center">
            <div className="font-display text-5xl sm:text-6xl font-extrabold gradient-text-warm">
              <Counter target={47} />
            </div>
            <p className="text-white/50 text-sm mt-2 font-display">
              Countries
            </p>
          </div>
          <div className="text-center">
            <div className="font-display text-5xl sm:text-6xl font-extrabold gradient-text-warm">
              <Counter target={94} suffix="%" />
            </div>
            <p className="text-white/50 text-sm mt-2 font-display">
              Report income within 90 days
            </p>
          </div>
        </div>

        {/* Part B — Rotating Member Ring */}
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mx-auto mb-20">
          {/* Outer rotating ring */}
          <div className="avatar-orbit relative w-full h-full">
            {avatars.map((src, i) => {
              const angle = (i / 8) * 360 * (Math.PI / 180);
              const top = 50 + 45 * Math.sin(angle);
              const left = 50 + 45 * Math.cos(angle);
              return (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="avatar-counter-rotate absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/20 object-cover"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  loading="lazy"
                />
              );
            })}
          </div>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-display font-bold text-lg text-center">
              Join the
              <br />
              Community
            </span>
          </div>
        </div>

        {/* Part C — Social Proof Feed */}
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={q.handle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
            >
              {/* iMessage-style chat bubble */}
              <div className="bg-white/10 rounded-2xl rounded-tl-sm p-4 mb-4">
                <p className="text-white/80 text-sm">{q.text}</p>
              </div>
              <p className="text-[#D97706] text-sm font-semibold font-display">
                {q.handle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/#pricing"
            className="btn-gradient btn-glow inline-block px-10 py-4 rounded-full text-white font-display font-semibold text-lg mt-16"
          >
            Join the Community
          </a>
        </div>
      </div>
    </section>
  );
}

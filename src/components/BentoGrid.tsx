"use client";

import { motion } from "framer-motion";

const cards = [
  {
    num: "01",
    title: "Academy",
    desc: "Structured courses that teach you real AI skills — from automation to client acquisition. No fluff, just results.",
    glow: "var(--glow-teal)",
    span: "",
  },
  {
    num: "02",
    title: "Community",
    desc: "24/7 access to a global network of AI creators, builders, and entrepreneurs who share wins, strategies, and support.",
    glow: "var(--glow-coral)",
    span: "",
  },
  {
    num: "03",
    title: "Templates",
    desc: "Done-for-you workflows, proposals, and automation blueprints you can deploy in minutes — not weeks.",
    glow: "var(--glow-violet)",
    span: "",
  },
  {
    num: "04",
    title: "Collaborations",
    desc: "Get matched with other members for joint ventures, client projects, and creative partnerships.",
    glow: "var(--glow-indigo)",
    span: "",
  },
  {
    num: "05",
    title: "Live Events",
    desc: "Weekly workshops, AMAs, and masterminds with top AI builders. Plus exclusive in-person retreats.",
    glow: "var(--glow-amber)",
    span: "",
  },
];

function BentoCard({
  num,
  title,
  desc,
  glow,
  index,
}: {
  num: string;
  title: string;
  desc: string;
  glow: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl p-8 transition-all duration-300 overflow-hidden"
      style={{ border: "1px solid var(--light-border)" }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(ellipse at center, ${glow}, transparent 70%)` }}
      />
      <div className="relative z-10">
        <span className="text-[#DC2626] text-sm font-bold font-display">
          {num}
        </span>
        <h3 className="text-[#0A0A0A] text-xl font-extrabold font-display mt-2 mb-3">
          {title}
        </h3>
        <p className="text-[#6B6B6B] text-sm leading-relaxed font-display">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {

  return (
    <section className="relative py-24 px-6 noise-light" style={{ background: "#EBEBEB" }}>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#DC2626] text-sm font-semibold font-display mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-[#DC2626]" />
            What You Get
          </p>
          <h2 className="text-[#0A0A0A] font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Everything you need to
            <br />
            build and scale.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-[1px] bg-[#D4D4D4] rounded-2xl overflow-hidden">
          {/* Top row — 3 cards */}
          {cards.slice(0, 3).map((card, i) => (
            <BentoCard key={card.num} {...card} index={i} />
          ))}
          {/* Bottom row — 2 cards + 1 dark statement */}
          {cards.slice(3).map((card, i) => (
            <BentoCard key={card.num} {...card} index={i + 3} />
          ))}
          {/* Statement card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="bg-[#0A0A0A] rounded-2xl p-8 flex flex-col justify-center"
          >
            <h3 className="text-white text-2xl sm:text-3xl font-black font-display leading-tight">
              Find your people.
              <br />
              <span className="text-[#DC2626]">Build your future.</span>
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

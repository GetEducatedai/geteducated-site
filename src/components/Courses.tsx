"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const courses = [
  {
    title: "AI Consultant Blueprint",
    tag: "FREE + LIVE",
    tagColor: "bg-emerald-500 text-white",
    description:
      "Go from zero to paid AI consultant. Positioning, outreach, delivery — the complete playbook.",
    gradient: "from-[#D97706]/40 via-[#9B1C1C]/20 to-[#5B21B6]/10",
    live: true,
  },
  {
    title: "AI Tools Mastery",
    tag: "Coming Soon",
    tagColor: "bg-ink/10 text-muted",
    description:
      "Master every major AI tool — from image generation to automation. Build a toolkit that sets you apart.",
    gradient: "from-[#9B1C1C]/30 via-[#D97706]/20 to-[#5B21B6]/10",
    live: false,
  },
  {
    title: "Creator's Playbook",
    tag: "Coming Soon",
    tagColor: "bg-ink/10 text-muted",
    description:
      "Build a content machine using AI video, copy, and design tools. 30 days to your first viral system.",
    gradient: "from-[#5B21B6]/30 via-[#9B1C1C]/20 to-[#D97706]/10",
    live: false,
  },
  {
    title: "AI for Business",
    tag: "Coming Soon",
    tagColor: "bg-ink/10 text-muted",
    description:
      "Automate businesses with AI workflows. Sell automation as a service. Build recurring revenue.",
    gradient: "from-[#D97706]/20 via-[#5B21B6]/30 to-[#9B1C1C]/10",
    live: false,
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30 rounded-full px-4 py-1.5 text-xs font-semibold font-display mb-4">
              <span className="w-1.5 h-1.5 bg-[#9B1C1C] rounded-full" />
              Academy
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-ink">
            The{" "}
            <span className="font-serif italic font-bold">Academy</span>
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-16 font-body">
            Courses built by practitioners. Not professors.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-[20px] border bg-white p-8 hover:shadow-lg hover:shadow-[#D97706]/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                course.live ? "border-[#D97706]/30 ring-1 ring-[#D97706]/10" : "border-border"
              }`}
            >
              {/* Placeholder gradient cover */}
              <div className="relative h-32 -mx-8 -mt-8 mb-6 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient}`} />
                {!course.live && (
                  <div className="absolute inset-0 bg-ink/5 backdrop-blur-[1px] flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-ink font-display font-bold text-sm px-4 py-2 rounded-full shadow-sm">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
              <div className="relative z-10">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 font-display ${course.tagColor}`}>
                  {course.tag}
                </span>
                <h3 className="font-display text-xl font-bold mb-2 text-ink">
                  {course.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed font-body">
                  {course.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

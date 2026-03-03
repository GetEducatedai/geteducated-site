"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const courses = [
  {
    title: "AI Consultant Blueprint",
    tag: "Free",
    description:
      "Go from zero to paid AI consultant. Positioning, outreach, delivery — the complete playbook.",
    gradient: "from-violet/30 via-blue/20 to-purple/10",
  },
  {
    title: "AI Content Engine",
    tag: "Popular",
    description:
      "Build a content machine using AI video, copy, and design tools. 30 days to your first viral system.",
    gradient: "from-purple/30 via-violet/20 to-blue/10",
  },
  {
    title: "AI Automation Mastery",
    tag: "Advanced",
    description:
      "Automate businesses with AI workflows. Sell automation as a service. Build recurring revenue.",
    gradient: "from-blue/30 via-purple/20 to-violet/10",
  },
  {
    title: "Build Your AI Brand",
    tag: "New",
    description:
      "Personal branding in the AI era. Position yourself as the go-to expert. Own your niche.",
    gradient: "from-violet/20 via-blue/30 to-purple/10",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-ink">
            The{" "}
            <span className="font-serif italic font-normal">Academy</span>
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
              className="group relative rounded-[20px] border border-border bg-white p-8 hover:shadow-lg hover:shadow-violet/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Placeholder gradient cover */}
              <div
                className={`h-32 -mx-8 -mt-8 mb-6 bg-gradient-to-br ${course.gradient}`}
              />
              <div className="relative z-10">
                <span className="inline-block text-xs font-semibold text-violet bg-violet/10 px-3 py-1 rounded-full mb-4 font-display">
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

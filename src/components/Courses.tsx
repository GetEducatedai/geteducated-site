"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const courses = [
  {
    title: "AI Consultant Blueprint",
    tag: "Free",
    description:
      "Go from zero to paid AI consultant. Positioning, outreach, delivery — the complete playbook.",
    color: "from-brand-jade/20 to-brand-jade/5",
  },
  {
    title: "AI Content Engine",
    tag: "Popular",
    description:
      "Build a content machine using AI video, copy, and design tools. 30 days to your first viral system.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    title: "AI Automation Mastery",
    tag: "Advanced",
    description:
      "Automate businesses with AI workflows. Sell automation as a service. Build recurring revenue.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    title: "Build Your AI Brand",
    tag: "New",
    description:
      "Personal branding in the AI era. Position yourself as the go-to expert. Own your niche.",
    color: "from-blue-500/20 to-blue-500/5",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            The <span className="text-brand-jade">Academy</span>
          </h2>
          <p className="text-brand-cream/50 text-center max-w-xl mx-auto mb-16">
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
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-brand-jade/30 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <span className="inline-block text-xs font-semibold text-brand-jade bg-brand-jade/10 px-3 py-1 rounded-full mb-4">
                  {course.tag}
                </span>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-brand-cream/50 text-sm leading-relaxed">
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

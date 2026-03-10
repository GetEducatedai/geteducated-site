"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const courses = [
  { title: "AI Foundations", category: "Core", author: "Emaan Faith", gradient: "from-[#1e1b4b] to-[#312e81]" },
  { title: "Client Acquisition", category: "Business", author: "Emaan Faith", gradient: "from-[#4a1942] to-[#7c3aed]" },
  { title: "Automation Mastery", category: "AI Tools", author: "Emaan Faith", gradient: "from-[#134e4a] to-[#14b8a6]" },
  { title: "Content Systems", category: "Marketing", author: "Emaan Faith", gradient: "from-[#7f1d1d] to-[#dc2626]" },
  { title: "Brand Building", category: "Branding", author: "Emaan Faith", gradient: "from-[#1e3a5f] to-[#3b82f6]" },
  { title: "Pricing & Proposals", category: "Business", author: "Emaan Faith", gradient: "from-[#78350f] to-[#d97706]" },
  { title: "AI Agent Design", category: "Advanced", author: "Emaan Faith", gradient: "from-[#064e3b] to-[#059669]" },
  { title: "Community Growth", category: "Strategy", author: "Emaan Faith", gradient: "from-[#3b0764] to-[#9333ea]" },
];

export default function CourseCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-dark-bg dot-grid py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-white/40 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 bg-red rounded-full" />
            Academy
          </span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            World-class courses, built for the AI era
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <motion.div
        ref={containerRef}
        className="flex gap-3 px-6 cursor-grab active:cursor-grabbing overflow-x-auto scrollbar-hide pb-4"
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0.1}
      >
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`flex-shrink-0 w-[220px] h-[320px] rounded-2xl bg-gradient-to-br ${course.gradient} p-5 flex flex-col justify-between relative overflow-hidden group`}
          >
            {/* Category pill */}
            <span className="inline-flex self-start bg-white/15 backdrop-blur-sm text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {course.category}
            </span>

            <div>
              <p className="text-white/50 text-xs mb-1">{course.author}</p>
              <h3 className="text-white text-lg font-black leading-tight">
                {course.title}
              </h3>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

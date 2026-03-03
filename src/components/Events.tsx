"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const events = [
  {
    name: "RE:WIRE",
    location: "Dubai, UAE",
    description:
      "A 3-day immersive for AI builders. Workshops, networking, and live building sessions in one of the world's most ambitious cities.",
    tag: "Flagship",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    name: "Visionaries in Paradise",
    location: "Tulum, Mexico",
    description:
      "Where AI meets intention. A retreat for creators who want to build businesses that fund the life they actually want.",
    tag: "Retreat",
    gradient: "from-brand-jade/20 via-teal-500/10 to-transparent",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Real events. <span className="text-brand-jade">Real people.</span>
          </h2>
          <p className="text-brand-cream/50 text-center max-w-xl mx-auto mb-16">
            We don&apos;t just exist online. We build together IRL.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
            >
              <div
                className={`h-48 bg-gradient-to-br ${event.gradient} flex items-center justify-center`}
              >
                <span className="text-4xl font-bold tracking-tight">
                  {event.name}
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-brand-jade bg-brand-jade/10 px-3 py-1 rounded-full">
                    {event.tag}
                  </span>
                  <span className="text-sm text-brand-cream/40">
                    {event.location}
                  </span>
                </div>
                <p className="text-brand-cream/50 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

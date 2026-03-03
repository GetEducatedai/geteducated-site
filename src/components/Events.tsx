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
    gradient: "from-violet/20 via-blue/10 to-purple/5",
  },
  {
    name: "Visionaries in Paradise",
    location: "Tulum, Mexico",
    description:
      "Where AI meets intention. A retreat for creators who want to build businesses that fund the life they actually want.",
    tag: "Retreat",
    gradient: "from-purple/20 via-violet/10 to-blue/5",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-ink">
            Real events.{" "}
            <span className="font-serif italic font-normal">Real people.</span>
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-16 font-body">
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
              className="group relative rounded-[20px] border border-border bg-white overflow-hidden hover:shadow-lg hover:shadow-violet/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`h-48 bg-gradient-to-br ${event.gradient} flex items-center justify-center`}
              >
                <span className="font-display text-4xl font-extrabold tracking-tight text-ink">
                  {event.name}
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-violet bg-violet/10 px-3 py-1 rounded-full font-display">
                    {event.tag}
                  </span>
                  <span className="text-sm text-muted font-body">
                    {event.location}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed font-body">
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

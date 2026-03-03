"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const events = [
  {
    name: "RE:WIRE",
    location: "Dubai, UAE",
    date: "May 2026",
    description:
      "The quarterly event at the convergence of AI, entrepreneurship, wellness tech and community building.",
    tag: "Flagship",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&auto=format",
  },
  {
    name: "Visionaries in Paradise",
    location: "Tulum, Mexico",
    date: "Coming Soon",
    description:
      "Where AI meets intention. A retreat for creators who want to build businesses that fund the life they actually want.",
    tag: "Retreat",
    image: "/images/event-tulum.jpg",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-ink">
            Real events.{" "}
            <span className="font-serif italic font-bold">Real people.</span>
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
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-[20px] overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Full bleed background image */}
              <div className="relative h-80 sm:h-96">
                <img
                  src={event.image}
                  alt={`${event.name} - ${event.location}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-display">
                      {event.tag}
                    </span>
                    <span className="text-xs font-semibold text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full font-display">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">
                    {event.name}
                  </h3>
                  <p className="text-white/70 text-sm font-body mb-2">
                    {event.location}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed font-body max-w-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

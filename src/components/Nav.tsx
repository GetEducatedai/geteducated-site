"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Academy", href: "#courses" },
  { label: "Pricing", href: "#pricing" },
  { label: "Events", href: "#events" },
  { label: "Masterclass", href: "#masterclass" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          Get<span className="text-brand-jade">Educated</span>.ai
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-brand-cream/70 hover:text-brand-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://go.geteducated.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-jade text-brand-black text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition"
          >
            Join Community
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-brand-cream transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-brand-cream transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-brand-cream transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-brand-black border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-brand-cream/70 hover:text-brand-cream transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://go.geteducated.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-jade text-brand-black font-semibold px-5 py-2.5 rounded-full text-center hover:brightness-110 transition mt-2"
              >
                Join Community
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Academy", href: "/#courses" },
  { label: "Community", href: "/#community" },
  { label: "Events", href: "/#events" },
  { label: "About", href: "/#about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-extrabold tracking-tight text-ink">
          GetEducated.ai
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted hover:text-ink transition-colors font-body"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://go.geteducated.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition font-display"
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
            className={`w-5 h-0.5 bg-ink transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-ink transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
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
            className="md:hidden bg-cream border-t border-border/60 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-muted hover:text-ink transition-colors font-body"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://go.geteducated.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink text-white font-semibold px-5 py-2.5 rounded-full text-center hover:opacity-90 transition mt-2 font-display"
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "Community", href: "/#community" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-extrabold tracking-tight text-white">
          GetEducated.ai
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors font-body"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://go.geteducated.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/10 transition font-display"
          >
            Login
          </a>
          <a
            href="/#pricing"
            className="bg-white text-ink text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition font-display btn-press"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden backdrop-blur-xl bg-black/80 border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/60 hover:text-white transition-colors font-body"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://go.geteducated.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white font-semibold px-5 py-2.5 rounded-full text-center hover:bg-white/10 transition font-display"
              >
                Login
              </a>
              <a
                href="/#pricing"
                onClick={() => setOpen(false)}
                className="bg-white text-ink font-semibold px-5 py-2.5 rounded-full text-center hover:opacity-90 transition mt-1 font-display"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

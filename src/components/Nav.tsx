"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "Community", href: "/#community" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Masterclass", href: "/masterclass" },
  { label: "Community", href: "/#community" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(12px)",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(12px)",
        background: scrolled ? "rgba(0,0,0,0.80)" : "rgba(0,0,0,0.30)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-display text-xl font-extrabold tracking-tight text-white">
          GetEducated.ai
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors font-body"
            >
              {l.label}
            </a>
          ))}
          {/* Divider */}
          <div className="w-px h-5 bg-white/15" />
          {/* Buttons */}
          <div className="flex items-center gap-2">
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
              className="bg-white text-[#0D0D0D] text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition font-display"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
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

      {/* Mobile menu — no gap, flush under nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-white/10"
            style={{ background: "rgba(0,0,0,0.90)", backdropFilter: "blur(20px)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {mobileLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-white transition-colors font-body text-base"
                >
                  {l.label}
                </a>
              ))}
              {/* Single CTA */}
              <a
                href="/#pricing"
                onClick={() => setOpen(false)}
                className="mt-2 bg-white text-[#0D0D0D] font-semibold px-5 py-3 rounded-full text-center hover:opacity-90 transition font-display"
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

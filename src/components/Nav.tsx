"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Community", href: "/community" },
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto"
      >
        <div
          className="flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300"
          style={{
            background: scrolled ? "rgba(13,13,26,0.95)" : "rgba(13,13,26,0.85)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: scrolled
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {/* Logo */}
          <a href="/" className="flex items-center px-3">
            <span className="text-white font-bold text-sm tracking-tight">
              GetEducated<span className="text-red">.ai</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] text-white/50 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-white/[0.06]"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Join Now button */}
          <a
            href="https://go.geteducated.ai"
            className="hidden lg:block bg-white text-[#08080E] text-[13px] font-semibold px-5 py-2 rounded-full hover:opacity-90 transition ml-1"
          >
            Join Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1 p-2.5 ml-2"
            aria-label="Toggle menu"
          >
            <span className={`w-4 h-[1.5px] bg-white transition-transform duration-200 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`w-4 h-[1.5px] bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`w-4 h-[1.5px] bg-white transition-transform duration-200 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-bg2/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="text-white text-3xl font-bold hover:text-red transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="https://go.geteducated.ai"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06, duration: 0.3 }}
              className="mt-4 bg-white text-dark-bg font-bold px-8 py-4 rounded-full text-lg hover:opacity-90 transition"
            >
              Join Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

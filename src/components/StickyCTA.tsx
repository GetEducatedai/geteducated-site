'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.3);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-t border-white/10"
        >
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Left side */}
            <div className="text-center sm:text-left">
              <p className="text-white font-display font-semibold text-sm sm:text-base">
                Ready to start?
              </p>
              <p className="text-white/50 text-xs">
                250+ builders already inside
              </p>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="/#pricing"
                className="btn-gradient rounded-full px-6 py-3 text-white font-display font-semibold text-sm w-full sm:w-auto text-center block"
              >
                Get Started Free
              </a>
              <button
                onClick={() => setDismissed(true)}
                className="text-white/40 hover:text-white/80 transition p-1 shrink-0"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

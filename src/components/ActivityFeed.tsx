"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ActivityFeed() {
  const [viewers, setViewers] = useState(47);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after 4 seconds
    const showTimer = setTimeout(() => setVisible(true), 4000);

    // Oscillate viewer count realistically every 8–14s
    const interval = setInterval(() => {
      setViewers((v) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.min(62, Math.max(38, v + delta));
      });
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-24 left-4 z-30 hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl"
          style={{
            background: "rgba(0,0,0,0.80)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          {/* Pulsing dot */}
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <p className="text-white text-xs font-display whitespace-nowrap">
            <span className="font-bold text-white">{viewers} people</span>
            <span className="text-white/60"> viewing this page</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

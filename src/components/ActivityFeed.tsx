'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const members = [
  { name: 'Sarah M.', city: 'Dubai' },
  { name: 'Marcus T.', city: 'London' },
  { name: 'Priya K.', city: 'Singapore' },
  { name: 'Alex R.', city: 'New York' },
  { name: 'Luna B.', city: 'Paris' },
  { name: 'David C.', city: 'Toronto' },
  { name: 'Maya S.', city: 'Sydney' },
  { name: 'James L.', city: 'Lagos' },
];

export default function ActivityFeed() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % members.length);
        setShow(true);
      }, 500);
    }, 6000);

    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    if (show) {
      const hideTimer = setTimeout(() => setShow(false), 4000);
      return () => clearTimeout(hideTimer);
    }
  }, [show, index]);

  const member = members[index];

  return (
    <div className="fixed bottom-20 left-4 z-30 hidden lg:block">
      <AnimatePresence>
        {show && (
          <motion.div
            key={index}
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-black/80 backdrop-blur border border-white/10 rounded-2xl px-4 py-3"
          >
            <div className="flex items-center gap-3">
              {/* Green pulsing dot */}
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>

              <div>
                <p className="text-white text-sm font-display">
                  {member.name} from {member.city} just joined
                </p>
                <p className="text-white/40 text-xs">2 min ago</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

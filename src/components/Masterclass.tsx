"use client";

import AnimateIn from "./AnimateIn";

export default function Masterclass() {
  return (
    <section id="masterclass" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="relative rounded-3xl border border-brand-jade/20 bg-gradient-to-br from-brand-jade/10 via-brand-black to-brand-black p-10 sm:p-16 overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-jade/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-sm font-semibold text-brand-jade uppercase tracking-widest mb-4">
                Free Masterclass
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                The AI Consultant
                <br />
                Blueprint
              </h2>
              <p className="text-brand-cream/50 max-w-lg mb-8 leading-relaxed">
                Learn how to position yourself as an AI consultant, land your
                first clients, and build a six-figure service business — all
                using tools that didn&apos;t exist two years ago.
              </p>
              <a
                href="#masterclass"
                className="inline-flex bg-brand-jade text-brand-black font-semibold px-8 py-4 rounded-full text-lg hover:brightness-110 transition hover:scale-[1.02] active:scale-[0.98]"
              >
                Watch Free Masterclass
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

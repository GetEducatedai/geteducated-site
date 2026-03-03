"use client";

import AnimateIn from "./AnimateIn";

export default function Masterclass() {
  return (
    <section id="masterclass" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="relative rounded-[24px] bg-cream p-10 sm:p-16 overflow-hidden">
            {/* Decorative gradient blobs */}
            <div className="gradient-blob w-[300px] h-[300px] bg-[radial-gradient(circle,_#7C3AED_0%,_#3B82F6_50%,_transparent_70%)] top-[-50px] right-[-50px] opacity-20 animate-blob-float" />
            <div className="gradient-blob w-[200px] h-[200px] bg-[radial-gradient(circle,_#A855F7_0%,_#7C3AED_50%,_transparent_70%)] bottom-[-30px] left-[10%] opacity-15 animate-blob-float-delay" />

            <div className="relative z-10">
              <span className="inline-block text-sm font-semibold text-violet uppercase tracking-widest mb-4 font-display">
                Free Masterclass
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-ink">
                The AI Consultant
                <br />
                <span className="font-serif italic font-normal">Blueprint</span>
              </h2>
              <p className="text-muted max-w-lg mb-8 leading-relaxed font-body">
                Learn how to position yourself as an AI consultant, land your
                first clients, and build a six-figure service business — all
                using tools that didn&apos;t exist two years ago.
              </p>
              <a
                href="#masterclass"
                className="inline-flex bg-ink text-white font-display font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition hover:scale-[1.02] active:scale-[0.98]"
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

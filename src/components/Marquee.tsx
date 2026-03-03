"use client";

import AnimateIn from "./AnimateIn";

const tools = [
  "Midjourney",
  "Runway",
  "Claude",
  "ElevenLabs",
  "HeyGen",
  "Gamma",
  "OpenAI",
  "Stable Diffusion",
  "Synthesia",
  "Descript",
  "Canva AI",
  "Notion AI",
];

function ToolPill({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 mx-3">
      <div className="w-8 h-8 rounded-lg bg-brand-jade/20 flex items-center justify-center text-brand-jade font-bold text-sm">
        {name[0]}
      </div>
      <span className="text-sm font-medium text-brand-cream/70 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function Marquee() {
  return (
    <AnimateIn>
      <section className="py-16 overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-brand-cream/40">
            Tools our community builds with
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-black to-transparent z-10" />
          <div className="flex animate-marquee">
            {[...tools, ...tools].map((tool, i) => (
              <ToolPill key={`${tool}-${i}`} name={tool} />
            ))}
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}

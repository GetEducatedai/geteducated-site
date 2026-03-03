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
  "Notion",
];

function ToolPill({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 bg-white border border-border rounded-full px-6 py-3 mx-3 shadow-sm">
      <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center text-ink font-display font-bold text-sm">
        {name[0]}
      </div>
      <span className="text-sm font-medium text-muted whitespace-nowrap font-body">
        {name}
      </span>
    </div>
  );
}

export default function Marquee() {
  return (
    <AnimateIn>
      <section className="py-16 overflow-hidden bg-white">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-muted font-display">
            Powered by the world&apos;s best AI tools
          </p>
        </div>
        <div className="relative group">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {[...tools, ...tools].map((tool, i) => (
              <ToolPill key={`${tool}-${i}`} name={tool} />
            ))}
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}

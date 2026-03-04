"use client";

import Image from "next/image";

const tools = [
  { name: "OpenAI", logo: "https://logo.clearbit.com/openai.com" },
  { name: "Claude", logo: "https://logo.clearbit.com/anthropic.com" },
  { name: "ElevenLabs", logo: "https://logo.clearbit.com/elevenlabs.io" },
  { name: "Midjourney", logo: "https://logo.clearbit.com/midjourney.com" },
  { name: "Runway", logo: "https://logo.clearbit.com/runwayml.com" },
  { name: "HeyGen", logo: "https://logo.clearbit.com/heygen.com" },
  { name: "Notion", logo: "https://logo.clearbit.com/notion.so" },
  { name: "Make", logo: "https://logo.clearbit.com/make.com" },
  { name: "n8n", logo: "https://logo.clearbit.com/n8n.io" },
];

function ToolItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 mx-10 opacity-30 hover:opacity-60 transition-opacity duration-300">
      <div className="w-5 h-5 relative flex-shrink-0">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
          unoptimized
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <span className="text-sm font-medium text-white whitespace-nowrap font-display tracking-tight">
        {name}
      </span>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative py-12 overflow-hidden bg-[#08080E] border-t border-b border-white/[0.06]">
      {/* Label */}
      <div className="text-center mb-8 relative z-10">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-display">
          Powered by the world&apos;s best AI tools
        </p>
      </div>

      {/* Scrolling strip */}
      <div className="relative group">
        {/* Edge fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #08080E, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #08080E, transparent)" }}
        />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...tools, ...tools].map((tool, i) => (
            <ToolItem
              key={`${tool.name}-${i}`}
              name={tool.name}
              logo={tool.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

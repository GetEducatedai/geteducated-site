"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

const tools = [
  { name: "OpenAI",      logo: "https://logo.clearbit.com/openai.com" },
  { name: "Claude",      logo: "https://logo.clearbit.com/anthropic.com" },
  { name: "ElevenLabs",  logo: "https://logo.clearbit.com/elevenlabs.io" },
  { name: "Midjourney",  logo: "https://logo.clearbit.com/midjourney.com" },
  { name: "Runway",      logo: "https://logo.clearbit.com/runwayml.com" },
  { name: "HeyGen",      logo: "https://logo.clearbit.com/heygen.com" },
  { name: "Notion",      logo: "https://logo.clearbit.com/notion.so" },
  { name: "Gamma",       logo: "https://logo.clearbit.com/gamma.app" },
  { name: "n8n",         logo: "https://logo.clearbit.com/n8n.io" },
  { name: "Make",        logo: "https://logo.clearbit.com/make.com" },
];

function ToolItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
      <div className="w-7 h-7 relative flex-shrink-0">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
          unoptimized
        />
      </div>
      <span className="text-sm font-semibold text-ink whitespace-nowrap font-display tracking-tight">
        {name}
      </span>
    </div>
  );
}

export default function Marquee() {
  return (
    <AnimateIn>
      <section className="py-14 overflow-hidden bg-cream border-y border-border/30">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-muted font-body">
            Powered by the world&apos;s best AI tools
          </p>
        </div>
        <div className="relative group">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {[...tools, ...tools].map((tool, i) => (
              <ToolItem key={`${tool.name}-${i}`} name={tool.name} logo={tool.logo} />
            ))}
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}

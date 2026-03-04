"use client";

import Image from "next/image";

const tools = [
  { name: "OpenAI",       logo: "https://logo.clearbit.com/openai.com" },
  { name: "Claude",       logo: "https://logo.clearbit.com/anthropic.com" },
  { name: "Gemini",       logo: "https://logo.clearbit.com/google.com" },
  { name: "ElevenLabs",   logo: "https://logo.clearbit.com/elevenlabs.io" },
  { name: "Midjourney",   logo: "https://logo.clearbit.com/midjourney.com" },
  { name: "Runway",       logo: "https://logo.clearbit.com/runwayml.com" },
  { name: "Higgsfield",   logo: "https://logo.clearbit.com/higgsfield.ai" },
  { name: "HeyGen",       logo: "https://logo.clearbit.com/heygen.com" },
  { name: "Freepik",      logo: "https://logo.clearbit.com/freepik.com" },
  { name: "Notion",       logo: "https://logo.clearbit.com/notion.so" },
  { name: "Make",         logo: "https://logo.clearbit.com/make.com" },
  { name: "n8n",          logo: "https://logo.clearbit.com/n8n.io" },
  { name: "Gamma",        logo: "https://logo.clearbit.com/gamma.app" },
  { name: "OpenClaw",     logo: "/images/openclaw-logo-white.png" },
];

function ToolItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 mx-10 opacity-50 hover:opacity-90 transition-opacity duration-300 group/item">
      <div className="w-6 h-6 relative flex-shrink-0">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
          unoptimized
          onError={(e) => {
            // Hide broken images gracefully
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <span className="text-sm font-semibold text-white whitespace-nowrap font-display tracking-tight">
        {name}
      </span>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative py-16 overflow-hidden bg-[#0D0D0D]">
      {/* Subtle brand gradient orbs — same palette as hero but dimmer */}
      <div
        className="absolute w-[500px] h-[300px] top-1/2 left-1/4 -translate-y-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #9B1C1C 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute w-[400px] h-[300px] top-1/2 right-1/4 -translate-y-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #5B21B6 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.2,
        }}
      />

      {/* Label */}
      <div className="text-center mb-10 relative z-10">
        <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-display">
          Powered by the world&apos;s best AI tools
        </p>
      </div>

      {/* Scrolling strip */}
      <div className="relative group">
        {/* Edge fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0D0D0D, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0D0D0D, transparent)" }}
        />

        {/* Marquee row */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...tools, ...tools].map((tool, i) => (
            <ToolItem key={`${tool.name}-${i}`} name={tool.name} logo={tool.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

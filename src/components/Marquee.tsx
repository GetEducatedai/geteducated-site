"use client";

import AnimateIn from "./AnimateIn";

function ToolLogo({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 bg-white border border-border rounded-full px-6 py-3 mx-3 shadow-sm hover:shadow-md hover:border-violet/20 transition-all duration-300">
      <div className="w-8 h-8 flex items-center justify-center">
        {children}
      </div>
      <span className="text-sm font-medium text-ink whitespace-nowrap font-body">
        {name}
      </span>
    </div>
  );
}

function OpenAILogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#000000">
      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0011.05.518 6.046 6.046 0 005.8 3.55a6.015 6.015 0 00-4.03 2.915 6.046 6.046 0 00.742 7.09 5.985 5.985 0 00.516 4.91 6.046 6.046 0 006.51 2.9A6.065 6.065 0 0013.95 23.48a6.046 6.046 0 005.25-3.032 6.015 6.015 0 004.03-2.915 6.043 6.043 0 00-.742-7.09zM13.95 21.784a4.526 4.526 0 01-2.907-1.053l.145-.082 4.83-2.788a.785.785 0 00.396-.682v-6.81l2.042 1.179a.072.072 0 01.04.055v5.638a4.543 4.543 0 01-4.546 4.543zM3.804 17.793a4.516 4.516 0 01-.54-3.044l.145.087 4.83 2.788a.785.785 0 00.788 0l5.897-3.405v2.357a.072.072 0 01-.03.062l-4.883 2.82a4.544 4.544 0 01-6.207-1.665zM2.527 7.896a4.526 4.526 0 012.366-1.99v5.742a.785.785 0 00.396.681l5.897 3.405-2.042 1.179a.072.072 0 01-.068.006l-4.883-2.82A4.544 4.544 0 012.527 7.897zm16.56 3.855l-5.898-3.405 2.042-1.18a.072.072 0 01.068-.005l4.883 2.82a4.544 4.544 0 01-1.66 8.238v-5.786a.785.785 0 00-.396-.682zm2.033-3.06l-.145-.087-4.83-2.788a.785.785 0 00-.788 0L9.46 9.22V6.864a.072.072 0 01.03-.063l4.883-2.82a4.544 4.544 0 016.748 4.71zm-12.78 4.212l-2.042-1.18a.072.072 0 01-.04-.054V6.03a4.544 4.544 0 017.453-3.49l-.145.082-4.83 2.788a.785.785 0 00-.396.682zm1.11-2.392l2.627-1.517 2.627 1.517v3.034l-2.627 1.517-2.627-1.517z" />
    </svg>
  );
}

function AnthropicLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#D4A574">
      <path d="M13.827 3.52h3.603L24 20.48h-3.603l-6.57-16.96zm-7.258 0h3.767L16.906 20.48h-3.674l-1.456-3.89H5.036l-1.466 3.89H0L6.569 3.52zm1.04 3.87L5.2 13.48h4.815L7.609 7.39z" />
    </svg>
  );
}

function ElevenLabsLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#000000">
      <rect x="7" y="3" width="3" height="18" rx="1.5" />
      <rect x="14" y="3" width="3" height="18" rx="1.5" />
    </svg>
  );
}

function MidjourneyLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#000000">
      <path d="M4 4c1.5 2 3 5 3 8s-1.5 6-3 8h2c2-2 4-5 6-8-2-3-4-6-6-8H4zm8 0c1.5 2 3 5 3 8s-1.5 6-3 8h2c2-2 4-5 6-8-2-3-4-6-6-8h-2z" />
    </svg>
  );
}

function RunwayLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#000000">
      <path d="M3 6h18v2H3zm0 5h12v2H3zm0 5h18v2H3z" />
    </svg>
  );
}

function HeyGenLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#6C5CE7">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

function NotionLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#000000">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.11 2.168c-.42-.326-.98-.7-2.055-.607L3.01 2.648c-.466.047-.56.28-.374.466l1.823 1.094zm.793 2.428v13.775c0 .747.373 1.027 1.214.98l14.523-.84c.84-.046.934-.56.934-1.166V5.657c0-.607-.234-.934-.747-.887l-15.177.887c-.56.047-.747.327-.747.98zM18.75 6.59c.094.42 0 .84-.42.887l-.7.14v10.264c-.607.327-1.168.514-1.635.514-.747 0-.934-.234-1.494-.934l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.187c-.093-.187 0-.653.327-.747l.84-.234V9.854L6.883 9.76c-.094-.42.14-1.027.747-1.074l3.455-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933L18.75 6.59z" />
    </svg>
  );
}

function GammaLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#8B5CF6">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#8B5CF6" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const toolLogos = [
  { name: "OpenAI", logo: <OpenAILogo /> },
  { name: "Claude", logo: <AnthropicLogo /> },
  { name: "ElevenLabs", logo: <ElevenLabsLogo /> },
  { name: "Midjourney", logo: <MidjourneyLogo /> },
  { name: "Runway", logo: <RunwayLogo /> },
  { name: "HeyGen", logo: <HeyGenLogo /> },
  { name: "Notion", logo: <NotionLogo /> },
  { name: "Gamma", logo: <GammaLogo /> },
];

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
            {[...toolLogos, ...toolLogos].map((tool, i) => (
              <ToolLogo key={`${tool.name}-${i}`} name={tool.name}>
                {tool.logo}
              </ToolLogo>
            ))}
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}

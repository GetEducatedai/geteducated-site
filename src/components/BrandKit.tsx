"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ─── helpers ─── */
const sectionIds = [
  "color",
  "typography",
  "motion",
  "components",
  "photography",
  "social",
  "voice",
] as const;

const sectionLabels: Record<string, string> = {
  color: "01 Color",
  typography: "02 Typography",
  motion: "03 Motion",
  components: "04 Components",
  photography: "05 Photography",
  social: "06 Social",
  voice: "07 Voice",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase font-display mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[#9B1C1C]" />
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-10">
      {children}
    </h2>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-[#0D0D0D] text-[#D97706] text-xs md:text-sm rounded-xl p-4 overflow-x-auto font-mono border border-white/10">
      <code>{children}</code>
    </pre>
  );
}

/* ─── main component ─── */
export default function BrandKit() {
  const [active, setActive] = useState("color");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }

    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ─── Sticky sidebar nav (desktop) ─── */}
      <nav className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-2">
        {sectionIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-[11px] font-display font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full transition-all duration-300 ${
              active === id
                ? "bg-white/10 text-white backdrop-blur-md border border-white/20"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {sectionLabels[id]}
          </a>
        ))}
      </nav>

      {/* ─── Mobile pill nav ─── */}
      <div className="lg:hidden sticky top-16 z-40 flex gap-1 overflow-x-auto px-4 py-3 bg-[#080808]/80 backdrop-blur-xl border-b border-white/5 scrollbar-hide">
        {sectionIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`whitespace-nowrap text-[10px] font-display font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full transition-all shrink-0 ${
              active === id
                ? "bg-white/10 text-white border border-white/20"
                : "text-white/40"
            }`}
          >
            {sectionLabels[id]}
          </a>
        ))}
      </div>

      {/* ════════════════════════════════════ HERO ════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#080808] px-6">
        {/* Conic orbs */}
        <div
          className="conic-orb w-[700px] h-[700px] top-[-200px] left-[-250px] opacity-25"
          style={{
            background:
              "conic-gradient(from var(--orb-angle), #D97706 0%, #9B1C1C 33%, #5B21B6 66%, #D97706 100%)",
          }}
        />
        <div
          className="conic-orb-slow w-[500px] h-[500px] bottom-[-100px] right-[-150px] opacity-20"
          style={{
            background:
              "conic-gradient(from var(--orb-angle), #5B21B6 0%, #D97706 50%, #5B21B6 100%)",
          }}
        />

        <div className="relative z-10 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold font-display text-white tracking-tight"
          >
            Brand{" "}
            <span className="font-serif italic font-normal gradient-text">
              Guidelines
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-white/50 text-lg md:text-xl font-display mt-6"
          >
            GetEducated.ai Design System — v1.0
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/30 text-sm font-display mt-3"
          >
            Updated March 2026
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════ 01 — COLOR PALETTE ════════════════════════ */}
      <section
        id="color"
        className="relative py-24 md:py-32 px-6 bg-[#F5F2EE]"
      >
        <div className="max-w-6xl mx-auto">
          <Eyebrow>01 — Color</Eyebrow>
          <SectionTitle>
            Color{" "}
            <span className="font-serif italic font-normal">Palette</span>
          </SectionTitle>

          {/* Primary swatches */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B] mb-4 font-display">
            Primary Colors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              {
                color: "#D97706",
                name: "Amber",
                usage: "Primary accent, warm orb, gradient start",
              },
              {
                color: "#9B1C1C",
                name: "Deep Red",
                usage: "Urgency, eyebrows, gradient mid",
              },
              {
                color: "#5B21B6",
                name: "Deep Indigo",
                usage: "Cool accent, gradient end",
              },
            ].map((c) => (
              <div key={c.name} className="group">
                <div
                  className="w-full h-[120px] md:h-[140px] rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ background: c.color }}
                />
                <div className="mt-3">
                  <p className="font-display font-bold text-[#0D0D0D]">
                    {c.name}
                  </p>
                  <p className="font-mono text-sm text-[#6B6B6B]">{c.color}</p>
                  <p className="text-sm text-[#6B6B6B] font-display mt-1">
                    {c.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient strips */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B] mb-4 font-display">
            Brand Gradients
          </h3>
          <div className="space-y-4 mb-16">
            <div>
              <div
                className="w-full h-16 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #D97706, #9B1C1C, #5B21B6)",
                }}
              />
              <p className="text-sm text-[#6B6B6B] font-display mt-2">
                Brand Gradient — 135&deg;
              </p>
            </div>
            <div>
              <div
                className="w-full h-16 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #FCD34D, #D97706, #9B1C1C)",
                }}
              />
              <p className="text-sm text-[#6B6B6B] font-display mt-2">
                Warm Gradient
              </p>
            </div>
          </div>

          {/* Neutrals */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B] mb-4 font-display">
            Neutrals
          </h3>
          <div className="flex flex-wrap gap-4 mb-16">
            {[
              { color: "#080808", name: "Dark Canvas" },
              { color: "#0D0D0D", name: "Dark Section" },
              { color: "#F5F2EE", name: "Cream" },
              { color: "#FFFFFF", name: "White" },
              { color: "#0D0D0D", name: "Ink" },
              { color: "#6B6B6B", name: "Muted" },
              { color: "#E8E4DF", name: "Border" },
            ].map((c, i) => (
              <div key={`${c.name}-${i}`} className="text-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-black/10 shadow-sm"
                  style={{ background: c.color }}
                />
                <p className="font-mono text-[10px] text-[#6B6B6B] mt-1.5">
                  {c.color}
                </p>
                <p className="text-[11px] font-display font-medium text-[#0D0D0D]">
                  {c.name}
                </p>
              </div>
            ))}
          </div>

          {/* Color shades */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B] mb-4 font-display">
            Color Shades
          </h3>
          <div className="space-y-6">
            {[
              {
                name: "Amber",
                shades: [
                  "#FFFBEB",
                  "#FEF3C7",
                  "#FDE68A",
                  "#FCD34D",
                  "#FBBF24",
                  "#F59E0B",
                  "#D97706",
                  "#B45309",
                  "#92400E",
                  "#78350F",
                ],
              },
              {
                name: "Red",
                shades: [
                  "#FEF2F2",
                  "#FEE2E2",
                  "#FECACA",
                  "#FCA5A5",
                  "#F87171",
                  "#EF4444",
                  "#DC2626",
                  "#B91C1C",
                  "#9B1C1C",
                  "#7F1D1D",
                ],
              },
              {
                name: "Indigo",
                shades: [
                  "#EDE9FE",
                  "#DDD6FE",
                  "#C4B5FD",
                  "#A78BFA",
                  "#8B5CF6",
                  "#7C3AED",
                  "#6D28D9",
                  "#5B21B6",
                  "#4C1D95",
                  "#3B0764",
                ],
              },
            ].map((row) => (
              <div key={row.name}>
                <p className="text-xs font-display font-semibold text-[#0D0D0D] mb-2">
                  {row.name}
                </p>
                <div className="flex gap-1">
                  {row.shades.map((s, i) => (
                    <div key={i} className="flex-1 group relative">
                      <div
                        className="h-10 md:h-12 rounded-lg transition-transform duration-200 group-hover:scale-y-125"
                        style={{ background: s }}
                      />
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-[#6B6B6B] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ 02 — TYPOGRAPHY ════════════════════════ */}
      <section
        id="typography"
        className="relative py-24 md:py-32 px-6 bg-[#080808] text-white overflow-hidden"
      >
        {/* subtle orb */}
        <div
          className="conic-orb w-[400px] h-[400px] top-[10%] right-[-100px] opacity-10"
          style={{
            background:
              "conic-gradient(from var(--orb-angle), #D97706 0%, #5B21B6 50%, #D97706 100%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Eyebrow>02 — Typography</Eyebrow>
          <SectionTitle>
            Type{" "}
            <span className="font-serif italic font-normal gradient-text">
              System
            </span>
          </SectionTitle>

          {/* Typeface cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Instrument Sans */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
              <p className="text-4xl font-bold font-display mb-4">
                Instrument Sans
              </p>
              <div className="space-y-2 mb-6 text-white/70">
                <p className="text-2xl font-normal font-display">
                  Aa Bb Cc Dd Ee Ff
                </p>
                <p className="text-2xl font-medium font-display">
                  Aa Bb Cc Dd Ee Ff
                </p>
                <p className="text-2xl font-semibold font-display">
                  Aa Bb Cc Dd Ee Ff
                </p>
                <p className="text-2xl font-bold font-display">
                  Aa Bb Cc Dd Ee Ff
                </p>
              </div>
              <p className="text-sm text-white/40 font-display mb-4">
                Used for: All headings, UI, body text, navigation, buttons
              </p>
              <div className="flex flex-wrap gap-2">
                {["Regular 400", "Medium 500", "SemiBold 600", "Bold 700"].map(
                  (w) => (
                    <span
                      key={w}
                      className="text-[10px] uppercase tracking-wider bg-white/10 rounded-full px-3 py-1 font-display"
                    >
                      {w}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Times New Roman */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
              <p className="text-4xl font-serif italic mb-4">
                Times New Roman
              </p>
              <p className="text-xl font-serif italic text-white/70 mb-6 leading-relaxed">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-sm text-white/40 font-display mb-4">
                Used for: ONE italic accent word per headline only
              </p>
              <span className="text-[10px] uppercase tracking-wider bg-white/10 rounded-full px-3 py-1 font-display">
                System Font
              </span>
            </div>
          </div>

          {/* Type scale table */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6 font-display">
            Type Scale
          </h3>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden mb-16">
            {[
              {
                label: "H1",
                size: "72–96px",
                weight: "Bold 700",
                sample: "Brand Guidelines",
              },
              {
                label: "H2",
                size: "40–56px",
                weight: "Bold 700",
                sample: "Color Palette",
              },
              {
                label: "H3",
                size: "24–32px",
                weight: "SemiBold 600",
                sample: "Primary Colors",
              },
              {
                label: "Body L",
                size: "18–20px",
                weight: "Regular 400",
                sample: "GetEducated.ai Design System",
              },
              {
                label: "Body",
                size: "14–16px",
                weight: "Regular 400",
                sample:
                  "Used for all body text and descriptions across the platform.",
              },
              {
                label: "Label",
                size: "11–12px",
                weight: "SemiBold 600",
                sample: "UPPERCASE LABEL",
              },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-8 px-6 py-5 ${
                  i > 0 ? "border-t border-white/5" : ""
                }`}
              >
                <span className="text-xs font-mono text-[#D97706] w-16 shrink-0">
                  {row.label}
                </span>
                <span className="text-xs text-white/30 font-mono w-24 shrink-0">
                  {row.size}
                </span>
                <span className="text-xs text-white/30 font-mono w-28 shrink-0">
                  {row.weight}
                </span>
                <span
                  className="font-display text-white/80 truncate"
                  style={{
                    fontSize:
                      row.label === "H1"
                        ? "2.5rem"
                        : row.label === "H2"
                          ? "1.75rem"
                          : row.label === "H3"
                            ? "1.25rem"
                            : row.label === "Body L"
                              ? "1.125rem"
                              : row.label === "Label"
                                ? "0.6875rem"
                                : "0.875rem",
                    fontWeight:
                      row.label === "Label"
                        ? 600
                        : row.label.startsWith("H")
                          ? 700
                          : 400,
                    textTransform:
                      row.label === "Label" ? "uppercase" : undefined,
                    letterSpacing:
                      row.label === "Label" ? "0.1em" : undefined,
                  }}
                >
                  {row.sample}
                </span>
              </div>
            ))}
          </div>

          {/* Headline pairing */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6 font-display">
            Headline Pairing
          </h3>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 text-center">
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
              Learn AI. Build Income.
              <br />
              Lead the{" "}
              <span className="font-serif italic font-normal gradient-text">
                Future.
              </span>
            </p>
            <p className="text-sm text-white/30 font-display mt-6">
              One Times New Roman italic word per headline — the most emotionally
              charged word
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════ 03 — GRADIENTS & MOTION ════════════════════════ */}
      <section
        id="motion"
        className="relative py-24 md:py-32 px-6 bg-[#F5F2EE]"
      >
        <div className="max-w-6xl mx-auto">
          <Eyebrow>03 — Gradients & Motion</Eyebrow>
          <SectionTitle>
            Gradients &{" "}
            <span className="font-serif italic font-normal">Motion</span>
          </SectionTitle>

          {/* 3 demo cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Dark + Orbs */}
            <div className="relative h-52 rounded-2xl bg-[#080808] overflow-hidden border border-white/10 shadow-xl">
              <div
                className="conic-orb w-[150px] h-[150px] top-[-30px] left-[-30px] opacity-40"
                style={{
                  background:
                    "conic-gradient(from var(--orb-angle), #D97706 0%, #D97706 100%)",
                }}
              />
              <div
                className="conic-orb-slow w-[120px] h-[120px] bottom-[-20px] right-[-20px] opacity-30"
                style={{
                  background:
                    "conic-gradient(from var(--orb-angle), #5B21B6 0%, #5B21B6 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-5 z-10">
                <p className="text-white font-display font-semibold text-sm">
                  Dark + Orbs
                </p>
              </div>
            </div>

            {/* Brand gradient */}
            <div
              className="relative h-52 rounded-2xl overflow-hidden shadow-xl flex items-end p-5"
              style={{
                background:
                  "linear-gradient(135deg, #D97706, #9B1C1C, #5B21B6)",
              }}
            >
              <p className="text-white font-display font-semibold text-sm">
                Brand Gradient
              </p>
            </div>

            {/* Gradient text */}
            <div className="relative h-52 rounded-2xl bg-[#080808] overflow-hidden border border-white/10 shadow-xl flex items-center justify-center">
              <p className="text-3xl font-bold font-display gradient-text">
                GetEducated.ai
              </p>
            </div>
          </div>

          {/* Animation specs table */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B] mb-4 font-display">
            Animation Specs
          </h3>
          <div className="rounded-2xl border border-[#E8E4DF] bg-white overflow-hidden">
            {[
              {
                name: "Lenis Smooth Scroll",
                value: "lerp 0.1, duration 1.2",
              },
              { name: "Orb Rotate", value: "60s linear infinite" },
              { name: "Orb Breathe", value: "18s ease-in-out infinite" },
              {
                name: "Scroll Reveal",
                value: "0.6s ease, y: 20px \u2192 0, opacity 0 \u2192 1",
              },
              { name: "Hover Lift", value: "250ms ease, translateY(-4px)" },
            ].map((row, i) => (
              <div
                key={row.name}
                className={`flex items-center gap-6 px-6 py-4 ${
                  i > 0 ? "border-t border-[#E8E4DF]" : ""
                }`}
              >
                <span className="text-sm font-display font-semibold text-[#0D0D0D] w-48 shrink-0">
                  {row.name}
                </span>
                <span className="text-sm font-mono text-[#6B6B6B]">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ 04 — COMPONENTS ════════════════════════ */}
      <section
        id="components"
        className="relative py-24 md:py-32 px-6 bg-[#0D0D0D] text-white overflow-hidden"
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <Eyebrow>04 — Components</Eyebrow>
          <SectionTitle>
            UI{" "}
            <span className="font-serif italic font-normal gradient-text">
              Components
            </span>
          </SectionTitle>

          {/* Buttons */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6 font-display">
            Buttons
          </h3>
          <div className="flex flex-wrap items-center gap-6 mb-16">
            {/* Primary gradient */}
            <button className="btn-gradient btn-glow text-white font-display font-semibold px-8 py-4 rounded-full text-lg transition btn-press">
              Get Started
            </button>

            {/* Secondary ghost on dark */}
            <button className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-display font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition btn-press">
              Watch Masterclass
            </button>

            {/* Secondary ghost on light */}
            <div className="bg-[#F5F2EE] rounded-2xl px-8 py-6">
              <button className="inline-flex items-center justify-center gap-2 border border-[#0D0D0D]/20 text-[#0D0D0D] font-display font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#0D0D0D]/5 transition btn-press">
                Learn More
              </button>
            </div>
          </div>

          {/* Eyebrow pill */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6 font-display">
            Eyebrow Pill
          </h3>
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase font-display">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9B1C1C]" />
              Community
            </span>
          </div>
          <CodeBlock>{`<span className="bg-[#9B1C1C]/15 text-[#9B1C1C] border border-[#9B1C1C]/30
  rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
  <span className="w-1.5 h-1.5 rounded-full bg-[#9B1C1C]" />
  Community
</span>`}</CodeBlock>

          {/* Card variants */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6 mt-16 font-display">
            Card Variants
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Dark glass card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-10 h-10 rounded-xl bg-[#D97706]/20 flex items-center justify-center mb-4">
                <span className="text-[#D97706] text-lg">&#9733;</span>
              </div>
              <h4 className="font-display font-bold text-lg mb-2">
                Dark Glass Card
              </h4>
              <p className="text-sm text-white/50 font-display">
                Backdrop blur with subtle white border. Used for feature cards
                and content blocks on dark sections.
              </p>
            </div>

            {/* Light card */}
            <div className="rounded-2xl border border-[#E8E4DF] bg-[#F5F2EE] p-6 text-[#0D0D0D]">
              <div className="w-10 h-10 rounded-xl bg-[#9B1C1C]/10 flex items-center justify-center mb-4">
                <span className="text-[#9B1C1C] text-lg">&#9733;</span>
              </div>
              <h4 className="font-display font-bold text-lg mb-2">
                Light Card
              </h4>
              <p className="text-sm text-[#6B6B6B] font-display">
                Cream background with soft border. Used on light sections for
                content blocks and testimonials.
              </p>
            </div>

            {/* Featured card with gradient border */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#D97706] via-[#9B1C1C] to-[#5B21B6]">
              <div className="rounded-2xl bg-[#0D0D0D] p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#5B21B6]/20 flex items-center justify-center mb-4">
                  <span className="text-[#5B21B6] text-lg">&#9733;</span>
                </div>
                <h4 className="font-display font-bold text-lg mb-2">
                  Featured Card
                </h4>
                <p className="text-sm text-white/50 font-display">
                  Gradient border wrapper using a 1px padding trick. Used to
                  highlight premium or featured content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ 05 — PHOTOGRAPHY ════════════════════════ */}
      <section
        id="photography"
        className="relative py-24 md:py-32 px-6 bg-[#F5F2EE]"
      >
        <div className="max-w-6xl mx-auto">
          <Eyebrow>05 — Photography</Eyebrow>
          <SectionTitle>
            Photography{" "}
            <span className="font-serif italic font-normal">Style</span>
          </SectionTitle>

          {/* Guidelines */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              {[
                {
                  label: "Style",
                  value: "Cinematic, warm, high-contrast",
                },
                {
                  label: "Lighting",
                  value: "Golden hour, studio rim light",
                },
                {
                  label: "Treatment",
                  value:
                    "Warm amber tones, slight desaturation, dark vignette",
                },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] font-display">
                    {item.label}
                  </p>
                  <p className="text-base text-[#0D0D0D] font-display mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-[#E8E4DF] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] font-display mb-2">
                AI Image Prompt
              </p>
              <p className="text-sm text-[#0D0D0D] font-mono leading-relaxed">
                &quot;cinematic, warm amber tones, dark background, editorial,
                luxury, 35mm film grain&quot;
              </p>
            </div>
          </div>

          {/* Emaan photos */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B] mb-6 font-display">
            Brand Photography
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/emaan-headshot.jpg"
                  alt="Emaan — Formal / Academy"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm font-display font-semibold text-[#0D0D0D] mt-3">
                Formal / Academy
              </p>
              <p className="text-xs font-mono text-[#6B6B6B]">
                /images/emaan-headshot.jpg
              </p>
            </div>
            <div className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/emaan-casual.jpg"
                  alt="Emaan — Instructor / Warm"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm font-display font-semibold text-[#0D0D0D] mt-3">
                Instructor / Warm
              </p>
              <p className="text-xs font-mono text-[#6B6B6B]">
                /images/emaan-casual.jpg
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ 06 — SOCIAL MEDIA ════════════════════════ */}
      <section
        id="social"
        className="relative py-24 md:py-32 px-6 bg-[#080808] text-white overflow-hidden"
      >
        <div
          className="conic-orb-slow w-[500px] h-[500px] bottom-[-150px] left-[-150px] opacity-10"
          style={{
            background:
              "conic-gradient(from var(--orb-angle), #D97706 0%, #9B1C1C 50%, #D97706 100%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Eyebrow>06 — Social Media</Eyebrow>
          <SectionTitle>
            Social{" "}
            <span className="font-serif italic font-normal gradient-text">
              Media
            </span>
          </SectionTitle>

          {/* Platform specs */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6 font-display">
            Platform Specs
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              {
                platform: "Instagram",
                sizes: ["1080 \u00d7 1080 Feed", "1080 \u00d7 1920 Story"],
              },
              { platform: "LinkedIn", sizes: ["1200 \u00d7 1200 Post"] },
              {
                platform: "YouTube",
                sizes: ["1280 \u00d7 720 Thumbnail"],
              },
              { platform: "X (Twitter)", sizes: ["1600 \u00d7 900 Post"] },
            ].map((p) => (
              <div
                key={p.platform}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
              >
                <p className="font-display font-bold text-sm mb-3">
                  {p.platform}
                </p>
                {p.sizes.map((s) => (
                  <p
                    key={s}
                    className="text-xs font-mono text-white/40 leading-relaxed"
                  >
                    {s}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Social post templates */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6 font-display">
            Post Templates
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Dark post */}
            <div className="relative aspect-square rounded-2xl bg-[#080808] border border-white/10 overflow-hidden p-8 flex flex-col justify-between">
              <div
                className="absolute top-[-30px] right-[-30px] w-32 h-32 rounded-full opacity-40 blur-2xl"
                style={{ background: "#D97706" }}
              />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-bold font-display leading-tight text-white">
                  Learn AI.
                  <br />
                  Build Income.
                  <br />
                  Lead the{" "}
                  <span className="font-serif italic font-normal gradient-text">
                    Future.
                  </span>
                </p>
              </div>
              <p className="relative z-10 text-xs font-display font-semibold text-white/40">
                GetEducated.ai
              </p>
            </div>

            {/* Cream post */}
            <div className="relative aspect-square rounded-2xl bg-[#F5F2EE] border border-[#E8E4DF] overflow-hidden p-8 flex flex-col justify-between">
              <div>
                <p className="text-xl md:text-2xl font-bold font-display leading-tight text-[#0D0D0D]">
                  You don&apos;t need another course.
                </p>
                <div
                  className="w-16 h-1 rounded-full mt-3"
                  style={{
                    background:
                      "linear-gradient(90deg, #D97706, #9B1C1C, #5B21B6)",
                  }}
                />
                <p className="text-sm text-[#6B6B6B] font-display mt-3">
                  You need infrastructure.
                </p>
              </div>
              <p className="text-xs font-display font-semibold text-[#6B6B6B]">
                GetEducated.ai
              </p>
            </div>

            {/* Gradient post */}
            <div
              className="relative aspect-square rounded-2xl overflow-hidden p-8 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(135deg, #D97706, #9B1C1C, #5B21B6)",
              }}
            >
              <p className="text-xl md:text-2xl font-bold font-display leading-tight text-white">
                AI isn&apos;t the future.
                <br />
                <br />
                It&apos;s the{" "}
                <span className="font-serif italic font-normal underline decoration-white/40 underline-offset-4">
                  present.
                </span>
              </p>
              <p className="text-xs font-display font-semibold text-white/60">
                GetEducated.ai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ 07 — VOICE & COPY ════════════════════════ */}
      <section
        id="voice"
        className="relative py-24 md:py-32 px-6 bg-[#F5F2EE]"
      >
        <div className="max-w-6xl mx-auto">
          <Eyebrow>07 — Voice & Copy</Eyebrow>
          <SectionTitle>
            Voice &{" "}
            <span className="font-serif italic font-normal">Copy</span>
          </SectionTitle>

          {/* DO / DON'T */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* DO */}
            <div className="rounded-2xl border border-green-200 bg-green-50/50 p-6">
              <p className="flex items-center gap-2 font-display font-bold text-green-700 mb-4 text-sm uppercase tracking-widest">
                <span className="text-lg">&#10003;</span> Do
              </p>
              <ul className="space-y-3">
                {[
                  "\u201CLearn. Build. Lead.\u201D",
                  "\u201CK\u2013K clients\u201D",
                  "\u201CNo credit card required\u201D",
                  "\u201CBuild a profitable business in 30 days\u201D",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm font-display text-[#0D0D0D] flex items-start gap-2"
                  >
                    <span className="text-green-600 mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* DON'T */}
            <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6">
              <p className="flex items-center gap-2 font-display font-bold text-red-700 mb-4 text-sm uppercase tracking-widest">
                <span className="text-lg">&#10007;</span> Don&apos;t
              </p>
              <ul className="space-y-3">
                {[
                  "\u201CAmazing opportunity!\u201D",
                  "\u201CLife-changing community\u201D",
                  "\u201CJoin our journey\u201D",
                  "\u201CWe\u2019re so excited to...\u201D",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm font-display text-[#0D0D0D] flex items-start gap-2"
                  >
                    <span className="text-red-600 mt-0.5">&#10007;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Headline formula */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#6B6B6B] mb-4 font-display">
            Headline Formula
          </h3>
          <div className="rounded-2xl border border-[#E8E4DF] bg-white p-6 md:p-8">
            <p className="font-mono text-base md:text-lg text-[#0D0D0D] mb-4">
              [Provocative truth] + [Specific result]
            </p>
            <div className="border-t border-[#E8E4DF] pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] font-display mb-2">
                Example
              </p>
              <p className="text-lg md:text-xl font-display font-bold text-[#0D0D0D]">
                &quot;You don&apos;t need another course. You need{" "}
                <span className="font-serif italic">infrastructure.</span>
                &quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

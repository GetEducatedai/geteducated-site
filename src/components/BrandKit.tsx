"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ─────────────────────────────────────────────
   BRAND TOKENS — Locked March 2026
───────────────────────────────────────────── */
const COLORS = {
  brightSun:    "#FFBF3F",
  purpleRush:   "#5F259F",
  navalPoint:   "#1F2269",
  puertoRico:   "#46C1A4",
  magentaFlirt: "#9E007E",
  radicalRed:   "#F4364C",
  black:        "#000000",
  white:        "#FFFFFF",
  dark1:        "#080808",
  dark2:        "#0D0D0D",
  cream:        "#F5F2EE",
  muted:        "#6B6B6B",
  border:       "rgba(255,255,255,0.08)",
  borderLight:  "#E8E4DF",
};

const BRAND_PALETTE = [
  { name: "Bright Sun",       hex: "#FFBF3F", use: "Energy, CTAs, highlights" },
  { name: "Purple Rush",      hex: "#5F259F", use: "Authority, depth, primary brand" },
  { name: "Naval Point",      hex: "#1F2269", use: "Trust, structure, dark accents" },
  { name: "Puerto Rico Teal", hex: "#46C1A4", use: "Growth, calm, success states" },
  { name: "Magenta Flirt",    hex: "#9E007E", use: "Bold, provocative, feminine edge" },
  { name: "Radical Red",      hex: "#F4364C", use: "Urgency, alerts, power" },
];

/* ─────────────────────────────────────────────
   NAV SECTIONS
───────────────────────────────────────────── */
const sectionIds = ["color","typography","gradients","components","logo","social","voice"] as const;
const sectionLabels: Record<string, string> = {
  color:      "01 Color",
  typography: "02 Typography",
  gradients:  "03 Gradients",
  components: "04 Components",
  logo:       "05 Logo",
  social:     "06 Social",
  voice:      "07 Voice",
};

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase font-display mb-4"
      style={{
        background: "rgba(95,37,159,0.15)",
        color: COLORS.purpleRush,
        border: `1px solid rgba(95,37,159,0.3)`,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.purpleRush }} />
      {children}
    </span>
  );
}

function SectionTitle({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      className="text-3xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-10"
      style={{ color: light ? COLORS.dark2 : COLORS.white }}
    >
      {children}
    </h2>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre
      className="text-xs md:text-sm rounded-xl p-4 overflow-x-auto font-mono"
      style={{
        background: COLORS.dark2,
        color: COLORS.brightSun,
        border: `1px solid ${COLORS.border}`,
      }}
    >
      <code>{children}</code>
    </pre>
  );
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
export default function BrandKit() {
  const [active, setActive] = useState("color");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
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
      {/* ── Sticky sidebar nav (desktop) ── */}
      <nav className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-2">
        {sectionIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-[11px] font-display font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full transition-all duration-300"
            style={{
              background: active === id ? "rgba(95,37,159,0.2)" : "transparent",
              color: active === id ? COLORS.white : "rgba(255,255,255,0.35)",
              border: active === id ? `1px solid rgba(95,37,159,0.5)` : "1px solid transparent",
            }}
          >
            {sectionLabels[id]}
          </a>
        ))}
      </nav>

      {/* ── Mobile pill nav ── */}
      <div
        className="lg:hidden sticky top-16 z-40 flex gap-1 overflow-x-auto px-4 py-3 scrollbar-hide"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${COLORS.border}` }}
      >
        {sectionIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="whitespace-nowrap text-[10px] font-display font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full transition-all shrink-0"
            style={{
              background: active === id ? "rgba(95,37,159,0.2)" : "transparent",
              color: active === id ? COLORS.white : "rgba(255,255,255,0.35)",
              border: active === id ? `1px solid rgba(95,37,159,0.4)` : "1px solid transparent",
            }}
          >
            {sectionLabels[id]}
          </a>
        ))}
      </div>

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6"
        style={{ background: COLORS.black }}
      >
        {/* Orbs */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 900, height: 900,
            top: "-350px", left: "-350px",
            background: `radial-gradient(circle, rgba(95,37,159,0.5) 0%, transparent 70%)`,
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 700, height: 700,
            bottom: "-250px", right: "-250px",
            background: `radial-gradient(circle, rgba(255,191,63,0.4) 0%, transparent 70%)`,
            filter: "blur(100px)",
          }}
        />

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display text-white tracking-tight leading-none">
              Brand{" "}
              <span className="font-serif italic font-bold gradient-text">
                Guidelines
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display mt-6 text-lg md:text-xl"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            GetEducated.ai Design System — v2.0
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display mt-2 text-sm"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Locked: March 2026
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════ 01 — COLOR ══════════════════════ */}
      <section id="color" className="py-24 md:py-32 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-6xl mx-auto">
          <Eyebrow>01 — Color</Eyebrow>
          <SectionTitle light>
            Color{" "}
            <span className="font-serif italic font-bold" style={{ color: COLORS.purpleRush }}>
              Palette
            </span>
          </SectionTitle>

          {/* 6 Brand Swatches */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 font-display" style={{ color: COLORS.muted }}>
            Six Rotating Key Colors
          </h3>
          <p className="text-sm font-display mb-8" style={{ color: COLORS.muted }}>
            One key color anchors each piece of content. Never use more than one key color per design.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-16">
            {BRAND_PALETTE.map((c) => (
              <div key={c.name} className="group">
                <div
                  className="w-full h-28 md:h-36 rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.03]"
                  style={{ background: c.hex }}
                />
                <div className="mt-3">
                  <p className="font-display font-bold text-sm" style={{ color: COLORS.dark2 }}>{c.name}</p>
                  <p className="font-mono text-xs mt-0.5" style={{ color: COLORS.muted }}>{c.hex}</p>
                  <p className="text-xs font-display mt-1" style={{ color: COLORS.muted }}>{c.use}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Neutrals */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 font-display" style={{ color: COLORS.muted }}>
            Base Colors
          </h3>
          <div className="flex flex-wrap gap-4 mb-16">
            {[
              { color: "#000000", name: "Black (Dominant BG)" },
              { color: "#080808", name: "Dark Primary" },
              { color: "#0D0D0D", name: "Dark Section" },
              { color: "#F5F2EE", name: "Cream (Light)" },
              { color: "#FFFFFF", name: "White" },
              { color: "#6B6B6B", name: "Muted" },
            ].map((c) => (
              <div key={c.name} className="text-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-xl border shadow-sm"
                  style={{ background: c.color, borderColor: COLORS.borderLight }}
                />
                <p className="font-mono text-[9px] mt-1.5" style={{ color: COLORS.muted }}>{c.color}</p>
                <p className="text-[10px] font-display font-medium mt-0.5" style={{ color: COLORS.dark2 }}>{c.name}</p>
              </div>
            ))}
          </div>

          {/* Color usage rule */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: COLORS.white, border: `1px solid ${COLORS.borderLight}` }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3 font-display" style={{ color: COLORS.muted }}>
              Usage Rule
            </p>
            <div className="space-y-2">
              {[
                "✅  One key color per content piece — never mix two key colors",
                "✅  Dark sections → White logo variant",
                "✅  Light sections → Black logo variant",
                "✅  Use the matching logo color variant when using a key color as bg",
                "❌  Never use old palette colors (Amber, Deep Red, Indigo) — locked out March 2026",
              ].map((r) => (
                <p key={r} className="text-sm font-display" style={{ color: COLORS.dark2 }}>{r}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ 02 — TYPOGRAPHY ══════════════════════ */}
      <section
        id="typography"
        className="py-24 md:py-32 px-6 overflow-hidden"
        style={{ background: COLORS.black }}
      >
        {/* Orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 800, height: 800,
            top: "0%", right: "-300px",
            background: `radial-gradient(circle, rgba(70,193,164,0.35) 0%, transparent 70%)`,
            filter: "blur(120px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Eyebrow>02 — Typography</Eyebrow>
          <SectionTitle>
            Type{" "}
            <span className="font-serif italic font-bold gradient-text">System</span>
          </SectionTitle>

          {/* Font pair cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Plus Jakarta Sans */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${COLORS.border}` }}
            >
              <p className="text-3xl font-bold font-display text-white mb-1">Plus Jakarta Sans</p>
              <p className="text-xs font-display uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
                Body / UI — var(--font-display)
              </p>
              <div className="space-y-2 mb-6">
                {[["400 Regular", "400"],["500 Medium","500"],["600 SemiBold","600"],["700 Bold","700"],["800 ExtraBold","800"]].map(([label, w]) => (
                  <p key={label} className="font-display text-xl" style={{ fontWeight: w, color: "rgba(255,255,255,0.7)" }}>
                    {label} — Aa Bb Cc 01 02
                  </p>
                ))}
              </div>
              <p className="text-xs font-display" style={{ color: "rgba(255,255,255,0.35)" }}>
                Headlines (sans line) · UI · Body · Labels · Buttons · Navigation
              </p>
            </div>

            {/* Playfair Display */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${COLORS.border}` }}
            >
              <p className="text-3xl font-serif italic text-white mb-1">Playfair Display</p>
              <p className="text-xs font-display uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
                Italic Accent — var(--font-serif)
              </p>
              <p className="text-3xl font-serif italic mb-3" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                Build Income.<br />Lead the Future.<br />
                <span className="gradient-text">Infrastructure.</span>
              </p>
              <p className="text-xs font-display mt-4" style={{ color: "rgba(255,255,255,0.35)" }}>
                One italic word or phrase per headline only — the most emotionally charged word. Never on the same line as Plus Jakarta Sans text.
              </p>
            </div>
          </div>

          {/* Headline pairing example */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 font-display" style={{ color: "rgba(255,255,255,0.35)" }}>
            Headline Pairing Rule
          </h3>
          <div
            className="rounded-2xl p-8 md:p-12 mb-16"
            style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${COLORS.border}` }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold font-display text-white leading-tight">
                  Learn AI.
                </p>
                <p className="text-4xl md:text-5xl font-serif italic leading-tight" style={{ color: COLORS.brightSun }}>
                  Build Income.
                </p>
                <p className="text-4xl md:text-5xl font-bold font-display text-white leading-tight">
                  Lead the Future.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span
                    className="text-[10px] font-mono px-2 py-1 rounded"
                    style={{ background: "rgba(255,255,255,0.08)", color: COLORS.brightSun }}
                  >
                    Plus Jakarta 700
                  </span>
                  <span className="text-xs font-display" style={{ color: "rgba(255,255,255,0.4)" }}>Sans line</span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-[10px] font-mono px-2 py-1 rounded"
                    style={{ background: "rgba(255,255,255,0.08)", color: COLORS.puertoRico }}
                  >
                    Playfair Italic 400
                  </span>
                  <span className="text-xs font-display" style={{ color: "rgba(255,255,255,0.4)" }}>Serif accent — ~8% larger for visual balance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-[10px] font-mono px-2 py-1 rounded"
                    style={{ background: "rgba(255,255,255,0.08)", color: COLORS.brightSun }}
                  >
                    Plus Jakarta 700
                  </span>
                  <span className="text-xs font-display" style={{ color: "rgba(255,255,255,0.4)" }}>Sans line</span>
                </div>
                <p className="text-xs font-display pt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Rule: Never mix the two fonts on the same line. Same weight throughout each line.
                </p>
              </div>
            </div>
          </div>

          {/* Type scale */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 font-display" style={{ color: "rgba(255,255,255,0.35)" }}>
            Type Scale
          </h3>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${COLORS.border}`, background: "rgba(255,255,255,0.03)" }}
          >
            {[
              { label: "H1", size: "72–96px", weight: "800", sample: "Brand Guidelines" },
              { label: "H2", size: "40–56px", weight: "700", sample: "Color Palette" },
              { label: "H3", size: "24–32px", weight: "600", sample: "Primary Colors" },
              { label: "Body L", size: "18–20px", weight: "400", sample: "GetEducated.ai Design System" },
              { label: "Body", size: "14–16px", weight: "400", sample: "Used for all body text and descriptions across the platform." },
              { label: "Label", size: "11–12px", weight: "600", sample: "UPPERCASE LABEL" },
            ].map((row, i) => (
              <div
                key={row.label}
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 px-6 py-5"
                style={{ borderTop: i > 0 ? `1px solid ${COLORS.border}` : "none" }}
              >
                <span className="text-xs font-mono w-16 shrink-0" style={{ color: COLORS.brightSun }}>{row.label}</span>
                <span className="text-xs font-mono w-24 shrink-0" style={{ color: "rgba(255,255,255,0.25)" }}>{row.size}</span>
                <span className="text-xs font-mono w-20 shrink-0" style={{ color: "rgba(255,255,255,0.25)" }}>wt {row.weight}</span>
                <span
                  className="font-display truncate"
                  style={{
                    fontSize: row.label === "H1" ? "2.2rem" : row.label === "H2" ? "1.6rem" : row.label === "H3" ? "1.2rem" : row.label === "Body L" ? "1.1rem" : row.label === "Label" ? "0.65rem" : "0.85rem",
                    fontWeight: row.weight,
                    color: "rgba(255,255,255,0.75)",
                    textTransform: row.label === "Label" ? "uppercase" : undefined,
                    letterSpacing: row.label === "Label" ? "0.1em" : undefined,
                  }}
                >
                  {row.sample}
                </span>
              </div>
            ))}
          </div>

          {/* Google Fonts import */}
          <div className="mt-10">
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 font-display" style={{ color: "rgba(255,255,255,0.35)" }}>
              Google Fonts Import
            </h3>
            <CodeBlock>{`<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">`}</CodeBlock>
          </div>
        </div>
      </section>

      {/* ══════════════════════ 03 — GRADIENTS ══════════════════════ */}
      <section id="gradients" className="py-24 md:py-32 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-6xl mx-auto">
          <Eyebrow>03 — Gradients</Eyebrow>
          <SectionTitle light>
            Gradients &{" "}
            <span className="font-serif italic font-bold" style={{ color: COLORS.purpleRush }}>Motion</span>
          </SectionTitle>

          {/* Gradient strips */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 font-display" style={{ color: COLORS.muted }}>
            Brand Gradients
          </h3>
          <div className="space-y-5 mb-16">
            {[
              { name: "Primary Brand Gradient", css: `linear-gradient(135deg, #FFBF3F, #9E007E, #5F259F)` },
              { name: "Warm — Sun to Red",      css: `linear-gradient(135deg, #FFBF3F, #F4364C)` },
              { name: "Deep — Navy to Teal",    css: `linear-gradient(135deg, #1F2269, #46C1A4)` },
              { name: "Bold — Magenta to Purple", css: `linear-gradient(135deg, #9E007E, #5F259F)` },
              { name: "Vivid — Red to Magenta",  css: `linear-gradient(135deg, #F4364C, #9E007E)` },
            ].map((g) => (
              <div key={g.name}>
                <div className="w-full h-14 rounded-2xl shadow-md" style={{ background: g.css }} />
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm font-display font-semibold" style={{ color: COLORS.dark2 }}>{g.name}</p>
                  <p className="text-xs font-mono" style={{ color: COLORS.muted }}>{g.css}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Orb style */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 font-display" style={{ color: COLORS.muted }}>
            Orb / Glow Style
          </h3>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { label: "Purple Rush Orb", color: "rgba(95,37,159,0.4)", bg: COLORS.black },
              { label: "Bright Sun Orb",  color: "rgba(255,191,63,0.4)", bg: COLORS.black },
              { label: "Teal Orb",        color: "rgba(70,193,164,0.4)", bg: COLORS.navalPoint },
            ].map((o) => (
              <div
                key={o.label}
                className="relative h-40 rounded-2xl overflow-hidden flex items-end p-4"
                style={{ background: o.bg }}
              >
                <div
                  className="absolute pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`, filter: "blur(50px)" }}
                />
                <p className="relative z-10 text-xs font-display font-semibold" style={{ color: COLORS.white }}>{o.label}</p>
              </div>
            ))}
          </div>

          {/* Animation specs */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 font-display" style={{ color: COLORS.muted }}>
            Animation Specs
          </h3>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${COLORS.borderLight}`, background: COLORS.white }}
          >
            {[
              { name: "Orb Breathe", value: "18s ease-in-out infinite, opacity 0.25–0.50" },
              { name: "Scroll Reveal", value: "0.6s ease, y: 20px → 0, opacity 0 → 1" },
              { name: "Hover Lift", value: "250ms ease, translateY(-4px)" },
              { name: "Gradient Angle", value: "135°  (top-left to bottom-right)" },
              { name: "Orb Blur", value: "blur(50–80px), mix-blend-mode: screen" },
            ].map((row, i) => (
              <div
                key={row.name}
                className="flex items-center gap-6 px-6 py-4"
                style={{ borderTop: i > 0 ? `1px solid ${COLORS.borderLight}` : "none" }}
              >
                <span className="text-sm font-display font-semibold w-40 shrink-0" style={{ color: COLORS.dark2 }}>{row.name}</span>
                <span className="text-sm font-mono" style={{ color: COLORS.muted }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ 04 — COMPONENTS ══════════════════════ */}
      <section id="components" className="py-24 md:py-32 px-6 overflow-hidden" style={{ background: COLORS.dark2 }}>
        <div className="relative z-10 max-w-6xl mx-auto">
          <Eyebrow>04 — Components</Eyebrow>
          <SectionTitle>
            UI{" "}
            <span className="font-serif italic font-bold gradient-text">Components</span>
          </SectionTitle>

          {/* Buttons */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 font-display" style={{ color: "rgba(255,255,255,0.35)" }}>
            Buttons
          </h3>
          <div className="flex flex-wrap items-center gap-5 mb-16">
            <button
              className="font-display font-semibold px-8 py-4 rounded-full text-base transition btn-press"
              style={{ background: `linear-gradient(135deg, ${COLORS.magentaFlirt}, ${COLORS.purpleRush})`, color: COLORS.white }}
            >
              Primary CTA
            </button>
            <button
              className="font-display font-semibold px-8 py-4 rounded-full text-base transition btn-press"
              style={{ background: COLORS.brightSun, color: COLORS.black }}
            >
              Bright Sun
            </button>
            <button
              className="font-display font-semibold px-8 py-4 rounded-full text-base transition btn-press"
              style={{ background: "transparent", color: COLORS.white, border: `1px solid rgba(255,255,255,0.2)` }}
            >
              Ghost (Dark)
            </button>
            <div className="rounded-2xl px-6 py-4" style={{ background: COLORS.cream }}>
              <button
                className="font-display font-semibold px-6 py-3 rounded-full text-sm transition btn-press"
                style={{ background: "transparent", color: COLORS.dark2, border: `1px solid rgba(0,0,0,0.15)` }}
              >
                Ghost (Light)
              </button>
            </div>
          </div>

          {/* Eyebrow pills */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-5 font-display" style={{ color: "rgba(255,255,255,0.35)" }}>
            Eyebrow Pills
          </h3>
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { bg: "rgba(95,37,159,0.15)",   text: COLORS.purpleRush,   dot: COLORS.purpleRush,   border: "rgba(95,37,159,0.3)",   label: "Community" },
              { bg: "rgba(255,191,63,0.15)",   text: "#B8860B",           dot: COLORS.brightSun,   border: "rgba(255,191,63,0.3)",  label: "Courses" },
              { bg: "rgba(70,193,164,0.15)",   text: "#2A7A6C",           dot: COLORS.puertoRico,   border: "rgba(70,193,164,0.3)",  label: "Templates" },
              { bg: "rgba(244,54,76,0.15)",    text: COLORS.radicalRed,   dot: COLORS.radicalRed,   border: "rgba(244,54,76,0.3)",   label: "Urgent" },
              { bg: "rgba(158,0,126,0.15)",    text: COLORS.magentaFlirt, dot: COLORS.magentaFlirt, border: "rgba(158,0,126,0.3)",   label: "Premium" },
            ].map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase font-display"
                style={{ background: p.bg, color: p.text, border: `1px solid ${p.border}` }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.dot }} />
                {p.label}
              </span>
            ))}
          </div>

          {/* Card variants */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 font-display" style={{ color: "rgba(255,255,255,0.35)" }}>
            Card Variants
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {/* Dark glass */}
            <div
              className="rounded-2xl p-6 card-lift"
              style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${COLORS.border}` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `rgba(95,37,159,0.2)` }}
              >
                <span style={{ color: COLORS.purpleRush, fontSize: 18 }}>⚡</span>
              </div>
              <h4 className="font-display font-bold text-white text-lg mb-2">Dark Glass Card</h4>
              <p className="text-sm font-display" style={{ color: "rgba(255,255,255,0.45)" }}>
                Subtle white border, glass bg. Use on pure black or dark sections.
              </p>
            </div>

            {/* Light card */}
            <div
              className="rounded-2xl p-6 card-lift"
              style={{ background: COLORS.cream, border: `1px solid ${COLORS.borderLight}` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `rgba(158,0,126,0.1)` }}
              >
                <span style={{ color: COLORS.magentaFlirt, fontSize: 18 }}>✦</span>
              </div>
              <h4 className="font-display font-bold text-lg mb-2" style={{ color: COLORS.dark2 }}>Light Card</h4>
              <p className="text-sm font-display" style={{ color: COLORS.muted }}>
                Cream bg, soft border. Use on light sections for testimonials and features.
              </p>
            </div>

            {/* Gradient border */}
            <div
              className="relative rounded-2xl p-[1px] card-lift"
              style={{ background: `linear-gradient(135deg, ${COLORS.brightSun}, ${COLORS.magentaFlirt}, ${COLORS.purpleRush})` }}
            >
              <div className="rounded-2xl p-6 h-full" style={{ background: COLORS.dark2 }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `rgba(255,191,63,0.15)` }}
                >
                  <span style={{ color: COLORS.brightSun, fontSize: 18 }}>★</span>
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-2">Featured Card</h4>
                <p className="text-sm font-display" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Gradient border 1px padding trick. Use to highlight premium content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ 05 — LOGO ══════════════════════ */}
      <section id="logo" className="py-24 md:py-32 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-6xl mx-auto">
          <Eyebrow>05 — Logo</Eyebrow>
          <SectionTitle light>
            Logo{" "}
            <span className="font-serif italic font-bold" style={{ color: COLORS.purpleRush }}>System</span>
          </SectionTitle>

          {/* Usage rule */}
          <div className="rounded-2xl p-5 mb-12" style={{ background: COLORS.white, border: `1px solid ${COLORS.borderLight}` }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2 font-display" style={{ color: COLORS.muted }}>Usage Rule</p>
            <p className="text-sm font-display" style={{ color: COLORS.dark2 }}>
              One key color anchors every design. Use the logo variant that matches the background — White on dark, Black on light, or the matching color variant on a colored background.
            </p>
          </div>

          {/* Full Logos — Wordmark */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 font-display" style={{ color: COLORS.muted }}>
            Full Logo — Wordmark
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {[
              { bg: COLORS.black,      src: "/logos/logo-white.png",      label: "White",         sub: "Use on all dark / black backgrounds" },
              { bg: COLORS.cream,      src: "/logos/logo-black.png",      label: "Black",         sub: "Use on all light / cream backgrounds" },
              { bg: COLORS.brightSun,  src: "/logos/logo-brightsun.png",  label: "Bright Sun",    sub: "When Bright Sun is the key color" },
              { bg: COLORS.purpleRush, src: "/logos/logo-purplerush.png", label: "Purple Rush",   sub: "When Purple Rush is the key color" },
              { bg: COLORS.navalPoint, src: "/logos/logo-navalpoint.png", label: "Naval Point",   sub: "When Naval Point is the key color" },
              { bg: COLORS.puertoRico, src: "/logos/logo-teal.png",       label: "Puerto Rico Teal", sub: "When Teal is the key color" },
              { bg: COLORS.magentaFlirt, src: "/logos/logo-magenta.png",  label: "Magenta Flirt", sub: "When Magenta is the key color" },
              { bg: COLORS.radicalRed, src: "/logos/logo-radicalred.png", label: "Radical Red",   sub: "When Radical Red is the key color" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${COLORS.borderLight}` }}>
                <div
                  className="relative flex items-center justify-center px-10 py-8"
                  style={{ background: item.bg, minHeight: 120 }}
                >
                  <Image
                    src={item.src}
                    alt={`GetEducated.ai Logo — ${item.label}`}
                    width={320}
                    height={60}
                    className="object-contain w-auto"
                    style={{ maxHeight: 56 }}
                  />
                </div>
                <div className="px-4 py-3" style={{ background: COLORS.white }}>
                  <p className="text-sm font-display font-bold" style={{ color: COLORS.dark2 }}>{item.label}</p>
                  <p className="text-xs font-display mt-0.5" style={{ color: COLORS.muted }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Logomarks */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-3 font-display" style={{ color: COLORS.muted }}>
            Logomark — Icon Only
          </h3>
          <p className="text-sm font-display mb-6" style={{ color: COLORS.muted }}>
            Use the logomark for favicons, app icons, profile images, watermarks, and tight spaces where the wordmark won&apos;t fit.
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mb-16">
            {[
              { bg: COLORS.black,        src: "/logos/mark-white.png",      label: "White" },
              { bg: COLORS.cream,        src: "/logos/mark-black.png",      label: "Black" },
              { bg: COLORS.brightSun,    src: "/logos/mark-brightsun.png",  label: "Sun" },
              { bg: COLORS.purpleRush,   src: "/logos/mark-purplerush.png", label: "Purple" },
              { bg: COLORS.navalPoint,   src: "/logos/mark-navalpoint.png", label: "Navy" },
              { bg: COLORS.puertoRico,   src: "/logos/mark-teal.png",       label: "Teal" },
              { bg: COLORS.magentaFlirt, src: "/logos/mark-magenta.png",    label: "Magenta" },
              { bg: COLORS.radicalRed,   src: "/logos/mark-radicalred.png", label: "Red" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div
                  className="rounded-2xl flex items-center justify-center p-3 aspect-square mb-2"
                  style={{ background: item.bg, border: `1px solid ${COLORS.borderLight}` }}
                >
                  <Image
                    src={item.src}
                    alt={`GetEducated.ai Logomark — ${item.label}`}
                    width={60}
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="text-[10px] font-display font-medium" style={{ color: COLORS.muted }}>{item.label}</p>
              </div>
            ))}
          </div>

          {/* Clear space rule */}
          <div className="rounded-2xl p-6" style={{ background: COLORS.white, border: `1px solid ${COLORS.borderLight}` }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3 font-display" style={{ color: COLORS.muted }}>Clear Space & Don&apos;ts</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "✅  Always maintain clear space equal to the height of the 'G' around the logo",
                "✅  Scale proportionally — never stretch or squish",
                "❌  Never place the White logo on a light background",
                "❌  Never place the Black logo on a dark background",
                "❌  Never add drop shadows, outlines, or effects to the logo",
                "❌  Never rotate or alter the logo in any way",
              ].map((r) => (
                <p key={r} className="text-sm font-display" style={{ color: COLORS.dark2 }}>{r}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ 06 — SOCIAL MEDIA ══════════════════════ */}
      <section id="social" className="py-24 md:py-32 px-6 overflow-hidden" style={{ background: COLORS.black }}>
        {/* Orb */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            width: 800, height: 800,
            bottom: "-300px", left: "-300px",
            background: `radial-gradient(circle, rgba(158,0,126,0.4) 0%, transparent 70%)`,
            filter: "blur(120px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Eyebrow>06 — Social Media</Eyebrow>
          <SectionTitle>
            Social{" "}
            <span className="font-serif italic font-bold gradient-text">Media</span>
          </SectionTitle>

          {/* Platform specs */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 font-display" style={{ color: "rgba(255,255,255,0.35)" }}>
            Platform Specs
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { platform: "Instagram",  sizes: ["1080 × 1080 Feed", "1080 × 1920 Story/Reels"] },
              { platform: "LinkedIn",   sizes: ["1200 × 1200 Post", "1200 × 627 Banner"] },
              { platform: "YouTube",    sizes: ["1280 × 720 Thumbnail", "2560 × 1440 Banner"] },
              { platform: "X (Twitter)", sizes: ["1600 × 900 Post", "1500 × 500 Header"] },
            ].map((p) => (
              <div
                key={p.platform}
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${COLORS.border}` }}
              >
                <p className="font-display font-bold text-sm text-white mb-3">{p.platform}</p>
                {p.sizes.map((s) => (
                  <p key={s} className="text-xs font-mono mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>{s}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Post templates */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 font-display" style={{ color: "rgba(255,255,255,0.35)" }}>
            Post Template Styles
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {/* Dark + Bright Sun */}
            <div
              className="relative aspect-square rounded-2xl overflow-hidden p-8 flex flex-col justify-between"
              style={{ background: COLORS.black }}
            >
              <div
                className="absolute pointer-events-none"
                style={{ background: `radial-gradient(circle, rgba(255,191,63,0.5) 0%, transparent 70%)`, filter: "blur(70px)" }}
              />
              <div className="relative z-10">
                <p className="text-lg font-bold font-display text-white leading-snug">
                  Stop consuming.
                  <br />
                  <span className="font-serif italic font-bold" style={{ color: COLORS.brightSun }}>
                    Start building.
                  </span>
                </p>
              </div>
              <div className="relative z-10 flex items-center justify-between">
                <p className="text-xs font-display font-semibold" style={{ color: "rgba(255,255,255,0.35)" }}>GetEducated.ai</p>
                <span
                  className="text-[10px] font-display font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: `rgba(255,191,63,0.15)`, color: COLORS.brightSun }}
                >
                  Dark / Sun
                </span>
              </div>
            </div>

            {/* Cream */}
            <div
              className="relative aspect-square rounded-2xl overflow-hidden p-8 flex flex-col justify-between"
              style={{ background: COLORS.cream }}
            >
              <div>
                <p className="text-lg font-bold font-display leading-snug" style={{ color: COLORS.dark2 }}>
                  You don&apos;t need another course.
                </p>
                <div
                  className="w-12 h-1 rounded-full mt-3"
                  style={{ background: `linear-gradient(90deg, ${COLORS.magentaFlirt}, ${COLORS.purpleRush})` }}
                />
                <p className="text-sm font-serif italic mt-3" style={{ color: COLORS.purpleRush }}>
                  You need infrastructure.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-display font-semibold" style={{ color: COLORS.muted }}>GetEducated.ai</p>
                <span
                  className="text-[10px] font-display font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: `rgba(95,37,159,0.1)`, color: COLORS.purpleRush }}
                >
                  Light / Cream
                </span>
              </div>
            </div>

            {/* Gradient */}
            <div
              className="relative aspect-square rounded-2xl overflow-hidden p-8 flex flex-col justify-between"
              style={{ background: `linear-gradient(135deg, ${COLORS.navalPoint}, ${COLORS.magentaFlirt}, ${COLORS.radicalRed})` }}
            >
              <p className="text-lg font-bold font-display text-white leading-snug">
                AI isn&apos;t the future.
                <br /><br />
                It&apos;s the{" "}
                <span className="font-serif italic font-bold underline decoration-white/40 underline-offset-4">
                  present.
                </span>
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xs font-display font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>GetEducated.ai</p>
                <span
                  className="text-[10px] font-display font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: `rgba(255,255,255,0.15)`, color: COLORS.white }}
                >
                  Gradient
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ 07 — VOICE & COPY ══════════════════════ */}
      <section id="voice" className="py-24 md:py-32 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-6xl mx-auto">
          <Eyebrow>07 — Voice & Copy</Eyebrow>
          <SectionTitle light>
            Voice &{" "}
            <span className="font-serif italic font-bold" style={{ color: COLORS.purpleRush }}>Tone</span>
          </SectionTitle>

          {/* Brand voice statement */}
          <div
            className="rounded-2xl p-8 md:p-10 mb-12"
            style={{ background: COLORS.navalPoint }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-4 font-display" style={{ color: "rgba(255,255,255,0.5)" }}>
              Our Voice
            </p>
            <p className="text-2xl md:text-3xl font-bold font-display text-white leading-snug mb-4">
              We are the{" "}
              <span className="font-serif italic font-bold" style={{ color: COLORS.brightSun }}>
                conscious leaders
              </span>{" "}
              of the future.
            </p>
            <p className="text-base font-display leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              Empowering the rebels, the visionaries, and the changemakers who refuse to accept the old way of doing things. We believe AI belongs to those who build with intention — and that sustainable growth and human wellness are not at odds with the future. They are the future.
            </p>
          </div>

          {/* Identity pillars */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 font-display" style={{ color: COLORS.muted }}>
            Brand Identity Pillars
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              {
                word: "Empowering",
                color: COLORS.puertoRico,
                desc: "We build people up with real skills, real tools, real results. Not inspiration porn — actual capability.",
              },
              {
                word: "Rebellious",
                color: COLORS.radicalRed,
                desc: "We reject the traditional education model, the hustle-till-you-break mentality, and the gatekeepers of knowledge.",
              },
              {
                word: "Visionary",
                color: COLORS.purpleRush,
                desc: "We see where AI is going — and we help our community get there first, with clarity and strategy.",
              },
              {
                word: "Anti-Establishment",
                color: COLORS.magentaFlirt,
                desc: "Degrees don't build futures. Execution does. We are the alternative — and we're proud of it.",
              },
              {
                word: "Futurist",
                color: COLORS.brightSun,
                desc: "We live in the adjacent possible. Always one step ahead, building the infrastructure for what comes next.",
              },
              {
                word: "Conscious",
                color: COLORS.navalPoint,
                desc: "Sustainable growth. Human wellness. We build boldly without burning out — and we teach others to do the same.",
              },
            ].map((p) => (
              <div
                key={p.word}
                className="rounded-2xl p-6"
                style={{ background: COLORS.white, border: `1px solid ${COLORS.borderLight}` }}
              >
                <div className="w-8 h-1 rounded-full mb-4" style={{ background: p.color }} />
                <p className="font-display font-bold text-lg mb-2" style={{ color: COLORS.dark2 }}>{p.word}</p>
                <p className="text-sm font-display leading-relaxed" style={{ color: COLORS.muted }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Do / Don't */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 font-display" style={{ color: COLORS.muted }}>
            In Practice
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(70,193,164,0.08)", border: "1px solid rgba(70,193,164,0.25)" }}
            >
              <p className="font-display font-bold text-sm uppercase tracking-widest mb-4" style={{ color: COLORS.puertoRico }}>
                ✓ We say
              </p>
              <ul className="space-y-3">
                {[
                  '"Stop consuming. Start building."',
                  '"You don\'t need another course. You need infrastructure."',
                  '"The AI era rewards builders. Are you one?"',
                  '"Learn. Build. Lead. In that order."',
                  '"Sustainable success is not optional. It\'s the strategy."',
                ].map((item) => (
                  <li key={item} className="text-sm font-display flex items-start gap-2" style={{ color: COLORS.dark2 }}>
                    <span style={{ color: COLORS.puertoRico, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(244,54,76,0.06)", border: "1px solid rgba(244,54,76,0.2)" }}
            >
              <p className="font-display font-bold text-sm uppercase tracking-widest mb-4" style={{ color: COLORS.radicalRed }}>
                ✕ We never say
              </p>
              <ul className="space-y-3">
                {[
                  '"Amazing opportunity!"',
                  '"We\'re so excited to share..."',
                  '"Join our journey"',
                  '"Grind harder. Hustle more."',
                  '"Empower your potential" (vague, hollow)',
                ].map((item) => (
                  <li key={item} className="text-sm font-display flex items-start gap-2" style={{ color: COLORS.dark2 }}>
                    <span style={{ color: COLORS.radicalRed, flexShrink: 0 }}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Headline formula */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 font-display" style={{ color: COLORS.muted }}>
            Headline Formula
          </h3>
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: COLORS.white, border: `1px solid ${COLORS.borderLight}` }}
          >
            <p className="font-mono text-base md:text-lg mb-4" style={{ color: COLORS.dark2 }}>
              [Provocative truth] + [Specific result or vision]
            </p>
            <div style={{ borderTop: `1px solid ${COLORS.borderLight}` }} className="pt-5 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest font-display" style={{ color: COLORS.muted }}>Examples</p>
              {[
                { line1: "You don't need another course.", line2: "You need infrastructure." },
                { line1: "The old way is over.", line2: "Build for the AI era." },
                { line1: "Conscious leaders don't hustle.", line2: "They build systems." },
              ].map((ex, i) => (
                <div key={i} style={{ borderTop: i > 0 ? `1px solid ${COLORS.borderLight}` : "none", paddingTop: i > 0 ? 16 : 0 }}>
                  <p className="text-lg md:text-xl font-display font-bold" style={{ color: COLORS.dark2 }}>
                    &quot;{ex.line1}{" "}
                    <span className="font-serif italic font-bold" style={{ color: COLORS.purpleRush }}>{ex.line2}</span>&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="py-16 px-6 text-center"
        style={{ background: COLORS.black, borderTop: `1px solid ${COLORS.border}` }}
      >
        <p className="text-xs font-display uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.2)" }}>
          GetEducated.ai · Brand Guidelines v2.0 · Locked March 2026
        </p>
      </footer>
    </>
  );
}

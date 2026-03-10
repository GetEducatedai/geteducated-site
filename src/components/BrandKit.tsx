"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            top: "-200px", left: "-200px",
            background: `radial-gradient(circle, rgba(95,37,159,0.35) 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            bottom: "-100px", right: "-100px",
            background: `radial-gradient(circle, rgba(255,191,63,0.25) 0%, transparent 70%)`,
            filter: "blur(50px)",
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
              <span className="font-serif italic font-normal gradient-text">
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
            <span className="font-serif italic font-normal" style={{ color: COLORS.purpleRush }}>
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
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            top: "10%", right: "-150px",
            background: `radial-gradient(circle, rgba(70,193,164,0.2) 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Eyebrow>02 — Typography</Eyebrow>
          <SectionTitle>
            Type{" "}
            <span className="font-serif italic font-normal gradient-text">System</span>
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
            <span className="font-serif italic font-normal" style={{ color: COLORS.purpleRush }}>Motion</span>
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
                  className="absolute top-[-30px] right-[-30px] w-32 h-32 rounded-full"
                  style={{ background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`, filter: "blur(20px)" }}
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
            <span className="font-serif italic font-normal gradient-text">Components</span>
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
            <span className="font-serif italic font-normal" style={{ color: COLORS.purpleRush }}>System</span>
          </SectionTitle>

          {/* Logo usage table */}
          <div
            className="rounded-2xl overflow-hidden mb-12"
            style={{ border: `1px solid ${COLORS.borderLight}`, background: COLORS.white }}
          >
            {[
              { bg: "Dark / Black sections",  use: "White logo",              file: "GetEducated.AI-Logo-White@8x.png" },
              { bg: "Light / Cream sections", use: "Black logo",              file: "GetEducated.AI-Logo-Black@8x.png" },
              { bg: "Bright Sun key color",   use: "Bright Sun logo",         file: "GetEducated.AI-Logo-BrightSun@8x.png" },
              { bg: "Purple Rush key color",  use: "Purple Rush logo",        file: "GetEducated.AI-Logo-PurpleRush@8x.png" },
              { bg: "Naval Point key color",  use: "Naval Point logo",        file: "GetEducated.AI-Logo-NavalPoint@8x.png" },
              { bg: "Teal key color",         use: "Puerto Rico Teal logo",   file: "GetEducated.AI-Logo-PuertoRicoTeal@8x.png" },
              { bg: "Magenta key color",      use: "Magenta Flirt logo",      file: "GetEducated.AI-Logo-MagentaFlirt@8x.png" },
              { bg: "Radical Red key color",  use: "Radical Red logo",        file: "GetEducated.AI-Logo-RadicalRed@8x.png" },
            ].map((row, i) => (
              <div
                key={row.file}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 px-6 py-4"
                style={{ borderTop: i > 0 ? `1px solid ${COLORS.borderLight}` : "none" }}
              >
                <span className="text-sm font-display font-semibold w-48 shrink-0" style={{ color: COLORS.dark2 }}>{row.bg}</span>
                <span className="text-sm font-display w-44 shrink-0" style={{ color: COLORS.muted }}>{row.use}</span>
                <span className="text-xs font-mono" style={{ color: COLORS.purpleRush }}>{row.file}</span>
              </div>
            ))}
          </div>

          {/* Logomark note */}
          <div
            className="rounded-2xl p-6"
            style={{ background: COLORS.white, border: `1px solid ${COLORS.borderLight}` }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3 font-display" style={{ color: COLORS.muted }}>
              Logomark Variants
            </p>
            <p className="text-sm font-display" style={{ color: COLORS.dark2 }}>
              Use <strong>Logomark</strong> (icon only, no wordmark) for favicons, tight spaces, profile images, and watermarks. All color variants available: White, Black, BrightSun, PurpleRush, NavalPoint, PuertoRicoTeal, MagentaFlirt, RadicalRed.
            </p>
            <p className="text-xs font-mono mt-3" style={{ color: COLORS.muted }}>
              Base path: /assets/geteducated-logos/PNG/
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════ 06 — SOCIAL MEDIA ══════════════════════ */}
      <section id="social" className="py-24 md:py-32 px-6 overflow-hidden" style={{ background: COLORS.black }}>
        {/* Orb */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            bottom: "-150px", left: "-150px",
            background: `radial-gradient(circle, rgba(158,0,126,0.25) 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Eyebrow>06 — Social Media</Eyebrow>
          <SectionTitle>
            Social{" "}
            <span className="font-serif italic font-normal gradient-text">Media</span>
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
                className="absolute top-[-20px] right-[-20px] w-40 h-40 rounded-full"
                style={{ background: `radial-gradient(circle, rgba(255,191,63,0.5) 0%, transparent 70%)`, filter: "blur(30px)" }}
              />
              <div className="relative z-10">
                <p className="text-lg font-bold font-display text-white leading-snug">
                  Stop consuming.
                  <br />
                  <span className="font-serif italic font-normal" style={{ color: COLORS.brightSun }}>
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
                <span className="font-serif italic font-normal underline decoration-white/40 underline-offset-4">
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
            <span className="font-serif italic font-normal" style={{ color: COLORS.purpleRush }}>Copy</span>
          </SectionTitle>

          {/* Do / Don't */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(70,193,164,0.08)", border: "1px solid rgba(70,193,164,0.25)" }}
            >
              <p className="flex items-center gap-2 font-display font-bold text-sm uppercase tracking-widest mb-4" style={{ color: COLORS.puertoRico }}>
                ✓ Do
              </p>
              <ul className="space-y-3">
                {[
                  '"Learn. Build. Lead."',
                  '"Build a profitable business in 30 days"',
                  '"No credit card required"',
                  '"Stop consuming. Start building."',
                  '"You don\'t need another course. You need infrastructure."',
                ].map((item) => (
                  <li key={item} className="text-sm font-display flex items-start gap-2" style={{ color: COLORS.dark2 }}>
                    <span style={{ color: COLORS.puertoRico }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(244,54,76,0.06)", border: "1px solid rgba(244,54,76,0.2)" }}
            >
              <p className="flex items-center gap-2 font-display font-bold text-sm uppercase tracking-widest mb-4" style={{ color: COLORS.radicalRed }}>
                ✕ Don&apos;t
              </p>
              <ul className="space-y-3">
                {[
                  '"Amazing opportunity!"',
                  '"Life-changing community"',
                  '"Join our journey"',
                  '"We\'re so excited to..."',
                  '"Empowering creators everywhere"',
                ].map((item) => (
                  <li key={item} className="text-sm font-display flex items-start gap-2" style={{ color: COLORS.dark2 }}>
                    <span style={{ color: COLORS.radicalRed }}>✕</span>
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
            className="rounded-2xl p-6 md:p-8 mb-10"
            style={{ background: COLORS.white, border: `1px solid ${COLORS.borderLight}` }}
          >
            <p className="font-mono text-base md:text-lg mb-4" style={{ color: COLORS.dark2 }}>
              [Provocative truth] + [Specific result]
            </p>
            <div style={{ borderTop: `1px solid ${COLORS.borderLight}` }} className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest mb-2 font-display" style={{ color: COLORS.muted }}>Example</p>
              <p className="text-xl font-display font-bold" style={{ color: COLORS.dark2 }}>
                &quot;You don&apos;t need another course. You need{" "}
                <span className="font-serif italic" style={{ color: COLORS.purpleRush }}>infrastructure.</span>
                &quot;
              </p>
            </div>
          </div>

          {/* Tone pillars */}
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 font-display" style={{ color: COLORS.muted }}>
            Tone Pillars
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { word: "Direct",      desc: "Say it once, say it clearly. No padding." },
              { word: "Specific",    desc: "Results, numbers, timelines — not vibes." },
              { word: "Provocative", desc: "Challenge the status quo. Make them think." },
              { word: "Warm",        desc: "Human, not corporate. Founder voice, always." },
            ].map((p, i) => {
              const accents = [COLORS.purpleRush, COLORS.brightSun, COLORS.magentaFlirt, COLORS.puertoRico];
              return (
                <div
                  key={p.word}
                  className="rounded-2xl p-5"
                  style={{ background: COLORS.white, border: `1px solid ${COLORS.borderLight}` }}
                >
                  <div className="w-2 h-2 rounded-full mb-3" style={{ background: accents[i] }} />
                  <p className="font-display font-bold mb-1" style={{ color: COLORS.dark2 }}>{p.word}</p>
                  <p className="text-xs font-display" style={{ color: COLORS.muted }}>{p.desc}</p>
                </div>
              );
            })}
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

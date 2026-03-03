"use client";

import { useState, useEffect } from "react";

/* ------------------------------------------------------------------ */
/*  Sticky direction label                                            */
/* ------------------------------------------------------------------ */
function StickyLabel({ label, bg }: { label: string; bg: string }) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: bg,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "14px 0",
        textAlign: "center",
        fontFamily: "var(--font-body), Inter, sans-serif",
        fontSize: 13,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        color: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(20px)",
      }}
    >
      {label}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared copy                                                       */
/* ------------------------------------------------------------------ */
const HERO_HEADLINE_PRE = "You don\u2019t need another course.";
const HERO_ACCENT = "You need infrastructure.";
const HERO_SUB =
  "The community for AI creators who are done watching from the sidelines. Learn real skills. Build real income. Lead the future.";

const COMPARE_LEFT_TITLE = "Traditional AI Education";
const COMPARE_LEFT = [
  "Static courses that become outdated",
  "Learn alone, implement alone",
  "AI tools without context",
  "Consume endlessly, build nothing",
  "Hustle until you burn out",
];
const COMPARE_RIGHT_TITLE = "The GetEducated.ai Ecosystem";
const COMPARE_RIGHT = [
  "Living curriculum that evolves with AI",
  "Build alongside vetted creators & founders",
  "Strategy + systems + community",
  "Ship within your first 30 days",
  "Build while prioritizing your wellbeing",
];

const PLAN_NAME = "Architects";
const PLAN_PRICE = "$159";
const PLAN_PERIOD = "/month";
const PLAN_DESC = "For builders ready to lead and scale.";
const PLAN_FEATURES = [
  "Everything in Members",
  "1-on-1 mentorship sessions",
  "Priority collaboration matching",
  "Advanced automation templates",
  "Exclusive mastermind access",
  "Early access to all new tools",
];

/* ================================================================== */
/*  DIRECTION 1 — Obsidian Monochrome                                 */
/* ================================================================== */
function Direction1() {
  const bg = "#0D0D0D";
  const cardBg = "#1A1A1A";
  const border = "rgba(255,255,255,0.12)";
  const white = "#FFFFFF";
  const gray = "#999";
  const mutedGray = "#666";

  return (
    <section style={{ background: bg, minHeight: "100vh", position: "relative" }}>
      <StickyLabel
        label="Direction 1 — Obsidian Monochrome. Clean, luxury, editorial."
        bg="rgba(13,13,13,0.85)"
      />

      {/* Hero */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "100px 32px 60px" }}>
        <h1
          style={{
            fontFamily: "var(--font-display), Plus Jakarta Sans, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 1.05,
            color: white,
            margin: 0,
          }}
        >
          {HERO_HEADLINE_PRE}
          <br />
          <span
            style={{
              fontFamily: "var(--font-serif), Playfair Display, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(40px, 6vw, 72px)",
            }}
          >
            {HERO_ACCENT}
          </span>
        </h1>
        <p
          style={{
            color: gray,
            fontSize: 18,
            lineHeight: 1.7,
            maxWidth: 560,
            marginTop: 28,
            fontFamily: "var(--font-body), Inter, sans-serif",
          }}
        >
          {HERO_SUB}
        </p>
        <div style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <button
            style={{
              background: white,
              color: bg,
              border: "none",
              padding: "16px 36px",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 8,
              cursor: "pointer",
              fontFamily: "var(--font-display), sans-serif",
            }}
          >
            Join Community
          </button>
          <button
            style={{
              background: "transparent",
              color: white,
              border: `1px solid ${border}`,
              padding: "16px 36px",
              fontSize: 15,
              fontWeight: 600,
              borderRadius: 8,
              cursor: "pointer",
              fontFamily: "var(--font-display), sans-serif",
            }}
          >
            Watch Free Masterclass
          </button>
        </div>
      </div>

      {/* Comparison */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 32px 60px" }}>
        <h2
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 42px)",
            color: white,
            marginBottom: 12,
          }}
        >
          How GetEducated.ai is{" "}
          <span
            style={{
              fontFamily: "var(--font-serif), serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            different
          </span>
        </h2>
        <p style={{ color: mutedGray, fontSize: 16, marginBottom: 40, fontFamily: "var(--font-body), sans-serif" }}>
          The traditional way of learning and building businesses is outdated. We&apos;re building what comes next.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Left */}
          <div
            style={{
              background: cardBg,
              border: `1px solid ${border}`,
              borderRadius: 16,
              padding: 32,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: gray,
                marginBottom: 24,
              }}
            >
              {COMPARE_LEFT_TITLE}
            </h3>
            {COMPARE_LEFT.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  marginBottom: 18,
                  color: mutedGray,
                  fontSize: 15,
                  fontFamily: "var(--font-body), sans-serif",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "#555", fontSize: 18, flexShrink: 0, marginTop: 1 }}>✕</span>
                {item}
              </div>
            ))}
          </div>
          {/* Right */}
          <div
            style={{
              background: cardBg,
              border: `1px solid ${border}`,
              borderRadius: 16,
              padding: 32,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: white,
                marginBottom: 24,
              }}
            >
              {COMPARE_RIGHT_TITLE}
            </h3>
            {COMPARE_RIGHT.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  marginBottom: 18,
                  color: "#ccc",
                  fontSize: 15,
                  fontFamily: "var(--font-body), sans-serif",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 13,
                    color: white,
                    marginTop: 1,
                  }}
                >
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Card */}
      <div style={{ maxWidth: 420, margin: "0 auto", padding: "40px 32px 100px" }}>
        <div
          style={{
            background: cardBg,
            border: `1px solid ${border}`,
            borderRadius: 20,
            padding: "40px 32px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              border: `1px solid ${border}`,
              borderRadius: 100,
              fontSize: 12,
              color: gray,
              fontFamily: "var(--font-body), sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 20,
            }}
          >
            Most Popular
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 800,
              fontSize: 28,
              color: white,
              margin: "0 0 8px",
            }}
          >
            {PLAN_NAME}
          </h3>
          <p style={{ color: mutedGray, fontSize: 14, margin: "0 0 24px", fontFamily: "var(--font-body), sans-serif" }}>
            {PLAN_DESC}
          </p>
          <div style={{ marginBottom: 28 }}>
            <span
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 800,
                fontSize: 48,
                color: white,
              }}
            >
              {PLAN_PRICE}
            </span>
            <span style={{ color: mutedGray, fontSize: 16, fontFamily: "var(--font-body), sans-serif" }}>
              {PLAN_PERIOD}
            </span>
          </div>
          <div style={{ textAlign: "left", marginBottom: 32 }}>
            {PLAN_FEATURES.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 14,
                  color: "#bbb",
                  fontSize: 14,
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                <span style={{ color: white, fontSize: 14 }}>✓</span>
                {f}
              </div>
            ))}
          </div>
          <button
            style={{
              width: "100%",
              background: white,
              color: bg,
              border: "none",
              padding: "16px 0",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 10,
              cursor: "pointer",
              fontFamily: "var(--font-display), sans-serif",
            }}
          >
            Join as Architect
          </button>
          <p style={{ color: mutedGray, fontSize: 12, marginTop: 16, fontFamily: "var(--font-body), sans-serif" }}>
            7-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>

      {/* Sample background section */}
      <div
        style={{
          background: "#111",
          padding: "80px 32px",
          textAlign: "center",
          borderTop: `1px solid ${border}`,
        }}
      >
        <p
          style={{
            color: mutedGray,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontFamily: "var(--font-body), sans-serif",
            marginBottom: 16,
          }}
        >
          Sample Section Background
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: white,
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.1,
          }}
        >
          A platform designed for{" "}
          <span style={{ fontFamily: "var(--font-serif), serif", fontStyle: "italic", fontWeight: 400 }}>
            collective growth.
          </span>
        </h2>
        <p style={{ color: mutedGray, fontSize: 16, maxWidth: 480, margin: "20px auto 0", fontFamily: "var(--font-body), sans-serif", lineHeight: 1.6 }}>
          Six pillars. One ecosystem. Built for people who want to stop consuming and start creating.
        </p>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  DIRECTION 2 — Dark Teal Editorial (RECOMMENDED)                   */
/* ================================================================== */
function Direction2() {
  const dark = "#0D0D0D";
  const cream = "#F5F2EE";
  const teal = "#0E7C86";
  const white = "#FFFFFF";
  const ink = "#1A1A1A";
  const muted = "#6B6B6B";
  const redX = "#C0392B";

  return (
    <section style={{ position: "relative" }}>
      <StickyLabel
        label="Direction 2 — Dark Teal Editorial. Recommended. Sophisticated meets distinctive."
        bg="rgba(13,13,13,0.85)"
      />

      {/* Hero — Dark */}
      <div style={{ background: dark, padding: "100px 32px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-display), Plus Jakarta Sans, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              color: white,
              margin: 0,
            }}
          >
            {HERO_HEADLINE_PRE}
            <br />
            <span
              style={{
                fontFamily: "var(--font-serif), Playfair Display, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(40px, 6vw, 72px)",
              }}
            >
              {HERO_ACCENT}
            </span>
          </h1>
          <p
            style={{
              color: "#999",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 560,
              marginTop: 28,
              fontFamily: "var(--font-body), Inter, sans-serif",
            }}
          >
            {HERO_SUB}
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              style={{
                background: teal,
                color: white,
                border: "none",
                padding: "16px 36px",
                fontSize: 15,
                fontWeight: 700,
                borderRadius: 8,
                cursor: "pointer",
                fontFamily: "var(--font-display), sans-serif",
              }}
            >
              Join Community
            </button>
            <button
              style={{
                background: "transparent",
                color: white,
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "16px 36px",
                fontSize: 15,
                fontWeight: 600,
                borderRadius: 8,
                cursor: "pointer",
                fontFamily: "var(--font-display), sans-serif",
              }}
            >
              Watch Free Masterclass
            </button>
          </div>
        </div>
      </div>

      {/* Comparison — Cream */}
      <div style={{ background: cream, padding: "80px 32px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 42px)",
              color: ink,
              marginBottom: 12,
            }}
          >
            How GetEducated.ai is{" "}
            <span
              style={{
                fontFamily: "var(--font-serif), serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              different
            </span>
          </h2>
          <p style={{ color: muted, fontSize: 16, marginBottom: 40, fontFamily: "var(--font-body), sans-serif" }}>
            The traditional way of learning and building businesses is outdated. We&apos;re building what comes next.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Left */}
            <div
              style={{
                background: white,
                borderRadius: 16,
                padding: 32,
                boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: muted,
                  marginBottom: 24,
                }}
              >
                {COMPARE_LEFT_TITLE}
              </h3>
              {COMPARE_LEFT.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 18,
                    color: muted,
                    fontSize: 15,
                    fontFamily: "var(--font-body), sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#FDECEB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 12,
                      color: redX,
                      fontWeight: 700,
                      marginTop: 1,
                    }}
                  >
                    ✕
                  </span>
                  {item}
                </div>
              ))}
            </div>
            {/* Right */}
            <div
              style={{
                background: white,
                borderRadius: 16,
                padding: 32,
                boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: ink,
                  marginBottom: 24,
                }}
              >
                {COMPARE_RIGHT_TITLE}
              </h3>
              {COMPARE_RIGHT.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 18,
                    color: ink,
                    fontSize: 15,
                    fontFamily: "var(--font-body), sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: teal,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 13,
                      color: white,
                      marginTop: 1,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Card — Dark with Teal */}
      <div style={{ background: dark, padding: "80px 32px 100px" }}>
        <div style={{ maxWidth: 420, margin: "0 auto" }}>
          <div
            style={{
              background: "#141414",
              border: `1px solid ${teal}`,
              borderRadius: 20,
              padding: "40px 32px",
              textAlign: "center",
              boxShadow: `0 0 60px rgba(14,124,134,0.15), 0 0 120px rgba(14,124,134,0.06)`,
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "6px 16px",
                background: teal,
                borderRadius: 100,
                fontSize: 12,
                color: white,
                fontFamily: "var(--font-body), sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              Most Popular
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 800,
                fontSize: 28,
                color: white,
                margin: "0 0 8px",
              }}
            >
              {PLAN_NAME}
            </h3>
            <p
              style={{
                color: "#888",
                fontSize: 14,
                margin: "0 0 24px",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              {PLAN_DESC}
            </p>
            <div style={{ marginBottom: 28 }}>
              <span
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 800,
                  fontSize: 48,
                  color: white,
                }}
              >
                {PLAN_PRICE}
              </span>
              <span style={{ color: "#888", fontSize: 16, fontFamily: "var(--font-body), sans-serif" }}>
                {PLAN_PERIOD}
              </span>
            </div>
            <div style={{ textAlign: "left", marginBottom: 32 }}>
              {PLAN_FEATURES.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 14,
                    color: "#ccc",
                    fontSize: 14,
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  <span style={{ color: teal, fontSize: 15, fontWeight: 700 }}>✓</span>
                  {f}
                </div>
              ))}
            </div>
            <button
              style={{
                width: "100%",
                background: teal,
                color: white,
                border: "none",
                padding: "16px 0",
                fontSize: 15,
                fontWeight: 700,
                borderRadius: 10,
                cursor: "pointer",
                fontFamily: "var(--font-display), sans-serif",
              }}
            >
              Join as Architect
            </button>
            <p
              style={{
                color: "#666",
                fontSize: 12,
                marginTop: 16,
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              7-day money-back guarantee. No questions asked.
            </p>
          </div>
        </div>
      </div>

      {/* Sample section — Cream */}
      <div style={{ background: cream, padding: "80px 32px", textAlign: "center" }}>
        <p
          style={{
            color: muted,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontFamily: "var(--font-body), sans-serif",
            marginBottom: 16,
          }}
        >
          Sample Section Background
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: ink,
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.1,
          }}
        >
          A platform designed for{" "}
          <span style={{ fontFamily: "var(--font-serif), serif", fontStyle: "italic", fontWeight: 400 }}>
            collective growth.
          </span>
        </h2>
        <p
          style={{
            color: muted,
            fontSize: 16,
            maxWidth: 480,
            margin: "20px auto 0",
            fontFamily: "var(--font-body), sans-serif",
            lineHeight: 1.6,
          }}
        >
          Six pillars. One ecosystem. Built for people who want to stop consuming and start creating.
        </p>
      </div>

      {/* Extra dark section to show dark/cream alternation */}
      <div style={{ background: dark, padding: "80px 32px", textAlign: "center" }}>
        <p
          style={{
            color: "#555",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontFamily: "var(--font-body), sans-serif",
            marginBottom: 16,
          }}
        >
          Dark Section Sample
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: white,
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.1,
          }}
        >
          Your journey starts{" "}
          <span style={{ fontFamily: "var(--font-serif), serif", fontStyle: "italic", fontWeight: 400, color: teal }}>
            here.
          </span>
        </h2>
        <p
          style={{
            color: "#888",
            fontSize: 16,
            maxWidth: 480,
            margin: "20px auto 0",
            fontFamily: "var(--font-body), sans-serif",
            lineHeight: 1.6,
          }}
        >
          Three steps. No BS. We stripped out everything that doesn&apos;t lead to results.
        </p>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  DIRECTION 3 — Midnight Terracotta                                 */
/* ================================================================== */
function Direction3() {
  const navy = "#0A0F1E";
  const sand = "#F5EFE6";
  const terracotta = "#C94F2C";
  const white = "#FFFFFF";
  const ink = "#1A1A1A";
  const muted = "#7A7060";
  const navyLight = "#141B30";

  return (
    <section style={{ position: "relative" }}>
      <StickyLabel
        label="Direction 3 — Midnight Terracotta. Bold, warm, editorial magazine."
        bg="rgba(10,15,30,0.85)"
      />

      {/* Hero — Navy */}
      <div style={{ background: navy, padding: "100px 32px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-display), Plus Jakarta Sans, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              color: white,
              margin: 0,
            }}
          >
            {HERO_HEADLINE_PRE}
            <br />
            <span
              style={{
                fontFamily: "var(--font-serif), Playfair Display, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(40px, 6vw, 72px)",
                color: terracotta,
              }}
            >
              {HERO_ACCENT}
            </span>
          </h1>
          <p
            style={{
              color: "#8A8A9A",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 560,
              marginTop: 28,
              fontFamily: "var(--font-body), Inter, sans-serif",
            }}
          >
            {HERO_SUB}
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              style={{
                background: terracotta,
                color: white,
                border: "none",
                padding: "16px 36px",
                fontSize: 15,
                fontWeight: 700,
                borderRadius: 8,
                cursor: "pointer",
                fontFamily: "var(--font-display), sans-serif",
              }}
            >
              Join Community
            </button>
            <button
              style={{
                background: "transparent",
                color: white,
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "16px 36px",
                fontSize: 15,
                fontWeight: 600,
                borderRadius: 8,
                cursor: "pointer",
                fontFamily: "var(--font-display), sans-serif",
              }}
            >
              Watch Free Masterclass
            </button>
          </div>
        </div>
      </div>

      {/* Comparison — Sand */}
      <div style={{ background: sand, padding: "80px 32px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 42px)",
              color: ink,
              marginBottom: 12,
            }}
          >
            How GetEducated.ai is{" "}
            <span
              style={{
                fontFamily: "var(--font-serif), serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: terracotta,
              }}
            >
              different
            </span>
          </h2>
          <p style={{ color: muted, fontSize: 16, marginBottom: 40, fontFamily: "var(--font-body), sans-serif" }}>
            The traditional way of learning and building businesses is outdated. We&apos;re building what comes next.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Left */}
            <div
              style={{
                background: white,
                borderRadius: 16,
                padding: 32,
                boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: muted,
                  marginBottom: 24,
                }}
              >
                {COMPARE_LEFT_TITLE}
              </h3>
              {COMPARE_LEFT.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 18,
                    color: muted,
                    fontSize: 15,
                    fontFamily: "var(--font-body), sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#FDECEB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 12,
                      color: "#C0392B",
                      fontWeight: 700,
                      marginTop: 1,
                    }}
                  >
                    ✕
                  </span>
                  {item}
                </div>
              ))}
            </div>
            {/* Right */}
            <div
              style={{
                background: white,
                borderRadius: 16,
                padding: 32,
                boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: ink,
                  marginBottom: 24,
                }}
              >
                {COMPARE_RIGHT_TITLE}
              </h3>
              {COMPARE_RIGHT.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 18,
                    color: ink,
                    fontSize: 15,
                    fontFamily: "var(--font-body), sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: terracotta,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 13,
                      color: white,
                      marginTop: 1,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Card — Navy with Terracotta */}
      <div style={{ background: navy, padding: "80px 32px 100px" }}>
        <div style={{ maxWidth: 420, margin: "0 auto" }}>
          <div
            style={{
              background: navyLight,
              border: `1px solid ${terracotta}`,
              borderRadius: 20,
              padding: "40px 32px",
              textAlign: "center",
              boxShadow: `0 0 60px rgba(201,79,44,0.12), 0 0 120px rgba(201,79,44,0.05)`,
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "6px 16px",
                background: terracotta,
                borderRadius: 100,
                fontSize: 12,
                color: white,
                fontFamily: "var(--font-body), sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              Most Popular
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 800,
                fontSize: 28,
                color: white,
                margin: "0 0 8px",
              }}
            >
              {PLAN_NAME}
            </h3>
            <p
              style={{
                color: "#8A8A9A",
                fontSize: 14,
                margin: "0 0 24px",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              {PLAN_DESC}
            </p>
            <div style={{ marginBottom: 28 }}>
              <span
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 800,
                  fontSize: 48,
                  color: white,
                }}
              >
                {PLAN_PRICE}
              </span>
              <span style={{ color: "#8A8A9A", fontSize: 16, fontFamily: "var(--font-body), sans-serif" }}>
                {PLAN_PERIOD}
              </span>
            </div>
            <div style={{ textAlign: "left", marginBottom: 32 }}>
              {PLAN_FEATURES.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 14,
                    color: "#ccc",
                    fontSize: 14,
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  <span style={{ color: terracotta, fontSize: 15, fontWeight: 700 }}>✓</span>
                  {f}
                </div>
              ))}
            </div>
            <button
              style={{
                width: "100%",
                background: terracotta,
                color: white,
                border: "none",
                padding: "16px 0",
                fontSize: 15,
                fontWeight: 700,
                borderRadius: 10,
                cursor: "pointer",
                fontFamily: "var(--font-display), sans-serif",
              }}
            >
              Join as Architect
            </button>
            <p
              style={{
                color: "#666",
                fontSize: 12,
                marginTop: 16,
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              7-day money-back guarantee. No questions asked.
            </p>
          </div>
        </div>
      </div>

      {/* Sample section — Sand */}
      <div style={{ background: sand, padding: "80px 32px", textAlign: "center" }}>
        <p
          style={{
            color: muted,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontFamily: "var(--font-body), sans-serif",
            marginBottom: 16,
          }}
        >
          Sample Section Background
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: ink,
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.1,
          }}
        >
          A platform designed for{" "}
          <span style={{ fontFamily: "var(--font-serif), serif", fontStyle: "italic", fontWeight: 400, color: terracotta }}>
            collective growth.
          </span>
        </h2>
        <p
          style={{
            color: muted,
            fontSize: 16,
            maxWidth: 480,
            margin: "20px auto 0",
            fontFamily: "var(--font-body), sans-serif",
            lineHeight: 1.6,
          }}
        >
          Six pillars. One ecosystem. Built for people who want to stop consuming and start creating.
        </p>
      </div>

      {/* Extra navy section */}
      <div style={{ background: navy, padding: "80px 32px", textAlign: "center" }}>
        <p
          style={{
            color: "#555",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontFamily: "var(--font-body), sans-serif",
            marginBottom: 16,
          }}
        >
          Dark Section Sample
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: white,
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.1,
          }}
        >
          Your journey starts{" "}
          <span style={{ fontFamily: "var(--font-serif), serif", fontStyle: "italic", fontWeight: 400, color: terracotta }}>
            here.
          </span>
        </h2>
        <p
          style={{
            color: "#8A8A9A",
            fontSize: 16,
            maxWidth: 480,
            margin: "20px auto 0",
            fontFamily: "var(--font-body), sans-serif",
            lineHeight: 1.6,
          }}
        >
          Three steps. No BS. We stripped out everything that doesn&apos;t lead to results.
        </p>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  PAGE                                                              */
/* ================================================================== */
export default function BrandPreview() {
  const [activeDirection, setActiveDirection] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-direction]");
      let current: number | null = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80) {
          current = Number(section.getAttribute("data-direction"));
        }
      });
      setActiveDirection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ background: "#000" }}>
      {/* Top nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "center",
          gap: 8,
          padding: "12px 16px",
        }}
      >
        {[1, 2, 3].map((n) => (
          <a
            key={n}
            href={`#direction-${n}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(`direction-${n}`)?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              padding: "8px 20px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "var(--font-display), sans-serif",
              textDecoration: "none",
              transition: "all 0.2s",
              color: activeDirection === n ? "#fff" : "rgba(255,255,255,0.5)",
              background:
                activeDirection === n
                  ? n === 1
                    ? "#333"
                    : n === 2
                    ? "#0E7C86"
                    : "#C94F2C"
                  : "rgba(255,255,255,0.06)",
              border:
                n === 2 && activeDirection !== n
                  ? "1px solid rgba(14,124,134,0.4)"
                  : "1px solid transparent",
            }}
          >
            {n === 1 ? "Obsidian" : n === 2 ? "Dark Teal ★" : "Terracotta"}
          </a>
        ))}
      </nav>

      {/* Intro */}
      <div
        style={{
          padding: "100px 32px 60px",
          textAlign: "center",
          background: "#0D0D0D",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 40px)",
            color: "#fff",
            margin: "0 0 12px",
          }}
        >
          GetEducated.ai — Brand Direction Preview
        </h1>
        <p
          style={{
            color: "#888",
            fontSize: 16,
            fontFamily: "var(--font-body), sans-serif",
            maxWidth: 500,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Scroll through all three directions. Each section shows the full vibe — hero, comparison, pricing, and section
          backgrounds.
        </p>
      </div>

      <div id="direction-1" data-direction={1}>
        <Direction1 />
      </div>

      {/* Divider */}
      <div
        style={{
          height: 4,
          background: "linear-gradient(90deg, transparent, #0E7C86, transparent)",
        }}
      />

      <div id="direction-2" data-direction={2}>
        <Direction2 />
      </div>

      {/* Divider */}
      <div
        style={{
          height: 4,
          background: "linear-gradient(90deg, transparent, #C94F2C, transparent)",
        }}
      />

      <div id="direction-3" data-direction={3}>
        <Direction3 />
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "60px 32px",
          textAlign: "center",
          background: "#0D0D0D",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p
          style={{
            color: "#555",
            fontSize: 14,
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          Pick your favorite direction and let&apos;s build.
        </p>
      </div>
    </main>
  );
}

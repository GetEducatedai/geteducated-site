"use client";

const items = [
  "Learn AI",
  "Build Income",
  "Lead the Future",
  "Join 2,000+ Creators",
  "AI-Powered Business",
  "Freedom & Impact",
  "Community First",
  "Real Skills",
];

const Row = ({ direction }: { direction: "left" | "right" }) => {
  const text = items.map((item) => `\u2726 ${item}  `).join("");
  const doubled = text + text;

  return (
    <div className="overflow-hidden whitespace-nowrap py-3">
      <div className={direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}>
        <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium">
          {doubled}
        </span>
      </div>
    </div>
  );
};

export default function TestimonialMarquee() {
  return (
    <section
      className="bg-dark-bg py-4"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <Row direction="left" />
      <Row direction="right" />
    </section>
  );
}

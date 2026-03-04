"use client";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 2 + 1, // 1-3px
  left: `${Math.random() * 100}%`,
  top: `${60 + Math.random() * 40}%`,
  duration: `${Math.random() * 12 + 8}s`, // 8-20s
  delay: `${Math.random() * 10}s`,
  color: i % 3 === 0 ? "rgba(255,255,255,0.6)" : "rgba(217,119,6,0.5)",
}));

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            backgroundColor: p.color,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

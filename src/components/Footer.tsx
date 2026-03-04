"use client";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Masterclass", href: "/masterclass" },
  { label: "Community", href: "/#community" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#08080E] pt-16 pb-8 px-6 overflow-hidden">
      {/* Subtle diagonal light beam */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 60%, rgba(255,255,255,0.02) 70%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/images/logo-white.png"
              alt="GetEducated.ai"
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-white/40 hover:text-white transition-colors font-display"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-display">
            &copy; {new Date().getFullYear()} GetEducated.ai. All rights
            reserved.
          </p>
          <a
            href="mailto:info@geteducated.ai"
            className="text-xs text-white/25 hover:text-white/50 transition-colors font-display"
          >
            info@geteducated.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

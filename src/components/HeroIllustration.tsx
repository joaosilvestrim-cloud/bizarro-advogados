"use client";

export default function HeroIllustration() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1 }}>

      {/* ── Floating § symbols ─────────────────────── */}
      {[
        { top: "12%", left: "8%", size: "4rem", delay: "0s", dur: "7s" },
        { top: "70%", left: "5%", size: "2rem", delay: "2s", dur: "9s" },
        { top: "25%", right: "6%", size: "2.5rem", delay: "1s", dur: "8s" },
        { top: "80%", right: "10%", size: "1.75rem", delay: "3s", dur: "6s" },
        { top: "50%", left: "15%", size: "1.5rem", delay: "4s", dur: "11s" },
      ].map((p, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            position: "absolute",
            top: p.top,
            left: (p as any).left,
            right: (p as any).right,
            fontSize: p.size,
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            color: "#C9A84C",
            opacity: 0.07,
            animation: `floatSymbol ${p.dur} ${p.delay} ease-in-out infinite`,
            userSelect: "none",
          }}
        >
          §
        </span>
      ))}

      {/* ── Main balance scale SVG (right-center) ──── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          right: "3%",
          transform: "translateY(-50%)",
          width: "min(440px, 38vw)",
          opacity: 0.13,
          animation: "float 9s ease-in-out infinite",
        }}
      >
        <svg
          viewBox="0 0 320 420"
          fill="none"
          stroke="#C9A84C"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "100%", height: "auto" }}
        >
          {/* Outer decorative circle */}
          <circle
            cx="160" cy="180" r="148"
            strokeWidth="0.5"
            strokeDasharray="4 6"
            style={{ animation: "orbit 60s linear infinite", transformOrigin: "160px 180px" }}
          />
          <circle cx="160" cy="180" r="138" strokeWidth="0.3" opacity="0.5" />

          {/* Pillar base */}
          <rect x="140" y="370" width="40" height="6" rx="3" strokeWidth="1" fill="#C9A84C" fillOpacity="0.15" />
          <rect x="148" y="363" width="24" height="8" rx="2" strokeWidth="0.8" />

          {/* Vertical pole */}
          <line x1="160" y1="362" x2="160" y2="100" strokeWidth="1.2" />

          {/* Top orb */}
          <circle cx="160" cy="94" r="7" strokeWidth="1" fill="#C9A84C" fillOpacity="0.1" />
          <circle cx="160" cy="94" r="3" strokeWidth="0" fill="#C9A84C" fillOpacity="0.5" />

          {/* Horizontal beam — very slight animated tilt */}
          <g style={{ transformOrigin: "160px 148px", animation: "balance 8s ease-in-out infinite" }}>
            <line x1="44" y1="148" x2="276" y2="148" strokeWidth="1.5" />

            {/* Beam end circles */}
            <circle cx="44"  cy="148" r="4" strokeWidth="1" fill="#C9A84C" fillOpacity="0.12" />
            <circle cx="276" cy="148" r="4" strokeWidth="1" fill="#C9A84C" fillOpacity="0.12" />

            {/* Left pan suspension */}
            <line x1="44" y1="152" x2="28"  y2="234" strokeWidth="0.8" />
            <line x1="44" y1="152" x2="60"  y2="234" strokeWidth="0.8" />

            {/* Left pan */}
            <path d="M22 236 Q44 252 66 236" strokeWidth="1.4" />
            <path d="M22 236 Q44 240 66 236" strokeWidth="0.5" opacity="0.4" />

            {/* Right pan suspension */}
            <line x1="276" y1="152" x2="260" y2="234" strokeWidth="0.8" />
            <line x1="276" y1="152" x2="292" y2="234" strokeWidth="0.8" />

            {/* Right pan */}
            <path d="M254 236 Q276 252 298 236" strokeWidth="1.4" />
            <path d="M254 236 Q276 240 298 236" strokeWidth="0.5" opacity="0.4" />
          </g>

          {/* Decorative inner ring ticks */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * 2 * Math.PI;
            const r1 = 128, r2 = 134;
            const x1 = 160 + r1 * Math.cos(angle);
            const y1 = 180 + r1 * Math.sin(angle);
            const x2 = 160 + r2 * Math.cos(angle);
            const y2 = 180 + r2 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.8" opacity="0.6" />;
          })}

          {/* Central star/asterisk at beam pivot */}
          {[0, 45, 90, 135].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const r = 10;
            return (
              <line key={deg}
                x1={160 - r * Math.cos(rad)} y1={148 - r * Math.sin(rad)}
                x2={160 + r * Math.cos(rad)} y2={148 + r * Math.sin(rad)}
                strokeWidth="0.9" opacity="0.8"
              />
            );
          })}
        </svg>
      </div>

      {/* ── Thin horizontal rules (left) ─────────────── */}
      <div aria-hidden style={{ position: "absolute", left: 0, top: "35%", display: "flex", flexDirection: "column", gap: "10px" }}>
        {[100, 60, 80, 40].map((w, i) => (
          <div key={i} style={{ height: "1px", width: `${w}px`, background: "linear-gradient(90deg,rgba(201,168,76,0.4),transparent)", animationDelay: `${i * 0.3}s` }} />
        ))}
      </div>

      {/* ── Floating dots constellation ──────────────── */}
      {[
        { top: "18%", left: "48%", r: 2 },
        { top: "22%", left: "53%", r: 1.5 },
        { top: "15%", left: "56%", r: 1 },
        { top: "82%", left: "42%", r: 2 },
        { top: "78%", left: "47%", r: 1.5 },
        { top: "85%", left: "44%", r: 1 },
      ].map((d, i) => (
        <div key={i} aria-hidden style={{
          position: "absolute", top: d.top, left: d.left,
          width: `${d.r * 2}px`, height: `${d.r * 2}px`, borderRadius: "50%",
          background: "#C9A84C", opacity: 0.2,
          animation: `glow ${3 + i * 0.5}s ${i * 0.4}s ease-in-out infinite`,
        }} />
      ))}

      {/* ── Corner accent lines ───────────────────────── */}
      <svg aria-hidden viewBox="0 0 120 120" style={{ position: "absolute", bottom: "6%", left: "4%", width: "80px", opacity: 0.12 }} fill="none" stroke="#C9A84C" strokeWidth="0.8">
        <path d="M0 120 L0 0 L120 0" />
        <path d="M12 120 L12 12 L120 12" />
      </svg>
      <svg aria-hidden viewBox="0 0 120 120" style={{ position: "absolute", top: "6%", right: "44%", width: "60px", opacity: 0.1 }} fill="none" stroke="#C9A84C" strokeWidth="0.8">
        <path d="M120 0 L120 120 L0 120" />
        <path d="M108 0 L108 108 L0 108" />
      </svg>
    </div>
  );
}

/**
 * Bizarro custom icon set — thin-line technical art.
 * strokeWidth: 1 | strokeLinecap: "square" | strokeLinejoin: "miter"
 * Mirrors the angular geometry of the BZ monogram.
 */

type IconProps = { size?: number; color?: string; style?: React.CSSProperties };
const D: IconProps = { size: 24, color: "currentColor" };

/* ── Service icons ───────────────────────────────────── */

/** Contracts — angular quill touching a document */
export function BzContract({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter"
      style={style}>
      {/* Document body with folded corner */}
      <path d="M5 2 L15 2 L19 6 L19 22 L5 22 Z" />
      <path d="M15 2 L15 6 L19 6" />
      {/* Text lines */}
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="13.5" x2="16" y2="13.5" />
      <line x1="8" y1="17" x2="12.5" y2="17" />
      {/* Quill — diagonal stroke from bottom-right */}
      <path d="M14 19 L18.5 14.5 L20 16 L15.5 20.5 Z" />
      <line x1="14" y1="19" x2="13" y2="21" strokeWidth="0.8" />
    </svg>
  );
}

/** Recovery / Restructure — angular arrow cycle */
export function BzRecovery({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter"
      style={style}>
      {/* Circular path broken into two angular arcs suggesting restructure */}
      <path d="M12 4 L18 4 L20 8" />
      <path d="M20 8 C20 15 15 20 8 20" />
      <path d="M4 16 L4 20 L8 20" />
      <path d="M4 16 C4 9 9 4 12 4" />
      {/* Arrow heads */}
      <path d="M17 2 L20 4 L17 6" strokeLinejoin="miter" />
      <path d="M6 18 L4 20 L2 18" strokeLinejoin="miter" />
      {/* Central pillar suggesting stability in crisis */}
      <line x1="12" y1="9" x2="12" y2="15" strokeWidth="0.8" />
      <line x1="10" y1="11" x2="14" y2="11" strokeWidth="0.8" />
    </svg>
  );
}

/** Real Estate — angular building / property */
export function BzBuilding({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter"
      style={style}>
      {/* Main structure */}
      <path d="M3 22 L3 8 L12 3 L21 8 L21 22" />
      <line x1="3" y1="22" x2="21" y2="22" />
      {/* Door */}
      <path d="M10 22 L10 16 L14 16 L14 22" />
      {/* Windows */}
      <rect x="5.5" y="10" width="3" height="3" />
      <rect x="15.5" y="10" width="3" height="3" />
      {/* Ridge line */}
      <line x1="12" y1="3" x2="12" y2="6" strokeWidth="0.8" />
      {/* Key accent — top diamond */}
      <path d="M12 3 L13 5 L12 6 L11 5 Z" fill={color} stroke="none" />
    </svg>
  );
}

/** Tax / Tributary — angular balance scale */
export function BzScale({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter"
      style={style}>
      {/* Central pole */}
      <line x1="12" y1="4" x2="12" y2="20" />
      {/* Base */}
      <path d="M8 20 L16 20" />
      <path d="M9 22 L15 22" strokeWidth="0.7" />
      {/* Beam */}
      <line x1="4" y1="9" x2="20" y2="9" />
      {/* Top pin */}
      <circle cx="12" cy="6" r="1.2" fill={color} stroke="none" />
      {/* Left pan */}
      <line x1="4" y1="9" x2="3" y2="14" strokeWidth="0.8" />
      <line x1="4" y1="9" x2="7" y2="14" strokeWidth="0.8" />
      <path d="M2 14 Q4.5 16.5 8 14" />
      {/* Right pan */}
      <line x1="20" y1="9" x2="17" y2="14" strokeWidth="0.8" />
      <line x1="20" y1="9" x2="21" y2="14" strokeWidth="0.8" />
      <path d="M16 14 Q19.5 16.5 22 14" />
    </svg>
  );
}

/* ── Contact / utility icons ─────────────────────────── */

/** Phone — angular handset */
export function BzPhone({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter"
      style={style}>
      <path d="M6 2 L10 2 L12 7 L9.5 8.5 C11 11.5 12.5 13 15.5 14.5 L17 12 L22 14 L22 18 C22 20 20 22 18 21 C10 19 5 14 3 6 C2 4 4 2 6 2 Z" />
    </svg>
  );
}

/** Mail — angular envelope */
export function BzMail({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter"
      style={style}>
      <rect x="2" y="5" width="20" height="14" />
      <path d="M2 5 L12 13 L22 5" />
      <line x1="2" y1="19" x2="9" y2="12" strokeWidth="0.7" />
      <line x1="22" y1="19" x2="15" y2="12" strokeWidth="0.7" />
    </svg>
  );
}

/** Map Pin — angular location marker */
export function BzMapPin({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter"
      style={style}>
      {/* Pin body — angular drop shape */}
      <path d="M12 2 C8 2 5 5 5 9 C5 14 12 22 12 22 C12 22 19 14 19 9 C19 5 16 2 12 2 Z" />
      {/* Inner circle */}
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

/** Clock — angular timepiece */
export function BzClock({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter"
      style={style}>
      <circle cx="12" cy="12" r="9" />
      {/* Hour ticks — angular, not dots */}
      <line x1="12" y1="4" x2="12" y2="6" />
      <line x1="20" y1="12" x2="18" y2="12" />
      <line x1="12" y1="20" x2="12" y2="18" />
      <line x1="4" y1="12" x2="6" y2="12" />
      {/* Hands — angular, pointing to ~10:10 */}
      <path d="M12 12 L9 7" strokeWidth="1.2" />
      <path d="M12 12 L16 14" strokeWidth="0.8" />
      {/* Center dot */}
      <circle cx="12" cy="12" r="1" fill={color} stroke="none" />
    </svg>
  );
}

/** Arrow Up Right — angular */
export function BzArrow({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter"
      style={style}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <path d="M10 7 L17 7 L17 14" />
    </svg>
  );
}

/** Chevron Down — angular */
export function BzChevron({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter"
      style={style}>
      <path d="M6 9 L12 15 L18 9" />
    </svg>
  );
}

/** Check — angular tick */
export function BzCheck({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter"
      style={style}>
      <path d="M4 13 L9 18 L20 7" />
    </svg>
  );
}

/** Menu — angular hamburger */
export function BzMenu({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.2" strokeLinecap="square"
      style={style}>
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

/** Close X */
export function BzClose({ size = D.size, color = D.color, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.2" strokeLinecap="square"
      style={style}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

/* ── Gold diamond bullet ─────────────────────────────── */
export function BzBullet({ color = "#C9A84C" }: { color?: string }) {
  return (
    <svg width="7" height="7" viewBox="0 0 7 7" fill="none"
      style={{ flexShrink: 0, marginTop: "7px" }}>
      <rect x="0.5" y="0.5" width="6" height="6" transform="rotate(45 3.5 3.5)"
        fill={color} />
    </svg>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname();

  return (
    <header style={{ background: "var(--rb-container)", borderBottom: "1px solid rgba(255,181,156,0.08)" }}
      className="flex items-center justify-between px-6 h-12 shrink-0 z-50 sticky top-0">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 text-decoration-none">
        <span style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "1rem", color: "var(--rb-text)", letterSpacing: "0.08em" }}>
          ROBOBASE
        </span>
        <span className="badge">v2.1.0</span>
      </Link>

      {/* Center nav */}
      <nav className="hidden md:flex items-center gap-1">
        {[
          { href: "/dashboard", label: "DASHBOARD" },
          { href: "/search",    label: "SEARCH" },
          { href: "/feed",      label: "COMMUNITY" },
          { href: "/learn",     label: "LEARN" },
          { href: "/perception",label: "PERCEPTION" },
          { href: "/repos",     label: "REPOS" },
        ].map(({ href, label }) => {
          const active = pathname.startsWith(href);
          return (
            <Link key={href} href={href}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                padding: "0.35rem 0.75rem",
                color: active ? "var(--rb-primary-c)" : "var(--rb-text-dim)",
                background: active ? "rgba(245,97,38,0.1)" : "transparent",
                borderBottom: active ? "2px solid var(--rb-primary-c)" : "2px solid transparent",
                textDecoration: "none",
                transition: "all 0.15s",
              }}>
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Right — user + status */}
      <div className="flex items-center gap-3">
        <span className="badge led-green">SYS: ONLINE</span>
        <Link href="/profile"
          style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "var(--rb-primary)", textDecoration: "none", letterSpacing: "0.06em" }}>
          [OPERATOR_01]
        </Link>
        <Link href="/settings"
          style={{ color: "var(--rb-text-dim)", fontSize: "1rem", textDecoration: "none" }}>
          ⚙
        </Link>
      </div>
    </header>
  );
}

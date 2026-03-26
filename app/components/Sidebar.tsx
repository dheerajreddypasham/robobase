"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/dashboard",  label: "DASHBOARD",   icon: "▣" },
  { href: "/search",     label: "AI SEARCH",   icon: "◎" },
  { href: "/feed",       label: "COMMUNITY",   icon: "◈" },
  { href: "/learn",      label: "LEARNING",    icon: "◧" },
  { href: "/perception", label: "PERCEPTION",  icon: "◉" },
  { href: "/repos",      label: "REPOS",       icon: "◫" },
];

const BOTTOM = [
  { href: "/profile",  label: "PROFILE",  icon: "◌" },
  { href: "/settings", label: "SETTINGS", icon: "◎" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{ width: 200, background: "var(--rb-low)", borderRight: "1px solid rgba(255,181,156,0.06)" }}
      className="flex flex-col shrink-0 py-4">
      <div className="flex-1 flex flex-col gap-0.5 px-3">
        {NAV.map(({ href, label, icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link key={href} href={href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.5rem 0.75rem",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                color: active ? "var(--rb-primary)" : "var(--rb-text-dim)",
                background: active ? "rgba(245,97,38,0.08)" : "transparent",
                borderLeft: active ? "2px solid var(--rb-primary-c)" : "2px solid transparent",
                textDecoration: "none",
                transition: "all 0.15s",
              }}>
              <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>{icon}</span>
              {label}
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-0.5 px-3 pt-4"
        style={{ borderTop: "1px solid rgba(255,181,156,0.06)" }}>
        {BOTTOM.map(({ href, label, icon }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.5rem 0.75rem",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                color: active ? "var(--rb-primary)" : "var(--rb-text-dim)",
                background: active ? "rgba(245,97,38,0.08)" : "transparent",
                borderLeft: active ? "2px solid var(--rb-primary-c)" : "2px solid transparent",
                textDecoration: "none",
              }}>
              <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>{icon}</span>
              {label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

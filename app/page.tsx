"use client";
import Link from "next/link";
import Topbar from "./components/Topbar";
import Statusbar from "./components/Statusbar";

const STATS = [
  { label: "ACTIVE MODELS",  value: "12",   unit: "DEPLOYED" },
  { label: "REPOSITORIES",   value: "47",   unit: "PUBLIC" },
  { label: "COMMUNITY RANK", value: "#214", unit: "GLOBAL" },
  { label: "COMPUTE HOURS",  value: "892h", unit: "THIS MONTH" },
];

const FEATURES = [
  {
    tag: "AI SEARCH",
    title: "Visual Odometry\nEngine",
    desc: "Query across 10,000+ robotics papers, repos, and datasets. Semantic search powered by a fine-tuned perception model.",
    href: "/search",
  },
  {
    tag: "LEARNING PATHS",
    title: "Structured\nCurricula",
    desc: "From ROS2 basics to production-grade SLAM. Step-by-step paths built by practising robotics engineers.",
    href: "/learn",
  },
  {
    tag: "PERCEPTION HUB",
    title: "3D Reconstruction\n& SLAM",
    desc: "Live telemetry dashboards, visual odometry playback, and depth estimation benchmarks — all in one place.",
    href: "/perception",
  },
  {
    tag: "COMMUNITY",
    title: "Engineer\nNetwork",
    desc: "Collaborate with 4,200+ robotics engineers. Share repos, compete in challenges, and get peer review on your models.",
    href: "/feed",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--rb-base)" }}>
      <Topbar />

      {/* HERO */}
      <section className="relative flex flex-col justify-center px-12 md:px-20 py-24 overflow-hidden" style={{ minHeight: "85vh" }}>
        {/* Wireframe SVG watermark */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-end pr-12" style={{ opacity: 0.05 }}>
          <svg width="500" height="700" viewBox="0 0 500 700" fill="none">
            <circle cx="250" cy="620" r="65" stroke="white" strokeWidth="1"/>
            <circle cx="250" cy="620" r="42" stroke="white" strokeWidth="0.5"/>
            <line x1="250" y1="555" x2="190" y2="410" stroke="white" strokeWidth="1"/>
            <circle cx="190" cy="410" r="28" stroke="white" strokeWidth="1"/>
            <line x1="190" y1="382" x2="140" y2="260" stroke="white" strokeWidth="1"/>
            <circle cx="140" cy="260" r="22" stroke="white" strokeWidth="1"/>
            <line x1="140" y1="238" x2="170" y2="140" stroke="white" strokeWidth="1"/>
            <circle cx="170" cy="140" r="18" stroke="white" strokeWidth="1"/>
            <line x1="170" y1="122" x2="150" y2="55" stroke="white" strokeWidth="1"/>
            <circle cx="150" cy="55" r="14" stroke="white" strokeWidth="1"/>
            <line x1="136" y1="55" x2="110" y2="30" stroke="white" strokeWidth="0.5"/>
            <line x1="164" y1="55" x2="190" y2="25" stroke="white" strokeWidth="0.5"/>
            <line x1="150" y1="41" x2="120" y2="10" stroke="white" strokeWidth="0.5"/>
            {[...Array(12)].map((_, i) => (
              <line key={i} x1={130 + i * 18} y1={660} x2={130 + i * 18} y2={648} stroke="white" strokeWidth="0.5"/>
            ))}
            {[...Array(5)].map((_, i) => (
              <rect key={i} x={140 + i * 40} y={670} width="8" height="8" stroke="white" strokeWidth="0.5" fill="none"/>
            ))}
          </svg>
        </div>

        <div className="relative max-w-3xl">
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="badge">PLATFORM v2.1.0</span>
            <span className="badge" style={{ background: "rgba(245,97,38,0.15)", color: "var(--rb-primary-c)" }}>BETA ACCESS</span>
            <span className="badge" style={{ color: "var(--rb-green)" }}>● OPERATIONAL</span>
          </div>

          <h1 style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05, color: "var(--rb-text)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
            Engineering the<br />
            <span style={{ background: "linear-gradient(90deg,#ffb59c,#f56126)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Robotic Future
            </span>
          </h1>

          <p style={{ fontFamily: "Inter", fontSize: "1rem", color: "var(--rb-text-dim)", maxWidth: 520, lineHeight: 1.7, marginBottom: "2.5rem" }}>
            RoboBase is a mission-critical platform for robotics engineers. AI-powered search,
            structured learning paths, perception benchmarks, and a global engineering
            community — all in one terminal.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/dashboard" className="btn-primary">ACCESS PLATFORM →</Link>
            <Link href="/learn" className="btn-ghost">VIEW LEARNING PATHS</Link>
          </div>

          <div className="flex items-center gap-2 mt-8 flex-wrap">
            <span className="badge">[NODES: 142 ACTIVE]</span>
            <span className="badge">[MODELS: 1,240 INDEXED]</span>
            <span className="badge">[ENGINEERS: 4,200+]</span>
            <span className="badge" style={{ color: "var(--rb-green)" }}>[STATUS: OPERATIONAL]</span>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: "var(--rb-container)", borderTop: "1px solid rgba(255,181,156,0.08)", borderBottom: "1px solid rgba(255,181,156,0.08)" }}
        className="grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={s.label} className="px-8 py-6" style={{ borderRight: i < 3 ? "1px solid rgba(255,181,156,0.06)" : "none" }}>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-text-dim)", marginBottom: "0.4rem" }}>{s.label}</p>
            <p style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "1.75rem", color: "var(--rb-primary)", lineHeight: 1 }}>{s.value}</p>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)", marginTop: "0.25rem", letterSpacing: "0.06em" }}>{s.unit}</p>
          </div>
        ))}
      </section>

      {/* FEATURES GRID */}
      <section className="px-12 md:px-20 py-20" style={{ background: "var(--rb-base)" }}>
        <div className="mb-12">
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--rb-primary-c)", marginBottom: "0.5rem" }}>// PLATFORM MODULES</p>
          <h2 style={{ fontFamily: "Space Grotesk", fontSize: "2rem", fontWeight: 700, color: "var(--rb-text)" }}>Everything You Need</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1px", background: "rgba(255,181,156,0.06)" }}>
          {FEATURES.map((f) => (
            <Link key={f.href} href={f.href} style={{ textDecoration: "none", display: "block" }}>
              <div className="p-8 h-full" style={{ background: "var(--rb-container)", transition: "background 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--rb-high)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--rb-container)"; }}>
                <span className="badge" style={{ marginBottom: "1rem", display: "inline-block", background: "rgba(245,97,38,0.12)", color: "var(--rb-primary-c)" }}>{f.tag}</span>
                <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "1.25rem", color: "var(--rb-text)", lineHeight: 1.3, marginBottom: "0.75rem", whiteSpace: "pre-line" }}>{f.title}</h3>
                <p style={{ fontFamily: "Inter", fontSize: "0.875rem", color: "var(--rb-text-dim)", lineHeight: 1.65 }}>{f.desc}</p>
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--rb-primary-c)", marginTop: "1.5rem", letterSpacing: "0.08em" }}>ENTER MODULE →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-12 md:px-20 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ background: "var(--rb-container)", borderTop: "1px solid rgba(255,181,156,0.08)" }}>
        <div>
          <h2 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)", marginBottom: "0.5rem" }}>Request Access</h2>
          <p style={{ fontFamily: "Inter", fontSize: "0.875rem", color: "var(--rb-text-dim)" }}>RoboBase is currently in restricted beta. Apply for an operator key.</p>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span className="badge">[SLOTS REMAINING: 48]</span>
            <span className="badge">[CLEARANCE: ALPHA]</span>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link href="/login" className="btn-primary">REQUEST ACCESS →</Link>
          <Link href="/feed" className="btn-ghost">COMMUNITY</Link>
        </div>
      </section>

      <Statusbar />
    </div>
  );
}

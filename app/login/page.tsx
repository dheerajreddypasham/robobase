import Link from "next/link";
import Statusbar from "../components/Statusbar";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--rb-base)" }}>
      {/* Top bar */}
      <header style={{ background: "var(--rb-container)", borderBottom: "1px solid rgba(255,181,156,0.08)" }}
        className="flex items-center justify-between px-6 h-12">
        <Link href="/" style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "1rem", color: "var(--rb-text)", textDecoration: "none", letterSpacing: "0.08em" }}>
          ROBOBASE
        </Link>
        <div className="flex items-center gap-2">
          <span className="badge">[CLEARANCE: REQUIRED]</span>
          <span className="badge" style={{ color: "var(--rb-primary-c)" }}>● ACCESS GATE</span>
        </div>
      </header>

      {/* Main */}
      <div className="flex flex-1 items-center justify-center px-6 py-16" style={{ position: "relative", overflow: "hidden" }}>
        {/* Background grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,181,156,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,181,156,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Glow */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 400, background: "rgba(245,97,38,0.04)", filter: "blur(80px)", pointerEvents: "none" }} />

        {/* Login panel */}
        <div className="relative w-full max-w-md hud-panel p-8">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary-c)", letterSpacing: "0.08em" }}>● CLEARANCE REQUIRED</span>
          </div>

          <h1 style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "1.75rem", color: "var(--rb-text)", marginBottom: "0.25rem" }}>ROBOBASE</h1>
          <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--rb-text-dim)", marginBottom: "2rem" }}>Engineering Platform v2.1.0 — Restricted Access</p>

          <form className="flex flex-col gap-4">
            <div>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>OPERATOR_ID</p>
              <input type="email" placeholder="operator@domain.com"
                style={{
                  width: "100%",
                  background: "var(--rb-base)",
                  border: "none",
                  borderBottom: "1px solid rgba(255,181,156,0.25)",
                  color: "var(--rb-text)",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "0.82rem",
                  padding: "0.65rem 0.75rem",
                  outline: "none",
                }} />
            </div>
            <div>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>ACCESS_CODE</p>
              <input type="password" placeholder="••••••••••••"
                style={{
                  width: "100%",
                  background: "var(--rb-base)",
                  border: "none",
                  borderBottom: "1px solid rgba(255,181,156,0.25)",
                  color: "var(--rb-text)",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "0.82rem",
                  padding: "0.65rem 0.75rem",
                  outline: "none",
                }} />
            </div>

            <Link href="/dashboard" className="btn-primary" style={{ textAlign: "center", marginTop: "0.5rem", display: "block" }}>
              AUTHENTICATE →
            </Link>
            <button type="button" className="btn-ghost" style={{ textAlign: "center" }}>
              REQUEST ACCESS
            </button>
          </form>

          <div style={{ borderTop: "1px solid rgba(255,181,156,0.08)", marginTop: "1.5rem", paddingTop: "1rem" }}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="badge">[SECTOR: ALPHA]</span>
              <span className="badge">[PROTOCOL: SSH-2]</span>
              <span className="badge">[ENCRYPT: AES-256]</span>
            </div>
          </div>
        </div>
      </div>

      <Statusbar />
    </div>
  );
}

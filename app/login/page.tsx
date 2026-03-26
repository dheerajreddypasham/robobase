import Link from "next/link";
import Statusbar from "../components/Statusbar";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--rb-base)" }}>
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none" style={{ opacity: 0.025 }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div style={{ width: 36, height: 36, background: "var(--rb-primary-c)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "Space Grotesk", fontWeight: 900, fontSize: "0.9rem", color: "#2a0800" }}>RB</span>
            </div>
            <span style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "1.1rem", color: "var(--rb-text)", letterSpacing: "-0.02em" }}>RoboBase</span>
            <span className="badge" style={{ marginLeft: "auto", color: "var(--rb-green)", fontSize: "0.52rem" }}>● OPERATIONAL</span>
          </div>

          {/* Auth card */}
          <div className="p-8" style={{ background: "var(--rb-container)", border: "1px solid rgba(0,0,0,0.08)" }}>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.5rem" }}>// AUTHENTICATION</p>
            <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.5rem", fontWeight: 700, color: "var(--rb-text)", marginBottom: "0.4rem" }}>Sign in to RoboBase</h1>
            <p style={{ fontFamily: "Inter", fontSize: "0.82rem", color: "var(--rb-text-dim)", marginBottom: "2rem", lineHeight: 1.6 }}>
              Access your repositories, model weights, benchmarks, and the engineering community.
            </p>

            {/* SSO buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <button style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem",
                padding: "0.75rem 1rem", background: "var(--rb-high)",
                border: "1px solid rgba(0,0,0,0.1)", cursor: "pointer", width: "100%",
                fontFamily: "Inter", fontWeight: 500, fontSize: "0.85rem", color: "var(--rb-text)",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                Continue with GitHub
              </button>
              <button style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem",
                padding: "0.75rem 1rem", background: "var(--rb-high)",
                border: "1px solid rgba(0,0,0,0.1)", cursor: "pointer", width: "100%",
                fontFamily: "Inter", fontWeight: 500, fontSize: "0.85rem", color: "var(--rb-text)",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Continue with Google
              </button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
              <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)" }}>OR</span>
              <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
            </div>

            {/* Email form */}
            <div className="flex flex-col gap-3 mb-5">
              <div>
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", marginBottom: "0.4rem", letterSpacing: "0.06em" }}>EMAIL</p>
                <input type="email" placeholder="you@university.edu" style={{
                  width: "100%", padding: "0.65rem 0.75rem",
                  background: "var(--rb-high)", border: "1px solid rgba(0,0,0,0.08)",
                  color: "var(--rb-text)", fontFamily: "Inter", fontSize: "0.85rem", outline: "none", boxSizing: "border-box",
                }} />
              </div>
              <div>
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", marginBottom: "0.4rem", letterSpacing: "0.06em" }}>PASSWORD</p>
                <input type="password" placeholder="••••••••••••" style={{
                  width: "100%", padding: "0.65rem 0.75rem",
                  background: "var(--rb-high)", border: "1px solid rgba(0,0,0,0.08)",
                  color: "var(--rb-text)", fontFamily: "Inter", fontSize: "0.85rem", outline: "none", boxSizing: "border-box",
                }} />
              </div>
            </div>

            <Link href="/dashboard">
              <button className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "0.75rem", padding: "0.75rem" }}>
                SIGN IN →
              </button>
            </Link>

            <p style={{ fontFamily: "Inter", fontSize: "0.78rem", color: "var(--rb-text-dim)", marginTop: "1.25rem", textAlign: "center" }}>
              No account?{" "}
              <span style={{ color: "var(--rb-primary-c)", cursor: "pointer" }}>Create one free</span>
              {" · "}
              <span style={{ color: "var(--rb-text-dim)", cursor: "pointer" }}>Forgot password</span>
            </p>
          </div>

          {/* Security badges */}
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            <span className="badge" style={{ fontSize: "0.52rem" }}>[SOC 2 TYPE II]</span>
            <span className="badge" style={{ fontSize: "0.52rem" }}>[TLS 1.3 ENCRYPTED]</span>
            <span className="badge" style={{ fontSize: "0.52rem" }}>[GDPR COMPLIANT]</span>
            <span className="badge" style={{ fontSize: "0.52rem", color: "var(--rb-green)" }}>[NO ADS · EVER]</span>
          </div>
        </div>
      </div>

      <Statusbar />
    </div>
  );
}

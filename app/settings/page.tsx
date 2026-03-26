import AppShell from "../components/AppShell";

const SECTIONS = ["ACCOUNT", "PROFILE", "API KEYS", "NOTIFICATIONS", "BILLING", "DANGER ZONE"];

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="p-8">
        <div className="mb-8">
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// SETTINGS</p>
          <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Account Settings</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Settings nav */}
          <div className="p-4" style={{ background: "var(--rb-container)", alignSelf: "start" }}>
            {SECTIONS.map((s, i) => (
              <div key={s} className={i === 0 ? "accent-left" : ""} style={{
                padding: "0.65rem 0.75rem", marginBottom: "0.15rem",
                background: i === 0 ? "var(--rb-high)" : "transparent",
                cursor: "pointer",
              }}>
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.62rem", letterSpacing: "0.06em", color: i === 0 ? "var(--rb-primary-c)" : "var(--rb-text-dim)" }}>{s}</span>
              </div>
            ))}
          </div>

          {/* Settings panels */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {/* Account */}
            <div className="p-6" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1.25rem" }}>// ACCOUNT INFORMATION</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {[
                  ["USERNAME",      "dheerajreddypasham"],
                  ["EMAIL",         "dpasham1@asu.edu"],
                  ["DISPLAY NAME",  "Dheeraj Pasham"],
                  ["AFFILIATION",   "Arizona State University"],
                ].map(([label, val]) => (
                  <div key={label}>
                    <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", marginBottom: "0.4rem", letterSpacing: "0.06em" }}>{label}</p>
                    <input defaultValue={val} style={{
                      width: "100%", padding: "0.6rem 0.75rem",
                      background: "var(--rb-high)", border: "1px solid rgba(255,181,156,0.1)",
                      color: "var(--rb-text)", fontFamily: "Inter", fontSize: "0.82rem", outline: "none", boxSizing: "border-box",
                    }} />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", marginBottom: "0.4rem", letterSpacing: "0.06em" }}>BIO</p>
                <textarea defaultValue="Robotics engineer focused on visual perception and SLAM. Building stereo VO pipelines for edge hardware. ASU Robotics Research Lab." rows={3} style={{
                  width: "100%", padding: "0.6rem 0.75rem",
                  background: "var(--rb-high)", border: "1px solid rgba(255,181,156,0.1)",
                  color: "var(--rb-text)", fontFamily: "Inter", fontSize: "0.82rem", outline: "none", resize: "vertical", boxSizing: "border-box",
                }} />
              </div>
              <button className="btn-primary" style={{ fontSize: "0.62rem", padding: "0.55rem 1.25rem" }}>SAVE CHANGES</button>
            </div>

            {/* API Keys */}
            <div className="p-6" style={{ background: "var(--rb-container)" }}>
              <div className="flex items-center justify-between mb-4">
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)" }}>// API KEYS</p>
                <button className="btn-primary" style={{ fontSize: "0.6rem", padding: "0.4rem 0.9rem" }}>+ GENERATE KEY</button>
              </div>
              <p style={{ fontFamily: "Inter", fontSize: "0.82rem", color: "var(--rb-text-dim)", marginBottom: "1rem", lineHeight: 1.6 }}>
                Use API keys to authenticate requests to the RoboBase API — for model downloads, benchmark submissions, and repo operations via CLI.
              </p>
              {[
                { name: "CLI access (MacBook Pro)", key: "rbk_live_••••••••••••••••••••G4xK", created: "2026-02-14", lastUsed: "2h ago",    scopes: ["REPO_READ","REPO_WRITE","BENCHMARK"] },
                { name: "CI/CD pipeline (GitHub Actions)", key: "rbk_live_••••••••••••••••••••T9mZ", created: "2026-01-08", lastUsed: "1d ago", scopes: ["REPO_READ","MODEL_DOWNLOAD"] },
              ].map(k => (
                <div key={k.name} className="p-4 mb-3" style={{ background: "var(--rb-high)", border: "1px solid rgba(255,181,156,0.08)" }}>
                  <div className="flex items-center justify-between mb-2 gap-3">
                    <span style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.82rem", color: "var(--rb-text)" }}>{k.name}</span>
                    <button style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-primary-c)", background: "none", border: "1px solid rgba(245,97,38,0.3)", padding: "0.25rem 0.6rem", cursor: "pointer" }}>REVOKE</button>
                  </div>
                  <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.62rem", color: "var(--rb-primary)", marginBottom: "0.4rem" }}>{k.key}</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)" }}>Created {k.created}</span>
                    <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)" }}>Last used {k.lastUsed}</span>
                    <div className="flex gap-1 flex-wrap">
                      {k.scopes.map(s => <span key={s} className="badge" style={{ fontSize: "0.5rem" }}>{s}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Plan */}
            <div className="p-6" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1.25rem" }}>// BILLING & PLAN</p>
              <div className="p-5 mb-4 accent-left" style={{ background: "var(--rb-high)" }}>
                <div className="flex items-center justify-between mb-2">
                  <span style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "1rem", color: "var(--rb-text)" }}>PRO PLAN</span>
                  <span style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "1.1rem", color: "var(--rb-primary)" }}>$19 / month</span>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {["Unlimited private repos", "50 GB model storage", "500 benchmark runs/month", "Priority support", "Team collaboration (up to 5)", "Compute credits: 500/mo"].map(f => (
                    <span key={f} style={{ fontFamily: "Inter", fontSize: "0.75rem", color: "var(--rb-text-dim)" }}>✓ {f}</span>
                  ))}
                </div>
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", marginTop: "0.75rem" }}>Next billing: 2026-04-01 · Card ending 4242</p>
              </div>
              <div className="flex gap-3">
                <button className="btn-ghost" style={{ fontSize: "0.62rem", padding: "0.5rem 1rem" }}>MANAGE SUBSCRIPTION</button>
                <button className="btn-ghost" style={{ fontSize: "0.62rem", padding: "0.5rem 1rem" }}>VIEW INVOICES</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

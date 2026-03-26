import AppShell from "../components/AppShell";

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="p-8">
        <div className="mb-8">
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// SYSTEM SETTINGS</p>
          <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Configuration</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left nav */}
          <div className="p-4" style={{ background: "var(--rb-container)" }}>
            {["ACCOUNT", "SECURITY", "API KEYS", "COMPUTE", "NOTIFICATIONS", "APPEARANCE", "DANGER ZONE"].map((s, i) => (
              <div key={s} className={`px-4 py-3 cursor-pointer`}
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  color: i === 0 ? "var(--rb-primary)" : "var(--rb-text-dim)",
                  borderLeft: i === 0 ? "2px solid var(--rb-primary-c)" : "2px solid transparent",
                  background: i === 0 ? "rgba(245,97,38,0.06)" : "transparent",
                }}>
                {s}
              </div>
            ))}
          </div>

          {/* Settings panel */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Account section */}
            <div className="p-6" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1.25rem" }}>// ACCOUNT</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: "OPERATOR ID",   value: "OPERATOR_01",        editable: false },
                  { label: "DISPLAY NAME",  value: "Dheeraj Pasham",      editable: true },
                  { label: "EMAIL",         value: "dpasham1@asu.edu",    editable: true },
                  { label: "AFFILIATION",   value: "Arizona State University", editable: true },
                ].map((f) => (
                  <div key={f.label}>
                    <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>{f.label}</p>
                    <input defaultValue={f.value} readOnly={!f.editable}
                      style={{
                        width: "100%",
                        background: f.editable ? "var(--rb-high)" : "var(--rb-base)",
                        border: "none",
                        borderBottom: `1px solid ${f.editable ? "rgba(255,181,156,0.3)" : "rgba(255,181,156,0.1)"}`,
                        color: f.editable ? "var(--rb-text)" : "var(--rb-text-dim)",
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "0.8rem",
                        padding: "0.6rem 0.75rem",
                        outline: "none",
                      }} />
                  </div>
                ))}
              </div>
              <button className="btn-primary mt-6" style={{ fontSize: "0.65rem", padding: "0.6rem 1.5rem" }}>SAVE CHANGES</button>
            </div>

            {/* API Keys */}
            <div className="p-6" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1.25rem" }}>// API KEYS</p>
              <div className="flex flex-col gap-3">
                {[
                  { name: "PROD-KEY-01", created: "2026-01-14", scopes: "READ, WRITE" },
                  { name: "CI-KEY-02",   created: "2026-02-28", scopes: "READ ONLY" },
                ].map((k) => (
                  <div key={k.name} className="p-4 flex items-center justify-between gap-4" style={{ background: "var(--rb-high)" }}>
                    <div>
                      <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.72rem", color: "var(--rb-primary)", marginBottom: "0.2rem" }}>{k.name}</p>
                      <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)" }}>created {k.created} · {k.scopes}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="btn-ghost" style={{ fontSize: "0.58rem", padding: "0.3rem 0.75rem" }}>COPY</button>
                      <button style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "#ff716c", background: "transparent", border: "1px solid rgba(255,113,108,0.2)", padding: "0.3rem 0.75rem", cursor: "pointer" }}>REVOKE</button>
                    </div>
                  </div>
                ))}
                <button className="btn-ghost mt-2" style={{ fontSize: "0.62rem", alignSelf: "flex-start" }}>+ GENERATE NEW KEY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

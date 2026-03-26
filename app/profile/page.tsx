import AppShell from "../components/AppShell";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <AppShell>
      <div className="p-8">
        <div className="mb-8">
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// OPERATOR PROFILE</p>
          <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>OPERATOR_01</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile card */}
          <div className="p-6 flex flex-col gap-4" style={{ background: "var(--rb-container)" }}>
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div style={{ width: 56, height: 56, background: "linear-gradient(45deg,#ffb59c,#f56126)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "Space Grotesk", fontSize: "1.25rem", fontWeight: 700, color: "#5c1a00" }}>DP</span>
              </div>
              <div>
                <p style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "1rem", color: "var(--rb-text)" }}>Dheeraj Pasham</p>
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.62rem", color: "var(--rb-primary-c)" }}>OPERATOR_01</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="badge">[RANK: #214]</span>
                <span className="badge" style={{ color: "var(--rb-green)" }}>[VERIFIED]</span>
                <span className="badge">[BETA ACCESS]</span>
              </div>
              <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--rb-text-dim)", lineHeight: 1.55, marginTop: "0.5rem" }}>
                Robotics engineer @ ASU. Working on visual SLAM and depth estimation for mobile manipulation. Open source contributor.
              </p>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,181,156,0.08)", paddingTop: "1rem" }}>
              {[["EMAIL", "dpasham1@asu.edu"], ["AFFILIATION", "Arizona State University"], ["JOINED", "2026-01-10"], ["CLEARANCE", "ALPHA"]].map(([k, v]) => (
                <div key={k} className="flex justify-between mb-2">
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)", letterSpacing: "0.05em" }}>{k}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text)" }}>{v}</span>
                </div>
              ))}
            </div>

            <Link href="/settings" className="btn-ghost" style={{ textAlign: "center", fontSize: "0.62rem" }}>EDIT PROFILE →</Link>
          </div>

          {/* Stats + activity */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
              {[["REPOS", "5"], ["STARS RECEIVED", "557"], ["PATHS COMPLETED", "1/4"]].map(([k, v]) => (
                <div key={k} className="p-4 text-center" style={{ background: "var(--rb-container)" }}>
                  <p style={{ fontFamily: "Space Grotesk", fontSize: "1.5rem", fontWeight: 700, color: "var(--rb-primary)" }}>{v}</p>
                  <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", letterSpacing: "0.06em", marginTop: "0.25rem" }}>{k}</p>
                </div>
              ))}
            </div>

            {/* Contribution heatmap placeholder */}
            <div className="p-5" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// ACTIVITY — LAST 12 WEEKS</p>
              <div className="flex gap-1 flex-wrap">
                {Array.from({ length: 84 }, (_, i) => {
                  const intensity = Math.random();
                  const bg = intensity > 0.85 ? "var(--rb-primary-c)" : intensity > 0.6 ? "var(--rb-primary)" : intensity > 0.35 ? "#4a3830" : "var(--rb-high)";
                  return <div key={i} style={{ width: 10, height: 10, background: bg }} />;
                })}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)" }}>LESS</span>
                {["var(--rb-high)", "#4a3830", "var(--rb-primary)", "var(--rb-primary-c)"].map((c, i) => (
                  <div key={i} style={{ width: 10, height: 10, background: c }} />
                ))}
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)" }}>MORE</span>
              </div>
            </div>

            {/* Recent repos */}
            <div className="p-5" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// PINNED REPOSITORIES</p>
              <div className="flex flex-col gap-2">
                {[["VO-Python-Starter", "PYTHON", "★ 142"], ["SLAM-ROS2-Bridge", "C++", "★ 87"]].map(([name, lang, stars]) => (
                  <div key={name} className="p-3 flex items-center justify-between" style={{ background: "var(--rb-high)" }}>
                    <div>
                      <p style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.82rem", color: "var(--rb-primary)" }}>{name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="badge">{lang}</span>
                        <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)" }}>{stars}</span>
                      </div>
                    </div>
                    <Link href="/repos" style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary-c)", textDecoration: "none" }}>VIEW →</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

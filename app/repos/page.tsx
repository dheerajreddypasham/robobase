"use client";
import AppShell from "../components/AppShell";

const REPOS = [
  { id: "REPO-001", name: "VO-Python-Starter",    lang: "PYTHON", stars: 142, forks: 38, updated: "2h ago",    desc: "Visual odometry pipeline in Python + OpenCV. Includes stereo and monocular modes." },
  { id: "REPO-002", name: "SLAM-ROS2-Bridge",     lang: "C++",    stars: 87,  forks: 21, updated: "1d ago",    desc: "ROS2 wrapper for ORB-SLAM3 with live 3D visualisation via RViz2." },
  { id: "REPO-003", name: "Depth-EstNet-Weights", lang: "PYTHON", stars: 64,  forks: 14, updated: "3d ago",    desc: "Pre-trained MiDaS and DepthAnything weights optimised for edge deployment." },
  { id: "REPO-004", name: "KITTI-Eval-Toolkit",  lang: "PYTHON", stars: 211, forks: 67, updated: "1w ago",    desc: "Evaluation scripts for KITTI odometry benchmark. Supports VO and SLAM pipelines." },
  { id: "REPO-005", name: "3DGS-Mesh-Export",    lang: "PYTHON", stars: 53,  forks: 9,  updated: "2w ago",    desc: "Convert 3D Gaussian Splatting outputs to watertight mesh for collision detection." },
];

const LANG_COLOR: Record<string, string> = {
  PYTHON: "rgba(245,97,38,0.15)",
  "C++":  "rgba(0,230,57,0.1)",
};

export default function ReposPage() {
  return (
    <AppShell>
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// REPOSITORIES</p>
            <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Code & Models</h1>
          </div>
          <button className="btn-primary" style={{ fontSize: "0.65rem", padding: "0.6rem 1.25rem" }}>+ NEW REPO</button>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {["ALL", "PYTHON", "C++", "STARRED", "MINE"].map((f) => (
            <button key={f} style={{
              fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.08em",
              padding: "0.3rem 0.75rem",
              background: f === "ALL" ? "rgba(245,97,38,0.15)" : "var(--rb-container)",
              color: f === "ALL" ? "var(--rb-primary-c)" : "var(--rb-text-dim)",
              border: f === "ALL" ? "1px solid rgba(245,97,38,0.3)" : "1px solid rgba(255,181,156,0.1)",
              cursor: "pointer",
            }}>{f}</button>
          ))}
          <span className="ml-auto badge">[{REPOS.length} REPOS]</span>
        </div>

        <div className="flex flex-col gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
          {REPOS.map((r) => (
            <div key={r.id} className="p-5 flex items-start gap-4" style={{ background: "var(--rb-container)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--rb-high)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--rb-container)"; }}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.95rem", color: "var(--rb-primary)" }}>{r.name}</h3>
                  <span className="badge" style={{ background: LANG_COLOR[r.lang], color: "var(--rb-text)" }}>{r.lang}</span>
                  <span className="badge ml-auto">{r.id}</span>
                </div>
                <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--rb-text-dim)", lineHeight: 1.5, marginBottom: "0.75rem" }}>{r.desc}</p>
                <div className="flex items-center gap-4 flex-wrap">
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary)" }}>★ {r.stars}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>⑂ {r.forks}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>updated {r.updated}</span>
                </div>
              </div>
              <button className="btn-ghost" style={{ fontSize: "0.6rem", padding: "0.4rem 0.9rem", whiteSpace: "nowrap" }}>OPEN →</button>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

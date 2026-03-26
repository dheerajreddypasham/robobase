import AppShell from "../components/AppShell";
import Link from "next/link";

const KPI = [
  { label: "ACTIVE MODELS",  value: "12",   trend: "+2 this week" },
  { label: "REPOSITORIES",   value: "47",   trend: "+5 this month" },
  { label: "COMMUNITY RANK", value: "#214", trend: "↑ 12 places" },
  { label: "COMPUTE HOURS",  value: "892h", trend: "73% capacity" },
];

const ACTIVITY = [
  { code: "EVT-4492", type: "MODEL_DEPLOYED",    title: "VO-Stereo-v3 deployed to edge cluster", time: "14:23:01" },
  { code: "EVT-4491", type: "REPO_FORKED",       title: "VO-Python-Starter forked by 3 engineers", time: "13:41:55" },
  { code: "EVT-4490", type: "LEARNING_COMPLETE", title: "Visual SLAM module 4 completed", time: "11:08:22" },
  { code: "EVT-4489", type: "ISSUE_OPENED",      title: "Issue #47: Depth estimation drift on GPU", time: "09:30:10" },
  { code: "EVT-4488", type: "PR_MERGED",         title: "PR #22: Fix odometry IMU integration", time: "yesterday" },
];

const REPOS = [
  { name: "VO-Python-Starter",    lang: "PYTHON", stars: 142, desc: "Visual odometry pipeline in Python + OpenCV" },
  { name: "SLAM-ROS2-Bridge",     lang: "C++",    stars: 87,  desc: "ROS2 wrapper for ORB-SLAM3 with live viz" },
  { name: "Depth-EstNet-Weights", lang: "PYTHON", stars: 64,  desc: "Pre-trained MiDaS weights for edge deployment" },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// OPERATOR DASHBOARD</p>
            <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Overview</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="badge" style={{ color: "var(--rb-green)" }}>● LIVE</span>
            <span className="badge">[OPERATOR_01]</span>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-8" style={{ background: "rgba(255,181,156,0.06)" }}>
          {KPI.map((k) => (
            <div key={k.label} className="p-5" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--rb-text-dim)", marginBottom: "0.4rem" }}>{k.label}</p>
              <p style={{ fontFamily: "Space Grotesk", fontSize: "2rem", fontWeight: 700, color: "var(--rb-primary)", lineHeight: 1 }}>{k.value}</p>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)", marginTop: "0.3rem" }}>{k.trend}</p>
            </div>
          ))}
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {/* Activity feed */}
          <div className="md:col-span-3 p-6" style={{ background: "var(--rb-container)" }}>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// RECENT ACTIVITY</p>
            <div className="flex flex-col gap-3">
              {ACTIVITY.map((a) => (
                <div key={a.code} className="flex items-start gap-3 accent-left">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="badge" style={{ background: "rgba(245,97,38,0.1)", color: "var(--rb-primary-c)" }}>{a.type}</span>
                      <span className="mono" style={{ fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>[{a.code}]</span>
                    </div>
                    <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--rb-text)" }}>{a.title}</p>
                  </div>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)", whiteSpace: "nowrap" }}>{a.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HUD telemetry panel */}
          <div className="md:col-span-2 hud-panel p-6 flex flex-col gap-4">
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)" }}>// TELEMETRY HUD</p>
            {[
              ["NODE_HEALTH",   "98.4%",    "var(--rb-green)"],
              ["INFERENCE_LAT", "12.4ms",   "var(--rb-primary)"],
              ["GPU_UTIL",      "73%",      "var(--rb-primary-c)"],
              ["RAM_USAGE",     "14.2 GB",  "var(--rb-text-dim)"],
              ["ACTIVE_SESS",   "3",        "var(--rb-text-dim)"],
              ["QUEUE_DEPTH",   "0",        "var(--rb-green)"],
            ].map(([k, v, c]) => (
              <div key={k} className="flex items-center justify-between">
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.62rem", color: "var(--rb-text-dim)", letterSpacing: "0.05em" }}>{k}</span>
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.72rem", color: c as string, fontWeight: 700 }}>{v}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,181,156,0.1)", paddingTop: "1rem", marginTop: "auto" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)", lineHeight: 1.8 }}>
                [TS: 2026-03-25T20:31:01Z]<br />
                [UPTIME: 14d 06h 22m]<br />
                [VER: ROBOBASE-2.1.0]
              </p>
            </div>
          </div>
        </div>

        {/* Repos row */}
        <div>
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// YOUR REPOSITORIES</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
            {REPOS.map((r) => (
              <div key={r.name} className="p-5" style={{ background: "var(--rb-container)" }}>
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.9rem", color: "var(--rb-text)" }}>{r.name}</h3>
                  <span className="badge">{r.lang}</span>
                </div>
                <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--rb-text-dim)", lineHeight: 1.5, marginBottom: "0.75rem" }}>{r.desc}</p>
                <div className="flex items-center gap-3">
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary)" }}>★ {r.stars}</span>
                  <Link href="/repos" style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary-c)", textDecoration: "none" }}>OPEN →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

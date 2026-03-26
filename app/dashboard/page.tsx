import AppShell from "../components/AppShell";
import Link from "next/link";

const KPI = [
  { label: "REPOSITORIES",    value: "7",     trend: "+2 this month",   color: "var(--rb-primary)" },
  { label: "TOTAL STARS",     value: "1,204", trend: "+87 this week",   color: "var(--rb-primary)" },
  { label: "COMMUNITY RANK",  value: "#318",  trend: "↑ 44 places",     color: "var(--rb-primary-c)" },
  { label: "MODEL DOWNLOADS", value: "8,741", trend: "+1.2k this month", color: "var(--rb-primary)" },
];

const ACTIVITY = [
  { code: "EVT-9921", type: "PR_MERGED",        title: "PR #14 merged: Add DDIM inference to diffusion policy repo", time: "09:14:32", user: "priya_slam" },
  { code: "EVT-9920", type: "REPO_STARRED",     title: "LeRobot-ACT-Policy starred by 14 engineers in the last hour", time: "08:47:10", user: "system" },
  { code: "EVT-9919", type: "ISSUE_OPENED",     title: "Issue #31 opened: Depth estimation drifts on low-texture surfaces", time: "07:32:55", user: "depth_gang" },
  { code: "EVT-9918", type: "CHALLENGE_UPDATE", title: "You moved to rank #4 in the Sub-10cm SLAM challenge", time: "06:01:22", user: "system" },
  { code: "EVT-9917", type: "MODEL_DOWNLOADED", title: "DepthAnything-ROS weights downloaded 340 times today", time: "yesterday",  user: "system" },
  { code: "EVT-9916", type: "COMMENT",          title: "marco_diff commented on your EuRoC benchmark post", time: "yesterday",  user: "marco_diff" },
];

const MY_REPOS = [
  { name: "stereo-vo-orin",       lang: "PYTHON", stars: 214, forks: 48,  updated: "3h ago",  desc: "Stereo visual odometry pipeline optimised for Jetson Orin NX. 200fps with FAST + LK sparse flow." },
  { name: "depth-anything-ros2",  lang: "PYTHON", stars: 441, forks: 62,  updated: "1d ago",  desc: "ROS2 node wrapping Depth Anything V2 for real-time monocular depth on RealSense D435 and ZED2." },
  { name: "euroc-eval-tools",     lang: "PYTHON", stars: 97,  forks: 22,  updated: "4d ago",  desc: "Evaluation scripts for EuRoC MAV dataset. ATE, RPE, and trajectory plot generation." },
];

const EVENT_COLOR: Record<string, string> = {
  PR_MERGED:        "var(--rb-green)",
  REPO_STARRED:     "var(--rb-primary)",
  ISSUE_OPENED:     "var(--rb-primary-c)",
  CHALLENGE_UPDATE: "var(--rb-primary-c)",
  MODEL_DOWNLOADED: "var(--rb-primary)",
  COMMENT:          "var(--rb-text-dim)",
};

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// OPERATOR DASHBOARD</p>
            <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Good morning, Dheeraj</h1>
            <p style={{ fontFamily: "Inter", fontSize: "0.85rem", color: "var(--rb-text-dim)", marginTop: "0.3rem" }}>You have 3 unread notifications and 1 open PR awaiting review.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="badge" style={{ color: "var(--rb-green)" }}>● LIVE</span>
            <span className="badge">[dheerajreddypasham]</span>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-8" style={{ background: "rgba(255,181,156,0.06)" }}>
          {KPI.map((k) => (
            <div key={k.label} className="p-5" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--rb-text-dim)", marginBottom: "0.4rem" }}>{k.label}</p>
              <p style={{ fontFamily: "Space Grotesk", fontSize: "2rem", fontWeight: 700, color: k.color, lineHeight: 1 }}>{k.value}</p>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)", marginTop: "0.35rem" }}>{k.trend}</p>
            </div>
          ))}
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {/* Activity feed */}
          <div className="md:col-span-3 p-6" style={{ background: "var(--rb-container)" }}>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1.25rem" }}>// RECENT ACTIVITY</p>
            <div className="flex flex-col gap-4">
              {ACTIVITY.map((a) => (
                <div key={a.code} className="flex items-start gap-3 accent-left">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="badge" style={{ background: "rgba(245,97,38,0.1)", color: EVENT_COLOR[a.type], fontSize: "0.52rem" }}>{a.type}</span>
                      <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)" }}>{a.user}</span>
                    </div>
                    <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--rb-text)", lineHeight: 1.4 }}>{a.title}</p>
                  </div>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", whiteSpace: "nowrap", flexShrink: 0 }}>{a.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HUD telemetry panel */}
          <div className="md:col-span-2 hud-panel p-6 flex flex-col gap-3">
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.5rem" }}>// SYSTEM HUD</p>
            {[
              ["ACCOUNT STATUS",  "ACTIVE",    "var(--rb-green)"],
              ["API CALLS TODAY", "1,247",     "var(--rb-primary)"],
              ["STORAGE USED",    "4.2 GB",    "var(--rb-text-dim)"],
              ["BANDWIDTH",       "12.8 GB",   "var(--rb-text-dim)"],
              ["OPEN ISSUES",     "4",         "var(--rb-primary-c)"],
              ["OPEN PRS",        "1",         "var(--rb-primary-c)"],
              ["FOLLOWERS",       "218",       "var(--rb-primary)"],
              ["FOLLOWING",       "84",        "var(--rb-text-dim)"],
            ].map(([k, v, c]) => (
              <div key={k} className="flex items-center justify-between">
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.62rem", color: "var(--rb-text-dim)", letterSpacing: "0.04em" }}>{k}</span>
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.72rem", color: c as string, fontWeight: 700 }}>{v}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,181,156,0.1)", paddingTop: "1rem", marginTop: "auto" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)", lineHeight: 1.9 }}>
                [SESSION: 2026-03-25T09:14Z]<br />
                [PLAN: PRO · RENEWS 2026-04-01]<br />
                [VER: ROBOBASE-2.4.1]
              </p>
            </div>
          </div>
        </div>

        {/* Your Repos */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)" }}>// YOUR REPOSITORIES</p>
            <Link href="/repos" style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)", textDecoration: "none" }}>VIEW ALL →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
            {MY_REPOS.map((r) => (
              <div key={r.name} className="p-5" style={{ background: "var(--rb-container)" }}>
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.9rem", color: "var(--rb-primary)" }}>{r.name}</h3>
                  <span className="badge" style={{ fontSize: "0.52rem", flexShrink: 0 }}>{r.lang}</span>
                </div>
                <p style={{ fontFamily: "Inter", fontSize: "0.78rem", color: "var(--rb-text-dim)", lineHeight: 1.55, marginBottom: "0.75rem" }}>{r.desc}</p>
                <div className="flex items-center gap-3">
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary)" }}>★ {r.stars}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>⑂ {r.forks}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)", marginLeft: "auto" }}>{r.updated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

import AppShell from "../components/AppShell";
import Link from "next/link";

const PINNED = [
  { name: "stereo-vo-orin",      lang: "PYTHON", stars: 214, forks: 48,  desc: "Stereo VO at 200fps on Jetson Orin NX" },
  { name: "depth-anything-ros2", lang: "PYTHON", stars: 441, forks: 62,  desc: "Depth Anything V2 ROS2 node for RealSense & ZED" },
  { name: "euroc-eval-tools",    lang: "PYTHON", stars: 97,  forks: 22,  desc: "EuRoC MAV benchmark evaluation scripts" },
];

const CONTRIBUTIONS = [
  { month: "Oct", count: 12 }, { month: "Nov", count: 28 }, { month: "Dec", count: 9 },
  { month: "Jan", count: 34 }, { month: "Feb", count: 47 }, { month: "Mar", count: 61 },
];

const BADGES = [
  { label: "SLAM CHAMPION", desc: "Top 5 in EuRoC SLAM challenge", color: "var(--rb-primary-c)" },
  { label: "OPEN SOURCER",  desc: "3+ repos with 100+ stars",      color: "var(--rb-green)" },
  { label: "REVIEWER",      desc: "50+ PR reviews",                color: "var(--rb-primary)" },
  { label: "EDUCATOR",      desc: "Contributed to 2 learning paths", color: "var(--rb-primary-c)" },
];

export default function ProfilePage() {
  const maxCount = Math.max(...CONTRIBUTIONS.map(c => c.count));

  return (
    <AppShell>
      <div className="p-8">
        <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1.5rem" }}>// OPERATOR PROFILE</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Profile card */}
          <div className="p-6" style={{ background: "var(--rb-container)" }}>
            <div style={{ width: 72, height: 72, background: "linear-gradient(135deg, var(--rb-primary-c), var(--rb-primary))", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
              <span style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "#2a0800" }}>DP</span>
            </div>
            <h2 style={{ fontFamily: "Space Grotesk", fontSize: "1.25rem", fontWeight: 700, color: "var(--rb-text)", marginBottom: "0.2rem" }}>Dheeraj Pasham</h2>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--rb-primary)", marginBottom: "0.5rem" }}>dheerajreddypasham</p>
            <p style={{ fontFamily: "Inter", fontSize: "0.82rem", color: "var(--rb-text-dim)", lineHeight: 1.6, marginBottom: "1rem" }}>
              Robotics engineer focused on visual perception and SLAM. Building stereo VO pipelines for edge hardware.
              ASU Robotics Research Lab.
            </p>
            <div className="flex flex-col gap-1 mb-4">
              <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>📍 Tempe, Arizona, USA</span>
              <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>🎓 ASU — Robotics & Autonomous Systems</span>
              <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary)" }}>dpasham1@asu.edu</span>
            </div>
            <button className="btn-primary" style={{ fontSize: "0.62rem", padding: "0.5rem 1rem", width: "100%" }}>EDIT PROFILE</button>
          </div>

          {/* Stats grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-px" style={{ background: "rgba(0,0,0,0.06)", alignContent: "start" }}>
            {[
              ["REPOSITORIES",    "7",     "public"],
              ["TOTAL STARS",     "1,204", "across all repos"],
              ["FOLLOWERS",       "218",   "engineers"],
              ["FOLLOWING",       "84",    "engineers"],
              ["CONTRIBUTIONS",   "191",   "last 6 months"],
              ["COMMUNITY RANK",  "#318",  "global"],
              ["CHALLENGES WON",  "2",     "career total"],
              ["LEARNING PATHS",  "1",     "completed"],
            ].map(([k, v, u]) => (
              <div key={k} className="p-4" style={{ background: "var(--rb-container)" }}>
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", marginBottom: "0.25rem", letterSpacing: "0.04em" }}>{k}</p>
                <p style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "1.4rem", color: "var(--rb-primary)", lineHeight: 1 }}>{v}</p>
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.52rem", color: "var(--rb-text-dim)", marginTop: "0.2rem" }}>{u}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contribution graph */}
        <div className="p-6 mb-8" style={{ background: "var(--rb-container)" }}>
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1.25rem" }}>// CONTRIBUTION ACTIVITY (LAST 6 MONTHS)</p>
          <div className="flex items-end gap-3" style={{ height: 80 }}>
            {CONTRIBUTIONS.map((c) => (
              <div key={c.month} className="flex flex-col items-center gap-2 flex-1">
                <div style={{ width: "100%", background: "var(--rb-primary-c)", height: `${(c.count / maxCount) * 60}px`, opacity: 0.7, transition: "height 0.3s" }} />
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)" }}>{c.month}</span>
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-primary)" }}>{c.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="mb-8">
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// BADGES</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "rgba(0,0,0,0.06)" }}>
            {BADGES.map(b => (
              <div key={b.label} className="p-4 text-center" style={{ background: "var(--rb-container)" }}>
                <div style={{ width: 40, height: 40, background: `${b.color}22`, border: `1px solid ${b.color}44`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem" }}>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "1rem" }}>★</span>
                </div>
                <p style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.72rem", color: b.color, marginBottom: "0.25rem" }}>{b.label}</p>
                <p style={{ fontFamily: "Inter", fontSize: "0.7rem", color: "var(--rb-text-dim)", lineHeight: 1.4 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pinned repos */}
        <div>
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// PINNED REPOSITORIES</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(0,0,0,0.06)" }}>
            {PINNED.map(r => (
              <div key={r.name} className="p-5" style={{ background: "var(--rb-container)" }}>
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.88rem", color: "var(--rb-primary)" }}>{r.name}</h3>
                  <span className="badge" style={{ fontSize: "0.5rem", flexShrink: 0 }}>{r.lang}</span>
                </div>
                <p style={{ fontFamily: "Inter", fontSize: "0.78rem", color: "var(--rb-text-dim)", lineHeight: 1.5, marginBottom: "0.75rem" }}>{r.desc}</p>
                <div className="flex items-center gap-3">
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary)" }}>★ {r.stars}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>⑂ {r.forks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

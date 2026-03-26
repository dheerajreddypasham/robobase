import AppShell from "../components/AppShell";

const PATHS = [
  {
    id: "PATH-001",
    title: "Visual SLAM: Zero to Production",
    level: "INTERMEDIATE",
    modules: 8,
    completed: 4,
    duration: "12h",
    tags: ["SLAM", "ROS2", "PYTHON"],
    desc: "From monocular camera calibration to full-scale loop-closure SLAM deployable on edge hardware.",
  },
  {
    id: "PATH-002",
    title: "3D Reconstruction Pipeline",
    level: "ADVANCED",
    modules: 6,
    completed: 0,
    duration: "9h",
    tags: ["3DGS", "NERF", "MESH"],
    desc: "Neural radiance fields to 3D Gaussian Splatting. Build a complete reconstruction pipeline from RGB-D data.",
  },
  {
    id: "PATH-003",
    title: "ROS2 for Robotics Engineers",
    level: "BEGINNER",
    modules: 10,
    completed: 10,
    duration: "15h",
    tags: ["ROS2", "C++", "PYTHON"],
    desc: "Nodes, topics, services, actions, and lifecycle management. The definitive ROS2 foundation.",
  },
  {
    id: "PATH-004",
    title: "Visual Odometry with Python",
    level: "INTERMEDIATE",
    modules: 5,
    completed: 2,
    duration: "7h",
    tags: ["OPENCV", "PYTHON", "IMU"],
    desc: "Implement stereo and monocular VO from scratch using OpenCV. Includes IMU fusion module.",
  },
];

const LEVEL_COLOR: Record<string, string> = {
  BEGINNER: "var(--rb-green)",
  INTERMEDIATE: "var(--rb-primary)",
  ADVANCED: "var(--rb-primary-c)",
};

export default function LearnPage() {
  return (
    <AppShell>
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// LEARNING PATHS</p>
            <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Structured Curricula</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="badge">[PATHS: {PATHS.length}]</span>
            <span className="badge" style={{ color: "var(--rb-green)" }}>[1 COMPLETE]</span>
          </div>
        </div>

        {/* Progress overview */}
        <div className="p-5 mb-8 hud-panel">
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.75rem" }}>// YOUR PROGRESS</p>
          <div className="grid grid-cols-3 gap-6">
            {[["PATHS ENROLLED", "4"], ["MODULES DONE", "16/29"], ["HOURS LOGGED", "24h"]].map(([k, v]) => (
              <div key={k}>
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", marginBottom: "0.25rem" }}>{k}</p>
                <p style={{ fontFamily: "Space Grotesk", fontSize: "1.5rem", fontWeight: 700, color: "var(--rb-primary)" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Paths grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
          {PATHS.map((p) => {
            const pct = Math.round((p.completed / p.modules) * 100);
            return (
              <div key={p.id} className="p-6" style={{ background: "var(--rb-container)" }}>
                <div className="flex items-start justify-between mb-3 gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="badge">{p.id}</span>
                    <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: LEVEL_COLOR[p.level] }}>{p.level}</span>
                  </div>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>{p.duration}</span>
                </div>
                <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "1rem", color: "var(--rb-text)", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--rb-text-dim)", lineHeight: 1.55, marginBottom: "1rem" }}>{p.desc}</p>

                {/* Progress bar */}
                <div style={{ background: "var(--rb-high)", height: 3, marginBottom: "0.4rem" }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: pct === 100 ? "var(--rb-green)" : "var(--rb-primary-c)" }} />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)" }}>{p.completed}/{p.modules} MODULES</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-primary)" }}>{pct}%</span>
                </div>

                <div className="flex items-center gap-2 flex-wrap mb-4">
                  {p.tags.map(t => <span key={t} className="badge">{t}</span>)}
                </div>
                <button className="btn-primary" style={{ fontSize: "0.6rem", padding: "0.5rem 1rem" }}>
                  {pct === 100 ? "REVIEW PATH" : pct === 0 ? "START PATH" : "CONTINUE →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}

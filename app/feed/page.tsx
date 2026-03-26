"use client";
import AppShell from "../components/AppShell";

const POSTS = [
  {
    id: "POST-0041",
    user: "OPERATOR_44",
    time: "2h ago",
    title: "Stereo VO pipeline hitting 120fps on Jetson Orin — here's the stack",
    body: "After 3 months of tuning, our stereo visual odometry pipeline finally breaks 120fps on the Jetson Orin NX. Key: sparse optical flow + reduced feature count to 200 per frame.",
    tags: ["VISUAL ODOMETRY", "JETSON", "PERFORMANCE"],
    likes: 84,
    comments: 12,
  },
  {
    id: "POST-0040",
    user: "NEURAL_MECH",
    time: "5h ago",
    title: "Open-sourcing our 3D Gaussian Splatting → mesh pipeline",
    body: "We're releasing the toolchain we built to convert 3DGS captures to watertight meshes for collision detection in manipulation tasks. Includes ROS2 node.",
    tags: ["3DGS", "MESH", "ROS2", "OPEN SOURCE"],
    likes: 201,
    comments: 33,
  },
  {
    id: "POST-0039",
    user: "DEPTH_LAB",
    time: "1d ago",
    title: "Comparing MiDaS v3.1 vs DepthAnything on indoor mobile robot data",
    body: "Full benchmark across 6 indoor sequences. DepthAnything wins on generalisation but MiDaS v3.1 is still better on pure speed when running on CPU-only edge hardware.",
    tags: ["DEPTH ESTIMATION", "BENCHMARK", "EDGE AI"],
    likes: 156,
    comments: 27,
  },
];

const CHALLENGES = [
  { id: "CHAL-12", title: "Edge SLAM Challenge: <100ms Loop Closure", deadline: "12d remaining", entries: 34, prize: "OPERATOR+ ACCESS" },
  { id: "CHAL-11", title: "Best RGB-D Reconstruction of Indoor Scene", deadline: "28d remaining", entries: 19, prize: "COMPUTE CREDITS" },
];

export default function FeedPage() {
  return (
    <AppShell>
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// COMMUNITY FEED</p>
            <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Engineer Network</h1>
          </div>
          <button className="btn-primary" style={{ fontSize: "0.65rem", padding: "0.6rem 1.25rem" }}>+ NEW POST</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main feed */}
          <div className="md:col-span-2 flex flex-col gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
            {POSTS.map((p) => (
              <div key={p.id} className="p-6" style={{ background: "var(--rb-container)" }}>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div style={{ width: 28, height: 28, background: "var(--rb-primary-c)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "#5c1a00", fontWeight: 700 }}>
                      {p.user.slice(0, 2)}
                    </span>
                  </div>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--rb-primary)" }}>{p.user}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>{p.time}</span>
                  <span className="badge ml-auto">{p.id}</span>
                </div>
                <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "1rem", color: "var(--rb-text)", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ fontFamily: "Inter", fontSize: "0.82rem", color: "var(--rb-text-dim)", lineHeight: 1.6, marginBottom: "1rem" }}>{p.body}</p>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {p.tags.map(t => <span key={t} className="badge">{t}</span>)}
                </div>
                <div className="flex items-center gap-4" style={{ borderTop: "1px solid rgba(255,181,156,0.06)", paddingTop: "0.75rem" }}>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary)", cursor: "pointer" }}>▲ {p.likes}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)", cursor: "pointer" }}>◎ {p.comments} COMMENTS</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)", cursor: "pointer", marginLeft: "auto" }}>SHARE</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right sidebar — challenges */}
          <div className="flex flex-col gap-4">
            <div className="p-5" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// ACTIVE CHALLENGES</p>
              <div className="flex flex-col gap-3">
                {CHALLENGES.map(c => (
                  <div key={c.id} className="p-4 accent-left" style={{ background: "var(--rb-high)" }}>
                    <p style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.82rem", color: "var(--rb-text)", marginBottom: "0.4rem" }}>{c.title}</p>
                    <div className="flex flex-col gap-1">
                      <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-primary)" }}>{c.deadline}</span>
                      <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)" }}>{c.entries} entries</span>
                      <span className="badge" style={{ background: "rgba(245,97,38,0.12)", color: "var(--rb-primary-c)", marginTop: "0.25rem", display: "inline-block" }}>PRIZE: {c.prize}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// COMMUNITY STATS</p>
              {[["ENGINEERS", "4,214"], ["POSTS TODAY", "38"], ["OPEN PRS", "12"], ["ACTIVE REPOS", "891"]].map(([k, v]) => (
                <div key={k} className="flex justify-between mb-2">
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>{k}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary)", fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

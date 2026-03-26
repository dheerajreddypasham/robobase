"use client";
import AppShell from "../components/AppShell";

const POSTS = [
  {
    id: "POST-0148",
    user: "priya_slam",
    handle: "Priya Nair · Senior Robotics Engineer, Anybotics",
    time: "2h ago",
    title: "Stereo VO at 200fps on Jetson Orin NX — here's every optimisation we made",
    body: "After 4 months of iteration, our stereo visual odometry pipeline runs at 200fps on the Jetson Orin NX 16GB. Key wins: (1) reduced feature count from 1000 → 180 using FAST detector with adaptive threshold, (2) replaced full optical flow with Lucas-Kanade sparse tracking on pyramid level 2 only, (3) skipped IMU pre-integration on every other frame when angular rate < 0.05 rad/s. Total pipeline latency: 4.8ms end-to-end. Happy to share the param file.",
    tags: ["VISUAL ODOMETRY", "JETSON", "OPTIMISATION", "STEREO"],
    likes: 312,
    comments: 47,
  },
  {
    id: "POST-0147",
    user: "marco_diff",
    handle: "Marco Rossi · PhD Candidate, ETH Zürich ASL",
    time: "6h ago",
    title: "We open-sourced our diffusion policy for table-top manipulation — 94% task success on real Franka",
    body: "Releasing our diffusion policy training repo and 40 hours of collected demonstrations for pick-and-place on a Franka Emika Panda. We trained with DDPM (100 denoising steps, reduced to 10 at inference with DDIM). The critical insight: data augmentation via random crop + colour jitter on the wrist camera view improved real-robot generalisation from 71% → 94% without any sim data. Models and data are on RoboBase.",
    tags: ["MANIPULATION", "DIFFUSION POLICY", "FRANKA", "OPEN SOURCE"],
    likes: 541,
    comments: 83,
  },
  {
    id: "POST-0146",
    user: "depth_gang",
    handle: "Aisha Mensah · Perception Lead, Wayve",
    time: "1d ago",
    title: "DepthAnything V2 vs MiDaS 3.1 vs ZoeDepth — full indoor robot benchmark",
    body: "Ran all three models on 12 indoor robot sequences (office, warehouse, hospital corridor) with ground truth from Faro laser scanner. Results: DepthAnything V2-Large wins on AbsRel (0.042) but runs at only 12fps on CPU. MiDaS v3.1 DPT-Hybrid hits 34fps at 0.071 AbsRel — the better trade-off for battery-powered AMRs. ZoeDepth's scale-and-shift trick gives the best metric depth absolute accuracy but adds 80ms latency. Full tables in the linked repo.",
    tags: ["DEPTH ESTIMATION", "BENCHMARK", "PERCEPTION", "EDGE AI"],
    likes: 287,
    comments: 39,
  },
  {
    id: "POST-0145",
    user: "loco_lab",
    handle: "James Park · Research Scientist, Boston Dynamics AI Institute",
    time: "2d ago",
    title: "How we trained Spot to recover from unknown pushes using 4000 parallel Isaac Sim envs",
    body: "Push-recovery is a solved problem in simulation but notoriously brittle on hardware. Our approach: randomise ground friction (0.2–1.4), push magnitude (40–300N), and push duration (0.05–0.3s) during training in 4000 parallel IsaacLab environments. Key: we use a curriculum where the policy sees nominal gaits for the first 200M steps before introducing perturbations. Real Spot achieves <2% fall rate under 240N lateral pushes at 1.2 m/s — matching sim performance.",
    tags: ["LOCOMOTION", "RL", "SIM2REAL", "SPOT"],
    likes: 714,
    comments: 122,
  },
  {
    id: "POST-0144",
    user: "ros2_wizard",
    handle: "Sara Klein · Open Source Engineer, Open Robotics",
    time: "3d ago",
    title: "Nav2 Humble → Iron migration guide — what actually breaks and how to fix it",
    body: "Spent two weeks migrating a production AMR stack from ROS2 Humble to Iron. The non-obvious breakages: (1) BT Navigator now rejects plugins compiled against Humble Nav2 BT — recompile everything, (2) the default DWB critics changed and your robot will wobble until you re-tune RotateToGoal weight, (3) map_server now enforces strict YAML schema — your old map.yaml files will silently fail. Full migration checklist with test cases is in my repo.",
    tags: ["ROS2", "NAV2", "MIGRATION", "MOBILE ROBOTICS"],
    likes: 198,
    comments: 61,
  },
];

const CHALLENGES = [
  {
    id: "CHAL-22",
    title: "Sub-10cm SLAM on EuRoC MH_05",
    desc: "Achieve < 10cm RMSE ATE on EuRoC MH_05 Difficult using any open-source SLAM system. No post-processing.",
    deadline: "8d remaining",
    entries: 67,
    prize: "500 COMPUTE CREDITS + PRO ACCESS",
    tag: "SLAM",
  },
  {
    id: "CHAL-21",
    title: "Real-Robot Pick-and-Place in <3s",
    desc: "Fastest end-to-end grasp-to-place on a tabletop scene using any robot arm. Video evidence required.",
    deadline: "21d remaining",
    entries: 34,
    prize: "FEATURED PROFILE BADGE",
    tag: "MANIPULATION",
  },
  {
    id: "CHAL-20",
    title: "Lightest DepthNet for Jetson Nano",
    desc: "Most accurate monocular depth model running at 30fps+ on Jetson Nano 4GB (power-capped to 10W).",
    deadline: "34d remaining",
    entries: 19,
    prize: "JETSON ORIN NX MODULE",
    tag: "EDGE AI",
  },
];

export default function FeedPage() {
  return (
    <AppShell>
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// COMMUNITY FEED</p>
            <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Engineer Network</h1>
            <p style={{ fontFamily: "Inter", fontSize: "0.85rem", color: "var(--rb-text-dim)", marginTop: "0.4rem" }}>Technical posts, breakthroughs, and open questions from 6,800+ robotics engineers.</p>
          </div>
          <button className="btn-primary" style={{ fontSize: "0.65rem", padding: "0.6rem 1.25rem" }}>+ NEW POST</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main feed */}
          <div className="md:col-span-2 flex flex-col gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
            {POSTS.map((p) => (
              <div key={p.id} className="p-6" style={{ background: "var(--rb-container)" }}>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div style={{ width: 32, height: 32, background: "var(--rb-primary-c)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "#3a0e00", fontWeight: 700 }}>
                      {p.user.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--rb-primary)", display: "block" }}>{p.user}</span>
                    <span style={{ fontFamily: "Inter", fontSize: "0.7rem", color: "var(--rb-text-dim)" }}>{p.handle}</span>
                  </div>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", marginLeft: "auto" }}>{p.time}</span>
                </div>
                <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "1rem", color: "var(--rb-text)", marginBottom: "0.6rem", lineHeight: 1.35 }}>{p.title}</h3>
                <p style={{ fontFamily: "Inter", fontSize: "0.82rem", color: "var(--rb-text-dim)", lineHeight: 1.7, marginBottom: "1rem" }}>{p.body}</p>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {p.tags.map(t => <span key={t} className="badge" style={{ fontSize: "0.55rem" }}>{t}</span>)}
                </div>
                <div className="flex items-center gap-4" style={{ borderTop: "1px solid rgba(255,181,156,0.06)", paddingTop: "0.75rem" }}>
                  <button style={{ fontFamily: "JetBrains Mono", fontSize: "0.62rem", color: "var(--rb-primary)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>▲ {p.likes}</button>
                  <button style={{ fontFamily: "JetBrains Mono", fontSize: "0.62rem", color: "var(--rb-text-dim)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>◎ {p.comments} REPLIES</button>
                  <button style={{ fontFamily: "JetBrains Mono", fontSize: "0.62rem", color: "var(--rb-text-dim)", background: "none", border: "none", cursor: "pointer", padding: 0, marginLeft: "auto" }}>BOOKMARK</button>
                </div>
              </div>
            ))}
          </div>

          {/* Right sidebar */}
          <div className="flex flex-col gap-4">
            {/* Challenges */}
            <div className="p-5" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// ACTIVE CHALLENGES</p>
              <div className="flex flex-col gap-3">
                {CHALLENGES.map(c => (
                  <div key={c.id} className="p-4 accent-left" style={{ background: "var(--rb-high)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="badge" style={{ fontSize: "0.5rem", background: "rgba(245,97,38,0.12)", color: "var(--rb-primary-c)" }}>{c.tag}</span>
                      <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-primary)", marginLeft: "auto" }}>{c.deadline}</span>
                    </div>
                    <p style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.8rem", color: "var(--rb-text)", marginBottom: "0.35rem", lineHeight: 1.3 }}>{c.title}</p>
                    <p style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "var(--rb-text-dim)", lineHeight: 1.5, marginBottom: "0.5rem" }}>{c.desc}</p>
                    <div className="flex items-center justify-between">
                      <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)" }}>{c.entries} entries</span>
                      <span className="badge" style={{ fontSize: "0.5rem", background: "rgba(245,97,38,0.12)", color: "var(--rb-primary-c)" }}>🏆 {c.prize}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community stats */}
            <div className="p-5" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// COMMUNITY STATS</p>
              {[
                ["ENGINEERS ONLINE", "1,204"],
                ["POSTS TODAY",      "94"],
                ["NEW REPOS TODAY",  "18"],
                ["OPEN ISSUES",      "341"],
                ["PRs MERGED TODAY", "27"],
                ["ACTIVE CHALLENGES","3"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between mb-2">
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>{k}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary)", fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Suggested engineers */}
            <div className="p-5" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// SUGGESTED ENGINEERS</p>
              {[
                { handle: "slam_jin",    name: "Jin Wei",      role: "SLAM · Carnegie Mellon" },
                { handle: "arm_control", name: "Lea Dupont",   role: "Manipulation · INRIA" },
                { handle: "nav_kiran",   name: "Kiran Patel",  role: "Navigation · Zoox" },
              ].map(e => (
                <div key={e.handle} className="flex items-center gap-3 mb-3">
                  <div style={{ width: 28, height: 28, background: "var(--rb-high)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-primary-c)", fontWeight: 700 }}>{e.handle.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.78rem", color: "var(--rb-text)" }}>{e.name}</p>
                    <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)" }}>{e.role}</p>
                  </div>
                  <button className="btn-ghost" style={{ fontSize: "0.55rem", padding: "0.25rem 0.6rem", flexShrink: 0 }}>FOLLOW</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

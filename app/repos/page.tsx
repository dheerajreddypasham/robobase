"use client";
import AppShell from "../components/AppShell";
import { useState } from "react";

const ALL_REPOS = [
  { id: "REPO-001", name: "LeRobot-ACT-Policy",      author: "huggingface",     lang: "PYTHON", stars: 2841, forks: 312, updated: "3h ago",  desc: "Action Chunking Transformer policy for imitation learning on real robot arms. Supports Aloha, Koch v1.1, and custom URDF setups.", topics: ["MANIPULATION","IMITATION-LEARNING","TRANSFORMER"] },
  { id: "REPO-002", name: "Nav2-Humble-Templates",   author: "navigation-wg",   lang: "C++",    stars: 1204, forks: 198, updated: "1d ago",  desc: "Production-ready Nav2 configuration templates for indoor AMRs. Includes DWB, MPPI, and Smac Planner configs with parameter tuning guides.", topics: ["NAVIGATION","ROS2","AMR"] },
  { id: "REPO-003", name: "IsaacLab-Sim2Real",       author: "nvidia-research", lang: "PYTHON", stars: 987,  forks: 143, updated: "2d ago",  desc: "Sim-to-real transfer toolkit built on NVIDIA IsaacLab. Domain randomisation, AnyDrive locomotion policy export, and HIL testing harness.", topics: ["SIM2REAL","RL","ISAAC"] },
  { id: "REPO-004", name: "ORB-SLAM3-ROS2",          author: "slam-community",  lang: "C++",    stars: 876,  forks: 201, updated: "4d ago",  desc: "Full ROS2 wrapper for ORB-SLAM3. Supports monocular, stereo, RGB-D, and IMU-fused modes with live RViz2 map visualisation.", topics: ["SLAM","ROS2","PERCEPTION"] },
  { id: "REPO-005", name: "DiffusionPolicy-Franka",  author: "columbia-rpl",    lang: "PYTHON", stars: 743,  forks: 89,  updated: "5d ago",  desc: "Diffusion-based policy learning for Franka Emika Panda. Includes ChiLL diffusion and DDPM variants with real-robot eval scripts.", topics: ["MANIPULATION","DIFFUSION","LEARNING"] },
  { id: "REPO-006", name: "KITTI-Eval-Toolkit",      author: "perception-lab",  lang: "PYTHON", stars: 621,  forks: 134, updated: "6d ago",  desc: "Evaluation scripts for KITTI Odometry, Object Detection, and Tracking benchmarks. Supports VO, SLAM, and LiDAR pipelines.", topics: ["BENCHMARK","KITTI","EVALUATION"] },
  { id: "REPO-007", name: "ManiSkill3-Envs",         author: "haosulab",        lang: "PYTHON", stars: 558,  forks: 76,  updated: "1w ago",  desc: "GPU-parallelised manipulation environments built on ManiSkill3 + SAPIEN. 100+ tasks from tabletop to whole-body manipulation.", topics: ["MANIPULATION","SIMULATION","BENCHMARK"] },
  { id: "REPO-008", name: "Unitree-GO2-SDK",         author: "unitree-legged",  lang: "C++",    stars: 492,  forks: 98,  updated: "1w ago",  desc: "Unofficial high-level SDK for Unitree GO2 quadruped. Gait switching, sensor streaming, and ROS2 bridge with Nav2 integration.", topics: ["QUADRUPED","SDK","LOCOMOTION"] },
  { id: "REPO-009", name: "DepthAnything-ROS",       author: "depth-lab",       lang: "PYTHON", stars: 441,  forks: 62,  updated: "2w ago",  desc: "ROS2 node wrapping Depth Anything V2 for real-time monocular depth on CPU and GPU. Supports Intel RealSense D435 and ZED2.", topics: ["DEPTH","PERCEPTION","ROS2"] },
  { id: "REPO-010", name: "3DGS-Mesh-Pipeline",      author: "recon-lab",       lang: "PYTHON", stars: 387,  forks: 54,  updated: "2w ago",  desc: "Convert 3D Gaussian Splatting captures to watertight meshes for collision detection in manipulation. Includes decimation and convex decomp.", topics: ["3DGS","RECONSTRUCTION","MESH"] },
  { id: "REPO-011", name: "EuRoC-Benchmark-Suite",   author: "asl-ethz",        lang: "C++",    stars: 334,  forks: 71,  updated: "3w ago",  desc: "Complete toolchain for evaluating VIO and SLAM algorithms on the EuRoC MAV dataset. ATE, RPE, and trajectory plot generation.", topics: ["VIO","SLAM","EVALUATION"] },
  { id: "REPO-012", name: "OpenPI-Zero-Inference",   author: "physical-intel",  lang: "PYTHON", stars: 298,  forks: 41,  updated: "3w ago",  desc: "Inference-only fork of Pi Zero for edge deployment. Optimised for Jetson Orin NX with TensorRT export and sub-20ms action latency.", topics: ["VLA","EDGE-AI","INFERENCE"] },
];

const LANG_COLOR: Record<string, string> = {
  PYTHON: "rgba(245,97,38,0.18)",
  "C++":  "rgba(0,230,57,0.12)",
};

const FILTERS = ["ALL", "PYTHON", "C++", "SLAM", "MANIPULATION", "NAVIGATION", "STARRED"];

export default function ReposPage() {
  const [active, setActive] = useState("ALL");
  const filtered = ALL_REPOS.filter(r => {
    if (active === "ALL" || active === "STARRED") return true;
    if (active === "PYTHON" || active === "C++") return r.lang === active;
    return r.topics.some(t => t.includes(active));
  });

  return (
    <AppShell>
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// REPOSITORIES</p>
            <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Code & Models</h1>
            <p style={{ fontFamily: "Inter", fontSize: "0.85rem", color: "var(--rb-text-dim)", marginTop: "0.4rem" }}>Open-source robotics repositories, model weights, and datasets hosted by the community.</p>
          </div>
          <button className="btn-primary" style={{ fontSize: "0.65rem", padding: "0.6rem 1.25rem" }}>+ NEW REPO</button>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setActive(f)} style={{
              fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.08em",
              padding: "0.35rem 0.85rem",
              background: active === f ? "rgba(245,97,38,0.15)" : "var(--rb-container)",
              color: active === f ? "var(--rb-primary-c)" : "var(--rb-text-dim)",
              border: active === f ? "1px solid rgba(245,97,38,0.3)" : "1px solid rgba(255,181,156,0.1)",
              cursor: "pointer", transition: "all 0.1s",
            }}>{f}</button>
          ))}
          <span className="ml-auto badge">[{filtered.length} REPOS]</span>
        </div>

        <div className="flex flex-col gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
          {filtered.map((r) => (
            <div key={r.id} className="p-5 flex items-start gap-4" style={{ background: "var(--rb-container)", transition: "background 0.12s", cursor: "pointer" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--rb-high)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--rb-container)"; }}>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.62rem", color: "var(--rb-text-dim)" }}>{r.author}</span>
                  <span style={{ color: "var(--rb-text-dim)", fontSize: "0.7rem" }}>/</span>
                  <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.95rem", color: "var(--rb-primary)" }}>{r.name}</h3>
                  <span className="badge" style={{ background: LANG_COLOR[r.lang] }}>{r.lang}</span>
                  <span className="badge ml-auto" style={{ opacity: 0.5, fontSize: "0.5rem" }}>{r.id}</span>
                </div>
                <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--rb-text-dim)", lineHeight: 1.55, marginBottom: "0.75rem" }}>{r.desc}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {r.topics.map(t => <span key={t} className="badge" style={{ fontSize: "0.52rem", opacity: 0.7 }}>{t}</span>)}
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary)", marginLeft: "auto" }}>★ {r.stars.toLocaleString()}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>⑂ {r.forks}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>↻ {r.updated}</span>
                </div>
              </div>
              <button className="btn-ghost" style={{ fontSize: "0.6rem", padding: "0.4rem 0.9rem", whiteSpace: "nowrap", flexShrink: 0 }}>OPEN →</button>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

"use client";
import { useState } from "react";
import AppShell from "../components/AppShell";

const ALL_RESULTS = [
  { type: "REPO",    title: "LeRobot-ACT-Policy",         author: "huggingface",    stars: 2841, desc: "Action Chunking Transformer for imitation learning on robot arms. Supports Aloha, Koch v1.1.",      tags: ["MANIPULATION","TRANSFORMER","PYTHON"],    score: 0.98 },
  { type: "REPO",    title: "ORB-SLAM3-ROS2",              author: "slam-community",  stars: 876,  desc: "Full ROS2 wrapper for ORB-SLAM3. Monocular, stereo, RGB-D, and IMU-fused with live RViz2.",         tags: ["SLAM","ROS2","C++"],                       score: 0.95 },
  { type: "REPO",    title: "Nav2-Humble-Templates",       author: "navigation-wg",   stars: 1204, desc: "Production-ready Nav2 configs for indoor AMRs. DWB, MPPI, and Smac Planner with tuning guides.",   tags: ["NAVIGATION","ROS2","AMR"],                 score: 0.92 },
  { type: "DATASET", title: "EuRoC MAV Dataset",           author: "asl-ethz",        stars: 1840, desc: "11 sequences recorded in an industrial machine hall and a Vicon room. Ground truth from Leica.",    tags: ["SLAM","VIO","BENCHMARK"],                  score: 0.90 },
  { type: "MODEL",   title: "DepthAnything-V2-Large",      author: "depth-anything",  stars: 3210, desc: "General-purpose monocular depth estimation. State-of-the-art on NYUv2, KITTI, and ScanNet.",       tags: ["DEPTH","PERCEPTION","PYTHON"],             score: 0.89 },
  { type: "POST",    title: "Stereo VO at 200fps on Jetson Orin NX", author: "priya_slam", stars: 312, desc: "Every optimisation made to hit 200fps on Orin NX: FAST detector, LK sparse tracking, IMU gating.", tags: ["VISUAL ODOMETRY","JETSON","EDGE"],        score: 0.87 },
  { type: "PATH",    title: "Visual SLAM: Zero to Production", author: "robobase-edu", stars: 0,   desc: "14-hour learning path from camera calibration to production SLAM on edge hardware.",               tags: ["SLAM","LEARNING","ROS2"],                  score: 0.85 },
  { type: "REPO",    title: "DiffusionPolicy-Franka",      author: "columbia-rpl",    stars: 743,  desc: "Diffusion-based policy learning for Franka Panda. DDPM and DDIM with real-robot eval scripts.",     tags: ["MANIPULATION","DIFFUSION","FRANKA"],       score: 0.83 },
];

const TYPE_COLOR: Record<string, string> = {
  REPO:    "rgba(245,97,38,0.15)",
  DATASET: "rgba(0,230,57,0.1)",
  MODEL:   "rgba(100,150,255,0.15)",
  POST:    "rgba(255,181,156,0.1)",
  PATH:    "rgba(245,97,38,0.08)",
};

const FILTERS = ["ALL", "REPO", "MODEL", "DATASET", "POST", "PATH"];

export default function SearchPage() {
  const [query, setQuery]   = useState("");
  const [filter, setFilter] = useState("ALL");

  const results = ALL_RESULTS.filter(r => {
    const matchType  = filter === "ALL" || r.type === filter;
    const matchQuery = !query || r.title.toLowerCase().includes(query.toLowerCase()) || r.desc.toLowerCase().includes(query.toLowerCase()) || r.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
    return matchType && matchQuery;
  });

  return (
    <AppShell>
      <div className="p-8">
        <div className="mb-8">
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// SEMANTIC SEARCH</p>
          <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)", marginBottom: "0.4rem" }}>Search RoboBase</h1>
          <p style={{ fontFamily: "Inter", fontSize: "0.85rem", color: "var(--rb-text-dim)" }}>Search across 3,200+ repos, 18k+ model weights, datasets, posts, and learning paths.</p>
        </div>

        {/* Search input */}
        <div className="relative mb-6">
          <span style={{ position: "absolute", left: "1.1rem", top: "50%", transform: "translateY(-50%)", fontFamily: "JetBrains Mono", fontSize: "0.7rem", color: "var(--rb-text-dim)" }}>⌕</span>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="e.g. stereo visual odometry ROS2, diffusion policy manipulation, depth estimation edge..."
            style={{
              width: "100%", padding: "0.9rem 1rem 0.9rem 2.5rem",
              background: "var(--rb-container)", border: "1px solid rgba(255,181,156,0.12)",
              color: "var(--rb-text)", fontFamily: "Inter", fontSize: "0.9rem",
              outline: "none", boxSizing: "border-box",
            }}
            onFocus={e => { e.target.style.borderColor = "rgba(245,97,38,0.4)"; }}
            onBlur={e => { e.target.style.borderColor = "rgba(255,181,156,0.12)"; }}
          />
          <span style={{ position: "absolute", right: "1.1rem", top: "50%", transform: "translateY(-50%)", fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)" }}>AI-POWERED</span>
        </div>

        {/* Type filters */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.08em",
              padding: "0.35rem 0.85rem",
              background: filter === f ? "rgba(245,97,38,0.15)" : "var(--rb-container)",
              color: filter === f ? "var(--rb-primary-c)" : "var(--rb-text-dim)",
              border: filter === f ? "1px solid rgba(245,97,38,0.3)" : "1px solid rgba(255,181,156,0.1)",
              cursor: "pointer",
            }}>{f}</button>
          ))}
          <span className="ml-auto badge">[{results.length} RESULTS]</span>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
          {results.map((r, i) => (
            <div key={i} className="p-5 flex items-start gap-5" style={{ background: "var(--rb-container)", cursor: "pointer", transition: "background 0.1s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--rb-high)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--rb-container)"; }}>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="badge" style={{ background: TYPE_COLOR[r.type], fontSize: "0.52rem" }}>{r.type}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>{r.author}</span>
                  <span style={{ color: "var(--rb-text-dim)" }}>/</span>
                  <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.95rem", color: "var(--rb-primary)" }}>{r.title}</h3>
                  {r.stars > 0 && <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary)", marginLeft: "auto" }}>★ {r.stars.toLocaleString()}</span>}
                </div>
                <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--rb-text-dim)", lineHeight: 1.55, marginBottom: "0.6rem" }}>{r.desc}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {r.tags.map(t => <span key={t} className="badge" style={{ fontSize: "0.52rem" }}>{t}</span>)}
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)", marginLeft: "auto" }}>
                    MATCH: {Math.round(r.score * 100)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
          {results.length === 0 && (
            <div className="p-10 text-center" style={{ background: "var(--rb-container)" }}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--rb-text-dim)" }}>NO RESULTS FOR "{query}" — TRY DIFFERENT KEYWORDS</p>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}

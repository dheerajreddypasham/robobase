"use client";
import { useState } from "react";
import AppShell from "../components/AppShell";

const RESULTS = [
  { id: "RES-001", type: "PAPER", title: "ORB-SLAM3: An Accurate Open-Source Library for Visual, Visual-Inertial and Multimap SLAM", authors: "Campos et al. · IEEE T-RO 2021", tags: ["SLAM", "VISUAL ODOMETRY", "IMU"], score: 0.97 },
  { id: "RES-002", type: "REPO",  title: "VO-Python-Starter: Visual Odometry Pipeline in Python", authors: "OPERATOR_01 · RoboBase · 142 stars", tags: ["PYTHON", "OPENCV", "DEPTH"], score: 0.94 },
  { id: "RES-003", type: "PAPER", title: "LOAM: Lidar Odometry and Mapping in Real-time", authors: "Zhang & Singh · RSS 2014", tags: ["LIDAR", "MAPPING", "SLAM"], score: 0.91 },
  { id: "RES-004", type: "DATASET", title: "TUM RGB-D Benchmark: SLAM Evaluation Sequences", authors: "TU Munich · 2.4GB · 39 sequences", tags: ["RGB-D", "BENCHMARK", "EVALUATION"], score: 0.88 },
  { id: "RES-005", type: "PAPER", title: "Depth Estimation via Affine Invariant Moir?? Patterns", authors: "Ranftl et al. · NeurIPS 2021", tags: ["DEPTH", "MONOCULAR", "INFERENCE"], score: 0.85 },
];

const TYPE_COLOR: Record<string, string> = {
  PAPER:   "rgba(245,97,38,0.15)",
  REPO:    "rgba(0,230,57,0.1)",
  DATASET: "rgba(255,181,156,0.1)",
};

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <AppShell>
      <div className="p-8">
        <div className="mb-8">
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// AI SEARCH ENGINE</p>
          <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)", marginBottom: "0.25rem" }}>Visual Odometry Engine</h1>
          <p style={{ fontFamily: "Inter", fontSize: "0.85rem", color: "var(--rb-text-dim)" }}>Semantic search across 10,000+ papers, repos, and datasets.</p>
        </div>

        {/* Search input */}
        <div className="flex gap-0 mb-8">
          <input value={query} onChange={e => setQuery(e.target.value)}
            placeholder="e.g. visual odometry with IMU fusion..."
            style={{
              flex: 1,
              background: "var(--rb-container)",
              border: "none",
              borderBottom: "2px solid var(--rb-primary-c)",
              color: "var(--rb-text)",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.85rem",
              padding: "0.85rem 1rem",
              outline: "none",
            }} />
          <button className="btn-primary" style={{ padding: "0.85rem 2rem" }}>SEARCH</button>
        </div>

        {/* Filter chips */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {["ALL", "PAPERS", "REPOS", "DATASETS", "MODELS"].map((f) => (
            <button key={f} style={{
              fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.08em",
              padding: "0.3rem 0.75rem",
              background: f === "ALL" ? "rgba(245,97,38,0.15)" : "var(--rb-container)",
              color: f === "ALL" ? "var(--rb-primary-c)" : "var(--rb-text-dim)",
              border: f === "ALL" ? "1px solid rgba(245,97,38,0.3)" : "1px solid rgba(255,181,156,0.1)",
              cursor: "pointer",
            }}>{f}</button>
          ))}
          <span className="ml-auto badge">[RESULTS: {RESULTS.length}]</span>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
          {RESULTS.map((r) => (
            <div key={r.id} className="p-5 flex items-start gap-5" style={{ background: "var(--rb-container)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--rb-high)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--rb-container)"; }}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="badge" style={{ background: TYPE_COLOR[r.type] ?? "var(--rb-container)", color: "var(--rb-primary)" }}>{r.type}</span>
                  <span className="mono" style={{ fontSize: "0.6rem", color: "var(--rb-text-dim)" }}>[{r.id}]</span>
                </div>
                <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.95rem", color: "var(--rb-text)", marginBottom: "0.3rem" }}>{r.title}</h3>
                <p style={{ fontFamily: "Inter", fontSize: "0.75rem", color: "var(--rb-text-dim)", marginBottom: "0.75rem" }}>{r.authors}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {r.tags.map(t => <span key={t} className="badge">{t}</span>)}
                </div>
              </div>
              <div className="text-right shrink-0">
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "1rem", fontWeight: 700, color: "var(--rb-primary)" }}>{(r.score * 100).toFixed(0)}%</p>
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)" }}>MATCH</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

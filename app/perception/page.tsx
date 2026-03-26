import AppShell from "../components/AppShell";

const BENCHMARKS = [
  {
    category: "VISUAL ODOMETRY — KITTI ODOMETRY SEQ 00–10",
    datasets: "KITTI",
    models: [
      { name: "ORB-SLAM3 (Stereo+IMU)", ate: "0.42m",  rpe: "0.012°/m", fps: "28",  hardware: "i7-12700 CPU",    score: 97 },
      { name: "DROID-SLAM",             ate: "0.61m",  rpe: "0.018°/m", fps: "12",  hardware: "RTX 3090",        score: 92 },
      { name: "stereo-vo-orin ★",       ate: "0.74m",  rpe: "0.021°/m", fps: "200", hardware: "Jetson Orin NX",  score: 88 },
      { name: "VINS-Fusion",            ate: "0.88m",  rpe: "0.025°/m", fps: "45",  hardware: "i7-12700 CPU",    score: 84 },
      { name: "Kimera-VIO",             ate: "1.02m",  rpe: "0.031°/m", fps: "38",  hardware: "i7-12700 CPU",    score: 79 },
    ],
  },
  {
    category: "MONOCULAR DEPTH — NYUv2 + ScanNet",
    datasets: "NYUv2 / ScanNet",
    models: [
      { name: "Depth Anything V2-Large", ate: "0.042",  rpe: "0.118",   fps: "12",  hardware: "RTX 3090",        score: 96 },
      { name: "ZoeDepth",               ate: "0.048",  rpe: "0.131",   fps: "18",  hardware: "RTX 3090",        score: 93 },
      { name: "MiDaS v3.1 DPT-Hybrid",  ate: "0.071",  rpe: "0.182",   fps: "34",  hardware: "RTX 3090",        score: 87 },
      { name: "MiDaS v3.1 MiDaS-Small", ate: "0.089",  rpe: "0.224",   fps: "91",  hardware: "Jetson Orin NX",  score: 78 },
      { name: "depth-anything-ros2 ★",  ate: "0.044",  rpe: "0.122",   fps: "28",  hardware: "RTX 3090",        score: 95 },
    ],
  },
];

const SENSORS = [
  { name: "Intel RealSense D435i", type: "RGB-D + IMU", range: "0.2–10m",   res: "1280×720 @ 30fps", latency: "33ms",  status: "ACTIVE" },
  { name: "ZED 2i Stereo Camera",  type: "STEREO + IMU", range: "0.3–20m",  res: "2208×1242 @ 15fps", latency: "67ms", status: "ACTIVE" },
  { name: "Velodyne VLP-16",       type: "3D LiDAR",    range: "0.5–100m",  res: "16-beam 360°",      latency: "100ms", status: "STANDBY" },
  { name: "Ouster OS1-64",         type: "3D LiDAR",    range: "0.3–120m",  res: "64-beam 360°",      latency: "100ms", status: "STANDBY" },
  { name: "LORD MicroStrain 3DM",  type: "IMU",         range: "±8g / ±300°/s", res: "1000Hz",       latency: "1ms",   status: "ACTIVE" },
];

export default function PerceptionPage() {
  return (
    <AppShell>
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// PERCEPTION HUB</p>
            <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Benchmarks & Sensors</h1>
            <p style={{ fontFamily: "Inter", fontSize: "0.85rem", color: "var(--rb-text-dim)", marginTop: "0.4rem" }}>Community leaderboards for VO, SLAM, depth estimation, and detection. ★ = your submission.</p>
          </div>
          <button className="btn-primary" style={{ fontSize: "0.65rem", padding: "0.6rem 1.25rem" }}>+ SUBMIT RESULT</button>
        </div>

        {/* Sensor array */}
        <div className="mb-8">
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// CONNECTED SENSOR ARRAY</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
            {SENSORS.map((s) => (
              <div key={s.name} className="p-4" style={{ background: "var(--rb-container)" }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="badge" style={{ fontSize: "0.5rem", background: "rgba(245,97,38,0.1)", color: "var(--rb-primary-c)" }}>{s.type}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: s.status === "ACTIVE" ? "var(--rb-green)" : "var(--rb-text-dim)" }}>● {s.status}</span>
                </div>
                <p style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.78rem", color: "var(--rb-text)", marginBottom: "0.5rem", lineHeight: 1.3 }}>{s.name}</p>
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", lineHeight: 1.7 }}>
                  {s.range}<br />{s.res}<br />lat: {s.latency}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benchmark tables */}
        {BENCHMARKS.map((b) => (
          <div key={b.category} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)" }}>// {b.category}</p>
              <span className="badge" style={{ fontSize: "0.5rem" }}>{b.datasets}</span>
            </div>
            <div style={{ background: "var(--rb-container)", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,181,156,0.1)" }}>
                    {["RANK", "MODEL", "ATE ↓", "RPE ↓", "FPS ↑", "HARDWARE", "SCORE"].map(h => (
                      <th key={h} style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", padding: "0.75rem 1rem", textAlign: "left", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.models.map((m, i) => (
                    <tr key={m.name} style={{ borderBottom: "1px solid rgba(255,181,156,0.04)", background: m.name.includes("★") ? "rgba(245,97,38,0.05)" : "transparent" }}>
                      <td style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: i === 0 ? "var(--rb-primary)" : "var(--rb-text-dim)", padding: "0.75rem 1rem", fontWeight: i === 0 ? 700 : 400 }}>#{i+1}</td>
                      <td style={{ fontFamily: "Space Grotesk", fontWeight: 500, fontSize: "0.82rem", color: m.name.includes("★") ? "var(--rb-primary-c)" : "var(--rb-text)", padding: "0.75rem 1rem", whiteSpace: "nowrap" }}>{m.name}</td>
                      <td style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--rb-text)", padding: "0.75rem 1rem" }}>{m.ate}</td>
                      <td style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--rb-text)", padding: "0.75rem 1rem" }}>{m.rpe}</td>
                      <td style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--rb-text)", padding: "0.75rem 1rem" }}>{m.fps}</td>
                      <td style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)", padding: "0.75rem 1rem", whiteSpace: "nowrap" }}>{m.hardware}</td>
                      <td style={{ padding: "0.75rem 1rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <div style={{ width: 60, height: 4, background: "var(--rb-high)" }}>
                            <div style={{ width: `${m.score}%`, height: "100%", background: i === 0 ? "var(--rb-green)" : "var(--rb-primary-c)" }} />
                          </div>
                          <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-primary)", fontWeight: 700 }}>{m.score}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

import AppShell from "../components/AppShell";

const SENSORS = [
  { id: "CAM-01", type: "STEREO RGB", model: "Intel RealSense D435", status: "ACTIVE",  fps: "30fps",   res: "1280×720" },
  { id: "CAM-02", type: "DEPTH",      model: "Intel RealSense D435", status: "ACTIVE",  fps: "30fps",   res: "1280×720" },
  { id: "IMU-01", type: "IMU",        model: "BMI085 6-DOF",         status: "ACTIVE",  fps: "400Hz",   res: "—" },
  { id: "LID-01", type: "LIDAR",      model: "Ouster OS1-128",       status: "STANDBY", fps: "20Hz",    res: "128 lines" },
];

const BENCHMARKS = [
  { name: "ORB-SLAM3 (Mono)",         ate: "0.012m", rte: "0.004m", hz: "31.2", status: "PASS" },
  { name: "LOAM (LiDAR)",             ate: "0.008m", rte: "0.003m", hz: "19.8", status: "PASS" },
  { name: "MiDaS v3.1 (Depth)",       ate: "—",      rte: "—",      hz: "24.1", status: "PASS" },
  { name: "DepthAnything (Depth)",     ate: "—",      rte: "—",      hz: "18.4", status: "PASS" },
  { name: "3DGS Reconstruction",       ate: "0.021m", rte: "0.009m", hz: "0.3",  status: "WARN" },
];

export default function PerceptionPage() {
  return (
    <AppShell>
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// PERCEPTION HUB</p>
            <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Sensor & Algorithm Monitor</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="badge" style={{ color: "var(--rb-green)" }}>● 3 ACTIVE SENSORS</span>
            <span className="badge">[SESSION: LIVE]</span>
          </div>
        </div>

        {/* Sensor grid */}
        <div className="mb-8">
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// SENSOR ARRAY</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
            {SENSORS.map((s) => (
              <div key={s.id} className="p-4" style={{ background: "var(--rb-container)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="badge">{s.id}</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: s.status === "ACTIVE" ? "var(--rb-green)" : "var(--rb-text-dim)" }}>
                    ● {s.status}
                  </span>
                </div>
                <p style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.8rem", color: "var(--rb-text)", marginBottom: "0.25rem" }}>{s.type}</p>
                <p style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "var(--rb-text-dim)", marginBottom: "0.5rem" }}>{s.model}</p>
                <div className="flex items-center gap-2">
                  <span className="badge">{s.fps}</span>
                  {s.res !== "—" && <span className="badge">{s.res}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live visualization placeholder */}
        <div className="mb-8 hud-panel" style={{ padding: "1.5rem", minHeight: 220, position: "relative", overflow: "hidden" }}>
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// LIVE ODOMETRY TRAJECTORY</p>
          {/* Grid lines */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,181,156,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,181,156,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="flex items-center justify-center h-36 relative">
            <svg width="320" height="120" viewBox="0 0 320 120">
              <polyline points="0,80 30,70 60,55 90,60 120,45 150,50 180,35 210,40 240,28 270,32 300,20 320,18"
                fill="none" stroke="#f56126" strokeWidth="2" strokeLinecap="round" />
              <circle cx="320" cy="18" r="4" fill="#f56126" />
              {[0, 60, 120, 180, 240, 300].map(x => (
                <line key={x} x1={x} y1="0" x2={x} y2="120" stroke="rgba(255,181,156,0.06)" strokeWidth="1" />
              ))}
            </svg>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="badge">[X: 3.24m]</span>
            <span className="badge">[Y: 1.08m]</span>
            <span className="badge">[Z: 0.42m]</span>
            <span className="badge" style={{ color: "var(--rb-green)" }}>[DRIFT: 0.012m]</span>
          </div>
        </div>

        {/* Benchmarks */}
        <div>
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "1rem" }}>// ALGORITHM BENCHMARKS</p>
          <div style={{ background: "var(--rb-container)" }}>
            {/* Header */}
            <div className="grid grid-cols-5 gap-0 px-4 py-2" style={{ borderBottom: "1px solid rgba(255,181,156,0.06)" }}>
              {["ALGORITHM", "ATE", "RTE", "HZ", "STATUS"].map(h => (
                <span key={h} style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", letterSpacing: "0.08em", color: "var(--rb-text-dim)" }}>{h}</span>
              ))}
            </div>
            {BENCHMARKS.map((b) => (
              <div key={b.name} className="grid grid-cols-5 gap-0 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,181,156,0.04)" }}>
                <span style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--rb-text)" }}>{b.name}</span>
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.75rem", color: "var(--rb-primary)" }}>{b.ate}</span>
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.75rem", color: "var(--rb-primary)" }}>{b.rte}</span>
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.75rem", color: "var(--rb-text-dim)" }}>{b.hz}</span>
                <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: b.status === "PASS" ? "var(--rb-green)" : "var(--rb-primary-c)" }}>● {b.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

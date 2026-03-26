export default function Statusbar() {
  return (
    <footer style={{ background: "var(--rb-low)", borderTop: "1px solid rgba(255,181,156,0.06)" }}
      className="px-6 py-1.5 flex items-center gap-4 shrink-0">
      <span className="mono text-xs" style={{ color: "var(--rb-text-dim)", fontSize: "0.6rem", letterSpacing: "0.05em" }}>
        <span className="led-green">●</span> SYS: OPERATIONAL
      </span>
      <span className="mono" style={{ color: "var(--rb-text-dim)", fontSize: "0.6rem" }}>NODES: 142 ACTIVE</span>
      <span className="mono" style={{ color: "var(--rb-text-dim)", fontSize: "0.6rem" }}>UPTIME: 99.97%</span>
      <span className="mono" style={{ color: "var(--rb-text-dim)", fontSize: "0.6rem" }}>VERSION: 2.1.0</span>
      <span className="mono ml-auto" style={{ color: "var(--rb-outline-v)", fontSize: "0.6rem" }}>
        © 2026 ROBOBASE ENGINEERING
      </span>
    </footer>
  );
}

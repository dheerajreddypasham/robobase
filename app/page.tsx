"use client";
import Link from "next/link";
import Topbar from "./components/Topbar";
import Statusbar from "./components/Statusbar";

const STATS = [
  { label: "ENGINEERS",      value: "6,800+", unit: "REGISTERED" },
  { label: "REPOSITORIES",   value: "3,200+", unit: "PUBLIC" },
  { label: "MODELS INDEXED", value: "18,400", unit: "WEIGHTS & CHECKPOINTS" },
  { label: "DATASETS",       value: "940+",   unit: "CONTRIBUTED" },
];

const FEATURES = [
  {
    tag: "CODE & MODELS",
    title: "Host, Version &\nShare Robot Code",
    desc: "Git-backed repositories for robot stacks, ROS2 packages, SLAM pipelines, and pre-trained model weights. Fork, branch, and diff — purpose-built for robotics workflows.",
    href: "/repos",
  },
  {
    tag: "LEARNING PATHS",
    title: "From ROS2 Basics\nto Production SLAM",
    desc: "Structured curricula built by practising engineers at Boston Dynamics, Toyota Research, and Anybotics. Cover manipulation, navigation, perception, and sim-to-real transfer.",
    href: "/learn",
  },
  {
    tag: "PERCEPTION HUB",
    title: "Benchmark Your\nPerception Stack",
    desc: "Run your visual odometry, depth estimation, or object detection model against KITTI, TUM, EuRoC, and ScanNet. Compare against community leaderboards in real time.",
    href: "/perception",
  },
  {
    tag: "COMMUNITY",
    title: "4,200+ Robotics\nEngineers Online",
    desc: "Ask questions, share breakthroughs, post benchmarks. Weekly challenges with compute credits. Active channels for manipulation, mobile robotics, and aerial systems.",
    href: "/feed",
  },
];

const TRENDING = [
  { name: "LeRobot-ACT-Policy",    author: "huggingface",    stars: 2841, lang: "PYTHON", desc: "Action Chunking Transformer for imitation learning on real robot arms" },
  { name: "Nav2-Humble-Templates", author: "navigation-wg",  stars: 1204, lang: "C++",    desc: "Production-ready Nav2 configuration templates for indoor mobile robots" },
  { name: "IsaacLab-Sim2Real",     author: "nvidia-research", stars: 987,  lang: "PYTHON", desc: "Sim-to-real transfer toolkit built on Isaac Sim + IsaacLab framework" },
];

const USEDBY = [
  "Boston Dynamics", "Toyota Research", "Anybotics", "Unitree", "Agility Robotics", "KUKA", "Universal Robots", "Franka Emika",
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--rb-base)" }}>
      <Topbar />

      {/* HERO */}
      <section className="relative flex flex-col justify-center px-12 md:px-20 py-28 overflow-hidden" style={{ minHeight: "90vh" }}>
        <div className="absolute inset-0 pointer-events-none flex items-center justify-end pr-12" style={{ opacity: 0.04 }}>
          <svg width="520" height="720" viewBox="0 0 520 720" fill="none">
            <circle cx="260" cy="640" r="70" stroke="white" strokeWidth="1.2"/>
            <circle cx="260" cy="640" r="46" stroke="white" strokeWidth="0.6"/>
            <line x1="260" y1="570" x2="195" y2="420" stroke="white" strokeWidth="1.2"/>
            <circle cx="195" cy="420" r="30" stroke="white" strokeWidth="1.2"/>
            <line x1="195" y1="390" x2="145" y2="265" stroke="white" strokeWidth="1.2"/>
            <circle cx="145" cy="265" r="24" stroke="white" strokeWidth="1.2"/>
            <line x1="145" y1="241" x2="175" y2="138" stroke="white" strokeWidth="1"/>
            <circle cx="175" cy="138" r="20" stroke="white" strokeWidth="1"/>
            <line x1="175" y1="118" x2="155" y2="50" stroke="white" strokeWidth="0.8"/>
            <circle cx="155" cy="50" r="15" stroke="white" strokeWidth="0.8"/>
            {[...Array(14)].map((_, i) => (
              <line key={i} x1={120 + i * 20} y1="690" x2={120 + i * 20} y2="675" stroke="white" strokeWidth="0.5"/>
            ))}
            {[...Array(6)].map((_, i) => (
              <rect key={i} x={130 + i * 44} y={700} width="10" height="10" stroke="white" strokeWidth="0.5" fill="none"/>
            ))}
            <text x="210" y="400" fill="white" fontSize="7" fontFamily="monospace">θ₁=34.2°</text>
            <text x="160" y="255" fill="white" fontSize="7" fontFamily="monospace">θ₂=12.8°</text>
            <text x="185" y="128" fill="white" fontSize="7" fontFamily="monospace">θ₃=−22.4°</text>
          </svg>
        </div>

        <div className="relative max-w-3xl">
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <span className="badge">PLATFORM v2.4.1</span>
            <span className="badge" style={{ background: "rgba(245,97,38,0.15)", color: "var(--rb-primary-c)" }}>OPEN BETA</span>
            <span className="badge" style={{ color: "var(--rb-green)" }}>● ALL SYSTEMS OPERATIONAL</span>
          </div>

          <h1 style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "clamp(2.8rem, 6vw, 4.8rem)", lineHeight: 1.04, color: "var(--rb-text)", letterSpacing: "-0.025em", marginBottom: "1.75rem" }}>
            GitHub for<br />
            <span style={{ background: "linear-gradient(90deg,#ffb59c,#f56126)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Robotics Engineers
            </span>
          </h1>

          <p style={{ fontFamily: "Inter", fontSize: "1.05rem", color: "var(--rb-text-dim)", maxWidth: 560, lineHeight: 1.75, marginBottom: "2.75rem" }}>
            RoboBase is the open platform where robotics engineers host code, share pre-trained models,
            run perception benchmarks, and collaborate on the hardest problems in embodied AI —
            from hobbyist arms to production-grade AMRs.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/login" className="btn-primary">GET STARTED FREE →</Link>
            <Link href="/repos" className="btn-ghost">BROWSE REPOSITORIES</Link>
          </div>

          <div className="flex items-center gap-2 mt-10 flex-wrap">
            <span className="badge">[6,800+ ENGINEERS]</span>
            <span className="badge">[3,200+ REPOS]</span>
            <span className="badge">[18K+ MODEL WEIGHTS]</span>
            <span className="badge" style={{ color: "var(--rb-green)" }}>[NO CREDIT CARD REQUIRED]</span>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: "var(--rb-container)", borderTop: "1px solid rgba(255,181,156,0.08)", borderBottom: "1px solid rgba(255,181,156,0.08)" }}
        className="grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={s.label} className="px-8 py-7" style={{ borderRight: i < 3 ? "1px solid rgba(255,181,156,0.06)" : "none" }}>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-text-dim)", marginBottom: "0.4rem" }}>{s.label}</p>
            <p style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "1.9rem", color: "var(--rb-primary)", lineHeight: 1 }}>{s.value}</p>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.55rem", color: "var(--rb-text-dim)", marginTop: "0.3rem", letterSpacing: "0.06em" }}>{s.unit}</p>
          </div>
        ))}
      </section>

      {/* PLATFORM MODULES */}
      <section className="px-12 md:px-20 py-24" style={{ background: "var(--rb-base)" }}>
        <div className="mb-14">
          <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--rb-primary-c)", marginBottom: "0.5rem" }}>// WHAT YOU CAN DO</p>
          <h2 style={{ fontFamily: "Space Grotesk", fontSize: "2.25rem", fontWeight: 700, color: "var(--rb-text)", maxWidth: 480, lineHeight: 1.2 }}>One platform. Every tool a robotics engineer needs.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1px", background: "rgba(255,181,156,0.06)" }}>
          {FEATURES.map((f) => (
            <Link key={f.href} href={f.href} style={{ textDecoration: "none", display: "block" }}>
              <div className="p-10 h-full" style={{ background: "var(--rb-container)", transition: "background 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--rb-high)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--rb-container)"; }}>
                <span className="badge" style={{ marginBottom: "1.25rem", display: "inline-block", background: "rgba(245,97,38,0.12)", color: "var(--rb-primary-c)" }}>{f.tag}</span>
                <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "1.35rem", color: "var(--rb-text)", lineHeight: 1.25, marginBottom: "0.85rem", whiteSpace: "pre-line" }}>{f.title}</h3>
                <p style={{ fontFamily: "Inter", fontSize: "0.88rem", color: "var(--rb-text-dim)", lineHeight: 1.7 }}>{f.desc}</p>
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--rb-primary-c)", marginTop: "1.75rem", letterSpacing: "0.08em" }}>EXPLORE →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRENDING REPOS */}
      <section className="px-12 md:px-20 py-20" style={{ background: "var(--rb-container)", borderTop: "1px solid rgba(255,181,156,0.06)" }}>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--rb-primary-c)", marginBottom: "0.5rem" }}>// TRENDING THIS WEEK</p>
            <h2 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Hot Repositories</h2>
          </div>
          <Link href="/repos" style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--rb-primary-c)", textDecoration: "none", letterSpacing: "0.08em" }}>VIEW ALL →</Link>
        </div>
        <div className="flex flex-col gap-px" style={{ background: "rgba(255,181,156,0.06)" }}>
          {TRENDING.map((r) => (
            <div key={r.name} className="p-6 flex items-center gap-6" style={{ background: "var(--rb-base)" }}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--rb-text-dim)" }}>{r.author}</span>
                  <span style={{ color: "var(--rb-text-dim)" }}>/</span>
                  <span style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.95rem", color: "var(--rb-primary)" }}>{r.name}</span>
                  <span className="badge" style={{ fontSize: "0.55rem" }}>{r.lang}</span>
                </div>
                <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--rb-text-dim)" }}>{r.desc}</p>
              </div>
              <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--rb-primary)", fontWeight: 700, whiteSpace: "nowrap" }}>★ {r.stars.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* USED BY */}
      <section className="px-12 md:px-20 py-16" style={{ background: "var(--rb-base)", borderTop: "1px solid rgba(255,181,156,0.06)" }}>
        <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--rb-text-dim)", marginBottom: "2rem", textAlign: "center" }}>TRUSTED BY ENGINEERS AT</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {USEDBY.map(name => (
            <span key={name} style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "0.85rem", color: "var(--rb-text-dim)", letterSpacing: "0.04em", opacity: 0.45 }}>{name}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-12 md:px-20 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ background: "var(--rb-container)", borderTop: "1px solid rgba(255,181,156,0.08)" }}>
        <div>
          <h2 style={{ fontFamily: "Space Grotesk", fontSize: "2rem", fontWeight: 700, color: "var(--rb-text)", marginBottom: "0.6rem" }}>Start building today.</h2>
          <p style={{ fontFamily: "Inter", fontSize: "0.9rem", color: "var(--rb-text-dim)", maxWidth: 420, lineHeight: 1.65 }}>Free for open-source robotics projects. Pro plans for teams needing private repos, compute credits, and priority benchmark queues.</p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link href="/login" className="btn-primary">CREATE FREE ACCOUNT →</Link>
          <Link href="/learn" className="btn-ghost">EXPLORE LEARNING PATHS</Link>
        </div>
      </section>

      <Statusbar />
    </div>
  );
}

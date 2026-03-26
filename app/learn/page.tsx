import AppShell from "../components/AppShell";

const PATHS = [
  {
    id: "PATH-001",
    title: "Visual SLAM: Zero to Production",
    level: "INTERMEDIATE",
    modules: 9,
    completed: 4,
    duration: "14h",
    instructor: "Dr. Raul Mur-Artal (ORB-SLAM author)",
    tags: ["SLAM", "ROS2", "PYTHON", "KITTI"],
    desc: "From camera calibration and feature extraction to full loop-closure SLAM deployable on edge hardware. Covers ORB-SLAM3, RTAB-Map, and LiDAR-visual fusion. Includes KITTI and EuRoC evaluation modules.",
    modules_list: ["Camera Models & Calibration", "Feature Detection & Matching", "Epipolar Geometry", "PnP & Pose Estimation", "Keyframe Management", "Loop Closure Detection", "Bundle Adjustment", "Edge Deployment with ROS2", "KITTI Benchmark & Evaluation"],
  },
  {
    id: "PATH-002",
    title: "Robot Manipulation with Diffusion Policies",
    level: "ADVANCED",
    modules: 7,
    completed: 0,
    duration: "11h",
    instructor: "Chi et al. (Columbia Robotics Lab)",
    tags: ["MANIPULATION", "DIFFUSION", "IMITATION LEARNING", "FRANKA"],
    desc: "Learn to train and deploy diffusion-based robot policies from scratch. Covers DDPM, DDIM, and Consistency Policy variants. Hands-on labs with teleoperated demonstrations and real Franka evaluation.",
    modules_list: ["Intro to Robot Learning", "Demonstration Collection", "Behaviour Cloning Baseline", "Diffusion Models Primer", "Diffusion Policy Architecture", "Data Augmentation for Real-Robot Transfer", "Deployment & Latency Optimisation"],
  },
  {
    id: "PATH-003",
    title: "ROS2 Foundations for Robotics Engineers",
    level: "BEGINNER",
    modules: 12,
    completed: 12,
    duration: "18h",
    instructor: "Open Robotics Education Team",
    tags: ["ROS2", "C++", "PYTHON", "NAV2"],
    desc: "The definitive ROS2 foundation. Nodes, topics, services, actions, lifecycle management, TF2, and Nav2 integration. Covers both rclcpp and rclpy with real hardware labs on TurtleBot4.",
    modules_list: ["ROS2 Architecture", "Publishers & Subscribers", "Services & Actions", "TF2 Transforms", "Custom Interfaces", "Launch Files & Composition", "Lifecycle Nodes", "Parameters & Dynamic Reconfigure", "Nav2 Stack Overview", "SLAM Toolbox Integration", "Simulation with Gazebo Harmonic", "Real Robot Deployment"],
  },
  {
    id: "PATH-004",
    title: "Visual Odometry with Python & OpenCV",
    level: "INTERMEDIATE",
    modules: 6,
    completed: 2,
    duration: "8h",
    instructor: "Priya Nair, Anybotics",
    tags: ["VISUAL ODOMETRY", "OPENCV", "PYTHON", "IMU"],
    desc: "Implement stereo and monocular visual odometry from scratch using Python and OpenCV. Module 5 covers IMU pre-integration for VIO. Benchmarked on KITTI Odometry sequences 00–10.",
    modules_list: ["Pinhole Camera Model & Distortion", "Stereo Calibration & Rectification", "Sparse Optical Flow (KLT)", "Essential Matrix & Pose Recovery", "Scale Recovery & Stereo Baseline", "IMU Pre-Integration & VIO Fusion"],
  },
  {
    id: "PATH-005",
    title: "Sim-to-Real Transfer with IsaacLab",
    level: "ADVANCED",
    modules: 8,
    completed: 0,
    duration: "13h",
    instructor: "NVIDIA IsaacLab Team",
    tags: ["SIM2REAL", "RL", "ISAAC", "LOCOMOTION"],
    desc: "Train locomotion and manipulation policies in IsaacLab and transfer them to real hardware. Covers domain randomisation, privileged training, asymmetric actor-critic, and hardware-in-the-loop testing.",
    modules_list: ["IsaacLab Architecture & Asset Import", "Environment Design & Reward Shaping", "Domain Randomisation Strategies", "PPO & SAC Policy Training", "Privileged Information & Teacher-Student", "Sim-to-Real Gap Analysis", "Hardware-in-the-Loop Testing", "Deployment on Unitree GO2 & Spot"],
  },
  {
    id: "PATH-006",
    title: "3D Reconstruction: NeRF to Gaussian Splatting",
    level: "ADVANCED",
    modules: 6,
    completed: 0,
    duration: "10h",
    instructor: "Bernhard Kerbl (3DGS author)",
    tags: ["3DGS", "NERF", "RECONSTRUCTION", "MESH"],
    desc: "From implicit NeRF to explicit 3D Gaussian Splatting. Build a complete reconstruction pipeline from RGB-D capture to watertight mesh for collision detection. Includes ROS2 integration module.",
    modules_list: ["Neural Radiance Fields (NeRF)", "Instant-NGP Acceleration", "3D Gaussian Splatting Theory", "COLMAP SfM & Data Prep", "Training & Real-Time Rendering", "Mesh Extraction & Convex Decomp"],
  },
];

const LEVEL_COLOR: Record<string, string> = {
  BEGINNER:     "var(--rb-green)",
  INTERMEDIATE: "var(--rb-primary)",
  ADVANCED:     "var(--rb-primary-c)",
};

export default function LearnPage() {
  const totalModules = PATHS.reduce((a, p) => a + p.modules, 0);
  const doneModules  = PATHS.reduce((a, p) => a + p.completed, 0);

  return (
    <AppShell>
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--rb-primary-c)", marginBottom: "0.3rem" }}>// LEARNING PATHS</p>
            <h1 style={{ fontFamily: "Space Grotesk", fontSize: "1.75rem", fontWeight: 700, color: "var(--rb-text)" }}>Structured Curricula</h1>
            <p style={{ fontFamily: "Inter", fontSize: "0.85rem", color: "var(--rb-text-dim)", marginTop: "0.4rem" }}>Built by practising engineers. From first principles to production deployment.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="badge">[{PATHS.length} PATHS]</span>
            <span className="badge" style={{ color: "var(--rb-green)" }}>[1 COMPLETE]</span>
          </div>
        </div>

        {/* Progress overview */}
        <div className="p-6 mb-8 hud-panel grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["PATHS ENROLLED",  PATHS.length.toString()],
            ["MODULES DONE",    `${doneModules}/${totalModules}`],
            ["HOURS LOGGED",    "32h"],
            ["CERT EARNED",     "1"],
          ].map(([k, v]) => (
            <div key={k}>
              <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", marginBottom: "0.25rem", letterSpacing: "0.06em" }}>{k}</p>
              <p style={{ fontFamily: "Space Grotesk", fontSize: "1.6rem", fontWeight: 700, color: "var(--rb-primary)" }}>{v}</p>
            </div>
          ))}
        </div>

        {/* Paths grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(0,0,0,0.06)" }}>
          {PATHS.map((p) => {
            const pct = Math.round((p.completed / p.modules) * 100);
            return (
              <div key={p.id} className="p-6" style={{ background: "var(--rb-container)" }}>
                <div className="flex items-start justify-between mb-3 gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="badge" style={{ fontSize: "0.52rem" }}>{p.id}</span>
                    <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: LEVEL_COLOR[p.level], letterSpacing: "0.04em" }}>{p.level}</span>
                  </div>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: "var(--rb-text-dim)", whiteSpace: "nowrap" }}>{p.duration}</span>
                </div>
                <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "1.05rem", color: "var(--rb-text)", marginBottom: "0.3rem", lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", marginBottom: "0.75rem" }}>by {p.instructor}</p>
                <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--rb-text-dim)", lineHeight: 1.6, marginBottom: "1rem" }}>{p.desc}</p>

                {/* Module list preview */}
                <div className="mb-3" style={{ borderLeft: "2px solid rgba(245,97,38,0.3)", paddingLeft: "0.75rem" }}>
                  {p.modules_list.slice(0, 3).map((m, i) => (
                    <p key={i} style={{ fontFamily: "JetBrains Mono", fontSize: "0.6rem", color: i < p.completed ? "var(--rb-primary)" : "var(--rb-text-dim)", marginBottom: "0.2rem" }}>
                      {i < p.completed ? "✓" : "○"} {m}
                    </p>
                  ))}
                  {p.modules_list.length > 3 && (
                    <p style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)", opacity: 0.5, marginTop: "0.2rem" }}>+ {p.modules_list.length - 3} more modules</p>
                  )}
                </div>

                {/* Progress bar */}
                <div style={{ background: "var(--rb-high)", height: 3, marginBottom: "0.4rem" }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: pct === 100 ? "var(--rb-green)" : "var(--rb-primary-c)", transition: "width 0.3s" }} />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: "var(--rb-text-dim)" }}>{p.completed}/{p.modules} modules</span>
                  <span style={{ fontFamily: "JetBrains Mono", fontSize: "0.58rem", color: pct === 100 ? "var(--rb-green)" : "var(--rb-primary)" }}>{pct}%</span>
                </div>

                <div className="flex items-center gap-2 flex-wrap mb-5">
                  {p.tags.map(t => <span key={t} className="badge" style={{ fontSize: "0.52rem" }}>{t}</span>)}
                </div>
                <button className="btn-primary" style={{ fontSize: "0.62rem", padding: "0.55rem 1.1rem" }}>
                  {pct === 100 ? "VIEW CERTIFICATE" : pct === 0 ? "START PATH →" : "CONTINUE →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}

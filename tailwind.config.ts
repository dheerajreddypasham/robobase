import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // RoboBase Synthetic Architect Design System
        // Surfaces
        "rb-base":       "#0e0e0e",   // surface_container_lowest
        "rb-low":        "#1c1b1b",   // surface_container_low
        "rb-surface":    "#131313",   // surface / background
        "rb-container":  "#201f1f",   // surface_container
        "rb-high":       "#2a2a2a",   // surface_container_high
        "rb-highest":    "#353534",   // surface_container_highest
        "rb-bright":     "#393939",   // surface_bright
        // Primary (RoboBase Orange)
        "rb-primary":    "#ffb59c",
        "rb-primary-c":  "#f56126",
        "rb-on-primary": "#5c1a00",
        // Text
        "rb-text":       "#e5e2e1",   // on_surface
        "rb-text-dim":   "#e2bfb4",   // on_surface_variant
        // Accent
        "rb-green":      "#00e639",   // tertiary / signal green
        "rb-green-c":    "#00a827",
        // Secondary (neutral)
        "rb-secondary":  "#c8c6c6",
        "rb-secondary-c":"#474747",
        // Outline
        "rb-outline":    "#a98a80",
        "rb-outline-v":  "#5a4139",
      },
      fontFamily: {
        sans:  ["Inter", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
        mono:  ["'JetBrains Mono'", "'Fira Code'", "monospace"],
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
      },
      backgroundImage: {
        "rb-gradient": "linear-gradient(45deg, #ffb59c, #f56126)",
        "rb-gradient-v": "linear-gradient(180deg, #ffb59c, #f56126)",
      },
      backdropBlur: {
        hud: "16px",
      },
      keyframes: {
        "scroll-x": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.3" },
        },
      },
      animation: {
        "scroll-x": "scroll-x 30s linear infinite",
        "pulse2":   "pulse2 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

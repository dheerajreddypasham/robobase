import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoboBase — Engineering Platform",
  description: "Mission-critical robotics engineering platform. AI search, learning paths, perception hub, and community.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}

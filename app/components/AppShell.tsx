import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Statusbar from "./Statusbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full min-h-screen" style={{ background: "var(--rb-base)" }}>
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto" style={{ background: "var(--rb-base)" }}>
          {children}
        </main>
      </div>
      <Statusbar />
    </div>
  );
}

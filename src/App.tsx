import { useState } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NotePage from "./components/NotePage";
import Home from "./components/Home";
import "./App.css";

function Shell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close the sidebar automatically whenever the route changes
  // (only matters on mobile, where it's an overlay).
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="app-shell">
      <button
        className="menu-toggle"
        onClick={() => setSidebarOpen((v) => !v)}
        aria-label="Toggle navigation"
      >
        {sidebarOpen ? "✕" : "☰"}
      </button>

      {sidebarOpen && (
        <div className="sidebar-backdrop" onClick={closeSidebar} />
      )}

      <div className={sidebarOpen ? "sidebar-wrap open" : "sidebar-wrap"}>
        <Sidebar onNavigate={closeSidebar} />
      </div>

      <main className="main-panel" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:subjectSlug/:noteSlug" element={<NotePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}
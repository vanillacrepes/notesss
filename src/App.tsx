import { HashRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NotePage from "./components/NotePage";
import Home from "./components/Home";
import "./App.css";

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Sidebar />
        <main className="main-panel">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:subjectSlug/:noteSlug" element={<NotePage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

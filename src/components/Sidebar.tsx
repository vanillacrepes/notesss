import { NavLink } from "react-router-dom";
import { subjects } from "../data/subjects";

interface SidebarProps {
  onNavigate?: () => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <span className="prompt">$</span> notesss
      </div>
      <div className="sidebar-scroll">
        {subjects.map((subject) => (
          <div key={subject.slug} className="sidebar-group">
            <div className="sidebar-group-title">{subject.name}</div>
            <ul>
              {subject.notes.map((note) => (
                <li key={note.slug}>
                  <NavLink
                    to={`/${subject.slug}/${note.slug}`}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      isActive ? "sidebar-link active" : "sidebar-link"
                    }
                  >
                    {note.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

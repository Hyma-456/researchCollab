import { useNavigate } from "react-router-dom";

interface SidebarProps {
  currentPage?: string;
}

export default function Sidebar({ currentPage }: SidebarProps) {
  const navigate = useNavigate();

  const navItems = [
    { icon: "🏠", label: "Dashboard", page: currentPage?.includes("admin") ? "/admin" : "/researcher" },
    { icon: "📁", label: "Projects", page: "/projects" },
    { icon: "📄", label: "Documents", page: "/documents" },
    { icon: "💬", label: "Communications", page: "/communications" },
    { icon: "📊", label: "Insights", page: "/insights" },
    { icon: "👤", label: "Team", page: "/team" },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-mark">RC</div>
        <div>
          <h2>ResearchCollab</h2>
          <p>Collaboration that moves ideas forward.</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.page}
              style={{
                cursor: "pointer",
                padding: "10px",
                borderRadius: "4px",
                backgroundColor: currentPage === item.label.toLowerCase() ? "#e3f2fd" : "transparent",
                color: currentPage === item.label.toLowerCase() ? "#007bff" : "inherit",
              }}
              onClick={() => navigate(item.page)}
            >
              {item.icon} {item.label}
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={handleLogout}
        style={{
          width: "90%",
          margin: "20px auto",
          padding: "10px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "600",
          display: "block",
        }}
      >
        Logout
      </button>
    </aside>
  );
}
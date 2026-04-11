import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Projects() {
  const [projects] = useState([
    { id: 1, name: "NeuroAI Collaboration", status: "Active", members: 8, progress: 65 },
    { id: 2, name: "Quantum Materials", status: "Active", members: 5, progress: 45 },
    { id: 3, name: "Bioinformatics Study", status: "Planning", members: 6, progress: 20 },
  ]);

  return (
    <div className="dashboard-shell">
      <Sidebar currentPage="projects" />
      <main className="dashboard-main">
        <section>
          <h1>Projects</h1>
          <p style={{ marginBottom: "30px", color: "#666" }}>Manage and track your research projects</p>

          <div style={gridStyle}>
            {projects.map((project) => (
              <div key={project.id} style={projectCardStyle}>
                <div style={projectHeaderStyle}>
                  <h3>{project.name}</h3>
                  <span style={statusBadgeStyle(project.status)}>{project.status}</span>
                </div>
                <div style={projectMetaStyle}>
                  <p><strong>{project.members}</strong> members</p>
                  <p>Progress: <strong>{project.progress}%</strong></p>
                </div>
                <div style={progressBarStyle}>
                  <div style={{...progressFillStyle, width: `${project.progress}%`}}></div>
                </div>
                <button style={actionButtonStyle}>View Details</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "20px",
};

const projectCardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  border: "1px solid #e0e0e0",
};

const projectHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "15px",
};

const statusBadgeStyle = (status: string) => ({
  padding: "4px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "600" as const,
  backgroundColor: status === "Active" ? "#d4edda" : "#fff3cd",
  color: status === "Active" ? "#155724" : "#856404",
});

const projectMetaStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "15px",
  fontSize: "14px",
  color: "#666",
};

const progressBarStyle = {
  height: "6px",
  backgroundColor: "#e0e0e0",
  borderRadius: "3px",
  marginBottom: "15px",
  overflow: "hidden" as const,
};

const progressFillStyle = {
  height: "100%",
  backgroundColor: "#007bff",
  transition: "width 0.3s",
};

const actionButtonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "600" as const,
};

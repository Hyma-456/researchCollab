import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Team() {
  const [team] = useState([
    { id: 1, name: "Dr. Sarah Chen", role: "Project Lead", projects: 3, status: "Active" },
    { id: 2, name: "James Wilson", role: "Researcher", projects: 2, status: "Active" },
    { id: 3, name: "Prof. Michael Lee", role: "Advisor", projects: 4, status: "Active" },
    { id: 4, name: "Lisa Johnson", role: "Analyst", projects: 2, status: "Active" },
    { id: 5, name: "David Kumar", role: "Researcher", projects: 1, status: "Pending" },
  ]);

  return (
    <div className="dashboard-shell">
      <Sidebar currentPage="team" />
      <main className="dashboard-main">
        <section>
          <h1>Team Members</h1>
          <p style={{ marginBottom: "30px", color: "#666" }}>Manage your research team and collaborators</p>

          <div style={teamContainerStyle}>
            {team.map((member) => (
              <div key={member.id} style={memberCardStyle}>
                <div style={memberAvatarStyle}>{member.name.charAt(0)}</div>
                <div style={memberInfoStyle}>
                  <h3 style={memberNameStyle}>{member.name}</h3>
                  <p style={memberRoleStyle}>{member.role}</p>
                  <p style={memberMetaStyle}>{member.projects} active projects</p>
                </div>
                <div style={memberStatusStyle(member.status)}>
                  {member.status}
                </div>
              </div>
            ))}
          </div>

          <div style={addMemberStyle}>
            <h3>Invite New Member</h3>
            <div style={formGroupStyle}>
              <input type="email" placeholder="Enter email address" style={inputStyle} />
              <select style={selectStyle}>
                <option>Select Role</option>
                <option>Researcher</option>
                <option>Analyst</option>
                <option>Advisor</option>
              </select>
              <button style={inviteButtonStyle}>Send Invite</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const teamContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "20px",
  marginBottom: "40px",
};

const memberCardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const memberAvatarStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "#007bff",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "bold" as const,
  flexShrink: 0,
};

const memberInfoStyle = {
  flex: 1,
};

const memberNameStyle = {
  margin: "0 0 4px 0",
  fontSize: "16px",
  color: "#333",
};

const memberRoleStyle = {
  margin: "0 0 4px 0",
  fontSize: "12px",
  color: "#666",
};

const memberMetaStyle = {
  margin: "0",
  fontSize: "12px",
  color: "#999",
};

const memberStatusStyle = (status: string) => ({
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "600" as const,
  backgroundColor: status === "Active" ? "#d4edda" : "#fff3cd",
  color: status === "Active" ? "#155724" : "#856404",
});

const addMemberStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const formGroupStyle = {
  display: "flex",
  gap: "10px",
  marginTop: "15px",
};

const inputStyle = {
  flex: 1,
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "14px",
};

const selectStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "14px",
};

const inviteButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "600" as const,
};

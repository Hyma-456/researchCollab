export default function Sidebar() {
  return (
    <div style={{
      width: "240px",
      background: "#f5f7fb",
      height: "100vh",
      padding: "20px",
      borderRight: "1px solid #ddd"
    }}>
      <h2 style={{ marginBottom: "30px" }}>ResearchCollab</h2>

      <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
        <li>🏠 Dashboard</li>
        <li>📁 Projects</li>
        <li>📄 Documents</li>
        <li>💬 Communication</li>
        <li>📊 Milestones</li>
        <li>🔔 Notifications</li>
        <li>👤 Profile</li>
      </ul>
    </div>
  );
}
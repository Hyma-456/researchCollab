import Sidebar from "../components/Sidebar";

export default function AdminDashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px" }}>
        <h1>Admin Dashboard</h1>

        <h3>Create Project</h3>
        <button>Create New Project</button>

        <h3 style={{ marginTop: "20px" }}>Manage Documents</h3>
        <button>Upload Document</button>

        <h3 style={{ marginTop: "20px" }}>Announcements</h3>
        <button>Send Announcement</button>
      </div>
    </div>
  );
}
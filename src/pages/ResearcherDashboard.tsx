import Sidebar from "../components/Sidebar";

export default function ResearcherDashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px" }}>
        <h1>Researcher Dashboard</h1>

        <h3>My Projects</h3>
        <p>View and join projects</p>

        <h3 style={{ marginTop: "20px" }}>Documents</h3>
        <p>Access shared research materials</p>

        <h3 style={{ marginTop: "20px" }}>Milestones</h3>
        <p>Track deadlines and progress</p>
      </div>
    </div>
  );
}
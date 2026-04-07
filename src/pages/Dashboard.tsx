export default function Dashboard() {
  return (
    <div style={{ padding: "20px", flex: 1 }}>
      <h1>Welcome back, Sarah</h1>
      <p>Here’s what’s happening with your research projects today.</p>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Card title="Active Projects" value="2" />
        <Card title="Total Documents" value="6" />
        <Card title="Pending Milestones" value="3" />
        <Card title="Recent Messages" value="4" />
      </div>

      {/* Active Projects */}
      <div style={{ marginTop: "40px" }}>
        <h2>Active Projects</h2>
        <div style={cardStyle}>
          <h3>Quantum Computing Applications</h3>
          <p>Progress: 65%</p>
        </div>
      </div>

      {/* Milestones */}
      <div style={{ marginTop: "40px" }}>
        <h2>Upcoming Milestones</h2>
        <div style={cardStyle}>
          <h3>Algorithm Implementation</h3>
          <p>Due in 54 days</p>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      width: "200px"
    }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};
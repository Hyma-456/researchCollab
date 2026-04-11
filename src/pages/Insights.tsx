import Sidebar from "../components/Sidebar";

export default function Insights() {
  const stats = [
    { label: "Total Projects", value: "12", change: "+3 this month" },
    { label: "Active Collaborators", value: "47", change: "+12 this month" },
    { label: "Documents Shared", value: "342", change: "+89 this month" },
    { label: "Completion Rate", value: "78%", change: "+5% from last month" },
  ];

  return (
    <div className="dashboard-shell">
      <Sidebar currentPage="insights" />
      <main className="dashboard-main">
        <section>
          <h1>Insights & Analytics</h1>
          <p style={{ marginBottom: "30px", color: "#666" }}>Track collaboration metrics and research progress</p>

          <div style={statsGridStyle}>
            {stats.map((stat, index) => (
              <div key={index} style={statCardStyle}>
                <h3 style={statLabelStyle}>{stat.label}</h3>
                <p style={statValueStyle}>{stat.value}</p>
                <p style={statChangeStyle}>{stat.change}</p>
              </div>
            ))}
          </div>

          <div style={chartContainerStyle}>
            <div style={chartStyle}>
              <h3>Collaboration Activity (Last 30 Days)</h3>
              <div style={placeholderStyle}>
                <p>📊 Chart visualization coming soon</p>
              </div>
            </div>

            <div style={chartStyle}>
              <h3>Project Distribution by Status</h3>
              <div style={placeholderStyle}>
                <p>📈 Analytics dashboard loading...</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const statsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  marginBottom: "30px",
};

const statCardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  textAlign: "center" as const,
};

const statLabelStyle = {
  fontSize: "14px",
  color: "#666",
  margin: "0 0 10px 0",
  fontWeight: "600" as const,
};

const statValueStyle = {
  fontSize: "32px",
  color: "#007bff",
  margin: "0 0 10px 0",
  fontWeight: "bold" as const,
};

const statChangeStyle = {
  fontSize: "12px",
  color: "#28a745",
  margin: "0",
};

const chartContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
};

const chartStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const placeholderStyle = {
  backgroundColor: "#f8f9fa",
  padding: "60px 20px",
  textAlign: "center" as const,
  color: "#999",
  borderRadius: "4px",
  marginTop: "20px",
};

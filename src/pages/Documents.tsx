import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Documents() {
  const [documents] = useState([
    { id: 1, name: "Proposal_2024.pdf", type: "PDF", size: "2.4 MB", date: "2024-04-10", project: "NeuroAI" },
    { id: 2, name: "Research_Data.xlsx", type: "Excel", size: "1.1 MB", date: "2024-04-09", project: "Quantum" },
    { id: 3, name: "Methods_Draft.docx", type: "Word", size: "850 KB", date: "2024-04-08", project: "Bioinfo" },
    { id: 4, name: "Results_Analysis.pdf", type: "PDF", size: "3.2 MB", date: "2024-04-07", project: "NeuroAI" },
  ]);

  return (
    <div className="dashboard-shell">
      <Sidebar currentPage="documents" />
      <main className="dashboard-main">
        <section>
          <h1>Documents Library</h1>
          <p style={{ marginBottom: "30px", color: "#666" }}>Central hub for all research documents and files</p>

          <div style={tableContainerStyle}>
            <table style={tableStyle}>
              <thead>
                <tr style={headerStyle}>
                  <th>Document Name</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Project</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} style={rowStyle}>
                    <td style={cellStyle}>{doc.name}</td>
                    <td style={cellStyle}>{doc.type}</td>
                    <td style={cellStyle}>{doc.size}</td>
                    <td style={cellStyle}>{doc.project}</td>
                    <td style={cellStyle}>{doc.date}</td>
                    <td style={cellStyle}>
                      <button style={miniButtonStyle}>Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

const tableContainerStyle = {
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  overflow: "hidden" as const,
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse" as const,
};

const headerStyle = {
  backgroundColor: "#f8f9fa",
  borderBottom: "2px solid #dee2e6",
};

const rowStyle = {
  borderBottom: "1px solid #dee2e6",
  "&:hover": {
    backgroundColor: "#f8f9fa",
  },
};

const cellStyle = {
  padding: "15px",
  textAlign: "left" as const,
  fontSize: "14px",
};

const miniButtonStyle = {
  padding: "6px 12px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "600" as const,
};

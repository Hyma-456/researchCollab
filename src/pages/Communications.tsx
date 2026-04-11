import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Communications() {
  const [messages] = useState([
    { id: 1, from: "Dr. Sarah Chen", message: "Great progress on the Q1 slides. Ready for review.", time: "2 hours ago" },
    { id: 2, from: "James Wilson", message: "Can we schedule a sync for tomorrow at 2 PM?", time: "5 hours ago" },
    { id: 3, from: "Prof. Michael Lee", message: "Please upload the latest experimental data when ready.", time: "1 day ago" },
    { id: 4, from: "Lisa Johnson", message: "The methodology looks solid. Let's discuss further.", time: "1 day ago" },
  ]);

  return (
    <div className="dashboard-shell">
      <Sidebar currentPage="communications" />
      <main className="dashboard-main">
        <section>
          <h1>Communications</h1>
          <p style={{ marginBottom: "30px", color: "#666" }}>Team messages and collaboration updates</p>

          <div style={messageContainerStyle}>
            {messages.map((msg) => (
              <div key={msg.id} style={messageBoxStyle}>
                <div style={messageHeaderStyle}>
                  <strong style={senderStyle}>{msg.from}</strong>
                  <span style={timeStyle}>{msg.time}</span>
                </div>
                <p style={messageTextStyle}>{msg.message}</p>
              </div>
            ))}
          </div>

          <div style={inputContainerStyle}>
            <input
              type="text"
              placeholder="Type your message..."
              style={inputStyle}
            />
            <button style={sendButtonStyle}>Send</button>
          </div>
        </section>
      </main>
    </div>
  );
}

const messageContainerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "15px",
  marginBottom: "30px",
};

const messageBoxStyle = {
  backgroundColor: "white",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  borderLeft: "4px solid #007bff",
};

const messageHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
};

const senderStyle = {
  color: "#333",
  fontSize: "14px",
};

const timeStyle = {
  fontSize: "12px",
  color: "#999",
};

const messageTextStyle = {
  color: "#555",
  fontSize: "14px",
  margin: "0",
};

const inputContainerStyle = {
  display: "flex",
  gap: "10px",
};

const inputStyle = {
  flex: 1,
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "14px",
};

const sendButtonStyle = {
  padding: "12px 24px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "600" as const,
};

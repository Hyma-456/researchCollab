import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>ResearchCollab</h1>
      <p>Select your role</p>

      <button onClick={() => navigate("/admin")} style={btn}>
        Login as Admin
      </button>

      <br /><br />

      <button onClick={() => navigate("/researcher")} style={btn}>
        Login as Researcher
      </button>
    </div>
  );
}

const btn = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer"
};
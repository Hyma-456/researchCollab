import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import ResearcherDashboard from "./pages/ResearcherDashboard";
import Projects from "./pages/Projects";
import Documents from "./pages/Documents";
import Communications from "./pages/Communications";
import Insights from "./pages/Insights";
import Team from "./pages/Team";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/researcher" element={<ResearcherDashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/communications" element={<Communications />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}
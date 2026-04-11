import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function ResearcherDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-shell">
      <Sidebar currentPage="researcher" />

      <main className="dashboard-main">
        <section className="hero-banner">
          <div className="hero-copy">
            <h1>Researcher workspace for faster discovery.</h1>
            <p>
              Organize experiments, join active collaborations, and keep your
              research pipeline moving with a clean, modern workspace built for
              academic teams.
            </p>
            <div className="hero-actions">
              <button className="hero-button" onClick={() => navigate("/projects")}>Browse Projects</button>
              <button className="secondary-button" onClick={() => navigate("/documents")}>Open Library</button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
              alt="Research team collaboration"
            />
          </div>
        </section>

        <section className="metric-grid">
          <article className="card metric-card">
            <h3>Projects joined</h3>
            <p className="metric-value">7</p>
          </article>
          <article className="card metric-card">
            <h3>Shared docs</h3>
            <p className="metric-value">49</p>
          </article>
          <article className="card metric-card">
            <h3>Upcoming reviews</h3>
            <p className="metric-value">3</p>
          </article>
        </section>

        <section className="dashboard-grid">
          <article className="card">
            <h2>Today's tasks</h2>
            <ul className="recent-list">
              <li className="recent-item">
                <div>
                  <strong>Review proposal draft</strong>
                  <small>Project: NeuroAI Collaboration</small>
                </div>
                <span className="file-tag">Due today</span>
              </li>
              <li className="recent-item">
                <div>
                  <strong>Upload experiment data</strong>
                  <small>Project: Quantum Materials</small>
                </div>
                <span className="file-tag">In progress</span>
              </li>
              <li className="recent-item">
                <div>
                  <strong>Schedule team review</strong>
                  <small>Project: Bioinformatics Study</small>
                </div>
                <span className="file-tag">Tomorrow</span>
              </li>
            </ul>
          </article>

          <article className="card">
            <h2>Collaboration notes</h2>
            <p>
              Use the research hub to centralize decisions, share updates, and
              keep collaborators aligned on milestones and deliverables.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

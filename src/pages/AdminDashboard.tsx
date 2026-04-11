import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { getFiles, saveFile, type StoredFile } from "../utils/db";

export default function AdminDashboard() {
  const [files, setFiles] = useState<StoredFile[]>([]);
  const [uploadMessage, setUploadMessage] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    const storedFiles = await getFiles();
    setFiles(storedFiles);
  };

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await saveFile(file);
      setUploadMessage(`Uploaded ${file.name} successfully.`);
      loadFiles();
    }
  };

  return (
    <div className="dashboard-shell">
      <Sidebar currentPage="admin" />

      <main className="dashboard-main">
        <section className="hero-banner">
          <div className="hero-copy">
            <h1>Research collaboration, reimagined.</h1>
            <p>
              Bring research teams, documents, and insights into one beautifully
              organized workspace. Monitor progress, share files, and keep every
              stakeholder aligned from proposal to publication.
            </p>
            <div className="hero-actions">
              <button className="hero-button" onClick={() => navigate("/projects")}>Create Project</button>
              <button className="secondary-button" onClick={() => navigate("/documents")}>View Library</button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              alt="Research collaboration"
            />
          </div>
        </section>

        <section className="metric-grid">
          <article className="card metric-card">
            <h3>Active projects</h3>
            <p className="metric-value">18</p>
          </article>
          <article className="card metric-card">
            <h3>Documents shared</h3>
            <p className="metric-value">124</p>
          </article>
          <article className="card metric-card">
            <h3>Collaborators</h3>
            <p className="metric-value">42</p>
          </article>
        </section>

        <div className="dashboard-grid">
          <section className="card upload-card">
            <h2>Upload research document</h2>
            <p>Drop or select a file to save it to the shared collaboration library.</p>
            <input type="file" onChange={handleUpload} />
            {uploadMessage && <p style={{ marginTop: 14 }}>{uploadMessage}</p>}
          </section>

          <section className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
              <div>
                <h2>Recent uploads</h2>
                <p>Latest files available for your team.</p>
              </div>
              <span className="file-tag">Updated now</span>
            </div>

            <ul className="file-list">
              {files.length === 0 ? (
                <li className="file-item">
                  <strong>No files yet</strong>
                  <small>Upload a document to populate your research library.</small>
                </li>
              ) : (
                files.map((file) => (
                  <li className="file-item" key={file.id ?? file.name}>
                    <div className="file-item-header">
                      <div>
                        <strong>{file.name}</strong>
                        <small>Shared document</small>
                      </div>
                      <span className="file-tag">Research</span>
                    </div>
                    <div className="file-item-actions">
                      <a className="file-download" href={URL.createObjectURL(file.file)} download={file.name}>
                        Download
                      </a>
                      <span>{file.file.type || "application/pdf"}</span>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
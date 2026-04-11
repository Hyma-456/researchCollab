import { useEffect, useState, type ChangeEvent } from "react";
import Sidebar from "../components/Sidebar";
import { getFiles, saveFile, type StoredFile } from "../utils/db";

export default function Dashboard() {
  const [files, setFiles] = useState<StoredFile[]>([]);
  const [status, setStatus] = useState<string>("");

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
      setStatus(`Uploaded ${file.name} successfully.`);
      loadFiles();
    }
  };

  return (
    <div className="dashboard-shell">
      <Sidebar />

      <main className="dashboard-main">
        <section className="hero-banner">
          <div className="hero-copy">
            <h1>Academic collaboration built for research teams.</h1>
            <p>
              Securely upload project files, keep documents organized, and give your
              team a polished workspace for every publication and experiment.
            </p>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1531379410504-3b7ecf5bc63d?auto=format&fit=crop&w=900&q=80"
              alt="Team collaboration"
            />
          </div>
        </section>

        <section className="dashboard-grid">
          <article className="card upload-card">
            <h2>Upload research files</h2>
            <p>Drag and drop or choose a file to add it to the shared library.</p>
            <input type="file" onChange={handleUpload} />
            {status && <p style={{ marginTop: 14 }}>{status}</p>}
          </article>

          <article className="card">
            <h2>Library preview</h2>
            <ul className="file-list">
              {files.length === 0 ? (
                <li className="file-item">
                  <strong>No uploaded documents yet.</strong>
                  <small>Upload a file to get started.</small>
                </li>
              ) : (
                files.map((file) => (
                  <li className="file-item" key={file.id ?? file.name}>
                    <div className="file-item-header">
                      <div>
                        <strong>{file.name}</strong>
                        <small>{file.file.type || "Research file"}</small>
                      </div>
                      <span className="file-tag">Shared</span>
                    </div>
                    <div className="file-item-actions">
                      <a className="file-download" href={URL.createObjectURL(file.file)} download={file.name}>
                        Download
                      </a>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

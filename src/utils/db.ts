import { openDB } from "idb";

export interface StoredFile {
  id?: number;
  name: string;
  file: File;
}

const DB_NAME = "file-store";
const STORE_NAME = "files";

export async function initDB() {
  return openDB<{ files: StoredFile }>(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
    },
  });
}

export async function saveFile(file: File): Promise<void> {
  const db = await initDB();
  await db.add(STORE_NAME, {
    name: file.name,
    file,
  });
}

export async function getFiles(): Promise<StoredFile[]> {
  const db = await initDB();
  return db.getAll(STORE_NAME);
}

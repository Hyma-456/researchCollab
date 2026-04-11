export type AuthRole = "admin" | "researcher";

export interface AuthUser {
  name: string;
  email: string;
  password: string;
  role: AuthRole;
}

const STORAGE_KEY = "researchcollab_users";

export function getUsers(): AuthUser[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];

  try {
    return JSON.parse(stored) as AuthUser[];
  } catch {
    return [];
  }
}

export function saveUser(user: AuthUser): { success: boolean; error?: string } {
  const users = getUsers();
  if (users.some((item) => item.email.toLowerCase() === user.email.toLowerCase())) {
    return { success: false, error: "An account already exists with that email." };
  }

  users.push(user);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  return { success: true };
}

export function authenticate(email: string, password: string): AuthUser | null {
  const users = getUsers();
  return (
    users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password
    ) || null
  );
}

export function userExists(email: string): boolean {
  return getUsers().some((user) => user.email.toLowerCase() === email.toLowerCase());
}

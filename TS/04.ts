interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

// All fields become optional: { id?: number; name?: string; ... }
function updateUser(id: number, updates: Partial<User>) {
  // updates can have any combination of User properties
}

// Only includes specified keys: { id: number; name: string; }
type UserPreview = Pick<User, "id" | "name">;

const preview: UserPreview = { id: 1, name: "Jane" };

// Includes everything EXCEPT 'role': { id: number; name: string; email: string; }
type PublicUser = Omit<User, "role">;

const user: PublicUser = { id: 1, name: "John", email: "john@example.com" };

type Role = "admin" | "user" | "guest";

// Maps each role to a boolean: { admin: boolean; user: boolean; guest: boolean; }
const rolePermissions: Record<Role, boolean> = {
  admin: true,
  user: true,
  guest: false,
};

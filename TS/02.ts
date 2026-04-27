// Interface
interface UserInterface {
  name: string;
  age: number;
}

// Type Alias
type UserType = {
  name: string;
  age: number;
};

// Interface extension
interface Admin extends UserInterface {
  role: "admin";
}

// Type intersection
type AdminType = UserType & {
  role: "admin";
};

// Only possible in interfaces
interface Window {
  title: string;
}
interface Window {
  width: number;
}
// Merged Result: { title: string; width: number; }

// Only possible in types
type ID = number | string; // Union
type Point = [number, number]; // Tuple
type Name = string; // Primitive Alias

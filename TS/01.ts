enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

let move: Direction = Direction.Up; // Value is 0

enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

function checkAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full Access");
  }
}

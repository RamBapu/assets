// [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" }
// ]

// Remove duplicates by key

function removeDuplicates(users) {
  const map = new Map();

  for (const user of users) {
    if (!map.has(user.id)) {
      map.set(user.id, user);
    }
  }

  return [...map.values()];
}

const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];

const result = removeDuplicates(users);
console.log(result);

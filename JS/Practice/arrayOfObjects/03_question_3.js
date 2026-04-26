// [
//   { user: "A", orders: [10, 20] },
//   { user: "B", orders: [30] }
// ]

// [
//   { user: "A", order: 10 },
//   { user: "A", order: 20 },
//   { user: "B", order: 30 }
// ]

function flattenObj(users) {
  let result = [];
  for (const item of users) {
    for (let order of item.orders) {
      result.push({ user: item.user, order });
    }
  }
  return result;
}

const users = [
  { user: "A", orders: [10, 20] },
  { user: "B", orders: [30] },
];

console.log(flattenObj(users));

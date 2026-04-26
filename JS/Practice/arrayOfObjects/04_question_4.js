// users = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
// orders = [{ id: 1, total: 100 }];

// [
//   { id: 1, name: "A", total: 100 },
//   { id: 2, name: "B", total: 0 }
// ]

function fetchProduct(users, orders) {
  const map = new Map();
  for (let user of users) {
    map.set(user.id, { ...user, total: 0 });
  }

  for (let order of orders) {
    if (map.has(order.id)) {
      map.set(order.id, { ...map.get(order.id), ...order });
    }
  }

  return [...map.values()];
}

const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const orders = [{ id: 1, total: 100 }];

console.log(fetchProduct(users, orders));

function fetchProduct2(users, orders) {
  const orderMap = new Map();

  for (let order of orders) {
    orderMap.set(order.id, order.total);
  }

  return users.map((user) => {
    return { ...user, total: orderMap.get(user.id) || 0 };
  });
}

console.log(fetchProduct2(users, orders));

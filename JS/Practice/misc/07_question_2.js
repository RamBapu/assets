// const obj = [
//   { name: "Alice", city: "Chennai" },
//   { name: "Bob", city: "Madurai" },
//   { name: "Charlie", city: "Chennai" },
// ];

// const result = [
//   { city: "Chennai", names: ["Alice", "Charlie"] },
//   { city: "Madurai", names: ["Bob"] },
// ];

function clubCities(obj) {
  const map = new Map();

  for (let el of obj) {
    if (!map.has(el.city)) {
      map.set(el.city, { city: el.city, names: [] });
    }
    map.get(el.city).names.push(el.name);
  }

  return Array.from(map.values());
}

const obj = [
  { name: "Alice", city: "Chennai" },
  { name: "Bob", city: "Madurai" },
  { name: "Charlie", city: "Chennai" },
];

const result = clubCities2(obj);
console.log(result);

function clubCities2(obj) {
  let result = [];

  result = obj.reduce((acc, item) => {
    const { name, city } = item;
    if (!acc[city]) {
      acc[city] = { city, names: [] };
    }
    acc[city].names.push(name);
    return acc;
  }, []);

  return Object.values(result);
}

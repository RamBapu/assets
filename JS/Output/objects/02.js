const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // { '[object Object]': 123 }
a[c] = 456; // updated to { '[object Object]': 456 }

console.log(a); // { '[object Object]': 456 }
console.log(a[b]); // 456
console.log(a[c]); // 456

// Note: when we convert object to string forcefully, it becomes [object Object]

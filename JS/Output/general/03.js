for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 3 3 3 - because var is function scoped - same binding
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0 1 2 - because let is block scoped - fresh binding
}

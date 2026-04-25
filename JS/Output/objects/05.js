const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius, // this.radius is undefined in arrow function
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // undefined

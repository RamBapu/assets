const person = {
  name: "Ram",
  greet() {
    console.log("Hello", this.name);
  },
};

const greetVimal = person.greet.bind({ name: "Vimal" });
greetVimal();

const obj = {
  name: "Ram",
  greet: () => {
    console.log(`Hello`, this.name);
  },
  greetFunc: function () {
    console.log(`Hello ${this.name}`);
  },
};

obj.greet(); // Hello undefined
obj.greetFunc(); // Hello Ram

// Returns undefined in strict mode & window (global object) in non-strict mode

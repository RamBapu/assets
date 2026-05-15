# JS

### GreatFrontend Quiz

- hoisting
- temporal dead zone
- var vs let vs const
- == vs ===
- event loop
- event delegation
- event.target vs event.currentTarget
- synthetic events
- this keyword - within a regular func call, a method call, a class constructor
- explicitly binding 'this' using call / apply / bind
- arrow functions using 'this'
- cookies vs localStorage vs sessionStorage
- script vs script async vs script defer
- null vs undefined
- .call vs .apply function
- .bind function
- method borrowing
- arrow functions
- anonymous functions
- immediately invoked function expressions (IIFEs)
- closures
- lexical scope
- higher order function - map,filter and reduce
- event bubbling
- event capturing
- use strict in JS
- synchronous vs asynchronous functions
- callback hell or pyramid of doom
- sequential / parallel data fetching
- AJAX requests - data fetching
- AJAX pros and cons
- AbortController
- polyfills
- commonJS vs ES modules
- primitive vs non-primitive data types
- type coercion
- spread vs rest operator
- array destructuring vs object destructuring
- iterators vs generators
- Map vs Set, WeakMap vs WeakSet
- Server sent events
- proxies in JS
- garbage collection
- memory leaks
- callback function
- debouncing vs throttling
- destructuring objects
- test driven development (TDD)
- singleton pattern
- tree shaking
- shallow copy vs deep copy
- unit vs integration vs end to end testing
- optimize network requests
- prevent SQL injection vulnerabilities
- partial application vs currying
- Promise.all() vs Promise.allSelected()
- Promises
- Promise chaining
- Set and Map
- module bundler
- structured clone vs JSON clone
- cross site scripting (XSS) attacks
- Object.freeze

### From Interviews and Research

- JS is single threaded
- ES6 features
- **ECMAScript 2025** (ES2025) features
- Stack vs Heap memory in JS
- Promise.race() vs Promise.any()
- forEach vs map function
- slice vs splice array function
- short circuiting - nullish coalescing (??)
- CSRF attacks in React
- SOLID principles in React
- prototype property of objects in JS
- .prototype vs proto in JS
- Prototype chaining
- Array.prototype to create a custom array method

### ES6 features

- let,const keywords
- arrow functions
- maps and sets
- destructuring
- promises

### ES2025 features

- import JSON files directly using import statement instead of doing manual fetch calls
- new set methods - union(), intersection(), difference()
- Promise.try - ensures that a function result is always a promise for better error handling

### Stack vs Heap memory

- Stack stores primitive values and object references - LIFO - small and fixed - faster access - memory management done automatically
- Heap stores non-primitives and functions - unstructured (large pool of memory) - dynamic - slower access - memory managementy done by Garbage collector

### Promise.race vs Promise.any

- Promise.race waits for the first promise to finish (fulfilled or rejected)
- Promise.any waits for the first promise to be fulfilled. If all rejected, throws AggregateError

### CSRF attacks

Cross-Site Request Forgery (CSRF) attack occurs when a malicious website tricks a user's browser into making an unwanted authenticated request to your backend.

- Passing token in cookies, you need CSRF protection
- Passing token in authorization header, it's inherently protected from CSRF

Prevention:

- adding custom headers for authorization
- cookie attributes - same-site = strict
- headers with X-CSRF-token for every request

### SOLID principles

- Single Responsibility Principle - component with single piece of functionality
- Open / Closed Principle - component should be open for extension but closed to modification
- Liskov Substituion Principle - specialized component must contain all props when replaced
- Interface Segregation Principle - don't depend on props that it doesn't use
- Dependency Inversion Principle - component should depend on props, state and context instead of concrete implementation

### Prototype property

Every object has a hidden, internal property called **`[[Prototype]]`** , which links it to another object. This link allows objects to inherit properties and methods from their "prototype," forming what is known as the **prototype chain.**

You can access it via Object.getPrototypeOf() or the legacy `__proto__` property.

Use case: Instead of giving every instance of an object its own copy of a method, you can define the method once on the constructor's `prototype`. All instances then share that single method via the prototype chain.

### How Prototype chain works

When you try to access a property on an object, JavaScript follows these steps:

1. Check the object itself: Does it have the property?
2. Move up the chain: If not found, JavaScript looks at the object's `[[Prototype]]`.
3. Repeat: It continues up the chain until the property is found or it reaches `null`, which marks the end of the chain

### .prototype vs `__proto__` property

| Feature      | `.prototype`                                                                                                                                | `__proto__`                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **Found On** | Only on Functions.                                                                                                                          | Only on Objects                                                       |
| **Purpose**  | A "blueprint" for creating new objects.                                                                                                     | A reference to the object's actual parent.                            |
| **Usage**    | If you define<br /> `Person.prototype.greet = function() `, every person created via `new Person()` will have access to that `greet` method | It is a way to see (or set) the internal `[[Prototype]]` of an object |
| **Status**   | Standard and modern.                                                                                                                        | **Deprecated** ; use `Object.getPrototypeOf()` instead.               |

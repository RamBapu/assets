const target = {
  message: "Hello, world!",
};

const handler = {
  get: function (target, property) {
    console.log(`Someone accessed property "${property}"`);
    if (property in target) {
      return target[property];
    }
    return `Property ${property} does not exist.`;
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.message); // Hello, world!
console.log(proxy.nonExistentProperty); // Property nonExistentProperty does not exist.

// In JavaScript, a proxy is an object that allows you to customize the behavior of another object, often referred to as the target object.
// Proxies can intercept and redefine various operations for the target object, such as property access, assignment, enumeration, function invocation, and more.
// This makes proxies a powerful tool for a variety of use cases, including but not limited to validation, logging, performance monitoring, and implementing advanced data structures.

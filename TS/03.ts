function identity<T>(arg: T): T {
  return arg;
}
let result1 = identity<string>("Hello"); // T is string

interface Box<T> {
  content: T;
}
const numberBox: Box<number> = { content: 100 };

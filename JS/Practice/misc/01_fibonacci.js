function fibonacci(n) {
  if (n <= 1) return n; // base cases
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function fibonacciSeries(n) {
  return Array.from({ length: n }, (_, i) => fib(i));
}

console.log(fibonacciSeries(7));

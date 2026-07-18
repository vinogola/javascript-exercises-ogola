const fibonacci = function (n) {
  if (typeof n !== "number") n = parseInt(n);

  if (n < 0) return "OOPS";
  if (n === 0) return 0;

  let previous = 0;
  let current = 1;
  for (let i = 2; i <= n; i++) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;

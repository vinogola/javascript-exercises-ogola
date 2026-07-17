const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, num) => {
    return product * num;
  }, 1);
};

const power = function (num, expnonent) {
  return num ** expnonent;
};

const factorial = function (num) {
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

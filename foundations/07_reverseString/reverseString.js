// Reverses a string. Throws TypeError if input is not a string.
const reverseString = function (str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string, but received " + typeof str);
  }
  return str.split("").toReversed().join("");
};

// Do not edit below this line
module.exports = reverseString;

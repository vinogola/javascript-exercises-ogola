const palindromes = function (str) {
  // Remove special characters and whitespace, keeping only alphanumeric characters
  const cleanedString = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Reverse the cleaned string by converting to array, reversing, then joining back
  const reversedString = cleanedString.split("").reverse().join("");

  // Compare original cleaned string with its reverse
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

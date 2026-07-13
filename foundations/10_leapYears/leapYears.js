const leapYears = function (year) {
  if (!Number.isInteger(year) || year < 1)
    throw new Error("Year must be a positive integer");

  if (year % 4 === 0) {
    return year % 400 === 0 || year % 100 !== 0;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;

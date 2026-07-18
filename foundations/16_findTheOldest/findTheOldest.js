// Calculate age based on birth and death years
// If death year is not provided, use current year
const getAge = (birth, death) => {
  if (!death) death = new Date().getFullYear();
  return death - birth;
};

// Find the oldest person in an array of people
// Uses reduce to iterate through and compare ages
const findTheOldest = function (folks) {
  return folks.reduce((oldest, current) => {
    // Get age of the oldest person so far, or 0 if none yet
    const oldestAge = oldest
      ? getAge(oldest.yearOfBirth, oldest.yearOfDeath)
      : 0;
    // Get age of current person being evaluated
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

    // Return the older person, or current if they're older
    return oldestAge > currentAge ? oldest : current;
  }, null);
};

// Do not edit below this line
module.exports = findTheOldest;

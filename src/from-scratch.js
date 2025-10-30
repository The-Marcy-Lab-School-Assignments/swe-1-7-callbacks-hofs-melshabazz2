// Create callback functions for Higher-Order Functions:
const logEachValue = (arr) => {
  arr.forEach((value, index) => {
    console.log(`Value: ${value}, index: ${index}.`)
  })
};


const makePeopleHappy = (arr) => {
  arr.forEach((people) => people.isHappy = true)
};

const getEvenNumbers = (arr) => {
  return arr.filter((number) => number % 2 === 0)
};

const doubleEveryNumber = (arr) => {
  return arr.map((arr) => arr * 2)
};

const convertToBooleans = (arr) => {
  // return arr.map(Boolean)
  return arr.map(num => Boolean(num));
};

// Create your own Higher Order Functions:
const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

const myMap = (array, transform) => {
  return array.map(transform)
};

const myFilter = (array, test) => {
  return array.filter(test)
};

const myFind = (array, test) => {
  return array.find(test)
};

// Use Array.sort() and provide the correct callback sorting function:
module.exports = {
  logEachValue,
  makePeopleHappy,
  getEvenNumbers,
  doubleEveryNumber,
  convertToBooleans,
  myForEach,
  myMap,
  myFind,
  myFilter,
};

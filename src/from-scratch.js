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
  // create a new array
  const newArr = []
  // Loop through each element in the input array (original array)
  for (let i = 0; i < array.length; i++) {
    // apply the transform function to each element
    const newValue = transform(array[i])
    // add the transformed value to the new array
    newArr.push(newValue)
  }
  // return the new array with the transformed value
  return newArr
};

const myFilter = (array, test) => {
  // create a new array
  const newArr = []
  // loop through the elements in the input array (original array)
  for (let i = 0; i < array.length; i++) {
    // apply the test function to the current element
    const value = test(array[i])
    // if the rest returns true(or truthy), add the element to newArr
    if (value) {
      newArr.push(array[i])
    }
  }
  return newArr
};

const myFind = (array, test) => {
  // Loop through each element in the array
  for (let i = 0; i < array.length; i++) {
    // apply the test function to the current function
    checkEach = test(array[i])
    if (checkEach) {
      return array[i]
    }
  }
  return undefined
  // return array.find(test)
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

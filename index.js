/* CHALLENGE 1
Create a function addTwo that accepts one input and adds 2 to it. */

function addTwo(num) {
  return num + 2;
}

console.log('CHALLENGE 1:', addTwo(3));
console.log('CHALLENGE 1:', addTwo(10));

/* CHALLENGE 2
Create a function addS that accepts one input and adds an "s" to it. */

function addS(word) {
  return word + 's';
}

console.log('CHALLENGE 2:', addS('pizza'));
console.log('CHALLENGE 2:', addS('bagel'));

/* CHALLENGE 3
Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. */

function map(array, callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
}

console.log('CHALLENGE 3:', map([1, 2, 3], addTwo));

/* CHALLENGE 4
Create a function called forEach that takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. */

function forEach(array, callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
}

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
  alphabet += char;
});

console.log('CHALLENGE 4:', alphabet);

/* CHALLENGE 5
In CHALLENGE 3, you've created a function called map. In this CHALLENGE, you're going to rebuild the map function by creating a function called mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop. */

function mapWith(array, callback) {
  const output = [];
  array.forEach((element) => output.push(callback(element)));
  return output;
}

console.log('CHALLENGE 5:', mapWith([1, 2, 3], addTwo));

/* CHALLENGE 6
Create a function called reduce that takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function. */

function reduce(array, callback, initialValue) {
  const output = array.reduce(callback, initialValue);

  return output;
}

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};

console.log('CHALLENGE 6:', reduce(nums, add, 0));

/* CHALLENGE 7
Construct a function intersection that takes in an array of arrays, compares the inner arrays, and returns a new array with elements found in all of them. BONUS: Use reduce! */

function intersection(arrays) {
  // 1 option
  /* const output = arrays.reduce(function (accumulator, currentValue) {
    return accumulator.filter(function (x) {
      return currentValue.indexOf(x) > -1;
    });
  });
  return output;
 */
  // 2 option
  if (arrays.length === 0) return [];

  return arrays.reduce((accumulator, currentValue) => {
    return accumulator.filter((element) => currentValue.includes(element));
  });
}

console.log(
  'CHALLENGE 7:',
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);

/* CHALLENGE 8
Construct a function union that takes in an array of arrays, compares the inner arrays, and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first array. BONUS: Use reduce! */

function union(arrays) {
  // 1 option
  /*  const mergedArray = arrays.reduce(
    (result, array) => result.concat(array),
    []
  );
  const output = mergedArray.filter(
    (value, index) => mergedArray.indexOf(value) === index
  );
  return output; */

  //2 option
  return arrays.reduce((accumulator, currentValue) => {
    currentValue.forEach((element) => {
      if (!accumulator.includes(element)) {
        accumulator.push(element);
      }
    });
    return accumulator;
  }, []);
}

console.log(
  'CHALLENGE 8:',
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
);

/* CHALLENGE 9
Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value. */

function objOfMatches(array1, array2, callback) {
  const result = {};

  array1.forEach((element, index) => {
    const callBackResult = callback(element);

    if (callBackResult === array2[index]) {
      result[element] = array2[index];
    }
  });

  return result;
}

console.log(
  'CHALLENGE 9:',
  objOfMatches(
    ['hi', 'howdy', 'bye', 'later', 'hello'],
    ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
    function (str) {
      return str.toUpperCase();
    }
  )
);

/* CHALLENGE 10
Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key. */

function multiMap(values, callbacks) {
  const result = {};

  values.forEach((value) => {
    result[value] = [];

    callbacks.forEach((callback) => {
      result[value].push(callback(value));
    });
  });
  return result;
}

const values = ['catfood', 'glue', 'beer'];
const callbacks = [
  function (str) {
    return str.toUpperCase();
  },
  function (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  },
  function (str) {
    return str + str;
  },
];

console.log('CHALLENGE 10:', multiMap(values, callbacks));

/* CHALLENGE 11
Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter. objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback. */

function objectFilter(obj, callback) {
  const result = {};

  for (const key in obj) {
    if (callback(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}

const cities = {
  London: 'LONDON',
  LA: 'Los Angeles',
  Paris: 'PARIS',
};
console.log(
  'CHALLENGE 11:',
  objectFilter(cities, (city) => city.toUpperCase() === city)
);

/* CHALLENGE 12
Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.
 */

function majority(array, callback) {
  let trueCount = 0;
  let falseCount = 0;

  array.forEach((element) => {
    if (callback(element)) {
      trueCount++;
    } else {
      falseCount++;
    }
  });

  if (trueCount > falseCount) {
    return true;
  } else {
    return false;
  }
}

const isOdd = function (num) {
  return num % 2 === 1;
};
console.log('CHALLENGE 12:', majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log('CHALLENGE 12:', majority([2, 3, 4, 5], isOdd)); // should log: false

/* CHALLENGE 13
Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second. */

function prioritize(array, callback) {
  // 1 option
  /*  const result = [];
  array.forEach((element) => {
    if (callback(element)) {
      result.unshift(element);
    } else {
      result.push(element);
    }
  });
  return result; */

  // 2 option
  const trueValues = array.filter(callback);
  const falseValues = array.filter((element) => !callback(element));

  return [...trueValues, ...falseValues];
}

const startsWithS = function (str) {
  return str[0] === 's' || str[0] === 'S';
};
console.log(
  'CHALLENGE 13:',
  prioritize(
    ['fygaro', 'curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends', 'sorry'],
    startsWithS
  )
);

/* CHALLENGE 14
Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.
 */

function countBy(array, callback) {
  const result = {};

  array.forEach((element) => {
    const value = callback(element);

    result[value] = (result[value] || 0) + 1;
  });
  return result;
}
console.log(
  'CHALLENGE 14:',
  countBy([1, 2, 3, 4, 5, 7, 22, 45, 8], function (num) {
    if (num % 2 === 0) return 'even';
    else return 'odd';
  })
);
/* CHALLENGE 15
Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback. */

function groupBy(array, callback) {
  const result = {};

  array.forEach((element) => {
    const key = callback(element);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(element);
  });
  return result;
}

const decimals = [1.3, 2.1, 2.4, 5.1, 1.8, 3.4, 3.6, 4.5];
const floored = function (num) {
  return Math.floor(num);
};
console.log('CHALLENGE 15:', groupBy(decimals, floored));

/* CHALLENGE 16
Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback. */

function goodKeys(obj, callback) {
  const result = [];

  for (const key in obj) {
    if (callback(obj[key])) {
      result.push(key);
    }
  }
  return result;
}

const sunny = {
  mac: 'priest',
  dennis: 'calculating',
  charlie: 'birdlaw',
  dee: 'bird',
  frank: 'warthog',
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === 'bird';
};
console.log('CHALLENGE 16:', goodKeys(sunny, startsWithBird));

/* CHALLENGE 17
Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function). */

function commutative(func1, func2, value) {
  const result1 = func1(value);
  const result2 = func2(result1);

  const result3 = func2(value);
  const result4 = func1(result3);

  return result2 === result4;
}

const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log('CHALLENGE 17:', commutative(multBy3, divBy4, 11));
console.log('CHALLENGE 17:', commutative(multBy3, subtract5, 10));
console.log('CHALLENGE 17:', commutative(divBy4, subtract5, 48));

/* CHALLENGE 18
Create a function objFilter that accepts an object and a callback. objFilter should make a new object, and then iterate through the passed-in object, using each key as input for the callback. If the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object. objFilter will return this new object. */

function objFilter(obj, callback) {
  const result = {};

  for (const key in obj) {
    if (callback(key) === obj[key]) {
      result[key] = obj[key];
    }
  }
  return result;
}

const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
console.log('CHALLENGE 18:', objFilter(startingObj, half));

/* CHALLENGE 19
Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. rating should return the percentage of functions from the array that return true when the value is used as input. */

function rating(arrOfFuncs, value) {
  let trueCount = 0;

  arrOfFuncs.forEach((func) => {
    if (func(value)) {
      trueCount++;
    }
    console.log(func(value));
  });
  const precentage = (trueCount / arrOfFuncs.length) * 100;

  return precentage + '%';
}

const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log('CHALLENGE 19:', rating(checks, 64));
console.log('CHALLENGE 19:', rating(checks, 66));

/* CHALLENGE 20
Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output. */

function pipe(arrOfFuncs, value) {
  let result = value;

  for (const func of arrOfFuncs) {
    result = func(result);
  }
  return result;
}

const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log('CHALLENGE 20:', pipe(capAddlowRepeat, 'cat'));

/* CHALLENGE 21
Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input. */

function highestFunc(objOfFuncs, subject) {
  let highestKey = null;
  let highestValue = -Infinity;

  for (const key in objOfFuncs) {
    const func = objOfFuncs[key];
    const result = func(subject);

    if (result > highestValue) {
      highestValue = result;
      highestKey = key;
    }
  }
  return highestKey;
}

const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log('CHALLENGE 21:', highestFunc(groupOfFuncs, 5));
console.log('CHALLENGE 21:', highestFunc(groupOfFuncs, 11));
console.log('CHALLENGE 21:', highestFunc(groupOfFuncs, -20));
/* CHALLENGE 22
Create a function, combineOperations, that takes two parameters: a starting value and an array of functions. combineOperations should pass the starting value into the first function in the array. combineOperations should pass the value returned by the first function into the second function, and so on until every function in the array has been called. combineOperations should return the final value returned by the last function in the array. */

function combineOperations(startVal, arrOfFuncs) {
  let result = startVal;

  for (const func of arrOfFuncs) {
    result = func(result);
  }
  return result;
}

function add100(num) {
  return num + 100;
}
function addTen(num) {
  return num + 10;
}
function divByFive(num) {
  return num / 5;
}
function multiplyByThree(num) {
  return num * 3;
}
function multiplyByFive(num) {
  return num * 5;
}

console.log(
  'CHALLENGE 22:',
  combineOperations(0, [divByFive, multiplyByFive, addTen])
); // Should output 10
console.log(
  'CHALLENGE 22:',
  combineOperations(0, [add100, divByFive, multiplyByThree])
); // Should output 60 -->

/* CHALLENGE 23
Define a function myFunc that takes an array and a callback. myFunc should pass each element from the array (in order) into the callback. If the callback returns true, myFunc should return the index of the current element. If the callback never returns true, myFunc should return -1; */

function myFunc(array, callback) {
  // 1 option counts how many true answers is
  /* let countTrue = -1;

  array.forEach((element) => {
    const result = callback(element);

    if (result === true) {
      countTrue = 0 + 1;
    }
  });
  return countTrue; */
  // 2 option returns array of all true answers indexes
  /* const trueIndices = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      trueIndices.push(i);
    }
  }
  if (trueIndices.length === 0) {
    return -1;
  }
  return trueIndices; */

  // 3 option return 1st true answer index
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i;
    }
  }
  return -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd1(num) {
  return num % 2 !== 0;
}
console.log('CHALLENGE 23:', myFunc(numbers, isOdd1));
console.log('CHALLENGE 23:', myFunc(evens, isOdd1));

/* CHALLENGE 24
Write a function myForEach that accepts an array and a callback function. Your function should pass each element of the array (in order) into the callback function. The behavior of this function should mirror the functionality of the native .forEach() JavaScript array method as closely as possible. */
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

const nums1 = [1, 2, 3];
myForEach(nums1, addToSum);
console.log('CHALLENGE 24:', sum);

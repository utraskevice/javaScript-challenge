/* CHALLENGE 1
Create a function addTwo that accepts one input and adds 2 to it. */

function addTwo(num) {
  return num + 2;
}

console.log('Challenge 1:', addTwo(3));
console.log('Challenge 1:', addTwo(10));

/* CHALLENGE 2
Create a function addS that accepts one input and adds an "s" to it. */

function addS(word) {
  return word + 's';
}

console.log('Challenge 2:', addS('pizza'));
console.log('Challenge 2:', addS('bagel'));

/* CHALLLENGE 3
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

console.log('Challenge 3:', map([1, 2, 3], addTwo));

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

console.log('Challenge 4:', alphabet);

/* CHALLENGE 5
In challenge 3, you've created a function called map. In this challenge, you're going to rebuild the map function by creating a function called mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop. */

function mapWith(array, callback) {
  const output = [];
  array.forEach((element) => output.push(callback(element)));
  return output;
}

console.log('Challenge 5:', mapWith([1, 2, 3], addTwo));

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

console.log('Challenge 6:', reduce(nums, add, 0));

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
  'Challenge 7:',
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
  'Challenge 8:',
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
  'Challenge 9:',
  objOfMatches(
    ['hi', 'howdy', 'bye', 'later', 'hello'],
    ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
    function (str) {
      return str.toUpperCase();
    }
  )
);

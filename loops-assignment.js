/*******************
 * FOR LOOPS
 *******************/

/**
 * @difficulty easy, ~2 minutes
 *
 * write a function that returns the triangle number a given number of layers.
 * For example, a 5 layer triangle number would look like so:
 *
 *      #     layer 1 has 1
 *     # #    layer 2 has 2, so 3 (1+2) in total
 *    # # #   layer 3 has 6 (1+2+3) in total
 *   # # # #  layer 4 has 10 in total
 *  # # # # # layer 5 has 15 (1+2+3+4+5) in total
 *
 * HINTS:
 * - store the total to return in a variable starting at 0
 * - add to the total within your for loop
 * - return the total
 *
 * @param {number} layers number of layers in triangle
 * @returns {number} `total`
 */
function getTriangularNumber(layers) {
  let total = 0

  for (let i = 1; i <= layers; i++) {
    total += i
  }

  return total
};

/**
 * @difficulty easy, ~2 minutes
 *
 * write a function that counts down from a given number
 * the return ends with BOOM!
 * For example, if the countdown number starts at 3,
 * the return would be:
 *
 * 3... 2... 1... BOOM!
 *
 * HINTS:
 * - store the string to return in a variable
 * - start your for loop at the end and count down
 * - concatenate the next number and periods within the loop
 * - after the loop, add the BOOM! string and then return the string
 *
 * @param {number} from number to countdown from
 * @returns {string} the countdown string
 */
function getCountdown(from) {
  let str = '';

  for (let i = from; i > 0; i--) {
    str = str + i + '... ';
  };

  str = str + 'BOOM!';

  return str;
};

/**
 * @difficulty easy, ~5 minutes
 *
 * Fizzbuzz counts from 1 to a given number (n)
 * when counting,
 * if the current number is divisible by 3, it's a fizz number
 * if the current number is divisible by 5, it's a buzz number
 *
 * Write a function that returns the total of the fizz and buzz numbers for a given (n)
 *
 * HINTS:
 * - store the total in a variable
 * - your loop should count from 1 to n
 * - inside the loop, use conditions to decide when to add to the total
 * - finally, return the total when the loop is finished
 *
 * @param {number} n the number to count to
 * @returns {number} `total`
 */
function getFizzBuzzTotal(n) {
  let total = 0

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
    total += i
  } else if (i %5 === 0) {
    total += i
  }}

  return total
};


/**
 * @difficulty intermediate/hard, ~10 minutes
 *
 * Write a function that accepts an array of arrays, `nestedArray`, then returns the sum of the multiples.
 *
 * For example, the `nestedArray` could look like so:
 * `[[1, 2], [3, 4, 5], [6], [7, 8], []]`
 *
 * This is an array with 5 elements, each element is also an array.
 *
 * The function should calculate the multiple of the nested arrays but always be at least `1`. Then add the total. With the above example the total would be:
 *
 * `[[1, 2], [3, 4, 5], [6], [7, 8], []]`
 * so:
 * `(1 * 2) + (3 * 4 * 5) + (6) + (7 * 8) + 1`
 * return:
 * `125`
 *
 * HINTS:
 * - store the total in a variable starting at 0
 * - make a for loop that iterates through the items of the outer array
 * - in each iteration of the outer array, make an inner total starting at 1
 * - in each iteration of the outer array, perform a nested for loop for the inner array
 * - multiple the items within the nested for loop
 * - after the nested loop, add the innerTotal to the total
 * - after all loops, return the total
 *
 * @param {array of arrays of numbers} nestedArray, e.g. `[[3], [2], [1, 1]]`
 * @returns {number} `total` the sum of multiples of inner arrays
 */
function getMultipliedSums(nestedArray) {
  let total = 0

  for (let i = 0; i < nestedArray.length; i++) {
    let innerTotal = 1;
    const innerArray = nestedArray[i];

    for (let n= 0; n < innerArray.length; n++) {
      innerTotal *= innerArray[n]
    }

    total += innerTotal 
  }

  return total;
};


/*******************
 * WHILE LOOPS
 *******************/

/**
 * @difficulty easy, ~5 minutes
 *
 * Write a function that returns the index number of an value within an array. The function accepts 2 arguments: the array and the value.
 *
 * HINTS:
 * - initialise a variable to store the `index`, start at 0
 * - write a while loop that increments the `index` within each iteration
 * - exit the while loop when the index is equal to or greater than the `array.length`
 * - if the array item at the index is the same as the `valueToFind`, return the index
 * - if the while loop exits without finding a match, return `-1`.
 *
 * @param {array} array of strings or numbers
 * @param {string or number} valueToFind within the
 * @returns {number} the index number of the location of the valueToFind OR `-1` if the value isn't found.
 */
function findMatchingIndex(array, valueToFind) {
  let index = 0;

  while (index < array.length) {
    if (array[index] === valueToFind) {
      return index
    }

    index++
  }

    return -1;
};

/**
 * @difficulty easy, ~5 minutes
 *
 * Write a function that calculates the mean of the numbers in an array. The mean is the sum of all of the numbers divided by the number of numbers (array.length).
 *
 * HINTS:
 * - initialise two variables, one for the index to increment within the while loop. This can be used to select array values
 * - the second variable can store the sum of all of the array items
 * - write a while loop that iterates through the array
 * - add the item at each index to the total
 * - when the while loop exits, return the total divided by the size of the array
 * - if the array has no size, return 0
 *
 * @param {array} array of numbers
 * @returns {number} the mean average of array numbers or `0`
 */
function getMeanAverage(array) {
  let index = 0;
  let total = 0;

  while (index < array.length) {
    total += array[index];
    index ++;
  };

  return total / array.length || 0;
};

/**
 * @difficulty easy, ~4 minutes
 *
 * Write a function that checks to see if every item in an array matches a given value. If all items match, return true, otherwise return false.
 *
 * HINTS:
 * - Write a while loop that iterates through an array by incrementing an index variable and exits when the index goes larger than the array.
 * - Check each item in the array against the valueToCheck
 * - if any items don't equal the valueToCheck, return false
 * - if the loop completes without returning false, return true
 *
 * @param {array} array of strings or numbers
 * @param {string or number} valueToCheck at each position in the array
 * @returns {boolean} true if all of the items in the array are the same as the `valueToCheck`, false otherwise.
 */
function all(array, valueToCheck) {
  let index =0;

  while (index < array.length) {
    if (array[index] !== valueToCheck)
    { return false
    }
    index ++;}

    return true;
}

/**
 * @difficulty intermediate/hard, ~10 minutes
 *
 * Write a function that accpets an array and returns a count of the values that sequentially match the start of the array.
 *
 * For example,
 *
 * ```js
 * [1, 1, 1, 1, 2] // has 4 items sequentially the same
 * [3, 4, 5] // has only 1 item sequentially the same
 * [null, null, null, true] // has 3 items sequentially the same
 * [10, 2, 2, 2] // returns 1, because the sequence must start at the beginning
 * ['foo', 'foo'] // returns 2
 * [true, true, false, true] // has 2 items sequentially the same from the first position
 * ```
 *
 * HINTS:
 * - initialise two variables, one for the totalCount and one for the index
 * - use a while loop through the array, incrementing the index.
 * - write a condition that ignores the first index
 * - within this condition, write another condition that checks if the previous value is the same as the current value
 * - if the two values aren't the same, break the loop
 * - if the condition doesn't pass, increment the totalCount count
 * - return the totalCount if the loop finishes
 *
 * @param {array} array of strings, numbers, null, undefined or booleans
 * @returns {number} count of items in array that have the same value in a sequence starting at the beginning of the array.
 */
function getCountOfSequence(array) {
  let totalCount = 0;
  let index = 0; 

  while (index < array.length) {

    if (index > 0 && array[index] !== array[index-1]) {
      break;
    };

    totalCount += 1;
    index ++; 
  }
    return totalCount;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {

  if (n < 1) {
    return false;
}

  while (n % 3 == 0) {
    n /= 3;
  }
  return n == 1;
};

isPowerOfThree(27); // => true
isPowerOfThree(0); // => false
isPowerOfThree(9); // => true
isPowerOfThree(45); // => false

// https://stackoverflow.com/questions/1804311/how-to-check-if-an-integer-is-a-power-of-3
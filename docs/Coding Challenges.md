# Coding Challenges

LeetCode

## Strings

### Reverse String

Write a function that reverses a string. The input string is given as an array of characters `s`.

Example 1:

`
Input: s = ["h","e","l","l","o"]   
Output: ["o","l","l","e","h"]
`

Example 2:

`
Input: s = ["H","a","n","n","a","h"]   
Output: ["h","a","n","n","a","H"]
`

Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

**ANSWER**
```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    s.reverse();
};
```

**EXPLANATION**   
The `reverse()` method reverses an array in place. The first array element becomes the last and the last becomes the first.

### Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

**ANSWER**
```javascript
/*
Rules:
1) Negative numbers should remain negative.
2) Any leading zeroes should be removed.
3) The function can accept floats or integers.
4) The function will return integers as integers.

Constraints: -2^31 <= x <= 2^31 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // First, convert the number to a string
  // .split('') converts the String into an Array of characters.
  // .split is used b/c reverse only works on an array
  // .join('') reassembles the reversed characters into a String.
  // parseFloat converts a string to a float - which gets rid of trailing zeros and - sign
  // Math.sign(number) is multiplied to get the sign of the original number (- or +)
  let reverseX =
    parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);

  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31);

  if ((min <= reverseX) && (reverseX <= max)) {
    return reverseX;
  } else return 0;
};

console.log(reverse(123)); // => 321
console.log(reverse(-123)); // => -321
console.log(reverse(120)); // => 21
console.log(reverse(0)); // => 0
console.log(reverse(1534236469)); // => 0
```

### First Unique Character in a String

Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1. Note: You may assume the string contains only lowercase English letters.

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // iterates over the string
  for (i = 0; i < s.length; i++) {
    // lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value
    // if the first index of the char is the same as the last index of that char, it is unique
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("leetcode")); // => 0
console.log(firstUniqChar("loveleetcode")); // => 2
console.log(firstUniqChar("")); // => -1

```

### Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // An anagram is produced by rearranging the letters of ss into tt. Therefore, if tt is an anagram of ss, sorting both strings will result in two identical strings. Furthermore, if ss and tt have different lengths, tt must not be an anagram of ss and we can return early.
  // This approach takes the two strings, creates an array of it and orders it, then again turns toString and compares
  const sSorted = s.split("").sort().toString();
  const tSorted = t.split("").sort().toString();
  if (sSorted === tSorted) return true;
  return false;
};
console.log(isAnagram("anagram", "nagaram")); // => true
console.log(isAnagram("rat", "car")); // => false
```

### Valid Palindrome

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.s consists only of printable ASCII characters.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

  let sForward = s.split("").filter(character => /[a-zA-Z0-9]/.test(character)).join("").toLowerCase();
  
  // takes the forward string, turns to array, reverses the characters and re-joins to string
  let sBackward = sForward.split("").reverse().join("");
  console.log(sForward + " " + sBackward); 

  if (sForward === sBackward) return true; // it is a palidrom
  return false; // otherwise it is not
};

// Explanation: "amanaplanacanalpanama" is a palindrome.
console.log(isPalindrome("A man, a plan, a canal: Panama")); // => true

// Explanation: "raceacar" is not a palindrome.
console.log(isPalindrome("race a car")); // => false

console.log(isPalindrome("a.")); // => false

console.log(isPalindrome("Marge, let's \"[went].\" I await {news} telegram.")); // => true
```

## Math

### FizzBuzz 

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  // initialize empty array
  let fizzBuzzStringArray = [];

  // loops through between 1 and n 
  for (let i = 1; i <= n; i++) {
    // if its a multiple of 3 & 5
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzStringArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      // multiple of 3
      fizzBuzzStringArray.push("Fizz");
    } else if (i % 5 === 0) {
      // multiple of 5
      fizzBuzzStringArray.push("Buzz");
    } else fizzBuzzStringArray.push(i.toString());
  }
  console.log(fizzBuzzStringArray);

  return fizzBuzzStringArray;
};

fizzBuzz(15); // =>
/*
 [
  "1",
  "2",
  "Fizz",
  "4",
  "Buzz",
  "Fizz",
  "7",
  "8",
  "Fizz",
  "Buzz",
  "11",
  "Fizz",
  "13",
  "14",
  "FizzBuzz"
]
*/
```
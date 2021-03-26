/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {

  if (needle === "") return 0;

  if (needle === haystack) return 0;

  
    
};

console.log(strStr("hello", "ll")); // => 2
console.log(strStr("aaaaa", "bba")); // =>  -1
console.log(strStr("","")); // => 0
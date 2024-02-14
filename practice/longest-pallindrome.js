// Given a string S, find the longest palindromic substring in S. Substring of string S: S[ i . . . . j ] where 0 ≤ i ≤ j < len(S). Palindrome string: A string that reads the same backward. More formally, S is a palindrome if reverse(S) = S. In case of conflict, return the substring which occurs first ( with the least starting index).
// Input:
// S = "aaaabbaa"
// Output: aabbaa
// Explanation: The longest Palindromic
// substring is "aabbaa".

const isPalindrome = (str) => {
  const strArr = [...str];
  let i = 0;
  let j = strArr.length - 1;

  while (i <= j) {
    if (strArr[i] !== strArr[j]) return false;
    i += 1;
    j -= 1;
  }

  return true;
};

const getLongestPalindrome = (str) => {
  let longestPallindrome = "";
  for (let i = 0; i <= str.length; i += 1) {
    for (let j = i + 1; j <= str.length; j += 1) {
      const checkStr = str.slice(i, j);
      if (isPalindrome(checkStr)) {
        if (longestPallindrome.length < checkStr.length)
          longestPallindrome = checkStr;
      }
    }
  }
  return longestPallindrome;
};

console.log(getLongestPalindrome("abc"));

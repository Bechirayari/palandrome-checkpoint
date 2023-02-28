palandrome
var: 
word : string
iresult : boolean
function isPalindrome(word) {
  // Base cases: empty string or single character string are palindromes
  if (word.length <= 1) {
    return true;
  }
  
  // Check if the first and last characters are the same
  if (word[0] === word[word.length - 1]) {
    // Recursively check if the substring between the first and last characters is also a palindrome
    return isPalindrome(word.substring(1, word.length - 1));
  }
  
  // If the first and last characters are different, the word is not a palindrome
  return false;
}

// Example usage:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

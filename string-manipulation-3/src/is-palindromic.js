/* exported isPalindromic */

/* function declaration with parameter: string (a js string)
   need to make string a string that has no white spaces by examining each character
     of string and adding to another empty variable if the character is not a " "
   use this new string to check if the first and last characters of the string are
     strictly equal (repeat for entire string using a for loop to iterate through)
   if they are not strictly equal, return false
   if at the end of checking all characters, function has not returned false yet,
     return true
*/

function isPalindromic(string) {
  var newString = '';
  for (var k = 0; k < string.length; k++) {
    if (string[k] !== ' ') {
      newString += string[k];
    }
  }
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] !== newString[newString.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

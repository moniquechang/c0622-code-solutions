/* exported isVowel */

/* function declaration with parameter: char (one string character)
   variable declaration with assignment of an array of all vowels
     (upper and lower case)
   for loop (i = 0, i < variable array length, i++) (i is the index of array)
   if statement with condition that char strictly equal to values in array (array[i]),
     then return true
   after loop ends, if char did not === any of the values in array, return false
*/

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}

/* exported numVowels */

/* function declaration with parameter: string (a string with one or more words)
   variable declaration that will keep track of # of vowels in parameter string
   for loop to check every character of parameter string (i is indexes of string)
   if statement where if a letter of parameter string is a vowel, to increment the
     variable keeping count of # of variables
   return the variable keeping count from function
*/

function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' ||
      string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U') {
      count++;
    }
  }
  return count;
}

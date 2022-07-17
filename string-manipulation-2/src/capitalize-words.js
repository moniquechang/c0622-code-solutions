/* exported capitalizeWords */

/* function declaration with parameter: string (a string with one or more individual words)
   variable declaration to create new string (newString) where the parameter string is all lowercased
   make first index [0] of newString uppercase and add to another variable (finalString) that we will return at the end
   for loop to go through all index #s of newString and if the value is not a ' ', concatenate to finalString
   but if the value is ' ', then make that [index# + 1] value uppercase (because it is the first letter of a word)
   add the index# and index#+1 values to finalString
   increment the index# before final increment expression b/c we already added the index+1 to finalString
     (need to skip that index and go to next one)
   return finalString from funciton
*/

function capitalizeWords(string) {
  var newString = string.toLowerCase();
  var finalString = newString[0].toUpperCase();
  for (var i = 1; i < newString.length; i++) {
    if (newString[i] === ' ') {
      finalString += newString[i] + newString[i + 1].toUpperCase();
      i++;
    } else {
      finalString += newString[i];
    }
  }
  return finalString;
}

/* exported firstChars */

/* function declaration with parameter: length(how many letters of string to return)
     and string (a string)
   variable declaration for final string to return
   for loop where i is the indexes of the string parameter
   if string's length is shorter than the length parameter, return the string
   otherwise return the string with the length amount of characters using string[i]
     and concatenating to final string variable (using +=)
*/

function firstChars(length, string) {
  var finalString = '';
  for (var i = 0; i < length; i++) {
    if (string.length < length) {
      finalString = string;
    } else {
      finalString += string[i];
    }
  }
  return finalString;
}

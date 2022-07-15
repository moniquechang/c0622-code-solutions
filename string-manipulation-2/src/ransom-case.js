/* exported ransomCase */

/* function declaration with parameter: string (a string)
   variable declaration for an empty string (finalString)
   for loop where i is index/position for letters of string parameter
     (i = 0, i < string.length, i++)
   if statement where if i is even (divisible by 2) string[i] is made lowercase
     and added to finalString variable (using +=)
   else statement where if i is odd, to make string[i] uppercase and concatenate
     to finalString variable (using +=)
   return finalString from function after loop ends
*/

function ransomCase(string) {
  var finalString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      finalString += string[i].toLowerCase();
    } else {
      finalString += string[i].toUpperCase();
    }
  }
  return finalString;
}

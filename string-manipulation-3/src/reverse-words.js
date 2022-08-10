/* exported reverseWords */

/* need a new variable to return at the end of function
   use split method to split the parameter string into indiviudal words (split on space character)
   loop through each word in the string in increasing index order
   loop through each character of each word in the string in reverse order (not increasing index)
   add each character to the new variable (+= operator)
   add a space character between each word, expect for the last word of the string
   return the new variable at the end of function
*/

function reverseWords(string) {
  var stringArr = string.split(' ');
  var newString = '';
  for (var i = 0; i < stringArr.length; i++) {
    for (var k = stringArr[i].length - 1; k >= 0; k--) {
      if (k !== 0 || (k === 0 && i === stringArr.length - 1)) {
        newString += stringArr[i][k];
      } else if (k === 0 && i !== stringArr.length - 1) {
        newString += stringArr[i][k] + ' ';
      }
    }
  }
  return newString;
}

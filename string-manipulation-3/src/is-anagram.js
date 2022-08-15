/* exported isAnagram */

/* need variables to hold the two parameter strings
   need to make each string a string that has no space characters by examining each character
     of string and adding to the new variables if the character is not a " "
     (do this by using for loops through each parameter string)
   loop through first string from 0 index
   loop through second string w/in first string from 0 index (for loop in a for loop)
   if character at first string matches the character of second string:
     assign boolean true to a new variable named result
     remove that character from the second string (replace with '')
     increment variable that corresponds to indexes of second string so that the loop
       for the second string will end (and loop for first string will move on to next index)
   if character at first string doesn't match the character of the second string:
     assign the boolean value false to the variable result
   return variable result at end of function
*/

function isAnagram(firstString, secondString) {
  var newFirstString = '';
  var newSecondString = '';
  for (var f = 0; f < firstString.length; f++) {
    if (firstString[f] !== ' ') {
      newFirstString += firstString[f];
    }
  }
  for (var s = 0; s < secondString.length; s++) {
    if (secondString[s] !== ' ') {
      newSecondString += secondString[s];
    }
  }
  for (var i = 0; i < newFirstString.length; i++) {
    for (var k = 0; k < newSecondString.length; k++) {
      if (newFirstString[i] === newSecondString[k] && k !== newSecondString.length - 1) {
        var result = true;
        newSecondString = newSecondString.replace(newSecondString[k], '');
        k = newSecondString.length;
      } else if (newFirstString[i] !== newSecondString[k]) {
        result = false;
      }
    }
  }
  return result;
}

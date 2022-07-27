/* exported isAnagram */

/* want to get characters of first string and check if they match the characters of second string
want to return false if characters do not match
slice method?
want to remove character from second string if they match and continue loop
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

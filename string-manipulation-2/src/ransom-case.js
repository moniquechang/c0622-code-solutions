/* exported ransomCase */

/*
function ransomCase(string) {
  var finalString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      string[i].toLowerCase();
    } else {
      string[i].toUpperCase();
    }
    finalString += string[i];
  }
  return finalString;
}
*/

function ransomCase(string) {
  var newString = string.toUpperCase();
  for (var i = 0; i < string.length; i + 2) {
    newString[i].toLowerCase();
  }
  return newString;
}

/* exported reverseWords */

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

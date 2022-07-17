/* exported swapChars */

/*  function declaration with parameter: firstIndex(index to switch with secondIndex),
      secondIndex(index to switch with firstIndex), string(a string)
    variable declaration for final string to return
    variable declarations for values at firstIndex and secondIndex
    for loop where i is indexes of string
    if statement where if i equals firstIndex, concatentate the secondIndex value to final string
    if statement where if i equals secondIndex, concatenate the firstIndex value to final string
    else statement to concatenate string[i] to final string
    return final string from function
*/

function swapChars(firstIndex, secondIndex, string) {
  var finalString = '';
  var firstIndexValue = string[firstIndex];
  var secondIndexValue = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      finalString += secondIndexValue;
    } else if (i === secondIndex) {
      finalString += firstIndexValue;
    } else {
      finalString += string[i];
    }
  }
  return finalString;
}

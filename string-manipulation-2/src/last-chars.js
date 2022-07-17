/* exported lastChars */

/*  function declaration with parameter: length(how long to cut string)
      and string (a string)
    variable declaration for final string to return
    for loop where i is indexes of parameter string
      i should start at the position of where to start the new string
       (i = string.length - length)
    if statement for strings that are shorter than the length parameter, to
     return string as finalstring
    else statement to concatente string[i] to the final string variable (+=)
    return final string from function
*/

function lastChars(length, string) {
  var finalString = '';
  for (var i = string.length - length; i < string.length; i++) {
    if (string.length < length) {
      return string;
    } else {
      finalString += string[i];
    }
  }
  return finalString;
}

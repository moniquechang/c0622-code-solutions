/* exported includes */

/*  function declaration with parameter: array (an array) and value (value in array)
    for loop where i is indexes of array
    if array[i] matches value(parameter), then return true
    return false if none of the array items match the value
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

/* exported takeRight */

/*  function declaration with parameter: array (an array) and
      count (number of items from right of array to return)
    variable declaration for final array to return (is empty at first)
    for loop where i is indexes of parameter array and i starts at array.length - count
      b/c starting from the right of an array, not the left
    if statement to account for when the count is larger than array.length
      (then the final array is equal to the parameter array)
    otherwise need to push array[i] into final array variable
    return final array from function after loop ends
*/

function takeRight(array, count) {
  var finalArr = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count > array.length) {
      finalArr = array;
    } else {
      finalArr.push(array[i]);
    }
  }
  return finalArr;
}

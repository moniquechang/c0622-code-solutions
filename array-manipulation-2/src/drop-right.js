/* exported dropRight */

/*  function declaration with parameter: array (an array)
      and count(number of items in array to disgard)
    variable declaration for final array to return (is empty at first)
    for loop where i is indexes of parameter array and condition statement is
      that i is less than the array.length minus the count
    also need to take into account for empty array parameter: just return an empty array
    otherwise push the array[i] into the final array
    return the final array from the function
*/

function dropRight(array, count) {
  var finalArr = [];
  for (var i = 0; i < array.length - count; i++) {
    if (array.length === 0) {
      finalArr = [];
    } else {
      finalArr.push(array[i]);
    }
  }
  return finalArr;
}

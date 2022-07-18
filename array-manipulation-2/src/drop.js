/* exported drop */

/*  function declaration with parameter array(an array)
      and count (number of items in array to drop)
    variable declaration for final array to return (is empty at first)
    for loop where i is the indexes of parameter array to push items from parameter
      array into final array starting from the index number equal to that of count parameter
    if statement to account for empty parameter arrays, to return an empty array
    return the final array from function
*/

function drop(array, count) {
  var finalArr = [];
  for (var i = count; i < array.length; i++) {
    if (array.length === 0) {
      finalArr = [];
    } else {
      finalArr.push(array[i]);
    }
  }
  return finalArr;
}

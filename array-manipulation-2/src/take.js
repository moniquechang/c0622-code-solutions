/* exported take */

/* function declaration with parameter: array (an array)
     and count (number of items in array to return)
   variable declaration for final array (is empty at first)
   for loop to push count number of items from parameter array to final array
     i is index numbers of parameter array
   need to account for arrays where the array.length is zero (an empty array),
     to return an empty array
   return the final array from the function
*/

function take(array, count) {
  var finalArr = [];
  for (var i = 0; i < count; i++) {
    if (array.length === 0) {
      return [];
    } else {
      finalArr.push(array[i]);
    }
  }
  return finalArr;
}

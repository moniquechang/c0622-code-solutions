/* exported reverse */

/* function declaration with parameter: array (an array)
   variable declaration and assign empty array (newArray)
   for loop where i is index numbers of parameter array (i = array.length - 1, i >= 0, i--)
     because we are trying to find array elements in reverse order, need to
     start at highest index number (array.length - 1) and end at lowest index number (which is zero)
   push array element values using i (from highest value to lowest) into newArray
   return newArray from function after loop ends
*/

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

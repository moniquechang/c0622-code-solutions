/* exported flatten */

/* need variable for a new array to return at end of function (is empty at first)
   loop through parameter array and check if value at each index in parameter
     array is also an array (use a for loop)
   if it is an array, loop through that index array w/ another for loop
   push the items into the new variable array
   if not an array, push value into new variable array
   return new variable array at end of function
*/

function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var k = 0; k < array[i].length; k++) {
        newArr.push(array[i][k]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

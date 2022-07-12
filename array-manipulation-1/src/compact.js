/* exported compact */

/* function declaration with parameter: array (an array)
   variable declration assinged to new, empty array (newArray)
   for loop where i is index num of parameter array
     (i = 0, i < array length, i++)
   if statement where if elements in array are truthy values, push values into new array
   new array is returned from function after loop ends
*/

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

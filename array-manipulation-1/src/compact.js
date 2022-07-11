/* exported compact */

/* function declaration with parameter: array (an array)
   variable declration assinged to new, empty array (newArray)
   for loop where i is index num of parameter array
     (i = 0, i < array length, i++)
   if statement where if elements in array do not equal falsey values of: false,
     null, undefined, 0, NaN, and '' then array element gets pushed to new array
       (have to use Number.isNaN() for NaN condition)
   new array is returned from function after loop ends
*/

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== 0 && array[i] !== undefined && array[i] !== '' && Number.isNaN(array[i]) !== true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

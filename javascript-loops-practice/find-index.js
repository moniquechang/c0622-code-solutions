/* exported findIndex */

/* function purpose: look for value (parameter) in an array(parameter), and return index at which value is found (if no value in array, return -1)
function declaration with paramter: array (an array) and value (value to look for in array)
for (i=0, i < array.length, i++) (i is index of array)
if array[i] === value, return the i value (if statment)
return -1 at end of loop if no values in array match the value(parameter) */

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

/* exported includesSeven */

/* function purpose: check if number 7 is in array and return a boolean depending on result
function declaration with parameter: array (an array)
for (i=0, i < array.length, i++) (i is index of array)
if array[i] === 7 return true (use if statement)
return false at the end of loop if none of the array values are 7 (and didn't return true) */

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}

/* exported getIndexes */

/*
purpose of function: return an array with index numbers of another array (the parameter)
function declaration with parameter: array (an array)
variable declation for an empty array
for loop i = 0, i < array.length, i++  (i is index num of array (parameter))
push index values (which are i) to new empty array
return array with index values
*/

function getIndexes(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(i);
  }
  return newArray;
}

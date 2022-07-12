/* exported tail */

/* function declaration with parameter: array (an array)
   variable declaration and assign a new, empty array (newArray)
   for loop where i is index numbers of parameter array
     (i = 1, i < array.length, i++) i starts at one because we do not want to
     include the first element of array (which is index 0)
   push parameter array values (using i) into new, empty array
   return new array (newArray) from function after loop ends
  */

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

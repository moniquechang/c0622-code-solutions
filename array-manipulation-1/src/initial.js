/* exported initial */

/* function declaration with parameter: array (an array)
   variable declaration and assign a new, empty array (newArray)
   for loop where i is index numbers of parameter array
     (i = 0, i < array.length - 1, i++) condition expression has to be that i
     is less than array length minus 1 b/c we don't want to include last element
     of array (and the index num of the last element is array.length -1)
   push parameter array values (using i) into new, empty array
   return new array (newArray) from function after loop ends
  */

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

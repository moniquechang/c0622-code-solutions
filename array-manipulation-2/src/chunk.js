/* exported chunk */

/* function declaration with parameter: array (an array) and size (# of items of array to return)
   variable declaration for final array to return (is empty in beginning)
   for loop where i is indexes of parameter array and i will increment by "size" everytime
   need to use slice() to cut part of the array starting from the beginning
     (amount of items to cut is according to size parameter) and store this
     array into another variable (chunkArr)
   need to push this array (chunkArr) into the final array variable
   need to make the chunkArr empty before the start of each iteration
   return final array at the end of the loop
*/

function chunk(array, size) {
  var finalArr = [];
  for (var i = 0; i < array.length; i += size) {
    var chunkArr = array.slice(i, i + size);
    finalArr.push(chunkArr);
    chunkArr = [];
  }
  return finalArr;
}

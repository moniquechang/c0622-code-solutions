/* exported unique */

/* need a new variable to return at end of function (is empty array at first)
   loop through parameter array
   check to see if new variable array already includes the value at each index
   if not, push the index into new variable array
   return the new variable array at end of function
*/

function unique(array) {
  var finalArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!finalArr.includes(array[i])) {
      finalArr.push(array[i]);
    }
  }
  return finalArr;
}

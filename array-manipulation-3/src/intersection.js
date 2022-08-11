/* exported intersection */

/* need a new variable that is an empty array to return at end
   loop through first array
   check to see if values of first array also exist in second array
   for values that exist in both arrays, push value from first array into new variable array
   return new variable array
*/

function intersection(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  return newArr;
}

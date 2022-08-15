/* exported union */

/* need a new variable that is an empty array to return at end
   loop through first array
   push all indexes from first array into new variable array
   loop through second array
   check to see if values in second array are also in first array
   if there are indexes that arent, push into new variable array
   return new variable array
*/

function union(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    newArr.push(first[i]);
  }
  for (var k = 0; k < second.length; k++) {
    if (!first.includes(second[k])) {
      newArr.push(second[k]);
    }
  }
  return newArr;
}

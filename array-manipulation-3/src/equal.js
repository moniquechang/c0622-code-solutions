/* exported equal */

/* need a guard clause to first check that the first and second arrays are the same length and
     return false if they are not (both arrays cannot equal each other if not same length)
   loop through arrays and check to see if values of both arrays at the same
     index equal each other
   if they don't equal, return false
   return true after loop ends b/c this means all values of both indexes equal each other
*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

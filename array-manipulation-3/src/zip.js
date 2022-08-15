/* exported zip */

/* need variable for final array to return (is empty at first) (finalArr)
   need to declare another variable that is an empty array to add indexes from
     first and second array and then push into the final array (newArr)
   loop through the indexes of first array and check if that same index exists in second array
   if index exists in both first and second arrays,
     push the index for the first and second array into the newArr variable
     push the newArr variable into the finalArr variable
     make newArr varaible an empty array again
   return the final array at end of loop
*/

function zip(first, second) {
  var finalArr = [];
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(second[i]) !== -1) {
      newArr.push(first[i], second[i]);
      finalArr.push(newArr);
      newArr = [];
    }
  }
  return finalArr;
}

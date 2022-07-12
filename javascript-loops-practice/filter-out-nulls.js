/* exported filterOutNulls */

/* purpose of function: take out null values of an array and create new array of values w/o nulls
function declaration with parameter: values (an array)
variable declaration of empty array
for loop (i = 0, i < values.length, i++)  (i is index numbers of values array)
check each value of value array to see if its not a null (use !== and if statement)
if not a null, can push to new array but if it is don't push
return newArray */

function filterOutNulls(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}

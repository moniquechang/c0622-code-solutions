/* exported filterOutStrings */

/* purpose of function: take out string values of an array and create new array of values w/o strings
function declaration with parameter: values (an array)
variable declaration of empty array
for loop (i = 0, i < values.length, i++)  (i is index numbers of values array)
check each value of value array to see if its not a string (use !== and if statement) (typeof() can be used)
if not a string, can push to new array but if it is don't push
return newArray */

function filterOutStrings(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}

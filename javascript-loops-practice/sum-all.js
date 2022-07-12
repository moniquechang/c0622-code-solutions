/* exported sumAll */

/* purpose of function: to add all numbers in an array and return the sum
function declaration with parameter: numbers (an array)
variable "sum" declaration and assign to initial value of 0
for loop with i as index numbers in numbers array (start at 0), conditional being i less than length of numbers array, i++ as final expression
add each number in array and assign to the variable sum (use += operator so new sum value can be reassigned to sum variable and by the end, the sum will be sum of all numbers
return sum after loop is done */

function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

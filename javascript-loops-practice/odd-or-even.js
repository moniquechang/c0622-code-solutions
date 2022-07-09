/* exported oddOrEven */

/* function purpose: evaluate numbers in an array to see if they are even or odd, then return new array indicating if numbers are even or odd
function declaration with parameter: numbers (an array of numbers)
variable declaration of empty array
for (i=0, i < numbers.length, i++) (i is index of numbers)
if numbers[i] % 2 === 0, then push "even" to empty array (if statement)
if not, then push "odd" to empty array (else statment)
return empty array */

function oddOrEven(numbers) {
  var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}

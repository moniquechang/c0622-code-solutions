/* exported addSuffixToAll */

/* purpose of function: add suffix to each string value in an array of strings (the parameter)
function declaration with paramteres: words (an array with strings) and suffix (a string containing a suffix)
variable declaration of a new, empty array
for loop (i=0, i < words.length, i++)  i is index numbers for words array
get each value in words array using index numbers(i) and concatenate with suffix (given in parameter)
push new concatenated string to new, empty array
return new array */

function addSuffixToAll(words, suffix) {
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    newArray.push(words[i] + suffix);
  }
  return newArray;
}

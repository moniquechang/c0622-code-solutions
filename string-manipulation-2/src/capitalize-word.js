/* exported capitalizeWord */

/* function declaration with parameter: word (a word as a string)
   variable declaration where first letter of word(parameter) (i.e word[0]) is
     uppercase (finalString)
   for loop where i is position/index of word(parameter)
     i starts at one b/c that is the index for the second letter of word
   make the letters of word (word [i]) lower case and concatenate with the variable
     holding the first letter of word that is uppercased (finalString)
   if statement for if the finalString is Javascript, to return JavaScript instead
   return finalString from function after loop ends
*/

function capitalizeWord(word) {
  var finalString = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    finalString += word[i].toLowerCase();
  }
  if (finalString === 'Javascript') {
    return 'JavaScript';
  }
  return finalString;
}

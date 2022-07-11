/* exported reverseWord */

/* function declration with parameter: word (a string of one word)
   variable declration for new reversed word (leave blank: '')
   for loop with i as positon/index of letters in word
     i = position of last letter of word, i >= 0, i--
   get character of word in reverse order and concatenate to blank variable
     (use +=)
   return new word from function after loop ends
*/

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}

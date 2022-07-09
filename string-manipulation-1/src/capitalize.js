/* exported capitalize */

/* function declaration with parameter: word (a string)
   variable declaraton with value of first letter of string (word[0[)
     in uppercase(use .toUpperCase())
   for loop (i = 1, i < word.length, i++) (i is position/index of characters
     in string(parameter)
   make all characters of string (at i positions) lowercase (.toLowerCase())
     and concatenate together including the first character of string that is
     stored in variable (use += operator)
   return newly concatenated string from function
 */

function capitalize(word) {
  var final = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    final += word[i].toLowerCase();
  }
  return final;
}

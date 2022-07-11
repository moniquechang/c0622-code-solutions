/* exported isUpperCased */

/* function declaration with parameter: word (a string)
   if statement with condition checking if word strictly equals word.toUpperCase()
     (word that is uppercased using .toUpperCase() method)
   if condition is true, return true
   if not, return false (use else statement) */

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

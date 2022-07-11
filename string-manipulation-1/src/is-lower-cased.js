/* exported isLowerCased */

/* function declaration with parameter: word (a string)
   if statement with condition checking if word strictly equals word.toLowerCase()
     (word that is lowercased using .toLowerCase() method)
   if condition is true, return true
   if not, return false (use else statement) */

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

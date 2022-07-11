/* exported getWords */
/* function declaration with parameter: string (a string with 0 or more words)
   if statement with condition string === "" or string === ' '
   if condition is true, return an empty array [] from function
   else statement: use split() method to separate parameter string into seperate words
      (split on space ie. " ") and return from function
*/

function getWords(string) {
  if (string === '' || string === ' ') {
    return [];
  } else {
    return string.split(' ');
  }
}

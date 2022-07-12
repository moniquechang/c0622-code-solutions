/* exported truncate */

/* function declaration with parameters: length(length to cut string)
     and string (a string)
   variable declration for empty string (cutString)
   for loop where i is index num for string(parameter) (i = 0, i < length, i++)
     (i < length(parameter) so that the string can stop at the right position)
   if statement for strings where the string(parameter) length is shorter than the length(parameter)
   if the string length is shorter than the length parameter, return the string
     concatenated with "..."
   else statement where string[i] is concatenated and reassigned to cutString
   return cutString + '...' from function after loop ends
*/

function truncate(length, string) {
  var cutString = '';
  for (var i = 0; i < length; i++) {
    if (string.length < length) {
      return string + '...';
    } else {
      cutString += string[i];
    }
  }
  return cutString + '...';
}

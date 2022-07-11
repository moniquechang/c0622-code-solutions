/* exported toObject */

/* function declaration with parameter: keyValuePair (an array with two values:
     first element is object property name and second element is object property value)
   variable declaration and assign empty object (object)
   declare that first element of parameter array (index 0) is object property name
     and that second element of parameter array (index 1) is object property value,
     using bracket notation
   return object from function
*/

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

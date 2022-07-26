/* exported invert */

/* function declaration with parameter: source(an object)
   variable declaration for final object to return at the end (is empty at first)
   for the final object, want to assign property names using the property values
     and vice versa
     use bracket notation to assign property/value pairs to final object
   return final object at end of function
*/

function invert(source) {
  var finalObj = {};
  for (var properties in source) {
    finalObj[source[properties]] = properties;
  }
  return finalObj;
}

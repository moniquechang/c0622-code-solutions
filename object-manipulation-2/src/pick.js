/* exported pick */

/* function declaration with parameter: source(an object) and keys (array of strings)
   variable declaration for final object to return at end (is empty at first)
   if the strings in the keys array match the property names of the source object,
     add the property/value pair into the final array
   need to not include properties with undefined values
   return final array from the funtion after iterating through all items in keys array
*/

function pick(source, keys) {
  var finalObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var properties in source) {
      if (keys[i] === properties) {
        finalObj[properties] = source[properties];
      }
      if (source[keys[i]] === undefined) {
        delete finalObj[keys[i]];
      }
    }
  }
  return finalObj;
}

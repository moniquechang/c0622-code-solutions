/* exported omit */

/*  function declaration with parameter: source (an object) and keys (array of strings)
    variable declaration for final object to return (is empty at first)
    add all properties in source object into final object variable
    if keys values matches any property names of the final object, need to delete those
      properties from the final object
    return final object from the function after iterating through all items in keys array
*/

function omit(source, keys) {
  var finalObj = {};
  Object.assign(finalObj, source);
  for (var i = 0; i < keys.length; i++) {
    for (var properties in source) {
      if (keys[i] === properties) {
        delete finalObj[keys[i]];
      }
    }
  }
  return finalObj;
}

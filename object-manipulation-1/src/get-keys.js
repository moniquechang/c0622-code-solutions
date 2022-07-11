/* exported getKeys */

/* function declration with parameter: object (an object)
   variable declration assigning empty array (properties)
   for in loop (var key in object) to push object property names (aka key) into
     empty array
   return array from function after loop ends
*/

function getKeys(object) {
  var properties = [];
  for (var key in object) {
    properties.push(key);
  }
  return properties;
}

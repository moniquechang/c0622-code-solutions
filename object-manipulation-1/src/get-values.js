/* exported getValues */

/* function declration with parameter: object (an object)
   variable declration assigning empty array (values)
   for in loop (var key in object) to push object property values (aka object[key])
     into empty array
   return array from function after loop ends
*/

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

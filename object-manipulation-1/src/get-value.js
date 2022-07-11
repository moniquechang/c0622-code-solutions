/* exported getValue */

/* function declaration with parameters: object(an object) and key(property name of object thats a string)
   return property value of key using bracket notation (object[key])
     (b/c key is variable and will be perceived to be string if using dot notation)
*/

function getValue(object, key) {
  return object[key];
}

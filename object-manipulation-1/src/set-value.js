/* exported setValue */

/* function declaration with parameters: object(an object), key(property name thats a string)
     and value (property value assigned with key)
   assign value to the key of object using bracket notation (object[key] = value)
     (b/c key will be perceived as a sting if we use dot notation)
*/

function setValue(object, key, value) {
  object[key] = value;
}

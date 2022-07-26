/* exported defaults */

/* function declaration with parameter: target (an object), source (an object)
   for properties in the source object, want to see if there are values of
     the properties in the target object (if properties of source also exist in the target object)
     (the target[property] will be undefined if property doesn't exist (b/c there would be no value))
   if there is no existing property, add the property/value pair from the source object
     to the target object
   not returning anything, just modifying target object.
*/

function defaults(target, source) {
  for (var properties in source) {
    if (target[properties] === undefined) {
      target[properties] = source[properties];
    }
  }
}

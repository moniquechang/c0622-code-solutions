/* exported invert */

function invert(source) {
  var finalObj = {};
  for (var properties in source) {
    finalObj[source[properties]] = properties;
  }
  return finalObj;
}

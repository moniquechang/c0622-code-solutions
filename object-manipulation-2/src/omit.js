/* exported omit */

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

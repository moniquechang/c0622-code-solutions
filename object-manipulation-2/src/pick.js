/* exported pick */

function pick(source, keys) {
  var finalObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var properties in source) {
      if (keys[i] === properties) {
        finalObj[keys[i]] = source[keys[i]];
      }
      if (source[keys[i]] === undefined) {
        delete finalObj[keys[i]];
      }
    }
  }
  return finalObj;
}

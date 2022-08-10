/* exported titleCase */

function titleCase(title) {
  var finalTitle = '';
  var newTitle = '';
  for (var i = 0; i < title.length; i++) {
    newTitle += title[i].toLowerCase();
  }
  var titleArr = newTitle.split(' ');
  for (var k = 0; k < titleArr.length; k++) {
    for (var m = 0; m < titleArr[k].length; m++) {
      if (m === 0) {
        finalTitle += titleArr[k][m].toUpperCase();
      } else if (m !== 0 && m !== (titleArr[k].length - 1)) {
        finalTitle += titleArr[k][m];
      } else if (m !== 0 && m === (titleArr[k].length - 1)) {
        var lastChar = titleArr[k][m] + ' ';
        finalTitle += lastChar;
      }

    }
  }
  return finalTitle.trim();
}

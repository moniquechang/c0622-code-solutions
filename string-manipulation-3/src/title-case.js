/* exported titleCase */

/*  need to declare a new empty string variable to return at the end (which will be
      the parameter title in APA title cased style) (finalTitle)
    need a new empty string variable to store the title string all lowercased (newTitle)
    loop through title parameter and make all characters lowercase and store into
      variable newTitle
    split the newTitle at space characters and store the result into a new variable (titleArr)
      (titleArr will be an array of strings of each, individual word of the title all lowercased)
    loop through the titleArr array and for each index (which is one word of the title) of the array,
    loop through each character
    (in for loop)
     IF the length of the index/word is 1 (a single letter word):
       make the character uppercased and add&assign to finalTitle variable along with a
       space character after the character
     ELSE IF the character is the first character of the index (the word) AND the length of the index/word
       is longer than three characters OR the character is the first character of the index (the word)
       AND the index is the first index of the titleArr (first word of title):
         make the character uppercase and add&assign to the finalTitle variable
     ELSE IF the character is the first character of the index (the word) AND the length of the index/word
       is less or equal to three characters AND the index/word is a "minor word" (conjunctions,
       articles, prepositions):
         add&assign the character to the finalTItle variable (no uppercasing)
     ELSE IF the character is the first character of the index (the word) AND the length of the index/word
       is less or equal to three characters (but it is not a minor word):
         make the character uppercased and add&assign to finalTitle variable
     ELSE IF the character is a hyphen ('-'):
       add&assign the character to the finalTitle variable
       make the next character (after the hypen) uppercased and add&assign the character to the finalTitle variable
       increment the variable that corresponds to each character index (per word index) in the for loop
         so that the loop moves on to the index for the character after the one that was just added to the finalTitle
     ELSE IF the character is a colon (':'):
       add&assign the chavracter to the finalTitle variable along with a space character after the character
       increment the variable that corresponds to each word index (of the titleArr) in the for loop so that
         the loop moves on to the next word of titleArr
       make the first character of the next word uppercase and add&assign to finalTitle variable
       change the variable that corresponds to each character index (per word index) in the for loop
         so that the loop moves on to the index for the character after the one that was just added to the finalTitle
     ELSE IF the character is not the first character of the index (the word) AND the character is not
       the last character of the index (the word):
         add&assign the character to the finalTItle variable (no uppercasing)
     ELSE IF the character is the last character of the index (the word):
       add&assign the character to finalTitle variable along with a space character after the character

    (outside of for loop)
    IF the finalTitle includes the word "Api":
      replace 'Api" to "API"
      return the finalTitle with trim() applied to remove any space characters in the front and end of string
    IF the finalTitle includes the word "Javascript":
      replace 'Javascript' to 'JavaScript'
      return the finalTitle with trim() applied to remove any space characters in the front and end of string

    return the finalTitle with trim() applied to remove any space characters in the front and end of string
      (if none of the two if statements above apply)
*/

function titleCase(title) {
  var finalTitle = '';
  var newTitle = '';
  for (var i = 0; i < title.length; i++) {
    newTitle += title[i].toLowerCase();
  }
  var titleArr = newTitle.split(' ');
  for (var k = 0; k < titleArr.length; k++) {
    for (var m = 0; m < titleArr[k].length; m++) {
      if (titleArr[k].length === 1) {
        var singleCharWord = titleArr[k][m].toUpperCase() + ' ';
        finalTitle += singleCharWord;
      } else if ((m === 0 && titleArr[k].length > 3) || (m === 0 && k === 0)) {
        finalTitle += titleArr[k][m].toUpperCase();
      } else if (m === 0 && titleArr[k].length <= 3 && (titleArr[k] === 'and' ||
        titleArr[k] === 'or' || titleArr[k] === 'nor' || titleArr[k] === 'but' ||
        titleArr[k] === 'a' || titleArr[k] === 'an' || titleArr[k] === 'the' ||
        titleArr[k] === 'as' || titleArr[k] === 'at' || titleArr[k] === 'by' ||
        titleArr[k] === 'for' || titleArr[k] === 'in' || titleArr[k] === 'of' ||
        titleArr[k] === 'on' || titleArr[k] === 'per' || titleArr[k] === 'to')) {
        finalTitle += titleArr[k][m];
      } else if (m === 0 && titleArr[k].length <= 3) {
        finalTitle += titleArr[k][m].toUpperCase();
      } else if (titleArr[k][m] === '-') {
        finalTitle += titleArr[k][m];
        finalTitle += titleArr[k][m + 1].toUpperCase();
        m += 1;
      } else if (titleArr[k][m] === ':') {
        var colonChar = titleArr[k][m] + ' ';
        finalTitle += colonChar;
        k += 1;
        finalTitle += titleArr[k][0].toUpperCase();
        m = 0;
      } else if (m !== 0 && m !== (titleArr[k].length - 1)) {
        finalTitle += titleArr[k][m];
      } else if (m === (titleArr[k].length - 1)) {
        var lastChar = titleArr[k][m] + ' ';
        finalTitle += lastChar;
      }
    }
  }
  if (finalTitle.includes('Api')) {
    return finalTitle.replace('Api', 'API').trim();
  }
  if (finalTitle.includes('Javascript')) {
    return finalTitle.replace('Javascript', 'JavaScript').trim();
  }
  return finalTitle.trim();
}

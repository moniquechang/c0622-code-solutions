module.exports = function () {
  const data = require('./data.json');
  const notes = data.notes;

  for (const keys in notes) {
    console.log(`${keys}:`, notes[keys]);
  }
};

module.exports = function () {
  const fs = require('fs');
  const data = require('./data.json');
  const notes = data.notes;

  delete notes[process.argv[3]];
  const newData = JSON.stringify(data, null, 2);

  fs.writeFile('data.json', newData, err => {
    if (err) throw err;
  });
};

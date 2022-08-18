module.exports = function create() {
  const fs = require('fs');
  const data = require('./data.json');
  const notes = data.notes;

  notes[data.nextId] = process.argv[3];
  data.nextId++;
  const newData = JSON.stringify(data, null, 2);

  fs.writeFile('data.json', newData, err => {
    if (err) throw err;
  });
};

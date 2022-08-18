const fs = require('fs');
let fileToCopy = process.argv[2];
const newCopiedFile = process.argv[3];

fs.readFile(fileToCopy, 'utf8', (err, data) => {
  if (err) throw err;
  fileToCopy = data;
  fs.writeFile(newCopiedFile, fileToCopy, err => {
    if (err) throw err;
  });

});
